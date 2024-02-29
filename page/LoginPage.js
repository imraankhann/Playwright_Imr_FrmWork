const { expect } = require('@playwright/test');
let { setDefaultTimeout } = require('@cucumber/cucumber')
const path = require('path');
setDefaultTimeout(60 * 15000)

require('dotenv').config({
    path: path.join(__dirname, '../.env'),
});

var username = 'input[name="user-name"]';
var password = 'input[name="password"]';
var nextButton = "//input[@id='idp-discovery-submit']";
//var signInButton = "//input[@id='okta-signin-submit']";
var loginButton = "input[@id='login-button']";
var threeppLogo = '//div[@class="threepp-logo"]';
var productsTitle = "//span[@class='Products']";

class LoginPage {

    async navigate() {
        await global.page.goto(process.env.WEB_URL,)
    }

    async enterUsername() {
        await global.page.locator(username).waitFor({ status: 'visible', setTimeout: 20000 })
        await global.page.locator(username).fill(process.env.WEB_USERNAME)
    }

    async clickNextButton(){
        await global.page.locator(nextButton).click()
    }

    async enterPassword() {
        await global.page.locator(password).fill(process.env.WEB_PASSWORD)
    }

    async clickOnLoginButton() {
       // await global.page.locator(signInButton).click()
          await global.page.locator(loginButton).click();
    }

    async verifyDashboardURL() {
        //expect(await global.page.locator(threeppLogo).waitFor({ status: 'visible', setTimeout: 20000 }))
        expect(await global.page.locator(productsTitle).waitFor({status: 'visible', setTimeout: 20000}))
    }
}

module.exports = { LoginPage }