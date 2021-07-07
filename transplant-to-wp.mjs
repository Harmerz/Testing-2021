import { JSDOM } from "jsdom";
import puppeteer from "puppeteer";

if (!process.env.WP_USERNAME || !process.env.WP_PASSWORD) {
    throw new ReferenceError();
}

const resBaseUrl = "//kesatria2021-resources.netlify.app";
const targetBaseUrl = "https://ppsmb.ft.ugm.ac.id";

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

const headlessBrowser = await puppeteer.launch({ headless: false });

// Modify browser permissions so that copying works
await headlessBrowser
    .defaultBrowserContext()
    .overridePermissions(targetBaseUrl, ["clipboard-read", "clipboard-write"]);

const page = await headlessBrowser.newPage();
const targetUrl = `${targetBaseUrl}/wp-admin/admin.php?page=of-advanced-menu&tab=custom-javascript-tab`;
await page.goto(targetUrl, { waitUntil: "load" });

await page.type("#user_login", process.env.WP_USERNAME, { delay: 300 });
await page.type("#user_pass", process.env.WP_PASSWORD, { delay: 150 });

await Promise.all([
    page.click("#wp-submit"),
    page.waitForNavigation({ waitUntil: "load" })
]);

try {
    if (page.url() !== targetUrl) {
        throw new Error();
    }

    await page.bringToFront();

    await page.click(".CodeMirror-line");
    await page.keyboard.down("Control");
    await page.keyboard.down("A");
    await page.keyboard.up("A");
    await page.keyboard.up("Control");

    const previousContent = await page.evaluate(() => {
        document.execCommand("copy"); // Probably DEPRECATED
        return navigator.clipboard.readText();
    });
    console.log("Previous field value was:");
    console.log(previousContent);

    // Delete the existing content first
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

    await Promise.all([
        page.click("input[type=submit][name=update]"),
        page.waitForSelector("#optionsframework-options-saved")
    ]);

}
catch (err) {
    throw err;
}
finally {
    // We need to click the hidden logout button that only appears on parent menu hover
    await page.evaluate(() => {
        document.getElementById("wp-admin-bar-logout").querySelector("a.ab-item").click();
    });
    await page.waitForNavigation({ waitUntil: "load" });

    await headlessBrowser.close();
}