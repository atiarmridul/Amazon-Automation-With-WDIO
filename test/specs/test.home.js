import HomePage from "../pageobjects/home.page.js";

describe("My application", () => {
  it("Land on the home page, and avoid captcha if displayed", async () => {
    await browser.url("https://www.amazon.com");
    await HomePage.captcha();
  });

  it("Select a category from Search Dropdown (Test Case > 1)", async () => {
    await HomePage.dropDrownCategory("Software");
  });

  it("Search with Keyword (Test Case > 2)", async () => {
    await HomePage.searchKeyword("Games");
    //checking the correct text is entered in the searchbox
    await expect(browser).toHaveUrl(expect.stringContaining("Games"));
  });

  it("Close the browser window (Test Case > 3)", async () => {
    await browser.closeWindow();
  });
});
