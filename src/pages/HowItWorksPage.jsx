import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Database,
  Lock,
  MessageSquare,
  Cpu,
  Layers,
  Terminal,
  Server,
  Zap,
  Check,
  Activity,
  GitCommit
} from 'lucide-react';

const SCENARIOS = [
  {
    id: 'missed_lecture',
    name: 'Scenario A: Missed Lecture & Burnout Risk',
    tag: 'STUDENT PERSISTENCE & RETENTION',
    summary: 'A student misses a mandatory lecture, LMS activity drops, and weekend work fatigue is evaluated by the Supervisor agent before Senior Tutor intervention.',
    steps: [
      {
        time: '09:12:04',
        office: 'Dynamic QR Engine (Classroom EB-02)',
        action: 'Dynamic QR Token Expiry & Attendance Absence',
        desc: 'Rotating cryptographic HMAC token for CS-5100 expires. Maya Chen fails to check in for 2nd consecutive seminar.',
        actor: 'Dynamic QR Worker #3',
        status: 'FLAGGED',
        payload: { "event": "attendance_miss", "student_id": "0091-2847", "module": "CS-5100", "room": "EB-02", "token_delta_ms": 174 }
      },
      {
        time: '09:12:05',
        office: 'Moodle LMS Connector',
        action: 'AES-256 Coursework Inactivity Corroboration',
        desc: 'Fabric queries Moodle proxy, revealing 114 consecutive hours of inactivity on CS-5100 course materials and lab repositories.',
        actor: 'Moodle Connector Client',
        status: 'SYNCED',
        payload: { "event": "lms_poll", "user": "mchen3", "inactivity_hours": 114, "overdue_quizzes": 1, "last_login": "2026-09-17" }
      },
      {
        time: '09:12:07',
        office: 'Nova Supervisor Agent (worldlynk-bot)',
        action: 'Workload Cross-Reference & Risk Assessment',
        desc: 'Cross-referencing campus barista rota reveals a 16h shift schedule. Nova assesses fatigue-induced dropout risk at 78%.',
        actor: 'worldlynk-supervisor-agent & planYourDayAgent',
        status: 'EVALUATED',
        payload: { "agent": "worldlynk-supervisor-agent", "runtime": "nova_mastra_v4", "risk_score": 0.78, "fatigue_index": "high", "work_hours": 16.0, "ukvi_cap": 20.0 }
      },
      {
        time: '09:12:08',
        office: 'Compass Arbiter Governance Gate',
        action: 'Consequential Gate Interception',
        desc: 'Direct automated academic warning blocked. Consequential policy #74 holds intervention for human approval by Senior Tutor Dr. Jenkins on Compass.',
        actor: 'Compass Arbiter Policy Engine',
        status: 'HELD FOR REVIEW',
        payload: { "gate": "consequential_hold", "rule": "pol_74_attendance", "target_approver": "Dr. R. Jenkins", "action": "makeup_lab_offer" }
      },
      {
        time: '09:14:22',
        office: 'Senior Tutor on Compass & SITS:Vision',
        action: 'One-Click Staff Approval & Cryptographic Seal',
        desc: 'Dr. Jenkins reviews Nova brief on Compass and approves makeup lab slot. WhatsApp dispatch sent to student; SITS updated with immutable SHA-256 hash.',
        actor: 'Dr. Jenkins & SITS Sync Engine',
        status: 'SEALED & WRITTEN',
        payload: { "approval": "confirmed", "approver": "Dr. R. Jenkins", "sits_sync": "success", "hash": "sha256:8b4f...d1a9" }
      }
    ]
  },
  {
    id: 'work_cap_breach',
    name: 'Scenario B: UKVI 20-Hour Work-Cap Shield',
    tag: 'IMMIGRATION & SPONSOR COMPLIANCE',
    summary: 'A student is offered an overtime barista shift that would breach the Home Office term-time 20-hour ceiling. Nova intercepts and resolves.',
    steps: [
      {
        time: '14:20:10',
        office: 'Retail Hub Rota Connector',
        action: 'Overtime Shift Offer Ingested',
        desc: 'Campus coffee shop manager posts a 6-hour Sunday replacement shift for Maya Chen.',
        actor: 'Rota Webhook Worker',
        status: 'INGESTED',
        payload: { "shift_date": "2026-09-27", "offered_hours": 6.0, "role": "Barista", "location": "Campus Union" }
      },
      {
        time: '14:20:11',
        office: 'UKVI Tier-4 Rule Engine',
        action: 'Weekly Cumulative Hours Calculation',
        desc: 'Fabric aggregates current week shifts (16.0h) with offered shift (6.0h) = 22.0h total, exceeding the 20.0h legal cap by 2 hours.',
        actor: 'Graph Constraint Validator',
        status: 'BREACH DETECTED',
        payload: { "current_logged": 16.0, "candidate_shift": 6.0, "total_attempt": 22.0, "max_allowed": 20.0, "violation": true }
      },
      {
        time: '14:20:12',
        office: 'Nova Student Copilot',
        action: 'Autonomous Shift Interception & Explanation',
        desc: 'Nova alerts the student via WhatsApp, explaining the Tier-4 visa violation risk and offering to search for a compliant 4.0h alternative.',
        actor: 'novaAssistantAgent',
        status: 'INTERCEPTED',
        payload: { "channel": "whatsapp", "recipient": "mchen3", "message": "Legal cap warning dispatched", "buffer_left": 4.0 }
      },
      {
        time: '14:20:14',
        office: 'Careers Service Job Matcher',
        action: 'Compliant 4-Hour Shift Replacement',
        desc: 'Job Match agent identifies a 4.0h Friday afternoon shift at the library technology helpdesk, keeping weekly hours at exactly 20.0h.',
        actor: 'jobMatchAgent',
        status: 'RECONCILED',
        payload: { "replacement_id": "lib_04", "hours": 4.0, "weekly_total": 20.0, "status": "legal_max" }
      },
      {
        time: '14:21:05',
        office: 'Compliance Audit Ledger',
        action: 'Immutable Compliance Shield Logged',
        desc: 'Prevented breach recorded in compliance ledger, proving proactive sponsor license defense for UKVI inspection visits.',
        actor: 'Arbiter Ledger Worker',
        status: 'SEALED & WRITTEN',
        payload: { "audit_type": "tier4_breach_prevention", "sponsor_safe": true, "hash": "sha256:3c7e...fa21" }
      }
    ]
  },
  {
    id: 'cas_summer_melt',
    name: 'Scenario C: International Offer Holder Summer Melt',
    tag: 'ADMISSIONS & REVENUE RECOVERY',
    summary: 'An international offer holder stops responding during visa filing. Agent detects housing bottleneck and coordinates PBSA booking.',
    steps: [
      {
        time: '11:00:00',
        office: 'Applicant CRM Gateway',
        action: '14-Day Applicant Inactivity Signal',
        desc: 'MSc Data Science offer holder Jin-Woo Park has not opened CAS checklist emails in 14 days, entering high-risk summer melt threshold.',
        actor: 'CRM Ingestion Engine',
        status: 'FLAGGED',
        payload: { "applicant": "jwpark9", "status": "offer_uncond", "inactivity_days": 14, "deposit_paid": true }
      },
      {
        time: '11:00:02',
        office: 'Knowledge Checklist Agent',
        action: 'Bottleneck Root-Cause Diagnosis',
        desc: 'Agent parses student interaction history: student repeatedly searched for ensuite housing in Central London within £300/wk budget.',
        actor: 'knowledgeChecklistAgent',
        status: 'DIAGNOSED',
        payload: { "blocker": "housing_scarcity", "budget_ceiling": 300, "preferred_location": "King's Cross" }
      },
      {
        time: '11:00:05',
        office: 'PBSA Accommodation Matcher',
        action: 'Verified Tenancy Voucher Reserved',
        desc: 'Accommodation agent matches an exclusive university-partnered room at Scape Bloomsbury (£295/wk) and stages reservation.',
        actor: 'accommodationAgent',
        status: 'RESERVED',
        payload: { "hall": "Scape Bloomsbury", "rent_weekly": 295, "lease_terms": "51_weeks", "stripe_escrow": "ready" }
      },
      {
        time: '11:00:08',
        office: 'Admissions Lead Review',
        action: 'Arbiter Gate: Personalized Outreach Approval',
        desc: 'Admissions officer reviews the customized pre-departure bundle with 1-click WhatsApp interactive tour and approves dispatch.',
        actor: 'K. Bell (Admissions)',
        status: 'APPROVED',
        payload: { "dispatch_mode": "whatsapp_interactive", "approver": "k.bell", "content": "3D room tour + CAS brief" }
      },
      {
        time: '11:45:12',
        office: 'Stripe Escrow & SITS Registry',
        action: 'Tenancy Deposit Paid & CAS Generated',
        desc: 'Applicant books room via Stripe; CAS document generated and pushed to Home Office SMS portal with zero summer melt.',
        actor: 'Stripe Hook & SITS CAS Sync',
        status: 'SEALED & WRITTEN',
        payload: { "tuition_protected": 24500, "housing_booked": true, "cas_issued": "E1948201B", "hash": "sha256:7f2a...88e1" }
      }
    ]
  }
];

