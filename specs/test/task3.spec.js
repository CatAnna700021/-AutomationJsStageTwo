const CloudgooglePage = require('../../app/GoogleCloudPage');

describe('Hurt me plenty', () => {
  before( async () => {
    await CloudgooglePage.open();
    await CloudgooglePage.openPricingCalculator();
    await CloudgooglePage.witchToCalculatorFrame();
    await CloudgooglePage.addNewCalculator();
    await CloudgooglePage.clickAddToEstimateBtn();
  });
  it('should check machine parameters and price', async () => {
    await CloudgooglePage.checkGoogleCalculator();
  });
});
