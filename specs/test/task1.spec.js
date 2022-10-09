const PastebinPage = require('../../app/PastebinPage');

describe('I can win', ()=>{

    it('should create new paste', async () => {
        await PastebinPage.open();
        await PastebinPage.createPaste()
        await PastebinPage.checkPasteTitle();
    });

});