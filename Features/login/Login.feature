Feature: Login Feature
 
@login
Scenario: Login to Sample automation website
 When user navigates to sample url
 And user enter username
 #And user clicks on next button
 And user enter Password
 And user click on Login button
 Then user verify dashboard URL
 