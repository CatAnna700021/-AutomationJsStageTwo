import Page from "./openPage";

class CalculatorPage extends Page {
    get numberOfIntanses() {
        return $(`//*[@class='ng-pristine ng-untouched md-input ng-empty ng-valid-min ng-invalid ng-invalid-required'and@id='input_88']`)
    }
    get series(){
        return $(`//*[@class='md-select-value'and@id='select_value_label_83']`)
    }
    get seriesN1() {
        return $(`//*[@class="ng-scope md-ink-ripple"and@id='select_option_198']`)
    }
    get machineType() {
        return $(`//*[@class="md-select-value"and@id='select_value_label_84']`)
    }
    get n1Standart8() {
        return $(`//*[@class="ng-scope md-ink-ripple"and@id='select_option_422']`)
    }
    get addGpus() {
        return $(`//*[@ng-model="listingCtrl.computeServer.addGPUs"]`)
    }
    get gpuType() {
        return $(`//*[@class='ng-pristine ng-untouched ng-valid ng-empty'and@placeholder='GPU type']`)
    }
    get teslaT4() {
        return $(`//*[@class="ng-scope md-ink-ripple"and@id='select_option_468']`)
    }
    get numberOfGpus() {
        return $(`//*[@class="md-select-value"and@id='select_value_label_459']`)
    }
    get numberOfGpus1() {
        return $(`//*[@class="ng-scope md-ink-ripple"and@id='select_option_471']`)
    }
    get localSSD() {
        return $(`//*[@class="md-select-value"and@id='select_value_label_416']`)
    }
    get localSSD375gb() {
        return $(`//*[@class="ng-scope md-ink-ripple"and@id='select_option_443']`)
    }
    get commitedUsage() {
        return $(`//*[@class="md-select-value"and@id='select_value_label_87']`)
    }
    get commitedUsage1Year() {
        return $(`//*[@class="md-ink-ripple"and@id='select_option_126']`)
    }
    get addToEstimate() {
        return $(`//*[@class="md-raised md-primary cpc-button md-button md-ink-ripple"and@aria-label="Add to Estimate"][1]`)
    }
    get testRegion() {
        return $(`//*[@class='md-list-item-text ng-binding'][1]`)
    }
    get testProvisioningModel() {
        return $(`//*[@ng-if='item.items.termText && item.items.termText.length != 0'and@class='ng-scope']`)
    }
    get testLocalSsd() {
        return $(`//*[@ng-class="item.items.isSsdCommitted ? 'cpc-cart-multiline' : ''"and@class='md-list-item-text ng-binding cpc-cart-multiline flex']`)
    }
    get testCommitmentTerm() {
        return $(`//*[@class='md-1-line md-no-proxy ng-scope'and@ng-if='item.items.termText && item.items.termText.length != 0']`)
    }
    get testInstanceType() {
        return $(`//*[@class='md-list-item-text ng-binding cpc-cart-multiline flex'and@ng-class="item.items.sustainedUse || item.items.isInstanceCommitted ? 'cpc-cart-multiline' : ''"]`)
    }
   
}
export default new CalculatorPage();