import Page from './page';

class EstimatePage extends Page{
  get emailEstimateBtn() {return $('#email_quote');}
  get emailField() {return $('//input[@type="email"]');}
  get sendEmailBtn() {return $('//button[@aria-label="Send Email"]');}}
module.exports = new EstimatePage();
