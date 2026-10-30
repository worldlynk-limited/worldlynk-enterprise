import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EnterpriseCTASection from '../components/EnterpriseCTASection';
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
  Check,
  EyeOff,
  UserCheck,
  RefreshCw,
  Scale,
  Brain,
  HelpCircle,
  Eye,
  Database,
  Cpu
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
  { id: 'dpia', name: 'Data Protection Impact Assessment (DPIA) Pre-Drafted Pack', size: '1.4 MB PDF', status: 'Instant Download', badge: 'UK GDPR Ready', desc: 'Pre-filled UK GDPR Article 35 assessment covering Article 6 legal basis, data flows, and Article 22 human safeguard provisions.' },
  { id: 'hecvat', name: 'HECVAT Full Cloud Assessment (Higher Ed)', size: '1.8 MB XLSX', status: 'Instant Download', badge: 'Completed', desc: 'Standardized higher-education questionnaire with 260+ answered security controls.' },
  { id: 'dpa', name: 'UK GDPR & DPA 2018 Data Processing Addendum (Standard DPA)', size: '420 KB PDF', status: 'Instant Download', badge: 'Public Standard', desc: 'Pre-executed institutional addendum specifying data processor obligations and sub-processors.' },
  { id: 'subprocessors', name: 'Official Sub-Processor & Geolocation Register', size: '280 KB PDF', status: 'Public Document', badge: 'Updated Q3', desc: 'Complete inventory of hosting providers, database clusters, model endpoints, and data residency regions.' },
  { id: 'qr_arch', name: 'Fast & Secure QR Attendance Architecture Whitepaper', size: '890 KB PDF', status: 'Whitepaper', badge: 'Architecture', desc: 'Technical overview of rotating QR codes, anti-screenshot protection, and offline scanning.' },
  { id: 'soc2', name: 'SOC 2 Type II Independent Audit Report', size: '2.4 MB PDF', status: 'Request Access Under NDA', badge: 'Auditor Report', desc: 'Complete 68-page auditor attestation covering all Trust Services Criteria. Distributed under NDA upon university IT request.' },
  { id: 'bcp_dr', name: 'Business Continuity & Disaster Recovery Plan', size: '1.2 MB PDF', status: 'Request Access Under NDA', badge: 'Annual Audit', desc: 'RPO < 15 minutes, RTO < 1 hour, multi-region failover protocols and live drills.' },
  { id: 'pentest', name: 'Third-Party Penetration Test Executive Summary', size: '640 KB PDF', status: 'Request Access Under NDA', badge: 'Annual Audit', desc: 'Independent gray-box network and application penetration test report (CREST certified).' }
];

const SUBPROCESSORS = [
  { name: 'Amazon Web Services (AWS)', purpose: 'Primary Compute & VPC Hosting', location: 'London, UK (eu-west-2)', dataStored: 'Encrypted PostgreSQL clusters, event bus, API containers. AES-256 at rest.' },
  { name: 'AWS Bedrock / Anthropic Claude', purpose: 'Agent Inference & Drafting Engine', location: 'London, UK (eu-west-2)', dataStored: 'In-flight inference only. Zero Data Retention (ZDR) enterprise agreement. Data is never stored or used to train models.' },
  { name: 'Redis Enterprise Cloud', purpose: 'Sub-millisecond Session Cache & Queue', location: 'London, UK (AWS eu-west-2)', dataStored: 'Ephemeral session cache, dynamic QR token validation.' },
  { name: 'Stripe Payments UK Ltd', purpose: 'PBSA Housing Escrows & Deposits', location: 'London, UK (FCA Regulated)', dataStored: 'Payment tokens, tenancy holding contracts.' }
];

const RAW_STUDENT_DATA = {
  name: "Maya Chen",
  passport: "G39104829",
  cas: "E2948102A",
  phone: "+44 7700 900142",
  email: "m.chen@rhul.ac.uk",
  sitsId: "0091-2847",
  course: "MSc Data Science",
  attendanceSignal: "Missed CS-5100 on 2026-09-23",
  workHoursLogged: "16.0 hours (Costa Coffee)",
  fatigueRiskScore: 0.78
};

