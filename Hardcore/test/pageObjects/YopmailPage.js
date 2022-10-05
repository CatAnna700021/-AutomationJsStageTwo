import Page from './page';
let Helper = require('../../functions/Helper');

class YopmailPage extends Page {
  get youpmailURL() {return 'https://yopmail.com/ru/';}
  get generateMailBtn() {return $('//div[@class="txtlien"][1]//b');}
  get generatedMail() {return $('//*[@id="egen"]');}
  get checkMailBtn() {return $('//button[@class="md but text f24 egenbut"and@onclick="egengo();"]');}
  get monthlyCostsField() {return $('//h3[contains(text(), "USD")]');}
  
  async generateMail(){
    await browser.newWindow(this.youpmailURL);
    await this.generateMailBtn.click();}
  async switchToYopmail(){
    await browser.switchWindow('yopmail.com');}
  async openMailedPrice(){
    await Helper.click(this.checkMailBtn);
    await browser.refresh();
    await browser.switchToFrame(2);}
  async checkMailedPrice(){
    await Helper.checkElementForHaving(this.monthlyCostsField, 'USD 5,411.26');}
  
  open() {
    super.open('https://yopmail.com/ru/');}}

export default new YopmailPage();

