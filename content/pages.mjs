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

<h2>Payment standards and how much rent a voucher covers</h2>
<p>Each year the housing authority sets <strong>payment standards</strong>, the maximum amount it will use to calculate assistance, based on the number of bedrooms and HUD's Fair Market Rents for the Baltimore area. A home can rent for more or less than the payment standard, but the standard, together with your income, is what sets your share. When a home's rent and utilities land within the standard and pass the reasonableness check, the voucher works smoothly. We set the rents on our homes with those standards in mind, which is a large part of why our homes move through approval without back-and-forth.</p>

<h2>Finding Section 8 rentals in Baltimore</h2>
<p>Voucher-friendly homes in Baltimore turn over week to week, so the best approach is to check current availability often and act quickly when something fits. Our <a href="/#homes">available homes</a> list is updated as units come and go, and you can also filter by <a href="/#homes">neighborhood</a> to focus your search where you want to live. For a plain-language walk through choosing an area, see our <a href="/baltimore-neighborhoods-for-voucher-holders.html">Baltimore neighborhood guide for voucher holders</a>.</p>
`,
  faq: [
    ["Do you accept Section 8 in Baltimore City?", "Yes. Caprate accepts Housing Choice Vouchers (Section 8) on every home we list in Baltimore City, with no extra fees for voucher holders."],
    ["Do you accept vouchers from outside Baltimore City?", "Yes. Portable vouchers transferred from another housing authority are welcome. Your caseworker can help with the portability paperwork."],
    ["Is there an extra fee or higher deposit for voucher holders?", "No. Voucher holders pay the same application terms as every other applicant."],
    ["How much rent does a Section 8 voucher cover?", "The housing authority sets payment standards each year by bedroom size, based on HUD's Fair Market Rents for the Baltimore area. Your share is generally about 30% of your adjusted income, and the program pays the rest up to what the payment standard and rent reasonableness allow."],
    ["How do I find Section 8 rentals in Baltimore?", "Voucher-friendly homes turn over week to week. Check our available homes list often, browse by neighborhood to focus your search, and act quickly when a home that fits your bedroom size comes up."],
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

<h2>How much does HUD-VASH pay for rent?</h2>
<p>A HUD-VASH voucher works like a Housing Choice Voucher on the money side. The veteran generally pays about 30% of their adjusted income toward rent and utilities, and the voucher covers the rest, up to the housing authority's payment standard for that bedroom size. There is no separate HUD-VASH rent amount; it follows the same payment standards and rent-reasonableness rules as Section 8 in the Baltimore area. The exact split is set by the housing authority based on the veteran's income and the home's rent.</p>

<h2>Finding HUD-VASH homes: our current list</h2>
<p>There is no single public "HUD-VASH housing list," because voucher-friendly homes come from many landlords and change constantly. What we can offer is our own current, unit-by-unit list of homes that accept HUD-VASH, which we keep up to date and send to VA case managers on request. See <a href="/#homes">homes available now</a>, or ask us for the current list by bedroom size.</p>

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
    ["How much does HUD-VASH pay for rent?", "HUD-VASH works like a Housing Choice Voucher: the veteran generally pays about 30% of adjusted income toward rent and utilities, and the voucher covers the rest up to the housing authority's payment standard for that bedroom size. There is no separate HUD-VASH rent amount."],
    ["Is there a HUD-VASH housing list I can browse?", "There is no single public list, because voucher-friendly homes come from many landlords and change often. Caprate keeps a current, unit-by-unit list of homes that accept HUD-VASH and sends it to VA case managers on request."],
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
  title: "When Can I Move In After My Section 8 Inspection? Baltimore Step-by-Step | Caprate",
  h1: "From voucher to keys: the Section 8 move-in process in Baltimore City",
  description: "After your Section 8 inspection passes in Baltimore City, you move in once the HAP contract and lease are signed. Here is the full step-by-step process: RFTA, rent review, inspection, and move-in day.",
  kicker: "Step-by-step guide",
  lede: "You found a home that fits your voucher. Here is what happens between \"I want this one\" and getting your keys, including how soon you can move in after the inspection, what you can do at each step, and what we handle on our side.",
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

<h2>When can I move in after the inspection passes?</h2>
<p>This is the question most people ask, so here it is plainly: once the home passes inspection and the rent is approved, you can move in as soon as the lease and the Housing Assistance Payments (HAP) contract are signed. The inspection passing is the milestone most people wait on, but it is the signatures right after it, not the inspection itself, that let you get the keys. In practice those signatures happen quickly once everything else is in place, often within a few days, because the hard part is already done.</p>
<p>You generally should not move in before the inspection passes and the contract is signed. The housing authority cannot begin paying its share until both are complete, so moving in early can leave you responsible for the full rent. At Caprate, we push the lease and HAP paperwork through as soon as the home passes so there is no gap between a passed inspection and your move-in day.</p>

<h2>How long does the whole process take?</h2>
<p>It varies. The timeline depends on how quickly the RFTA is completed, the housing authority's review and inspection schedule, and whether any repairs are needed. Nobody can promise an exact date, but having your documents ready, returning paperwork quickly, and staying in touch with your caseworker all help. For a closer look at the paperwork that starts it all, see our <a href="/rfta-process-baltimore.html">guide to the RFTA and Section 8 approval process</a>.</p>

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
    ["When can I move in after my Section 8 inspection passes?", "Once the home passes inspection and the rent is approved, you can move in as soon as the lease and the HAP contract are signed. The inspection is the milestone most people wait on, but it is those signatures right after it that let you get the keys, and they usually happen within a few days."],
    ["Does my voucher time stop after I submit the RFTA?", "Yes. HUD rules require the housing authority to pause, or suspend, the time left on your voucher from the day you submit the Request for Tenancy Approval until it gives you its decision in writing."],
    ["What happens if the home fails inspection?", "The landlord is told what needs repair, makes the repairs, and the home is inspected again. The housing authority can't pay its share until the home passes."],
    ["What if my share of the rent would be too high?", "When a home's rent and utilities are above your voucher's payment standard, your share at move-in can't be more than 40% of your adjusted monthly income. If it would be, the rent may be adjusted, or you can keep looking."],
    ["How much can a security deposit be in Maryland?", "For leases signed on or after October 1, 2024, Maryland generally limits security deposits to one month's rent."],
    ["Can I move in before the inspection passes?", "Generally, no. The housing authority can't start paying its share until the home passes inspection and the HAP contract is signed, so wait for approval before moving in."],
  ],
});


// ---- Guide: the RFTA and Section 8 approval process ----
PAGES.push({
  slug: "rfta-process-baltimore",
  nav: "RFTA process",
  title: "RFTA Explained: the Request for Tenancy Approval in Baltimore | Caprate",
  h1: "The RFTA, step by step: how Section 8 approves a home in Baltimore City",
  description: "What the Request for Tenancy Approval (RFTA) is, who fills out which part, what the housing authority checks, and how long it takes, for Housing Choice Voucher and HUD-VASH renters and landlords in Baltimore City.",
  kicker: "Understanding the paperwork",
  lede: "The RFTA is the form that turns \"I found a home\" into an approved voucher tenancy. Here is what it is, what each side fills in, and what happens after it is submitted.",
  body: `
