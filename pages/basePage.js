/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class BasePage {
   
    getText(element){
        element.waitForDisplayed({timeout: 30000})
        const text = element.getText()
        return text
    }
  
}


