package com.qlarr.app.business.survey

import android.content.Context
import com.qlarr.app.api.survey.PublishInfo
import com.qlarr.app.api.survey.ResponseCount
import com.qlarr.app.api.survey.Survey
import com.qlarr.app.api.survey.SurveyDesign
import com.qlarr.app.api.survey.SurveyService
import com.qlarr.app.api.survey.UploadResponseRequestData
import com.qlarr.app.business.guest.GuestSurveyRepository
import com.qlarr.app.db.ResponseDao
import com.qlarr.app.db.survey.PublishInfoEntity
import com.qlarr.app.db.survey.SurveyDao
import com.qlarr.app.db.survey.SurveyDataEntity
import com.qlarr.app.ui.common.FileUtils
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.flowOn
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.MultipartBody
import okhttp3.RequestBody.Companion.asRequestBody
import java.io.File
import java.net.HttpURLConnection
import java.time.LocalDateTime
import java.time.ZoneOffset

interface SurveyRepository {
    suspend fun getSurveyDbEntity(surveyId: String): SurveyDataEntity?

    fun getSurveyList(): Flow<List<SurveyData>>

    suspend fun shouldSync(): Boolean

    suspend fun getOfflineSurveyList(): List<SurveyData>

    suspend fun getOfflineSurvey(surveyId: String): SurveyData

    fun getSurveyFile(
        surveyId: String,
        resourceId: String,
    ): Flow<Result<DataStream>>

    suspend fun uploadSurveyResponseFile(
        surveyId: String,
        responseId: String,
        fileName: String,
        storedFileName: String,
        file: File,
    )

    suspend fun fileOnServer(
        surveyId: String,
        responseId: String,
        fileName: String,
    ): Boolean

    suspend fun uploadSurveyResponse(
        surveyId: String,
        responseId: String,
        uploadResponseRequestData: UploadResponseRequestData,
    ): Result<ResponseCount>

    suspend fun saveSurveyToDB(surveyData: SurveyData)

    suspend fun updateSurveyAfterCached(surveyData: SurveyData)

    suspend fun updateSurveyAfterSync(
        surveyId: String,
        responseCount: ResponseCount,
    ): SurveyData

    suspend fun surveyDesign(id: String): SurveyDesign

    suspend fun clearSurveyFiles()

    sealed class DataStream {
        class Chunk(
            val bytes: ByteArray,
        ) : DataStream()

        data object End : DataStream()
    }
}