<p>If you are renting with a Housing Choice Voucher (Section 8) or a HUD-VASH voucher, the Request for Tenancy Approval, almost always called the RFTA, is the single most important piece of paper in the process. It is the form that asks the housing authority to approve a specific home at a specific rent. Nothing moves forward until it is submitted, so understanding it helps both renters and landlords keep things on track.</p>

<h2>What is the RFTA?</h2>
<p>The RFTA (Request for Tenancy Approval) is a standard HUD form used by the Housing Authority of Baltimore City (HABC) and housing authorities everywhere. It gathers the facts the housing authority needs to decide whether it can approve a home for your voucher: the address, the rent the landlord is asking, which utilities are included, the home's size and type, and when it is available. Think of it as the formal request that starts the approval clock.</p>

<h2>Who fills out the RFTA?</h2>
<p>The RFTA has two sides, and it takes both of you to complete it:</p>
<ul class="checks">
  <li><strong>The renter</strong> provides their information and voucher details, usually with help from the caseworker.</li>
  <li><strong>The landlord</strong> provides the home's details: the rent, which utilities the tenant pays versus the owner, the number of bedrooms, the year built, and the owner's tax information for payments.</li>
</ul>
<p>Once both sides are complete, it is turned in to the housing authority, often by the renter or the caseworker. At Caprate, we complete and return the landlord's part promptly, because a slow landlord is one of the most common reasons an RFTA stalls.</p>

