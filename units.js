/* ============================================================
   Caprate Property Management — Units data
   Edit THIS file to update availability. Nothing else.
   ------------------------------------------------------------
   available: "Available now" | "Showing scheduled" | "Coming soon"
   Updated: August 2026 (16 units)
   ============================================================ */

window.CAPRATE_UNITS = [
  /* ---- AVAILABLE NOW ---- */
  {id:"dumbartonD", address:"629 Dumbarton Ave", unit:"D", beds:1, baths:1, type:"Rowhome apartment", hood:"Original Northwood", zip:"21218",
   features:["In-unit laundry","Renovated kitchen"], nearby:["Near Morgan State University","Near The Alameda shops"], photos:[], available:"Available now", rent:"", accessible:false},
  {id:"e43rd1b", address:"511 E 43rd St", unit:"1B", beds:2, baths:1, type:"Rowhome apartment", hood:"Pen Lucy", zip:"21212",
   features:["Renovated finishes"], nearby:["Near Loyola University","Near MARC / Penn Line"], photos:[], available:"Available now", rent:"", accessible:false},
  {id:"liberty2513", address:"2513 Liberty Heights Ave", unit:"Bsmt", beds:1, baths:1, type:"Renovated basement apartment", hood:"Forest Park", zip:"21215",
   features:["Private entrance"], nearby:["Near Mondawmin Metro","Near Forest Park Golf Course"], photos:[], available:"Available now", rent:"", accessible:false},
  {id:"dolfieldF", address:"3913 Dolfield Ave", unit:"F", beds:2, baths:1, type:"Renovated apartment", hood:"Central Park Heights", zip:"21215",
   features:["Renovated kitchen & bath"], nearby:["Near Sinai Hospital","Near Pimlico"], photos:[], available:"Available now", rent:"", accessible:false},
  {id:"penhurst3906B", address:"3906 Penhurst Ave", unit:"B", beds:2, baths:1, type:"Renovated apartment", hood:"Dolfield", zip:"21215",
   features:["Renovated finishes"], nearby:["Near Sinai Hospital","Near Reisterstown Rd Plaza"], photos:[], available:"Available now", rent:"", accessible:false},
  {id:"garrison2924A", address:"2924 Garrison Blvd", unit:"A", beds:2, baths:1, type:"Renovated apartment", hood:"Garwyn Oaks", zip:"21216",
   features:["On-site laundry","Central A/C"], nearby:["Near Mondawmin Metro","Bus lines 91/15/M2/B"], photos:[], available:"Available now", rent:"", accessible:false},
  {id:"garrison2944A", address:"2944 Garrison Blvd", unit:"A", beds:2, baths:1, type:"Renovated apartment", hood:"Garwyn Oaks", zip:"21216",
   features:["On-site laundry","Central A/C"], nearby:["Near Mondawmin Metro","Bus lines 91/15/M2/B"], photos:[], available:"Available now", rent:"", accessible:false},
  {id:"garrison2960A", address:"2960 Garrison Blvd", unit:"A", beds:2, baths:1, type:"Renovated apartment", hood:"Garwyn Oaks", zip:"21216",
   features:["On-site laundry","Central A/C"], nearby:["Near Mondawmin Metro","Bus lines 91/15/M2/B"], photos:[], available:"Available now", rent:"", accessible:false},
  {id:"garrison2962B", address:"2962 Garrison Blvd", unit:"B", beds:2, baths:1, type:"Renovated apartment", hood:"Garwyn Oaks", zip:"21216",
   features:["On-site laundry","Central A/C"], nearby:["Near Mondawmin Metro","Bus lines 91/15/M2/B"], photos:[], available:"Available now", rent:"", accessible:false},
  {id:"allendale2943B", address:"2943 Allendale Rd", unit:"B", beds:2, baths:1, type:"Renovated apartment", hood:"Garwyn Oaks", zip:"21216",
   features:["On-site laundry","Central A/C"], nearby:["Near Mondawmin Metro","Bus lines 91/15/M2/B"], photos:[], available:"Available now", rent:"", accessible:false},

  /* ---- SHOWING SCHEDULED (active, not yet rented) ---- */
  {id:"koko2126", address:"2126 Koko Ln", unit:"", beds:3, baths:1, type:"Renovated rowhome", hood:"Panway-Braddish", zip:"21216",
   features:["Great for families","Finished basement","Your own front door"], nearby:["Near Mondawmin Metro","Near Coppin State University"], photos:[], available:"Showing scheduled", rent:"", accessible:false},

  /* ---- COMING SOON (in renovation) ---- */
  {id:"garrison2905B", address:"2905 Garrison Blvd", unit:"B", beds:2, baths:1, type:"Renovated apartment", hood:"Garwyn Oaks", zip:"21216",
   features:["On-site laundry","Central A/C"], nearby:["Near Mondawmin Metro","Bus lines 91/15/M2/B"], photos:[], available:"Coming soon", rent:"", accessible:false},
  {id:"clifton3512_3", address:"3512 Clifton Ave", unit:"3", beds:2, baths:1, type:"Renovated apartment", hood:"Walbrook", zip:"21216",
   features:["Multi-unit building"], nearby:["Near Mondawmin Metro","Near Coppin State University"], photos:[], available:"Coming soon", rent:"", accessible:false},
  {id:"clifton3514_1", address:"3514 Clifton Ave", unit:"1", beds:2, baths:1, type:"Renovated apartment", hood:"Walbrook", zip:"21216",
   features:["Multi-unit building"], nearby:["Near Mondawmin Metro","Near Coppin State University"], photos:[], available:"Coming soon", rent:"", accessible:false},
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
