### open-weather-map-automation   

### Description
Automation project is created using protractor, cucumber(BDD) and is written in typescript language. 

### Highlights
* Based on Page Object Model.
* Automation tool used: Protractor.
* Behaviour driven development tool used: Cucumber.js
* Scripts written in typescripts.
* Support HTML reports and screenshots on failure feature scenarios.

### Getting Started

#### Pre-requisites
1.NodeJS should be installed in the system.

2.Chrome or Firefox browsers installed.

#### Setup Proejct
* Download or clone repository onto your local system.
* Navigate to the folder using GitBash or cmd terminal.
* Run Command:
```
npm install 
```
* All the dependencies mentioned in package.json will be installed

#### Test execution

* Before test execution, please install "webdriver-manager" and start selenium server using below commands:
```
npm install -g webdriver-manager
``` 
```
npm run webdriver-update
``` 

* Then you should start your selenium server!
```
npm run webdriver-start
```

* Now from separate terminal run below command:
```
npm test
```

### Project Structure
```
   ----open-weather-map-automation
				   \------config (protractor config file)
				   \------features (Cucumber feature files)
				   \------pages (pages class e.g searchWeatherPage.class)
				   \------support (common methods)
				   \------stepdefinitions (cucumber features step definitions)
				   \------package.json
				   \------tsconfig.json
				   \------Jenkinsfile
				   \------README.md
```
#### Feature file
```
@execute
Feature: Verify search weather functionality

 Scenario: Verify user is able to search weather for valid city name
  Given user navigates to url "https://openweathermap.org"
   When user enter "Mumbai" in search text box
   And user click on search button
   Then user should be navigated to search result page
   And weather for city "Mumbai" must be shown
```
#### Step Definitions
    
```
import { CommonUtils } from './../support/commonUtils';
import { browser, protractor } from "protractor";
import { SearchWeatherPage } from "../pages/search-weather-page";
import { CallbackStepDefinition, defineSupportCode } from 'cucumber';
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

defineSupportCode(function ({ Given, When, Then }) {
    let searchWeatherPage: SearchWeatherPage = new SearchWeatherPage();
    let commonUtils: CommonUtils = new CommonUtils();

    Given('user navigates to url {string}', function (url: string, callback: CallbackStepDefinition) {
        browser.get(url).then(function () {
            callback();
        });
    });
});
```

#### Page Class
```
import { $, ElementFinder, element, by } from "protractor";

export class SearchWeatherPage {

    public searchTxtBox: ElementFinder;

    constructor() {
        this.searchTxtBox = $('#searchform > div > #q')
    }
}
```
#### HTML Reports
Project generate HTML project after each execution in dir "./reports". If any scenario fails, screenshot is taken and attach with HTML report.

#### Jenkins
Jenkinsfile contain the jenkins pipeline steps. However, running on jenkins will require a master/slave with browser chrome/firefox installed 
or selenium grid having chrome and firefox node can be used. if selenium grid is used Sthen protractor.conf "seleniumAddress" config need to be updated 
with hub ip.