# GraalVM classes are not included in Android build (using native WebView instead)
# Suppress warnings for JVM-only script engine classes from survey-engine-kmp library
-dontwarn com.oracle.truffle.js.scriptengine.GraalJSScriptEngine
-dontwarn org.graalvm.polyglot.Context$Builder
-dontwarn org.graalvm.polyglot.Context
-dontwarn org.graalvm.polyglot.Engine
-dontwarn org.graalvm.polyglot.HostAccess
-dontwarn org.graalvm.polyglot.ResourceLimits$Builder
-dontwarn org.graalvm.polyglot.ResourceLimits

-dontwarn java.lang.**
-dontwarn javax.script.**


# -------------------- RETROFIT ---------------------------------
# Retrofit does reflection on generic parameters. InnerClasses is required to use Signature and
# EnclosingMethod is required to use InnerClasses.
-keepattributes Signature, InnerClasses, EnclosingMethod, *Annotation*

# Retrofit does reflection on method and parameter annotations.
-keepattributes RuntimeVisibleAnnotations, RuntimeVisibleParameterAnnotations

# Keep annotation default values (e.g., retrofit2.http.Field.encoded).
-keepattributes AnnotationDefault

# Retain service method parameters when optimizing.
-keepclassmembers,allowshrinking,allowobfuscation interface * {
    @retrofit2.http.* <methods>;
}

# Ignore annotation used for build tooling.
-dontwarn org.codehaus.mojo.animal_sniffer.IgnoreJRERequirement

# Ignore JSR 305 annotations for embedding nullability information.
-dontwarn javax.annotation.**

# Guarded by a NoClassDefFoundError try/catch and only used when on the classpath.
-dontwarn kotlin.Unit

# Top-level functions that can only be used by Kotlin.
-dontwarn retrofit2.KotlinExtensions
-dontwarn retrofit2.KotlinExtensions$*

# With R8 full mode, it sees no subtypes of Retrofit interfaces since they are created with a Proxy
# and replaces all potential values with null. Explicitly keeping the interfaces prevents this.
-if interface * { @retrofit2.http.* <methods>; }
-keep,allowobfuscation interface <1>

# Keep inherited services.
-if interface * { @retrofit2.http.* <methods>; }
-keep,allowobfuscation interface * extends <1>

# With R8 full mode generic signatures are stripped for classes that are not
# kept. Suspend functions are wrapped in continuations where the type argument
# is used.
-keep,allowobfuscation,allowshrinking class kotlin.coroutines.Continuation

# R8 full mode strips generic signatures from return types if not kept.
-if interface * { @retrofit2.http.* public *** *(...); }
-keep,allowoptimization,allowshrinking,allowobfuscation class <3>

# With R8 full mode generic signatures are stripped for classes that are not kept.
-keep,allowobfuscation,allowshrinking class retrofit2.Response

# ----------------- Jackson -----------------------
# Proguard configuration for Jackson 2.x
-keep class com.fasterxml.jackson.databind.ObjectMapper
-keep class com.fasterxml.jackson.databind.ObjectWriter {
    public ** writeValueAsString(**);
}
-keep class com.fasterxml.jackson.databind.node.ObjectNode
-keep class * {
     @com.fasterxml.jackson.annotation.JsonCreator *;
     @com.fasterxml.jackson.annotation.JsonProperty *;
}

-keepnames class com.fasterxml.jackson.** { *; }
-dontwarn com.fasterxml.jackson.databind.**
-keep class org.json.**
-keepclassmembers,includedescriptorclasses class org.json.** { *; }

# ----------------- reflection -------
-keep class kotlin.Metadata { *; }
-keep class kotlin.reflect.** { *; }

# ------------------ KEEP necessary App classes ----------
-keep class com.qlarr.app.api.** { *; }
-keep class com.qlarr.app.db.** { *; }
-keep class com.qlarr.app.ui.survey.NavigateRequest { *; }
-keep class com.qlarr.app.ui.survey.ApiNavigationOutput { *; }
-keep class com.qlarr.app.ui.survey.AutoSaveValues { *; }
-keep class com.qlarr.app.ui.survey.ResponseUploadFile { *; }
-keep class com.qlarr.app.ui.survey.NavigationListener { *; }

# -------------------SURVEY ENGINE
-keep class com.qlarr.surveyengine.** { *; }

-keep class com.qlarr.app.ui.survey.AudioRecordingService { *; }

-keep class com.google.android.gms.location.** { *; }

