package StepDefinations;

import org.junit.Assert;

import com.qa.pages.HomePage;
import com.qa.pages.LoginPage;
import com.qa.util.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HomePageStepDefination extends TestBase {
	LoginPage lp;
	HomePage hp;
	
	
	@Given("^user is on homepage$")
	public void user_is_on_homepage() throws Throwable {
	    openBrowser();
	    lp = new LoginPage();
	    hp= new HomePage();
	    lp.Login(prop.getProperty("username"), prop.getProperty("password"));
	    hp= lp.clickOnLoginButton();	    
	    
	}

	@Then("^verify home page username$")
	public void verify_home_page_username() throws Throwable {
		String uname= hp.verifyUsername();
	    System.out.println(uname);
	    Assert.assertEquals(uname,"Bikram Singh");
	}

	@When("^verify home page image$")
	public void verify_home_page_image() throws Throwable {
		boolean flag =hp.verifyImage();
		Assert.assertTrue(flag);
	}

	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
	    closeBrowser();
	}



}
