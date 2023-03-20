@tag
Feature: Title of your feature

  @tag1
  Scenario Outline: Login FreeCRM site with wrong username and password
  
  Given User is already on login page  
	When title of login page
	Then user enters wrong "<username>" and "<password>"
	Then user clicks on login button
	Then user get error for invalid request
	
	Examples:
	
	| username | password |
	| Bikram | ggghhg |
	|        | aabbgd |
  
 
  
  @tag2
  Scenario: Login with correct username and password
  Given User is on login page  
	When verify title of login page using assertion 
	Then user enters username and password
	Then user clicks on login button
	Then verify user is on homepage
	 