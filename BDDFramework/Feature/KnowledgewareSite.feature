@KnowledgewareFeatures
Feature: This feature to test resgistration process

  @pageOne
  Scenario: Page one valid test for correct user data
    * As a user, I want to open "chrome" browser 
    * As a user, I want to enter "https://www.knowledgeware.in/final.html" url
    * As a user, I want to validate page tittle "Register page"
    * As a user, I want to enter "surekha" using locator type "name" with locator value "name"
    * As a user, I want to enter "surekha@123" using locator type "name" with locator value "password"
    * As a user, I want to enter "surekha@123" using locator type "name" with locator value "confirmpassword"
    * As a user, I want to click using locator type "linktext" with locator value "LOGIN"
    * As a user, I want to validate page tittle "Reg2"