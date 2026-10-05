import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '32px', borderBottom: '1px solid var(--border-hairline)' }}>
        <div className="main-container">
          <div className="flex-between flex-wrap gap-md">
            <div>
              <div className="mono-label" style={{ color: 'var(--accent-orange)', marginBottom: '8px' }}>
                DATA PRIVACY &amp; SECURITY // FERPA &amp; UK GDPR COMPLIANCE
              </div>
              <h1 className="headline-xl" style={{ marginBottom: '12px', lineHeight: 1.15 }}>
                Bank-grade privacy. Zero AI training on student data.
              </h1>
              <p className="body-lg text-secondary" style={{ maxWidth: '780px' }}>
                Your student data stays yours. WorldLynk keeps all university data in isolated, encrypted cloud vaults. Personal details are automatically stripped before reaching AI models, and every staff action is clearly logged.
              </p>
            </div>

            <div className="flex flex-col gap-sm" style={{ minWidth: '220px' }}>
              <div className="card-dark" style={{ padding: '16px', border: '1px solid var(--border-subtle)' }}>
                <div className="mono-label" style={{ color: 'var(--status-pass)', fontSize: '10px' }}>GUARANTEE</div>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', marginTop: '2px' }}>Zero LLM Training</div>
                <div className="mono-sm text-secondary" style={{ fontSize: '11px' }}>Contractually Enforced by SLA</div>
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
      <section className="section" style={{ paddingTop: '40px', paddingBottom: '32px' }}>
        <div className="main-container">
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>INTERACTIVE PRIVACY DEMO</span>
            <h2 className="headline-lg" style={{ marginTop: '4px' }}>
              How We Protect Student Data in 5 Steps.
            </h2>
            <p className="section-desc">
              Personal details never reach external AI models. Click the button below to see how student names, passports, and contact info are automatically replaced with anonymous tokens before processing.
            </p>
          </div>

          <div className="card-dark mb-3xl" style={{ padding: '32px', borderRadius: '16px', border: '1px solid var(--border-subtle)', backgroundColor: '#13131c' }}>
            <div className="flex-between flex-wrap gap-md mb-lg">
              <div>
                <span className="mono-label" style={{ color: 'var(--accent-cyan)' }}>LIVE EGRESS PRIVACY SIMULATOR</span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginTop: '2px' }}>
                  {tokenized ? 'Stage 03: Anonymized Data (Ready for AI)' : 'Stage 01: Original Record Behind University Firewall'}
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

            <div className="responsive-grid-split-equal">
              {/* Raw View */}
              <div style={{ backgroundColor: '#0d0d14', padding: '20px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                <div className="flex-between mb-sm">
                  <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>CAMPUS INTERNAL RECORD</span>
                  <span className="pill pill-flagged" style={{ fontSize: '8.5px' }}>CONTAINS PERSONAL INFO</span>
                </div>
                <pre style={{ margin: 0, fontSize: '11px', color: '#ffffff', fontFamily: 'var(--wl-font-mono)', lineHeight: 1.5, overflowX: 'auto' }}>
                  {JSON.stringify(RAW_STUDENT_DATA, null, 2)}
                </pre>
              </div>

              {/* Masked Output */}
              <div style={{ backgroundColor: '#060609', padding: '20px', borderRadius: '12px', border: tokenized ? '1px solid var(--status-pass)' : '1px solid #1a1a24' }}>
                <div className="flex-between mb-sm">
                  <span className="mono-label" style={{ color: 'var(--status-pass)' }}>DATA SENT TO AI MODEL</span>
                  <span className={`pill ${tokenized ? 'pill-approved' : 'pill-held'}`} style={{ fontSize: '8.5px' }}>
                    {tokenized ? 'ANONYMIZED' : 'READY TO ANONYMIZE'}
                  </span>
                </div>
                <pre style={{ margin: 0, fontSize: '11px', color: tokenized ? 'var(--accent-cyan)' : 'var(--text-muted)', fontFamily: 'var(--wl-font-mono)', lineHeight: 1.5, overflowX: 'auto' }}>
                  {tokenized
                    ? JSON.stringify(TOKENIZED_PAYLOAD, null, 2)
                    : '// Click "Anonymize Data for AI" above\n// to preview the protected data sent to AI.'}
                </pre>
              </div>
            </div>

            <div className="mono-sm text-secondary mt-lg" style={{ fontSize: '11px', borderTop: '1px solid var(--border-hairline)', paddingTop: '16px' }}>
              ✓ <strong>Zero Student Identifiers Shared:</strong> AI models never see real names, contact numbers, or passport IDs. Real identities only display inside your staff members\' authorized accounts.
            </div>
          </div>

          {/* ── DEFENSE-IN-DEPTH SECURITY MATRIX ─────────────────────── */}
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>MULTI-LAYERED PROTECTION</span>
            <h2 className="headline-lg" style={{ marginTop: '4px' }}>
              How We Keep Your Campus Data Secure.
            </h2>
          </div>

          <div className="grid-3 mb-3xl">
            <div className="card-dark" style={{ padding: '24px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
              <div className="flex gap-xs alignItems-center mb-xs">
                <Lock size={16} color="var(--accent-orange)" />
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>LAYER 01: DATA STORAGE</span>
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '800', margin: '4px 0 8px 0' }}>Dedicated Encryption Keys</h3>
              <p className="body-sm text-secondary mb-md">
                Each university gets its own isolated database encrypted with dedicated AES-256 keys, ensuring complete separation between institutions.
              </p>
              <div className="mono-sm text-muted" style={{ fontSize: '10px' }}>
                FIPS 140-2 Level 3 Certified Hardware
              </div>
            </div>

            <div className="card-dark" style={{ padding: '24px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
              <div className="flex gap-xs alignItems-center mb-xs">
                <Server size={16} color="var(--accent-cyan)" />
                <span className="mono-label" style={{ color: 'var(--accent-cyan)' }}>LAYER 02: DATA IN TRANSIT</span>
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '800', margin: '4px 0 8px 0' }}>Secure Encrypted Connections</h3>
              <p className="body-sm text-secondary mb-md">
                All communication between campus databases, student systems, and WorldLynk is encrypted with modern TLS 1.3 standards.
              </p>
              <div className="mono-sm text-muted" style={{ fontSize: '10px' }}>
                Strict HSTS Enabled with Verified Certificates
              </div>
            </div>

            <div className="card-dark" style={{ padding: '24px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
              <div className="flex gap-xs alignItems-center mb-xs">
                <ShieldCheck size={16} color="var(--status-pass)" />
                <span className="mono-label" style={{ color: 'var(--status-pass)' }}>LAYER 03: AI MODEL SAFETY</span>
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '800', margin: '4px 0 8px 0' }}>Zero AI Model Training</h3>
              <p className="body-sm text-secondary mb-md">
                Strict enterprise agreements guarantee that AI providers never store, log, or train models on any of your university's prompts or student records.
              </p>
              <div className="mono-sm text-muted" style={{ fontSize: '10px' }}>
                Contractual Guarantee &amp; Data Erasure Proofs
              </div>
            </div>
          </div>

          {/* ── IMMUTABLE AUDIT LEDGER VIEWER ────────────────────────── */}
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>ACTIVITY AUDIT TRAIL</span>
            <h2 className="headline-lg" style={{ marginTop: '4px' }}>
              Complete, Tamper-Evident Activity Log.
            </h2>
            <p className="section-desc">
              Every staff approval, attendance check, and visa alert creates a permanent, searchable audit record so your team always knows who approved what and when.
            </p>
          </div>

          <div className="card-dark mb-3xl" style={{ padding: '0', borderRadius: '14px', overflow: 'hidden', border: '1px solid var(--border-subtle)' }}>
            <div style={{ padding: '14px 20px', backgroundColor: '#13131b', borderBottom: '1px solid var(--border-hairline)' }} className="flex-between">
              <input
                type="text"
                placeholder="Search audit log by ID, action, approver..."
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                style={{
                  backgroundColor: '#1b1b26',
                  border: '1px solid var(--border-hairline)',
                  borderRadius: '6px',
                  padding: '6px 12px',
                  fontSize: '11.5px',
                  color: '#ffffff',
                  width: '320px',
                  maxWidth: '100%',
                  outline: 'none'
                }}
              />
              <span className="mono-sm text-muted" style={{ fontSize: '10.5px' }}>{filteredRows.length} Log Entries</span>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '12px' }}>
                <thead>
                  <tr style={{ backgroundColor: '#101016', borderBottom: '1px solid var(--border-hairline)', color: 'var(--text-muted)' }}>
                    <th style={{ padding: '12px 18px' }}>RECORD ID</th>
                    <th style={{ padding: '12px 18px' }}>ACTION TAKEN</th>
                    <th style={{ padding: '12px 18px' }}>AI ASSISTANT</th>
                    <th style={{ padding: '12px 18px' }}>CAMPUS STAFF APPROVER</th>
                    <th style={{ padding: '12px 18px' }}>DATE &amp; TIME</th>
                    <th style={{ padding: '12px 18px', textAlign: 'right' }}>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRows.map((r, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--border-hairline)', backgroundColor: idx % 2 === 0 ? '#13131c' : '#101016' }}>
                      <td style={{ padding: '12px 18px', fontFamily: 'var(--wl-font-mono)', color: 'var(--accent-orange)' }}>{r.hash}</td>
                      <td style={{ padding: '12px 18px', fontWeight: '700', color: '#ffffff' }}>{r.action}</td>
                      <td style={{ padding: '12px 18px', color: 'var(--text-secondary)' }}>{r.actor}</td>
                      <td style={{ padding: '12px 18px', color: '#ffffff' }}>{r.approver}</td>
                      <td style={{ padding: '12px 18px', color: 'var(--text-muted)', fontSize: '11px' }}>{r.time}</td>
                      <td style={{ padding: '12px 18px', textAlign: 'right' }}>
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

    </div>
  );
}
