const { Given, When, Then } = require('@cucumber/cucumber');

const loginPage = require('../pages/loginPage');
const homePage = require('../pages/homePage');


Given(/^I am on the (\w+) page$/, (page) => {
    //pages[page].open()
    //browser.url('/')
   //browser.url(page);
   loginPage.navigateToLogin(page);
});

When(/^I login with (.*) and (.+)$/,  (username, password) => {
    loginPage.login(username, password)
});

Then(/^I should see Partner menu saying (.*)$/,  (message) => {
    homePage.checkIfPartnerMenuExist();
    homePage.checkIfPartnerMenuTextIsEqualToMessage(message);

});

