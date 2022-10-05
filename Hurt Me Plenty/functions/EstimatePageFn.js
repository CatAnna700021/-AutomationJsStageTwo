import EstimatePage from '../test/pageObjects/EstimatePage';
import Page from '../test/pageObjects/Page';
import Helper from './Helper';

class EstimatePageFn extends Page{
    async checkVMClass() {
        await Helper.checkElementForHaving(EstimatePage.vmClassSelected, 'regular');}
      async checkInstanceType() {
        await Helper.checkElementForHaving(EstimatePage.instanceTypeSelected, 'n1-standard-8');}
      async checkLocalSDD() {
        await Helper.checkElementForHaving(EstimatePage.localSDDSelected,'Local SSD: 2x375 GiB');}
      async checkRegion() {
        await Helper.checkElementForHaving(EstimatePage.regionSelected,'Region: Frankfurt');}
      async checkCommitmentTerm() {
        await Helper.checkElementForHaving(EstimatePage.commitmentTermSelected,'Commitment term: 1 Year');}
      async checkEstimatedCost() {
        await Helper.checkElementForHaving(EstimatePage.estimatedCost,'Total Estimated Cost: USD 5,411.26 per 1 month');}
      async checkMachineParameters(){
          await this.checkVMClass();
          await this.checkInstanceType();
          await this.checkLocalSDD();
          await this.checkRegion();
          await this.checkCommitmentTerm();}}
    module.exports = new EstimatePageFn();
