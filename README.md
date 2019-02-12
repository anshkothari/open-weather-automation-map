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
1.NodeJS installed should be installed in the system.

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