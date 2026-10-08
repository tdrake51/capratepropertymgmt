#!/usr/bin/env node
// Builds capratepropertymgmt.com into dist/ from units.js and content/.
//
//   node build.mjs          -> dist/
//
// Weekly: edit units.js only. Everything else (home page counts, listing
// cards, one page per home, neighborhood pages, the printable list, the map,
// sitemap) is regenerated from it. No packages to install.

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { PAGES, GUIDE, NEIGHBORHOODS } from "./content/pages.mjs";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, "dist");
const SITE = "https://capratepropertymgmt.com";

// ---------------------------------------------------------------- data ----
function loadUnits() {
  const ctx = { window: {}, Event: class { constructor(t) { this.type = t; } } };
  ctx.window.dispatchEvent = () => {};
  vm.runInNewContext(fs.readFileSync(path.join(ROOT, "units.js"), "utf8"), ctx);
  const units = ctx.window.CAPRATE_UNITS || [];
  const meta = ctx.window.CAPRATE_META || {};
  const seen = new Set();
  for (const u of units) {
    if (!u.id) throw new Error(`units.js: a unit is missing its id (${u.address})`);
    if (seen.has(u.id)) throw new Error(`units.js: duplicate id "${u.id}"`);
    seen.add(u.id);
    u.slug = slugify(`${u.address} ${u.unit || ""}`);
    u.title = u.unit ? `${u.address}, Unit ${u.unit}` : u.address;
    u.when = /coming|soon/i.test(u.available || "") ? "soon" : "now";
    u.photos = (u.photos || []).filter((f) => fs.existsSync(path.join(ROOT, "photos", f)));
    u.features = u.features || [];
    u.nearby = u.nearby || [];
    u.bedsLabel = u.beds == null ? "Inquire" : u.beds === 0 ? "Studio" : `${u.beds} bed${u.beds > 1 ? "s" : ""}`;
    u.bathsLabel = u.baths == null ? "" : `${u.baths} bath${u.baths > 1 ? "s" : ""}`;
    u.rentLabel = u.rent ? u.rent : "Vouchers accepted";
  }
  return { units, meta };
}

const slugify = (s) => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const hoodSlug = (name) => `neighborhoods/${slugify(name)}.html`;

// ---------------------------------------------------------------- chrome --
const built = [];
const ICON = {
  home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11.5 12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>',
  heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7-4.4-9.2-8.6C1.2 8.3 3 5 6.3 5c2 0 3.2 1.1 3.7 2 .5-.9 1.7-2 3.7-2C17 5 18.8 8.3 17.2 11.4 15 15.6 12 20 12 20z" transform="translate(2 0)"/></svg>',
  pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12zm0-9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>',
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/></svg>',
};

