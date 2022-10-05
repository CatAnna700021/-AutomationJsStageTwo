import CalculatorPage from "../test/pageObjects/CalculatorPage";
import Page from "../test/pageObjects/Page";
import Helper from "./Helper";

class CalculatorPageFn extends Page{
    async switchToCalculatorFrame(){
        await browser.switchToFrame(0);
        await browser.switchToFrame(0);}
    async addNumberOfInstances() {
        await Helper.write(CalculatorPage.addNumberOfInstances,'4');}
    async choseMachineSeries() {
        await Helper.choseDroplistElement(CalculatorPage.machineSeriesList,CalculatorPage.n1MachineSeries);}
    async choseMachineType() {
        await Helper.choseDroplistElement(CalculatorPage.machineTypeList, CalculatorPage.n1s8MachineType);}
    async addGPU() {
        await Helper.click(CalculatorPage.addGPUsButton);
        await Helper.choseDroplistElement(CalculatorPage.numberOfGPUsList, CalculatorPage.neededNumberOfGPUs);
        await Helper.choseDroplistElement(CalculatorPage.typeOfGPUsList, CalculatorPage.neededTypeOfGPU);}
      async addSDD() {
        await Helper.choseDroplistElement(CalculatorPage.listOfSDDs, CalculatorPage.neededTypeOfSDD);}
      async choseDatacenterLocation() {
        await Helper.choseDroplistElement(CalculatorPage.datacenterLocationList, CalculatorPage.neededDatacenterLocation);}
      async choseUsageTime() {
        await Helper.choseDroplistElement(CalculatorPage.commitedUsageList, CalculatorPage.commitedUsageTime);}
      async clickAddToEstimateBtn() {
          await Helper.click(CalculatorPage.addToEstimateBtn);}
      async checkAddingResults() {
        await Helper.checkElementForHaving(CalculatorPage.addToEstimateBtn, 'ADD TO ESTIMATE');}
      async choseMachine(){
        await this.addNumberOfInstances();
        await this.choseMachineSeries();
        await this.choseMachineType();
        await this.addGPU();
        await this.addSDD();
        await this.choseDatacenterLocation();
        await this.choseUsageTime();
        await this.clickAddToEstimateBtn();}}

module.exports = new CalculatorPageFn();
