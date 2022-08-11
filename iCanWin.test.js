import PastePage from  '../pageobjects/pastePage.js';
import Page from '../pageobjects/page';
import pastePage from '../pageobjects/pastePage.js';
import ChromeDriverService from 'wdio-chromedriver-service';


describe('Pastebin task', () => {
    it('Paste start', async () => {
    await PastePage.open('https://pastebin.com');
    await PastePage.textName.setValue('helloweb');
    await PastePage.textPasta.setValue("Привет от WebDriver");
    await $(`#select2-postform-expiration-container`).click();
    let neededExpiration = await $(`#select2-postform-expiration-results :nth-child(3)`);
    await neededExpiration.waitForExist();
    await neededExpiration.click();
    const Button = await $('button[type="submit"]');
    await Button.waitForClickable({timeout:6000});
    })
    });
    



