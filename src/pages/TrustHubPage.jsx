import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  Lock,
  Download,
  ExternalLink,
  ArrowRight,
  Server,
  Globe,
  AlertTriangle,
  Building,
  Key,
  Check
} from 'lucide-react';

const CERTIFICATIONS = [
  { name: 'SOC 2 Type II', authority: 'AICPA Audited', desc: 'Annual independent audit of security, availability, and confidentiality controls.', status: 'Certified 2026' },
  { name: 'ISO/IEC 27001:2022', authority: 'BSI Accredited', desc: 'Comprehensive Information Security Management System (ISMS) across all campus microservices.', status: 'Certified' },
  { name: 'HECVAT Full Cloud', authority: 'Educause Standard', desc: 'Higher Education Community Vendor Assessment Toolkit completed for university CIO review.', status: 'Completed' },
  { name: 'Cyber Essentials Plus', authority: 'UK NCSC', desc: 'Rigorous technical vulnerability scan and hands-on workstation verification by certified assessors.', status: 'Verified' },
  { name: 'UK GDPR & DPA 2018', authority: 'ICO Registered', desc: 'Strict compliance with UK data protection regulations with zero cross-border transfer.', status: 'Compliant' },
  { name: 'FERPA School Official', authority: 'US Dept of Education', desc: 'Legally designated school official operating under direct institutional control.', status: 'Compliant' }
];

const DOCS = [
  { id: 'soc2', name: 'SOC 2 Type II Independent Audit Report', size: '2.4 MB PDF', status: 'Available Under NDA', badge: 'Certified', desc: 'Complete 68-page auditor attestation covering all Trust Services Criteria.' },
  { id: 'hecvat', name: 'HECVAT Full Cloud Assessment (Higher Ed)', size: '1.8 MB XLSX', status: 'Instant Download', badge: 'Completed', desc: 'Standardized higher-education questionnaire with 260+ answered security controls.' },
  { id: 'dpa', name: 'UK GDPR & DPA 2018 Data Processing Addendum', size: '420 KB PDF', status: 'Standard DPA', badge: 'Verified', desc: 'Pre-executed institutional addendum specifying data processor obligations and sub-processors.' },
  { id: 'ferpa', name: 'FERPA School Official Designation & Data Brief', size: '310 KB PDF', status: 'Legal Guidance', badge: 'Compliant', desc: 'Legal analysis outlining institution-managed data processing and audit boundaries.' },
  { id: 'qr_arch', name: 'Sub-180ms QR HMAC Cryptographic Architecture', size: '890 KB PDF', status: 'Whitepaper', badge: 'Architecture', desc: 'Deep dive into rotating token algorithms, anti-replay guards, and offline verification.' },
  { id: 'bcp_dr', name: 'Business Continuity & Disaster Recovery Plan', size: '1.2 MB PDF', status: 'Available Under NDA', badge: 'Annual Audit', desc: 'RPO < 15 minutes, RTO < 1 hour, multi-region failover protocols and live drills.' },
  { id: 'pentest', name: 'Third-Party Penetration Test Executive Summary', size: '640 KB PDF', status: 'Available Under NDA', badge: 'Annual Audit', desc: 'Independent gray-box network and application penetration test report (CREST certified).' },
  { id: 'subprocessors', name: 'Official Sub-Processor & Geolocation Register', size: '280 KB PDF', status: 'Public Document', badge: 'Updated Q3', desc: 'Complete inventory of hosting providers, database clusters, and data residency regions.' }
];

const SUBPROCESSORS = [
  { name: 'Amazon Web Services (AWS)', purpose: 'Primary Compute & VPC Hosting', location: 'London, UK (eu-west-2)', dataStored: 'Encrypted databases, event bus, API nodes' },
  { name: 'Google Cloud Platform (GCP)', purpose: 'Secondary Replication & AI Gateway', location: 'London, UK (europe-west2)', dataStored: 'Anonymized vector indices, tokenized embeddings' },
  { name: 'Redis Enterprise Cloud', purpose: 'Sub-millisecond Pub/Sub & Queue', location: 'London, UK (AWS eu-west-2)', dataStored: 'Ephemeral session cache, live attendance queues' },
  { name: 'Stripe Payments UK Ltd', purpose: 'PBSA Housing Escrows & Tuition', location: 'London, UK / EU', dataStored: 'Payment tokens, tenancy holding contracts' }
];

