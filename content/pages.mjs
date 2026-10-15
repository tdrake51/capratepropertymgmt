// Long-form pages: audience landing pages and the voucher guide.
//
// FAIR HOUSING GUARDRAIL — read before editing.
// Copy states what Caprate ACCEPTS and how the process WORKS. It never
// describes who should apply, an ideal tenant, household size, or who a unit
// is "perfect for". Neighborhoods are described by transit and landmarks only.
//
// Each page: slug, title (browser/search title), h1, description (search
// snippet), kicker, lede, body (HTML), faq (rendered + FAQPage schema).

export const PAGES = [
{
  slug: "section-8-housing-baltimore",
  nav: "Section 8 / HCV",
  title: "Section 8 Rentals in Baltimore City | Caprate",
  h1: "Section 8 and Housing Choice Voucher rentals in Baltimore City",
  description: "Caprate accepts Housing Choice Vouchers (Section 8) on renovated Baltimore City rentals. No extra fees for voucher holders, prompt RFTA and inspection coordination.",
  kicker: "Housing Choice Vouchers",
  lede: "We accept Housing Choice Vouchers on every home we list, and we handle the landlord side of the paperwork promptly so your search clock isn't wasted waiting on us.",
  body: `
<h2>What we accept</h2>
<ul class="checks">
  <li>Housing Choice Vouchers (Section 8), including vouchers issued by the Housing Authority of Baltimore City (HABC) and portable vouchers from other housing authorities</li>
  <li>HUD-VASH vouchers — see <a href="/hud-vash-housing-baltimore.html">HUD-VASH housing</a></li>
  <li>Rental assistance through homeless services programs — see <a href="/homeless-services-partners.html">for placing agencies</a></li>
</ul>
<p>There are no extra fees for paying with a voucher, and we apply the same screening standard to every applicant.</p>

<h2>How renting with a voucher works at Caprate</h2>
<ol class="steps">
  <li><strong>Find a home that matches your voucher.</strong> Browse <a href="/#homes">available homes</a> and filter by bedroom count. Your voucher is approved for a specific bedroom size, so start there.</li>
  <li><strong>Tour it.</strong> Call or email to see the home in person.</li>
  <li><strong>Apply and submit the RFTA.</strong> Once you choose a home, we complete our part of the Request for Tenancy Approval quickly and return it to the housing authority.</li>
  <li><strong>Inspection.</strong> The housing authority inspects the home for health and safety. We keep units inspection-ready and fix anything flagged right away.</li>
  <li><strong>Sign and move in.</strong> After the rent is approved and the home passes, we sign the lease and hand over keys.</li>
</ol>
<p>For more detail on each step, read <a href="/section-8-move-in-process-baltimore.html">From voucher to keys: the Section 8 move-in process</a>.</p>

<h2>Your rights as a voucher holder in Maryland</h2>
<p>Maryland's HOME Act, passed in 2020, added <strong>source of income</strong> to the state's fair housing protections, and Baltimore City law also prohibits source-of-income discrimination. In general, that means most landlords may not refuse an applicant because part of the rent is paid with a voucher, and may not hold voucher holders to a tougher screening standard than other applicants.</p>
<p>If you believe a landlord has refused your voucher, talk with your caseworker or a fair housing organization. This is general information, not legal advice.</p>

<h2>How your rent share is figured</h2>
<p>With a Housing Choice Voucher, you generally pay about 30% of your adjusted income toward rent and utilities, and the program pays the rest to the landlord. The housing authority calculates your exact share and confirms the rent is reasonable for the area. Read the full <a href="/voucher-guide.html">voucher holder's guide</a> for more.</p>
`,
  faq: [
    ["Do you accept Section 8 in Baltimore City?", "Yes. Caprate accepts Housing Choice Vouchers (Section 8) on every home we list in Baltimore City, with no extra fees for voucher holders."],
    ["Do you accept vouchers from outside Baltimore City?", "Yes. Portable vouchers transferred from another housing authority are welcome. Your caseworker can help with the portability paperwork."],
    ["Is there an extra fee or higher deposit for voucher holders?", "No. Voucher holders pay the same application terms as every other applicant."],
    ["How long does the RFTA take on your side?", "We complete and return our part of the Request for Tenancy Approval promptly so your search time isn't spent waiting on the landlord."],
    ["What bedroom size can I rent?", "Your voucher is approved for a specific bedroom size set by the housing authority. Filter our homes by bedrooms to see what matches."],
  ],
},
{
  slug: "hud-vash-housing-baltimore",
  nav: "HUD-VASH",
  title: "HUD-VASH Housing in Baltimore City | Caprate",
  h1: "HUD-VASH housing in Baltimore City",
  description: "Caprate accepts HUD-VASH vouchers on renovated Baltimore City rentals and works directly with VA case managers on referrals, RFTA paperwork and inspections.",
  kicker: "HUD-VASH",
  lede: "We accept HUD-VASH vouchers and work directly with VA case managers, so the housing side of a placement moves as fast as the paperwork allows.",
  body: `
<h2>What HUD-VASH is</h2>
<p>HUD-VASH (HUD–Veterans Affairs Supportive Housing) pairs a rental voucher from the U.S. Department of Housing and Urban Development with case management and supportive services from the VA. The voucher is administered by the local public housing authority and works much like a Housing Choice Voucher. The VA case manager supports the veteran before and after move-in.</p>

<h2>What we provide</h2>
<ul class="checks">
  <li>Renovated Baltimore City homes that accept HUD-VASH, with no extra fees</li>
  <li>A single point of contact from referral to move-in</li>
  <li>Prompt completion of the landlord portion of the RFTA and quick inspection scheduling</li>
  <li>A current, unit-by-unit availability list sent to case managers on request</li>
</ul>

<h2>For VA case managers</h2>
<p>Send us the voucher bedroom size and target move-in timing, and we'll reply with the homes that match. You keep the clinical and case management relationship; we handle the unit, the landlord paperwork, and the coordination. Use the <a href="/homeless-services-partners.html#refer">referral form</a> or call us directly.</p>
<p class="note">Please don't send diagnoses or other health details. We only need what's on the housing paperwork.</p>

<h2>VA resources in Baltimore</h2>
<div class="resource-list">
  <div><strong>VA Baltimore Community Resource and Referral Center</strong><span>209 West Fayette Street, Baltimore, MD 21201 · <a href="tel:4106373246">410-637-3246</a></span></div>
  <div><strong>National Call Center for Homeless Veterans</strong><span>24 hours a day · <a href="tel:18774243838">877-424-3838</a></span></div>
  <div><strong>Veterans Crisis Line</strong><span>Call <a href="tel:988">988</a>, then press 1, or text 838255</span></div>
</div>
`,
  faq: [
    ["Do you accept HUD-VASH vouchers in Baltimore?", "Yes. Caprate accepts HUD-VASH vouchers on every home we list in Baltimore City, with no extra fees."],
    ["How do VA case managers refer to Caprate?", "Use the referral form on our partners page or call us with the voucher bedroom size and target move-in date. We reply with matching homes and handle the landlord paperwork."],
    ["How is HUD-VASH different from a regular Housing Choice Voucher?", "The rental assistance works much the same way. The difference is that HUD-VASH also includes VA case management and supportive services."],
    ["Who do I contact about HUD-VASH eligibility?", "Eligibility is determined by the VA and the housing authority, not by Caprate. The VA Baltimore Community Resource and Referral Center at 410-637-3246 can help."],
  ],
},
{
  slug: "homeless-services-partners",
  nav: "For agencies",
  title: "Rapid Rehousing Partner, Baltimore City | Caprate",
  h1: "A housing partner for Baltimore's homeless services agencies",
  description: "Caprate works with Baltimore City case managers in rapid rehousing, permanent supportive housing and Coordinated Access programs to place clients in renovated rentals.",
  kicker: "For case managers and placing agencies",
  lede: "When a client has a voucher or rental assistance in hand, the hardest part is often finding a landlord who will move quickly. That's the part we take off your plate.",
  body: `
<h2>Programs we work with</h2>
<ul class="checks">
  <li>Rapid rehousing and permanent supportive housing programs</li>
  <li>Housing Choice Vouchers and other tenant-based rental assistance</li>
  <li>HUD-VASH, through VA case managers</li>
  <li>Placements coming through Baltimore City's Coordinated Access system</li>
</ul>

<h2>What working with Caprate looks like</h2>
<div class="feature-grid">
  <div><h3>Fast RTA turnaround</h3><p>We complete our paperwork and schedule inspections quickly, so clients aren't left waiting on a unit.</p></div>
  <div><h3>One point of contact</h3><p>The same person from referral to move-in. No call-center loops.</p></div>
  <div><h3>Clear lanes</h3><p>We provide the unit and coordinate the landlord side. Your team keeps the services and the client relationship.</p></div>
  <div><h3>Move-in-ready homes</h3><p>Renovated units that are kept inspection-ready, not projects that stall.</p></div>
</div>

<h2 id="refer">Send a referral</h2>
<p>Tell us the program, voucher bedroom size, and timing. We'll reply with matching homes. This opens a pre-filled email; nothing is stored on this site.</p>
<form class="mail-form" data-mail-form="referral" novalidate>
  <div class="form-row">
    <label>Your name<input name="name" required autocomplete="name"></label>
    <label>Agency or program<input name="agency" required autocomplete="organization"></label>
  </div>
  <div class="form-row">
    <label>Your phone<input name="phone" type="tel" autocomplete="tel"></label>
    <label>Your email<input name="email" type="email" autocomplete="email"></label>
  </div>
  <div class="form-row">
    <label>Voucher or assistance type
      <select name="voucher"><option>Housing Choice Voucher</option><option>HUD-VASH</option><option>Rapid rehousing</option><option>Permanent supportive housing</option><option>Other</option></select>
    </label>
    <label>Bedroom size<select name="beds"><option>Studio / 0 BR</option><option>1 BR</option><option selected>2 BR</option><option>3 BR</option><option>4+ BR</option></select></label>
  </div>
  <label>Target move-in<input name="timing" placeholder="e.g. within 30 days"></label>
  <label>Accessibility needs or other notes<textarea name="notes" rows="3" placeholder="Please don't include diagnoses or other health details"></textarea></label>
  <button class="btn btn-brass" type="submit">Open referral email</button>
</form>

<h2>Resources</h2>
<div class="resource-list">
  <div><strong>Mayor's Office of Homeless Services</strong><span>Coordinated Access, shelter and outreach information · <a href="https://homeless.baltimorecity.gov/">homeless.baltimorecity.gov</a></span></div>
  <div><strong>211 Maryland</strong><span>Dial <a href="tel:211">211</a> for shelter, food, and housing help, 24 hours a day</span></div>
  <div><strong>Veterans</strong><span>See our <a href="/hud-vash-housing-baltimore.html">HUD-VASH page</a> for VA contacts</span></div>
</div>
`,
  faq: [
    ["Does Caprate work with rapid rehousing programs in Baltimore?", "Yes. We work with case managers from rapid rehousing, permanent supportive housing, and voucher programs to place clients in our Baltimore City homes."],
    ["Can you send our agency a current availability list?", "Yes. We send case managers a unit-by-unit list with bedroom counts. Use the referral form or email us to get on the list."],
    ["Does Caprate provide case management?", "No. We provide the housing and coordinate the landlord side of the placement. Your agency keeps the services and client relationship."],
    ["What information do you need in a referral?", "The program or voucher type, bedroom size, target move-in date, and any accessibility needs. Please don't send health information."],
  ],
},
];

