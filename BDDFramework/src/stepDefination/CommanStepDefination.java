package stepDefination;

import org.openqa.selenium.WebDriver;
import commanFunction.WebBrowser;
import commanFunction.WebElementCommon;
import commanFunction.WebTextBox;
import cucumber.api.java.en.Given;
import junit.framework.Assert;

public class CommanStepDefination {
	WebDriver driver = null;
	@Given("^As a user, I want to open \"([^\"]*)\" browser$")
	public void as_a_user_I_want_to_open_browser(String browserName) {
		//System.out.println(browserName);
		driver = WebBrowser.openBrowser(browserName);
	}
	
	@Given("^As a user, I want to enter \"([^\"]*)\" url$")
	public void as_a_user_I_want_to_enter_url(String url) {
		WebBrowser.openURL(driver, url);
		
	}
	@Given("^As a user, I want to enter \"([^\"]*)\" using locator type \"([^\"]*)\" with locator value \"([^\"]*)\"$")
	public void as_a_user_I_want_to_enter_using_locator_type_with_value(String valueToEnter, String locatorType, String locatorValue){
		WebTextBox.sendKeys(driver, valueToEnter, locatorType, locatorValue);
	    
	}
	@Given("^As a user, I want to click using locator type \"([^\"]*)\" with locator value \"([^\"]*)\"$")
	public void as_a_user_I_want_to_click_using_locator_type_with_locator_value(String locatorType, String locatorValue) {
		WebElementCommon.getElement(driver, locatorType, locatorValue).click();
	}
	@Given("^As a user, I want to validate page tittle \"([^\"]*)\"$")
	public void as_a_user_I_want_to_validate_page_tittle(String expectedTitle) {
		Assert.assertEquals(WebBrowser.validateTitle(driver, expectedTitle),true);
	}

}
