import PastebinPage from "../test/pageObjects/PastebinPage";
import Page from "../test/pageObjects/Page";
import HelpIt from "../functions/HelpIt";
 
class PastebinFn extends Page{
async createPste(){
    PastebinPage.open();
    await HelpIt.write(PastebinPage.pasteForm,PastebinPage.postformText);
    await HelpIt.click(PastebinPage.codeHighlighter);
    await HelpIt.writeAndSumbit(PastebinPage.highlighterInput,PastebinPage.bashHighlighter);
    await HelpIt.choseFromDroplist(PastebinPage.expirationList,PastebinPage.neededExpiration);
    await HelpIt.write(PastebinPage.pasteNameElement,PastebinPage.title);
    await HelpIt.click(PastebinPage.createPasteBtn);
    }

    async checkPaste() {
        await HelpIt.checkTitle(PastebinPage.title);
        await HelpIt.checkElementForHaving(PastebinPage.pasteHighterElement,PastebinPage.bashHighlighter);
        await HelpIt.checkElementForHaving(PastebinPage.pasteTextElement,PastebinPage.postformText);
    }
}

module.exports = new PastebinFn();