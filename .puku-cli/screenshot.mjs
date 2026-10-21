// Baseline capture: full-page screenshots of every route at three widths.
// Used to diff every later redesign step against the pre-change state.
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const ROOT = process.argv[2] || "http://localhost:5173";
const TAG = process.argv[3] || "baseline";
const OUT = resolve(".puku-cli/baselines", TAG);
await mkdir(OUT, { recursive: true });

const ROUTES = [
  ["/", "home"],
  ["/projects", "projects"],
  ["/projects/cherryso", "projects-cherryso"],
  ["/publications", "publications"],
  ["/resume", "resume"],
  ["/contact", "contact"],
  ["/this-route-does-not-exist", "not-found"],
];
const WIDTHS = [1280, 768, 375];

const browser = await chromium.launch();
try {
  for (const w of WIDTHS) {
    const ctx = await browser.newContext({
      viewport: { width: w, height: 800 },
      deviceScaleFactor: 1,
    });
    const page = await ctx.newPage();
    for (const [path, name] of ROUTES) {
      const url = `${ROOT}${path}`;
      try {
        await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
        // give the lazy chunks + fonts a beat
        await page.waitForTimeout(400);

        // Scroll the entire page in 600px steps so every IntersectionObserver
        // fires once. The page then scrolls back to the top for the screenshot.
        const total = await page.evaluate(() => document.documentElement.scrollHeight);
        for (let y = 0; y < total; y += 600) {
          await page.evaluate((to) => window.scrollTo(0, to), y);
          await page.waitForTimeout(120);
        }
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.waitForTimeout(500);

        const file = resolve(OUT, `${name}-${w}.png`);
        await page.screenshot({ path: file, fullPage: true });
        console.log("ok ", w, path, "->", file);
      } catch (err) {
        console.error("ERR", w, path, err.message);
      }
    }
    await ctx.close();
  }
} finally {
  await browser.close();
}
