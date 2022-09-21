import Page from './page';
import Helper = from '../../functions/helper';

class PastebinPage extends Page {
  get pasteForm() {return $('//*[@id="postform-text"]');}
  get codeHighlighter() {return $('//span[@id="select2-postform-format-container"]');}
  get highlighterInput() {return $('//input[@class="select2-search__field"]');}
  get expirationList() {return $('//*[@id="select2-postform-expiration-container"]');}
  get neededExpiration() {return $('//li[contains(text(),"10 Minutes")]');}
  get pasteNameElement() {return $('//input[@id="postform-name"]');}
  get createPasteBtn() { return $('//button[@type="submit"]');}
  get bashHighlighterElement() {return $('//a[@href="/archive/bash"]');}
  get pasteTextElement(){return $('//textarea[@class="textarea"]');}

  get title() { return 'how to gain dominance among developers';}  
  get postformText() {return `git config --global user.name  "New Sheriff in Town"
  git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
  git push origin master --force`;}
  get bashHighlighter() { return "Bash";}

  open() {
    super.open('http://pastebin.com');
  }
}

export default new PastebinPage();
