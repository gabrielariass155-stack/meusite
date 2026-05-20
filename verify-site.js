const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const root = __dirname;
const shots = path.join(root, "assets", "screenshots");
fs.mkdirSync(shots, { recursive: true });

function fileUrl(name) {
  return `file://${path.join(root, name).replace(/\\/g, "/")}`;
}

async function checkPage(page, name, viewport) {
  await page.setViewportSize(viewport);
  await page.goto(fileUrl(name), { waitUntil: "load" });
  await page.screenshot({
    path: path.join(shots, `${name.replace(".html", "")}-${viewport.width}.png`),
    fullPage: true,
  });
}

async function main() {
  const browser = await chromium.launch({
    headless: true,
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  });
  const page = await browser.newPage();

  await checkPage(page, "index.html", { width: 1440, height: 1100 });
  await checkPage(page, "index.html", { width: 390, height: 1200 });
  await checkPage(page, "checkout.html", { width: 1280, height: 900 });
  await checkPage(page, "gracias.html", { width: 390, height: 900 });

  await page.goto(fileUrl("checkout.html"), { waitUntil: "load" });
  await page.click(".payment-button");
  await page.waitForLoadState("load");
  const reachedThankYou = page.url().endsWith("/gracias.html");

  const downloadHref = await page.getAttribute(".download-button", "href");
  const pdfExists = fs.existsSync(path.join(root, downloadHref));

  console.log(JSON.stringify({ reachedThankYou, downloadHref, pdfExists }, null, 2));
  await browser.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
