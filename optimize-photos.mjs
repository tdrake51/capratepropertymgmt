// Makes small, fast WebP copies of every photo in photos/ (640px and 1280px
// wide) into photos/web/. The site uses them automatically when they exist and
// falls back to the original photo when they don't.
//
// Runs on its own in GitHub (.github/workflows/optimize-photos.yml) whenever
// photos are added, so nobody needs to run it by hand. To run it locally:
//   npm install --no-save sharp && node optimize-photos.mjs
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SRC = "photos";
const OUT = path.join(SRC, "web");
const WIDTHS = [640, 1280];
fs.mkdirSync(OUT, { recursive: true });

let made = 0;
for (const file of fs.readdirSync(SRC)) {
  if (!/\.(jpe?g|png)$/i.test(file)) continue;
  const base = file.replace(/\.[^.]+$/, "");
  for (const w of WIDTHS) {
    const out = path.join(OUT, `${base}-${w}.webp`);
    if (fs.existsSync(out) && fs.statSync(out).mtimeMs >= fs.statSync(path.join(SRC, file)).mtimeMs) continue;
    await sharp(path.join(SRC, file)).rotate().resize({ width: w, withoutEnlargement: true }).webp({ quality: 74 }).toFile(out);
    made++;
  }
}
console.log(`Optimized photos: ${made} new WebP file(s) in ${OUT}`);
