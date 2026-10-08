#!/usr/bin/env node
// Checks every page in dist/ before publishing. Fails on:
//   - links or images pointing to files that don't exist on this site
//   - #anchors that don't exist on the target page
//   - placeholder links (href="#" or empty)
//   - images without alt text, pages without a title or meta description
//   - fair-housing red flags in generated copy (see PHRASES)
// External sites are not fetched.  Run after build:  node check-links.mjs

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const DIST = path.join(path.dirname(fileURLToPath(import.meta.url)), "dist");
const HOST = "capratepropertymgmt.com";
// Phrases that describe who a home is for rather than what it offers.
const PHRASES = [/great for families/i, /perfect for/i, /ideal for (a |an )?(family|couple|single|young|professional|student|senior)/i, /no kids/i, /adults only/i, /singles only/i];

const pages = fs.readdirSync(DIST, { recursive: true }).filter((f) => f.endsWith(".html")).map((f) => f.split(path.sep).join("/"));
const cache = new Map();
function read(rel) {
  if (!cache.has(rel)) {
    const html = fs.readFileSync(path.join(DIST, rel), "utf8");
    const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
    cache.set(rel, { html, ids });
  }
  return cache.get(rel);
}
function resolve(fromRel, href) {
  const u = new URL(href, `https://${HOST}/${fromRel}`);
  if (u.host !== HOST) return null;
  let p = decodeURIComponent(u.pathname).replace(/^\//, "");
  if (p === "" || p.endsWith("/")) p += "index.html";
  return { file: p, hash: u.hash.slice(1) };
}

const errors = [];
let checked = 0;
for (const rel of pages) {
  const { html } = read(rel);
  const isRedirect = /http-equiv="refresh"/.test(html);
  if (!isRedirect) {
    if (!/<title>[^<]+<\/title>/.test(html)) errors.push(`${rel}: missing <title>`);
    if (!/name="description" content="[^"]+"/.test(html)) errors.push(`${rel}: missing meta description`);
  }
  const text = html.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, " ");
  for (const re of PHRASES) if (re.test(text)) errors.push(`${rel}: fair-housing wording "${text.match(re)[0]}"`);
  for (const m of html.matchAll(/<img\b[^>]*>/g)) if (!/\salt="[^"]+"/.test(m[0]) && !/aria-hidden/.test(m[0])) errors.push(`${rel}: image without alt text`);
  const refs = [...html.matchAll(/\s(?:href|src)="([^"]*)"/g)].map((m) => m[1]);
  for (const href of refs) {
    checked++;
    if (href === "" || href === "#") { errors.push(`${rel}: placeholder link href="${href}"`); continue; }
    if (/^(tel|mailto|data|javascript):/.test(href)) continue;
    if (/^https?:\/\//.test(href) && !href.includes(HOST)) continue;
    const t = resolve(rel, href.replace(/&amp;/g, "&"));
    if (!t) continue;
    if (!fs.existsSync(path.join(DIST, t.file))) { errors.push(`${rel}: broken link ${href}`); continue; }
    if (t.hash && t.file.endsWith(".html") && !read(t.file).ids.has(t.hash)) errors.push(`${rel}: missing anchor ${href}`);
  }
}

if (errors.length) {
  console.log(`Link check FAILED: ${errors.length} problem(s) across ${pages.length} pages\n`);
  for (const e of errors) console.log("  - " + e);
  process.exit(1);
}
console.log(`Link check passed: ${checked} links across ${pages.length} pages.`);
