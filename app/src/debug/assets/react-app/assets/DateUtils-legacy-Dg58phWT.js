;
(function () {
  System.register([], function (exports, module) {
    'use strict';

    return {
      execute: function execute() {
        const serverDateTimeToLocalDateTime = exports("s", serverDate => {
          const dateInUTC = new Date(serverDate);
          return new Date(dateInUTC.getTime() - dateInUTC.getTimezoneOffset() * 60 * 1000);
        });
        const localDateToServerDateTime = exports("l", date => {
          const adjustedDate = new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000);
          return adjustedDate.toISOString().split(".")[0].replace("T", " ");
        });
        const formatlocalDateTime = exports("f", date => {
          const year = date.getFullYear();
          const month = ("0" + (date.getMonth() + 1)).slice(-2);
          const day = ("0" + date.getDate()).slice(-2);
          const hours = ("0" + date.getHours()).slice(-2);
          const minutes = ("0" + date.getMinutes()).slice(-2);
          const seconds = ("0" + date.getSeconds()).slice(-2);
          return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        });
      }
    };
  });
})();
//# sourceMappingURL=DateUtils-legacy-Dg58phWT.js.map
