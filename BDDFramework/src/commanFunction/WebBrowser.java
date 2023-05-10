package commanFunction;

import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.safari.SafariDriver;

public class WebBrowser {
	public static WebDriver openBrowser(String browserName) {
		WebDriver driver = null;
		switch(browserName) {
		case "chrome":
			ChromeOptions options = new ChromeOptions();
			options.addArguments("--remote-allow-origins=*");
			driver = new ChromeDriver(options);	
			//driver = new ChromeDriver();
			break;
		case "edge":
			driver = new EdgeDriver();
			break;
		case "safari":
			driver = new SafariDriver();
			break;
		default:
			driver = new ChromeDriver();
			}
		    return driver;
	}
	public static void openURL(WebDriver driver, String url) {
		driver.get(url);
	}
    public static boolean validateTitle(WebDriver driver, String expectedTitle) {
    	boolean titleMatch = false;
    	if(driver.getTitle().equals(expectedTitle)) {
    		titleMatch = true;
    	}
    	return titleMatch;
    }
}
