import Page from "./page.js";

class CalculatorPage extends Page {
    get numberOfIntansesStr() {
        return $(`//*[@ng-model='listingCtrl.computeServer.quantity']`)
    }
    get series(){
        return $(`//md-select[@placeholder="Series"]/md-select-value/span/div`)
    }
    get seriesN1() {
        return $(`//md-option[@value="n1"]/div[@class="md-text ng-binding"]`)
    }
    get machineType() {
        return $(`//md-select[@placeholder="Instance type"]/md-select-value/span/div`)
    }
    get n1Standart8() {
        return $(`//md-option[@value="CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-8"]`)
    }
    get addGpusBtn() {
        return $(`//*[@ng-model="listingCtrl.computeServer.addGPUs"]`)
    }
    get gpuType() {
        return $(`//*[@class="md-input-has-placeholder flex"][1]`)
    }
    get teslaT4() {
        return $(`//md-option[@value="NVIDIA_TESLA_T4"]`)
    }
    get numberOfGpus() {
        return $(`//*[@id="select_value_label_460"]`)
    }
    get numberOfGpus1() {
        return $(`//*[@ng-disabled='item.value != 0 && item.value < listingCtrl.minGPU'and@class='ng-scope md-ink-ripple'][2]`)
    }
    get localSSD() {
        return $(`//*[@id="select_value_label_417"]`)
    }
    get localSSD375gb() {
        return $(`//md-option[@ng-repeat="item in listingCtrl.dynamicSsd.computeServer"][@value="2"]`)
    }
    get commitedUsage() {
        return $(`//*[@id="select_value_label_88"]`)
    }
    get commitedUsage1Year() {
        return $(`//div[@class="md-select-menu-container md-active md-clickable"]//md-select-menu//md-content//md-option[@ng-value="1"]//div[@class="md-text"]`)
    }
    get addToEstimateBtn() {
        return $(`//*[@class="md-raised md-primary cpc-button md-button md-ink-ripple"and@aria-label="Add to Estimate"][1]`)
    }
    get emailEstimateBtn() {
        return $(`//*[@id="email_quote"]`)
    }
    get emailString() {
        return $(`[ng-model="emailQuote.user.email"]`)
    }
    get sendEmailButton() {
        return $(`//*[@class='md-raised md-primary cpc-button md-button md-ink-ripple'and@ng-disabled='emailForm.$invalid']`)
    }
    get totalEstimate() {
        return $(`//*[@id="resultBlock"]/md-card/md-card-content/div/div/div/h2/b`)
    }
   
}
export default new CalculatorPage();