import PastebinPage from "../test/pageObjects/PastebinPage";
import Page from "../test/pageObjects/Page";
import Helper from "../functions/Helper";
 
class PastebinFn extends Page{
async createPste(){
    PastebinPage.open();
    await Helper.write(PastebinPage.pasteForm,PastebinPage.postformText);
    await Helper.click(PastebinPage.codeHighlighter);
    await Helper.writeAndSumbit(PastebinPage.highlighterInput,PastebinPage.bashHighlighter);
    await Helper.choseFromDroplist(PastebinPage.expirationList,PastebinPage.neededExpiration);
    await Helper.write(PastebinPage.pasteNameElement,PastebinPage.title);
    await Helper.click(PastebinPage.createPasteBtn);
    }

    async checkPaste() {
        await Helper.checkTitle(PastebinPage.title);
        await Helper.checkElementForHaving(PastebinPage.pasteHighterElement,PastebinPage.bashHighlighter);
        await Helper.checkElementForHaving(PastebinPage.pasteTextElement,PastebinPage.postformText);
    }
}

module.exports = new PastebinFn();
