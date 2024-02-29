const { When, Then } = require('@cucumber/cucumber')
const { LoginPage } = require('../page/LoginPage')

let loginPage = new LoginPage()

When('user navigates to engage url', async () => {
    await loginPage.navigate()
})

When('user enter username', async () => {
    await loginPage.enterUsername()
})

When('user clicks on next button', async()=>{
    await loginPage.clickNextButton()
})

When('user enter Password', async () => {
    await loginPage.enterPassword()
})

When('user click on Login button', async () => {
    await loginPage.clickOnLoginButton()
})

Then('user verify dashboard URL', async () => {
    await loginPage.verifyDashboardURL()
})