;
(function () {
  System.register([], function (exports, module) {
    'use strict';

    return {
      execute: function execute() {
        const SURVEY_MODE = exports("S", {
          MIXED: "mixed",
          WEB: "web",
          OFFLINE: "offline"
        });
        const SURVEY_STATUS = exports("a", {
          ACTIVE: "active",
          DRAFT: "draft",
          CLOSED: "closed"
        });
        const NAVIGATION_MODE = exports("N", {
          ALL_IN_ONE: "all_in_one",
          GROUP_BY_GROUP: "group_by_group",
          QUESTION_BY_QUESTION: "question_by_question"
        });
      }
    };
  });
})();
//# sourceMappingURL=survey-legacy-CmPJYFAs.js.map
