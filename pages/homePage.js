const BasePage = require('./basePage');
const { strictEqual } = require('assert')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends BasePage {
    /**
     * define selectors using getter methods
     */
    get loginPagePartnerMenu () { return $('//a[@title="Partner"]') }


     
     
    checkIfPartnerMenuExist()
    {
        //expect(this.loginPagePartnerMenu).toBeExisting();
        expect(this.loginPagePartnerMenu).toBeDisplayed();
    };

    

    checkIfPartnerMenuTextIsEqualToMessage(message)
    {
        //expect(this.loginPagePartnerMenu).toHaveTextContaining(message);
        const descriptionPartnerMenu = this.getText(this.loginPagePartnerMenu)
        strictEqual(descriptionPartnerMenu, message)
    };
}

module.exports = new HomePage();