const TOKENIZED_PAYLOAD = {
  entity_token: "hmac_sha256:7f9a2b89c4d1...88e1",
  program_hash: "course_hash:99a1",
  academic_vector: [0.142, -0.891, 0.441, 0.092],
  attendance_signal: "consecutive_absence_count:2",
  work_load_indicator: "hours_logged:16.0;legal_cap:20.0",
  risk_index: 0.78,
  pii_status: "ZERO_STUDENT_PII_PRESENT",
  vpc_boundary: "STRICTLY_REDACTED_BEFORE_MODEL_EGRESS"
};

const AUDIT_LEDGER_ROWS = [
  { hash: "sha256:8b4f7a2d...d1a9", action: "INTERVENTION_APPROVE", actor: "Nova Supervisor", approver: "Dr. R. Jenkins (Senior Tutor)", studentId: "sits_0091-2847", time: "09:14:22 UTC", status: "COMMITTED" },
  { hash: "sha256:3c7efa21...fa21", action: "WORK_CAP_INTERCEPT", actor: "UKVI Guard Agent", approver: "M. Thorne (Compliance)", studentId: "sits_0087-9912", time: "09:12:08 UTC", status: "SHIELDED" },
  { hash: "sha256:7f2a88e1...88e1", action: "CAS_BRIEF_SEAL", actor: "Admissions Agent", approver: "K. Bell (Registrar)", studentId: "sits_0088-1249", time: "08:45:10 UTC", status: "COMMITTED" },
  { hash: "sha256:4e1b99a0...99a0", action: "PBSA_ESCROW_LOCK", actor: "Accommodation Agent", approver: "Stripe Webhook Gateway", studentId: "sits_0095-2018", time: "08:12:00 UTC", status: "COMMITTED" },
  { hash: "sha256:2d8c55f4...55f4", action: "ATTENDANCE_OVERRIDE", actor: "Arbiter Policy", approver: "Timetable Officer", studentId: "sits_0093-1104", time: "07:30:19 UTC", status: "COMMITTED" }
];

const RISK_FACTORS = [
  {
    factor: 'Lecture & Seminar Attendance Drop',
    weight: '35%',
    source: 'Dynamic QR Check-In / Timetable Feeds',
    description: 'Triggered when consecutive unexplained absences reach 2 or more sessions within a 14-day rolling window.',
    safeguard: 'Excludes authorized medical absences and student self-certified illness notifications.'
  },
  {
    factor: 'Course Virtual Learning Environment (LMS) Inactivity',
    weight: '25%',
    source: 'Moodle / Canvas Activity Logs',
    description: 'Flags when learning portal access drops to zero for 5 consecutive days during active teaching weeks.',
    safeguard: 'Normalized against cohort baseline engagement so reading weeks and scheduled breaks are not flagged.'
  },
  {
    factor: 'Assessment & Coursework Submission Margin',
    weight: '20%',
    source: 'Student Records / Gradebook Proxy',
    description: 'Monitors non-submission of formative assessments or impending overlapping deadlines.',
    safeguard: 'Flags are routed as support opportunities, never disciplinary notices.'
  },
  {
    factor: 'Visa Term-Time Work Hour Trajectory',
    weight: '20%',
    source: 'Student Work Shift Log & Rota Sync',
    description: 'Calculates rolling weekly campus and external work hours against the legal 20-hour Student route ceiling.',
    safeguard: 'Protective alert issued at 16 hours to help student avoid inadvertent visa breaches.'
  }
];

const ETHICAL_PILLARS = [
  {
    title: 'Zero Autonomous Disciplinary Actions',
    badge: 'Hard Governance Gate',
    desc: 'The AI never executes disciplinary sanctions, academic probation, or visa reports automatically. Every recommendation is held in Compass for review and formal approval by qualified university staff.'
  },
  {
    title: 'No Protected Characteristics in Scoring',
    badge: 'Bias Mitigation',
    desc: 'The Risk Index model strictly excludes race, nationality, gender, age, religion, disability status, or socio-economic indicators. Risk is calculated purely from operational academic and compliance signals.'
  },
  {
    title: 'Student Notification & Right to Contest',
    badge: 'UK GDPR Article 22',
    desc: 'Students have full visibility into flags recorded on their profile via the Student App. If a student believes an attendance signal or work-hour calculation is incorrect, they can dispute it with one tap.'
  },
  {
    title: 'Pre-Trained on Sovereign LLM Infrastructure',
    badge: 'Zero Model Training',
    desc: 'University data is processed via private, enterprise-grade cloud endpoints with zero-data-retention agreements. Student data is never used to train, retrain, or improve foundational AI models.'
  }
];

