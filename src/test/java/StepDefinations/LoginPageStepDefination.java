package StepDefinations;

import org.junit.Assert;

import com.qa.pages.HomePage;
import com.qa.pages.LoginPage;
import com.qa.util.TestBase;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginPageStepDefination extends TestBase {
	LoginPage lp;
	HomePage hp;
	
	@Before
	public void setUp() {
		// we can use this way too ...
	}
	
	@After
	public void tearDown() {
	  closeBrowser();
	}
	
	@Given("^User is already on login page$")
	public void user_is_already_on_login_page() throws Throwable {
		openBrowser();
		lp = new LoginPage();
		
	}

	@When("^title of login page$")
	public void title_of_login_page() throws Throwable {
		String title = lp.validateLoginPageTitle();
		System.out.println(title);
		Assert.assertEquals(title, "Cogmento CRM");	   
	}

	@Then("^user enters wrong \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_wrong_and(String username, String password) throws Throwable {
		lp.Login(username, password);
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() throws Throwable {
	    hp= lp.clickOnLoginButton();
	}

	@Then("^user get error for invalid request$")
	public void user_get_error_for_invalid_request() throws Throwable {
		String loginErr = lp.LoginErrorMessage();
		System.out.println(loginErr);
		Assert.assertEquals(loginErr, "Something went wrong...");	
		
	}

	@Given("^User is on login page$")
	public void user_is_on_login_page() throws Throwable {
		openBrowser();
		lp = new LoginPage();
	    
	}

	@When("^verify title of login page using assertion$")
	public void verify_title_of_login_page_using_assertion() throws Throwable {
		String title = lp.validateLoginPageTitle();
		Assert.assertEquals(title, "Cogmento CRM");	 
	}

	@Then("^user enters username and password$")
	public void user_enters_username_and_password() throws Throwable {
		lp.Login(prop.getProperty("username"), prop.getProperty("password"));	
	}

	@Then("^verify user is on homepage$")
	public void verify_user_is_on_homepage() throws Throwable {
		String HomePageTitle= hp.validateHomePageTitle();
	    System.out.println(HomePageTitle);
	    Assert.assertEquals(HomePageTitle, "Cogmento CRM");		    
	    boolean flag =hp.verifyImage();
	    Assert.assertTrue(flag);
	}


}
