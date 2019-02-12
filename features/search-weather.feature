@execute
Feature: Verify search weather functionality

 Scenario: Verify user is able to search weather for valid city name
  Given user navigates to url "https://openweathermap.org"
   When user enter "Mumbai" in search text box
   And user click on search button
   Then user should be navigated to search result page
   And weather for city "Mumbai" must be shown


 Scenario: Verify message shown when user enter invalid city
  Given user navigates to url "https://openweathermap.org"
   When user enter "TEST123" in search text box
   And user click on search button
   Then user should be navigated to search result page
   And message "Not found" must be shown


 Scenario: Verify page title, labels, field, links on search page 
  When user navigates to url "https://openweathermap.org"
   Then page with title "Сurrent weather and forecast - OpenWeatherMap" must shown to user 
   And "Search" button must be visible
   And current location link must be visible
  