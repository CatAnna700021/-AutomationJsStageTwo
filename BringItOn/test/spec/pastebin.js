import PastebinPageFn from '../../functions/PastebinFn';

describe('Bring it on webdriverIO task', ()=>{
    if ('should create new paste', async()=>{
        await PastebinPageFn.createPaste();
        await PastebinPageFn.checkPaste();
    });
});
