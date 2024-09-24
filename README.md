# Amazon.com flow demonstration with WebdriverIO

This project is a part of assignment with WebdriverIO. Primary task is to go to homepage, change the category from seach bar, input a keyword and click search. Last a assertion was made to check the task.

## Website Under Test

https://www.amazon.com/

## Test Recording Video

https://go.screenpal.com/watch/cZQZjHVSwvd

## Test Flows

- Go to website.
- If Capcha is shown, bypass it.
- Change the category from searchbar in homepage.
- Input a keyword in the searchbar
- Click search Icon
- Verify the corrent keyword is searched.

## Run Locally

Clone the project

```bash {"id":"01J7TWY4RKEYT0E8W8P4QQK3KR"}
    git clone https://github.com/atiarmridul/SWAG_LAB_Basic_Playwright.git
```

Install dependencies

```bash {"id":"01J7TWY4RKEYT0E8W8P7Q1J3BH"}
    npm install
```

Start the test

```bash {"id":"01J7TWY4RKEYT0E8W8P99KNTTW"}
    npm run wdio
```

```bash {"id":"01J8HPHZ3YQ9BK5J12Y06DGZD7"}
    npm run show-report
```

## Tech Stack

- WebdriverIO
- Node.js
- Javascript

## Tools Used

- VS Code.



