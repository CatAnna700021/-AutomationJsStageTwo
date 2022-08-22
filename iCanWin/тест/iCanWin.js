import Page from '../pageObject/Page.js';
import pastePage from '../pageObject/pastePage.js';

describe('Pastebin task', () => {
  it('Paste start', async () => {
    await pastePage.open('https://pastebin.com');
    await pastePage.pasteName.setValue('helloweb');
    await pastePage.textPasta.setValue('Привет от WebDriver');
    await pastePage.pasteExpiration.waitForExist();
    await pastePage.pasteExpiration.click();
    await pastePage.paste10Minute.waitForExist();
    await pastePage.paste10Minute.click();
    await pastePage.btnSubmit.waitForExist();
    await pastePage.btnSubmit.click();
  });
});