// The voucher holder's guide, carried over from caprate_voucher_guide.html.
// ---- Article: what happens after you find a home (draft for review) ----
PAGES.push({
  slug: "section-8-move-in-process-baltimore",
  nav: "Section 8 move-in steps",
  title: "Section 8 Move-In Steps in Baltimore City | Caprate",
  h1: "From voucher to keys: the Section 8 move-in process in Baltimore City",
  description: "What happens after you find a home with a Housing Choice Voucher in Baltimore City: the RFTA, rent review, inspection, lease and HAP contract, and move-in, step by step.",
  kicker: "Step-by-step guide",
  lede: "You found a home that fits your voucher. Here is what happens between \"I want this one\" and getting your keys, what you can do at each step, and what we handle on our side.",
  body: `
<p>Finding a home is only part of the process. After you choose a home, the housing authority still has to approve the rent, inspect the home, and sign a contract with the landlord before you can move in with your voucher. Knowing the order of these steps helps you avoid surprises and keep things moving.</p>
<p>This guide follows the process used for Housing Choice Vouchers (Section 8) and HUD-VASH vouchers in Baltimore City. The Housing Authority of Baltimore City (HABC) runs the program in the city, and its rules and your caseworker have the final word on your voucher. If you're still looking for a home, start with our <a href="/voucher-guide.html">voucher holder's guide</a>.</p>

<h2>Step 1: Apply for the home</h2>
<p>Once you've toured a home and want it, you apply with the landlord like any other renter. At Caprate, every applicant is screened by the same standard, and there are no extra fees for paying with a voucher. Have your photo ID, voucher paperwork, and any proof of income ready so the application isn't held up.</p>

<h2>Step 2: Submit the Request for Tenancy Approval (RFTA)</h2>
<p>The RFTA is the form that asks the housing authority to approve the specific home. You and the landlord each fill out part of it: your information, and the landlord's information about the home, the rent, which utilities are included, and when it's available. It then goes to the housing authority.</p>
<div class="callout"><p><strong>Your search clock pauses.</strong> Under HUD rules, the housing authority must pause, or "suspend," the time left on your voucher from the day the RFTA is submitted until it tells you its decision in writing. Keep a copy of the RFTA and note the date it was turned in.</p></div>
<p>At Caprate, we complete and return our part of the RFTA promptly so your time isn't spent waiting on the landlord.</p>

<h2>Step 3: The housing authority reviews the rent</h2>
<p>Before approving the home, the housing authority checks two things:</p>
<ul class="checks">
  <li><strong>The rent is reasonable.</strong> It compares the rent with similar homes in the area.</li>
  <li><strong>Your share is affordable.</strong> Your share is generally about 30% of your adjusted income. When a home's total rent and utilities are above your voucher's payment standard, HUD rules say your share when you first move in can't be more than 40% of your adjusted monthly income.</li>
</ul>
<p>If the rent doesn't work under these rules, the housing authority will tell you and the landlord. Sometimes the rent can be adjusted; other times you'll keep looking, with the time left on your voucher.</p>

<h2>Step 4: The inspection</h2>
<p>Every home rented with a voucher must pass a health-and-safety inspection before the housing authority can pay its share. The housing authority schedules it with the landlord. Our <a href="/voucher-guide.html#inspection">voucher guide</a> lists what inspectors check, from heat and hot water to smoke and carbon-monoxide detectors.</p>
<p><strong>If something fails,</strong> it isn't the end of the process. The landlord is told what needs repair, makes the repairs, and the home is re-checked. Serious hazards must be fixed quickly. At Caprate, we schedule any flagged repairs right away and coordinate the re-inspection.</p>

<h2>Step 5: Sign the lease and the HAP contract</h2>
<p>Once the rent is approved and the home passes inspection, two documents are signed:</p>
<ul class="checks">
  <li><strong>Your lease</strong> with the landlord, which includes HUD's required tenancy addendum.</li>
  <li><strong>The Housing Assistance Payments (HAP) contract</strong> between the housing authority and the landlord. This is the agreement that lets the housing authority pay its part of the rent directly to the landlord.</li>
</ul>
<p>Read your lease before you sign, and ask about anything that isn't clear: which utilities are yours, how repairs are requested, and the lease term. In Maryland, a security deposit generally can't be more than one month's rent for leases signed on or after October 1, 2024.</p>

<h2>Step 6: Move in</h2>
<p>With everything signed, you get your keys. Walk through the home with the landlord, note its condition in writing, and keep a copy along with photos. Each month, you pay your share of the rent to the landlord, and the housing authority pays the rest directly.</p>
<p>After move-in, report income changes to the housing authority as required, since your share can be recalculated, and expect periodic inspections while you live there.</p>

<h2>How long does it take?</h2>
<p>It varies. The timeline depends on how quickly the RFTA is completed, the housing authority's review and inspection schedule, and whether any repairs are needed. Nobody can promise an exact date, but having your documents ready, returning paperwork quickly, and staying in touch with your caseworker all help.</p>

<h2>Using a HUD-VASH voucher?</h2>
<p>The steps are the same. Your VA case manager can help with the RFTA and stay in touch with the housing authority along the way. See <a href="/hud-vash-housing-baltimore.html">HUD-VASH housing in Baltimore City</a>.</p>

<h2>What Caprate handles on our side</h2>
<ul class="checks">
  <li>We accept Housing Choice Vouchers and HUD-VASH on every home we list.</li>
  <li>No extra fees for voucher holders, and the same screening standard for every applicant.</li>
  <li>We complete our part of the RFTA promptly.</li>
  <li>We coordinate the inspection and make any required repairs right away.</li>
  <li>We work directly with caseworkers and placing agencies.</li>
</ul>
<p>Ready to look? See <a href="/#homes">homes available now</a>, or call us with questions.</p>
<p class="note">This guide is general information, not legal advice. Housing authority procedures can change, and your voucher's terms are set by your housing authority. For questions about your own voucher, contact your caseworker or the Housing Authority of Baltimore City.</p>
`,
  faq: [
    ["Does my voucher time stop after I submit the RFTA?", "Yes. HUD rules require the housing authority to pause, or suspend, the time left on your voucher from the day you submit the Request for Tenancy Approval until it gives you its decision in writing."],
    ["What happens if the home fails inspection?", "The landlord is told what needs repair, makes the repairs, and the home is inspected again. The housing authority can't pay its share until the home passes."],
    ["What if my share of the rent would be too high?", "When a home's rent and utilities are above your voucher's payment standard, your share at move-in can't be more than 40% of your adjusted monthly income. If it would be, the rent may be adjusted, or you can keep looking."],
    ["How much can a security deposit be in Maryland?", "For leases signed on or after October 1, 2024, Maryland generally limits security deposits to one month's rent."],
    ["Can I move in before the inspection passes?", "Generally, no. The housing authority can't start paying its share until the home passes inspection and the HAP contract is signed, so wait for approval before moving in."],
  ],
});


