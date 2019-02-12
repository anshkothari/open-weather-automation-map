import * as reporter from "cucumber-html-reporter";
import * as fs from "fs";
import * as mkdirp from "mkdirp";
import * as path from "path";
const jsonReports = path.join(process.cwd(), "/reports/json");
const htmlReports = path.join(process.cwd(), "/reports/html");
const targetJson = jsonReports + "/report.json";

const cucumberReporterOptions = {
    jsonFile: targetJson,
    output: htmlReports + "/report.html",
    reportSuiteAsScenarios: true,
    theme: "bootstrap",
};

export class ReportGenerator {

    public static createDirectory(dir: string) {
        if (!fs.existsSync(dir)) {
            mkdirp.sync(dir);
        }
    }

    public static createHTMLReport() {
        try {
            reporter.generate(cucumberReporterOptions);
        } catch (err) {
            if (err) {
                throw new Error("Failed to generate report.");
            }
        }
    }
}
