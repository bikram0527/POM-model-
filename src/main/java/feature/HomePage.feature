@tag
Feature: Home Page Test of Free CRM

Scenario: Check the Username label on Home page
	Given user is on homepage		
	Then verify home page username
	When verify home page image
	Then close the browser