class SurveyRepositoryImpl(
    private val service: SurveyService,
    private val surveyDao: SurveyDao,
    private val context: Context,
    private val responseDao: ResponseDao,
    private val sessionManager: SessionManager,
    private val guestSurveyRepository: GuestSurveyRepository,
) : SurveyRepository {
    override suspend fun getSurveyDbEntity(surveyId: String): SurveyDataEntity? = surveyDao.getSurveyDataById(surveyId)

    override fun getSurveyList(): Flow<List<SurveyData>> {
        return flow {
            val offlineSurveys = getOfflineSurveyList()
            emit(offlineSurveys)
            val list =
                if (sessionManager.isGuest()) guestSurveyRepository.getGuestSurveyList() else service.getSurveyList()
            val surveyList =
                list.map { survey ->
                    val offlineSurvey = offlineSurveys.firstOrNull { it.id == survey.id }
                    return@map if (survey.publishInfo?.requiresUpdates(offlineSurvey?.publishInfo) == true) {
                        getSurveyDesign(survey, offlineSurvey)
                    } else {
                        offlineSurvey ?: getSurveyDesign(survey, null)
                    }
                }
            offlineSurveys
                .filter { offlineSurvey -> !surveyList.any { it.id == offlineSurvey.id } }
                .forEach {
                    deleteSurvey(it.id)
                }
            emit(surveyList)
        }.flowOn(Dispatchers.IO)
    }

    override suspend fun shouldSync(): Boolean =
        !sessionManager.isGuest() &&
            getOfflineSurveyList().any {
                it
                    .localUnsyncedResponsesCount > 0
            }

    private suspend fun deleteSurvey(surveyId: String) {
        FileUtils.deleteSurveyDirectory(context, surveyId)
        responseDao.deleteBySurveyId(surveyId)
        surveyDao.deleteById(surveyId)
    }

    private suspend fun getSurveyDesign(
        survey: Survey,
        offlineSurvey: SurveyData?,
    ): SurveyData {
        val design =
            if (sessionManager.isGuest()) {
                guestSurveyRepository.getGuestSurveyDesign(survey.id)
            } else {
                service.getSurveyDesign(survey.id, PublishInfo())
            }
        val count =
            responseDao.countByUserAndSurvey(
                surveyId = survey.id,
            )
        val responseCount = responseDao.countCompleteByUserAndSurvey(survey.id)
        val unsyncedCount = responseDao.countUnsyncedResponses(survey.id)
        val newVersionAvailable =
            offlineSurvey
                ?.publishInfo
                ?.toPublishInfo()
                ?.let { it != design.publishInfo } != false
        val surveyData =
            SurveyData.fromSurveyAndDesign(
                survey = survey,
                env = sessionManager.env()!!,
                currentPublishInfo = offlineSurvey?.publishInfo?.toPublishInfo() ?: PublishInfo(),
                newVersionAvailable = newVersionAvailable,
                responsesCount = count,
                completeResponsesCount = responseCount,
                unsyncedCount = unsyncedCount,
                cachedDesign = offlineSurvey?.cachedDesign == true,
                cachedAllFiles = offlineSurvey?.cachedAllFiles == true,
                lastSync = offlineSurvey?.lastSync,
            )

        saveSurveyToDB(
            surveyData = surveyData,
        )
        return surveyData
    }

    override suspend fun getOfflineSurveyList(): List<SurveyData> {
        surveyDao.getAllSurveyData().let { list ->
            return list.map {
                it.toSurveyData(
                    responseDao.countByUserAndSurvey(it.id),
                    responseDao.countCompleteByUserAndSurvey(it.id),
                    responseDao.countUnsyncedResponses(it.id),
                )
            }
        }
    }

    override suspend fun getOfflineSurvey(surveyId: String): SurveyData {
        val survey = surveyDao.getSurveyDataById(surveyId)!!
        return survey.toSurveyData(
            responseDao.countByUserAndSurvey(survey.id),
            responseDao.countCompleteByUserAndSurvey(survey.id),
            responseDao.countUnsyncedResponses(survey.id),
        )
    }

    override suspend fun saveSurveyToDB(surveyData: SurveyData) {
        surveyDao.insert(surveyData.toSurveyDataEntity())
    }

    override suspend fun updateSurveyAfterCached(surveyData: SurveyData) {
        surveyDao.update(surveyData.toSurveyDataEntity())
    }

    override suspend fun updateSurveyAfterSync(
        surveyId: String,
        responseCount: ResponseCount,
    ): SurveyData {
        surveyDao.getSurveyDataById(surveyId)?.let { surveyDataEntity ->
            surveyDao.update(surveyDataEntity.updateAfterSync(responseCount))
        } ?: throw IllegalStateException("Survey not found with id: $surveyId")
        return getOfflineSurvey(surveyId)
    }

    override suspend fun surveyDesign(id: String): SurveyDesign =
        if (sessionManager.isGuest()) {
            guestSurveyRepository.getGuestSurveyDesign(id)
        } else {
            service.getSurveyDesign(id)
        }

    override suspend fun clearSurveyFiles() {
        surveyDao.getAllSurveyData().forEach {
            FileUtils.deleteSurveyDirectory(context, it.id)
        }
    }

    override fun getSurveyFile(
        surveyId: String,
        resourceId: String,
    ): Flow<Result<SurveyRepository.DataStream>> =
        flow {
            if (sessionManager.isGuest()) {
                guestSurveyRepository.getSurveyFile(surveyId, resourceId)
            } else {
                service.getSurveyFile(surveyId, resourceId).byteStream()
            }.use { inputStream ->
                val buffer = ByteArray(DEFAULT_BUFFER_SIZE)
                var bytes = inputStream.read(buffer)
                while (bytes >= 0) {
                    emit(
                        Result.success(
                            SurveyRepository.DataStream.Chunk(
                                buffer.copyOfRange(
                                    0,
                                    bytes,
                                ),
                            ),
                        ),
                    )
                    bytes = inputStream.read(buffer)
                }
                emit(Result.success(SurveyRepository.DataStream.End))
            }
        }.catch {
            emit(Result.failure(it))
        }.flowOn(Dispatchers.IO)

    override suspend fun uploadSurveyResponseFile(
        surveyId: String,
        responseId: String,
        fileName: String,
        storedFileName: String,
        file: File,
    ) {
        val fileType =
            HttpURLConnection.guessContentTypeFromName(fileName) ?: "application/octet-stream"

        val multipartBody =
            MultipartBody.Part.createFormData(
                "file",
                fileName,
                file.asRequestBody(fileType.toMediaType()),
            )

        service.uploadSurveyFile(surveyId, responseId, storedFileName, multipartBody)
    }

    override suspend fun fileOnServer(
        surveyId: String,
        responseId: String,
        fileName: String,
    ): Boolean = service.fileExists(surveyId, responseId, fileName)

    override suspend fun uploadSurveyResponse(
        surveyId: String,
        responseId: String,
        uploadResponseRequestData: UploadResponseRequestData,
    ): Result<ResponseCount> =
        try {
            Result.success(
                service.uploadSurveyResponse(
                    surveyId,
                    responseId,
                    uploadResponseRequestData,
                ),
            )
        } catch (e: Exception) {
            Result.failure(e)
        }

    private fun SurveyDataEntity.updateAfterSync(responseCount: ResponseCount): SurveyDataEntity =
        copy(
            id = id,
            totalResponsesCount = responseCount.completeResponseCount,
            syncedResponseCount = this.syncedResponseCount + 1,
            lastSync = LocalDateTime.now(ZoneOffset.UTC),
        )

    private fun SurveyData.toSurveyDataEntity(): SurveyDataEntity =
        SurveyDataEntity(
            id = this.id,
            creationDate = this.creationDate,
            lastModified = this.lastModified,
            endDate = this.endDate,
            startDate = this.startDate,
            name = this.name,
            status = this.status,
            usage = this.usage,
            quota = this.surveyQuota,
            publishInfoEntity = this.publishInfo.toPublishInfoEntity(),
            newVersionAvailable = this.newVersionAvailable,
            totalResponsesCount = this.totalResponseCount,
            syncedResponseCount = this.syncedResponseCount,
            description = this.description,
            imageUrl = this.imageUrl,
            cachedDesign = this.cachedDesign,
            cachedAllFiles = this.cachedAllFiles,
        )
}

fun PublishInfo.toPublishInfoEntity(): PublishInfoEntity = PublishInfoEntity(version, subVersion, lastModified)

fun PublishInfoEntity.toPublishInfo(): PublishInfo = PublishInfo(version, subVersion, timeLastModified)

fun PublishInfo.toPublishInfo(): PublishInfo = PublishInfo(version, subVersion, lastModified)
