import PastebinPage from '../test/pageObjects/PastebinPage';
import Page from '../test/pageObjects/Page';
import Helper from './Helper';

class PastebinFn extends Page{
async createPaste(){
  await PastebinPage.open();
  await Helper.write(PastebinPage.pasteForm, PastebinPage.pasteText);
  await Helper.choseFromDroplist(PastebinPage.expirationList, PastebinPage.neededExpiration);
  await Helper.write(PastebinPage.pasteNameElement, PastebinPage.pasteName);
  await Helper.click(PastebinPage.createPasteBtn);
}
async checkPasteTitle(){
  await Helper.checkTitle(PastebinPage.pasteTextElement, PastebinPage.pasteName);
}
}
module.exports = new PastebinFn();
