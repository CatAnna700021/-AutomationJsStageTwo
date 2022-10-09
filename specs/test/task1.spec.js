const PastebinPage = require('../../app/PastebinPage');

describe('I can win', () => {

  befor(async () => {
    await PastebinPage.open();
    await PastebinPage.createPaste()

  });
  it('should have a title', async () => {
    await expect(PastebinPage.checkPasteTitle());
  });

});
