Feature: AVP answering the questions scenarios

Scenario: [248293] Verify the default value for text field
      Given user successfully login to archer vendor portal with username "Peter Walker"
      And user clicks Assessment with assessment name as "Vendor Portal Publish Questionnaries-11" in assessment table
      And user navigates to question "* SGText Default Value Max25"
      When user clears the answer for text question "* SGText Default Value Max25"
      And user clicks the save button and wait
      When user answers text "Test Input" for question "* SGText Default Value Max25"
      When user clears the answer for text question "* SGText Default Value Max25"
      And user clicks the save button and wait
      Then user verifies default text "I Am Default *******" for question "* SGText Default Value Max25"
      #Cleanup
      And user answers text "I Am Default *******" for question "* SGText Default Value Max25"