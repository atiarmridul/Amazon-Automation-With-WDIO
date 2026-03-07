# Amazon Automation Knowledge Base

## Overview

This repository is a small WebdriverIO automation project for validating a basic Amazon homepage search flow on `https://www.amazon.com/`.

The implemented scenario is:

1. Open the Amazon homepage.
2. Attempt to bypass a captcha if a specific fallback link is visible.
3. Change the search category from the homepage dropdown.
4. Search for a keyword.
5. Assert that the resulting URL contains the searched keyword.

## Tech Stack

- Node.js project using ES modules (`"type": "module"` in `package.json`)
- WebdriverIO v8
- Mocha test framework
- Allure reporter
- Chrome browser automation

## Repository Structure

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

### `package.json`

Defines the project as an ESM Node.js package and provides the main scripts:

- `npm run wdio`
  Runs the WDIO test suite with `wdio.conf.js`
- `npm run show-report`
  Generates and opens the Allure report from `allure-results`
- `npm run wdio-show-report`
  Intended to run tests and then open the report, though the current command is malformed

Important development dependencies:

- `@wdio/cli`
- `@wdio/local-runner`
- `@wdio/mocha-framework`
- `@wdio/spec-reporter`
- `@wdio/allure-reporter`
- `wdio-chromedriver-service`

### `wdio.conf.js`

Central WebdriverIO configuration.

Current behavior:

- Uses local runner
- Executes only `./test/specs/**/test.home.js`
- Sets `logLevel` to `error`
- Configures Chrome capability
- Uses Mocha with a `60000` ms timeout
- Attaches `spec` and `allure` reporters
- Clears `allure-report` and `allure-results` directories inside the `before` hook
- Takes a screenshot on test failure in `afterTest`

Design note:

- This file is the runtime backbone of the project. Any browser, timeout, service, reporter, or spec selection change will usually start here.

### `test/pageobjects/home.page.js`

Implements a single page object for the Amazon homepage.

Exposed elements:

- Search input
- Search submit button
- Search category dropdown
- Captcha fallback link labeled `Try different image`

Exposed methods:

- `captcha()`
  Clicks the captcha fallback link if it is displayed
- `dropDrownCategory(dropDownItem)`
  Selects a dropdown option by visible text
- `searchKeyword(searchItem)`
  Enters text in the search box and submits the search

Design note:

- The page object centralizes selectors and user actions. If Amazon changes homepage markup, this file is the primary place to update selectors.

### `test/specs/test.home.js`

Contains the end-to-end scenario broken into four Mocha tests:

1. Open Amazon and handle captcha if shown
2. Select `Software` from the category dropdown
3. Search for `Games` and verify the URL contains `Games`
4. Close the browser window

Design note:

- The spec relies on test execution order and shared browser state across multiple `it(...)` blocks. That works only if the runner preserves order and the earlier tests succeed.

## Functional Flow

The current automation flow is sequential:

1. Navigate to Amazon homepage
2. Try captcha handling
3. Select search category
4. Enter keyword
5. Submit search
6. Verify search term appears in URL
7. Close window

This is closer to one scenario split across several tests than four independent tests.

## How To Run

Install dependencies:

```bash
npm install
```

Run the suite:

```bash
npm run wdio
```

Generate and open the Allure report:

```bash
npm run show-report
```

## Current Risks And Observations

These are the main issues visible from the code review:

### 1. `wdio.conf.js` appears incomplete

The config uses `path`, `fs`, and `allure`, but the file does not currently import them. In an ES module setup, that will usually cause runtime errors unless the environment injects them externally.

Expected imports would normally look conceptually like:

- `import fs from "node:fs";`
- `import path from "node:path";`
- `import allure from "@wdio/allure-reporter";`

### 2. Chrome service package is installed but not configured

`wdio-chromedriver-service` exists in `package.json`, but `services` is currently an empty array in `wdio.conf.js`.

Impact:

- Browser driver startup may depend on the local machine already being configured correctly.

### 3. The main scenario is split across dependent tests

The spec uses multiple `it(...)` blocks for one browser session and one logical user journey.

Impact:

- If the first test fails, later tests may produce misleading failures.
- The suite is less isolated and harder to maintain.

### 4. Captcha handling is fragile

`captcha()` assumes the selector `//a[text()='Try different image']` is both present and sufficient when a captcha appears.

Impact:

- Amazon’s anti-bot flow is dynamic and may change markup or behavior frequently.
- `isDisplayed()` may fail if the element does not exist when captcha is absent.

### 5. README contains inaccurate project metadata

Observed issues:

- The clone URL points to `SWAG_LAB_Basic_Playwright`, which does not match this repository
- The README says "Playwright" in the clone link target, while this project uses WebdriverIO
- "Together" is misspelled as "Togather"

### 6. `wdio-show-report` script should be corrected

Current script:

```json
"wdio-show-report": "wdio run ./wdio.conf.js allure generate --clean allure-results && allure open"
```

Issue:

- `allure generate ...` is appended directly to the `wdio` command instead of being chained as a separate command.

## Suggested Next Improvements

- Add the missing imports in `wdio.conf.js`
- Configure the Chrome driver service explicitly if this project is meant to be portable
- Merge the scenario into one `it(...)` block or move shared setup into hooks
- Make captcha handling defensive by checking element existence before `isDisplayed()`
- Fix README repository metadata and run instructions
- Correct the `wdio-show-report` script

## Maintenance Notes

- Selector changes will most likely be needed in `test/pageobjects/home.page.js`
- Execution and reporting behavior live in `wdio.conf.js`
- The current project scope is narrow and optimized for a demo assignment rather than a scalable automation framework
- If the suite grows, the next structural step would be more page objects, reusable helpers, and isolated test cases
