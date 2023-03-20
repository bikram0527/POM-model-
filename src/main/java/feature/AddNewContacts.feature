@tag
Feature: contact Page Test of CRM

Scenario Outline: Adding new contacts in FreeCRM
 Given User is on homepage
 And verify homepage userlabel and image
 When User mouse hower to new contacts
 And verify new contacts page is open
 Then user add new contacts "<firstname>", "<lastname>", "<position>" and "<department>"
 
 Examples: 
 	| firstname | lastname | position | depatment |
 	| raj| kumar| developer | Development |
 	| ram| sarohi| tester | Testing |
 