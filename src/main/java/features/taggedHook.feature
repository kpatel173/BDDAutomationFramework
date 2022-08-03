#Author: Krupal Patel
#Keywords Summary : Practice BDD 

@tag
Feature: Dresses page Test
  

  @Contact
  Scenario: 
    Given ruser is on home page and hometitle is "My account - My Store"
    Then user clicks on contact page
    Then user enter details
    Then user clicks on send button
    
   @Dresses
  Scenario:
    Given duser is on dresses page and title is "Dresses - My Store"
    Then user clicks on casual dresses
    Then user checked the any size checkbox

  
