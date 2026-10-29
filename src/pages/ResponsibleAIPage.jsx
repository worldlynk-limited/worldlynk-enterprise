import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EnterpriseCTASection from '../components/EnterpriseCTASection';
import {
  ShieldCheck,
  Lock,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Download,
  ExternalLink,
  ArrowRight,
  Eye,
  UserCheck,
  Scale,
  Brain,
  HelpCircle,
  Check
} from 'lucide-react';

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

export default function ResponsibleAIPage() {
  const [activeTab, setActiveTab] = useState('framework');

  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', backgroundColor: 'var(--wl-dark)', color: '#ffffff' }}>
      
      {/* ── HERO BANNER ─────────────────────────────────────────── */}
      <section className="page-hero-banner">
        <div className="main-container">
          <div className="flex-between flex-wrap gap-md" style={{ alignItems: 'center' }}>
            <div style={{ maxWidth: '780px' }}>
              <div className="mono-label" style={{ color: 'var(--accent-orange)', marginBottom: '10px' }}>
                ETHICS, TRANSPARENCY &amp; GOVERNANCE // RESPONSIBLE AI
              </div>
              <h1 className="headline-xl" style={{ marginBottom: '16px', lineHeight: 1.12, textWrap: 'balance' }}>
                Responsible AI built for higher education trust.
              </h1>
              <p className="body-lg text-secondary" style={{ maxWidth: '720px', lineHeight: 1.65 }}>
                How WorldLynk calculates early alerts, ensures algorithmic fairness, preserves student contestability, and keeps human academic judgment at the center of every decision.
              </p>
            </div>

            <div className="flex flex-col gap-sm" style={{ minWidth: '240px' }}>
              <div className="card-elevated" style={{ padding: '20px' }}>
                <div className="mono-label" style={{ color: 'var(--accent-cyan)', fontSize: '10px' }}>GOVERNANCE MODEL</div>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', marginTop: '4px', color: '#ffffff' }}>Human-in-the-Loop</div>
                <div className="mono-sm text-secondary" style={{ fontSize: '11px', marginTop: '2px' }}>UK GDPR Art. 22 Compliant</div>
              </div>
              <a 
                href="/trust" 
                className="btn-secondary btn-sm" 
                style={{ fontSize: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', border: '1px solid rgba(56, 189, 248, 0.35)', background: 'rgba(56, 189, 248, 0.08)' }}
              >
                <FileText size={13} color="#38bdf8" />
                <span style={{ color: '#38bdf8', fontWeight: 600 }}>Download DPIA Template</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 ETHICAL COMMITMENTS ───────────────────────────────── */}
      <section className="section section-spacious" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <div className="main-container">
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>CORE ETHICAL GUARDRAILS</span>
            <h2 className="headline-lg" style={{ marginTop: '6px' }}>
              How we prevent algorithmic bias and overreach.
            </h2>
            <p className="section-desc" style={{ maxWidth: '680px', lineHeight: 1.6 }}>
              Higher education requires standards beyond commercial SaaS. Here is our binding framework.
            </p>
          </div>

          <div className="grid-2 gap-lg mb-3xl">
            {ETHICAL_PILLARS.map((pillar, idx) => (
              <div key={idx} className="card-elevated card-interactive" style={{ padding: '28px' }}>
                <div className="flex-between mb-sm">
                  <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>{pillar.badge}</span>
                  <ShieldCheck size={18} color="var(--accent-emerald)" />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '8px', color: '#ffffff' }}>{pillar.title}</h3>
                <p className="body-sm text-secondary" style={{ lineHeight: 1.65 }}>{pillar.desc}</p>
              </div>
            ))}
          </div>

          {/* ── RISK SCORE TRANSPARENCY & DATA WEIGHTS ────────────── */}
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>EXPLAINABLE AI SPECIFICATION</span>
            <h2 className="headline-lg" style={{ marginTop: '6px' }}>
              What signals calculate the student support index?
            </h2>
            <p className="section-desc" style={{ maxWidth: '680px', lineHeight: 1.6 }}>
              Every score shown on Compass is fully explainable. Tutors see exactly which factors contributed to an alert.
            </p>
          </div>

          <div className="table-scroll-container mb-3xl" style={{ border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '14px', overflow: 'hidden' }}>
            <table className="queue-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '12.5px' }}>
              <thead style={{ backgroundColor: '#13131c', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <tr>
                  <th style={{ padding: '14px 20px', color: '#a1a1aa', fontWeight: 600 }}>Signal Category</th>
                  <th style={{ padding: '14px 20px', color: '#a1a1aa', fontWeight: 600 }}>Model Weight</th>
                  <th style={{ padding: '14px 20px', color: '#a1a1aa', fontWeight: 600 }}>Data Source</th>
                  <th style={{ padding: '14px 20px', color: '#a1a1aa', fontWeight: 600 }}>Trigger Threshold</th>
                  <th style={{ padding: '14px 20px', color: '#a1a1aa', fontWeight: 600 }}>Fairness Safeguard</th>
                </tr>
              </thead>
              <tbody style={{ backgroundColor: '#0d0d14' }}>
                {RISK_FACTORS.map((rf, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #1a1a24' }}>
                    <td style={{ padding: '14px 20px', fontWeight: 600, color: '#ffffff' }}>{rf.factor}</td>
                    <td style={{ padding: '14px 20px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span className="pill pill-approved" style={{ color: 'var(--accent-orange)', borderColor: 'rgba(255,107,0,0.3)', fontWeight: '700' }}>{rf.weight}</span>
                      </div>
                    </td>
                    <td style={{ padding: '14px 20px', color: '#a1a1aa' }}>{rf.source}</td>
                    <td style={{ padding: '14px 20px', color: '#e4e4e7' }}>{rf.description}</td>
                    <td style={{ padding: '14px 20px', color: 'var(--accent-emerald)' }}>{rf.safeguard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── LEGAL BASIS & DPIA PACK ────────────────────────────── */}
          <div className="card-elevated" style={{ padding: '36px', backgroundColor: '#13131c' }}>
            <div className="flex-between flex-wrap gap-md mb-lg">
              <div>
                <span className="mono-label" style={{ color: 'var(--accent-cyan)' }}>DATA PROTECTION IMPACT ASSESSMENT (DPIA)</span>
                <h3 className="headline-md" style={{ margin: '6px 0', color: '#ffffff' }}>Pre-drafted DPIA templates for university DPOs</h3>
                <p className="body-md text-secondary" style={{ maxWidth: '780px', lineHeight: 1.6 }}>
                  Universities process student retention data under UK GDPR Article 6(1)(e) (Public Task) and Article 6(1)(f) (Legitimate Interests). We provide a pre-filled 24-page DPIA template detailing lawful basis, data retention schedules, and Article 22 automated decision-making safeguards.
                </p>
              </div>
              <div className="flex gap-sm">
                <Link to="/trust" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Download size={14} />
                  <span>Access DPO Compliance Pack</span>
                </Link>
              </div>
            </div>

            <div className="grid-3 gap-md">
              <div style={{ backgroundColor: '#0a0a0f', padding: '18px', borderRadius: '10px', border: '1px solid #1c1c28' }}>
                <div className="mono-label" style={{ fontSize: '10px' }}>LAWFUL BASIS</div>
                <div style={{ fontWeight: '700', marginTop: '6px', color: '#ffffff' }}>Public Task / Educational Duty</div>
                <p className="mono-sm text-secondary" style={{ marginTop: '6px', fontSize: '11px', lineHeight: 1.5 }}>Fulfilling statutory duty of student pastoral care &amp; Student visa sponsorship compliance.</p>
              </div>

              <div style={{ backgroundColor: '#0a0a0f', padding: '18px', borderRadius: '10px', border: '1px solid #1c1c28' }}>
                <div className="mono-label" style={{ fontSize: '10px' }}>STUDENT AGENCY</div>
                <div style={{ fontWeight: '700', marginTop: '6px', color: 'var(--accent-emerald)' }}>Full Transparency &amp; Contestability</div>
                <p className="mono-sm text-secondary" style={{ marginTop: '6px', fontSize: '11px', lineHeight: 1.5 }}>Students can inspect their engagement signals in the Student App and appeal flags with 1 click.</p>
              </div>

              <div style={{ backgroundColor: '#0a0a0f', padding: '18px', borderRadius: '10px', border: '1px solid #1c1c28' }}>
                <div className="mono-label" style={{ fontSize: '10px' }}>AI ERROR HANDLING</div>
                <div style={{ fontWeight: '700', marginTop: '6px', color: 'var(--accent-orange)' }}>Zero Disciplinary Automation</div>
                <p className="mono-sm text-secondary" style={{ marginTop: '6px', fontSize: '11px', lineHeight: 1.5 }}>If a signal is false, tutors dismiss it in Compass; feedback updates the institutional baseline threshold.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── BOTTOM CONVERSION CTA ────────────────────────────── */}
      <EnterpriseCTASection 
        eyebrow="RESPONSIBLE AI GOVERNANCE"
        title="Schedule an institutional governance review."
        description="Meet with our AI safety and data protection team. We will review algorithmic safeguards, bias testing results, and audit trails with your Academic Registrar and University Ethics Committee."
        primaryText="Schedule Governance Briefing"
        primaryLink="/demo"
        secondaryText="Explore Trust &amp; Compliance Hub"
        secondaryLink="/trust"
        secondaryIsExternal={false}
      />

    </div>
  );
}
