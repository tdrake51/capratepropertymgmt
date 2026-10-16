// Keeps content/homes-archive.json: every home the site has ever listed, with
// its neighborhood. When a home comes off units.js, the build forwards its old
// page (/homes/<slug>.html) to that neighborhood page instead of a "not found",
// so links people saved and pages Google indexed keep working.
//
// Runs on its own in GitHub (.github/workflows/remember-homes.yml) whenever
// units.js changes. To run locally: node remember-homes.mjs
import fs from "node:fs";
import vm from "node:vm";

const ARCHIVE = "content/homes-archive.json";
// Same as build.mjs
const slugify = (s) => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const ctx = { window: {}, Event: class { constructor(t) { this.type = t; } } };
ctx.window.dispatchEvent = () => {};
vm.runInNewContext(fs.readFileSync("units.js", "utf8"), ctx);
const units = ctx.window.CAPRATE_UNITS || [];
const archive = fs.existsSync(ARCHIVE) ? JSON.parse(fs.readFileSync(ARCHIVE, "utf8")) : {};
let added = 0;
for (const u of units) {
  const slug = slugify(`${u.address} ${u.unit || ""}`);
  if (archive[slug] !== u.hood) { archive[slug] = u.hood; added++; }
}
const sorted = Object.fromEntries(Object.entries(archive).sort(([a], [b]) => a.localeCompare(b)));
fs.writeFileSync(ARCHIVE, JSON.stringify(sorted, null, 2) + "\n");
console.log(`homes-archive.json: ${Object.keys(sorted).length} homes (${added} new or changed)`);