function head({ title, description, url, schema = [], image, noindex = false }) {
  const canonical = SITE + url;
  if (!noindex) built.push(url);
  const og = image ? SITE + "/photos/" + image : SITE + "/assets/share.png";
  const ld = schema.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join("\n");
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
${noindex ? '<meta name="robots" content="noindex">\n' : ""}<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Caprate Property Management">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${og}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#12463A">
<meta name="geo.region" content="US-MD">
<meta name="geo.placename" content="Baltimore">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap">
<link rel="stylesheet" href="/assets/site.css">
${ld}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>`;
}

function header(meta, current = "") {
  const links = [
    ["Homes", "/#homes"],
    ["Section 8 / HCV", "/section-8-housing-baltimore.html"],
    ["HUD-VASH", "/hud-vash-housing-baltimore.html"],
    ["For agencies", "/homeless-services-partners.html"],
    ["Voucher guide", "/voucher-guide.html"],
  ];
  const nav = links.map(([l, h]) => `<a href="${h}"${h === current ? ' aria-current="page"' : ""}>${l}</a>`).join("");
  return `
<header class="site-header">
  <div class="wrap bar">
    <a class="brand" href="/" aria-label="Caprate Property Management home"><span class="brand-mark">${ICON.home}</span><span class="brand-name">Caprate<small>Property Management</small></span></a>
    <nav class="main-nav" aria-label="Main">${nav}</nav>
    <div class="bar-actions">
      <a class="shortlist-link" href="/shortlist.html" aria-label="Saved homes">${ICON.heart}<span class="shortlist-count" data-shortlist-count>0</span></a>
      <a class="btn btn-brass btn-sm" href="tel:${meta.phoneRaw}">${ICON.phone}<span>${meta.phone}</span></a>
      <button class="menu-btn" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>
  </div>
  <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile" hidden>${nav}<a href="/shortlist.html">Saved homes</a><a class="btn btn-brass" href="tel:${meta.phoneRaw}">Call ${meta.phone}</a></nav>
</header>`;
}

function footer(meta) {
  const hoods = NEIGHBORHOODS.map((n) => `<a href="/${hoodSlug(n.name)}">${n.name}</a>`).join("");
  return `
<footer class="site-footer">
  <div class="wrap footer-grid">
    <div>
      <a class="brand brand-light" href="/"><span class="brand-mark">${ICON.home}</span><span class="brand-name">Caprate<small>Property Management</small></span></a>
      <p>Renovated rental homes across Baltimore City. We accept Housing Choice Vouchers (Section 8) and HUD-VASH, and work with the agencies doing placement work.</p>
      <p><a href="tel:${meta.phoneRaw}">${meta.phone}</a><br><a href="mailto:${meta.email}">${meta.email}</a></p>
    </div>
    <div><h2>Renting</h2><a href="/#homes">Available homes</a><a href="/available-units.html">Printable list</a><a href="/shortlist.html">Saved homes</a><a href="/voucher-guide.html">Voucher holder's guide</a></div>
    <div><h2>Programs</h2><a href="/section-8-housing-baltimore.html">Section 8 / HCV</a><a href="/hud-vash-housing-baltimore.html">HUD-VASH</a><a href="/homeless-services-partners.html">For placing agencies</a><a href="/homeless-services-partners.html#refer">Send a referral</a></div>
    <div><h2>Neighborhoods</h2><div class="hood-links">${hoods}</div></div>
  </div>
  <div class="wrap legal">
    <span>© ${new Date().getFullYear()} Caprate Property Management · Baltimore City, Maryland · <a href="/privacy.html">Privacy</a></span>
    <span class="eho"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3 2 14h4v15h20V14h4zm-6 13h12v3H10zm0 5h12v3H10z"/></svg>Equal Housing Opportunity</span>
  </div>
</footer>
<script src="/units.js"></script>
<script src="/assets/site.js" defer></script>
</body>
</html>`;
}

function crumbs(items) {
  const html = items.map(([l, h], i) => (i < items.length - 1 ? `<a href="${h}">${l}</a>` : `<span aria-current="page">${l}</span>`)).join('<span class="sep">/</span>');
  const schema = { "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: items.map(([l, h], i) => ({ "@type": "ListItem", position: i + 1, name: l, item: SITE + h })) };
  return { html: `<nav class="crumbs" aria-label="Breadcrumb">${html}</nav>`, schema };
}

function faqBlock(faq) {
  if (!faq?.length) return { html: "", schema: null };
  const html = `<section class="faq"><h2>Common questions</h2>${faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}</section>`;
  const schema = { "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
  return { html, schema };
}

const ORG = (meta) => ({
  "@context": "https://schema.org", "@type": "RealEstateAgent", name: "Caprate Property Management",
  url: SITE + "/", telephone: "+1" + meta.phoneRaw, email: meta.email,
  areaServed: { "@type": "City", name: "Baltimore", containedInPlace: { "@type": "State", name: "Maryland" } },
  address: { "@type": "PostalAddress", addressLocality: "Baltimore", addressRegion: "MD", addressCountry: "US" },
  description: "Renovated rental homes in Baltimore City. Accepts Housing Choice Vouchers (Section 8) and HUD-VASH.",
});

// ---------------------------------------------------------------- pieces --
function photo(u, cls = "") {
  if (u.photos.length) {
    return `<img class="${cls}" src="/photos/${esc(u.photos[0])}" alt="${esc(u.title)} in ${esc(u.hood)}, Baltimore" loading="lazy">`;
  }
  return `<div class="photo-ph ${cls}" role="img" aria-label="Photo coming soon for ${esc(u.title)}">${ICON.home}<span>${esc(u.hood)}</span><small>Photos coming soon</small></div>`;
}

function card(u) {
  const tags = [u.type, ...u.features.slice(0, 2)].filter(Boolean).map((t) => `<span class="tag">${esc(t)}</span>`).join("");
  return `<article class="home-card" data-unit data-id="${esc(u.id)}" data-beds="${u.beds ?? ""}" data-hood="${esc(u.hood)}" data-when="${u.when}">
  <a class="home-card-media" href="/homes/${u.slug}.html" tabindex="-1" aria-hidden="true">${photo(u)}<span class="badge badge-${u.when}">${esc(u.available || "Available now")}</span></a>
  <button class="save-btn" type="button" data-save="${esc(u.id)}" aria-pressed="false" aria-label="Save ${esc(u.title)}">${ICON.heart}</button>
  <div class="home-card-body">
    <h3><a href="/homes/${u.slug}.html">${esc(u.title)}</a></h3>
    <p class="facts"><strong>${u.bedsLabel}</strong>${u.bathsLabel ? ` · ${u.bathsLabel}` : ""} · <a href="/${hoodSlug(u.hood)}">${esc(u.hood)}</a> ${esc(u.zip)}</p>
    <div class="tags">${tags}</div>
    ${u.nearby.length ? `<p class="nearby">${ICON.pin}${esc(u.nearby.join(" · "))}</p>` : ""}
    <p class="rent">${esc(u.rentLabel)}</p>
  </div>
</article>`;
}

function filters(units) {
  const hoods = [...new Set(units.map((u) => u.hood))].sort();
  const beds = [...new Set(units.map((u) => u.beds).filter((b) => b != null))].sort((a, b) => a - b);
  return `<div class="filters" data-filters>
  <label>Bedrooms<select data-filter="beds"><option value="">Any</option>${beds.map((b) => `<option value="${b}">${b === 0 ? "Studio" : b + "+ BR"}</option>`).join("")}</select></label>
  <label>Neighborhood<select data-filter="hood"><option value="">All neighborhoods</option>${hoods.map((h) => `<option>${esc(h)}</option>`).join("")}</select></label>
  <label>Availability<select data-filter="when"><option value="">Any</option><option value="now">Available now</option><option value="soon">Coming soon</option></select></label>
  <p class="filter-count" data-filter-count aria-live="polite">${units.length} home${units.length === 1 ? "" : "s"}</p>
</div>`;
}

function inquiryForm(meta, u) {
  return `<form class="mail-form" data-mail-form="inquiry" data-unit-title="${u ? esc(u.title) : ""}" novalidate>
  <div class="form-row">
    <label>Your name<input name="name" required autocomplete="name"></label>
    <label>Phone<input name="phone" type="tel" required autocomplete="tel"></label>
  </div>
  <div class="form-row">
    <label>Email<input name="email" type="email" autocomplete="email"></label>
    <label>Paying with
      <select name="voucher"><option>Housing Choice Voucher (Section 8)</option><option>HUD-VASH</option><option>Rental assistance program</option><option>No voucher</option><option>Not sure yet</option></select>
    </label>
  </div>
  <label>${u ? "Questions about this home" : "What are you looking for?"}<textarea name="notes" rows="3" placeholder="${u ? "Best times to tour, questions…" : "Bedrooms, neighborhoods, timing…"}"></textarea></label>
  <button class="btn btn-brass" type="submit">Send by email</button>
  <p class="form-note">This opens your email app with the details filled in. Nothing is stored on this site. Prefer to talk? Call <a href="tel:${meta.phoneRaw}">${meta.phone}</a>.</p>
</form>`;
}

// ---------------------------------------------------------------- pages ---
function homePage(units, meta) {
  const now = units.filter((u) => u.when === "now").length;
  const soon = units.filter((u) => u.when === "soon").length;
  const hoods = new Set(units.map((u) => u.hood)).size;
  const list = {
    "@context": "https://schema.org", "@type": "ItemList", name: "Available rental homes in Baltimore City",
    itemListElement: units.map((u, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE}/homes/${u.slug}.html`, name: u.title })),
  };
  return head({
    title: "Baltimore City Rentals That Accept Section 8 & HUD-VASH | Caprate Property Management",
    description: `${now} renovated Baltimore City rental homes available now. Caprate accepts Housing Choice Vouchers (Section 8) and HUD-VASH, with no extra fees for voucher holders.`,
    url: "/", schema: [ORG(meta), list],
  }) + header(meta, "/#homes") + `
<main id="main">
  <section class="hero">
    <div class="wrap hero-grid">
      <div class="hero-copy">
        <p class="eyebrow"><span class="dot"></span>Vouchers welcome · Section 8 · HUD-VASH</p>
        <h1>Renovated rental homes across <em>Baltimore City</em>.</h1>
        <p class="lede">We accept Housing Choice Vouchers and HUD-VASH on every home we list, charge no extra fees for voucher holders, and move quickly on the landlord side of the paperwork.</p>
        <div class="cta-row">
          <a class="btn btn-brass" href="#homes">Browse ${now} available home${now === 1 ? "" : "s"}</a>
          <a class="btn btn-ghost-light" href="/homeless-services-partners.html#refer">Refer a client</a>
        </div>
      </div>
      <div class="hero-stats" role="list">
        <div role="listitem"><strong>${now}</strong><span>Available now</span></div>
        <div role="listitem"><strong>${soon}</strong><span>Coming soon</span></div>
        <div role="listitem"><strong>${hoods}</strong><span>Neighborhoods</span></div>
        <div role="listitem"><strong>${esc(meta.updated || "")}</strong><span>List updated</span></div>
      </div>
    </div>
  </section>

  <section class="trust">
    <div class="wrap trust-row">
      <span>✓ Accepts HCV / Section 8</span><span>✓ Accepts HUD-VASH</span><span>✓ No extra fees for voucher holders</span><span>✓ Prompt RFTA &amp; inspections</span>
    </div>
  </section>

  <section class="section" id="homes">
    <div class="wrap">
      <div class="section-head">
        <div><p class="kicker">Available homes</p><h2>Homes ready for tours</h2></div>
        <p>Updated weekly. Tap the heart to save homes and send your list to us in one email.</p>
      </div>
      ${filters(units)}
      <div class="home-grid" data-home-grid>
${units.map(card).join("\n")}
      </div>
      <p class="empty" data-empty hidden>No homes match those filters. <button type="button" class="link-btn" data-clear-filters>Clear filters</button> or <a href="#contact">ask us about upcoming homes</a>.</p>
      <div class="map-wrap" data-map hidden><div id="map" aria-label="Map of available homes"></div></div>
    </div>
  </section>

  <section class="section section-tint">
    <div class="wrap">
      <div class="section-head"><div><p class="kicker">How it works</p><h2>From first call to keys</h2></div></div>
      <ol class="step-grid">
        <li><span>01</span><h3>Reach out</h3><p>Call, email, or send a referral. Share the voucher bedroom size and we'll point you to homes that fit.</p></li>
        <li><span>02</span><h3>Tour &amp; apply</h3><p>See the home, apply, and we complete the landlord side of the Request for Tenancy Approval promptly.</p></li>
        <li><span>03</span><h3>Inspection</h3><p>The housing authority inspects. Our homes are kept inspection-ready, and anything flagged is fixed fast.</p></li>
        <li><span>04</span><h3>Move in</h3><p>Once approved, we sign the lease and hand over keys, and we stay responsive after move-in.</p></li>
      </ol>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="section-head"><div><p class="kicker">Programs we work with</p><h2>Find the page for your situation</h2></div></div>
      <div class="door-grid">
        <a class="door" href="/section-8-housing-baltimore.html"><h3>Section 8 &amp; Housing Choice Vouchers</h3><p>How renting with a voucher works at Caprate, your rights in Maryland, and what to expect at inspection.</p><span>Read more →</span></a>
        <a class="door" href="/hud-vash-housing-baltimore.html"><h3>HUD-VASH</h3><p>For HUD-VASH voucher holders and VA case managers. One contact from referral to move-in.</p><span>Read more →</span></a>
        <a class="door" href="/homeless-services-partners.html"><h3>Homeless services &amp; placing agencies</h3><p>For rapid rehousing, supportive housing, and Coordinated Access case managers. Send a referral in a minute.</p><span>Read more →</span></a>
      </div>
    </div>
  </section>

  <section class="section section-tint">
    <div class="wrap">
      <div class="section-head"><div><p class="kicker">Neighborhoods</p><h2>Where we have homes</h2></div><p>Baltimore City neighborhoods we manage in. Availability changes weekly.</p></div>
      <div class="hood-grid">
${NEIGHBORHOODS.map((n) => { const c = units.filter((u) => u.hood === n.name).length; return `        <a class="hood" href="/${hoodSlug(n.name)}"><strong>${n.name}</strong><span>${n.zip}</span><em>${c ? `${c} home${c > 1 ? "s" : ""} listed` : "Ask about upcoming"}</em></a>`; }).join("\n")}
      </div>
    </div>
  </section>

  <section class="section" id="contact">
    <div class="wrap contact-grid">
      <div>
        <p class="kicker">Get in touch</p>
        <h2>Ask about a home, or get the weekly list</h2>
        <p>Tell us what you're looking for and we'll reply with current availability. Case managers can also <a href="/homeless-services-partners.html#refer">send a referral</a>.</p>
        <p class="contact-lines"><a href="tel:${meta.phoneRaw}">${ICON.phone}${meta.phone}</a><a href="mailto:${meta.email}">${meta.email}</a></p>
      </div>
      ${inquiryForm(meta)}
    </div>
  </section>
</main>` + footer(meta);
}

