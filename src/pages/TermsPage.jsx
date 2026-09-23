import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  ExternalLink,
  Download
} from 'lucide-react';

const CLAUSES = [
  { id: 'provision', num: '1', title: 'Provision of Campus Services' },
  { id: 'governance', num: '2', title: 'Institutional Authority & The Arbiter Gate' },
  { id: 'sla', num: '3', title: 'Service Level Agreement (99.95% Uptime)' },
  { id: 'ip_ownership', num: '4', title: 'Intellectual Property & Student Data Ownership' },
  { id: 'security', num: '5', title: 'Cryptographic Security & SOC-2 Audits' },
  { id: 'subprocessors', num: '6', title: 'Sub-Processors & Sovereign UK Hosting' },
  { id: 'incident', num: '7', title: 'Security Incident Response (24h Notice)' },
  { id: 'audit_rights', num: '8', title: 'Institutional Auditing & UKVI Inspections' },
  { id: 'indemnity', num: '9', title: 'Warranties & Cyber Liability Indemnification' },
  { id: 'termination', num: '10', title: 'Termination & Cryptographic Data Return' },
  { id: 'liability', num: '11', title: 'Limitation of Liability' },
  { id: 'jurisdiction', num: '12', title: 'Governing Law & Jurisdiction' }
];

