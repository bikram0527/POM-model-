package StepDefinations;

import org.junit.Assert;

import com.qa.pages.ContactPage;
import com.qa.pages.HomePage;
import com.qa.pages.LoginPage;
import com.qa.util.TestBase;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ContactPageStepDefination extends TestBase {
	LoginPage lp;
	HomePage hp;	
	ContactPage cp;
	
	@Before
	public void setUp()  {
		    openBrowser();
		    lp = new LoginPage();
		    hp= new HomePage();
		    cp =new ContactPage();
		    lp.Login(prop.getProperty("username"), prop.getProperty("password"));
		    hp= lp.clickOnLoginButton();		    
	}
	
	@After
	public void tearDown() {
	    closeBrowser();
	}
	
	
	@Given("^User is on homepage$")
	public void user_is_on_homepage() throws Throwable {
	    
	}

	@Given("^verify homepage userlabel and image$")
	public void verify_homepage_userlabel_and_image() throws Throwable {
		String uname= hp.verifyUsername();
	    System.out.println(uname);
	    Assert.assertEquals(uname,"Bikram Singh");
	    
	    boolean flag =hp.verifyImage();
		Assert.assertTrue(flag);
	}

	@When("^User mouse hower to new contacts$")
	public void user_mouse_hower_to_new_contacts() throws InterruptedException{
		cp= hp.addcontact();
		Thread.sleep(2000);
	}

	@When("^verify new contacts page is open$")
	public void verify_new_contacts_page_is_open() throws Throwable {
	   System.out.println(cp.verifyAddContactLable());	   
	   Assert.assertEquals(cp.verifyAddContactLable(),"Create New Contact");
	}

	@Then("^user add new contacts \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_add_new_contacts_and(String firstName, String LastName, String position, String department) throws Throwable {
	    cp.newContactDetails(firstName, LastName, position, department);
	}


}
