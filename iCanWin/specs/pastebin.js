import PastebinPageFn from '../../functions/PastebinFn';

describe('I can win webdriverIO task', () => {

  it('should create new paste', async () => {
    await PastebinPageFn.createPaste();
    await PastebinPageFn.checkPasteTitle();
  });
});
