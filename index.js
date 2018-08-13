const createTestCafe = require('testcafe');

if (!process.env.CI) {
    require('dotenv').config()
}

createTestCafe('localhost', 1337, 1338)
    .then(testCafe => {
        if (!process.env.CI) {
            require('dotenv').config()
        }
        
        testCafe
            .createRunner()
            .src('./index.e2e.js')
            .browsers('saucelabs:Chrome@beta:Windows 10')
            .run();
    });