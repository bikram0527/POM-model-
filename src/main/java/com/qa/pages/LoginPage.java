package com.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.TestBase;

public class LoginPage extends TestBase {
	
	@FindBy (xpath ="//input[@type='text']")
	public WebElement username;
	
	@FindBy (xpath ="//input[@type='password']")
	public WebElement password;
	
	@FindBy (xpath ="//div[@class='ui fluid large blue submit button']")
	public WebElement login;
	
	@FindBy (xpath ="//div[contains(text(),'Something went wrong...')]")
	public WebElement loginError;
	
	public LoginPage() {
		PageFactory.initElements(driver, this);
	}
	
		
	public  void Login(String user, String pass) {
		username.sendKeys(user);
		password.sendKeys(pass);
		
	}
	public HomePage clickOnLoginButton() {
		login.click();
		return new HomePage();
	}
	
	public String validateLoginPageTitle(){
		return driver.getTitle();
	}
	
	public String LoginErrorMessage() {
		return loginError.getText();
	}
	

}
