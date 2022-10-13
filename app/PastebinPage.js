const Page = require('./Page');

class PastebinPage extends Page {

  get pasteForm() {
    return $('//*[@id="postform-text"]')
  };
  get expirationList() {
    return $('//*[@id="select2-postform-expiration-container"]')
  };
  get neededExpiration() {
    return $('//li[contains(text(),"10 Minutes")]')
  };
  get pasteNameElement() {
    return $('//input[@id="postform-name"]')
  };
  get createPasteBtn() {
    return $('//button[@type="submit"]')
  };
  get pasteTextElement() {
    return $('//*[@class="bash"]')
  };
  get highlighterInput() {
    return $('//input[@class="select2-search__field"]')
  };
  get expirationList() {
    return $('//*[@id="select2-postform-expiration-container"]')
  };
  get bashHighlighterElement() {
    return $('//a[@href="/archive/bash"]')
  };
  get codeHighlighter() {
    return $('//span[@id="select2-postform-format-container"]')
  };
  get NewPastTitle() {
    return $('//*[@class="de1"]')
  };
  get savedPasteArea() {
    return $("//*[@class='source bash']")
  };

  get pasteText() {
    return 'Hello from WebDriver'
  };
  get pasteName() {
    return 'helloweb'
  };
  get title() {
    return 'how to gain dominance among developers'
  };
  get postformText() {
    return `git config --global user.name  "New Sheriff in Town"
  git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
  git push origin master --force`
  };
  get bashHighlighter() {
    return "Bash"
  };

  open() {
    super.open('http://pastebin.com');
  };

  async createPste(){
    
    await this.write(this.pasteForm,this.postformText);
    await this.click(this.codeHighlighter);
    await this.writeAndSumbit(this.highlighterInput,this.bashHighlighter);
    await this.choseFromDroplist(this.expirationList,this.neededExpiration);
    await this.write(this.pasteNameElement,this.title);
    await this.click(this.createPasteBtn);
};

async checkPaste() {
    await this.checkTitle(this.title);
    await this.checkElementForHaving(this.pasteHighterElement,this.bashHighlighter);
    await this.checkElementForHaving(this.pasteTextElement,this.postformText);
};

async checkPasteTitle(){
    await this.checkTitle(this.NewPastTitle, this.pasteText);
};
};
export default new PastebinPage();
