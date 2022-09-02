import Page from "./page.js"

class EmailPage extends Page {
    get copyGeneratedEmailBtn(){
        return $(`//*[@id="cprnd"and@class='md but text f24 egenbut']`);
    }
    get generateEmailBtn() {
        return $(`#listeliens > a:nth-child(1)`)
    }
    get totalEstimated() {
        return $(`#mail > div > div > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > h3`);
    }
}
export default new EmailPage();