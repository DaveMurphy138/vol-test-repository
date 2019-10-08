Feature: Login to VOL

    Rules:
    1. You must be able to login to VOL

    Background: Ensure user can login
        Given: the login and password are valid


    Scenario: Login to VOL
        When I add the username and password and click login
        Then login has been successful