export const GUIDE = {
  slug: "voucher-guide",
  title: "Voucher Holder's Guide to Renting in Baltimore | Caprate",
  h1: "Your guide to renting with a voucher in Baltimore",
  description: "A plain-language guide for Housing Choice Voucher holders in Baltimore: the search clock, what to have ready, your rights, the inspection, and your rent share.",
  kicker: "For voucher holders",
  lede: "A plain-language walkthrough of how the search really works, so you can move with confidence and take the lead in finding your next home.",
  sections: [
    ["clock", "Your voucher has a clock — use the time well", `
<p>Your Housing Choice Voucher comes with a search window, usually around 90 days, to find a place and get it approved. That timeline is real.</p>
<ul><li><strong>Start looking immediately.</strong> The clock starts when the voucher is issued, not when you feel ready.</li>
<li><strong>Know your bedroom size.</strong> Your voucher is approved for a specific number of bedrooms. Only units that match can be approved.</li>
<li><strong>Running low on time? Ask.</strong> Extensions are sometimes available, including as a reasonable accommodation. Your caseworker or HABC can tell you what's possible.</li></ul>`],
    ["ready", "What to have ready before you call", `
<p>The right apartment can go fast. Being ready to move forward the same day helps.</p>
<ul><li><strong>Your voucher paperwork</strong>, including your Request for Tenancy Approval (RFTA) packet.</li>
<li><strong>Photo ID.</strong></li>
<li><strong>Proof of income</strong> if you have earned income: pay stubs or benefit letters.</li>
<li><strong>References</strong>, such as a past landlord's contact.</li>
<li><strong>Your bedroom size and must-haves</strong> written down.</li></ul>`],
    ["rights", "Know your rights — landlords can't refuse your voucher", `
<p>Maryland law and Baltimore City law both protect renters from discrimination based on <strong>source of income</strong>. In general, most landlords may not turn you away because part of your rent is paid with a voucher.</p>
<ul><li>A landlord can still screen applicants, but must use the <strong>same standard</strong> for everyone.</li>
<li>Be cautious of requirements to earn two or three times the <em>full</em> rent. With a voucher, your share is usually about 30% of your income.</li>
<li>If a landlord flatly refuses your voucher, you can raise it with a fair housing organization or ask your caseworker how to report it.</li></ul>`],
    ["inspection", "What the inspection checks for", `
<p>Every unit rented with a voucher must pass a health-and-safety inspection before you move in. It's there to protect you.</p>
<ul><li>Working heat, hot water, electricity, and plumbing</li>
<li>Windows and doors that lock and work</li>
<li>Smoke and carbon-monoxide detectors</li>
<li>No serious hazards such as exposed wiring, major leaks, or peeling paint in older homes</li>
<li>Appliances and fixtures in working order</li></ul>
<p>You don't fix anything; that's the landlord's job. If something doesn't pass, it's repaired and re-checked.</p>`],
    ["questions", "Questions to ask before you sign", `
<ul><li><strong>What's included in the rent?</strong> Which utilities are yours?</li>
<li><strong>Who handles repairs, and how fast?</strong></li>
<li><strong>What's the security deposit, and what could come out of it?</strong> Maryland law sets rules for how deposits are handled and returned.</li>
<li><strong>What's the lease term, and what happens when it ends?</strong></li>
<li><strong>Is there anything about the unit I should know?</strong></li></ul>`],
    ["rent", "How your rent share is figured", `
<p>With a Housing Choice Voucher, you generally pay about <strong>30% of your adjusted income</strong> toward rent and utilities, and the program pays the rest.</p>
<ul><li>The housing authority calculates your exact share from your income and allowed deductions.</li>
<li>If your income drops, report it. Your share can be recalculated.</li>
<li>The unit's total rent must be reasonable for the area, which the housing authority checks.</li></ul>`],
  ],
  footnote: "Found a home? See <a href=\"/section-8-move-in-process-baltimore.html\">what happens next, from RFTA to keys</a>. This guide is general information. For the details of your voucher, your case manager or the Housing Authority of Baltimore City (HABC) has the final word.",
};

