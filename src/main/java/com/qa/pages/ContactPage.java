package com.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.TestBase;

public class ContactPage extends TestBase {
	
	@FindBy (xpath = "//body/div[@id='ui']/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/span[1]")
	public WebElement newcontact;
	
	@FindBy(name="first_name")
	public WebElement firstName;
	
	@FindBy(name="last_name")
	public WebElement lastName;
	
	@FindBy(name="position")
	public WebElement position;
	
	@FindBy(name="department")
	public WebElement department;
	
	@FindBy (xpath = "//body/div[@id='ui']/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/button[2]")
	public WebElement save;	
	
	public ContactPage() {
		PageFactory.initElements(driver, this);		
	}
	
	public String verifyAddContactLable() {
		return newcontact.getText();		
	}
	
    public void newContactDetails(String ftName, String ltName, String pos, String dept) {		
		firstName.sendKeys(ftName);
		lastName.sendKeys(ltName);
		position.sendKeys(pos);
		department.sendKeys(dept);		
		save.click();
		
	}


}
