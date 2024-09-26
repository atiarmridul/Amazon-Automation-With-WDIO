import { $ } from "@wdio/globals";

class HomePage {
  get searchBox() {
    return $("[placeholder='Search Amazon']");
  }
  get searchClick() {
    return $('//input[@type="submit"]');
  }
  get selectDropDown() {
    return $('//*[@id="searchDropdownBox"]');
  }
  get captchaLink(){
    return $("//a[text()='Try different image']")
  }
  //this function will be used if captcha is displayed only.
  async captcha() {
    if ((await this.captchaLink.isDisplayed()) === true) {
      await this.captchaLink.click();
    }
  }
  async dropDrownCategory(dropDownItem) {
    await this.selectDropDown.selectByVisibleText(dropDownItem);
 
  }

  async searchKeyword(searchItem) {
    await this.searchBox.setValue(searchItem);
    await this.searchClick.click();
  }
}

export default new HomePage();