export default function TrustHubPage() {
  const [activeTab, setActiveTab] = useState('certifications'); // certifications, privacy, governance
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [ndaAccepted, setNdaAccepted] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [tokenized, setTokenized] = useState(false);

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
      setSelectedDoc(null);
      setNdaAccepted(false);
    }, 2000);
  };

  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', backgroundColor: 'var(--wl-dark)', color: '#0c0c0f' }}>
      
      {/* ── HERO BANNER ─────────────────────────────────────────── */}
      <section className="page-hero-banner">
        <div className="main-container">
          <div className="flex-between flex-wrap gap-md" style={{ alignItems: 'center' }}>
            <div style={{ maxWidth: '780px' }}>
              <div className="mono-label" style={{ color: 'var(--accent-orange)', marginBottom: '10px' }}>
                TRUST, SECURITY &amp; COMPLIANCE HUB // AUDITS, DATA RESIDENCY &amp; AI ETHICS
              </div>
              <h1 className="headline-xl" style={{ marginBottom: '16px', lineHeight: 1.12, textWrap: 'balance' }}>
                Enterprise trust and governance for Higher Education.
              </h1>
              <p className="body-lg text-secondary" style={{ maxWidth: '720px', lineHeight: 1.65 }}>
                A single authoritative center for university CIOs, CISOs, DPOs, and Academic Registrars: third-party security audits, UK GDPR compliance packages, cryptographic PII protection, and human-governed AI ethics.
              </p>
            </div>

            <div className="flex flex-col gap-sm" style={{ minWidth: '240px' }}>
              <div className="card-elevated" style={{ padding: '20px' }}>
                <div className="mono-label" style={{ color: 'var(--status-pass)', fontSize: '10px' }}>AUDIT STATUS</div>
                <div style={{ fontSize: '1.45rem', fontWeight: '800', marginTop: '4px', color: '#0c0c0f' }}>SOC 2 Type II</div>
                <div className="mono-sm text-secondary" style={{ fontSize: '11px', marginTop: '2px' }}>ISO 27001 · HECVAT · UK GDPR</div>
              </div>
              <Link to="/demo" className="btn-primary btn-sm" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <span>Request Security Review</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION NAV TABS ──────────────────────────────────── */}
      <div style={{ borderBottom: '1px solid rgba(15, 23, 42, 0.08)', backgroundColor: '#f4f1ee', position: 'sticky', top: '60px', zIndex: 100 }}>
        <div className="main-container" style={{ display: 'flex', gap: '8px', overflowX: 'auto', padding: '10px 0' }}>
          <button
            onClick={() => setActiveTab('certifications')}
            style={{
              padding: '10px 18px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: activeTab === 'certifications' ? '700' : '500',
              backgroundColor: activeTab === 'certifications' ? 'rgba(255, 107, 0, 0.15)' : 'transparent',
              color: activeTab === 'certifications' ? '#ff6b00' : '#71717a',
              border: activeTab === 'certifications' ? '1px solid #ff6b00' : '1px solid transparent',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <ShieldCheck size={15} />
            <span>1. Certifications &amp; Procurement Docs</span>
          </button>

          <button
            onClick={() => setActiveTab('privacy')}
            style={{
              padding: '10px 18px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: activeTab === 'privacy' ? '700' : '500',
              backgroundColor: activeTab === 'privacy' ? 'rgba(255, 107, 0, 0.15)' : 'transparent',
              color: activeTab === 'privacy' ? '#ff6b00' : '#71717a',
              border: activeTab === 'privacy' ? '1px solid #ff6b00' : '1px solid transparent',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Lock size={15} />
            <span>2. Data Privacy &amp; PII Redaction</span>
          </button>

          <button
            onClick={() => setActiveTab('governance')}
            style={{
              padding: '10px 18px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: activeTab === 'governance' ? '700' : '500',
              backgroundColor: activeTab === 'governance' ? 'rgba(255, 107, 0, 0.15)' : 'transparent',
              color: activeTab === 'governance' ? '#ff6b00' : '#71717a',
              border: activeTab === 'governance' ? '1px solid #ff6b00' : '1px solid transparent',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Scale size={15} />
            <span>3. Responsible AI &amp; Article 22 Governance</span>
          </button>
        </div>
      </div>

      {/* ── TAB 1: CERTIFICATIONS & PROCUREMENT DOCS ─────────────── */}
      {activeTab === 'certifications' && (
        <section className="section section-spacious" style={{ borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
          <div className="main-container">
            <div className="section-header-left mb-xl">
              <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>COMPLIANCE ATTESTATIONS</span>
              <h2 className="headline-lg" style={{ marginTop: '6px' }}>
                Recognized Higher-Ed Security Standards.
              </h2>
            </div>

            <div className="grid-3 gap-lg mb-3xl">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="card-elevated" style={{ padding: '26px', backgroundColor: '#ffffff' }}>
                  <div className="flex-between mb-xs">
                    <span className="pill pill-approved">{cert.status}</span>
                    <span className="mono-sm text-muted" style={{ fontSize: '10px' }}>{cert.authority}</span>
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0c0c0f', margin: '8px 0 6px 0' }}>{cert.name}</h3>
                  <p className="body-sm text-secondary" style={{ fontSize: '12px', lineHeight: 1.55 }}>{cert.desc}</p>
                </div>
              ))}
            </div>

            {/* Document Library */}
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
                    backgroundColor: '#ffffff',
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

                    <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#0c0c0f', margin: '4px 0 6px 0' }}>
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

            {/* Sub-Processors */}
            <div className="section-header-left mb-xl">
              <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>DATA RESIDENCY &amp; HOSTING</span>
              <h2 className="headline-lg" style={{ marginTop: '4px' }}>
                UK Data Residency &amp; Approved Sub-Processors.
              </h2>
              <p className="section-desc">
                All UK student records are stored exclusively within certified data centers in London, United Kingdom (AWS eu-west-2), ensuring zero unauthorized cross-border transfers.
              </p>
            </div>

            <div className="card-dark mb-3xl" style={{ padding: '0', borderRadius: '14px', overflow: 'hidden', border: '1px solid var(--border-subtle)' }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '12px' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#f4f1ee', borderBottom: '1px solid var(--border-hairline)', color: 'var(--text-muted)' }}>
                      <th style={{ padding: '14px 20px' }}>SUB-PROCESSOR</th>
                      <th style={{ padding: '14px 20px' }}>CORE PURPOSE</th>
                      <th style={{ padding: '14px 20px' }}>DATA RESIDENCY REGION</th>
                      <th style={{ padding: '14px 20px' }}>DATA SCOPE STORED</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SUBPROCESSORS.map((sp, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid var(--border-hairline)', backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f4f1ee' }}>
                        <td style={{ padding: '14px 20px', fontWeight: '700', color: '#0c0c0f' }}>{sp.name}</td>
                        <td style={{ padding: '14px 20px', color: 'var(--text-secondary)' }}>{sp.purpose}</td>
                        <td style={{ padding: '14px 20px', color: 'var(--accent-emerald)', fontWeight: '600' }}>✓ {sp.location}</td>
                        <td style={{ padding: '14px 20px', color: 'var(--text-muted)' }}>{sp.dataStored}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── TAB 2: DATA PRIVACY & PII REDACTION ─────────────────── */}
      {activeTab === 'privacy' && (
        <section className="section section-spacious" style={{ borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
          <div className="main-container">
            <div className="section-header-left mb-xl">
              <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>INTERACTIVE DATA PROTECTION SIMULATOR</span>
              <h2 className="headline-lg" style={{ marginTop: '6px' }}>
                Zero AI Training. Automatic PII Redaction.
              </h2>
              <p className="section-desc">
                Toggle below to inspect how student records are transformed into anonymized, tokenized vectors before model reasoning takes place.
              </p>
            </div>

            <div className="card-elevated mb-3xl" style={{ padding: '28px', backgroundColor: '#ffffff' }}>
              <div className="flex-between mb-md">
                <div>
                  <span className="mono-sm text-secondary">SIMULATION VIEW</span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0c0c0f', marginTop: '2px' }}>
                    {tokenized ? 'Shielded Payload (Sent to Nova Reasoning Engine)' : 'Raw Campus Database Record (Stored in UK VPC)'}
                  </h3>
                </div>
                <button
                  onClick={() => setTokenized(!tokenized)}
                  className="btn-primary btn-sm"
                  style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <RefreshCw size={13} />
                  <span>{tokenized ? 'View Raw Campus Record' : 'Tokenize & Strip PII'}</span>
                </button>
              </div>

              <pre style={{
                backgroundColor: '#f4f1ee',
                padding: '20px',
                borderRadius: '8px',
                overflowX: 'auto',
                fontSize: '12px',
                color: tokenized ? '#10b981' : '#f59e0b',
                border: '1px solid var(--border-hairline)'
              }}>
                {JSON.stringify(tokenized ? TOKENIZED_PAYLOAD : RAW_STUDENT_DATA, null, 2)}
              </pre>
            </div>

            {/* Cryptographic Audit Ledger */}
            <div className="section-header-left mb-xl">
              <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>IMMUTABLE AUDIT TRAIL</span>
              <h2 className="headline-lg" style={{ marginTop: '6px' }}>
                Cryptographic Action Ledger.
              </h2>
              <p className="section-desc">
                Every intervention, work cap intercept, and tutor approval is sealed with an immutable SHA-256 hash for UKVI and university audit compliance.
              </p>
            </div>

            <div className="card-dark mb-3xl" style={{ padding: '0', borderRadius: '14px', overflow: 'hidden', border: '1px solid var(--border-subtle)' }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '12px' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#f4f1ee', borderBottom: '1px solid var(--border-hairline)', color: 'var(--text-muted)' }}>
                      <th style={{ padding: '14px 20px' }}>TRANSACTION HASH</th>
                      <th style={{ padding: '14px 20px' }}>ACTION TYPE</th>
                      <th style={{ padding: '14px 20px' }}>ACTOR / AGENT</th>
                      <th style={{ padding: '14px 20px' }}>HUMAN APPROVER</th>
                      <th style={{ padding: '14px 20px' }}>TIMESTAMP</th>
                      <th style={{ padding: '14px 20px' }}>STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {AUDIT_LEDGER_ROWS.map((row, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid var(--border-hairline)', backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f4f1ee' }}>
                        <td style={{ padding: '14px 20px', fontFamily: 'monospace', color: '#ff6b00' }}>{row.hash}</td>
                        <td style={{ padding: '14px 20px', fontWeight: '700', color: '#0c0c0f' }}>{row.action}</td>
                        <td style={{ padding: '14px 20px', color: 'var(--text-secondary)' }}>{row.actor}</td>
                        <td style={{ padding: '14px 20px', color: 'var(--text-secondary)' }}>{row.approver}</td>
                        <td style={{ padding: '14px 20px', color: 'var(--text-muted)' }}>{row.time}</td>
                        <td style={{ padding: '14px 20px' }}>
                          <span className="pill pill-approved">{row.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── TAB 3: RESPONSIBLE AI & ARTICLE 22 GOVERNANCE ───────── */}
      {activeTab === 'governance' && (
        <section className="section section-spacious" style={{ borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}>
          <div className="main-container">
            <div className="section-header-left mb-xl">
              <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>ETHICAL GOVERNANCE PILLARS</span>
              <h2 className="headline-lg" style={{ marginTop: '6px' }}>
                Algorithmic Fairness &amp; Student Rights.
              </h2>
              <p className="section-desc">
                WorldLynk adheres strictly to UK GDPR Article 22 principles, ensuring automated alerts never make unilateral decisions affecting student standing.
              </p>
            </div>

            <div className="grid-2 gap-lg mb-3xl">
              {ETHICAL_PILLARS.map((pillar, idx) => (
                <div key={idx} className="card-elevated" style={{ padding: '28px', backgroundColor: '#ffffff' }}>
                  <span className="pill pill-approved mb-sm">{pillar.badge}</span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0c0c0f', margin: '8px 0 8px 0' }}>{pillar.title}</h3>
                  <p className="body-sm text-secondary" style={{ lineHeight: 1.6 }}>{pillar.desc}</p>
                </div>
              ))}
            </div>

            {/* Explainable Risk Scoring Weights */}
            <div className="section-header-left mb-xl">
              <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>EXPLAINABLE RISK SCORE WEIGHTS</span>
              <h2 className="headline-lg" style={{ marginTop: '6px' }}>
                Signal Transparency: What Powers the Risk Index?
              </h2>
              <p className="section-desc">
                Zero black-box logic. Every early warning score is composed of transparent, weighted operational signals without demographic indicators.
              </p>
            </div>

            <div className="card-dark mb-3xl" style={{ padding: '0', borderRadius: '14px', overflow: 'hidden', border: '1px solid var(--border-subtle)' }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '12px' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#f4f1ee', borderBottom: '1px solid var(--border-hairline)', color: 'var(--text-muted)' }}>
                      <th style={{ padding: '14px 20px' }}>OPERATIONAL FACTOR</th>
                      <th style={{ padding: '14px 20px' }}>MODEL WEIGHT</th>
                      <th style={{ padding: '14px 20px' }}>DATA SOURCE</th>
                      <th style={{ padding: '14px 20px' }}>DESCRIPTION</th>
                      <th style={{ padding: '14px 20px' }}>FAIRNESS SAFEGUARD</th>
                    </tr>
                  </thead>
                  <tbody>
                    {RISK_FACTORS.map((rf, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid var(--border-hairline)', backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f4f1ee' }}>
                        <td style={{ padding: '14px 20px', fontWeight: '700', color: '#0c0c0f' }}>{rf.factor}</td>
                        <td style={{ padding: '14px 20px', fontWeight: '800', color: '#ff6b00' }}>{rf.weight}</td>
                        <td style={{ padding: '14px 20px', color: 'var(--text-secondary)' }}>{rf.source}</td>
                        <td style={{ padding: '14px 20px', color: 'var(--text-muted)' }}>{rf.description}</td>
                        <td style={{ padding: '14px 20px', color: 'var(--accent-emerald)' }}>✓ {rf.safeguard}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── BOTTOM CONVERSION CTA ────────────────────────────── */}
      <EnterpriseCTASection 
        eyebrow="HECVAT &amp; INSTITUTIONAL PROCUREMENT"
        title="Ready to fast-track your university IT security review?"
        description="Request custom access to our complete SOC 2 Type II attestation, CREST penetration test findings, and Business Continuity plan under standard mutual NDA."
        primaryText="Request Security Package"
        primaryLink="/demo"
        secondaryText="View Data Privacy Policy"
        secondaryLink="/privacy"
        secondaryIsExternal={false}
      />

      {/* ── MODAL: DOCUMENT DOWNLOAD / NDA GATE ─────────────────────── */}
      {selectedDoc && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(12, 12, 15, 0.55)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            border: '1px solid var(--border-subtle)',
            borderRadius: '16px',
            maxWidth: '560px',
            width: '100%',
            padding: '28px',
            boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.55)'
          }}>
            <div className="flex-between mb-md">
              <div>
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>COMPLIANCE DOCUMENT REQUEST</span>
                <h3 className="headline-sm" style={{ marginTop: '2px' }}>{selectedDoc.name}</h3>
                <div className="mono-sm text-secondary">{selectedDoc.size} · {selectedDoc.badge}</div>
              </div>
              <button onClick={() => setSelectedDoc(null)} style={{ background: 'none', border: 'none', color: '#0c0c0f', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
            </div>

            {downloadSuccess ? (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <CheckCircle2 size={40} color="var(--status-pass)" style={{ margin: '0 auto 12px auto' }} />
                <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#0c0c0f' }}>Download Initiated</h4>
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
                  <div style={{ backgroundColor: '#f4f1ee', padding: '14px', borderRadius: '8px', border: '1px solid #d8d4cd' }}>
                    <label style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={ndaAccepted}
                        onChange={(e) => setNdaAccepted(e.target.checked)}
                        style={{ marginTop: '3px', accentColor: 'var(--accent-orange)' }}
                      />
                      <span className="mono-sm" style={{ fontSize: '11px', color: '#27272a', lineHeight: 1.4 }}>
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
