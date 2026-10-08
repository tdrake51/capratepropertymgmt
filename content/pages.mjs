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
  title: "Section 8 & Housing Choice Voucher Rentals in Baltimore City | Caprate",
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
  title: "HUD-VASH Housing in Baltimore City — Landlord Accepting VASH Vouchers | Caprate",
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
  title: "Housing Partner for Baltimore Homeless Services & Rapid Rehousing | Caprate",
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
  footnote: "This guide is general information. For the details of your voucher, your case manager or the Housing Authority of Baltimore City (HABC) has the final word.",
};

// Neighborhoods Caprate serves. A page is built for each, whether or not a
// home is listed there this week, so search results never hit a dead page.
// Describe by transit and landmarks only — never by who lives there.
export const NEIGHBORHOODS = [
  { name: "Garwyn Oaks", zip: "21216" },
  { name: "Walbrook", zip: "21216" },
  { name: "Panway-Braddish", zip: "21216" },
  { name: "Forest Park", zip: "21215" },
  { name: "Arlington", zip: "21215" },
  { name: "Original Northwood", zip: "21218" },
  { name: "Waverly", zip: "21218" },
  { name: "Better Waverly", zip: "21218" },
  { name: "Pen Lucy", zip: "21212" },
];
