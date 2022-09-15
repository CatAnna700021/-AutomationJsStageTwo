import PastebinPageFn from '../../functions/pastebinFn';

describe('I can win webdriverIO task', () => {

  it('should create new paste', async () => {
    await PastebinPageFn.createPaste();
    await PastebinPageFn.checkPasteTitle();
  });
});
