import mainPage from "../pageObject/mainPage.js";
import calculatorPage from "../pageObject/calculatorPage.js";

const expectChai = import('chai')
//const expect = import('chai');

describe('Hurt Me Plenty task', () =>{
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
        await calculatorPage.numberOfIntanses.setValue('4');
        await calculatorPage.series.click();
        await calculatorPage.seriesN1.waitForExist();
        await calculatorPage.seriesN1.click();
        await calculatorPage.machineType.click();
        await calculatorPage.n1Standart8.waitForExist();
        await calculatorPage.n1Standart8.click();
        await calculatorPage.addGpus.click();
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
        await calculatorPage.addToEstimate.click();
        
    expect(calculatorPage.testRegion).toHaveValueContaining('Frankfurt');
    expect(calculatorPage.testInstanceType).toHaveValueContaining('n1-standard-8');
    expect(calculatorPage.testProvisioningModel).toHaveValueContaining('Regular');
    expect(calculatorPage.testLocalSsd).toHaveValueContaining('2x375 GiB');
    expect(calculatorPage.testCommitmentTerm).toHaveValueContaining('1 Year');    
    })
})