function unitPage(u, units, meta) {
  const c = crumbs([["Home", "/"], [u.hood, "/" + hoodSlug(u.hood)], [u.title, `/homes/${u.slug}.html`]]);
  const others = units.filter((x) => x.id !== u.id).sort((a, b) => (b.hood === u.hood) - (a.hood === u.hood)).slice(0, 3);
  const gallery = u.photos.length
    ? `<div class="gallery" data-gallery>${u.photos.map((p, i) => `<button type="button" class="g-item${i === 0 ? " g-main" : ""}" data-index="${i}">${i === 0 ? `<span class="g-bg" style="background-image:url('/photos/${esc(p)}')" aria-hidden="true"></span>` : ""}<img src="/photos/${esc(p)}" alt="${esc(u.title)}, photo ${i + 1} of ${u.photos.length}" loading="${i < 3 ? "eager" : "lazy"}"></button>`).join("")}</div>`
    : `<div class="gallery gallery-empty">${photo(u, "g-ph")}</div>`;
  const addr = `${u.address}, Baltimore, MD ${u.zip}`;
  const schema = {
    "@context": "https://schema.org", "@type": u.unit ? "Apartment" : "SingleFamilyResidence", name: u.title,
    url: `${SITE}/homes/${u.slug}.html`,
    address: { "@type": "PostalAddress", streetAddress: u.address + (u.unit ? ` Unit ${u.unit}` : ""), addressLocality: "Baltimore", addressRegion: "MD", postalCode: u.zip, addressCountry: "US" },
    ...(u.beds != null ? { numberOfBedrooms: u.beds, numberOfRooms: u.beds } : {}),
    ...(u.baths != null ? { numberOfBathroomsTotal: u.baths } : {}),
    amenityFeature: u.features.map((f) => ({ "@type": "LocationFeatureSpecification", name: f, value: true })),
    ...(u.photos.length ? { image: u.photos.map((p) => `${SITE}/photos/${p}`) } : {}),
  };
  return head({
    title: `${u.title} — ${u.bedsLabel} rental in ${u.hood}, Baltimore ${u.zip} | Caprate`,
    description: `${u.bedsLabel}${u.bathsLabel ? ", " + u.bathsLabel : ""} ${u.type ? u.type.toLowerCase() : "rental"} at ${u.title} in ${u.hood}, Baltimore ${u.zip}. ${u.available}. Accepts Section 8 and HUD-VASH.`,
    url: `/homes/${u.slug}.html`, schema: [schema, c.schema], image: u.photos[0],
  }) + header(meta) + `
<main id="main">
  <section class="unit-head">
    <div class="wrap">
      ${c.html}
      <div class="unit-title-row">
        <div>
          <span class="badge badge-${u.when}">${esc(u.available || "Available now")}</span>
          <h1>${esc(u.title)}</h1>
          <p class="unit-sub">${ICON.pin}<a href="/${hoodSlug(u.hood)}">${esc(u.hood)}</a>, Baltimore, MD ${esc(u.zip)}</p>
        </div>
        <button class="btn btn-outline save-big" type="button" data-save="${esc(u.id)}" aria-pressed="false">${ICON.heart}<span data-save-label>Save this home</span></button>
      </div>
    </div>
  </section>
  <section class="section section-tight">
    <div class="wrap unit-grid">
      <div class="unit-main">
        ${gallery}
        <dl class="spec">
          <div><dt>Bedrooms</dt><dd>${u.beds == null ? "Inquire" : u.beds === 0 ? "Studio" : u.beds}</dd></div>
          <div><dt>Bathrooms</dt><dd>${u.baths ?? "Inquire"}</dd></div>
          <div><dt>Home type</dt><dd>${esc(u.type || "Rental")}</dd></div>
          <div><dt>Rent</dt><dd>${esc(u.rentLabel)}</dd></div>
        </dl>
        ${u.features.length ? `<h2>Features</h2><ul class="checks">${u.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>` : ""}
        ${u.nearby.length ? `<h2>Getting around</h2><ul class="checks checks-pin">${u.nearby.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>` : ""}
        ${u.accessible ? `<p class="note">Accessible features available — ask us for details.</p>` : ""}
        <h2>Location</h2>
        <div class="map-embed"><iframe title="Map of ${esc(addr)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=${encodeURIComponent(addr)}&amp;output=embed"></iframe></div>
        <p><a href="https://www.google.com/maps/search/?api=1&amp;query=${encodeURIComponent(addr)}" rel="noopener">Open in Google Maps</a></p>
      </div>
      <aside class="unit-side">
        <div class="side-card">
          <h2>Ask about this home</h2>
          <p class="side-lede">We accept Housing Choice Vouchers and HUD-VASH. No extra fees for voucher holders.</p>
          <a class="btn btn-brass btn-block" href="tel:${meta.phoneRaw}">${ICON.phone}Call ${meta.phone}</a>
          ${inquiryForm(meta, u)}
        </div>
      </aside>
    </div>
  </section>
  ${others.length ? `<section class="section section-tint"><div class="wrap"><div class="section-head"><div><p class="kicker">More homes</p><h2>You might also look at</h2></div></div><div class="home-grid">${others.map(card).join("")}</div></div></section>` : ""}
</main>` + footer(meta);
}

function hoodPage(n, units, meta) {
  const here = units.filter((u) => u.hood === n.name);
  const nearby = [...new Set(here.flatMap((u) => u.nearby))];
  const c = crumbs([["Home", "/"], ["Neighborhoods", "/#homes"], [n.name, "/" + hoodSlug(n.name)]]);
  const others = NEIGHBORHOODS.filter((x) => x.name !== n.name);
  return head({
    title: `${n.name} Rentals, Baltimore ${n.zip} — Section 8 & HUD-VASH Accepted | Caprate`,
    description: `${here.length ? `${here.length} rental home${here.length > 1 ? "s" : ""} available` : "Rental homes"} in ${n.name}, Baltimore ${n.zip}. Caprate accepts Housing Choice Vouchers (Section 8) and HUD-VASH.`,
    url: "/" + hoodSlug(n.name), schema: [c.schema],
  }) + header(meta) + `
<main id="main">
  <section class="page-head">
    <div class="wrap">
      ${c.html}
      <p class="kicker">Baltimore City · ${n.zip}</p>
      <h1>Rental homes in ${n.name}</h1>
      <p class="lede">${here.length ? `${here.length} home${here.length > 1 ? "s" : ""} listed in ${n.name} right now.` : `No ${n.name} homes are listed this week. New homes open up often — ask to get the weekly list.`} We accept Housing Choice Vouchers (Section 8) and HUD-VASH.</p>
      ${nearby.length ? `<p class="hood-near">${ICON.pin}${esc(nearby.join(" · "))}</p>` : ""}
    </div>
  </section>
  <section class="section section-tight">
    <div class="wrap">
      ${here.length ? `<div class="home-grid">${here.map(card).join("")}</div>` : `<div class="callout"><h2>Get notified about ${n.name}</h2><p>Tell us your bedroom size and we'll let you know when a home opens up here.</p><a class="btn btn-brass" href="/#contact">Ask about ${n.name}</a> <a class="btn btn-outline" href="/#homes">See all available homes</a></div>`}
    </div>
  </section>
  <section class="section section-tint">
    <div class="wrap"><h2 class="h3">Other neighborhoods we serve</h2><div class="chip-row">${others.map((x) => `<a class="chip" href="/${hoodSlug(x.name)}">${x.name}</a>`).join("")}</div></div>
  </section>
</main>` + footer(meta);
}

function contentPage(p, units, meta) {
  const c = crumbs([["Home", "/"], [p.nav, `/${p.slug}.html`]]);
  const f = faqBlock(p.faq);
  const now = units.filter((u) => u.when === "now");
  return head({ title: p.title, description: p.description, url: `/${p.slug}.html`, schema: [ORG(meta), c.schema, ...(f.schema ? [f.schema] : [])] })
  + header(meta, `/${p.slug}.html`) + `
<main id="main">
  <section class="page-head">
    <div class="wrap">
      ${c.html}
      <p class="kicker">${esc(p.kicker)}</p>
      <h1>${esc(p.h1)}</h1>
      <p class="lede">${esc(p.lede)}</p>
      <div class="cta-row"><a class="btn btn-brass" href="/#homes">See ${now.length} available home${now.length === 1 ? "" : "s"}</a><a class="btn btn-outline" href="tel:${meta.phoneRaw}">Call ${meta.phone}</a></div>
    </div>
  </section>
  <section class="section section-tight">
    <div class="wrap article-grid">
      <article class="prose">${p.body}${f.html}</article>
      <aside class="article-side">
        <div class="side-card">
          <h2>Homes available now</h2>
          <ul class="mini-list">${now.slice(0, 5).map((u) => `<li><a href="/homes/${u.slug}.html">${esc(u.title)}</a><span>${u.bedsLabel} · ${esc(u.hood)}</span></li>`).join("")}</ul>
          <a class="btn btn-outline btn-block" href="/#homes">Browse all homes</a>
        </div>
      </aside>
    </div>
  </section>
</main>` + footer(meta);
}

function guidePage(units, meta) {
  const g = GUIDE;
  const c = crumbs([["Home", "/"], ["Voucher guide", "/voucher-guide.html"]]);
  return head({ title: g.title, description: g.description, url: "/voucher-guide.html", schema: [c.schema] })
  + header(meta, "/voucher-guide.html") + `
<main id="main">
  <section class="page-head">
    <div class="wrap">${c.html}<p class="kicker">${g.kicker}</p><h1>${g.h1}</h1><p class="lede">${g.lede}</p></div>
  </section>
  <section class="section section-tight">
    <div class="wrap article-grid">
      <article class="prose">
        ${g.sections.map(([id, h, body], i) => `<section id="${id}" class="guide-sec"><p class="sec-num">Section ${String(i + 1).padStart(2, "0")}</p><h2>${h}</h2>${body}</section>`).join("")}
        <p class="note">${g.footnote}</p>
      </article>
      <aside class="article-side">
        <nav class="side-card toc" aria-label="In this guide"><h2>In this guide</h2>${g.sections.map(([id, h]) => `<a href="#${id}">${h}</a>`).join("")}</nav>
        <div class="side-card"><h2>Ready to look?</h2><p class="side-lede">${units.filter((u) => u.when === "now").length} homes available now.</p><a class="btn btn-brass btn-block" href="/#homes">Browse homes</a></div>
      </aside>
    </div>
  </section>
</main>` + footer(meta);
}

function printablePage(units, meta) {
  const rows = units.map((u) => `<tr><td><a href="/homes/${u.slug}.html">${esc(u.title)}</a></td><td>${esc(u.hood)} ${esc(u.zip)}</td><td>${u.bedsLabel}${u.bathsLabel ? " / " + u.bathsLabel : ""}</td><td>${esc(u.type || "")}</td><td>${esc(u.available)}</td></tr>`).join("");
  return head({ title: `Available Units — ${meta.updated} | Caprate Property Management`, description: `Printable list of Caprate's available Baltimore City rental homes, updated ${meta.updated}. Accepts Section 8 and HUD-VASH.`, url: "/available-units.html" })
  + header(meta) + `
<main id="main">
  <section class="page-head"><div class="wrap">
    <p class="kicker">Updated ${esc(meta.updated)}</p><h1>Available units</h1>
    <p class="lede">Every home accepts Housing Choice Vouchers (Section 8) and HUD-VASH. Call ${meta.phone} or email ${meta.email}.</p>
    <div class="cta-row no-print"><button class="btn btn-brass" type="button" data-print>Print or save as PDF</button><a class="btn btn-outline" href="/#homes">Browse with photos</a></div>
  </div></section>
  <section class="section section-tight"><div class="wrap">
    <div class="table-wrap"><table class="unit-table"><thead><tr><th>Address</th><th>Neighborhood</th><th>Beds / baths</th><th>Type</th><th>Status</th></tr></thead><tbody>${rows}</tbody></table></div>
    <p class="note">Equal Housing Opportunity. Caprate Property Management · Baltimore City, Maryland.</p>
  </div></section>
</main>` + footer(meta);
}

function shortlistPage(meta) {
  return head({ title: "Saved Homes | Caprate Property Management", description: "Homes you've saved on this device.", url: "/shortlist.html", noindex: true })
  + header(meta, "/shortlist.html") + `
<main id="main">
  <section class="page-head"><div class="wrap"><p class="kicker">Saved homes</p><h1>Your shortlist</h1>
  <p class="lede">Homes you save are kept on this device only. Send the whole list to us in one email and we'll set up tours.</p></div></section>
  <section class="section section-tight"><div class="wrap">
    <div class="home-grid" data-shortlist-grid></div>
    <div class="callout" data-shortlist-empty hidden><h2>No saved homes yet</h2><p>Tap the heart on any home to save it here.</p><a class="btn btn-brass" href="/#homes">Browse homes</a></div>
    <p class="cta-row" data-shortlist-actions hidden><a class="btn btn-brass" data-shortlist-mail href="mailto:${meta.email}">Email this list to Caprate</a><button class="btn btn-outline" type="button" data-shortlist-clear>Clear list</button></p>
  </div></section>
</main>` + footer(meta);
}

function privacyPage(meta) {
  const body = `
<p><strong>Last updated: ${esc(meta.updated)}.</strong> Caprate Property Management ("Caprate," "we," or "us") respects your privacy. This policy explains what information we collect through this website and how we use it.</p>
<h2>Information we collect</h2>
<p>This website is informational. It has no accounts, and its forms do not send anything to us directly: they open your own email app with a message filled in, and you decide whether to send it.</p>
<ul><li><strong>When you contact us.</strong> If you call, email, or send a pre-filled form email, we receive what you choose to share, such as your name, phone, email, and housing needs.</li>
<li><strong>Saved homes.</strong> Homes you save are stored in your own browser on your device. We never see that list unless you email it to us.</li>
<li><strong>Hosting.</strong> Our website host may log standard technical information such as IP address and pages requested, for security and reliability.</li></ul>
<p>We do not currently use advertising or analytics trackers on this site. If that changes, we will update this policy first.</p>
<h2>How we use your information</h2>
<ul><li>To respond to your questions about available homes</li><li>To coordinate tours, applications, and voucher paperwork you ask us to help with</li><li>To keep the website secure and working</li></ul>
<p>We do not sell your personal information.</p>
<h2>Sensitive information</h2>
<p>Please don't send health information or details of a disability diagnosis through email or forms. If you need a reasonable accommodation, tell us what you need, and we'll work with you on it.</p>
<h2>Who we share it with</h2>
<p>Only service providers who help us operate, people you ask us to coordinate with (such as your caseworker or housing authority), and anyone the law requires.</p>
<h2>Fair housing</h2>
<p>Caprate Property Management is committed to equal housing opportunity. We do not discriminate on the basis of race, color, religion, sex, national origin, familial status, disability, source of income, or any other characteristic protected by federal, Maryland, or Baltimore City law.</p>
<h2>Children</h2>
<p>This website is intended for adults seeking housing and for professionals who place them. We do not knowingly collect information from children under 13.</p>
<h2>Contact</h2>
<p>Caprate Property Management, Baltimore City, Maryland<br>Phone: <a href="tel:${meta.phoneRaw}">${meta.phone}</a><br>Email: <a href="mailto:${meta.email}">${meta.email}</a></p>`;
  return head({ title: "Privacy Policy | Caprate Property Management", description: "How Caprate Property Management handles information on its website.", url: "/privacy.html" })
  + header(meta) + `<main id="main"><section class="page-head"><div class="wrap"><p class="kicker">Privacy</p><h1>Privacy policy</h1></div></section><section class="section section-tight"><div class="wrap"><article class="prose">${body}</article></div></section></main>` + footer(meta);
}

function notFound(meta) {
  return head({ title: "Page not found | Caprate Property Management", description: "This page does not exist.", url: "/404.html", noindex: true })
  + header(meta) + `<main id="main"><section class="page-head"><div class="wrap"><p class="kicker">Page not found</p><h1>That page isn't here.</h1><p class="lede">The home may have been rented, or the link may be old.</p><div class="cta-row"><a class="btn btn-brass" href="/#homes">See available homes</a><a class="btn btn-outline" href="tel:${meta.phoneRaw}">Call ${meta.phone}</a></div></div></section></main>` + footer(meta);
}

// Old addresses that are linked from flyers and Facebook: keep them working.
function redirect(to) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Moved</title><link rel="canonical" href="${SITE}${to}"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0; url=${to}"></head><body><p>This page moved to <a href="${to}">${SITE}${to}</a>.</p><script>location.replace(${JSON.stringify(to)} + location.hash)</script></body></html>`;
}

// ---------------------------------------------------------------- write ---
function write(rel, content) {
  const f = path.join(DIST, rel);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, content);
}

