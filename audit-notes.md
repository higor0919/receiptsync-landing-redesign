# ReceiptSync live-site conversion audit notes

## Initial observations — 2026-07-21

- The live home page loads with a clear visual hero: an AI-powered receipt scanner, the headline “Snap. Extract. Organize. Automatically.”, a “Start my free trial” CTA, app-store links, a phone product visual, and the four operating claims (<30 sec setup, 99%+ AI accuracy, 5 sec per receipt, 10hrs+ saved monthly).
- The primary navigation includes Features, How it Works, Pricing, FAQ, Blog, Free Tools, a portal login, and Sign Up. An early-access promotion offers $39.99/year for the first 100 users.
- Above the first content section, the headline “Join 1,000+ members who trust ReceiptSync” is visible. The marquee logos were not visible in the captured live-site viewport and require follow-up as a proof/credibility concern.
- The extracted page copy reveals the following core value claim: scan a receipt, AI extracts structured fields, and the data syncs to Google Sheets. It also promotes multilingual extraction, recurring-expense detection, budgets, and reports.

## Workflow-section observations

- The first post-hero section uses alternating visual-and-copy panels for One-Tap Scanning, AI-Powered Extraction, Real-Time Google Sheets Sync, and Simple Onboarding. Once loaded, the visual hierarchy and product imagery are polished and understandable.
- The workflow descriptions foreground features rather than customer-specific outcomes. “One-Tap Scanning” and “AI-Powered Extraction” are clear, but the page does not immediately demonstrate a before-and-after financial or administrative payoff for a defined buyer.
- The early section does not repeat a context-specific CTA, proof point, or risk reducer after presenting the first workflow evidence. This creates a missed moment for conversion once interest has been established.

## Integration and onboarding observations

- The Google Sheets visual makes the core product mechanism concrete, which is a major positive because it differentiates ReceiptSync from generic receipt-scanning apps.
- The copy explains the mechanics clearly, but the page still lacks the strongest operational proof at the point of claim: an authentic sheet/template preview, a short demonstration, or an example of a reconciled workflow for one specific customer segment.
- “Set up in 2 minutes” and “save hours every month” are useful risk reducers, but they sit well below the initial CTA rather than reinforcing the signup decision immediately before or after it.

## Pricing and signup-transition observations

- The pricing section is visually clean and uses a clear monthly-versus-annual comparison. The annual plan has a strong price anchor: $39.99/year versus $9.99/month, plus a “Best Value” cue and a capped early-access offer.
- The page sends mixed action signals. It uses “Start my free trial,” “Download now,” “Claim your spot,” and app-store CTAs around the same decision. The annual card’s CTA still uses the monthly trial language, weakening plan-message continuity.
- The price section claims an early-access deal for the first 100 users but does not visibly show verifiable remaining availability, a deadline, or a transparent next step after signup. Avoid unverified urgency.
- The signup URL `https://app.receiptsync.net/signup?plan=monthly` opened as a blank screen in the audit browser. This may be a loading or rendering problem in this environment, but it is sufficiently important to test in real visitor browsers before sending additional traffic to the page.

## Signup-flow observations

- After loading, the signup screen is visually polished and contains a short email/password form, a 14-day trial promise, and an explicit “you’ll be redirected to checkout after sign-up” message. The annual route correctly displays “Pro Annual — $39.99/yr,” so the annual price parameter survives the click path.
- The left-side signup claim, “The average ReceiptSync user saves $600 in their first month,” is an unusually strong financial-outcome statement. It should be substantiated with a credible methodology or replaced with a more defensible operational benefit, otherwise it can create trust and compliance risk.
- The path is low-friction in form-field count, but it does not show what happens in the first session after account creation, what the trial includes, whether a card is required before the trial, or why the user should choose ReceiptSync over a native scanner, spreadsheet, or expense app.

## FAQ and launch-status observations

- The FAQ explicitly says ReceiptSync is “currently in the final stages of development” and asks visitors to “join the waitlist,” while the rest of the site promotes a live app-store download, a 14-day trial, paid plans, a portal login, and live product visuals. This is a major message conflict that can directly reduce conversion trust.
- The FAQ list does cover high-value objections: AI accuracy, Google Sheets integration, receipt images, business use, offline use, language support, and security. However, these answers are buried late in the journey and have not yet been used as proactive trust signals near the CTA.

## Accuracy and security FAQ observations

- The accuracy answer says the AI has been trained on millions of receipts and achieves 99%+ accuracy for standard receipt fields. It also explains that data can be edited before syncing. This caveat is helpful, but the “millions” and “99%+” claims should be evidence-backed and consistently qualified across the site.
- The security answer states that data is protected with bank-level AES-256 encryption at rest and in transit, Google Sheets uses secure OAuth 2.0, the product never stores a Google password, and receipt images are encrypted in the cloud. These are strong trust signals, but they appear late in the FAQ instead of near the signup action or Google connection moment.

## Competitive and public-proof research

- Direct-market competitors position around the same basic job: receipt capture, data extraction, and a Google Sheets output. Their pages make the commercial difference explicit by showing an interactive workflow, a precise comparison against manual spreadsheet work, trial details, and first-party social proof.
- ExpenseBot emphasizes several capture paths (photo, Gmail, PDFs, screenshots, and email forwarding), direct ownership in the customer’s Google Drive, a 60-day free trial with no credit card, a 30-second demo, quantified time savings, and named user testimonials. These claims require independent verification before being treated as market facts, but the page illustrates the proof architecture ReceiptSync lacks.
- ReceiptToSheet takes a sharply narrower position: “Photo → row in your sheet in under 10 seconds. No typing.” It explicitly says who it is built for, makes review-before-save central to trust, sets a no-install promise, and explains its free-plan entitlement plainly. The contrast shows that a focused promise is often clearer than a broad feature inventory.
- Google Workspace’s Expensify listing presents visible platform credibility: 810K+ listed reviews, a simple mobile receipt-transcription explanation, and third-party economic-impact claims. ReceiptSync should not attempt to imitate the scale; it should use authentic small-scale proof instead.
- ReceiptSync’s Apple App Store page displays 1 rating at 5.0, while its Google Play listing displays 500+ downloads and publicly states that data is encrypted in transit, is not shared with third parties, and may be deleted at the user’s request. The landing page currently omits these verifiable assets while making broader unsubstantiated social-proof and performance claims.
