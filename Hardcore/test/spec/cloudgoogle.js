import CloudgooglePage from '../pageobjects/cloudgoogle.page';
import CalculatorPageFn from '../../functions/calculatorPageFn';
import YopmailPage from '../pageobjects/yopmail.page';

describe('Hardcore task', () => {

  it('shold open searchbox and find Pricing calculator', async () => {
    await CloudgooglePage.openPricingCalc();
    await CloudgooglePage.checkTitle();
  });
  it('should chose machine parameters', async () => {
    await CalculatorPageFn.switchToCalculatorFrame();
    await CalculatorPageFn.choseMachine();
    await CalculatorPageFn.checkAddingResults();
  });
  it('should open second page with mailbox and generate new mail', async () => {
    await CloudgooglePage.clickToEmailEstimate();
    await YopmailPage.generateMail();
  });
  it('should copy and paste generated mail', async () => {
    await CalculatorPageFn.copyGeneratedMail();
    await YopmailPage.switchToYopmail()
  });
  it('should switch to mail page and check costs', async () => {
    await YopmailPage.openMailedPrice();
    await YopmailPage.checkMailedPrice();
  });
});