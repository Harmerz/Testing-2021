import { JSDOM } from "jsdom";
import puppeteer from "puppeteer";

// Check first for the required environment variables
if (!process.env.WP_USERNAME || !process.env.WP_PASSWORD) {
    throw new ReferenceError();
}

// The URL of the "resources" origin (probably gonna be hosted on netlify)
const resBaseUrl = "//kesatria2021-resources.netlify.app";

// Top-level `await`, available starting from Node.js 14.8
const sourceDom = await JSDOM.fromFile("build/index.html");

const { head: sourceHead, body: sourceBody } = sourceDom.window.document;

const styles = sourceHead.querySelectorAll("link[rel=stylesheet][href]");
const scripts = sourceBody.querySelectorAll("script");

// We HIGHLY assume that the "custom js" thing is inserted to the <head>
// It's likely that a theme update could break that behavior
const customCodePayloadData = [];

styles.forEach(linkEl => {
    linkEl.setAttribute("href", resBaseUrl + linkEl.getAttribute("href"))
    customCodePayloadData.push(linkEl.outerHTML);
});
scripts.forEach(scriptEl => {
    if (scriptEl.hasAttribute("src")) {
        scriptEl.setAttribute("src", resBaseUrl + scriptEl.getAttribute("src"))
        scriptEl.defer = true;
    }
    customCodePayloadData.push(scriptEl.outerHTML);
});

console.log(customCodePayloadData.join(''));

// Do the deployment process
const headlessBrowser = await puppeteer.launch({ headless: false });
const page = await headlessBrowser.newPage();

// await page.setViewport({
//     width: 1920,
//     height: 1080,
//     deviceScaleFactor: 1
// });

const targetUrl = (
    "https://ppsmb.ft.ugm.ac.id/wp-admin/admin.php" +
    "?page=of-advanced-menu&tab=custom-javascript-tab"
);
await page.goto(targetUrl, { waitUntil: "load" });

// Forcibly put delays to avoid recaptcha prompting
await page.type("#user_login", process.env.WP_USERNAME, { delay: 300 });
await page.type("#user_pass", process.env.WP_PASSWORD, { delay: 150 });

// await page.screenshot({ path: "step-1-test.png" });

// Click the "login" button, finally
await Promise.all([
    page.click("#wp-submit"),
    page.waitForNavigation({ waitUntil: "load" })
]);

try {
    // await page.screenshot({ path: "step-15-test.png" });
    console.log(page.url());
    if (page.url() !== targetUrl) {
        throw new Error();
    }

    // Clear all the contents first
    await page.click(".CodeMirror-line"); // Click inshtead of simply focusing
    await page.keyboard.down("Control");
    await page.keyboard.down("A");
    await page.keyboard.up("A");
    await page.keyboard.up("Control");
    await page.keyboard.press("Backspace");

    // Adjust the full string to match the autocompletion behavior of CodeMirror
    await page.type(
        ".CodeMirror-code",
        customCodePayloadData.join('').replace(/(\<\/)[a-z]+\>/ig, "$1"),
    );

    // Remove the autocompleted `script` ending tag
    await page.keyboard.down("Shift");
    await page.keyboard.down("End");
    await page.keyboard.up("End");
    await page.keyboard.up("Shift");
    await page.keyboard.press("Backspace");

    // await page.screenshot({ path: "step-2-test.png" });

    await Promise.all([
        page.click("input[type=submit][name=update]"),
        page.waitForSelector("#optionsframework-options-saved")
    ]);

    // await page.screenshot({ path: "step-3-test.png" });
}
catch (err) {
    throw err;
}
finally {
    // Finally, log out from everything
    // We need to click the hidden logout button that only appears on parent menu hover
    await page.evaluate(() => {
        document.getElementById("wp-admin-bar-logout").querySelector("a.ab-item").click();
    });
    await page.waitForNavigation({ waitUntil: "load" });

    // await page.screenshot({ path: "step-4final-test.png" });
    await headlessBrowser.close();
}