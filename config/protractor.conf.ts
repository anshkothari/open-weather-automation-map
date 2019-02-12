import * as path from "path";
import { browser, Config } from "protractor";
import { ReportGenerator } from "../support/reportGenerator";
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {

    seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    SELENIUM_PROMISE_MANAGER: false,

    // baseUrl: "https://openweathermap.org",

    capabilities: {
        browserName: "chrome",
    },
    ignoreUncaughtExceptions: true,
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
        "../../features/*.feature",
    ],

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        ReportGenerator.createDirectory(jsonReports);
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/report.json",
        require: ["../../build/stepdefinitions/*.js", "../../build/support/*.js"],
        strict: true,
        tags: "@execute and ~@ignore",
    },

    onComplete: () => {
        ReportGenerator.createHTMLReport();
    },
};
