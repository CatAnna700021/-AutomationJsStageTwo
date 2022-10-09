const GoogleCloudPage = require('../../app/GoogleCloudPage');

discribe('hurt me plenty', () =>{
    before( async() =>{
        await GoogleCloudPage.open();
        await GoogleCloudPage.openPricingCalculator();
        await GoogleCloudPage.witchToCalculatorFrame();
        await GoogleCloudPage.addNewCalculator();
        await GoogleCloudPage.clickAddToEstimateBtn();    
    });
  it('should check machine parameters and price', async () => {
        await GoogleCloudPage.checkGoogleCalculator();
    });
});
