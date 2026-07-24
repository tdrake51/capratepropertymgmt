/* ============================================================
   CAPRATE AVAILABILITY DATA — the only file you edit weekly.
   ------------------------------------------------------------
   Every unit is one block. Copy an existing block, change the
   values, done. Delete a block to remove a unit from the site.

   FIELDS
     id         unique slug, lowercase-with-dashes. Also the photo
                filename prefix, so don't rename it casually.
     address    street address, e.g. "2910 Garrison Blvd"
     unit       unit designation or "" if none, e.g. "2T", "Bsmt"
     hood       neighborhood name (groups + filters the site)
     zip        5-digit zip
     beds       number, or null for "inquire about details"
     baths      number, or null
     type       "Rowhome" | "Apartment" | "Single-family" ...
     sqft       "~1,000 sq ft" or "" if unknown
     community  building / community name, or ""
     tagline    the one-line summary from the listing sheet
     features   3-ish short chips shown on the card
     highlights full bullet list shown in the unit detail view
     accessible true if ADA / accessible features
     available  "Available now" | "Aug 1" | "Call for date"
     rent       leave null → shows "Voucher-based". Or "$1,450/mo"
     nearby     transit / school / landmark notes (array, can be [])
     lat, lng   map pin location — VERIFY before publishing
     photos     filenames inside photos/, cover shot first.
                Empty array = a labeled placeholder is shown.

   ⚠ THREE THINGS TO CONFIRM — see the note at the bottom.
   ============================================================ */

export const META = {
  city: "Baltimore City",
  updated: "July 2026",
  phone: "(410) 415-3142",
  phoneRaw: "4104153142",
  email: "leasing@capratepropertymgmt.com",
  contact: "Terry Drake"
};

