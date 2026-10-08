# Caprate site — weekly update guide

## The 60-second version

Open **`units.js`**, change it, and commit to `main`. You can do this right on
GitHub: open the file, click the pencil, edit, and **Commit changes**.

GitHub rebuilds the whole site from that one file — home page counts, listing
cards, each home's own page, the neighborhood pages, the printable list, the
map, and the sitemap — checks it, and publishes it within a couple of minutes.

Also change the `updated:` date in `CAPRATE_META` at the bottom of the file.

## Adding a unit

Copy any existing line inside `CAPRATE_UNITS`, paste it, and change the values.
Keep the comma at the end of each line.

```js
{id:"garrison2910_2T", address:"2910 Garrison Blvd", unit:"2T", beds:2, baths:1, type:"Renovated apartment", hood:"Garwyn Oaks", zip:"21216", features:["In-unit washer / dryer","Granite counters"], nearby:["Near Mondawmin Metro"], photos:[], available:"Available now", rent:"", accessible:false},
```

| Field | What to put |
|---|---|
| `id` | Unique, no spaces. Used for saved homes and photo names. |
| `address`, `unit` | The home's page address comes from these, e.g. `/homes/2910-garrison-blvd-2t.html`. Leave `unit:""` for a whole house. |
| `beds`, `baths` | Numbers. `null` shows "Inquire". `0` beds shows "Studio". |
| `hood`, `zip` | Use a neighborhood name from the list in `content/pages.mjs` so the home appears on that neighborhood's page. |
| `features` | Things the home **has**: "Central A/C", "Finished basement". Never who it's for (see below). |
| `nearby` | Transit and landmarks: "Near Mondawmin Metro". |
| `available` | `"Available now"`, `"Showing scheduled"`, or `"Coming soon"`. |
| `rent` | Leave `""` to show "Vouchers accepted", or write `"$1,450/mo"`. |
| `accessible` | `true` adds an accessibility note to the home's page. |
| `photos` | File names in `photos/`, cover shot first. |
| `lat`, `lng` | Optional. Adds a pin on the home-page map. In Google Maps, right-click the address and click the numbers to copy them: `lat:39.3155, lng:-76.6725`. |

**Home rented?** Delete its line. Its page disappears on the next publish, and
old links to it land on a "That page isn't here — see available homes" page.

## Adding photos

1. Upload the files to `photos/`, named `<id>-1.jpg`, `<id>-2.jpg`, and so on.
   (On GitHub: open `photos/`, **Add file → Upload files**.)
2. List them in that unit's `photos`, cover shot first:
   `photos:["garrison2905B-1.jpg","garrison2905B-2.jpg"]`

A file name that doesn't exist in `photos/` is skipped, so a typo shows the
placeholder instead of a broken image.

Older photos from previous listing sheets are still in `photos/` (for example
`1103-n-luzerne-*`, `2910-garrison-2t-*`). They can be reused if one of those
homes comes back.

## Neighborhoods

The list of neighborhoods with their own page is `NEIGHBORHOODS` near the bottom
of `content/pages.mjs`. Add one there when you start managing in a new area.
A neighborhood page stays up even in weeks with nothing listed, so search
results never lead to a dead page.

## If the publish fails

Open the **Actions** tab and click the red run. The checks say exactly what's
wrong — for example, a missing comma in `units.js`, a broken link, or wording
like "great for families". Fix it and commit again; the live site doesn't change
until a run passes.

## Fair-housing guardrail — do not undo this

The copy states **what Caprate accepts**, never **who should apply**.
Keep "We accept Housing Choice Vouchers", "Accepts HUD-VASH", "No extra fees
for voucher holders". Avoid describing an ideal tenant, family size, or who a
unit is "perfect for". The Equal Housing Opportunity mark stays in the footer.
