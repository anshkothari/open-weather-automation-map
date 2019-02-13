import { CommonUtils } from './../support/commonUtils';
import { browser, protractor } from "protractor";
import { SearchWeatherPage } from "../pages/search-weather-page";
import { CallbackStepDefinition, defineSupportCode } from 'cucumber';
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;


/**
 * @author Anshul kothari
 * Created On: 12-Feb-19
 * Desc: Step definitions for search weather page scenarions.
 */
defineSupportCode(function ({ Given, When, Then }) {
    let searchWeatherPage: SearchWeatherPage = new SearchWeatherPage();
    let commonUtils: CommonUtils = new CommonUtils();

    Given('user navigates to url {string}', function (url: string, callback: CallbackStepDefinition) {
        browser.get(url).then(function () {
            callback();
        });
    });

    When('user enter {string} in search text box', function (searchText: string, callback: CallbackStepDefinition) {
        commonUtils.waitForElement(searchWeatherPage.searchTxtBox).then(function () {
            searchWeatherPage.searchTxtBox.sendKeys(searchText).then(function () {
                callback();
            });
        });
    });

    When('user click on search button', function (callback: CallbackStepDefinition) {
        commonUtils.waitForElement(searchWeatherPage.searchBtn).then(function () {
            searchWeatherPage.searchBtn.click().then(function () {
                callback();
            });
        });
    });

    Then('user should be navigated to search result page', function (callback: CallbackStepDefinition) {
        callback();
    });


    Then('weather for city {string} must be shown', function (expectedResult: string, callback: CallbackStepDefinition) {
        commonUtils.waitForElement(searchWeatherPage.searchResult).then(function () {
            searchWeatherPage.searchResult.getText().then(function (actualResults) {
                expect(actualResults).contain(expectedResult);
                callback();
            });
        });
    });

    Then('message {string} must be shown', function (expectedResult: string, callback: CallbackStepDefinition) {
        commonUtils.waitForElement(searchWeatherPage.alert).then(function () {
            searchWeatherPage.alert.getText().then(function (actualResults) {
                expect(actualResults).contain(expectedResult);
                callback();
            });
        });
    });

    Then('page with title {string} must shown to user', function (expectedTitle: string, callback: CallbackStepDefinition) {
        commonUtils.waitForElement(searchWeatherPage.searchTxtBox).then(function () {
            browser.getTitle().then(function (actualTitle) {
                expect(actualTitle).contain(expectedTitle);
                callback();
            });
        });
    });

    Then('{string} button must be visible', function (expectedlabel: string, callback: CallbackStepDefinition) {
        commonUtils.waitForElement(searchWeatherPage.searchBtn).then(function () {
            searchWeatherPage.searchBtn.getText().then(function (actualLabel) {
                expect(actualLabel).contain(expectedlabel);
                callback();
            });
        });
    });

    Then('current location link must be visible', function (callback: CallbackStepDefinition) {
        commonUtils.waitForElement(searchWeatherPage.currentLocationLink).then(function () {
            searchWeatherPage.currentLocationLink.isDisplayed().then(function (isDisplayed) {
                expect(isDisplayed).to.be.true;
                callback();
            }, function (err) {
                callback();
            });
        });
    });

    Then('no result is shown', function (callback: CallbackStepDefinition) {
        commonUtils.waitForElement(searchWeatherPage.searchString).then(function () {
            searchWeatherPage.searchResult.isDisplayed().then(function (isDisplayed) {
                expect(isDisplayed).to.be.false;
                callback();
            }, function (err) {
                callback();
            });
        });
    });

    Then('search box is auto populated with {string}', function (expected: string, callback: CallbackStepDefinition) {
        commonUtils.waitForElement(searchWeatherPage.searchString).then(function () {
            searchWeatherPage.searchString.getAttribute('value').then(function (actual) {
                expect(actual).to.contain(expected)
                callback();
            });
        });
    });

});
