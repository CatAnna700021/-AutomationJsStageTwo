import Page from './Page';
let Helper = require('../../functions/Helper');

class CloudgooglePage extends Page {
    get searchBox() {return $('//div[@class="devsite-searchbox"]');}
    get inputSearch() {return $('//input[@name="q"]');}
    get searchResult() {return $('//a[@class="gs-title"][1]');}
    get googleCalcTitle() {return $('Google Cloud Platform Pricing Calculator');}
    get emailEstimateBtn() {return $('#email_quote');}
    get emailField() {return $('//input[@type="email"]');}
    get sendEmailBtn() {return $('//button[@aria-label="Send Email"]');}
    
    async openPricingCalc(){
        this.open();
        await Helper.click(this.searchBox);
        await Helper.writeAndSumbit(this.inputSearch, this.googleCalcTitle);
        await this.searchResult.waitForExist(5000);
        await Helper.click(this.searchResult);}
    async checkTitle(){
        await Helper.checkTitle(this.googleCalcTitle);}
    async clickToEmailEstimate(){
        await this.emailEstimateBtn.click();}

    open(){
        super.open('https://cloud.google.com')}}
export default new CloudgooglePage();
