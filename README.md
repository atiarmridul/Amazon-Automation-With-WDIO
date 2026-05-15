# Amazon Automation With WebdriverIO

![WebdriverIO](https://img.shields.io/badge/WebdriverIO-Automation-orange)
![Mocha](https://img.shields.io/badge/Mocha-Test%20Framework-brown)
![Allure](https://img.shields.io/badge/Allure-Reporting-green)
![Node.js](https://img.shields.io/badge/Node.js-20+-blue)

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
```

## Learning Outcomes

- Web UI automation using WebdriverIO
- Page Object Model implementation
- End-to-end automation flow design
- Allure reporting integration

## Recommended Future Enhancements

- GitHub Actions workflow
- Headless execution support
- Screenshot capture on failure
- Cross-browser execution

## Repository Information

- Repository Owner: Atiar Mridul
- GitHub Profile: https://github.com/atiarmridul
