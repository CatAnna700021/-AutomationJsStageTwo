import Page from "./page.js";

class mainPage extends Page {
    get searchButton() {
        return $(`//*[@class='devsite-search-form'and@method='GET']`)
    }
    get searchString() {
        return $(`//*[@class='devsite-search-field devsite-search-query']`)
    }
    get searchText() {
        return $(`Google Cloud Platform Pricing Calculator`)
    }
    get findText() {
        return $(`//*[@id="___gcse_0"]/div/div/div/div[5]/div[2]/div/div/div[1]/div[1]/div[1]/div[1]/div/a`)
    }
}
export default new mainPage();
