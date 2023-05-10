$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("KnowledgewareSite.feature");
formatter.feature({
  "line": 2,
  "name": "This feature to test resgistration process",
  "description": "",
  "id": "this-feature-to-test-resgistration-process",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@KnowledgewareFeatures"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Page one valid test for correct user data",
  "description": "",
  "id": "this-feature-to-test-resgistration-process;page-one-valid-test-for-correct-user-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@pageOne"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "As a user, I want to open \"chrome\" browser",
  "keyword": "* "
});
formatter.step({
  "line": 7,
  "name": "As a user, I want to enter \"https://www.knowledgeware.in/final.html\" url",
  "keyword": "* "
});
formatter.step({
  "line": 8,
  "name": "As a user, I want to validate page tittle \"Register page\"",
  "keyword": "* "
});
formatter.step({
  "line": 9,
  "name": "As a user, I want to enter \"surekha\" using locator type \"name\" with locator value \"name\"",
  "keyword": "* "
});
formatter.step({
  "line": 10,
  "name": "As a user, I want to enter \"surekha@123\" using locator type \"name\" with locator value \"password\"",
  "keyword": "* "
});
formatter.step({
  "line": 11,
  "name": "As a user, I want to enter \"surekha@123\" using locator type \"name\" with locator value \"confirmpassword\"",
  "keyword": "* "
});
formatter.step({
  "line": 12,
  "name": "As a user, I want to click using locator type \"linktext\" with locator value \"LOGIN\"",
  "keyword": "* "
});
formatter.step({
  "line": 13,
  "name": "As a user, I want to validate page tittle \"Reg2\"",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 27
    }
  ],
  "location": "CommanStepDefination.as_a_user_I_want_to_open_browser(String)"
});
formatter.result({
  "duration": 5102675100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.knowledgeware.in/final.html",
      "offset": 28
    }
  ],
  "location": "CommanStepDefination.as_a_user_I_want_to_enter_url(String)"
});
formatter.result({
  "duration": 3156026800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register page",
      "offset": 43
    }
  ],
  "location": "CommanStepDefination.as_a_user_I_want_to_validate_page_tittle(String)"
});
formatter.result({
  "duration": 20974400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "surekha",
      "offset": 28
    },
    {
      "val": "name",
      "offset": 57
    },
    {
      "val": "name",
      "offset": 83
    }
  ],
  "location": "CommanStepDefination.as_a_user_I_want_to_enter_using_locator_type_with_value(String,String,String)"
});
formatter.result({
  "duration": 150662500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "surekha@123",
      "offset": 28
    },
    {
      "val": "name",
      "offset": 61
    },
    {
      "val": "password",
      "offset": 87
    }
  ],
  "location": "CommanStepDefination.as_a_user_I_want_to_enter_using_locator_type_with_value(String,String,String)"
});
formatter.result({
  "duration": 128751100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "surekha@123",
      "offset": 28
    },
    {
      "val": "name",
      "offset": 61
    },
    {
      "val": "confirmpassword",
      "offset": 87
    }
  ],
  "location": "CommanStepDefination.as_a_user_I_want_to_enter_using_locator_type_with_value(String,String,String)"
});
formatter.result({
  "duration": 139057400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "linktext",
      "offset": 47
    },
    {
      "val": "LOGIN",
      "offset": 77
    }
  ],
  "location": "CommanStepDefination.as_a_user_I_want_to_click_using_locator_type_with_locator_value(String,String)"
});
formatter.result({
  "duration": 578796700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Reg2",
      "offset": 43
    }
  ],
  "location": "CommanStepDefination.as_a_user_I_want_to_validate_page_tittle(String)"
});
formatter.result({
  "duration": 10873500,
  "status": "passed"
});
formatter.uri("nursingDemo.feature");
formatter.feature({
  "line": 2,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Page one valid test for correct user data",
  "description": "",
  "id": "title-of-your-feature;page-one-valid-test-for-correct-user-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "As a user, I want to open \"chrome\" browser",
  "keyword": "* "
});
formatter.step({
  "line": 9,
  "name": "As a user, I want to enter \"https://nursingdemo.medifox.in.net/Account/Login\" url",
  "keyword": "* "
});
formatter.step({
  "line": 10,
  "name": "As a user, I want to validate page tittle \"Login\"",
  "keyword": "* "
});
formatter.step({
  "line": 11,
  "name": "As a user, I want to enter \"admin\" using locator type \"name\" with locator value \"Username\"",
  "keyword": "* "
});
formatter.step({
  "line": 12,
  "name": "As a user, I want to enter \"admin\" using locator type \"id\" with locator value \"Password\"",
  "keyword": "* "
});
formatter.step({
  "line": 13,
  "name": "As a user, I want to click using locator type \"xpath\" with locator value \"//input[@value\u003d\u0027Login\u0027]\"",
  "keyword": "* "
});
formatter.step({
  "line": 14,
  "name": "As a user, I want to validate page tittle \"MAA LALITA HOSPITAL \u0026 RESEARCH CENTRE - Dashboard\"",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 27
    }
  ],
  "location": "CommanStepDefination.as_a_user_I_want_to_open_browser(String)"
});
formatter.result({
  "duration": 2241762100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://nursingdemo.medifox.in.net/Account/Login",
      "offset": 28
    }
  ],
  "location": "CommanStepDefination.as_a_user_I_want_to_enter_url(String)"
});
formatter.result({
  "duration": 6169250900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 43
    }
  ],
  "location": "CommanStepDefination.as_a_user_I_want_to_validate_page_tittle(String)"
});
formatter.result({
  "duration": 13469400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 28
    },
    {
      "val": "name",
      "offset": 55
    },
    {
      "val": "Username",
      "offset": 81
    }
  ],
  "location": "CommanStepDefination.as_a_user_I_want_to_enter_using_locator_type_with_value(String,String,String)"
});
formatter.result({
  "duration": 205967800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 28
    },
    {
      "val": "id",
      "offset": 55
    },
    {
      "val": "Password",
      "offset": 79
    }
  ],
  "location": "CommanStepDefination.as_a_user_I_want_to_enter_using_locator_type_with_value(String,String,String)"
});
formatter.result({
  "duration": 129786900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xpath",
      "offset": 47
    },
    {
      "val": "//input[@value\u003d\u0027Login\u0027]",
      "offset": 74
    }
  ],
  "location": "CommanStepDefination.as_a_user_I_want_to_click_using_locator_type_with_locator_value(String,String)"
});
formatter.result({
  "duration": 3410019100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MAA LALITA HOSPITAL \u0026 RESEARCH CENTRE - Dashboard",
      "offset": 43
    }
  ],
  "location": "CommanStepDefination.as_a_user_I_want_to_validate_page_tittle(String)"
});
formatter.result({
  "duration": 6904900,
  "status": "passed"
});
});