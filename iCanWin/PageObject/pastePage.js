import Page from './Page';

class pastePage extends Page {
  get textPasta() {
    return $('#postform-text');
  }

  get pasteExpiration() {
    return $('#select2-postform-expiration-container');
  }

  get pasteName() {
    return $('#postform-name');
  }

  get btnSubmit() {
    return $('button[type="submit"]');
  }

  get paste10Minute() {
    return $('#select2-postform-expiration-results :nth-child(3)');
  }  

//#select2-postform-expiration-result-6sd6-10M
  //get syntaxHighlighting() {
   // return $('#select2-postform-format-container');
  //}

   get neededExpiration() {
    return $('#select2-postform-expiration-results :nth-child(3)');
  }

  get bash() {
    return $('select2-postform-format-result-q8d7-8');
  }

  get createPasteBtn() {
    return $('button[type="submit"]');
  }

  get syntaxHighlightingInput() {
    return $('//*[@role=\'searchbox\']');
  }
}
export default new pastePage();