<h2>What happens after the RFTA is submitted</h2>
<ol class="steps">
  <li><strong>Your voucher clock pauses.</strong> HUD rules require the housing authority to suspend the time left on your voucher from the day the RFTA is submitted until it gives you a written decision. Keep a copy and note the date.</li>
  <li><strong>Rent reasonableness review.</strong> The housing authority compares the asking rent to similar homes nearby to confirm it is reasonable, and checks that your share is affordable under program rules.</li>
  <li><strong>Inspection.</strong> The home must pass a health-and-safety inspection before the housing authority can pay its share.</li>
  <li><strong>Lease and HAP contract.</strong> Once rent is approved and the home passes, you sign the lease and the landlord signs the Housing Assistance Payments (HAP) contract with the housing authority.</li>
</ol>
<p>For the full walk-through of everything after the RFTA, see our <a href="/section-8-move-in-process-baltimore.html">Section 8 move-in process guide</a>.</p>

<h2>How long does RFTA approval take?</h2>
<p>There is no fixed number. It depends on how fast both sides complete the form, the housing authority's review and inspection schedule, and whether repairs are needed after inspection. The parts you can control are the big ones: fill in your side completely, make sure the landlord returns theirs quickly, and respond fast to any request for more information.</p>

<h2>Common reasons an RFTA gets held up</h2>
<ul class="checks">
  <li>The landlord is slow to complete their part or provide a W-9.</li>
  <li>The asking rent comes back as not reasonable and has to be revisited.</li>
  <li>Missing documents, such as proof of the owner or incomplete utility information.</li>
  <li>Repairs are needed after the inspection and the re-inspection has to be scheduled.</li>
</ul>
<p>We work to avoid every one of these on our homes: our paperwork goes back promptly, our rents are set to pass the reasonableness test, and we schedule any repairs right away.</p>

<h2>For landlords: accepting vouchers and the RFTA</h2>
<p>If you own or manage property and are asked to accept a voucher, the RFTA is where you commit the home's details to the housing authority. Completing it accurately and quickly, and keeping the rent within a reasonable range, is the difference between a smooth approval and weeks of delay. Caprate works with voucher holders and caseworkers every week; if you manage property and want to understand the landlord side, our <a href="/section-8-housing-baltimore.html">Section 8 housing page</a> and <a href="/homeless-services-partners.html">agency partners page</a> explain how we handle it.</p>

<p>Looking for a voucher-friendly home now? See <a href="/#homes">homes available now</a>, or read the <a href="/voucher-guide.html">voucher holder's guide</a> to get ready before you apply.</p>
<p class="note">This guide is general information, not legal advice. The RFTA form and housing authority procedures can change, and your voucher's terms are set by your housing authority. For questions about your own voucher, contact your caseworker or the Housing Authority of Baltimore City.</p>
`,
  faq: [
    ["What does RFTA stand for?", "RFTA stands for Request for Tenancy Approval. It is the HUD form that asks the housing authority to approve a specific home, at a specific rent, for your Housing Choice Voucher or HUD-VASH voucher."],
    ["Who fills out the RFTA?", "Both the renter and the landlord. The renter provides their information and voucher details, usually with the caseworker's help, and the landlord provides the home's details, rent, utilities, and tax information. It is then submitted to the housing authority."],
    ["How long does RFTA approval take in Baltimore?", "There is no fixed timeline. It depends on how quickly both sides complete the form, the housing authority's review and inspection schedule, and whether any repairs are needed. Returning paperwork quickly is the best way to speed it up."],
    ["Does submitting the RFTA pause my voucher clock?", "Yes. HUD rules require the housing authority to suspend the time left on your voucher from the day the RFTA is submitted until it gives you a written decision."],
    ["What happens after the RFTA is approved?", "The housing authority reviews the rent, inspects the home, and then the lease and the HAP contract are signed. Once those signatures are done, you can move in. See our Section 8 move-in process guide for the full sequence."],
  ],
});

// ---- Article: neighborhood guide for voucher holders ----
PAGES.push({
  slug: "baltimore-neighborhoods-for-voucher-holders",
  nav: "Neighborhood guide",
  title: "Baltimore Neighborhoods for Voucher Holders | Caprate",
  h1: "Where we rent: a Baltimore neighborhood guide for voucher holders",
  description: "A plain-language look at the Baltimore City neighborhoods where Caprate rents to Housing Choice Voucher (Section 8) and HUD-VASH holders, with transit, landmarks, and what to expect.",
  kicker: "Choosing a neighborhood",
  lede: "Your voucher works anywhere in Baltimore City that accepts it, so the real question is where you want to live. Here is a look at the neighborhoods where we rent, and what each one is like day to day.",
  body: `
