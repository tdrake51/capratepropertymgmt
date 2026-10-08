# capratepropertymgmt.com

The website for **Caprate Property Management**: renovated rental homes across
Baltimore City that accept Housing Choice Vouchers (Section 8) and HUD-VASH.

**The weekly job is editing one file, `units.js`.** See [UPDATING.md](UPDATING.md).
GitHub turns it into the whole site and publishes it.

## How a change goes live

1. Edit `units.js` (or anything else) on a branch and open a pull request,
   or edit `units.js` right on GitHub and commit to `main`.
2. GitHub builds the site and checks every page: broken links, missing
   anchors, placeholder links, images without alt text, missing page
   descriptions, and fair-housing wording such as "great for families" or
   "perfect for". A problem stops the publish and shows a red X.
3. On `main`, the checked site publishes to capratepropertymgmt.com within a
   couple of minutes. Each run shows a summary on the **Actions** tab.

To republish without a change: **Actions → Build, check, and publish →
Run workflow**.

## One-time setup

**Settings → Pages → Build and deployment → Source: GitHub Actions.**
Until this is switched, GitHub keeps serving the old hand-made pages in the
repo root. The custom domain and HTTPS settings carry over.

## What gets built

| Page | URL |
|------|-----|
| Home: every available home, filters, map, how it works | `/` |
| One page per home, with gallery, map, and inquiry form | `/homes/<address>.html` |
| One page per neighborhood served | `/neighborhoods/<name>.html` |
| Section 8 / Housing Choice Vouchers | `/section-8-housing-baltimore.html` |
| HUD-VASH | `/hud-vash-housing-baltimore.html` |
| Homeless services & placing agencies, with referral form | `/homeless-services-partners.html` |
| Voucher holder's guide | `/voucher-guide.html` |
| Printable availability list | `/available-units.html` |
| Saved homes (this device only) | `/shortlist.html` |
| Privacy policy, 404 | `/privacy.html`, `/404.html` |

Every page has its own search title and description, canonical URL,
social-sharing image, and schema.org data (the business, each home's address
and bedrooms, breadcrumbs, and FAQs). A sitemap and robots.txt are generated.
Listings are written into the page itself, not drawn in by JavaScript, so
search engines see every home.

Old links keep working: `/caprate_voucher_guide` and `/map.html` redirect.

## Where things live

| Path | What it is |
|------|-----------|
| `units.js` | **The availability list. Edit weekly.** |
| `content/pages.mjs` | Copy for the Section 8, HUD-VASH, agency, and voucher-guide pages; the neighborhood list |
| `build.mjs` | Page templates; turns `units.js` + `content/` into `dist/` |
| `check-links.mjs` | The pre-publish checks |
| `assets/site.css`, `assets/site.js` | Design and interactive features |
| `photos/` | Unit photos, named `<unit-id>-<n>.jpg` |
| `.github/workflows/build-and-deploy.yml` | Build, check, publish |

## Preview locally

Needs Node 18 or newer, nothing to install.

```bash
node build.mjs && node check-links.mjs
python3 -m http.server 8000 -d dist     # open http://localhost:8000
```

## Forms

Inquiry, referral, and saved-homes forms open the visitor's own email app with
a message filled in to leasing@capratepropertymgmt.com. Nothing is stored on
the site. Saved homes live in the visitor's browser only.

## ⚠️ Fair-housing guardrail

Copy states **what Caprate accepts** (Housing Choice Vouchers, Section 8,
HUD-VASH, no extra fees for voucher holders) and **how the process works** —
never **who should apply**. Don't describe an ideal tenant, household size, or
who a home is "perfect for", and describe neighborhoods by transit and
landmarks only. The checker blocks the most common slips, but it can't catch
everything. The Equal Housing Opportunity mark stays in the footer.

## Placeholders

- **Photos.** None of the ten current units have photos yet; their cards show a
  labeled placeholder. See UPDATING.md to add them.
- **Map pins.** The home-page map appears once at least one unit in
  `units.js` has `lat` and `lng`. Each home's page shows a map of its address
  either way.
- **Tracking.** No analytics or Facebook Pixel is installed, and the privacy
  policy says so. If you add one, update `privacyPage()` in `build.mjs` first.
