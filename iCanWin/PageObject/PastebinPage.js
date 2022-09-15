import Page from './page';

class PastebinPage extends Page {
  get pasteForm() {return $('//*[@id="postform-text"]');}
  get expirationList() {return $('//*[@id="select2-postform-expiration-container"]');}
  get neededExpiration() {return $('//*[@id="select2-postform-expiration-results"]/li[3]');}
  get pasteNameElement() {return $('//input[@id="postform-name"]');}
  get createPasteBtn() {return $('//button[@type="submit"]');}
  get pasteTextElement(){return $('//textarea[@class="textarea"]');}

  get pasteText(){return 'Hello from WebDriver';}
  get pasteName(){return 'helloweb';}

  open() {
    super.open('http://pastebin.com');
  }
}
export default new PastebinPage();