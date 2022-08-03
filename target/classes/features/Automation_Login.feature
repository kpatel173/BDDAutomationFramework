

Feature: Automation Login Feature
 

 #(1)----------------Simple data driven - without examples-----------*
 
  #Scenario: Automation Login Test Scenario
    #Given user is already on login page
    #When title is "Login - My Store"
    #Then user enters "kpatel@thebrick.com" and "2098found"
    #Then user clicks on signIn button
    #Then user is on home page
		#Then user quit
		
 #(2)----------------Simple data driven - with examples + Scenario Outline-----------*	
 
	Scenario Outline: Automation Login Test Scenario
    Given user is already on login page
    When title is "Login - My Store"
    Then user enters "<username>" and "<password>"
    Then user clicks on signIn button
    Then user is on home page
		Then user quit
		
 Examples: 
      | username | password | 
      | kpatel@thebrick.com | 2098found | 
      | rj123@gmail.com          | rj123    |
      
      
  #(3)*----------------Simple data driven - with table(with list object)-----------*
  
  #Scenario: Automation Login Test Scenario
    #Given user is already on login page
    #When title is "Login - My Store"
    #Then user enters username and passsword
    #| kpatel@thebrick.com | 2098found | 
    #| rj123@gmail.com          | rj123    |
    #Then user clicks on signIn button
    #Then user is on home page
#		Then user quit
		
		
		


