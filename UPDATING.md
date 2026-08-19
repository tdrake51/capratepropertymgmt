# Caprate site — weekly update guide

## The 60-second version
Open **`units.js`**. That one file is the whole availability list. Change it and the
home page counts, the availability page, the filters, the neighborhood grid, the
map pins, and the printable-flyer copy all update themselves.

## Adding a unit
Copy any existing block between the `{ ... }` braces, paste it above or below,
and change the values. Keep the commas between blocks.

```js
  {
    id: "2910-garrison-2t",          // unique, lowercase-with-dashes
    address: "2910 Garrison Blvd", unit: "2T",
    hood: "Garwyn Oaks", zip: "21216",
    beds: 2, baths: 1, type: "Apartment",
    features: ["In-unit washer / dryer", "Granite counters"],
    accessible: false, available: "Available now", rent: null,
    nearby: ["Near Hanlon Park & Lake Ashburton"],
    lat: 39.3155, lng: -76.6725, photos: []
  },
```

- **Unit no longer available?** Delete its block.
- **Bed/bath unknown?** Set `beds: null, baths: null` — the site shows
  *"Inquire about details"* and the map pin turns brass.
- **Rent:** leave `rent: null` to show "Voucher-based", or write `rent: "$1,450/mo"`.
- **Updated date:** change `updated` at the top of `units.js` (`META`).

## Adding photos
125 photos were pulled straight out of your listing sheets and are already live in
the **`photos/`** folder, named `<unit-id>-1.jpg`, `-2.jpg`, and so on.

To add more:
1. Drop the files in `photos/`, named `<unit-id>-<n>.<ext>` to match the pattern.
2. Add the filenames to that unit's `photos` array — **cover shot first**.
   ```js
   photos: ["2910-garrison-2t-1.png", "2910-garrison-2t-2.png"]
   ```

Units with an empty `photos: []` show a labeled grey placeholder — the site still
works, it just says the photo isn't up yet. Eight units are still waiting on photos:
4911 Nelson, 724 N Edgewood B, 2603 Boone, 2905 Garrison C, 2924 Garrison B,
2933 Allendale T, 2945 Allendale B, 3512 Clifton 3.

### Easiest route: send me the listing sheet
The Word listing sheets contain both the unit details **and** the photos. Attach one
and I'll pull the bed/bath, size, highlights, and every image into the site for you.

## Verify before publishing
The listing sheets disagreed with the July flyer in three places. **The sheets won** —
confirm these are right:

1. **1922 Griffis Ave** — flyer said Rosemont / 21216, "inquire". Sheet says
   Morrell Park / 21230, 2 BR / 1 BA, 1,300 sq ft. Site uses the sheet.
2. **629 Dumbarton Ave** — flyer said 1 BR, sheet says 2 BR. Site says 2 BR.
   (Sheet titles it Unit D; the filename said Unit 4.)
3. **511 E 43rd St** — flyer said Unit 3A / 3 BR, sheet says 2 BR with no unit
   number. Site says 2 BR, no unit.

Also unconfirmed:
- **1103 N Luzerne Ave** and **1700 Braddish Ave A** have no zip on their sheets;
  21205 and 21216 were inferred from the street.
- **3908 Penhurst Ave B** lists bed/bath as "Confirm", so it shows as
  "Inquire about details".
- **724 N Edgewood St** — flyer says East Baltimore / 21205, but N Edgewood St also
  runs through west Baltimore.

`lat` / `lng` are approximate to the block. For a new address, right-click it in
Google Maps and copy the lat/lng pair.

## The interactive flyer
`available-units.html` is the linked interactive availability flyer. Its `UNITS`
array is intentionally self-contained so the supplied weekly flyer can retain
its own 17-unit list, filters, and now/coming-soon statuses. Update that array
and its "Availability updated" line together when issuing a new flyer.

## What is not wired up
- **Forms open the visitor's email app** (pre-filled `mailto:`). Nothing is
  stored on the site. A real inbox-delivered form needs a form service.
- **Shortlist** is saved in the visitor's own browser only.

## Fair-housing guardrail — do not undo this
The copy states **what Caprate accepts**, never **who should apply**.
Keep "We welcome Housing Choice Vouchers", "Accepts HUD-VASH", "No extra fees for
voucher holders". Avoid describing an ideal tenant, family size, or who a unit is
"perfect for". The Equal Housing Opportunity mark stays in the footer.

## Files
| File | What it is |
|---|---|
| `Caprate Site.dc.html` | The site — all five pages |
| `units.js` | **Edit this weekly.** All unit data |
| `map.html` | The pin map shown inside the availability page |
| `available-units.html` | Linked interactive availability flyer |
| `photos/` | Unit photography — 125 files extracted from your listing sheets |
| `src/` | The original Word listing sheets, kept for reference |