export default function TrustHubPage() {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [ndaAccepted, setNdaAccepted] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
      setSelectedDoc(null);
      setNdaAccepted(false);
    }, 2000);
  };

  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', backgroundColor: 'var(--wl-dark)', color: '#ffffff' }}>
      
      {/* ── HERO BANNER ─────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '32px', borderBottom: '1px solid var(--border-hairline)' }}>
        <div className="main-container">
          <div className="flex-between flex-wrap gap-md">
            <div>
              <div className="mono-label" style={{ color: 'var(--accent-orange)', marginBottom: '8px' }}>
                TRUST &amp; PROCUREMENT HUB // INSTITUTIONAL SECURITY &amp; COMPLIANCE
              </div>
              <h1 className="headline-xl" style={{ marginBottom: '12px', lineHeight: 1.15 }}>
                Security documentation for university IT and legal teams.
              </h1>
              <p className="body-lg text-secondary" style={{ maxWidth: '780px' }}>
                Higher education software procurement should not take 9 months. We provide standardized security packets, complete architecture whitepapers, certified independent audits, and pre-executed data protection agreements.
              </p>
            </div>

            <div className="flex flex-col gap-sm" style={{ minWidth: '220px' }}>
              <div className="card-dark" style={{ padding: '16px', border: '1px solid var(--border-subtle)' }}>
                <div className="mono-label" style={{ color: 'var(--status-pass)', fontSize: '10px' }}>AUDIT STATUS</div>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', marginTop: '2px' }}>SOC 2 Type II</div>
                <div className="mono-sm text-secondary" style={{ fontSize: '11px' }}>ISO 27001 &amp; HECVAT Complete</div>
              </div>
              <Link to="/security" className="btn-primary btn-sm" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <span>Review Security Model</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS GALLERY ──────────────────────────────── */}
      <section className="section" style={{ paddingTop: '40px', paddingBottom: '32px' }}>
        <div className="main-container">
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>COMPLIANCE ATTESTATIONS</span>
            <h2 className="headline-lg" style={{ marginTop: '4px' }}>
              Recognized Higher-Ed Security Standards.
            </h2>
          </div>

          <div className="grid-3 mb-3xl">
            {CERTIFICATIONS.map((cert, idx) => (
              <div key={idx} className="card-dark" style={{ padding: '24px', borderRadius: '12px', border: '1px solid var(--border-subtle)', backgroundColor: '#13131c' }}>
                <div className="flex-between mb-xs">
                  <span className="pill pill-approved">{cert.status}</span>
                  <span className="mono-sm text-muted" style={{ fontSize: '10px' }}>{cert.authority}</span>
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#ffffff', margin: '6px 0 6px 0' }}>{cert.name}</h3>
                <p className="body-sm text-secondary" style={{ fontSize: '12px', lineHeight: 1.45 }}>{cert.desc}</p>
              </div>
            ))}
          </div>

          {/* ── ARTIFACT DOWNLOAD LIBRARY ───────────────────────────── */}
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>COMPLIANCE DOCUMENT LIBRARY</span>
            <h2 className="headline-lg" style={{ marginTop: '4px' }}>
              Procurement &amp; Architecture Downloads.
            </h2>
            <p className="section-desc">
              Direct access to our audited security packets. Documents marked "Under NDA" require confirmation of your institutional email address.
            </p>
          </div>

          <div className="grid-2 gap-md mb-3xl">
            {DOCS.map((doc) => (
              <div
                key={doc.id}
                className="card-dark"
                style={{
                  padding: '24px',
                  borderRadius: '12px',
                  border: '1px solid var(--border-subtle)',
                  backgroundColor: '#13131c',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div className="flex-between mb-xs">
                    <span className="pill pill-approved">{doc.badge}</span>
                    <span className="mono-sm text-muted" style={{ fontSize: '10.5px' }}>{doc.size}</span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#ffffff', margin: '4px 0 6px 0' }}>
                    {doc.name}
                  </h3>
                  <p className="body-sm text-secondary mb-md" style={{ fontSize: '12px', lineHeight: 1.45 }}>
                    {doc.desc}
                  </p>
                </div>

                <div className="flex-between mt-sm" style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: '12px' }}>
                  <span className="mono-sm" style={{ fontSize: '10.5px', color: 'var(--accent-orange)' }}>
                    {doc.status}
                  </span>
                  <button
                    onClick={() => setSelectedDoc(doc)}
                    className="btn-secondary btn-sm"
                    style={{ fontSize: '11px', display: 'flex', alignItems: 'center', gap: '6px' }}
                  >
                    <Download size={13} /> Request ⬇
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ── SUBPROCESSORS GEOLOCATION REGISTER ──────────────────── */}
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>DATA RESIDENCY &amp; SUB-PROCESSORS</span>
            <h2 className="headline-lg" style={{ marginTop: '4px' }}>
              Strict Sovereign Geolocation Register.
            </h2>
            <p className="section-desc">
              All UK higher education student records reside strictly within certified data centres located in London, United Kingdom, with zero cross-border transfer.
            </p>
          </div>

          <div className="card-dark mb-3xl" style={{ padding: '0', borderRadius: '14px', overflow: 'hidden', border: '1px solid var(--border-subtle)' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '12px' }}>
                <thead>
                  <tr style={{ backgroundColor: '#101016', borderBottom: '1px solid var(--border-hairline)', color: 'var(--text-muted)' }}>
                    <th style={{ padding: '14px 20px' }}>SUB-PROCESSOR</th>
                    <th style={{ padding: '14px 20px' }}>CORE PURPOSE</th>
                    <th style={{ padding: '14px 20px' }}>DATA RESIDENCY REGION</th>
                    <th style={{ padding: '14px 20px' }}>DATA SCOPE STORED</th>
                  </tr>
                </thead>
                <tbody>
                  {SUBPROCESSORS.map((sp, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--border-hairline)', backgroundColor: idx % 2 === 0 ? '#13131c' : '#101016' }}>
                      <td style={{ padding: '14px 20px', fontWeight: '700', color: '#ffffff' }}>{sp.name}</td>
                      <td style={{ padding: '14px 20px', color: 'var(--text-secondary)' }}>{sp.purpose}</td>
                      <td style={{ padding: '14px 20px', color: 'var(--accent-emerald)', fontWeight: '600' }}>✓ {sp.location}</td>
                      <td style={{ padding: '14px 20px', color: 'var(--text-muted)' }}>{sp.dataStored}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── CIO PROCUREMENT FAQ ─────────────────────────────────── */}
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>CIO &amp; CISO SPECIFICATIONS</span>
            <h2 className="headline-lg" style={{ marginTop: '4px' }}>
              Frequently Asked Procurement Questions.
            </h2>
          </div>

          <div className="grid-2 gap-md mb-3xl">
            <div className="card-dark" style={{ padding: '24px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>
                Can student records leak into public LLM training data?
              </h4>
              <p className="body-sm text-secondary" style={{ lineHeight: 1.5 }}>
                No. Our zero-training agreements with enterprise model providers strictly forbid data retention or model training. Furthermore, student PII is stripped and converted into HMAC tokens prior to prompting.
              </p>
            </div>

            <div className="card-dark" style={{ padding: '24px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>
                How is database multi-tenancy enforced?
              </h4>
              <p className="body-sm text-secondary" style={{ lineHeight: 1.5 }}>
                Every database request enforces strict <code>universityId</code> scoping at the middleware layer. Firestore rules, Neo4j namespaces, and Redis clusters cryptographically isolate tenant data partitions.
              </p>
            </div>

            <div className="card-dark" style={{ padding: '24px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>
                What is your Disaster Recovery (DR) commitment?
              </h4>
              <p className="body-sm text-secondary" style={{ lineHeight: 1.5 }}>
                Our Recovery Point Objective (RPO) is under 15 minutes, and our Recovery Time Objective (RTO) is under 1 hour, supported by automated hourly snapshot replication and multi-zone AWS failovers.
              </p>
            </div>

            <div className="card-dark" style={{ padding: '24px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>
                How do we handle unannounced UKVI Home Office audits?
              </h4>
              <p className="body-sm text-secondary" style={{ lineHeight: 1.5 }}>
                The Compass console exports instant, cryptographically verifiable UKVI compliance exception reports containing attendance logs and 20-hour work cap ledgers in under 90 seconds.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── MODAL: DOCUMENT DOWNLOAD / NDA GATE ─────────────────────── */}
      {selectedDoc && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: '#13131a',
            border: '1px solid var(--border-subtle)',
            borderRadius: '16px',
            maxWidth: '560px',
            width: '100%',
            padding: '28px',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.9)'
          }}>
            <div className="flex-between mb-md">
              <div>
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>COMPLIANCE DOCUMENT REQUEST</span>
                <h3 className="headline-sm" style={{ marginTop: '2px' }}>{selectedDoc.name}</h3>
                <div className="mono-sm text-secondary">{selectedDoc.size} · {selectedDoc.badge}</div>
              </div>
              <button onClick={() => setSelectedDoc(null)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
            </div>

            {downloadSuccess ? (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <CheckCircle2 size={40} color="var(--status-pass)" style={{ margin: '0 auto 12px auto' }} />
                <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#ffffff' }}>Download Initiated</h4>
                <p className="body-sm text-secondary mt-xs">
                  Your encrypted copy of <strong>{selectedDoc.name}</strong> is generating...
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-md">
                <p className="body-sm text-secondary">
                  {selectedDoc.desc}
                </p>

                {selectedDoc.status.includes('NDA') && (
                  <div style={{ backgroundColor: '#0d0d14', padding: '14px', borderRadius: '8px', border: '1px solid #232332' }}>
                    <label style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={ndaAccepted}
                        onChange={(e) => setNdaAccepted(e.target.checked)}
                        style={{ marginTop: '3px', accentColor: 'var(--accent-orange)' }}
                      />
                      <span className="mono-sm" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.4 }}>
                        I confirm I represent a verified higher education institution and agree to standard mutual non-disclosure terms regarding security audit artifacts.
                      </span>
                    </label>
                  </div>
                )}

                <div className="form-group">
                  <label className="form-label">University Work Email</label>
                  <input type="email" placeholder="ciso@university.ac.uk" className="form-input" />
                </div>

                <div className="flex justify-end gap-sm mt-xs">
                  <button onClick={() => setSelectedDoc(null)} className="btn-secondary btn-sm">
                    Cancel
                  </button>
                  <button
                    onClick={handleDownload}
                    disabled={selectedDoc.status.includes('NDA') && !ndaAccepted}
                    className="btn-primary btn-sm"
                    style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                  >
                    <Download size={13} /> Download Artifact ➔
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
