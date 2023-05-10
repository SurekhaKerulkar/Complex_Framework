package commanFunction;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class WebElementCommon {
	public static WebElement getElement(WebDriver driver, String locatorType, String locatorVal) {
		WebElement element = null;
		switch(locatorType) {
		case "id":
			element = driver.findElement(By.id(locatorVal));
			break;
		case "name":
			element = driver.findElement(By.name(locatorVal));
			break;
		case "xpath":
			element = driver.findElement(By.xpath(locatorVal));
			break;
		case "linktext":
			element = driver.findElement(By.linkText(locatorVal));
			break;
		}
		return element;
	}

}
