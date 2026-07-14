/**
 * PRECISION FLOW — Receipt Sync landing page.
 * Preserve the confident purple hero, then guide visitors through a calm receipt-to-data narrative.
 * Pink is reserved for conversion; lavender frames product proof; web signup is the primary path.
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
  BarChart3,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileCheck2,
  FileSpreadsheet,
  Globe2,
  Home as HomeIcon,
  LockKeyhole,
  Menu,
  ReceiptText,
  ScanLine,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Trash2,
  Upload,
  Users,
  X,
  Zap,
} from "lucide-react";

const SIGNUP_URL = "https://app.receiptsync.net/signup";
const LOGIN_URL = "https://app.receiptsync.net/";
const APP_STORE_URL =
  "https://apps.apple.com/us/app/receiptsync-receipt-tracker/id6756007251";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.app.receipt_sync";

const workflowImage =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028688699/uKJlKbehUuElWrbl.png";
const heroImage =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028688699/TuArDKBZHYKnLzHm.webp";
const portalImage =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028688699/hATjwAHGiVANcgkv.png";
const logoImage =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028688699/VIQJqCldEdQkphLD.png";
const receiptsImage =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028688699/PzXZGkDuoglEWHOE.png";
const sheetsImage =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028688699/CXNctAoDNSZzbFCe.png";
const cameraImage =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028688699/LddfARtiTSghtQgD.png";

const audiences = {
  freelancers: {
    label: "Freelancers",
    icon: BriefcaseBusiness,
    title: "Never lose another business deduction",
    description:
      "Turn every client lunch, software renewal, and travel receipt into a clean, searchable record.",
    bullets: [
      "Separate business expenses automatically",
      "Keep receipt evidence searchable",
      "Share a clean Sheet with your accountant",
    ],
    visual: receiptsImage,
    visualLabel: "Receipt evidence linked",
  },
  businesses: {
    label: "Small businesses",
    icon: Users,
    title: "Give your team one expense workflow",
    description:
      "Collect receipts consistently and keep your records organized without heavyweight expense software.",
    bullets: [
      "Standardize expense capture",
      "Review records from the web portal",
      "Export clean reports when needed",
    ],
    visual: portalImage,
    visualLabel: "Team records reviewed",
  },
  households: {
    label: "Households",
    icon: HomeIcon,
    title: "See the full story behind your spending",
    description:
      "Keep receipts, budgets, and recurring expenses connected in one easy-to-understand view.",
    bullets: [
      "Track everyday purchases",
      "Spot recurring expenses",
      "Build clearer monthly habits",
    ],
    visual: sheetsImage,
    visualLabel: "Spending sheet updated",
  },
} as const;

type AudienceKey = keyof typeof audiences;

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="brand-lockup" aria-label="Receipt Sync home">
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
      {isApple ? <Smartphone size={20} /> : <Globe2 size={20} />}
      <span>
        <small>{isApple ? "Download on the" : "Get it on"}</small>
        <strong>{isApple ? "App Store" : "Google Play"}</strong>
      </span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [audience, setAudience] = useState<AudienceKey>("freelancers");
  const activeAudience = audiences[audience];

  return (
    <div id="top" className="min-h-screen bg-white text-ink">
      <header className="site-header">
        <div className="container nav-shell">
          <Logo light />
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#workflow">How it works</a>
            <a href="#outcomes">Benefits</a>
            <a href="#portal">Web portal</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="nav-actions">
            <a className="login-link" href={LOGIN_URL}>Log in</a>
            <a className="button button-pink button-small" href={SIGNUP_URL}>Sign up</a>
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
            <a href="#workflow" onClick={() => setMenuOpen(false)}>How it works</a>
            <a href="#outcomes" onClick={() => setMenuOpen(false)}>Benefits</a>
            <a href="#portal" onClick={() => setMenuOpen(false)}>Web portal</a>
            <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
            <a href={SIGNUP_URL} className="button button-pink">Start free</a>
          </nav>
        )}
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <div className="hero-badge"><Sparkles size={16} /> AI-powered receipt scanner</div>
              <h1>
                Snap. <em>Extract.</em><br />
                Organize.<br />
                <em>Automatically.</em>
              </h1>
              <p>From photo to spreadsheet in seconds.</p>
              <div className="hero-cta-row">
                <a className="button button-pink button-large" href={`${SIGNUP_URL}?plan=monthly`}>
                  Start my free trial <ArrowRight size={18} />
                </a>
                <span className="trial-note"><CheckCircle2 size={16} /> No credit card required</span>
              </div>
              <div className="store-row">
                <StoreButton kind="apple" />
                <StoreButton kind="google" />
              </div>
            </div>
            <div className="hero-art reveal reveal-delay-1">
              <div className="hero-image-frame">
                <img src={heroImage} alt="Receipt Sync mobile receipt scanner" />
              </div>
              <div className="floating-chip chip-one"><Zap size={15} /> 5-second extraction</div>
              <div className="floating-chip chip-two"><FileSpreadsheet size={15} /> Sheets synced</div>
            </div>
          </div>
        </section>

        <section className="stats-strip" aria-label="Product performance">
          <div className="container stats-grid">
            {[
              ["<30 sec", "Setup time"],
              ["99%+", "AI accuracy"],
              ["5 sec", "Per receipt"],
              ["10 hrs+", "Saved monthly"],
            ].map(([value, label]) => (
              <div className="stat" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="trust-band" aria-labelledby="trust-band-title">
          <div className="container trust-band-shell">
            <div className="trust-band-intro">
              <div className="trust-band-count"><Users size={22} /> 1,000+</div>
              <h2 id="trust-band-title">Trusted by people choosing less receipt admin.</h2>
              <p>A growing community is turning receipt photos into organized, usable expense data.</p>
            </div>
            <div className="trust-signal-grid" aria-label="Receipt Sync trust signals">
              <a className="trust-signal" href={APP_STORE_URL} target="_blank" rel="noreferrer">
                <span className="trust-signal-icon"><Smartphone /></span>
                <span><small>Available on the</small><strong>App Store</strong></span>
                <ChevronRight aria-hidden="true" />
              </a>
              <a className="trust-signal" href={PLAY_STORE_URL} target="_blank" rel="noreferrer">
                <span className="trust-signal-icon"><Globe2 /></span>
                <span><small>Available on</small><strong>Google Play</strong></span>
                <ChevronRight aria-hidden="true" />
              </a>
              <div className="trust-signal">
                <span className="trust-signal-icon"><FileSpreadsheet /></span>
                <span><small>Works directly with</small><strong>Google Sheets</strong></span>
                <CheckCircle2 aria-hidden="true" />
              </div>
              <a className="trust-signal" href={`${PLAY_STORE_URL}&hl=en_US`} target="_blank" rel="noreferrer">
                <span className="trust-signal-icon"><ShieldCheck /></span>
                <span><small>Google Play data safety</small><strong>No data shared</strong><em>Developer-declared</em></span>
                <ChevronRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section id="workflow" className="section section-workflow">
          <div className="container">
            <FlowMarker number="01" label="Capture → structure" />
            <div className="section-heading section-heading-wide">
              <Eyebrow>Receipts, organized automatically</Eyebrow>
              <h2>From receipt to spreadsheet—without the admin.</h2>
              <p>Capture a receipt once. ReceiptSync extracts the details, organizes the expense, and keeps your Google Sheet and web portal up to date.</p>
            </div>

            <div className="workflow-stage">
              <div className="workflow-steps">
                {[
                  ["01", "Capture", ScanLine],
                  ["02", "Extract", Sparkles],
                  ["03", "Sync", FileSpreadsheet],
                ].map(([number, label, Icon]) => {
                  const StepIcon = Icon as typeof ScanLine;
                  return (
                    <div className="workflow-step" key={label as string}>
                      <span>{number as string}</span>
                      <StepIcon size={18} />
                      <strong>{label as string}</strong>
                    </div>
                  );
                })}
              </div>
              <img src={workflowImage} alt="Receipt captured on a phone, extracted by AI, and synced to Receipt Sync and Google Sheets" />
              <div className="workflow-captions">
                <p>Scan on mobile or upload on web</p>
                <p>AI verifies every key detail</p>
                <p>Updates instantly across your workflow</p>
              </div>
            </div>

            <div className="proof-bar">
              <div><ShieldCheck /> <span><strong>99%+</strong> extraction accuracy</span></div>
              <div><Zap /> <span><strong>5 seconds</strong> per receipt</span></div>
              <div><FileSpreadsheet /> <span><strong>Live</strong> Google Sheets sync</span></div>
            </div>
          </div>
        </section>

        <section id="outcomes" className="section section-outcomes">
          <div className="container">
            <FlowMarker number="02" label="Structure → outcomes" />
            <div className="section-heading">
              <Eyebrow>Built for real-world expenses</Eyebrow>
              <h2>Less receipt work. More time for what matters.</h2>
            </div>
            <div className="outcome-grid">
              {[
                {
                  icon: FileCheck2,
                  title: "Tax-ready records",
                  copy: "Keep searchable receipts and categorized expenses ready for deductions, reimbursements, and year-end reporting.",
                  color: "violet",
                },
                {
                  icon: Clock3,
                  title: "Hours of admin removed",
                  copy: "Replace manual spreadsheet entry with an automated capture-to-Sheets workflow.",
                  color: "pink",
                },
                {
                  icon: BarChart3,
                  title: "Clearer spending",
                  copy: "See where money is going through the web portal, budgets, recurring expenses, and reports.",
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

        <section id="portal" className="section portal-wrap">
          <div className="container">
            <FlowMarker number="03" label="Review → sync" />
            <div className="portal-panel">
              <div className="portal-copy">
                <Eyebrow>Works where you do</Eyebrow>
                <h2>Scan on mobile. Manage everything on the web.</h2>
                <p>Upload receipts from your desktop, review extracted data, track expenses, and export reports from one organized portal.</p>
                <ul className="check-list">
                  {[
                    "Mobile capture and web uploads",
                    "Live Google Sheets sync",
                    "PDF and Excel reports",
                    "iOS and Android included",
                  ].map((item) => <li key={item}><Check /> {item}</li>)}
                </ul>
                <a className="button button-pink button-large" href={SIGNUP_URL}>Start free on the web <ArrowRight size={18} /></a>
                <p className="microcopy">14-day free trial · No credit card required</p>
              </div>
              <div className="portal-art">
                <img src={portalImage} alt="Receipt Sync web portal and mobile app working together" />
                <div className="sync-status"><CheckCircle2 /> Google Sheets synced</div>
                <div className="verified-status"><FileCheck2 /> 8 fields verified</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section audience-section">
          <div className="container">
            <FlowMarker number="04" label="Fit the workflow" />
            <div className="section-heading section-heading-left">
              <Eyebrow>One workflow, three ways to use it</Eyebrow>
              <h2>Built around the way you track expenses.</h2>
            </div>
            <div className="audience-tabs" role="tablist" aria-label="Choose an audience">
              {(Object.keys(audiences) as AudienceKey[]).map((key) => {
                const item = audiences[key];
                const Icon = item.icon;
                return (
                  <button
                    key={key}
                    role="tab"
                    aria-selected={audience === key}
                    className={audience === key ? "active" : ""}
                    onClick={() => setAudience(key)}
                  >
                    <Icon size={17} /> {item.label}
                  </button>
                );
              })}
            </div>
            <div className="audience-panel">
              <div className="audience-image">
                <img src={activeAudience.visual} alt={`${activeAudience.label} expense workflow inside Receipt Sync`} />
                <div className="image-note"><ReceiptText /> {activeAudience.visualLabel}</div>
                <div className="image-note image-note-secondary"><CheckCircle2 /> Verified & synced</div>
              </div>
              <div className="audience-copy" key={audience}>
                <activeAudience.icon className="audience-icon" />
                <h3>{activeAudience.title}</h3>
                <p>{activeAudience.description}</p>
                <ul className="benefit-list">
                  {activeAudience.bullets.map((bullet) => <li key={bullet}><CheckCircle2 /> {bullet}</li>)}
                </ul>
                <a href="#pricing">See how ReceiptSync fits your workflow <ChevronRight size={17} /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="section trust-section">
          <div className="container">
            <FlowMarker number="05" label="Protect every record" />
            <div className="trust-layout">
              <div className="trust-heading">
                <Eyebrow>Private by design</Eyebrow>
                <h2>Your financial data stays yours.</h2>
                <p>ReceiptSync gives you practical control over sensitive receipt and expense information.</p>
                <a href="https://receiptsync.net/privacy" target="_blank" rel="noreferrer">Learn about security and privacy <ArrowRight size={17} /></a>
              </div>
              <div className="trust-grid">
                {[
                  [LockKeyhole, "Encrypted", "In transit and at rest"],
                  [ShieldCheck, "Permission control", "You control Google access"],
                  [Trash2, "Delete when ready", "Remove receipts when you choose"],
                  [Sparkles, "Never sold", "Your data is never sold"],
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
            </div>
          </div>
        </section>

        <section id="pricing" className="section pricing-section">
          <div className="container">
            <FlowMarker number="06" label="Choose your pace" />
            <div className="pricing-layout">
              <div className="pricing-intro">
                <Eyebrow>Simple pricing</Eyebrow>
                <h2>Start free. Upgrade when ReceiptSync saves you time.</h2>
                <p>Everything you need to scan, organize, and sync receipts—without heavyweight expense-software pricing.</p>
                <div className="pricing-proof"><CheckCircle2 /> All plans include web, iOS, and Android</div>
              </div>
              <div className="pricing-cards">
                <article className="price-card">
                  <p className="plan-label">Monthly</p>
                  <div className="price"><strong>$9.99</strong><span>/ month</span></div>
                  <p>Flexible access to every core feature.</p>
                  <ul>
                    {["Unlimited receipt scanning", "Web, iOS and Android", "Google Sheets sync", "Reports and budgeting tools"].map((item) => <li key={item}><Check /> {item}</li>)}
                  </ul>
                  <a className="button button-outline" href={`${SIGNUP_URL}?plan=monthly`}>Start 14-day free trial</a>
                </article>
                <article className="price-card price-card-featured">
                  <div className="founder-badge">Founding member</div>
                  <p className="plan-label">Annual</p>
                  <div className="price"><strong>$39.99</strong><span>/ year</span></div>
                  <p className="price-compare"><s>Normally $119.88</s> · lock in the best value</p>
                  <ul>
                    {["Unlimited receipt scanning", "Web, iOS and Android", "Google Sheets sync", "Reports and budgeting tools"].map((item) => <li key={item}><Check /> {item}</li>)}
                  </ul>
                  <a className="button button-pink" href={`${SIGNUP_URL}?plan=annual`}>Claim annual offer <ArrowRight size={17} /></a>
                </article>
              </div>
              <p className="pricing-footnote">14-day free trial · No credit card required to start · Cancel anytime</p>
            </div>
          </div>
        </section>

        <section id="faq" className="section faq-section">
          <div className="container">
            <FlowMarker number="07" label="Remove uncertainty" />
            <div className="faq-layout">
              <div className="faq-intro">
                <Eyebrow>Questions before you scan?</Eyebrow>
                <h2>Clear answers, before you commit.</h2>
                <p>Start free and see the workflow with your own receipts.</p>
              </div>
              <Accordion type="single" collapsible className="faq-list">
                <AccordionItem value="sync">
                  <AccordionTrigger>How does Google Sheets sync work?</AccordionTrigger>
                  <AccordionContent>Connect your Google account, choose a Sheet, and ReceiptSync adds verified expense details as you scan or upload receipts.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="web">
                  <AccordionTrigger>Can I upload receipts from the web?</AccordionTrigger>
                  <AccordionContent>Yes. The web portal supports desktop uploads alongside mobile capture, so you can work from whichever device is convenient.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="images">
                  <AccordionTrigger>What happens to my receipt images?</AccordionTrigger>
                  <AccordionContent>Your receipt images stay associated with your records so they remain searchable, and you can remove them when you choose.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="business">
                  <AccordionTrigger>Can I use ReceiptSync for business expenses?</AccordionTrigger>
                  <AccordionContent>Yes. ReceiptSync is designed for freelancers and small businesses that need categorized records, receipt evidence, exports, and Google Sheets.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section className="final-cta-section">
          <div className="container">
            <div className="final-cta">
              <div className="final-cta-icon"><img src={cameraImage} alt="" /></div>
              <div>
                <Eyebrow>Ready when your next receipt arrives</Eyebrow>
                <h2>Stop typing out receipts.</h2>
                <p>Scan your first receipt and see it organized automatically.</p>
              </div>
              <div className="final-cta-actions">
                <a className="button button-pink button-large" href={SIGNUP_URL}>Start free on the web <ArrowRight size={18} /></a>
                <span><Smartphone size={15} /> Available on iOS and Android</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Logo light />
            <p>Snap. Extract. Organize. Automatically.</p>
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