export default function HowItWorksPage() {
  const [selectedScenarioIdx, setSelectedScenarioIdx] = useState(0);
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  const scenario = SCENARIOS[selectedScenarioIdx];
  const step = scenario.steps[activeStepIdx] || scenario.steps[0];

  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', backgroundColor: 'var(--wl-dark)', color: '#ffffff' }}>
      
      {/* ── HERO BANNER ─────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '32px', borderBottom: '1px solid var(--border-hairline)' }}>
        <div className="main-container">
          <div className="flex-between flex-wrap gap-md">
            <div>
              <div className="mono-label" style={{ color: 'var(--accent-orange)', marginBottom: '8px' }}>
                HOW IT WORKS // THE CONTINUOUS OPERATIONAL LOOP
              </div>
              <h1 className="headline-xl" style={{ marginBottom: '12px', lineHeight: 1.15 }}>
                A change happens once. Every campus office reacts in milliseconds.
              </h1>
              <p className="body-lg text-secondary" style={{ maxWidth: '780px' }}>
                No disconnected spreadsheets. No telephone tag between admissions and tutoring. No weeks of delay before academic struggles become visa risks. Follow the exact real-time lifecycle of an institutional event across the WorldLynk Agentic Campus.
              </p>
            </div>

            <div className="flex flex-col gap-sm" style={{ minWidth: '220px' }}>
              <div className="card-dark" style={{ padding: '16px', border: '1px solid var(--border-subtle)' }}>
                <div className="mono-label" style={{ color: 'var(--status-pass)', fontSize: '10px' }}>OPERATIONAL GUARANTEE</div>
                <div style={{ fontSize: '1.3rem', fontWeight: '800', marginTop: '2px' }}>Sub-3 Minute</div>
                <div className="mono-sm text-secondary" style={{ fontSize: '11px' }}>Incident-to-Resolution Average</div>
              </div>
              <Link to="/platform" className="btn-primary btn-sm" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <span>Explore 4-Layer Architecture</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE 5-STAGE CONTINUOUS OPERATING LOOP ────────────────── */}
      <section className="section" style={{ paddingTop: '40px', paddingBottom: '32px' }}>
        <div className="main-container">
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>THE 5-STAGE EVENT LIFECYCLE</span>
            <h2 className="headline-lg" style={{ marginTop: '4px' }}>
              Read ➔ Understand ➔ Draft ➔ Approve ➔ Act &amp; Log
            </h2>
            <p className="section-desc">
              Every single signal—whether an attendance check-in, an LMS quiz submission, or a shift offer—flows through this rigorous, deterministic governance loop.
            </p>
          </div>

          <div className="grid-auto mb-3xl">
            {[
              { num: '01', title: 'READ', sub: 'Zero-Migration Ingest', desc: 'Fabric captures raw events from legacy SIS, Moodle, and dynamic QR scanners behind the university VPC boundary.', color: 'var(--accent-orange)' },
              { num: '02', title: 'UNDERSTAND', sub: 'Graph & Constraints', desc: 'The Agent Graph correlates the signal against student history, timetables, and Home Office UKVI 20h regulations.', color: 'var(--accent-cyan)' },
              { num: '03', title: 'DRAFT', sub: 'Mastra Agent Synthesis', desc: 'Specialized sub-agents pre-draft the intervention notice, schedule swap, or CAS equivalency document.', color: 'var(--accent-purple)' },
              { num: '04', title: 'APPROVE', sub: 'The Arbiter Gate', desc: 'Consequential decisions halt in the staff terminal. A named staff member reviews evidence and approves with one click.', color: 'var(--status-held)' },
              { num: '05', title: 'ACT & LOG', sub: 'Cryptographic Commit', desc: 'The approved change writes back to SITS:Vision and Moodle with a tamper-evident SHA-256 audit timestamp.', color: 'var(--status-pass)' }
            ].map((stage, i) => (
              <div key={i} className="card-dark" style={{ padding: '20px', borderRadius: '12px', border: '1px solid var(--border-subtle)', position: 'relative' }}>
                <span className="mono-label" style={{ color: stage.color }}>STAGE {stage.num}</span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '800', margin: '4px 0', color: '#ffffff' }}>{stage.title}</h3>
                <div className="mono-sm text-secondary" style={{ fontSize: '10.5px', marginBottom: '8px' }}>{stage.sub}</div>
                <p className="body-sm" style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.45 }}>{stage.desc}</p>
              </div>
            ))}
          </div>

          {/* ── INTERACTIVE EVENT CASCADE SIMULATOR ─────────────────── */}
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>INTERACTIVE EVENT CASCADE SIMULATOR</span>
            <h2 className="headline-lg" style={{ marginTop: '4px' }}>
              Simulate Real Campus Incidents in Real Time.
            </h2>
            <p className="section-desc">
              Choose a scenario below to trace how autonomous agent preparation and the Arbiter consequential gate resolve cross-department crises in under 3 minutes.
            </p>
          </div>

          {/* Scenario Selector Ribbon */}
          <div className="flex gap-sm mb-lg flex-wrap">
            {SCENARIOS.map((sc, idx) => (
              <button
                key={sc.id}
                onClick={() => {
                  setSelectedScenarioIdx(idx);
                  setActiveStepIdx(0);
                }}
                className="tab-btn"
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  backgroundColor: selectedScenarioIdx === idx ? 'var(--accent-orange)' : '#161622',
                  color: selectedScenarioIdx === idx ? '#ffffff' : 'var(--text-secondary)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '12px',
                  fontWeight: '700'
                }}
              >
                {sc.name.split(':')[0]} // {sc.tag}
              </button>
            ))}
          </div>

          {/* Active Scenario Overview Card */}
          <div className="card-dark mb-xl" style={{ padding: '20px', borderRadius: '12px', border: '1px solid var(--border-subtle)', backgroundColor: '#13131b' }}>
            <div className="flex-between flex-wrap gap-sm">
              <div>
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>{scenario.tag}</span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginTop: '2px' }}>{scenario.name}</h3>
                <p className="body-sm text-secondary" style={{ marginTop: '4px' }}>{scenario.summary}</p>
              </div>
              <span className="pill pill-approved">5-STAGE DOMINO EXECUTION</span>
            </div>
          </div>

          {/* Master Step-by-Step Execution Workbench */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '24px', alignItems: 'start' }}>
            
            {/* Timeline Stepper */}
            <div className="card-dark" style={{ padding: '24px', borderRadius: '14px', border: '1px solid var(--border-subtle)' }}>
              <span className="mono-label" style={{ color: 'var(--text-muted)' }}>INCIDENT TIME SEQUENCE (CLICK STEP TO INSPECT)</span>
              
              <div className="flex flex-col gap-sm mt-md">
                {scenario.steps.map((st, idx) => {
                  const isCurrent = activeStepIdx === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveStepIdx(idx)}
                      style={{
                        backgroundColor: isCurrent ? 'rgba(255,107,0,0.1)' : '#101016',
                        border: isCurrent ? '2px solid var(--accent-orange)' : '1px solid var(--border-hairline)',
                        borderRadius: '10px',
                        padding: '14px',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <div className="flex-between mb-xs">
                        <span className="mono-sm" style={{ color: 'var(--accent-orange)', fontWeight: '700', fontSize: '11px' }}>{st.time}</span>
                        <span className={`pill ${st.status.includes('HELD') ? 'pill-held' : st.status.includes('FLAGGED') ? 'pill-flagged' : 'pill-approved'}`} style={{ fontSize: '9px' }}>
                          {st.status}
                        </span>
                      </div>
                      <div style={{ fontSize: '13px', fontWeight: '700', color: '#ffffff' }}>{st.action}</div>
                      <div className="mono-sm text-secondary" style={{ fontSize: '10px', marginTop: '2px' }}>{st.office} · Actor: {st.actor}</div>
                      <p style={{ fontSize: '11.5px', color: 'var(--text-secondary)', marginTop: '6px', lineHeight: 1.4 }}>
                        {st.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Live Packet & Ledger Hash Inspector */}
            <div className="card-dark" style={{ padding: '24px', borderRadius: '14px', border: '1px solid var(--border-subtle)', backgroundColor: '#13131c' }}>
              <span className="mono-label" style={{ color: 'var(--accent-cyan)' }}>REAL-TIME PACKET &amp; LEDGER INSPECTOR</span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', margin: '4px 0 12px 0' }}>Step {activeStepIdx + 1}: {step.action}</h3>

              <div style={{ backgroundColor: '#0d0d12', padding: '14px', borderRadius: '10px', border: '1px solid #222230', marginBottom: '16px' }}>
                <div className="mono-sm" style={{ fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '6px', color: 'var(--text-secondary)' }}>
                  <div><strong>TIMESTAMP:</strong> <span style={{ color: '#ffffff' }}>2026-09-23T{step.time}.000Z</span></div>
                  <div><strong>CAMPUS OFFICE:</strong> <span style={{ color: '#ffffff' }}>{step.office}</span></div>
                  <div><strong>RESPONSIBLE ACTOR:</strong> <span style={{ color: 'var(--accent-orange)' }}>{step.actor}</span></div>
                  <div><strong>GOVERNANCE STATUS:</strong> <span style={{ color: 'var(--status-pass)' }}>{step.status}</span></div>
                </div>
              </div>

              <div className="mono-label" style={{ fontSize: '9.5px', marginBottom: '6px' }}>INTER-AGENT BUS PAYLOAD</div>
              <div style={{ backgroundColor: '#060609', padding: '14px', borderRadius: '10px', border: '1px solid #1a1a24', marginBottom: '16px' }}>
                <pre style={{ margin: 0, fontSize: '11px', color: 'var(--accent-cyan)', fontFamily: 'var(--wl-font-mono)', lineHeight: 1.5, overflowX: 'auto' }}>
                  {JSON.stringify(step.payload, null, 2)}
                </pre>
              </div>

              {/* Arbiter Gate Explanation */}
              <div style={{ backgroundColor: '#181822', padding: '14px', borderRadius: '10px', borderLeft: '3px solid var(--status-pass)' }}>
                <div className="mono-label" style={{ fontSize: '9px', color: 'var(--status-pass)' }}>THE ARBITER GUARANTEE</div>
                <p style={{ fontSize: '11.5px', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: 1.45 }}>
                  Notice that at no point in this domino cascade can an unverified AI make an irrevocable mark on the student's legal academic record. Evidence is gathered in milliseconds; the final seal is held for authorized staff.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
