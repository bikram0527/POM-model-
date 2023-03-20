$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddNewContacts.feature");
formatter.feature({
  "line": 2,
  "name": "contact Page Test of CRM",
  "description": "",
  "id": "contact-page-test-of-crm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Adding new contacts in FreeCRM",
  "description": "",
  "id": "contact-page-test-of-crm;adding-new-contacts-in-freecrm",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "verify homepage userlabel and image",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User mouse hower to new contacts",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "verify new contacts page is open",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user add new contacts \"\u003cfirstname\u003e\", \"\u003clastname\u003e\", \"\u003cposition\u003e\" and \"\u003cdepartment\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "contact-page-test-of-crm;adding-new-contacts-in-freecrm;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "position",
        "depatment"
      ],
      "line": 12,
      "id": "contact-page-test-of-crm;adding-new-contacts-in-freecrm;;1"
    },
    {
      "cells": [
        "raj",
        "kumar",
        "developer",
        "Development"
      ],
      "line": 13,
      "id": "contact-page-test-of-crm;adding-new-contacts-in-freecrm;;2"
    },
    {
      "cells": [
        "ram",
        "sarohi",
        "tester",
        "Testing"
      ],
      "line": 14,
      "id": "contact-page-test-of-crm;adding-new-contacts-in-freecrm;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 975600,
  "status": "passed"
});
formatter.before({
  "duration": 14323954900,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Adding new contacts in FreeCRM",
  "description": "",
  "id": "contact-page-test-of-crm;adding-new-contacts-in-freecrm;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "verify homepage userlabel and image",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User mouse hower to new contacts",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "verify new contacts page is open",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user add new contacts \"raj\", \"kumar\", \"developer\" and \"\u003cdepartment\u003e\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ContactPageStepDefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 322115500,
  "status": "passed"
});
formatter.match({
  "location": "ContactPageStepDefination.verify_homepage_userlabel_and_image()"
});
formatter.result({
  "duration": 437462300,
  "status": "passed"
});
formatter.match({
  "location": "ContactPageStepDefination.user_mouse_hower_to_new_contacts()"
});
formatter.result({
  "duration": 5976054700,
  "status": "passed"
});
formatter.match({
  "location": "ContactPageStepDefination.verify_new_contacts_page_is_open()"
});
formatter.result({
  "duration": 28652400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "raj",
      "offset": 23
    },
    {
      "val": "kumar",
      "offset": 30
    },
    {
      "val": "developer",
      "offset": 39
    },
    {
      "val": "\u003cdepartment\u003e",
      "offset": 55
    }
  ],
  "location": "ContactPageStepDefination.user_add_new_contacts_and(String,String,String,String)"
});
formatter.result({
  "duration": 1372160300,
  "status": "passed"
});
formatter.after({
  "duration": 1891895700,
  "status": "passed"
});
formatter.after({
  "duration": 74700,
  "status": "passed"
});
formatter.before({
  "duration": 963300,
  "status": "passed"
});
formatter.before({
  "duration": 11903055800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Adding new contacts in FreeCRM",
  "description": "",
  "id": "contact-page-test-of-crm;adding-new-contacts-in-freecrm;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "verify homepage userlabel and image",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User mouse hower to new contacts",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "verify new contacts page is open",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user add new contacts \"ram\", \"sarohi\", \"tester\" and \"\u003cdepartment\u003e\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ContactPageStepDefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 47000,
  "status": "passed"
});
formatter.match({
  "location": "ContactPageStepDefination.verify_homepage_userlabel_and_image()"
});
formatter.result({
  "duration": 12756087100,
  "status": "passed"
});
formatter.match({
  "location": "ContactPageStepDefination.user_mouse_hower_to_new_contacts()"
});
formatter.result({
  "duration": 3332227300,
  "error_message": "org.openqa.selenium.interactions.MoveTargetOutOfBoundsException: (-8, 159) is out of bounds of viewport width (1696) and height (834)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027UNKNOWN-\u0027, ip: \u002710.0.0.178\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 111.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20230309232128, moz:geckodriverVersion: 0.31.0, moz:headless: false, moz:platformVersion: 10.0, moz:processID: 18072, moz:profile: C:\\Users\\prabh\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, moz:windowless: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 7aeefa46-4b10-4362-ad11-bdd35eb30289\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\r\n\tat com.qa.pages.HomePage.addcontact(HomePage.java:52)\r\n\tat StepDefinations.ContactPageStepDefination.user_mouse_hower_to_new_contacts(ContactPageStepDefination.java:54)\r\n\tat ✽.When User mouse hower to new contacts(AddNewContacts.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ContactPageStepDefination.verify_new_contacts_page_is_open()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ram",
      "offset": 23
    },
    {
      "val": "sarohi",
      "offset": 30
    },
    {
      "val": "tester",
      "offset": 40
    },
    {
      "val": "\u003cdepartment\u003e",
      "offset": 53
    }
  ],
  "location": "ContactPageStepDefination.user_add_new_contacts_and(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1856606100,
  "status": "passed"
});
formatter.after({
  "duration": 37800,
  "status": "passed"
});
formatter.uri("HomePage.feature");
formatter.feature({
  "line": 2,
  "name": "Home Page Test of Free CRM",
  "description": "",
  "id": "home-page-test-of-free-crm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.before({
  "duration": 590000,
  "status": "passed"
});
formatter.before({
  "duration": 12978681600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Check the Username label on Home page",
  "description": "",
  "id": "home-page-test-of-free-crm;check-the-username-label-on-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "verify home page username",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "verify home page image",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 14951092700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefination.verify_home_page_username()"
});
formatter.result({
  "duration": 634103600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefination.verify_home_page_image()"
});
formatter.result({
  "duration": 123776700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 3663290200,
  "status": "passed"
});
formatter.after({
  "duration": 52600,
  "status": "passed"
});
formatter.after({
  "duration": 40100,
  "status": "passed"
});
formatter.uri("LoginPage.feature");
formatter.feature({
  "line": 2,
  "name": "Title of your feature",
  "description": "",
  "id": "title-of-your-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Login FreeCRM site with wrong username and password",
  "description": "",
  "id": "title-of-your-feature;login-freecrm-site-with-wrong-username-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "title of login page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters wrong \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user get error for invalid request",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "title-of-your-feature;login-freecrm-site-with-wrong-username-and-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 15,
      "id": "title-of-your-feature;login-freecrm-site-with-wrong-username-and-password;;1"
    },
    {
      "cells": [
        "Bikram",
        "ggghhg"
      ],
      "line": 16,
      "id": "title-of-your-feature;login-freecrm-site-with-wrong-username-and-password;;2"
    },
    {
      "cells": [
        "",
        "aabbgd"
      ],
      "line": 17,
      "id": "title-of-your-feature;login-freecrm-site-with-wrong-username-and-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 993000,
  "status": "passed"
});
formatter.before({
  "duration": 13679338000,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login FreeCRM site with wrong username and password",
  "description": "",
  "id": "title-of-your-feature;login-freecrm-site-with-wrong-username-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "title of login page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters wrong \"Bikram\" and \"ggghhg\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user get error for invalid request",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepDefination.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 14502766500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefination.title_of_login_page()"
});
formatter.result({
  "duration": 9853900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bikram",
      "offset": 19
    },
    {
      "val": "ggghhg",
      "offset": 32
    }
  ],
  "location": "LoginPageStepDefination.user_enters_wrong_and(String,String)"
});
formatter.result({
  "duration": 207885900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 239101900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefination.user_get_error_for_invalid_request()"
});
formatter.result({
  "duration": 384159000,
  "status": "passed"
});
formatter.after({
  "duration": 2607265600,
  "status": "passed"
});
formatter.after({
  "duration": 46100,
  "status": "passed"
});
formatter.before({
  "duration": 1216300,
  "status": "passed"
});
formatter.before({
  "duration": 12928630100,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login FreeCRM site with wrong username and password",
  "description": "",
  "id": "title-of-your-feature;login-freecrm-site-with-wrong-username-and-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "title of login page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters wrong \"\" and \"aabbgd\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user get error for invalid request",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepDefination.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 16104803600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefination.title_of_login_page()"
});
formatter.result({
  "duration": 3071000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    },
    {
      "val": "aabbgd",
      "offset": 26
    }
  ],
  "location": "LoginPageStepDefination.user_enters_wrong_and(String,String)"
});
formatter.result({
  "duration": 170333200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 244285800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefination.user_get_error_for_invalid_request()"
});
formatter.result({
  "duration": 6755499100,
  "status": "passed"
});
formatter.after({
  "duration": 2572017700,
  "status": "passed"
});
formatter.after({
  "duration": 19300,
  "status": "passed"
});
formatter.before({
  "duration": 419400,
  "status": "passed"
});
formatter.before({
  "duration": 13239777900,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Login with correct username and password",
  "description": "",
  "id": "title-of-your-feature;login-with-correct-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "verify title of login page using assertion",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "verify user is on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepDefination.user_is_on_login_page()"
});
formatter.result({
  "duration": 13455037700,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefination.verify_title_of_login_page_using_assertion()"
});
formatter.result({
  "duration": 8012700,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefination.user_enters_username_and_password()"
});
formatter.result({
  "duration": 308848100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 242474500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefination.verify_user_is_on_homepage()"
});
formatter.result({
  "duration": 590500800,
  "status": "passed"
});
formatter.after({
  "duration": 2973528900,
  "status": "passed"
});
formatter.after({
  "duration": 71800,
  "status": "passed"
});
});