<p>When you are searching with a Housing Choice Voucher (Section 8) or a HUD-VASH voucher, it is easy to focus only on which homes will take the voucher. That matters, but so does the neighborhood: how you will get to work or appointments, what is within walking distance, and whether the home fits your bedroom size. We rent across several parts of Baltimore City, and each area has its own feel. This guide walks through them so you can search with a place in mind, not just a bedroom count.</p>

<h2>Northwest Baltimore</h2>
<p>Most of our homes sit in northwest Baltimore, a part of the city built largely of brick rowhomes and duplexes, many divided into comfortable apartments. It is well connected to the Metro Subway and frequent bus lines, which makes getting downtown straightforward without a car.</p>
<ul class="checks">
  <li><strong>Garwyn Oaks (21216).</strong> Centered on Garrison Boulevard and the streets around Allendale Road. A short ride from Mondawmin Mall and the Mondawmin Metro station, with frequent buses toward downtown. Most of our Garrison and Allendale homes are here. See <a href="/neighborhoods/garwyn-oaks.html">Garwyn Oaks rentals</a>.</li>
  <li><strong>Dolfield (21215).</strong> Along Dolfield Avenue near West Cold Spring Lane, close to the West Coldspring Metro station and Sinai Hospital. A quiet residential pocket of rowhomes and small apartment buildings. See <a href="/neighborhoods/dolfield.html">Dolfield rentals</a>.</li>
  <li><strong>Central Park Heights (21215).</strong> Around Park Heights Avenue, near Sinai Hospital and Pimlico Race Course, with bus service on Park Heights Avenue and Reisterstown Road. See <a href="/neighborhoods/central-park-heights.html">Central Park Heights rentals</a>.</li>
  <li><strong>Forest Park and Arlington (21215).</strong> Older, tree-lined northwest neighborhoods near Liberty Heights Avenue and Reisterstown Road, with the Forest Park Golf Course and easy access to the Metro and I-695.</li>
</ul>

<h2>West Baltimore</h2>
<p>To the west, the city opens into residential neighborhoods with good highway access, handy if your work or family takes you toward the Beltway.</p>
<ul class="checks">
  <li><strong>Wildwood (21229).</strong> Around Wildwood Parkway near Edmondson Avenue, a residential area of rowhomes and duplexes close to Edmondson Village shopping, with bus service on Edmondson Avenue and quick access to I-70 and the park-and-ride. See <a href="/neighborhoods/wildwood.html">Wildwood rentals</a>.</li>
  <li><strong>Walbrook and Panway-Braddish (21216).</strong> West Baltimore neighborhoods near Walbrook Junction and Mondawmin, made up mostly of brick rowhomes, close to Coppin State University and North Avenue bus lines.</li>
</ul>

<h2>Northeast Baltimore</h2>
<ul class="checks">
  <li><strong>Better Waverly and Waverly (21218).</strong> Northeast neighborhoods near 33rd Street and the Waverly commercial strip, close to the MARC Penn Line and a straightforward ride to downtown and the universities. A good fit if you want a rowhome with its own front door.</li>
  <li><strong>Original Northwood and Pen Lucy.</strong> Quieter residential areas nearby, close to Morgan State University and The Alameda.</li>
</ul>

<h2>How to choose</h2>
<ol class="steps">
  <li><strong>Start with your bedroom size.</strong> Your voucher is approved for a specific number of bedrooms, so filter our <a href="/#homes">available homes</a> by that first.</li>
  <li><strong>Think about how you get around.</strong> If you rely on transit, the northwest neighborhoods near the Metro and the northeast ones near the MARC line are worth a close look.</li>
  <li><strong>Picture daily life.</strong> Where do you need to be most weeks for work, school, appointments, or family? Pick an area that makes those trips short.</li>
  <li><strong>Tour before you commit.</strong> Addresses on a list only tell you so much. Call or email and see the home and the block in person.</li>
