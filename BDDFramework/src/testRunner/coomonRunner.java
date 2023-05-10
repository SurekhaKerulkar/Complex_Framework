package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"Feature"}
             ,glue = "stepDefination"
             ,format= {"pretty","html:D:/BDD_Project/HTML"})
public class coomonRunner {

}
