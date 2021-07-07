import { JSDOM } from 'jsdom';
import puppeteer from 'puppeteer';

//#region Collect stylesheet and script tags from resulting build file
const sourceDom = await JSDOM.fromFile('build/index.html');
const { head: sourceHead, body: sourceBody } = sourceDom.window.document;

// Convert type to plain array
const [...styles] = sourceHead.querySelectorAll('link[rel=stylesheet]');
const [...scripts] = sourceBody.querySelectorAll('script');

const payloadData = [
    ...styles.map((el) => el.outerHTML),
    ...scripts.map((el) => {
        el.defer = true; // Assume that the scripts will be injected into the <head>
        return el.outerHTML;
    })
];
//#endregion

//#region Start transplanting custom codes to the wordpress dashboard
const webBaseUrl = 'https://ppsmb.ft.ugm.ac.id';

if (!process.env.WP_USERNAME || !process.env.WP_PASSWORD) {
    throw new ReferenceError();
}

const headlessBrowser = await puppeteer.launch();

// Modify browser permissions so that copying works
await headlessBrowser
    .defaultBrowserContext()
    .overridePermissions(webBaseUrl, ['clipboard-read', 'clipboard-write']);

const page = await headlessBrowser.newPage();

const targetUrl = `${webBaseUrl}/wp-admin/admin.php?page=of-advanced-menu&tab=custom-javascript-tab`;
await page.goto(targetUrl, { waitUntil: 'load' });

// Type username and password
await page.type('#user_login', process.env.WP_USERNAME, { delay: 300 });
await page.type('#user_pass', process.env.WP_PASSWORD, { delay: 150 });

// Click the "login" button
await Promise.all([
    page.click('#wp-submit'),
    page.waitForNavigation({ waitUntil: 'load' })
]);

try {
    if (page.url() !== targetUrl) {
        throw new Error();
    }

    await page.bringToFront();

    await page.click('.CodeMirror-line');
    await page.keyboard.down('Control');
    await page.keyboard.down('A');
    await page.keyboard.up('A');
    await page.keyboard.up('Control');

    const previousContent = await page.evaluate(() => {
        document.execCommand('copy'); // Probably DEPRECATED
        return navigator.clipboard.readText();
    });
    console.log('Previous field value was:');
    console.log(previousContent);

    // Delete the existing content first
    await page.keyboard.press('Backspace');

    // Adjust the full string to match the autocompletion behavior of CodeMirror
    await page.type(
        '.CodeMirror-code',
        payloadData.join('').replace(/(\<\/)[a-z]+\>/ig, '$1'),
    );

    // Remove the autocompleted `script` ending tag
    await page.keyboard.down('Shift');
    await page.keyboard.down('End');
    await page.keyboard.up('End');
    await page.keyboard.up('Shift');
    await page.keyboard.press('Backspace');

    await Promise.all([
        page.click('input[type=submit][name=update]'),
        page.waitForSelector('#optionsframework-options-saved')
    ]);

}
finally {
    // We need to click the hidden logout button that only appears on parent menu hover
    await page.evaluate(() => {
        document.getElementById('wp-admin-bar-logout').querySelector('a.ab-item').click();
    });
    await page.waitForNavigation({ waitUntil: 'load' });
    await headlessBrowser.close();
}
//#endregion
