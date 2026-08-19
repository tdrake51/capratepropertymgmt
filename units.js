/* ============================================================
 Caprate Property Management — Available Units data
 ============================================================
 THIS IS THE ONLY FILE YOU EDIT TO UPDATE AVAILABILITY.
 Do not touch the HTML or CSS — just change the list below.

 Each unit is one object. Fields:
 addr : street address (e.g. "4911 Nelson Ave")
 unit : unit number/letter, or "" (e.g. "D", "2T", "Bsmt", "")
 beds : number of bedrooms (1, 2, or 3)
 baths : number of bathrooms (usually 1)
 hood : neighborhood name (e.g. "Arlington")
 zip : ZIP code as text (e.g. "21215")
 near : nearby-landmark pill, or "" (e.g. "Near Sinai Hospital")
 acc : true only if accessible (otherwise leave it out)
 when : "now" = available now
 "soon" = coming soon / in renovation

 TO ADD a unit: copy a line, paste it, change the values, keep the comma.
 TO REMOVE a unit: delete its whole line.
 TO MOVE to available: change when:"soon" to when:"now".

 RULE: keep every comma, quote, and curly brace exactly as shown.
 A missing comma or quote is the usual cause of a blank page.

 Last updated: July 2026
 ============================================================ */

window.CAPRATE_UNITS = [

 /* ---------- AVAILABLE NOW ---------- */
 {addr:"4911 Nelson Ave", unit:"", beds:2, baths:1, hood:"Arlington", zip:"21215", near:"Near Sinai Hospital", when:"now"},
 {addr:"4908 Nelson Ave", unit:"", beds:2, baths:1, hood:"Arlington", zip:"21215", near:"Near Sinai Hospital", when:"now"},
 {addr:"629 Dumbarton Ave", unit:"D", beds:1, baths:1, hood:"Original Northwood", zip:"21218", near:"", when:"now"},
 {addr:"1700 Braddish Ave", unit:"A", beds:1, baths:1, hood:"Rosemont", zip:"21216", near:"Near Mondawmin Metro", when:"now"},
 {addr:"2513 Liberty Heights Ave", unit:"Bsmt", beds:1, baths:1, hood:"Forest Park", zip:"21215", near:"", when:"now"},
 {addr:"3913 Dolfield Ave", unit:"F", beds:2, baths:1, hood:"Central Park Heights", zip:"21215", near:"", when:"now"},
 {addr:"2905 Garrison Blvd", unit:"B", beds:2, baths:1, hood:"Garwyn Oaks", zip:"21216", near:"Near Mondawmin Metro", when:"now"},
 {addr:"2912 Garrison Blvd", unit:"2T", beds:2, baths:1, hood:"Garwyn Oaks", zip:"21216", near:"Near Mondawmin Metro", when:"now"},
 {addr:"2924 Garrison Blvd", unit:"A", beds:2, baths:1, hood:"Garwyn Oaks", zip:"21216", near:"Near Mondawmin Metro", when:"now"},
 {addr:"2926 Garrison Blvd", unit:"B", beds:2, baths:1, hood:"Garwyn Oaks", zip:"21216", near:"Near Mondawmin Metro", when:"now"},
 {addr:"2928 Garrison Blvd", unit:"B", beds:2, baths:1, hood:"Garwyn Oaks", zip:"21216", near:"Near Mondawmin Metro", when:"now"},

 /* ---------- COMING SOON (in renovation) ---------- */
 {addr:"2126 Koko Ln", unit:"", beds:3, baths:1, hood:"Panway-Braddish", zip:"21216", near:"Near Mondawmin Metro", when:"soon"},
 {addr:"724 N Edgewood St", unit:"B", beds:1, baths:1, hood:"Edmondson", zip:"21229", near:"", when:"soon"},
 {addr:"3512 Clifton Ave", unit:"3", beds:2, baths:1, hood:"Walbrook", zip:"21216", near:"Near Mondawmin Metro", when:"soon"},
 {addr:"3514 Clifton Ave", unit:"1", beds:2, baths:1, hood:"Walbrook", zip:"21216", near:"Near Mondawmin Metro", when:"soon"},
 {addr:"2927 Allendale Rd", unit:"A", beds:2, baths:1, hood:"Garwyn Oaks", zip:"21216", near:"Near Mondawmin Metro", when:"soon"},
 {addr:"2943 Allendale Rd", unit:"B", beds:2, baths:1, hood:"Garwyn Oaks", zip:"21216", near:"Near Mondawmin Metro", when:"soon"},

];

/* Optional: shown in the page footer. Update the month each week. */
window.CAPRATE_UPDATED = "August 19 2026";
