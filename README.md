# Caprate Property Management — Landing Page

A single-file, responsive marketing landing page for **capratepropertymgmt.com**. Built to serve Caprate's two audiences at once: prospective **residents** looking for voucher-friendly homes, and **case managers / placing agencies** referring clients.

- **File:** `caprate_landing.html`
- **Type:** Static HTML (self-contained — HTML, CSS, and a small script all in one file)
- **Dependencies:** None to install. Loads Google Fonts (Fraunces + Inter) from a CDN at runtime.
- **Responsive:** Yes — adapts from desktop down to mobile.
- **Accessibility:** Keyboard focus preserved, reduced-motion respected, Equal Housing Opportunity mark in footer.

---

## What's on the page

| Section | Purpose |
|---|---|
| **Header / nav** | Sticky navigation with a "Refer / Inquire" call-to-action. Collapses to a menu button on mobile. |
| **Hero** | Voucher-welcome badge, headline, and the signature "two doors" split: *Looking for a home* (residents) vs. *Placing a client* (case managers). |
| **Trust strip** | Accepts HCV/Section 8 · Accepts HUD-VASH · No extra fees · Responsive to RTA. |
| **How It Works** | Three plain steps: Reach out → Tour & apply → Move in. |
| **Available Homes** | Neighborhood panel showing the Baltimore areas Caprate operates in. |
| **For Case Managers** | Dedicated section on RTA turnaround, single point of contact, role boundaries, and move-in-ready inventory. Includes a "Request the agency list" card. |
| **Contact** | Call and email calls-to-action. |
| **Footer** | Brand, links, contact, and Equal Housing Opportunity mark. |

---

## How to view it

Double-click `caprate_landing.html`, or drag it into any web browser. No server or build step needed.

---

## How to publish it to capratepropertymgmt.com

The page is a standard static file, so any of these will work:

1. **Hand it to your current host.** Whoever manages the domain can upload `caprate_landing.html` (usually renamed `index.html`) to the site's web root.
2. **Static hosting services** (Netlify, Cloudflare Pages, GitHub Pages, etc.) — drag-and-drop the file or connect a repo.
3. **Your existing site builder** — if the domain runs on a platform like WordPress or Squarespace, this is a hand-coded page rather than a native template, so it would be embedded or added as a custom-HTML page. Ask your host how they prefer to take custom HTML.

> Rename to `index.html` if it's meant to be the site's front page.

---

## Editing the common things

Everything lives in the one file. Open it in any text editor.

### Contact info
Search for these and replace as needed:
- Phone: `(410) 415-3142` (appears in nav-adjacent CTA, the case-manager card, the contact band, and footer)
- The `tel:4104153142` link (the "Call" button)
- Email: `leasing@capratepropertymgmt.com` and the `mailto:` link

### Neighborhoods
Find the `hood-grid` block. Each area is one small block:
```html
<div class="hood"><div class="name">Arlington</div><div class="zip">21215</div></div>
```
Add, remove, or edit these to match current inventory.

### Colors
All colors are defined once at the top, in the `:root` block:
```css
--pine:#12463A;      /* deep brand green — headings, dark panels */
--green:#1F6B4A;     /* Caprate brand green — accents */
--green-soft:#E3F1EA;/* pale green — badges, CTA band */
--paper:#FBFAF6;     /* warm off-white background */
--brass:#C4924B;     /* warm accent — primary buttons */
```
Change a value here and it updates everywhere.

### Text / copy
Headlines and body text are plain text inside the HTML tags — edit directly. **Read the fair-housing note below before rewriting any copy.**

---

## ⚠️ Fair-housing guardrail (important)

The copy is written to state **what Caprate accepts** (Housing Choice Vouchers, Section 8, HUD-VASH) — never **who should apply**. This matters: public housing advertising is held to a stricter standard than agency-to-agency outreach, and language implying a preference for or against any protected group can create liability.

When editing:
- ✅ Keep: "We welcome Housing Choice Vouchers," "Accepts Section 8," "No extra fees for voucher holders."
- 🚫 Avoid: describing an ideal tenant, family size, or who a unit is "perfect for."

The footer carries an **Equal Housing Opportunity** mark — keep it.

---

## Known placeholders (things to wire up before or after launch)

This is a **front-end design**. A few pieces are intentionally not connected to live systems:

1. **"Available Homes" is not a live feed.** It shows the neighborhoods you serve and points people to contact you for the current list. Making the actual units display automatically (from your portfolio sheet) would require a listings system — a separate build.
2. **Buttons open phone/email, not a form.** The CTAs use `tel:` and `mailto:` links. If you want a contact form that lands in your inbox, that needs a form service or a backend — not included here.
3. **Fonts load from a CDN.** The page pulls Fraunces and Inter from Google Fonts at runtime. It works out of the box; if you ever need the site to work fully offline or without third-party requests, the fonts would need to be self-hosted.

---

## Want to extend it?

Common next steps, in rough order of effort:
- Swap in real interior photography in the hero and neighborhoods sections.
- Add a working contact / referral form.
- Connect a live availability list driven by the portfolio data.
- Add an agency-facing page or resource section for case managers.

---

*Caprate Property Management · Baltimore City, Maryland · (410) 415-3142 · leasing@capratepropertymgmt.com*
