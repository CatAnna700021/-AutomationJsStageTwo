const PastebinPage = require('../../app/PastebinPage');

describe('Bring it on', () => {

  before( async () => {
    await PastebinPage.open();
    await PastebinPage.createPaste()
  });

  it('should have a title', async () => {
    await expect(browser).toHaveTitleContaining(PastebinPage.title);
  });

  it('should get valid syntax from Pastebin page', async () => {
    await expect(PastebinPage.pasteTextElement).toHaveText(PastebinPage.postformText);
  });

  it('should have a syntax Bash', async () => {
    await expect(PastebinPage.savedPasteArea).toHaveText(PastebinPage.bashHighlighter);
  });
});
