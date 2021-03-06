import { JasmineAllureReporter } from "allure-jasmine";
import { Status, TestResult } from "allure-js-commons";

const reporter = new JasmineAllureReporter({
  resultsDir: "./out/allure-results",
  testMapper: (result: TestResult) => {
    if (result.status == Status.SKIPPED) result.fullName = `(WAS SKIPPED) ${result.fullName}`;
    return result;
  }
});
jasmine.getEnv().addReporter(reporter);
