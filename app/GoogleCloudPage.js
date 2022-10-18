import YopMailPage from './YopMailPage';

const Page = require('./Page');

class CloudgooglePage extends Page {

  get searchBox() {
    return $('//div[@class="devsite-searchbox"]');
  }
  get inputSearch() {
    return $('//input[@name="q"]');
  }
  get searchResult() {
    return $('//a[@class="gs-title"][1]');
  }
  get googleCalcTitle() {
    return $('Google Cloud Platform Pricing Calculator');
  }
  get searchResultLink() {
    return $("//a//b[text()='Google Cloud Pricing Calculator'][1]");
  }
  get numberOfInstances() {
    return $('//div[@class="ng-scope"]//h2[text()="Instances"]');
  }
  get machineSeriesList() {
    return $('//md-select[@placeholder="Series"]/md-select-value/span/div');
  }
  get n1MachineSeries() {
    return $('//md-option[@value="n1"]/div[@class="md-text ng-binding"]');
  }
  get machineTypeList() {
    return $('//md-select[@placeholder="Instance type"]/md-select-value/span/div');
  }
  get n1s8MachineType() {
    return $('//md-option[@value="CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-8"]//div');
  }
  get addGPUsButton() {
    return $('//md-checkbox[@ng-model="listingCtrl.computeServer.addGPUs"]');
  }
  get gpusTypeString() {
    return $("//md-select[@class='ng-pristine ng-valid ng-empty ng-touched']");
  }
  get nvidiaTesla100Steing() {
    return $("//md-option[@value='NVIDIA_TESLA_V100']//div");
  }
  get numberOfGpusString() {
    return $("//md-select-value[@id='select_value_label_465']//span[@class='md-select-icon']")
  }
  get numberOfGpus1() {
    return $("//md-option[@ng-disabled='item.value != 0 && item.value < listingCtrl.minGPU'and@value='1']");
  }
  get neededTypeOfGPU() {
    return $('//md-option[@value="NVIDIA_TESLA_V100"]');
  }
  get listOfSDDs() {
    return $('//md-select[@placeholder="Local SSD"]/md-select-value[@class="md-select-value"]/span/div[@class="md-text ng-binding"]');
  }
  get neededTypeOfSDD() {
    return $('//md-option[@ng-repeat="item in listingCtrl.dynamicSsd.computeServer"][@value="2"]');
  }
  get datacenterLocationList() {
    return $(`//md-select-value[@class="md-select-value"and@id='select_value_label_88']`);
  }
  get neededDatacenterLocation() {
    return $('//md-select-menu[@class="md-overflow"]//md-option[@value="europe-west3"]//div[@class="md-text ng-binding"]');
  }
  get commitedUsageList() {
    return $('//md-select[@placeholder="Committed usage"][@ng-disabled="listingCtrl.isCudDisabled"]//md-select-value[@class="md-select-value"]//span//div');
  }
  get commitedUsageTime() {
    return $('//div[@class="md-select-menu-container md-active md-clickable"]//md-select-menu//md-content//md-option[@ng-value="1"]//div[@class="md-text"]');
  }
  get addToEstimateBtn() {
    return $("//button[@ng-click='listingCtrl.addComputeServer(ComputeEngineForm);']");
  }
  get vmClassSelected() {
    return $("//md-list-item[@ng-if='item.items.editHook && item.items.editHook.initialInputs.class']//div[@class='md-list-item-text ng-binding']");
  }
  get instanceTypeSelected() {
    return $('//*[@id="compute"]/md-list/md-list-item[5]/div[1]');
  }
  get localSDDSelected() {
    return $(`//div[@class='md-list-item-text ng-binding cpc-cart-multiline flex'and@ng-class="item.items.isSsdCommitted ? 'cpc-cart-multiline' : ''"]`);
  }
  get regionSelected() {
    return $('#compute > md-list > md-list-item:nth-child(2) > div');
  }
  get commitmentTermSelected() {
    return $('#compute > md-list > md-list-item:nth-child(6) > div');
  }
  get estimatedCost() {
    return $('//h2//b[@class="ng-binding"]').getText();
  }

  get emailEstimateBtn() {
    return $('#email_quote');
  }
  get emailField() {
    return $('//input[@type="email"]');
  }
  get sendEmailBtn() {
    return $('//button[@aria-label="Send Email"]');
  }

  open() {
    super.open('https://cloud.google.com')
  };

 async openPricingCalculator(){
    this.open();
    await this.click(this.searchBox);
    await this.writeAndSumbit(this.inputSearch, this.googleCalcTitle);
    await this.click(this.searchResult);
    await this.checkTitle(this.googleCalcTitle);
    await this.click(this.searchResultLink)
};
async switchToCalculatorFrame(){
    await browser.switchToFrame(0);
    await browser.switchToFrame(0);
};
async addNewCalculator() {
    await this.write(this.numberOfInstances,'4');
    await this.choseDroplistElement(this.machineSeriesList,this.n1MachineSeries);
    await this.choseDroplistElement(this.machineTypeList, this.n1s8MachineType);
    await this.click(this.addGPUsButton);
    await this.choseDroplistElement(this.numberOfGpusString, this.neededNumberOfGPUs);
    await this.choseDroplistElement(this.typeOfGPUsList, this.neededTypeOfGPU);
    await this.choseDroplistElement(this.listOfSDDs, this.neededTypeOfSDD);
    await this.choseDroplistElement(this.datacenterLocationList, this.neededDatacenterLocation);
    await this.choseDroplistElement(this.commitedUsageList, this.commitedUsageTime);
  };
  async clickAddToEstimateBtn() {
    await this.click(this.addToEstimateBtn);
  };
  async checkAddingResults() {
    await this.checkElementForHaving(this.addToEstimateBtn, 'ADD TO ESTIMATE');
  };
  async checkGoogleCalculator() {
    await this.checkElementForHaving(this.vmClassSelected, 'regular');
    await this.checkElementForHaving(this.instanceTypeSelected, 'n1-standard-8');
    await this.checkElementForHaving(this.localSDDSelected,'Local SSD: 2x375 GiB');
    await this.checkElementForHaving(this.regionSelected,'Region: Frankfurt');
    await this.checkElementForHaving(this.commitmentTermSelected,'Commitment term: 1 Year');
    await this.checkElementForHaving(this.estimatedCost,'Total Estimated Cost: USD 1,288.70 per 1 month');
  };
  async sendEmail() {
    await this.switchToWindow('https://cloud.google.com');
    await this.click(this.emailEstimateBtn);
    await this.write(this.emailField,YopMailPage.generatedMail);
    await this.click(this.sendEmailBtn);
  };

};

export default new CloudgooglePage();
