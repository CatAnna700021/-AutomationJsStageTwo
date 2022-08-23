/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import pastePage from '../pageObject/pasteObject.js'

describe('Pastebin task', () => {
        it('Paste start', async () => {
        await pastePage.open('https://pastebin.com');
        await pastePage.textPasta.setValue(pastePage.pastePageText);
        await pastePage.syntaxHighlighting.click();
        await pastePage.syntaxHighlightingInput.setValue("Bash")
        await pastePage.syntaxHighlightingInput.keys('\uE007');

        await pastePage.pasteExpiration.click();
        await pastePage.neededExpiration.waitForExist();
        await pastePage.neededExpiration.click();

        await pastePage.pasteName.setValue('how to gain dominance among developers');
        await pastePage.createPasteBtn.click();
        await browser.refresh();

        expect(pastePage.pasteName).toHaveTitleContaining(`how to gain dominance among developers`);
        expect(pastePage.syntaxHighlighting).toHaveText(`Bash`);
        expect(pastePage.textPasta).toHaveValueContaining(pastePage.pastePageText);
    });
 })

 