function main() {
  const { units, meta } = loadUnits();
  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(DIST, { recursive: true });

  write("index.html", homePage(units, meta));
  for (const u of units) write(`homes/${u.slug}.html`, unitPage(u, units, meta));
  for (const n of NEIGHBORHOODS) write(hoodSlug(n.name), hoodPage(n, units, meta));
  for (const p of PAGES) write(`${p.slug}.html`, contentPage(p, units, meta));
  write("voucher-guide.html", guidePage(units, meta));
  write("available-units.html", printablePage(units, meta));
  write("shortlist.html", shortlistPage(meta));
  write("privacy.html", privacyPage(meta));
  write("404.html", notFound(meta));
  write("caprate_voucher_guide.html", redirect("/voucher-guide.html"));
  write("map.html", redirect("/#homes"));

  // Static files.
  fs.cpSync(path.join(ROOT, "assets"), path.join(DIST, "assets"), { recursive: true });
  fs.cpSync(path.join(ROOT, "photos"), path.join(DIST, "photos"), { recursive: true });
  fs.copyFileSync(path.join(ROOT, "units.js"), path.join(DIST, "units.js"));
  write("CNAME", "capratepropertymgmt.com\n");
  write(".nojekyll", "");
  write("favicon.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#12463A"/><path fill="#C4924B" d="M14 31 32 16l18 15v17a2 2 0 0 1-2 2H38V38H26v12H16a2 2 0 0 1-2-2z"/></svg>`);
  write("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
  const today = new Date().toISOString().slice(0, 10);
  write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...new Set(built)].map((u) => `  <url><loc>${SITE}${u}</loc><lastmod>${today}</lastmod></url>`).join("\n")}\n</urlset>\n`);

  const pages = fs.readdirSync(DIST, { recursive: true }).filter((f) => f.endsWith(".html")).length;
  console.log(`Built ${pages} pages: ${units.length} homes, ${NEIGHBORHOODS.length} neighborhoods, ${PAGES.length + 1} guides.`);
}

main();
