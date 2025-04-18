const serverDateTimeToLocalDateTime = (serverDate) => {
  const dateInUTC = new Date(serverDate);
  return new Date(
    dateInUTC.getTime() - dateInUTC.getTimezoneOffset() * 60 * 1e3
  );
};
const localDateToServerDateTime = (date) => {
  const adjustedDate = new Date(
    date.getTime() - date.getTimezoneOffset() * 60 * 1e3
  );
  return adjustedDate.toISOString().split(".")[0].replace("T", " ");
};
const formatlocalDateTime = (date) => {
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const seconds = ("0" + date.getSeconds()).slice(-2);
  return "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hours, ":").concat(minutes, ":").concat(seconds);
};
export {
  formatlocalDateTime as f,
  localDateToServerDateTime as l,
  serverDateTimeToLocalDateTime as s
};
//# sourceMappingURL=DateUtils-D9XCaXee.js.map
