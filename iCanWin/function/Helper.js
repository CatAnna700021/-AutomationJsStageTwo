import Page from '../test/pageObjects/Page';

class Helper extends Page {
    async click(element){
        await element.waitForExist(5000);
        await element.click();}
    async write(element, text){
        await element.waitForExist(5000);
        await element.addValue(text);}
    async choseFromDroplist(droplist, element){
        await droplist.waitForExist(5000);
        await droplist.click();
        await element.waitForExist(5000);
        await element.click(); }
    async checkTitle(element, text){
        await element.waitForDisplayed(5000);
        await expect(browser).toHaveTitleContaining(text);}
}
module.exports = new Helper();
