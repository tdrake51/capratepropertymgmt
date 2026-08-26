/* ============================================================
   Caprate Property Management — Units data
   Edit THIS file to update availability. Nothing else.
   ------------------------------------------------------------
   Per unit:
     id, address, unit, beds, baths, type, hood, zip,
     features[]  — unit amenities
     nearby[]    — location perks (transit, hospitals, colleges)
     photos[]    — filenames in /photos, or []
     available   — "Available now" | "Coming soon" | "Showing scheduled"
     rent, accessible
   ============================================================ */

window.CAPRATE_UNITS = [
  /* ---- AVAILABLE NOW ---- */
  {id:"nelson4911", address:"4911 Nelson Ave", unit:"", beds:2, baths:1, type:"Renovated rowhome", hood:"Arlington", zip:"21215",
   features:["Renovated kitchen & bath","Your own front door"], nearby:["Near Sinai Hospital","Bus lines to downtown"], photos:[], available:"Available now", rent:"", accessible:false},
  {id:"dumbartonD", address:"629 Dumbarton Ave", unit:"D", beds:1, baths:1, type:"Rowhome apartment", hood:"Original Northwood", zip:"21218",
   features:["In-unit laundry","Renovated kitchen"], nearby:["Near Morgan State University","Near The Alameda shops"], photos:[], available:"Available now", rent:"", accessible:false},
  {id:"e43rd1b", address:"511 E 43rd St", unit:"1B", beds:2, baths:1, type:"Rowhome apartment", hood:"Pen Lucy", zip:"21212",
   features:["Renovated finishes"], nearby:["Near Loyola University","Near MARC / Penn Line"], photos:[], available:"Available now", rent:"", accessible:false},
  {id:"liberty2513", address:"2513 Liberty Heights Ave", unit:"Bsmt", beds:1, baths:1, type:"Renovated basement apartment", hood:"Forest Park", zip:"21215",
   features:["Private entrance"], nearby:["Near Mondawmin Metro","Near Forest Park Golf Course"], photos:[], available:"Available now", rent:"", accessible:false},
  {id:"garrison2924A", address:"2924 Garrison Blvd", unit:"A", beds:2, baths:1, type:"Renovated apartment", hood:"Garwyn Oaks", zip:"21216",
   features:["On-site laundry","Central A/C"], nearby:["Near Mondawmin Metro","Bus lines 91/15/M2/B"], photos:[], available:"Available now", rent:"", accessible:false},
  {id:"garrison2926B", address:"2926 Garrison Blvd", unit:"B", beds:2, baths:1, type:"Renovated apartment", hood:"Garwyn Oaks", zip:"21216",
   features:["On-site laundry","Central A/C"], nearby:["Near Mondawmin Metro","Bus lines 91/15/M2/B"], photos:[], available:"Available now", rent:"", accessible:false},
  {id:"garrison2944A", address:"2944 Garrison Blvd", unit:"A", beds:2, baths:1, type:"Renovated apartment", hood:"Garwyn Oaks", zip:"21216",
   features:["On-site laundry","Central A/C"], nearby:["Near Mondawmin Metro","Bus lines 91/15/M2/B"], photos:[], available:"Available now", rent:"", accessible:false},
  {id:"garrison2962B", address:"2962 Garrison Blvd", unit:"B", beds:2, baths:1, type:"Renovated apartment", hood:"Garwyn Oaks", zip:"21216",
   features:["On-site laundry","Central A/C"], nearby:["Near Mondawmin Metro","Bus lines 91/15/M2/B"], photos:[], available:"Available now", rent:"", accessible:false},
  {id:"allendale2943B", address:"2943 Allendale Rd", unit:"B", beds:2, baths:1, type:"Renovated apartment", hood:"Garwyn Oaks", zip:"21216",
   features:["On-site laundry","Central A/C"], nearby:["Near Mondawmin Metro","Bus lines 91/15/M2/B"], photos:[], available:"Available now", rent:"", accessible:false},

  /* ---- SHOWING SCHEDULED (active, not yet rented) ---- */
  {id:"koko2126", address:"2126 Koko Ln", unit:"", beds:3, baths:1, type:"Renovated rowhome", hood:"Panway-Braddish", zip:"21216",
   features:["Great for families","Finished basement","Your own front door"], nearby:["Near Mondawmin Metro","Near Coppin State University"], photos:[], available:"Showing scheduled", rent:"", accessible:false},

  /* ---- COMING SOON (in renovation) ---- */
  {id:"edgewoodB", address:"724 N Edgewood St", unit:"B", beds:1, baths:1, type:"Rowhome apartment", hood:"Edmondson", zip:"21229",
   features:["Renovated finishes"], nearby:["Near West Baltimore MARC","Bus lines to downtown"], photos:[], available:"Coming soon", rent:"", accessible:false},
  {id:"garrison2905B", address:"2905 Garrison Blvd", unit:"B", beds:2, baths:1, type:"Renovated apartment", hood:"Garwyn Oaks", zip:"21216",
   features:["On-site laundry","Central A/C"], nearby:["Near Mondawmin Metro","Bus lines 91/15/M2/B"], photos:[], available:"Coming soon", rent:"", accessible:false},
  {id:"clifton3512_3", address:"3512 Clifton Ave", unit:"3", beds:2, baths:1, type:"Renovated apartment", hood:"Walbrook", zip:"21216",
   features:["Multi-unit building"], nearby:["Near Mondawmin Metro","Near Coppin State University"], photos:[], available:"Coming soon", rent:"", accessible:false},
  {id:"clifton3514_1", address:"3514 Clifton Ave", unit:"1", beds:2, baths:1, type:"Renovated apartment", hood:"Walbrook", zip:"21216",
   features:["Multi-unit building"], nearby:["Near Mondawmin Metro","Near Coppin State University"], photos:[], available:"Coming soon", rent:"", accessible:false},
  {id:"garrison2912_2T", address:"2912 Garrison Blvd", unit:"2T", beds:2, baths:1, type:"Renovated apartment", hood:"Garwyn Oaks", zip:"21216",
   features:["In-unit W/D","Granite & stainless kitchen"], nearby:["Near Mondawmin Metro","Bus lines 91/15/M2/B"], photos:[], available:"Coming soon", rent:"", accessible:false},
  {id:"garrison2928B", address:"2928 Garrison Blvd", unit:"B", beds:2, baths:1, type:"Renovated apartment", hood:"Garwyn Oaks", zip:"21216",
   features:["On-site laundry","Central A/C"], nearby:["Near Mondawmin Metro","Bus lines 91/15/M2/B"], photos:[], available:"Coming soon", rent:"", accessible:false},
  {id:"allendale2927A", address:"2927 Allendale Rd", unit:"A", beds:2, baths:1, type:"Renovated apartment", hood:"Garwyn Oaks", zip:"21216",
   features:["On-site laundry","Central A/C"], nearby:["Near Mondawmin Metro","Bus lines 91/15/M2/B"], photos:[], available:"Coming soon", rent:"", accessible:false},
];

window.CAPRATE_META = {
  city:"Baltimore City", updated:"August 2026",
  phone:"(410) 415-3142", phoneRaw:"4104153142",
  email:"leasing@capratepropertymgmt.com", contact:"Terry Drake"
};
window.dispatchEvent(new Event('caprate:units'));
