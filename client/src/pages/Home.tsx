/**
 * OUTCOME-LED PROOF RIBBON — ReceiptSync landing page.
 * The page leads with the Google Sheets result, then earns the trial with visible workflow proof.
 * Deep violet carries confidence; Receipt Pink is reserved for the one decisive action.
 */
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  FileCheck2,
  FileSpreadsheet,
  Globe2,
  LockKeyhole,
  Menu,
  ReceiptText,
  ScanLine,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Upload,
  X,
  Zap,
} from "lucide-react";

const SIGNUP_URL = "https://app.receiptsync.net/signup";
const LOGIN_URL = "https://app.receiptsync.net/";
const APP_STORE_URL =
  "https://apps.apple.com/us/app/receiptsync-receipt-tracker/id6756007251";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.app.receipt_sync";

const heroImage =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028688699/TuArDKBZHYKnLzHm.webp";
const workflowImage =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028688699/uKJlKbehUuElWrbl.png";
const portalImage =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028688699/hATjwAHGiVANcgkv.png";
const logoImage =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028688699/VIQJqCldEdQkphLD.png";
const cameraImage =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028688699/LddfARtiTSghtQgD.png";

const proofRibbonImage = "/manus-storage/receiptsync-proof-ribbon_72b5eb35.png";
const securityOrbImage = "/manus-storage/receiptsync-security-orb_ce190772.png";

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="brand-lockup" aria-label="ReceiptSync home">
      <img src={logoImage} alt="" className="brand-mark" />
      <span className={light ? "text-white" : "text-ink"}>ReceiptSync</span>
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

function FlowMarker({ number, label }: { number: string; label: string }) {
  return (
    <div className="flow-marker" aria-hidden="true">
      <span>{number}</span>
      <i />
      <em>{label}</em>
    </div>
  );
}

