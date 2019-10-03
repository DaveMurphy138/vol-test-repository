import { browser } from "protractor";

import { After, Before, Status } from "cucumber";

Before({timeout: 100 * 1000}, async function() {

    //Opens the website to the default URL in the 'protractot.config.ts' file
    await browser.get("");
}