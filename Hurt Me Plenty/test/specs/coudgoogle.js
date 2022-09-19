import CloudgooglePage from "../pageObjects/CloudgooglePage";
import CalculatorPageFn from "../../functions/CalculatorPageFn";
import EstimatePageFn from "../../functions/EstimatePageFn";

describe('Hurt me plenty task',()=>{
    it('shold open searchbox and find Pricing calculator', async () => {
        await CloudgooglePage.openPricingCalc();
        await CloudgooglePage.checkTitle();
      });
      it('should add machine with known parameters', async () => {
        await CalculatorPageFn.switchToCalculatorFrame();
        await CalculatorPageFn.choseMachine();
        await CalculatorPageFn.checkAddingResults();
      });
      it('should check machine parameters and price', async () => {
        await EstimatePageFn.checkMachineParameters();
        await EstimatePageFn.checkEstimatedCost();
      });
    });
    