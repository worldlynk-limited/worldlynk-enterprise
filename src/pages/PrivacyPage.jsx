import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Lock,
  CheckCircle2,
  FileText,
  Server,
  ArrowRight,
  ExternalLink,
  Check,
  AlertTriangle
} from 'lucide-react';

const SECTIONS = [
  { id: 'designation', label: '1. Institutional Processor Designation' },
  { id: 'classification', label: '2. Data Ingest & Classification Matrix' },
  { id: 'zero_training', label: '3. Zero Model Training Guarantee' },
  { id: 'tokenization', label: '4. Cryptographic PII Tokenization' },
  { id: 'subprocessors', label: '5. Sub-Processors & Data Residency' },
  { id: 'retention', label: '6. Retention & Cryptographic Erasure' },
  { id: 'sar_rights', label: '7. Student Rights & SAR Protocol' },
  { id: 'dpo_contact', label: '8. Data Protection Officer (DPO)' }
];

export default function PrivacyPage() {
  const [activeSec, setActiveSec] = useState('designation');

  const scrollTo = (id) => {
    setActiveSec(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', backgroundColor: 'var(--wl-dark)', color: '#ffffff' }}>
      
      {/* ── HERO BANNER ─────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '32px', borderBottom: '1px solid var(--border-hairline)' }}>
        <div className="main-container">
          <div className="flex-between flex-wrap gap-md">
            <div>
              <div className="mono-label" style={{ color: 'var(--accent-orange)', marginBottom: '8px' }}>
                DATA GOVERNANCE &amp; PRIVACY POLICY // UK GDPR, DPA 2018 &amp; FERPA COMPLIANT
              </div>
              <h1 className="headline-xl" style={{ marginBottom: '12px', lineHeight: 1.15 }}>
                Enterprise Data Privacy Specification.
              </h1>
              <p className="body-lg text-secondary" style={{ maxWidth: '780px' }}>
                Version 3.1 · Effective September 2026. WorldLynk operates strictly as a Data Processor under direct institutional instructions, enforcing sovereign UK data residency and zero model training on student records.
              </p>
            </div>

            <div className="flex flex-col gap-sm" style={{ minWidth: '220px' }}>
              <div className="card-dark" style={{ padding: '16px', border: '1px solid var(--border-subtle)' }}>
                <div className="mono-label" style={{ color: 'var(--status-pass)', fontSize: '10px' }}>ICO REGISTERED</div>
                <div style={{ fontSize: '1.2rem', fontWeight: '800', marginTop: '2px' }}>ZA891402</div>
                <div className="mono-sm text-secondary" style={{ fontSize: '11px' }}>UK Data Protection Act 2018</div>
              </div>
              <Link to="/trust" className="btn-secondary btn-sm" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <span>Trust Hub Artifacts</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEGAL DUAL-COLUMN LAYOUT ────────────────────────────── */}
      <section className="section" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
        <div className="main-container">
          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '40px', alignItems: 'start' }}>
            
            {/* Sticky Sidebar Navigation */}
            <div style={{ position: 'sticky', top: '100px', backgroundColor: '#13131c', padding: '18px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
              <div className="mono-label mb-sm" style={{ color: 'var(--accent-orange)' }}>SECTION INDEX</div>
              <div className="flex flex-col gap-xs">
                {SECTIONS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    style={{
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      padding: '8px 10px',
                      borderRadius: '6px',
                      fontSize: '11.5px',
                      color: activeSec === s.id ? 'var(--accent-orange)' : 'var(--text-secondary)',
                      backgroundColor: activeSec === s.id ? 'rgba(255,107,0,0.1)' : 'transparent',
                      fontWeight: activeSec === s.id ? '700' : '500',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Legal Content Articles */}
            <div className="card-dark" style={{ padding: '36px', borderRadius: '16px', border: '1px solid var(--border-subtle)', backgroundColor: '#13131c', display: 'flex', flexDirection: 'column', gap: '32px' }}>
              
              <section id="designation">
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>SECTION 01</span>
                <h2 style={{ fontSize: '1.4rem', fontWeight: '800', margin: '4px 0 12px 0' }}>1. Institutional Processor Designation</h2>
                <p className="body-md text-secondary" style={{ lineHeight: 1.6 }}>
                  WorldLynk Inc. ("WorldLynk") processes personal data exclusively on behalf of subscribing Higher Education institutions ("Data Controllers"). Under the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018 (DPA 2018), and the United States Family Educational Rights and Privacy Act (FERPA, 34 CFR Part 99), WorldLynk qualifies as a designated School Official performing institutional services under the direct operational control of the university registrar.
                </p>
              </section>

              <section id="classification">
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>SECTION 02</span>
                <h2 style={{ fontSize: '1.4rem', fontWeight: '800', margin: '4px 0 12px 0' }}>2. Data Ingest &amp; Classification Matrix</h2>
                <p className="body-md text-secondary mb-md" style={{ lineHeight: 1.6 }}>
                  WorldLynk only ingests data strictly required to execute authorized campus functions. Data categories are classified into four distinct protection tiers:
                </p>

                <div className="flex flex-col gap-sm">
                  <div style={{ backgroundColor: '#0d0d14', padding: '14px', borderRadius: '8px', borderLeft: '3px solid var(--accent-cyan)' }}>
                    <strong style={{ color: '#ffffff' }}>Tier 1 · Academic Identity:</strong> Student Identification Number (SITS ID), enrolled course, module code, and institutional email address.
                  </div>
                  <div style={{ backgroundColor: '#0d0d14', padding: '14px', borderRadius: '8px', borderLeft: '3px solid var(--accent-orange)' }}>
                    <strong style={{ color: '#ffffff' }}>Tier 2 · Telemetry &amp; Attendance:</strong> Sub-180ms dynamic QR scan timestamps, lecture hall Bluetooth beacon pings, and Moodle coursework access intervals.
                  </div>
                  <div style={{ backgroundColor: '#0d0d14', padding: '14px', borderRadius: '8px', borderLeft: '3px solid var(--accent-emerald)' }}>
                    <strong style={{ color: '#ffffff' }}>Tier 3 · Compliance &amp; Work Hours:</strong> UK Home Office CAS identifiers, weekly term-time employment rotas, and 20-hour legal margin ledgers.
                  </div>
                  <div style={{ backgroundColor: '#0d0d14', padding: '14px', borderRadius: '8px', borderLeft: '3px solid var(--accent-purple)' }}>
                    <strong style={{ color: '#ffffff' }}>Tier 4 · Accommodation &amp; Financials:</strong> Verified PBSA room vouchers, Stripe escrow holding contract IDs, and maintenance fund audit dates.
                  </div>
                </div>
              </section>

              <section id="zero_training">
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>SECTION 03</span>
                <h2 style={{ fontSize: '1.4rem', fontWeight: '800', margin: '4px 0 12px 0' }}>3. Strict Zero Model Training Guarantee</h2>
                <div style={{ backgroundColor: '#0d0d14', padding: '18px', borderRadius: '10px', border: '1px solid var(--status-pass-border)', borderLeft: '4px solid var(--status-pass)' }}>
                  <div className="mono-label" style={{ color: 'var(--status-pass)', marginBottom: '4px' }}>CONTRACTUAL INDEMNIFICATION</div>
                  <p className="body-md text-secondary" style={{ lineHeight: 1.6 }}>
                    <strong>Zero-Training Mandate:</strong> WorldLynk never uses student personal data, transcripts, personal statements, chat queries, or attendance logs to train, fine-tune, or reinforce any public, foundational, or proprietary artificial intelligence models. Model inference agreements with enterprise providers contractually prohibit token persistence or retraining.
                  </p>
                </div>
              </section>

              <section id="tokenization">
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>SECTION 04</span>
                <h2 style={{ fontSize: '1.4rem', fontWeight: '800', margin: '4px 0 12px 0' }}>4. Cryptographic PII Tokenization</h2>
                <p className="body-md text-secondary" style={{ lineHeight: 1.6 }}>
                  Raw student PII never exits the university's virtual private cloud boundary. Student names, passport numbers, and contact details are tokenized into cryptographic HMAC hashes before prompt submission to the Nova AI Engine. Full student re-identification occurs strictly in-memory inside the authenticated Compass staff terminal.
                </p>
              </section>

              <section id="subprocessors">
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>SECTION 05</span>
                <h2 style={{ fontSize: '1.4rem', fontWeight: '800', margin: '4px 0 12px 0' }}>5. Sub-Processors &amp; Data Residency</h2>
                <p className="body-md text-secondary" style={{ lineHeight: 1.6 }}>
                  All student data for UK higher education institutions resides strictly within data centres located in London, United Kingdom (AWS eu-west-2 and Google Cloud europe-west2). Subscriber consent is required prior to engaging any new sub-processor, with 30 calendar days notice provided.
                </p>
              </section>

              <section id="retention">
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>SECTION 06</span>
                <h2 style={{ fontSize: '1.4rem', fontWeight: '800', margin: '4px 0 12px 0' }}>6. Data Retention &amp; Cryptographic Erasure</h2>
                <p className="body-md text-secondary" style={{ lineHeight: 1.6 }}>
                  Institutional student data is retained solely for the active term of the Master Services Agreement. Upon contract conclusion, all database records, vector embeddings, and temporary caches are permanently wiped using Department of Defense (DoD 5220.22-M) compliant cryptographic erasure within 30 days, with a signed Certificate of Destruction provided to the Registrar.
                </p>
              </section>

              <section id="sar_rights">
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>SECTION 07</span>
                <h2 style={{ fontSize: '1.4rem', fontWeight: '800', margin: '4px 0 12px 0' }}>7. Student Rights &amp; Automated SAR Protocol</h2>
                <p className="body-md text-secondary" style={{ lineHeight: 1.6 }}>
                  Students maintain all statutory rights of access, rectification, erasure, and data portability under UK GDPR Articles 15 through 22. WorldLynk provides a one-click Subject Access Request (SAR) export tool in the Compass administrative terminal, enabling university DPOs to export a student's full historical audit dossier in under 60 seconds.
                </p>
              </section>

              <section id="dpo_contact">
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>SECTION 08</span>
                <h2 style={{ fontSize: '1.4rem', fontWeight: '800', margin: '4px 0 12px 0' }}>8. Data Protection Officer (DPO)</h2>
                <div style={{ backgroundColor: '#0d0d14', padding: '16px', borderRadius: '8px', border: '1px solid #232332' }}>
                  <div className="mono-sm" style={{ fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '6px', color: 'var(--text-secondary)' }}>
                    <div><strong>OFFICER:</strong> Data Protection Officer, WorldLynk Inc.</div>
                    <div><strong>EMAIL:</strong> dpo@worldlynk.com</div>
                    <div><strong>POSTAL ADDRESS:</strong> 14 Chancery Lane, Holborn, London WC2A 1LG, United Kingdom</div>
                    <div><strong>SUPERVISORY AUTHORITY:</strong> UK Information Commissioner's Office (ICO)</div>
                  </div>
                </div>
              </section>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
