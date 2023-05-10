@tag
Feature: Title of your feature
  I want to use this template for my feature file

  
  @login
  Scenario: Page one valid test for correct user data
    * As a user, I want to open "chrome" browser 
    * As a user, I want to enter "https://nursingdemo.medifox.in.net/Account/Login" url
    * As a user, I want to validate page tittle "Login"
    * As a user, I want to enter "admin" using locator type "name" with locator value "Username"
    * As a user, I want to enter "admin" using locator type "id" with locator value "Password"
    * As a user, I want to click using locator type "xpath" with locator value "//input[@value='Login']"
    * As a user, I want to validate page tittle "MAA LALITA HOSPITAL & RESEARCH CENTRE - Dashboard"
  