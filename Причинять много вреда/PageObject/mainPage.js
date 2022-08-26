import Page from "./openPage.js";

class mainPage extends Page {
    get searchButton() {
        //return $(`//*[@class='devsite-search-button devsite-header-icon-button button-flat material-icons'and@aria-label='Open search']`);
        return $(`//*[@class='devsite-search-form'and@method='GET']`)
    }
    get searchString() {
        return $(`//*[@class='devsite-search-field devsite-search-query']`)
    }
    get searchText() {
        return $(`Google Cloud Platform Pricing Calculator`)
    }
    get findText() {
        return $(`#___gcse_0 > div > div > div > div.gsc-wrapper > div.gsc-resultsbox-visible > div > div > div.gsc-expansionArea > div:nth-child(1) > div.gs-webResult.gs-result > div.gsc-thumbnail-inside > div > a`)
    }
}
export default new mainPage();
