package testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"C:\\QA\\Selenium_Workspace\\CucumberPomProject\\src\\main\\java\\feature"}, //the path of the feature files
		plugin = {"pretty","html:test-output"}, //to generate different types of reporting
		glue={"StepDefinations"}, //step Definition Package Name
		monochrome = true //help to display console output in a readable format.
		//strict = true, //it will check if any step is not defined in step definition file
		//dryRun = false  //It is used to check the mapping is proper between feature file and step definition file.
		//tags = {"~@SmokeTest" , "~@RegressionTest", "~@End2End"}
		)

public class TestRunner {
	
	

}
