$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Automation_Login.feature");
formatter.feature({
  "line": 3,
  "name": "Automation Login Feature",
  "description": "",
  "id": "automation-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 6,
      "value": "#(1)----------------Simple data driven - without examples-----------*"
    },
    {
      "line": 8,
      "value": "#Scenario: Automation Login Test Scenario"
    },
    {
      "line": 9,
      "value": "#Given user is already on login page"
    },
    {
      "line": 10,
      "value": "#When title is \"Login - My Store\""
    },
    {
      "line": 11,
      "value": "#Then user enters \"kpatel@thebrick.com\" and \"2098found\""
    },
    {
      "line": 12,
      "value": "#Then user clicks on signIn button"
    },
    {
      "line": 13,
      "value": "#Then user is on home page"
    },
    {
      "line": 14,
      "value": "#Then user quit"
    },
    {
      "line": 16,
      "value": "#(2)----------------Simple data driven - with examples + Scenario Outline-----------*"
    }
  ],
  "line": 18,
  "name": "Automation Login Test Scenario",
  "description": "",
  "id": "automation-login-feature;automation-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "title is \"Login - My Store\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user clicks on signIn button",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user quit",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "automation-login-feature;automation-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 27,
      "id": "automation-login-feature;automation-login-test-scenario;;1"
    },
    {
      "cells": [
        "kpatel@thebrick.com",
        "2098found"
      ],
      "line": 28,
      "id": "automation-login-feature;automation-login-test-scenario;;2"
    },
    {
      "cells": [
        "rj123@gmail.com",
        "rj123"
      ],
      "line": 29,
      "id": "automation-login-feature;automation-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8660307422,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Automation Login Test Scenario",
  "description": "",
  "id": "automation-login-feature;automation-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "title is \"Login - My Store\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user enters \"kpatel@thebrick.com\" and \"2098found\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user clicks on signIn button",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user quit",
  "keyword": "Then "
});
formatter.match({
  "location": "AutomationLoginStepDefinations.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 8008900516,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login - My Store",
      "offset": 10
    }
  ],
  "location": "AutomationLoginStepDefinations.title_is(String)"
});
formatter.result({
  "duration": 17755876,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kpatel@thebrick.com",
      "offset": 13
    },
    {
      "val": "2098found",
      "offset": 39
    }
  ],
  "location": "AutomationLoginStepDefinations.user_enters_and(String,String)"
});
formatter.result({
  "duration": 222916100,
  "status": "passed"
});
formatter.match({
  "location": "AutomationLoginStepDefinations.user_clicks_on_signIn_button()"
});
formatter.result({
  "duration": 2474379128,
  "status": "passed"
});
formatter.match({
  "location": "AutomationLoginStepDefinations.user_is_on_home_page()"
});
formatter.result({
  "duration": 21827540,
  "status": "passed"
});
formatter.match({
  "location": "AutomationLoginStepDefinations.user_quit()"
});
formatter.result({
  "duration": 839165842,
  "status": "passed"
});
formatter.after({
  "duration": 831482665,
  "status": "passed"
});
formatter.before({
  "duration": 7643988962,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Automation Login Test Scenario",
  "description": "",
  "id": "automation-login-feature;automation-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "title is \"Login - My Store\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user enters \"rj123@gmail.com\" and \"rj123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user clicks on signIn button",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user quit",
  "keyword": "Then "
});
formatter.match({
  "location": "AutomationLoginStepDefinations.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 6388463124,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login - My Store",
      "offset": 10
    }
  ],
  "location": "AutomationLoginStepDefinations.title_is(String)"
});
formatter.result({
  "duration": 6763528,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rj123@gmail.com",
      "offset": 13
    },
    {
      "val": "rj123",
      "offset": 35
    }
  ],
  "location": "AutomationLoginStepDefinations.user_enters_and(String,String)"
});
formatter.result({
  "duration": 210085888,
  "status": "passed"
});
formatter.match({
  "location": "AutomationLoginStepDefinations.user_clicks_on_signIn_button()"
});
formatter.result({
  "duration": 1951057766,
  "status": "passed"
});
formatter.match({
  "location": "AutomationLoginStepDefinations.user_is_on_home_page()"
});
formatter.result({
  "duration": 11693722,
  "status": "passed"
});
formatter.match({
  "location": "AutomationLoginStepDefinations.user_quit()"
});
formatter.result({
  "duration": 829282157,
  "status": "passed"
});
formatter.after({
  "duration": 815482738,
  "status": "passed"
});
formatter.uri("map.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Krupal PAtel"
    }
  ],
  "line": 4,
  "name": "Automation LoginMap Feature",
  "description": "",
  "id": "automation-loginmap-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.before({
  "duration": 11836553814,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Automation LoginMap Test Scenario",
  "description": "",
  "id": "automation-loginmap-feature;automation-loginmap-test-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@SmokeTest"
    },
    {
      "line": 7,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Mapuser is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Maptitle is \"Login - My Store\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Mapuser enters username and passsword",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13
    },
    {
      "cells": [
        "kpatel@thebrick.com",
        "2098found"
      ],
      "line": 14
    },
    {
      "cells": [
        "rj123@gmail.com",
        "rj123"
      ],
      "line": 15
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Mapuser quit",
  "keyword": "Then "
});
formatter.match({
  "location": "AutomationLoginMapstepDefinations.mapuser_is_already_on_login_page()"
});
formatter.result({
  "duration": 12494763730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login - My Store",
      "offset": 13
    }
  ],
  "location": "AutomationLoginMapstepDefinations.maptitle_is(String)"
});
formatter.result({
  "duration": 4742816,
  "status": "passed"
});
formatter.match({
  "location": "AutomationLoginMapstepDefinations.mapuser_enters_username_and_passsword(DataTable)"
});
formatter.result({
  "duration": 10892374038,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: Sign out\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027krupals-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:40:aec7:e058:b083%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 103.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20220729222726, moz:geckodriverVersion: 0.30.0, moz:headless: false, moz:platformVersion: 17.7.0, moz:processID: 16823, moz:profile: /var/folders/p8/fwvt8hpx36d..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, moz:windowless: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: f04ac45a-746e-4043-b199-4f36f166caf4\n*** Element info: {Using\u003dlink text, value\u003dSign out}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinations.AutomationLoginMapstepDefinations.mapuser_enters_username_and_passsword(AutomationLoginMapstepDefinations.java:45)\n\tat ✽.Then Mapuser enters username and passsword(map.feature:12)\n",
  "status": "failed"
});
formatter.match({
  "location": "AutomationLoginMapstepDefinations.mapuser_quit()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 718060029,
  "status": "passed"
});
formatter.before({
  "duration": 18447141076,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Automation sign in Test",
  "description": "",
  "id": "automation-loginmap-feature;automation-sign-in-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@SmokeTest"
    },
    {
      "line": 19,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user is on Sign in page",
  "keyword": "Given "
});
formatter.match({
  "location": "AutomationLoginMapstepDefinations.user_is_on_Sign_in_page()"
});
formatter.result({
  "duration": 122841,
  "status": "passed"
});
formatter.after({
  "duration": 839803602,
  "status": "passed"
});
formatter.before({
  "duration": 8521563055,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Automation Home Page Test",
  "description": "",
  "id": "automation-loginmap-feature;automation-home-page-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "user is Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "AutomationLoginMapstepDefinations.user_is_Home_page()"
});
formatter.result({
  "duration": 116927,
  "status": "passed"
});
formatter.after({
  "duration": 967975693,
  "status": "passed"
});
formatter.uri("taggedHook.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Krupal Patel"
    },
    {
      "line": 2,
      "value": "#Keywords Summary : Practice BDD"
    }
  ],
  "line": 5,
  "name": "Dresses page Test",
  "description": "",
  "id": "dresses-page-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 4,
      "name": "@tag"
    }
  ]
});
formatter.before({
  "duration": 8300872614,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "",
  "description": "",
  "id": "dresses-page-test;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Contact"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "ruser is on home page and hometitle is \"My account - My Store\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user clicks on contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enter details",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on send button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "My account - My Store",
      "offset": 40
    }
  ],
  "location": "TaggedHookStepDefination.ruser_is_on_home_page_and_hometitle_is(String)"
});
formatter.result({
  "duration": 4273095,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHookStepDefination.user_clicks_on_contact_page()"
});
formatter.result({
  "duration": 1032363407,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHookStepDefination.user_enter_details()"
});
formatter.result({
  "duration": 486499531,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHookStepDefination.user_clicks_on_send_button()"
});
formatter.result({
  "duration": 1050183355,
  "status": "passed"
});
formatter.after({
  "duration": 837391149,
  "status": "passed"
});
formatter.before({
  "duration": 7822106528,
  "status": "passed"
});
formatter.before({
  "duration": 3694713095,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "",
  "description": "",
  "id": "dresses-page-test;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Dresses"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "duser is on dresses page and title is \"Dresses - My Store\"",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user clicks on casual dresses",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user checked the any size checkbox",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Dresses - My Store",
      "offset": 39
    }
  ],
  "location": "TaggedHookStepDefination.duser_is_on_dresses_page_and_title_is(String)"
});
formatter.result({
  "duration": 6888622,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHookStepDefination.user_clicks_on_casual_dresses()"
});
formatter.result({
  "duration": 1430326350,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHookStepDefination.user_checked_the_any_size_checkbox()"
});
formatter.result({
  "duration": 3358804155,
  "status": "passed"
});
formatter.after({
  "duration": 718151818,
  "status": "passed"
});
});