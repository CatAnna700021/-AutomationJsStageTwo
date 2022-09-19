import Page from "./Page";

class EstimatePage extends Page{
    get vmClassSelected() {return $('#compute > md-list > md-list-item:nth-child(8) > div');}
    get instanceTypeSelected() {return $('//*[@id="compute"]/md-list/md-list-item[5]/div[1]');}
    get localSDDSelected() {return $('//*[@id="compute"]/md-list/md-list-item[8]/div[2]');}
    get regionSelected() {return $('#compute > md-list > md-list-item:nth-child(2) > div');}
    get commitmentTermSelected() {return $('#compute > md-list > md-list-item:nth-child(6) > div');}
    get estimatedCost() {return $('#resultBlock > md-card > md-card-content > div > div > div > h2 > b');}
  }

  module.exports = new EstimatePage();