testcafe-remote-browser-example
===============================
[![Build Status](https://travis-ci.org/amilajack/testcafe-remote-browser-example.svg?branch=master)](https://travis-ci.org/amilajack/testcafe-remote-browser-example)

A runnable example of running testcafe on remote browsers. These test run on [browserstack](https://www.browserstack.com) and [saucelabs](https://saucelabs.com)

## Setup
```bash
git clone https://github.com/amilajack/testcafe-remote-browser-example
cd testcafe-remote-browser-example
yarn
cp .env.example .env
# Add your API keys to .env
vim .env
yarn test
```