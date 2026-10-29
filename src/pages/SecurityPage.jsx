import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EnterpriseCTASection from '../components/EnterpriseCTASection';
import {
  ShieldCheck,
  Lock,
  CheckCircle2,
  AlertTriangle,
  Database,
  Key,
  Server,
  Terminal,
  Cpu,
  FileText,
  Download,
  ExternalLink,
  ArrowRight,
  RefreshCw,
  EyeOff,
  UserCheck,
  Check
} from 'lucide-react';

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

export default function SecurityPage() {
  const [tokenized, setTokenized] = useState(false);
  const [filterQuery, setFilterQuery] = useState('');

  const filteredRows = AUDIT_LEDGER_ROWS.filter(r => 
    r.hash.toLowerCase().includes(filterQuery.toLowerCase()) ||
    r.action.toLowerCase().includes(filterQuery.toLowerCase()) ||
    r.approver.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', backgroundColor: 'var(--wl-dark)', color: '#ffffff' }}>
      
      {/* ── HERO BANNER ─────────────────────────────────────────── */}
      <section className="page-hero-banner">
        <div className="main-container">
          <div className="flex-between flex-wrap gap-md" style={{ alignItems: 'center' }}>
            <div style={{ maxWidth: '780px' }}>
              <div className="mono-label" style={{ color: 'var(--accent-orange)', marginBottom: '10px' }}>
                DATA PRIVACY &amp; SECURITY // FERPA &amp; UK GDPR COMPLIANCE
              </div>
              <h1 className="headline-xl" style={{ marginBottom: '16px', lineHeight: 1.12, textWrap: 'balance' }}>
                Bank-grade privacy. Zero AI training on student data.
              </h1>
              <p className="body-lg text-secondary" style={{ maxWidth: '720px', lineHeight: 1.65 }}>
                Your student data stays yours. WorldLynk keeps all university data in isolated, encrypted cloud vaults. Personal details are automatically stripped before reaching AI models, and every staff action is clearly logged.
              </p>
            </div>

            <div className="flex flex-col gap-sm" style={{ minWidth: '240px' }}>
              <div className="card-elevated" style={{ padding: '20px' }}>
                <div className="mono-label" style={{ color: 'var(--status-pass)', fontSize: '10px' }}>GUARANTEE</div>
                <div style={{ fontSize: '1.45rem', fontWeight: '800', marginTop: '4px', color: '#ffffff' }}>Zero LLM Training</div>
                <div className="mono-sm text-secondary" style={{ fontSize: '11px', marginTop: '2px' }}>Contractually Enforced by Enterprise SLA</div>
              </div>
              <Link to="/trust" className="btn-primary btn-sm" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <span>Trust &amp; Procurement Hub</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE PII TOKENIZATION SIMULATOR ────────────────── */}
      <section className="section section-spacious" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <div className="main-container">
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>INTERACTIVE PRIVACY DEMO</span>
            <h2 className="headline-lg" style={{ marginTop: '6px' }}>
              How We Protect Student Data in 5 Steps.
            </h2>
            <p className="section-desc" style={{ maxWidth: '720px', lineHeight: 1.6 }}>
              Personal details never reach external AI models. Click the button below to see how student names, passports, and contact info are automatically replaced with anonymous tokens before processing.
            </p>
          </div>

          <div className="card-elevated mb-3xl" style={{ padding: '36px', backgroundColor: '#13131c' }}>
            <div className="flex-between flex-wrap gap-md mb-lg">
              <div>
                <span className="mono-label" style={{ color: 'var(--accent-cyan)' }}>LIVE EGRESS PRIVACY SIMULATOR</span>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginTop: '4px', color: '#ffffff' }}>
                  {tokenized ? 'Stage 03: Anonymized Data (Safe for AI Model Egress)' : 'Stage 01: Original Record Behind University Firewall'}
                </h3>
              </div>
              <button
                onClick={() => setTokenized(!tokenized)}
                className="btn-primary btn-sm"
                style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <RefreshCw size={13} />
                {tokenized ? 'Reset to Original Data' : 'Anonymize Data for AI'}
              </button>
            </div>

            <div className="responsive-grid-split-equal" style={{ gap: '1.5rem' }}>
              {/* Raw View */}
              <div style={{ backgroundColor: '#0d0d14', padding: '22px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div className="flex-between mb-sm">
                  <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>CAMPUS INTERNAL RECORD</span>
                  <span className="pill pill-flagged" style={{ fontSize: '8.5px' }}>CONTAINS PERSONAL INFO</span>
                </div>
                <pre style={{ margin: 0, fontSize: '11.5px', color: '#ffffff', fontFamily: 'var(--wl-font-mono)', lineHeight: 1.6, overflowX: 'auto' }}>
                  {JSON.stringify(RAW_STUDENT_DATA, null, 2)}
                </pre>
              </div>

              {/* Masked Output */}
              <div style={{ backgroundColor: '#060609', padding: '22px', borderRadius: '12px', border: tokenized ? '1px solid var(--status-pass)' : '1px solid #1a1a24' }}>
                <div className="flex-between mb-sm">
                  <span className="mono-label" style={{ color: 'var(--status-pass)' }}>DATA SENT TO AI MODEL</span>
                  <span className={`pill ${tokenized ? 'pill-approved' : 'pill-held'}`} style={{ fontSize: '8.5px' }}>
                    {tokenized ? 'ANONYMIZED & REDACTED' : 'READY TO ANONYMIZE'}
                  </span>
                </div>
                <pre style={{ margin: 0, fontSize: '11.5px', color: tokenized ? 'var(--accent-cyan)' : 'var(--text-muted)', fontFamily: 'var(--wl-font-mono)', lineHeight: 1.6, overflowX: 'auto' }}>
                  {tokenized
                    ? JSON.stringify(TOKENIZED_PAYLOAD, null, 2)
                    : '// Click "Anonymize Data for AI" above\n// to preview the protected data sent to AI.'}
                </pre>
              </div>
            </div>

            <div className="mono-sm text-secondary mt-lg" style={{ fontSize: '11.5px', borderTop: '1px solid var(--border-hairline)', paddingTop: '18px' }}>
              ✓ <strong>Zero Student Identifiers Shared:</strong> AI models never see real names, contact numbers, or passport IDs. Real identities only display inside your staff members\' authorized accounts.
            </div>
          </div>

          {/* ── DEFENSE-IN-DEPTH SECURITY MATRIX ─────────────────────── */}
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>MULTI-LAYERED PROTECTION</span>
            <h2 className="headline-lg" style={{ marginTop: '6px' }}>
              How We Keep Your Campus Data Secure.
            </h2>
          </div>

          <div className="grid-3 gap-lg mb-3xl">
            <div className="card-elevated" style={{ padding: '26px' }}>
              <div className="flex gap-xs alignItems-center mb-xs">
                <Lock size={16} color="var(--accent-orange)" />
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>LAYER 01: DATA STORAGE</span>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', margin: '6px 0 10px 0', color: '#ffffff' }}>Dedicated Encryption Keys</h3>
              <p className="body-sm text-secondary mb-md" style={{ lineHeight: 1.6 }}>
                Each university gets its own isolated database encrypted with dedicated AES-256 keys, ensuring complete separation between institutions.
              </p>
              <div className="mono-sm text-muted" style={{ fontSize: '10.5px' }}>
                FIPS 140-2 Level 3 Certified Hardware
              </div>
            </div>

            <div className="card-elevated" style={{ padding: '26px' }}>
              <div className="flex gap-xs alignItems-center mb-xs">
                <Server size={16} color="var(--accent-cyan)" />
                <span className="mono-label" style={{ color: 'var(--accent-cyan)' }}>LAYER 02: DATA IN TRANSIT</span>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', margin: '6px 0 10px 0', color: '#ffffff' }}>Secure Encrypted Connections</h3>
              <p className="body-sm text-secondary mb-md" style={{ lineHeight: 1.6 }}>
                All communication between campus databases, student systems, and WorldLynk is encrypted with modern TLS 1.3 standards.
              </p>
              <div className="mono-sm text-muted" style={{ fontSize: '10.5px' }}>
                Strict HSTS Enabled with Verified Certificates
              </div>
            </div>

            <div className="card-elevated" style={{ padding: '26px' }}>
              <div className="flex gap-xs alignItems-center mb-xs">
                <ShieldCheck size={16} color="var(--status-pass)" />
                <span className="mono-label" style={{ color: 'var(--status-pass)' }}>LAYER 03: AI MODEL SAFETY</span>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', margin: '6px 0 10px 0', color: '#ffffff' }}>Zero AI Model Training</h3>
              <p className="body-sm text-secondary mb-md" style={{ lineHeight: 1.6 }}>
                Strict enterprise agreements guarantee that AI providers never store, log, or train models on any of your university's prompts or student records.
              </p>
              <div className="mono-sm text-muted" style={{ fontSize: '10.5px' }}>
                Contractual Guarantee &amp; Data Erasure Proofs
              </div>
            </div>
          </div>

          {/* ── IMMUTABLE AUDIT LEDGER VIEWER ────────────────────────── */}
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>ACTIVITY AUDIT TRAIL</span>
            <h2 className="headline-lg" style={{ marginTop: '6px' }}>
              Complete, Tamper-Evident Activity Log.
            </h2>
            <p className="section-desc" style={{ maxWidth: '680px', lineHeight: 1.6 }}>
              Every staff approval, attendance check, and visa alert creates a permanent, searchable audit record so your team always knows who approved what and when.
            </p>
          </div>

          <div className="card-elevated mb-xl" style={{ padding: '0', overflow: 'hidden' }}>
            <div style={{ padding: '16px 22px', backgroundColor: '#13131b', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }} className="flex-between flex-wrap gap-sm">
              <input
                type="text"
                placeholder="Search audit log by ID, action, approver..."
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                style={{
                  backgroundColor: '#1b1b26',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '8px 14px',
                  fontSize: '12px',
                  color: '#ffffff',
                  width: '340px',
                  maxWidth: '100%',
                  outline: 'none'
                }}
              />
              <span className="mono-sm text-muted" style={{ fontSize: '11px' }}>{filteredRows.length} Log Entries</span>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '12.5px' }}>
                <thead>
                  <tr style={{ backgroundColor: '#101016', borderBottom: '1px solid var(--border-hairline)', color: 'var(--text-muted)' }}>
                    <th style={{ padding: '14px 20px' }}>RECORD ID</th>
                    <th style={{ padding: '14px 20px' }}>ACTION TAKEN</th>
                    <th style={{ padding: '14px 20px' }}>AI ASSISTANT</th>
                    <th style={{ padding: '14px 20px' }}>CAMPUS STAFF APPROVER</th>
                    <th style={{ padding: '14px 20px' }}>DATE &amp; TIME</th>
                    <th style={{ padding: '14px 20px', textAlign: 'right' }}>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRows.map((r, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--border-hairline)', backgroundColor: idx % 2 === 0 ? '#13131c' : '#101016' }}>
                      <td style={{ padding: '14px 20px', fontFamily: 'var(--wl-font-mono)', color: 'var(--accent-orange)' }}>{r.hash}</td>
                      <td style={{ padding: '14px 20px', fontWeight: '700', color: '#ffffff' }}>{r.action}</td>
                      <td style={{ padding: '14px 20px', color: 'var(--text-secondary)' }}>{r.actor}</td>
                      <td style={{ padding: '14px 20px', color: '#ffffff' }}>{r.approver}</td>
                      <td style={{ padding: '14px 20px', color: 'var(--text-muted)', fontSize: '11px' }}>{r.time}</td>
                      <td style={{ padding: '14px 20px', textAlign: 'right' }}>
                        <span className="pill pill-approved" style={{ fontSize: '9px' }}>✓ {r.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* ── BOTTOM CONVERSION CTA ────────────────────────────── */}
      <EnterpriseCTASection 
        eyebrow="ENTERPRISE SECURITY &amp; PROCUREMENT"
        title="Ready to review our institutional compliance pack?"
        description="Download our pre-drafted Data Protection Impact Assessment (DPIA), HECVAT assessment, and standard Data Processing Addendum (DPA) for your CISO and Data Protection Officer."
        primaryText="Access Trust &amp; Procurement Hub"
        primaryLink="/trust"
        secondaryText="View Responsible AI Specification"
        secondaryLink="/responsible-ai"
        secondaryIsExternal={false}
      />

    </div>
  );
}
