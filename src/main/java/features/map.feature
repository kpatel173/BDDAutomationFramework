#Author: Krupal PAtel

@FunctionalTest
Feature: Automation LoginMap Feature


@SmokeTest @RegressionTest
 Scenario: Automation LoginMap Test Scenario
 
    Given Mapuser is already on login page
    When Maptitle is "Login - My Store"
    Then Mapuser enters username and passsword
    |username                  |password|
    | rmanharbhaj@thebrick.com | Ridje123 | 
    | rj123@gmail.com          | rj123    |
    
		Then Mapuser quit

@SmokeTest @SanityTest	
Scenario: Automation sign in Test
		Given user is on Sign in page	
		
	
Scenario: Automation Home Page Test
		Given user is Home page		
		