// Neighborhoods Caprate serves. A page is built for each, whether or not a
// home is listed there this week, so search results never hit a dead page.
// Describe by transit and landmarks only — never by who lives there.
export const NEIGHBORHOODS = [
  {
    name: "Garwyn Oaks", zip: "21216", area: "Northwest Baltimore",
    about: [
      "Garwyn Oaks is a residential neighborhood in northwest Baltimore City, centered on Garrison Boulevard and the side streets around Allendale Road. Most homes are brick rowhomes and duplexes, many divided into apartments.",
      "Mondawmin Mall and the Mondawmin Metro Subway station are a short ride away, and Liberty Heights Avenue and Garrison Boulevard carry frequent MTA bus service toward downtown and the northwest suburbs.",
    ],
    getAround: ["Mondawmin Metro Subway station", "MTA buses on Garrison Blvd and Liberty Heights Ave", "Quick access to Gwynns Falls Parkway"],
    landmarks: ["Mondawmin Mall", "Gwynns Falls / Leakin Park", "Coppin State University"],
  },
  {
    name: "Walbrook", zip: "21216", area: "West Baltimore",
    about: [
      "Walbrook sits in west Baltimore around Walbrook Junction, where North Avenue meets Windsor Mill Road and Garrison Boulevard. The neighborhood is made up mostly of brick rowhomes and small apartment buildings.",
      "Coppin State University is close by on North Avenue, and the Mondawmin Metro Subway station and North Avenue bus lines connect Walbrook to downtown and the rest of the city.",
    ],
    getAround: ["MTA buses along North Avenue", "Mondawmin Metro Subway station", "Short drive to downtown via North Avenue"],
    landmarks: ["Coppin State University", "Walbrook Junction shops", "Gwynns Falls Trail"],
  },
  {
    name: "Panway-Braddish", zip: "21216", area: "West Baltimore",
    about: [
      "Panway-Braddish is a small west Baltimore neighborhood between Walbrook and Mondawmin, made up mostly of two-story brick rowhomes on short residential blocks.",
      "Its location puts the Mondawmin Metro Subway station, Mondawmin Mall and Coppin State University all within a short ride, with bus service on North Avenue and nearby main roads.",
    ],
    getAround: ["Mondawmin Metro Subway station", "MTA buses on North Avenue", "Short drive to downtown via North Avenue"],
    landmarks: ["Mondawmin Mall", "Coppin State University", "Druid Hill Park"],
  },
  {
    name: "Forest Park", zip: "21215", area: "Northwest Baltimore",
    about: [
      "Forest Park is a northwest Baltimore neighborhood along Liberty Heights Avenue and Garrison Boulevard, known for older detached homes, porch-front houses and tree-lined streets alongside apartment conversions.",
      "The Forest Park Golf Course, a city-run public course, is in the neighborhood, and Liberty Heights Avenue has bus service toward Mondawmin and downtown.",
    ],
    getAround: ["MTA buses on Liberty Heights Avenue and Garrison Blvd", "Mondawmin Metro Subway station", "Access to I-695 via Liberty Heights Avenue"],
    landmarks: ["Forest Park Golf Course", "Liberty Heights Avenue shops", "Gwynns Falls / Leakin Park"],
  },
  {
    name: "Arlington", zip: "21215", area: "Northwest Baltimore",
    about: [
      "Arlington is in northwest Baltimore near Reisterstown Road, with a mix of rowhomes, semi-detached houses and small apartment buildings.",
      "The Rogers Avenue Metro Subway station is close by, giving a direct train to Mondawmin, State Center and downtown Baltimore, and Reisterstown Road has frequent bus service and shopping.",
    ],
    getAround: ["Rogers Avenue Metro Subway station", "MTA buses on Reisterstown Road", "Access to the Jones Falls Expressway and I-695"],
    landmarks: ["Reisterstown Road shopping", "Pimlico Race Course", "Cylburn Arboretum"],
  },
  {
    name: "Original Northwood", zip: "21218", area: "Northeast Baltimore",
    about: [
      "Original Northwood is a northeast Baltimore neighborhood next to Morgan State University, with brick colonials, duplexes and rowhome apartments on curving, tree-lined streets.",
      "Hillen Road, Loch Raven Boulevard and The Alameda carry bus service across north Baltimore, and the shops along The Alameda and Northwood Commons are nearby.",
    ],
    getAround: ["MTA buses on Hillen Road, Loch Raven Blvd and The Alameda", "Short drive to downtown via Hillen Road", "Access to I-695 via Loch Raven Boulevard"],
    landmarks: ["Morgan State University", "Lake Montebello", "Northwood Commons shopping"],
  },
  {
    name: "Waverly", zip: "21218", area: "North-central Baltimore",
    about: [
      "Waverly is a north-central Baltimore neighborhood along Greenmount Avenue and East 33rd Street, with rowhomes, porch-front houses and small apartment buildings.",
      "It is home to the year-round Saturday farmers market on East 32nd Street, and the Johns Hopkins Homewood campus is a short trip west. Greenmount Avenue has frequent bus service to downtown.",
    ],
    getAround: ["MTA buses on Greenmount Avenue and 33rd Street", "Short trip to Penn Station and downtown", "Charles Street bus lines a few blocks west"],
    landmarks: ["32nd Street Farmers Market", "Johns Hopkins Homewood campus", "Stadium Place / YMCA"],
  },
  {
    name: "Better Waverly", zip: "21218", area: "North-central Baltimore",
    about: [
      "Better Waverly lies just east of Greenmount Avenue around East 33rd Street, mostly rowhomes on compact residential blocks.",
      "The former Memorial Stadium site, now Stadium Place with a YMCA, sits along its northern edge, and the Waverly farmers market, Greenmount Avenue shops and bus lines are within walking distance.",
    ],
    getAround: ["MTA buses on Greenmount Avenue and 33rd Street", "Short trip to Penn Station", "Access to the Jones Falls Expressway"],
    landmarks: ["Stadium Place / YMCA", "32nd Street Farmers Market", "Lake Montebello"],
  },
  {
    name: "Pen Lucy", zip: "21212", area: "North Baltimore",
    about: [
      "Pen Lucy is a north Baltimore neighborhood north of Waverly, between Greenmount Avenue and the York Road corridor, with rowhomes, porch-front houses and small apartment buildings.",
      "Loyola University Maryland and the Johns Hopkins Homewood campus are nearby, and York Road and Greenmount Avenue carry frequent bus service north to Towson and south to downtown.",
    ],
    getAround: ["MTA buses on York Road and Greenmount Avenue", "Direct bus service to Towson and downtown", "Access to the Jones Falls Expressway"],
    landmarks: ["Loyola University Maryland", "York Road shops", "Johns Hopkins Homewood campus"],
  },
];
