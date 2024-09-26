# Amazon.com flow demonstration with WebdriverIO

This project is a part of the assignment with WebdriverIO. The primary task is to go to the homepage, change the category from the seach bar, input a keyword, and click search. Last an assertion was made to check the task.

## Website Under Test

https://www.amazon.com/

## Test Recording Video

https://go.screenpal.com/watch/cZQZjHVSwvd

## Test Flows

- Go to the website.
- If Captcha is shown, bypass it.
- Change the category from the search bar on the homepage.
- Input a keyword in the search bar
- Click search Icon
- Verify the correct keyword is searched.

## Run Locally

Clone the project

```bash {"id":"01J7TWY4RKEYT0E8W8P4QQK3KR"}
    git clone https://github.com/atiarmridul/SWAG_LAB_Basic_Playwright.git
```

Install Dependencies

```bash {"id":"01J7TWY4RKEYT0E8W8P7Q1J3BH"}
    npm install
```

Start the Test

```bash {"id":"01J7TWY4RKEYT0E8W8P99KNTTW"}
    npm run wdio
```
Show Report

Show Report

```bash {"id":"01J8HPHZ3YQ9BK5J12Y06DGZD7"}
    npm run show-report
```

## Tech Stack

- WebdriverIO
- Node.js
- Javascript
- Allure Report

## Tools Used

- VS Code.



