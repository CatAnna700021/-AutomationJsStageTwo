const GoogleCloudPage = require('../../app/GoogleCloudPage');
const Page = require('../../app/Page');
const YopMailPage = require('../../app/YopMailPage');

discribe('Hardcore', () => {
  before( async () => {
    await CloudgooglePage.open();
    await CloudgooglePage.openPricingCalculator();
    await CloudgooglePage.witchToCalculatorFrame();
    await CloudgooglePage.addNewCalculator();
    await CloudgooglePage.clickAddToEstimateBtn();
    await YopMailPage.generateMail();
    await CloudgooglePage.sendEmail();
    await YopMailPage.switchToYopmail();
    await YopMailPage.penMailedPrice();

  });

  it('Check Total Estimated Monthly Cost ', async () => {
    expect(YopMailPage.monthlyCostsField).toHaveTextContaining(GoogleCloudPage.estimatedCost);
  });
});