function StoreButton({ kind }: { kind: "apple" | "google" }) {
  const isApple = kind === "apple";
  return (
    <a
      className="store-button"
      href={isApple ? APP_STORE_URL : PLAY_STORE_URL}
      target="_blank"
      rel="noreferrer"
    >
      {isApple ? <Smartphone size={19} /> : <Globe2 size={19} />}
      <span>
        <small>{isApple ? "Download on the" : "Get it on"}</small>
        <strong>{isApple ? "App Store" : "Google Play"}</strong>
      </span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-white text-ink">
      <header className="site-header">
        <div className="container nav-shell">
          <Logo light />
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#proof">How it works</a>
            <a href="#benefits">Benefits</a>
            <a href="#security">Security</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="nav-actions">
            <a className="login-link" href={LOGIN_URL}>Log in</a>
            <a className="button button-pink button-small" href={`${SIGNUP_URL}?plan=monthly`}>Start trial</a>
          </div>
          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a href="#proof" onClick={() => setMenuOpen(false)}>How it works</a>
            <a href="#benefits" onClick={() => setMenuOpen(false)}>Benefits</a>
            <a href="#security" onClick={() => setMenuOpen(false)}>Security</a>
            <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
            <a href={`${SIGNUP_URL}?plan=monthly`} className="button button-pink">Start 14-day free trial</a>
          </nav>
        )}
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <div className="hero-brand-band">
                <img src={logoImage} alt="" />
                <strong>ReceiptSync</strong>
                <i />
                <span>Receipt-to-Sheets workflow</span>
              </div>
              <div className="hero-badge"><Sparkles size={16} /> Built for freelancers &amp; owner-operators</div>
              <h1>
                Turn every receipt into a <em>clean Google Sheet.</em>
              </h1>
              <p>Snap or upload a receipt, review the extracted details, and sync a ready-to-use expense row without manual entry.</p>
              <div className="hero-primary-actions">
                <a className="button button-pink button-large" href={`${SIGNUP_URL}?plan=monthly`}>
                  Start 14-day free trial <ArrowRight size={18} />
                </a>
                <a className="text-action text-action-light" href="#proof">See the workflow <ArrowRight size={17} /></a>
              </div>
              <p className="hero-assurance"><CheckCircle2 size={16} /> No credit card required <span>·</span> Review details before you sync</p>
              <div className="store-availability">
                <span>Also available on</span>
                <div className="store-row">
                  <StoreButton kind="apple" />
                  <StoreButton kind="google" />
                </div>
              </div>
            </div>

            <div className="hero-art reveal reveal-delay-1" aria-label="ReceiptSync receipt capture and Google Sheets workflow">
              <div className="hero-proof-system">
                <article className="hero-receipt-input">
                  <div className="proof-panel-meta"><span>01</span> Receipt input</div>
                  <img src={heroImage} alt="ReceiptSync mobile receipt scanner" />
                  <div className="proof-panel-footer"><ScanLine size={15} /> Captured on mobile</div>
                </article>
                <article className="hero-extraction-ledger">
                  <div className="proof-panel-meta"><span>02</span> Review ready</div>
                  <div className="extraction-title"><FileCheck2 size={16} /> Extracted fields</div>
                  <div className="extraction-field"><span>Merchant</span><strong>Harvest Market</strong></div>
                  <div className="extraction-field"><span>Date</span><strong>Mar 21, 2026</strong></div>
                  <div className="extraction-field"><span>Total</span><strong>$42.80</strong></div>
                  <div className="extraction-field"><span>Category</span><strong>Office supplies</strong></div>
                  <div className="review-ready"><CheckCircle2 size={14} /> Ready for your review</div>
                </article>
                <article className="hero-sheet-output">
                  <div className="proof-panel-meta"><span>03</span> Google Sheets row</div>
                  <div className="sheet-mini-grid">
                    <span>Merchant</span><span>Date</span><span>Total</span><span>Category</span>
                    <strong>Harvest Market</strong><strong>03/21</strong><strong>$42.80</strong><strong>Office supplies</strong>
                  </div>
                  <div className="sheet-status"><FileSpreadsheet size={15} /> Synced to your Sheet</div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-strip" aria-label="ReceiptSync workflow assurances">
          <div className="container stats-grid">
            {[
              ["< 2 min", "Set up your workflow"],
              ["1 receipt", "→ 1 organized record"],
              ["Review", "before each sync"],
              ["Google Sheets", "kept up to date"],
            ].map(([value, label]) => (
              <div className="stat" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="proof" className="proof-ribbon-section">
          <div className="container proof-ribbon">
            <div className="proof-ribbon-art reveal">
              <img className="proof-schematic-bg" src={proofRibbonImage} alt="" />
              <div className="proof-evidence-board" aria-label="Receipt to reviewed Google Sheets row example">
                <div className="evidence-receipt">
                  <div className="evidence-label">Receipt input</div>
                  <div className="receipt-rule receipt-rule-wide" />
                  <div className="receipt-rule" /><div className="receipt-rule" /><div className="receipt-rule receipt-rule-short" />
                  <strong>$42.80</strong>
                  <div className="receipt-rule receipt-rule-wide" />
                </div>
                <div className="evidence-arrow"><ArrowRight /></div>
                <div className="evidence-review">
                  <div className="evidence-label"><CheckCircle2 size={14} /> Review fields</div>
                  <span>Merchant <b>Harvest Market</b></span>
                  <span>Date <b>Mar 21, 2026</b></span>
                  <span>Total <b>$42.80</b></span>
                  <span>Category <b>Office supplies</b></span>
                </div>
                <div className="evidence-arrow evidence-arrow-last"><ArrowRight /></div>
                <div className="evidence-sheet">
                  <div className="evidence-label"><FileSpreadsheet size={14} /> Your Google Sheet</div>
                  <div className="evidence-sheet-grid"><span>Merchant</span><span>Date</span><span>Total</span><span>Category</span><b>Harvest Market</b><b>03/21</b><b>$42.80</b><b>Office supplies</b></div>
                </div>
              </div>
              <div className="proof-art-label proof-art-label-top"><Sparkles size={15} /> Structured details</div>
              <div className="proof-art-label proof-art-label-bottom"><CheckCircle2 size={15} /> Ready for your Sheet</div>
            </div>
            <div className="proof-ribbon-copy">
              <Eyebrow>See the result before you start</Eyebrow>
              <h2>A receipt becomes a record you can actually use.</h2>
              <p>ReceiptSync takes the receipt off your desk, turns it into clean expense data, and sends it to the spreadsheet you already manage.</p>
              <ol className="proof-steps">
                <li><span>01</span><ScanLine /><div><strong>Capture</strong><small>Scan from your phone or upload from the web.</small></div></li>
                <li><span>02</span><FileCheck2 /><div><strong>Review</strong><small>Check the extracted merchant, date, total, tax, and category.</small></div></li>
                <li><span>03</span><FileSpreadsheet /><div><strong>Sync</strong><small>Send a verified row straight into your chosen Google Sheet.</small></div></li>
              </ol>
              <div className="proof-ribbon-actions">
                <a className="button button-pink" href={`${SIGNUP_URL}?plan=monthly`}>Start 14-day free trial <ArrowRight size={17} /></a>
                <span><LockKeyhole size={15} /> You choose the Google account and Sheet.</span>
              </div>
            </div>
          </div>
        </section>

        <div className="conversion-story">
          <div className="conversion-spine" aria-hidden="true" />
        <section id="benefits" className="section section-outcomes">
          <div className="container">
            <FlowMarker number="01" label="Capture better records" />
            <div className="section-heading section-heading-wide">
              <Eyebrow>Less admin. Better records.</Eyebrow>
              <h2>Turn a stack of receipts into an expense workflow you trust.</h2>
              <p>Every part of ReceiptSync exists to make the information behind a receipt easier to find, verify, share, and use again.</p>
            </div>
            <div className="outcome-grid">
              {[
                {
                  icon: Zap,
                  title: "Stop retyping expenses",
                  copy: "Move from receipt capture to structured fields without the repetitive spreadsheet work.",
                  color: "violet",
                },
                {
                  icon: FileCheck2,
                  title: "Keep the evidence close",
                  copy: "Store the receipt beside an organized record so it is easy to find when you need to review it.",
                  color: "pink",
                },
                {
                  icon: FileSpreadsheet,
                  title: "Keep your Sheet usable",
                  copy: "Bring receipt data into the flexible spreadsheet workflow you already understand.",
                  color: "blue",
                },
              ].map((item) => (
                <article className={`outcome-card outcome-${item.color}`} key={item.title}>
                  <div className="icon-tile"><item.icon /></div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section" aria-labelledby="process-title">
          <div className="container">
            <FlowMarker number="02" label="Review with clarity" />
            <div className="process-showcase">
              <div className="process-copy">
                <Eyebrow>One simple sequence</Eyebrow>
                <h2 id="process-title">Clear enough to trust. Fast enough to use every day.</h2>
                <p>Start with the receipt, not a complicated expense system. Review the important fields once, then let your Sheet carry the record forward.</p>
                <div className="process-points">
                  <div><Upload /><span><strong>Capture from the device you have</strong><small>Scan on mobile or add receipts from the web portal.</small></span></div>
                  <div><CheckCircle2 /><span><strong>Keep the final check in your hands</strong><small>Review the data before it becomes part of your workflow.</small></span></div>
                  <div><FileSpreadsheet /><span><strong>Stay in the spreadsheet you own</strong><small>Keep your expense data where you already work.</small></span></div>
                </div>
                <a className="text-action" href={`${SIGNUP_URL}?plan=monthly`}>Start your free trial <ArrowRight size={17} /></a>
              </div>
              <div className="process-art">
                <img src={workflowImage} alt="ReceiptSync capture, extraction, and sync workflow" />
                <div className="process-caption"><ShieldCheck size={17} /> Reviewable records, not black-box automation</div>
              </div>
            </div>
          </div>
        </section>

        <section id="portal" className="section portal-wrap">
          <div className="container">
            <FlowMarker number="03" label="Sync where you work" />
            <div className="portal-panel">
              <div className="portal-copy">
                <Eyebrow>Mobile capture. Web control.</Eyebrow>
                <h2>Scan in the moment. Review everything when you are ready.</h2>
                <p>Use the mobile app to capture receipts quickly, then use the web portal to review extracted records, track expenses, and export reports.</p>
                <ul className="check-list">
                  {[
                    "Mobile capture and web uploads",
                    "Your Google Sheets workflow stays connected",
                    "Receipt records ready for review and export",
                    "Available on iOS and Android",
                  ].map((item) => <li key={item}><Check /> {item}</li>)}
                </ul>
                <a className="button button-pink button-large" href={`${SIGNUP_URL}?plan=monthly`}>Start 14-day free trial <ArrowRight size={18} /></a>
                <p className="microcopy">No credit card required to start.</p>
              </div>
              <div className="portal-art">
                <img src={portalImage} alt="ReceiptSync web portal and mobile app working together" />
                <div className="sync-status"><CheckCircle2 /> Google Sheet connected</div>
                <div className="verified-status"><FileCheck2 /> Details ready to review</div>
              </div>
            </div>
          </div>
        </section>

        <section id="security" className="section trust-section">
          <div className="container">
            <FlowMarker number="04" label="Protect the handoff" />
            <div className="trust-layout">
              <div className="trust-heading">
                <Eyebrow>Private by design</Eyebrow>
                <h2>Your financial data stays in your control.</h2>
                <p>Security and review are not a footer detail. They are part of the workflow before you connect a Sheet and before you send a record.</p>
                <a className="text-action" href="https://receiptsync.net/privacy" target="_blank" rel="noreferrer">Read the privacy approach <ArrowRight size={17} /></a>
              </div>
              <div className="trust-content">
                <div className="trust-grid">
                  {[
                    [LockKeyhole, "Protected connection", "Connect using secure account authorization rather than sharing a Google password."],
                    [FileSpreadsheet, "Your Sheet, your choice", "Choose the spreadsheet that ReceiptSync keeps updated."],
                    [FileCheck2, "Review before sync", "Confirm the important details before they become part of your records."],
                    [ShieldCheck, "Manage records on your terms", "Keep receipt information organized and remove records when you no longer need them."],
                  ].map(([Icon, title, text]) => {
                    const TrustIcon = Icon as typeof LockKeyhole;
                    return (
                      <article className="trust-card" key={title as string}>
                        <TrustIcon />
                        <h3>{title as string}</h3>
                        <p>{text as string}</p>
                      </article>
                    );
                  })}
                </div>
                <div className="trust-orb" aria-hidden="true"><img src={securityOrbImage} alt="" /></div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="section pricing-section">
          <div className="container">
            <FlowMarker number="05" label="Choose your plan" />
            <div className="pricing-layout">
              <div className="pricing-intro">
                <Eyebrow>Simple, clear pricing</Eyebrow>
                <h2>Try the workflow first. Choose the plan that fits after.</h2>
                <p>Start with a 14-day trial, see a receipt land in your Sheet, and pick the cadence that works for you.</p>
                <div className="pricing-proof"><CheckCircle2 /> Web, iOS, Android, and Google Sheets sync included</div>
              </div>
              <div className="pricing-cards">
                <article className="price-card">
                  <p className="plan-label">Monthly</p>
                  <div className="price"><strong>$9.99</strong><span>/ month</span></div>
                  <p>Flexible access to the complete ReceiptSync workflow.</p>
                  <ul>
                    {["Unlimited receipt scanning", "Web, iOS and Android", "Google Sheets sync", "Reports and budgeting tools"].map((item) => <li key={item}><Check /> {item}</li>)}
                  </ul>
                  <a className="button button-outline" href={`${SIGNUP_URL}?plan=monthly`}>Start 14-day trial</a>
                </article>
                <article className="price-card price-card-featured">
                  <div className="value-badge">Best value</div>
                  <p className="plan-label">Annual</p>
                  <div className="price"><strong>$39.99</strong><span>/ year</span></div>
                  <p className="price-compare">A full year of the same complete workflow.</p>
                  <ul>
                    {["Unlimited receipt scanning", "Web, iOS and Android", "Google Sheets sync", "Reports and budgeting tools"].map((item) => <li key={item}><Check /> {item}</li>)}
                  </ul>
                  <a className="button button-pink" href={`${SIGNUP_URL}?plan=annual`}>Start annual trial <ArrowRight size={17} /></a>
                </article>
              </div>
              <p className="pricing-footnote">14-day free trial · No credit card required to start</p>
            </div>
          </div>
        </section>

        <section id="faq" className="section faq-section">
          <div className="container">
            <FlowMarker number="06" label="Start with confidence" />
            <div className="faq-layout">
              <div className="faq-intro">
                <Eyebrow>Questions before you sync?</Eyebrow>
                <h2>Clear answers, before you start the trial.</h2>
                <p>The goal is simple: let you see exactly how the workflow fits into your existing expense process.</p>
              </div>
              <Accordion type="single" collapsible className="faq-list">
                <AccordionItem value="trial">
                  <AccordionTrigger>What happens when I start the trial?</AccordionTrigger>
                  <AccordionContent>Create your account, connect the Google account and Sheet you want to use, then begin scanning and reviewing receipts in your own workflow.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="review">
                  <AccordionTrigger>Can I review a receipt before it syncs?</AccordionTrigger>
                  <AccordionContent>Yes. ReceiptSync is designed so you can check the extracted details before a receipt becomes part of your organized expense record.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="sync">
                  <AccordionTrigger>How does Google Sheets sync work?</AccordionTrigger>
                  <AccordionContent>Connect your Google account, choose a Sheet, and ReceiptSync adds organized receipt details as you scan or upload.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="images">
                  <AccordionTrigger>What happens to my receipt images?</AccordionTrigger>
                  <AccordionContent>Your receipt images stay associated with their records so they remain searchable, and you can remove records when you choose.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="devices">
                  <AccordionTrigger>Can I work from more than one device?</AccordionTrigger>
                  <AccordionContent>Yes. Capture receipts from mobile and use the web portal when you want to review, upload, organize, or export from a larger screen.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
        </div>

        <section className="final-cta-section">
          <div className="container">
            <div className="final-cta">
              <div className="final-cta-icon"><img src={cameraImage} alt="" /></div>
              <div>
                <Eyebrow>Ready when your next receipt arrives</Eyebrow>
                <h2>Your next receipt can be your first synced row.</h2>
                <p>Start the trial, test the workflow with your own receipt, and decide from a real result.</p>
              </div>
              <div className="final-cta-actions">
                <a className="button button-pink button-large" href={`${SIGNUP_URL}?plan=monthly`}>Start 14-day free trial <ArrowRight size={18} /></a>
                <span><CheckCircle2 size={15} /> No credit card required</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Logo light />
            <p>Receipt to spreadsheet—without the admin.</p>
            <span>© 2026 ReceiptSync</span>
          </div>
          {[
            ["Product", ["How it works", "Web portal", "Pricing"]],
            ["Resources", ["Blog", "Free tools", "Help center"]],
            ["Company", ["About", "Contact", "Enterprise"]],
            ["Legal", ["Privacy policy", "Terms of service", "Cookie policy"]],
          ].map(([heading, links]) => (
            <div className="footer-column" key={heading as string}>
              <strong>{heading as string}</strong>
              {(links as string[]).map((link) => <a href="#top" key={link}>{link}</a>)}
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}