export default function TermsPage() {
  const [activeClause, setActiveClause] = useState('provision');

  const scrollTo = (id) => {
    setActiveClause(id);
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
                LEGAL CONTRACT // ENTERPRISE MASTER SERVICES AGREEMENT (MSA)
              </div>
              <h1 className="headline-xl" style={{ marginBottom: '12px', lineHeight: 1.15 }}>
                Master Services Agreement.
              </h1>
              <p className="body-lg text-secondary" style={{ maxWidth: '780px' }}>
                Standard higher education terms for university subscribers. Establishes legal boundaries, 99.95% uptime guarantees, student data ownership, and named human authority via the Arbiter gate.
              </p>
            </div>

            <div className="flex flex-col gap-sm" style={{ minWidth: '220px' }}>
              <div className="card-dark" style={{ padding: '16px', border: '1px solid var(--border-subtle)' }}>
                <div className="mono-label" style={{ color: 'var(--accent-cyan)', fontSize: '10px' }}>CONTRACT JURISDICTION</div>
                <div style={{ fontSize: '1.2rem', fontWeight: '800', marginTop: '2px' }}>England &amp; Wales</div>
                <div className="mono-sm text-secondary" style={{ fontSize: '11px' }}>High Court of Justice, London</div>
              </div>
              <button onClick={() => alert('Downloading Standard MSA PDF')} className="btn-secondary btn-sm" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <Download size={13} />
                <span>Download Executable PDF</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEGAL DUAL-COLUMN LAYOUT ────────────────────────────── */}
      <section className="section" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
        <div className="main-container">
          <div className="responsive-grid-legal">
            
            {/* Sticky Sidebar Navigation */}
            <div style={{ position: 'sticky', top: '100px', backgroundColor: '#13131c', padding: '18px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
              <div className="mono-label mb-sm" style={{ color: 'var(--accent-orange)' }}>ARTICLES INDEX</div>
              <div className="flex flex-col gap-xs">
                {CLAUSES.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => scrollTo(c.id)}
                    style={{
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      padding: '8px 10px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      color: activeClause === c.id ? 'var(--accent-orange)' : 'var(--text-secondary)',
                      backgroundColor: activeClause === c.id ? 'rgba(255,107,0,0.1)' : 'transparent',
                      fontWeight: activeClause === c.id ? '700' : '500',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {c.num}. {c.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Contract Articles */}
            <div className="card-dark" style={{ padding: '36px', borderRadius: '16px', border: '1px solid var(--border-subtle)', backgroundColor: '#13131c', display: 'flex', flexDirection: 'column', gap: '32px' }}>
              
              <section id="provision">
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>ARTICLE 01</span>
                <h2 style={{ fontSize: '1.35rem', fontWeight: '800', margin: '4px 0 10px 0' }}>1. Provision of Campus Operating Services</h2>
                <p className="body-md text-secondary" style={{ lineHeight: 1.6 }}>
                  WorldLynk Inc. ("WorldLynk") provides autonomous orchestration software, agent execution frameworks, dynamic QR attendance systems, and staff queue terminals ("Services") to subscribing higher education institutions ("Subscriber"). Access is granted on a multi-year subscription basis subject to an executed Institutional Order Form and these Terms.
                </p>
              </section>

              <section id="governance">
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>ARTICLE 02</span>
                <h2 style={{ fontSize: '1.35rem', fontWeight: '800', margin: '4px 0 10px 0' }}>2. Institutional Authority &amp; The Arbiter Gate</h2>
                <p className="body-md text-secondary" style={{ lineHeight: 1.6 }}>
                  Subscriber retains exclusive operational and pedagogical authority over all campus affairs. The Services operate under the cardinal rule: <em>Agents prepare, named staff decide</em>. Consequential actions concerning student disciplinary status, academic standing, attendance strikes, or UKVI visa reporting cannot auto-commit and remain held in the Arbiter gate until approved by an authenticated university employee.
                </p>
              </section>

              <section id="sla">
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>ARTICLE 03</span>
                <h2 style={{ fontSize: '1.35rem', fontWeight: '800', margin: '4px 0 10px 0' }}>3. Service Level Agreement (SLA) &amp; Service Credits</h2>
                <p className="body-md text-secondary mb-sm" style={{ lineHeight: 1.6 }}>
                  WorldLynk commits to <strong>99.95% monthly uptime</strong> for all production APIs, dynamic QR attendance validators, and webhook gateways.
                </p>
                <div style={{ backgroundColor: '#0d0d14', padding: '14px', borderRadius: '8px', border: '1px solid #232332' }}>
                  <div className="mono-sm" style={{ fontSize: '10.5px', display: 'flex', flexDirection: 'column', gap: '4px', color: 'var(--text-secondary)' }}>
                    <div>• 99.0% - 99.94% Uptime: 10% Monthly Service Credit</div>
                    <div>• 95.0% - 98.99% Uptime: 25% Monthly Service Credit</div>
                    <div>• Below 95.0% Uptime: 50% Monthly Service Credit + Termination Right</div>
                  </div>
                </div>
              </section>

              <section id="ip_ownership">
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>ARTICLE 04</span>
                <h2 style={{ fontSize: '1.35rem', fontWeight: '800', margin: '4px 0 10px 0' }}>4. Intellectual Property &amp; Student Data Ownership</h2>
                <p className="body-md text-secondary" style={{ lineHeight: 1.6 }}>
                  Subscriber exclusively owns all right, title, and interest in and to all institutional data, student transcripts, grades, and timetables ingested by the Services. WorldLynk acquires zero ownership rights. WorldLynk retains all right, title, and interest in the software platform, Mastra agent architectures, and cryptographic source code.
                </p>
              </section>

              <section id="security">
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>ARTICLE 05</span>
                <h2 style={{ fontSize: '1.35rem', fontWeight: '800', margin: '4px 0 10px 0' }}>5. Cryptographic Security &amp; SOC-2 Audits</h2>
                <p className="body-md text-secondary" style={{ lineHeight: 1.6 }}>
                  WorldLynk maintains SOC 2 Type II and ISO 27001 certifications. All data in transit is encrypted using TLS 1.3; data at rest is encrypted using AES-256 with per-tenant institutional keys managed in hardware security modules (HSM).
                </p>
              </section>

              <section id="subprocessors">
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>ARTICLE 06</span>
                <h2 style={{ fontSize: '1.35rem', fontWeight: '800', margin: '4px 0 10px 0' }}>6. Sub-Processors &amp; Sovereign UK Hosting</h2>
                <p className="body-md text-secondary" style={{ lineHeight: 1.6 }}>
                  All student data for UK institutions is hosted strictly within London, United Kingdom (AWS eu-west-2). WorldLynk will provide 30 days prior written notice before engaging any new sub-processor, during which Subscriber may object on data protection grounds.
                </p>
              </section>

              <section id="incident">
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>ARTICLE 07</span>
                <h2 style={{ fontSize: '1.35rem', fontWeight: '800', margin: '4px 0 10px 0' }}>7. Security Incident Response &amp; 24-Hour Notice</h2>
                <p className="body-md text-secondary" style={{ lineHeight: 1.6 }}>
                  In the event of a confirmed security breach involving Subscriber personal data, WorldLynk will notify Subscriber's designated CISO and DPO in writing within <strong>24 hours</strong> of confirmation, providing technical incident briefs and mitigation steps.
                </p>
              </section>

              <section id="audit_rights">
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>ARTICLE 08</span>
                <h2 style={{ fontSize: '1.35rem', fontWeight: '800', margin: '4px 0 10px 0' }}>8. Institutional Auditing &amp; UKVI Inspections</h2>
                <p className="body-md text-secondary" style={{ lineHeight: 1.6 }}>
                  Subscriber, or its designated independent certified auditor, may inspect WorldLynk's security controls once annually upon 30 days written notice. In the event of an unannounced UKVI Home Office sponsor compliance audit, WorldLynk will provide real-time cryptographic audit trail exports immediately upon request.
                </p>
              </section>

              <section id="indemnity">
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>ARTICLE 09</span>
                <h2 style={{ fontSize: '1.35rem', fontWeight: '800', margin: '4px 0 10px 0' }}>9. Warranties &amp; Cyber Liability Indemnification</h2>
                <p className="body-md text-secondary" style={{ lineHeight: 1.6 }}>
                  WorldLynk maintains comprehensive £10,000,000 Cyber Liability Insurance and warrants that the Services operate in material conformity with documentation. WorldLynk indemnifies and defends Subscriber against any third-party intellectual property infringement claims.
                </p>
              </section>

              <section id="termination">
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>ARTICLE 10</span>
                <h2 style={{ fontSize: '1.35rem', fontWeight: '800', margin: '4px 0 10px 0' }}>10. Termination &amp; Cryptographic Data Return</h2>
                <p className="body-md text-secondary" style={{ lineHeight: 1.6 }}>
                  Either party may terminate for material breach uncured after 30 days. Upon termination, WorldLynk will export all institutional student data to Subscriber in standard JSON/SQL formats within 14 days and permanently cryptographically erase all database copies within 30 days.
                </p>
              </section>

              <section id="liability">
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>ARTICLE 11</span>
                <h2 style={{ fontSize: '1.35rem', fontWeight: '800', margin: '4px 0 10px 0' }}>11. Limitation of Liability</h2>
                <p className="body-md text-secondary" style={{ lineHeight: 1.6 }}>
                  Except for breaches of confidentiality, gross negligence, or data protection indemnities, neither party shall be liable for indirect, consequential, or punitive damages. Total aggregate liability is capped at the fees paid by Subscriber in the preceding 12 months.
                </p>
              </section>

              <section id="jurisdiction">
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>ARTICLE 12</span>
                <h2 style={{ fontSize: '1.35rem', fontWeight: '800', margin: '4px 0 10px 0' }}>12. Governing Law &amp; Jurisdiction</h2>
                <p className="body-md text-secondary" style={{ lineHeight: 1.6 }}>
                  This Agreement is governed by and construed in accordance with the laws of England and Wales. The High Court of Justice in London, England, shall have exclusive jurisdiction to settle any dispute or claim arising out of this Agreement.
                </p>
              </section>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
