# Amazon Automation With WebdriverIO

This repository contains a small WebdriverIO automation project that validates a basic Amazon homepage search flow on `https://www.amazon.com/`.

## What The Test Covers

The current automated flow does the following:

1. Open the Amazon homepage
2. Attempt to bypass a captcha if a known fallback link appears
3. Select a category from the homepage search dropdown
4. Enter a keyword in the search box
5. Submit the search
6. Verify the searched keyword appears in the URL

## Tech Stack

- WebdriverIO
- Mocha
- Node.js
- JavaScript
- Allure Reporter

## Project Structure

```text
.
├── README.md
├── package.json
├── package-lock.json
├── wdio.conf.js
└── test
    ├── pageobjects
    │   └── home.page.js
    └── specs
        └── test.home.js
```

## Key Files

- `wdio.conf.js`
  Main WebdriverIO configuration, reporters, hooks, and browser capabilities
- `test/pageobjects/home.page.js`
  Amazon homepage selectors and reusable actions
- `test/specs/test.home.js`
  The current end-to-end scenario

## Prerequisites

- Node.js 20+
- Google Chrome installed locally
- npm

## Setup

Clone the repository:

```bash
git clone https://github.com/atiarmridul/Amazon-Automation-With-WDIO.git
cd Amazon-Automation-With-WDIO
```

Install dependencies:

```bash
npm install
```

## Run The Tests

Execute the WebdriverIO suite:

```bash
npm run wdio
```

Generate and open the Allure report after the test run:

```bash
npm run show-report
```

## Notes

- The suite currently targets Chrome.
- The test scenario is implemented as one user journey split across multiple `it(...)` blocks.
- Amazon may occasionally show captcha or anti-bot checks, which can affect test stability.

## Documentation

Additional project notes are available in [doc/knowledge.md](doc/knowledge.md).
