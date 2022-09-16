import PastebinPage from '../test/pageObjects/PastebinPage';
import Page from '../test/pageObjects/Page';
import HelpIt from './HelpIt';

class PastebinFn extends Page{
async createPaste(){
  await PastebinPage.open();
  await HelpIt.write(PastebinPage.pasteForm, PastebinPage.pasteText);
  await HelpIt.choseFromDroplist(PastebinPage.expirationList, PastebinPage.neededExpiration);
  await HelpIt.write(PastebinPage.pasteNameElement, PastebinPage.pasteName);
  await HelpIt.click(PastebinPage.createPasteBtn);
}
async checkPasteTitle(){
  await HelpIt.checkTitle(PastebinPage.pasteTextElement, PastebinPage.pasteName);
}
}
module.exports = new PastebinFn();
