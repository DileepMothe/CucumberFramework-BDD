package com.cucumber.framework.PageObject;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.cucumber.framework.configreader.ObjectRepo;
import com.cucumber.framework.helper.Logger.LoggerHelper;
import com.cucumber.framework.helper.Wait.WaitHelper;

public class HomePage {
	
	WebDriver driver;
	private final Logger log = LoggerHelper.getLogger(HomePage.class);
	WaitHelper waitHelper;
	
	String Tshirts = "T-shirts";
	String Blouses = "Blouses";
	String CasualDresses = "Casual Dresses";

	
	@FindBy(xpath="//*[@id='block_top_menu']/ul/li[1]/a")
	public WebElement womenMenu;
	
	@FindBy(xpath="//*[@id='block_top_menu']/ul/li[2]/a")
	public WebElement dressesMenu;
	
	
	@FindBy(xpath="//*[@id='block_top_menu']/ul/li[3]/a")
	public WebElement tshirtsMenu;
	
	@FindBy(xpath="//*[@id='center_column']/div/div[1]/ul/li[1]/a/span")
	WebElement orderHistoryAndDetailsLink;
	
	@FindBy(xpath="//*[@id='center_column']/div/div[1]/ul/li[3]/a/span")
	WebElement myAddresses;

	
	public HomePage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
		waitHelper = new WaitHelper(driver);
		waitHelper.waitForElement(driver, womenMenu,ObjectRepo.reader.getExplicitWait());
	}
	
	public void mouseOver(String data){
		log.info("doing mouse over on :"+data);
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//*[contains(text(),'"+data+"')]"))).build().perform();
	}
	
	public ProductCategoryPage clickOnIntem(String data){
		log.info("clickin on :"+data);
		driver.findElement(By.xpath("//*[contains(text(),'"+data+"')]")).click();
		return new ProductCategoryPage(driver);
	}
	
	public ProductCategoryPage clickOnMenu(WebElement element){
		log.info("clickin on : "+element.getText());
		element.click();
		return new ProductCategoryPage(driver);
	}

}
