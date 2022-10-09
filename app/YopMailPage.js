import Page from './Page';

class YopMailPage extends Page {
  get youpmailURL() {
    return 'https://yopmail.com/ru/';
  };
  get generateMailBtn() {
    return $('//div[@class="txtlien"][1]//b');
  };
  get generatedMail() {
    return $('//*[@id="egen"]').getText();
  };
  get checkMailBtn() {
    return $('//button[@class="md but text f24 egenbut"and@onclick="egengo();"]');
  };
  get monthlyCostsField() {
    return $('//h3[contains(text(), "USD")]');
  };

  open() {
    super.open('https://yopmail.com/ru/');
  };

  async generateMail() {
    await browser.newWindow(this.youpmailURL);
    await this.generateMailBtn.click();
  };
  async switchToYopmail() {
    await browser.switchWindow('yopmail.com');
  };
  async openMailedPrice() {
    await Page.click(this.checkMailBtn);
    await browser.refresh();
  };

};

export default new YopmailPage();
