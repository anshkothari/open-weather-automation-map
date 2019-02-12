import { ElementFinder } from 'protractor';
import { browser } from 'protractor';
import { protractor } from 'protractor';
import { promise as wdpromise } from 'selenium-webdriver';
let until = protractor.ExpectedConditions;



/**
 * @author Anshul kothari
 * @export
 * @class CommonUtils
 * Created On: 12-Feb-19
 */
export class CommonUtils {

    constructor() { }


    /**
     * @param {ElementFinder} element 
     * @param {number} [timeout] 
     * @param {string} [errorMessage] 
     * @returns {wdpromise.Promise<any>} 
     * @memberof CommonUtils
     */
    public waitForElement(element: ElementFinder, timeout?: number, errorMessage?: string): wdpromise.Promise<any> {
        let time = 30000; // Default timeout: Ten seconds
        let message = 'Element not found'; // Default error message
        if (timeout) {
            time = timeout;
        }
        if (errorMessage) {
            message = errorMessage;
        }
        return browser.wait(until.presenceOf(element), time, message);
    }
}