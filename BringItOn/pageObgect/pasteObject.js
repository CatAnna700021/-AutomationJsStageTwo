import Page from './Page';

class pastePage extends Page {
  get textPasta() {
    return $('//*[@id="postform-text"]');
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

  get syntaxHighlighting() {
    return $('#select2-postform-format-container');
  }

  get neededExpiration() {
    return $('#select2-postform-expiration-results :nth-child(3)');
  }

  get createPasteBtn() {
    return $('button[type="submit"]');
  }
  get bash() {
    return $('select2-postform-format-result-v9zf-8');
  }

  get syntaxHighlightingInput() {
    return $('//*[@role=\'searchbox\']');
  }
  get pastePageText() {
    return $(`git config --global user.name "New Sheriff in Town"
    git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
    git push origin master --force`);
  }
}

export default new pastePage();