export const UNITS = [
  {
    id: "5110-nelson",
    address: "5110 Nelson Ave", unit: "",
    hood: "Arlington", zip: "21215",
    beds: 2, baths: 1, type: "Single-family rowhome, end-of-row",
    sqft: "~1,000 sq ft", community: "",
    tagline: "Fully renovated end-of-row rowhome with a finished basement and private fenced yard.",
    features: ["In-unit W/D", "Finished basement", "Fenced rear yard"],
    highlights: [
      "Fully renovated end-of-row rowhome with a bright, open main level",
      "Stainless steel kitchen with granite counters and white shaker cabinets",
      "Separate dining area with rear yard access",
      "Two well-sized bedrooms with large windows",
      "Modern full bath with tiled tub/shower and skylight",
      "Finished basement with in-unit washer & dryer and extra living space",
      "Wood-look LVP flooring throughout"
    ],
    accessible: false, available: "Available now", rent: null,
    nearby: ["Near Northern Pkwy & Wabash Ave bus routes"],
    lat: 39.3520, lng: -76.6800,
    photos: ["5110-nelson-1.jpg","5110-nelson-2.jpg","5110-nelson-3.jpg","5110-nelson-4.jpg","5110-nelson-5.jpg","5110-nelson-6.jpg","5110-nelson-7.jpg","5110-nelson-8.jpg","5110-nelson-9.jpg","5110-nelson-10.jpg","5110-nelson-11.jpg","5110-nelson-12.jpg","5110-nelson-13.jpg","5110-nelson-14.jpg","5110-nelson-15.jpg"]
  },
  {
    id: "4911-nelson",
    address: "4911 Nelson Ave", unit: "",
    hood: "Arlington", zip: "21215",
    beds: null, baths: null, type: "Rowhome",
    sqft: "", community: "", tagline: "",
    features: [], highlights: [],
    accessible: false, available: "Call for date", rent: null,
    nearby: [], lat: 39.3495, lng: -76.6795, photos: []
  },
  {
    id: "629-dumbarton-d",
    address: "629 Dumbarton Ave", unit: "D",
    hood: "Original Northwood", zip: "21218",
    beds: 2, baths: 1, type: "Apartment in multi-unit building",
    sqft: "", community: "",
    tagline: "Fully renovated 2-bedroom with open-concept living and an enclosed sun porch.",
    features: ["Enclosed sun porch", "Open-concept", "Laundry hook-ups"],
    highlights: [
      "Fully renovated 2-bedroom unit with a bright, open-concept main level",
      "Living/kitchen great room with recessed lighting and abundant natural light",
      "Stainless steel kitchen with granite-look counters and white shaker cabinets",
      "Two well-sized bedrooms with large windows and ample closet space",
      "Modern full bath with marble-look tiled tub/shower surround and new vanity",
      "Enclosed sun porch with leafy treetop views — a flexible bonus space",
      "Covered front porch entry"
    ],
    accessible: false, available: "Available now", rent: null,
    nearby: ["Near Morgan State University"],
    lat: 39.3480, lng: -76.5860,
    photos: ["629-dumbarton-d-1.jpg","629-dumbarton-d-2.jpg","629-dumbarton-d-3.jpg","629-dumbarton-d-4.jpg","629-dumbarton-d-5.jpg","629-dumbarton-d-6.jpg","629-dumbarton-d-7.jpg","629-dumbarton-d-8.jpg","629-dumbarton-d-9.jpg","629-dumbarton-d-10.jpg"]
  },
  {
    id: "1922-griffis",
    address: "1922 Griffis Ave", unit: "",
    hood: "Morrell Park", zip: "21230",
    beds: 2, baths: 1, type: "Townhouse / rowhome",
    sqft: "1,300 sq ft", community: "",
    tagline: "Spacious 1,300 sq ft townhouse with hardwood floors, a finished basement, and driveway parking.",
    features: ["Hardwood floors", "Finished basement", "Driveway parking"],
    highlights: [
      "Spacious 1,300 sq ft townhouse in Morrell Park",
      "Natural polished hardwood floors on the main and upper levels",
      "Updated galley kitchen with granite counters, glass-front cabinetry, and stainless refrigerator",
      "Two well-sized bedrooms with hardwood floors and good natural light",
      "Clean full bath with tile tub surround",
      "Finished basement — bonus space for a family room, office, or play area",
      "In-unit washer and dryer in the basement",
      "Covered front porch and driveway parking"
    ],
    accessible: false, available: "Available now", rent: null,
    nearby: ["Convenient to I-95, Washington Blvd, and area transit"],
    lat: 39.2645, lng: -76.6560,
    photos: ["1922-griffis-1.png","1922-griffis-2.png","1922-griffis-3.png","1922-griffis-4.png","1922-griffis-5.png","1922-griffis-6.png","1922-griffis-7.png","1922-griffis-8.png","1922-griffis-9.png","1922-griffis-10.png"]
  },
  {
    id: "511-e-43rd-3a",
    address: "511 E 43rd St", unit: "",
    hood: "Waverly · Pen Lucy", zip: "21212",
    beds: 2, baths: 1, type: "Multifamily apartment",
    sqft: "", community: "",
    tagline: "Beautifully renovated two-bedroom with a granite & stainless kitchen and in-unit laundry.",
    features: ["In-unit W/D", "Granite & stainless", "Wood-look LVP"],
    highlights: [
      "Beautifully renovated two-bedroom apartment",
      "Open kitchen and living area with stainless appliances and granite countertops",
      "White cabinetry with a clean, modern finish",
      "Spacious bedrooms with large windows and wood-look LVP flooring",
      "Renovated full bath with marble-look tile tub surround and modern vanity",
      "In-unit washer and dryer"
    ],
    accessible: false, available: "Available now", rent: null,
    nearby: ["Near Loyola University Maryland", "Near Notre Dame of Maryland", "Near Johns Hopkins", "Close to Clifton Park & Herring Run Park"],
    lat: 39.3430, lng: -76.6070,
    photos: ["511-e-43rd-3a-1.png","511-e-43rd-3a-2.png","511-e-43rd-3a-3.png","511-e-43rd-3a-4.png","511-e-43rd-3a-5.png","511-e-43rd-3a-6.png","511-e-43rd-3a-7.png"]
  },
  {
    id: "2513-liberty-heights-bsmt",
    address: "2513 Liberty Heights Ave", unit: "Bsmt",
    hood: "Forest Park", zip: "21215",
    beds: 1, baths: 1, type: "Basement unit in a 5-unit building",
    sqft: "~1,134 sq ft", community: "",
    tagline: "Fully renovated basement-level unit with in-unit front-load washer & dryer.",
    features: ["In-unit W/D", "Extra storage closet", "Wood-look LVP"],
    highlights: [
      "Fully renovated basement-level unit, freshly finished throughout",
      "Renovated kitchen with white cabinets, gas range, and a bright window over the sink",
      "Spacious open living area with room for living and dining",
      "Separate, well-sized bedroom",
      "Modern full bath with marble-look tub/shower surround, vanity, and window",
      "In-unit front-load washer & dryer",
      "Additional storage closet"
    ],
    accessible: false, available: "Available now", rent: null,
    nearby: ["On the Liberty Heights Ave corridor"],
    lat: 39.3300, lng: -76.6790,
    photos: ["2513-liberty-heights-bsmt-1.jpg","2513-liberty-heights-bsmt-2.jpg","2513-liberty-heights-bsmt-3.jpg","2513-liberty-heights-bsmt-4.jpg","2513-liberty-heights-bsmt-5.jpg","2513-liberty-heights-bsmt-6.jpg","2513-liberty-heights-bsmt-7.jpg","2513-liberty-heights-bsmt-8.jpg","2513-liberty-heights-bsmt-9.jpg","2513-liberty-heights-bsmt-10.jpg","2513-liberty-heights-bsmt-11.jpg","2513-liberty-heights-bsmt-12.jpg"]
  },
  {
    id: "1103-n-luzerne",
    address: "1103 N Luzerne Ave", unit: "",
    hood: "East Baltimore", zip: "21205",
    beds: 2, baths: 1, type: "Two-level rowhome",
    sqft: "", community: "",
    tagline: "Renovated two-level rowhome with a covered front porch and private fenced backyard.",
    features: ["Covered front porch", "Fenced backyard", "Gas range"],
    highlights: [
      "Renovated kitchen with gas range, stainless refrigerator, granite counters, and white shaker cabinets",
      "Two bedrooms with fresh paint, wood-look flooring, and good natural light",
      "Full bathroom with a tub/shower and clean tiled surround",
      "Covered front porch — a comfortable spot to sit out front",
      "Private fenced backyard with direct access, beside a community playground",
      "Bright, open living room with staircase; move-in ready throughout"
    ],
    accessible: false, available: "Available now", rent: null,
    nearby: ["Beside a community playground"],
    lat: 39.2990, lng: -76.5760,
    photos: ["1103-n-luzerne-1.jpg","1103-n-luzerne-2.jpg","1103-n-luzerne-3.jpg","1103-n-luzerne-4.jpg","1103-n-luzerne-5.jpg","1103-n-luzerne-6.jpg","1103-n-luzerne-7.jpg","1103-n-luzerne-8.jpg","1103-n-luzerne-9.jpg","1103-n-luzerne-10.jpg"]
  },
  {
    id: "724-n-edgewood-b",
    address: "724 N Edgewood St", unit: "B",
    hood: "East Baltimore", zip: "21205",
    beds: null, baths: null, type: "Apartment",
    sqft: "", community: "", tagline: "",
    features: [], highlights: [],
    accessible: false, available: "Call for date", rent: null,
    nearby: [], lat: 39.3010, lng: -76.5680, photos: []
  },
  {
    id: "2603-boone",
    address: "2603 Boone St", unit: "",
    hood: "Better Waverly", zip: "21218",
    beds: null, baths: null, type: "Rowhome, multifamily building",
    sqft: "", community: "", tagline: "",
    features: [], highlights: [],
    accessible: false, available: "Call for date", rent: null,
    nearby: [], lat: 39.3260, lng: -76.5960, photos: []
  },
  {
    id: "2905-garrison-c",
    address: "2905 Garrison Blvd", unit: "C",
    hood: "Garwyn Oaks", zip: "21216",
    beds: 1, baths: 1, type: "Apartment",
    sqft: "", community: "",
    tagline: "Renovated one-bedroom with a granite & stainless kitchen and on-site laundry.",
    features: ["Granite & stainless", "On-site laundry"],
    highlights: [],
    accessible: false, available: "Available now", rent: null,
    nearby: ["Near Hanlon Park & Lake Ashburton"],
    lat: 39.3150, lng: -76.6720, photos: []
  },
  {
    id: "2910-garrison-2t",
    address: "2910 Garrison Blvd", unit: "2T",
    hood: "Garwyn Oaks", zip: "21216",
    beds: 2, baths: 1, type: "Apartment",
    sqft: "721–788 sq ft", community: "Pangea Oaks Apartments",
    tagline: "Renovated two-bedroom with a private deck, central AC, and on-site parking.",
    features: ["Private deck", "Central AC", "On-site parking"],
    highlights: [
      "Spacious, light-filled living room with durable wood-look plank flooring",
      "Renovated full kitchen with wood cabinetry, electric range, and refrigerator",
      "Separate dining nook — room for a table off the kitchen",
      "Two carpeted bedrooms with good natural light and closet space",
      "Clean full bath with tub/shower",
      "Private deck / balcony for outdoor space",
      "On-site management and 24-hour emergency maintenance"
    ],
    accessible: false, available: "Available now", rent: null,
    nearby: ["Close to Mondawmin Mall & the Metro Subway", "Near Coppin State University", "Major bus lines on Garrison Blvd"],
    lat: 39.3155, lng: -76.6725,
    photos: ["2910-garrison-2t-1.png","2910-garrison-2t-2.png","2910-garrison-2t-3.png","2910-garrison-2t-4.png","2910-garrison-2t-5.png","2910-garrison-2t-6.png","2910-garrison-2t-7.png","2910-garrison-2t-8.png","2910-garrison-2t-9.png","2910-garrison-2t-10.png","2910-garrison-2t-11.png","2910-garrison-2t-12.png","2910-garrison-2t-13.png","2910-garrison-2t-14.png","2910-garrison-2t-15.png","2910-garrison-2t-16.png"]
  },
  {
    id: "2910-garrison-5t",
    address: "2910 Garrison Blvd", unit: "5T",
    hood: "Garwyn Oaks", zip: "21216",
    beds: 2, baths: 1, type: "Apartment",
    sqft: "", community: "Pangea Oaks Apartments",
    tagline: "Accessible two-bedroom with ramped entry, a walk-in shower with grab bars, and in-unit laundry.",
    features: ["Ramped entry", "Walk-in shower w/ grab bars", "In-unit W/D"],
    highlights: [
      "Ramped entry into the unit and a walk-in shower with built-in seat and grab bars",
      "Two separate, enclosed bedrooms — both with windows, closets, and wood-look flooring",
      "In-unit full-size washer and dryer — no shared laundry",
      "Full kitchen with electric range, refrigerator, and generous cabinet storage",
      "Bright, open living and dining area with a private entrance and large window",
      "Freshly painted and ready to move in"
    ],
    accessible: true, available: "Available now", rent: null,
    nearby: ["Close to Mondawmin Mall & the Metro Subway", "Near Coppin State University"],
    lat: 39.3158, lng: -76.6727,
    photos: ["2910-garrison-5t-1.jpg","2910-garrison-5t-2.jpg","2910-garrison-5t-3.jpg","2910-garrison-5t-4.jpg","2910-garrison-5t-5.jpg","2910-garrison-5t-6.jpg","2910-garrison-5t-7.jpg","2910-garrison-5t-8.jpg","2910-garrison-5t-9.jpg"]
  },
  {
    id: "2924-garrison-b",
    address: "2924 Garrison Blvd", unit: "B",
    hood: "Garwyn Oaks", zip: "21216",
    beds: null, baths: null, type: "Apartment, multifamily building",
    sqft: "", community: "", tagline: "",
    features: [], highlights: [],
    accessible: false, available: "Call for date", rent: null,
    nearby: [], lat: 39.3165, lng: -76.6728, photos: []
  },
  {
    id: "2933-allendale-t",
    address: "2933 Allendale Rd", unit: "T",
    hood: "Garwyn Oaks", zip: "21216",
    beds: 2, baths: 1, type: "Apartment",
    sqft: "", community: "",
    tagline: "Two-bedroom apartment with on-site laundry and parking.",
    features: ["On-site laundry", "On-site parking"],
    highlights: [],
    accessible: false, available: "Available now", rent: null,
    nearby: ["Near Hanlon Park"],
    lat: 39.3130, lng: -76.6760, photos: []
  },
  {
    id: "2945-allendale-b",
    address: "2945 Allendale Rd", unit: "B",
    hood: "Garwyn Oaks", zip: "21216",
    beds: null, baths: null, type: "Apartment, multifamily building",
    sqft: "", community: "", tagline: "",
    features: [], highlights: [],
    accessible: false, available: "Call for date", rent: null,
    nearby: [], lat: 39.3135, lng: -76.6763, photos: []
  },
  {
    id: "1700-braddish-a",
    address: "1700 Braddish Ave", unit: "A",
    hood: "Walbrook", zip: "21216",
    beds: 1, baths: 1, type: "Apartment",
    sqft: "", community: "",
    tagline: "Fully renovated one-bedroom with stainless appliances and a private bedroom exit.",
    features: ["Private bedroom exit", "Stainless appliances", "Built-in closet"],
    highlights: [
      "Private bedroom with its own exterior exit — added flexibility and a separate entrance",
      "Fully renovated kitchen with stainless range, over-range microwave, and refrigerator",
      "Granite counters and white shaker cabinets",
      "Updated bathroom with marble-look tile tub/shower, modern vanity light, and medicine cabinet",
      "Wood-look plank flooring throughout, fresh warm-grey paint, crisp white trim",
      "Built-in closet with shelf and hanging rod"
    ],
    accessible: false, available: "Available now", rent: null,
    nearby: [],
    lat: 39.3095, lng: -76.6600,
    photos: ["1700-braddish-a-1.jpg","1700-braddish-a-2.jpg","1700-braddish-a-3.jpg","1700-braddish-a-4.jpg","1700-braddish-a-5.jpg","1700-braddish-a-6.jpg","1700-braddish-a-7.jpg","1700-braddish-a-8.jpg","1700-braddish-a-9.jpg","1700-braddish-a-10.jpg","1700-braddish-a-11.jpg","1700-braddish-a-12.jpg","1700-braddish-a-13.jpg"]
  },
  {
    id: "3512-clifton-3",
    address: "3512 Clifton Ave", unit: "3",
    hood: "Walbrook", zip: "21216",
    beds: null, baths: null, type: "Apartment",
    sqft: "", community: "", tagline: "",
    features: [], highlights: [],
    accessible: false, available: "Call for date", rent: null,
    nearby: [], lat: 39.3120, lng: -76.6640, photos: []
  },
  {
    id: "3908-penhurst-b",
    address: "3908 Penhurst Ave", unit: "B",
    hood: "Dolfield", zip: "21215",
    beds: null, baths: null, type: "Garden-style apartment",
    sqft: "650–760 sq ft", community: "Penhurst (Dolfield) garden community",
    tagline: "Newly renovated garden-style apartment with in-unit laundry and water included.",
    features: ["In-unit W/D", "Water included", "Ample parking"],
    highlights: [
      "Newly renovated interior with modern finishes throughout",
      "Updated kitchen with white shaker cabinets, granite counters, and stainless appliances",
      "Designer hex-tile backsplash and matte black fixtures",
      "Spa-style full bath with marble-look tile surround and glass tub doors",
      "In-unit washer and dryer — dedicated laundry room",
      "Water included; on-site management and 24-hour maintenance",
      "Private lawn area in a peaceful garden-style community"
    ],
    accessible: false, available: "Call for date", rent: null,
    nearby: ["Excellent transit access (Transit Score 75)", "Convenient to I-695, Downtown, and Towson"],
    lat: 39.3420, lng: -76.6900,
    photos: ["3908-penhurst-b-1.png","3908-penhurst-b-2.png","3908-penhurst-b-3.png","3908-penhurst-b-4.png","3908-penhurst-b-5.png","3908-penhurst-b-6.png","3908-penhurst-b-7.png","3908-penhurst-b-8.png","3908-penhurst-b-9.png","3908-penhurst-b-10.png","3908-penhurst-b-11.png","3908-penhurst-b-12.png","3908-penhurst-b-13.png","3908-penhurst-b-14.png","3908-penhurst-b-15.png"]
  },
  {
    id: "3913-dolfield",
    address: "3913 Dolfield Ave", unit: "",
    hood: "Dolfield", zip: "21215",
    beds: 1, baths: 1, type: "Garden-style apartment",
    sqft: "", community: "Dolfield Village",
    tagline: "Newly renovated one-bedroom plus a versatile bonus den, with in-unit laundry.",
    features: ["Bonus den", "In-unit W/D", "Granite & stainless"],
    highlights: [
      "Newly renovated 1-bedroom apartment with a versatile bonus den",
      "Updated kitchen with white shaker cabinets, granite counters, and stainless range",
      "Designer hex-tile backsplash and matte black fixtures throughout",
      "Spacious open living room with large windows and abundant natural light",
      "Renovated full bath with marble-look tile surround and modern vanity",
      "In-unit washer and dryer",
      "Extra den / flex space — ideal as a home office, sitting room, or guest area"
    ],
    accessible: false, available: "Available now", rent: null,
    nearby: ["Convenient to I-695, Downtown Baltimore, Pikesville, and Towson"],
    lat: 39.3400, lng: -76.6890,
    photos: ["3913-dolfield-1.png","3913-dolfield-2.png","3913-dolfield-3.png","3913-dolfield-4.png","3913-dolfield-5.png","3913-dolfield-6.png","3913-dolfield-7.png","3913-dolfield-8.png"]
  }
];

/* ============================================================
   ⚠ CONFIRM BEFORE PUBLISHING — the listing sheets disagree
   with the July flyer in three places. The listing sheets won:

   1. 1922 Griffis Ave — flyer said Rosemont / 21216 and
      "inquire about details". The sheet says Morrell Park /
      21230, 2 BR / 1 BA, 1,300 sq ft. Site now uses the sheet.
   2. 629 Dumbarton Ave — flyer said 1 BR; the sheet says 2 BR.
      Site now says 2 BR. (Sheet also calls it Unit D, filename
      said Unit 4.)
   3. 511 E 43rd St — flyer said Unit 3A, 3 BR; the sheet says
      2 BR with no unit number. Site now says 2 BR, no unit.

   Also unverified: 1103 N Luzerne Ave and 1700 Braddish Ave
   have no zip on their sheets — 21205 and 21216 were inferred.
   3908 Penhurst bed/bath is listed as "Confirm" on the sheet,
   so it shows as "Inquire about details".
   ============================================================ */

if (typeof window !== "undefined") {
  window.CAPRATE_UNITS = UNITS;
  window.CAPRATE_META = META;
  window.dispatchEvent(new Event("caprate:units"));
}
