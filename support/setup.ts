const { BeforeAll, After, AfterAll, Status, setDefaultTimeout } = require("cucumber");
import * as fs from "fs";
import { browser } from "protractor";
import { config } from "../config/protractor.conf";

BeforeAll({timeout: 100 * 1000}, () => {
    // await browser.get(config.baseUrl);
    setDefaultTimeout(60 * 1000); 
});

After(async function(scenario) {
    // if scenario fails, take screenshot and attach with report.
    if (scenario.result.status === Status.FAILED) {
         const screenShot = await browser.takeScreenshot();
         this.attach(screenShot, "image/png");
    }
});

// AfterAll({timeout: 100 * 1000}, async () => {
//     await browser.quit();
// });
