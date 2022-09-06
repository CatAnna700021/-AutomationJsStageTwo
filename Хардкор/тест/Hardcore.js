import mainPage from "../pageObject/mainPage.js";
import calculatorPage from "../pageObject/calculatorPage.js";
import emailPage from "../pageObject/emailPage.js";

// const expectChai = import('chai')

describe('Hardcore', () =>{
    it('googleCalculator', async() =>{
        await mainPage.open('https://cloud.google.com/');
        await mainPage.searchButton.waitForExist();
        await mainPage.searchButton.click();
        await mainPage.searchString.setValue('Google Cloud Platform Pricing Calculator');
        await mainPage.searchString.keys('\uE007');
        await mainPage.findText.waitForExist();
        await mainPage.findText.click();
        await browser.switchToFrame(0);
        await browser.switchToFrame(0);
        await calculatorPage.numberOfIntansesStr.setValue('4');
        await calculatorPage.series.waitForExist();
        await calculatorPage.series.click();
        await calculatorPage.seriesN1.waitForExist();
        await calculatorPage.seriesN1.click();
        await calculatorPage.machineType.waitForExist();
        await calculatorPage.machineType.click();
        await calculatorPage.n1Standart8.waitForClickable();
        await calculatorPage.n1Standart8.click();
        await calculatorPage.addGpusBtn.click();
        await calculatorPage.gpuType.click();

        await calculatorPage.teslaT4.waitForExist();
        await calculatorPage.teslaT4.click();
        await calculatorPage.numberOfGpus.click();
        await calculatorPage.numberOfGpus1.waitForExist();
        await calculatorPage.numberOfGpus1.click();
        await calculatorPage.localSSD.click();
        await calculatorPage.localSSD375gb.waitForExist();
        await calculatorPage.localSSD375gb.click()
        await calculatorPage.commitedUsage.click();
        await calculatorPage.commitedUsage1Year.click();
        await calculatorPage.addToEstimateBtn.click();
        
     
        await browser.newWindow(`https://yopmail.com/`);
        await emailPage.generateEmailBtn.waitForClickable();
        await emailPage.generateEmailBtn.click();
        await browser.refresh();
        let generatedMail = await emailPage.copyGeneratedEmailBtn.getValue();

        await browser.switchWindow(`https://cloud.google.com/products/`);
        await browser.switchToFrame(0);
        await browser.switchToFrame(0);
        await calculatorPage.emailEstimateBtn.waitForClickable();
        await calculatorPage.emailEstimateBtn.click();
        await calculatorPage.emailString.waitForClickable();
        await calculatorPage.emailString.setValue(generatedMail);
        await calculatorPage.sendEmailButton.click();
        await browser.switchWindow(`https://yopmail.com/`);
        
        let totalVolume = await emailPage.totalEstimated.getText();

        expect(totalVolume).toHaveTextContaining(calculatorPage.totalEstimate);

    })
})