</ol>
<p>Whatever you choose, we accept Housing Choice Vouchers (Section 8) and HUD-VASH on every home we list, with no extra fees for voucher holders, and we move quickly on the landlord side of the paperwork so your search time is not spent waiting on us. When you are ready, read the <a href="/voucher-guide.html">voucher holder's guide</a> or see <a href="/section-8-move-in-process-baltimore.html">what happens after you find a home</a>.</p>
`,
  faq: [
    ["Can I use my voucher anywhere in Baltimore City?", "Your Housing Choice Voucher can be used at any home in the city that accepts it and passes the housing authority's inspection and rent review. Caprate accepts vouchers on every home we list, so the choice of neighborhood is yours."],
    ["Which neighborhoods have the best transit?", "The northwest neighborhoods such as Garwyn Oaks, Dolfield, and Central Park Heights are close to the Metro Subway and frequent bus lines, and the northeast neighborhoods near Waverly are close to the MARC Penn Line. Both make getting downtown without a car straightforward."],
    ["Do you have homes outside northwest Baltimore?", "Yes. We also rent in west Baltimore neighborhoods like Wildwood and northeast neighborhoods like Better Waverly. The mix changes week to week, so check the available homes list or ask us."],
    ["Can you tell me which neighborhood is right for me?", "We can tell you what each area is like and what is available, but the right fit depends on your bedroom size, how you get around, and where you need to be. Call or email and we will talk it through."],
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
      "For renters, Walbrook offers some of the more affordable rowhome and apartment rents in west Baltimore, and its transit access makes it a practical base for voucher holders who get around by bus or Metro. Caprate lists voucher-friendly homes here as they become available.",
    ],
    getAround: ["MTA buses along North Avenue", "Mondawmin Metro Subway station", "Short drive to downtown via North Avenue"],
    landmarks: ["Coppin State University", "Walbrook Junction shops", "Gwynns Falls Trail"],
  },
  {
    name: "Panway-Braddish", zip: "21216", area: "West Baltimore",
    about: [
      "Panway-Braddish is a small west Baltimore neighborhood between Walbrook and Mondawmin, made up mostly of two-story brick rowhomes on short residential blocks.",
      "Its location puts the Mondawmin Metro Subway station, Mondawmin Mall and Coppin State University all within a short ride, with bus service on North Avenue and nearby main roads.",
      "The short blocks and two-story rowhomes make this a quiet residential pocket despite being close to Mondawmin's shopping and transit hub. For voucher holders who want a walkable, bus-connected spot near the northwest corridor, it is worth watching our available homes here.",
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
    name: "Central Park Heights", zip: "21215", area: "Northwest Baltimore",
    about: [
      "Central Park Heights is a northwest Baltimore neighborhood around Park Heights Avenue and Wilern Avenue, made up mostly of brick rowhomes and duplexes, many divided into apartments.",
      "Sinai Hospital and Pimlico Race Course are close by, and Park Heights Avenue and Reisterstown Road carry frequent MTA bus service toward Mondawmin and downtown.",
    ],
    getAround: ["MTA buses on Park Heights Avenue and Reisterstown Road", "Rogers Avenue Metro Subway station", "Access to the Jones Falls Expressway and I-695"],
    landmarks: ["Pimlico Race Course", "Sinai Hospital", "Cylburn Arboretum"],
  },
  {
    name: "Wildwood", zip: "21229", area: "West Baltimore",
    about: [
      "Wildwood is a west Baltimore neighborhood around Wildwood Parkway near Edmondson Avenue, made up mostly of brick rowhomes and duplexes on tree-lined residential streets.",
      "Edmondson Village shopping is close by, and Edmondson Avenue carries MTA bus service toward downtown, with quick access to I-70 and the park-and-ride.",
    ],
    getAround: ["MTA buses on Edmondson Avenue", "I-70 park-and-ride", "Access to I-695 and the Baltimore Beltway"],
    landmarks: ["Edmondson Village", "Gwynns Falls / Leakin Park", "Westside Shopping Center"],
  },
  {
    name: "Dolfield", zip: "21215", area: "Northwest Baltimore",
    about: [
      "Dolfield is a northwest Baltimore neighborhood along Dolfield Avenue near West Cold Spring Lane, with rowhomes, duplexes and small apartment buildings.",
      "The West Coldspring Metro Subway station is close by, with trains to Mondawmin and downtown, and Cold Spring Lane, Liberty Heights Avenue and Reisterstown Road carry bus service and shopping.",
    ],
    getAround: ["West Coldspring Metro Subway station", "MTA buses on W Cold Spring Ln and Liberty Heights Ave", "Access to the Jones Falls Expressway via Cold Spring Lane"],
    landmarks: ["Sinai Hospital", "Hanlon Park / Lake Ashburton", "Mondawmin Mall"],
  },
  {
    name: "Original Northwood", zip: "21218", area: "Northeast Baltimore",
    about: [
      "Original Northwood is a northeast Baltimore neighborhood next to Morgan State University, with brick colonials, duplexes and rowhome apartments on curving, tree-lined streets.",
      "Hillen Road, Loch Raven Boulevard and The Alameda carry bus service across north Baltimore, and the shops along The Alameda and Northwood Commons are nearby.",
      "The university setting and quiet residential streets make Original Northwood a steady, established part of northeast Baltimore. For voucher holders who want a calmer, tree-lined area with good north-south bus access, it is worth checking our available homes here as they come up.",
    ],
    getAround: ["MTA buses on Hillen Road, Loch Raven Blvd and The Alameda", "Short drive to downtown via Hillen Road", "Access to I-695 via Loch Raven Boulevard"],
    landmarks: ["Morgan State University", "Lake Montebello", "Northwood Commons shopping"],
  },
  {
    name: "Waverly", zip: "21218", area: "North-central Baltimore",
    about: [
      "Waverly is a north-central Baltimore neighborhood along Greenmount Avenue and East 33rd Street, with rowhomes, porch-front houses and small apartment buildings.",
      "It is home to the year-round Saturday farmers market on East 32nd Street, and the Johns Hopkins Homewood campus is a short trip west. Greenmount Avenue has frequent bus service to downtown.",
      "Waverly is one of north-central Baltimore's most walkable, transit-rich neighborhoods, which makes it popular with renters who want to get around without a car. Voucher-friendly homes here move quickly, so it is worth watching our available list closely if this is where you want to live.",
    ],
    getAround: ["MTA buses on Greenmount Avenue and 33rd Street", "Short trip to Penn Station and downtown", "Charles Street bus lines a few blocks west"],
    landmarks: ["32nd Street Farmers Market", "Johns Hopkins Homewood campus", "Stadium Place / YMCA"],
  },
  {
    name: "Better Waverly", zip: "21218", area: "North-central Baltimore",
    about: [
      "Better Waverly lies just east of Greenmount Avenue around East 33rd Street, mostly rowhomes on compact residential blocks.",
      "The former Memorial Stadium site, now Stadium Place with a YMCA, sits along its northern edge, and the Waverly farmers market, Greenmount Avenue shops and bus lines are within walking distance.",
      "Better Waverly's compact blocks of rowhomes, many with their own front door, appeal to renters who want a house feel close to the Waverly amenities and transit. Caprate lists voucher-friendly rowhomes here when they are available, including homes with finished basements.",
    ],
    getAround: ["MTA buses on Greenmount Avenue and 33rd Street", "Short trip to Penn Station", "Access to the Jones Falls Expressway"],
    landmarks: ["Stadium Place / YMCA", "32nd Street Farmers Market", "Lake Montebello"],
  },
  {
    name: "Pen Lucy", zip: "21212", area: "North Baltimore",
    about: [
      "Pen Lucy is a north Baltimore neighborhood north of Waverly, between Greenmount Avenue and the York Road corridor, with rowhomes, porch-front houses and small apartment buildings.",
      "Loyola University Maryland and the Johns Hopkins Homewood campus are nearby, and York Road and Greenmount Avenue carry frequent bus service north to Towson and south to downtown.",
      "Pen Lucy's location between two universities and on a strong north-south bus corridor makes it a convenient base for renters who commute toward Towson or downtown. For voucher holders, it is a quieter north Baltimore option worth watching on our available homes list.",
    ],
    getAround: ["MTA buses on York Road and Greenmount Avenue", "Direct bus service to Towson and downtown", "Access to the Jones Falls Expressway"],
    landmarks: ["Loyola University Maryland", "York Road shops", "Johns Hopkins Homewood campus"],
  },
];
