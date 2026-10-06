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
    summary: 'A student misses a seminar, learning portal activity drops, and work fatigue is evaluated so the personal tutor can offer support early.',
    studentName: 'Maya Chen',
    studentPhoto: '/images/aspiring_student.jpg',
    steps: [
      {
        time: '09:12 AM',
        office: 'Classroom Lecture Hall (EB-02)',
        action: 'Missed Lecture Check-In Detected',
        desc: 'Maya Chen misses check-in for her CS-5100 seminar. The attendance system flags this as a second consecutive absence.',
        actor: 'Attendance Check-In Assistant',
        status: 'FLAGGED',
        humanSummary: {
          event: 'Missed Lecture (CS-5100)',
          location: 'Hall EB-02',
          impact: '2nd consecutive seminar absence',
          urgency: 'Medium — Tutor check-in recommended'
        }
      },
      {
        time: '09:12 AM',
        office: 'Course Learning Portal (Moodle)',
        action: 'Portal Inactivity Corroborated',
        desc: 'WorldLynk checks recent course engagement, noticing no downloads or quiz submissions on CS-5100 in 4 days.',
        actor: 'Learning Engagement Assistant',
        status: 'SYNCED',
        humanSummary: {
          portal: 'Moodle Learning Portal',
          inactivity: '4 days with zero quiz or lab activity',
          modules: 'CS-5100 Distributed Systems',
          urgency: 'Early warning signal confirmed'
        }
      },
      {
        time: '09:12 AM',
        office: 'Student Welfare & Work Schedule',
        action: 'Workload Cross-Check & Fatigue Assessment',
        desc: 'Checking campus work records shows Maya worked a 16-hour cafe shift over the weekend. The assistant identifies fatigue risk rather than disengagement.',
        actor: 'Welfare & Work-Hour Assistant',
        status: 'EVALUATED',
        humanSummary: {
          workload: '16.0 hours logged over weekend',
          diagnosis: 'Temporary study-work fatigue',
          riskLevel: 'Elevated (78%)',
          recommendedAction: 'Offer makeup lab slot rather than formal disciplinary warning'
        }
      },
      {
        time: '09:13 AM',
        office: 'Staff Compass Review Inbox',
        action: 'Prepared for Personal Tutor Review',
        desc: 'Instead of sending an automated warning to the student, WorldLynk prepares a friendly check-in draft and holds it for Dr. Jenkins to review.',
        actor: 'Staff Review Gatekeeper',
        status: 'HELD FOR REVIEW',
        humanSummary: {
          reviewer: 'Dr. R. Jenkins (Senior Tutor)',
          proposedDraft: 'Friendly 1-on-1 check-in + reserved Friday makeup lab slot',
          decision: 'Awaiting tutor approval in Compass',
          automatedSend: 'Blocked until human approves'
        }
      },
      {
        time: '09:14 AM',
        office: 'Senior Tutor & Student Records',
        action: 'One-Click Tutor Approval & Record Updated',
        desc: 'Dr. Jenkins reviews the brief on Compass, approves the makeup lab slot, and a warm message reaches Maya via WhatsApp within 2 minutes.',
        actor: 'Dr. Jenkins & Student Records Sync',
        status: 'APPROVED & RESOLVED',
        humanSummary: {
          approvedBy: 'Dr. R. Jenkins',
          studentChannel: 'Official WhatsApp outreach sent',
          recordUpdate: 'SITS records updated with makeup lab confirmation',
          outcome: 'Student retained with zero stress or punitive action'
        }
      }
    ]
  },
  {
    id: 'work_cap_breach',
    name: 'Scenario B: Visa 20-Hour Work-Cap Shield',
    tag: 'IMMIGRATION & SPONSOR COMPLIANCE',
    summary: 'A student is offered an extra barista shift that would exceed the 20-hour weekly legal limit. WorldLynk spots this immediately and finds a compliant alternative.',
    studentName: 'Maya Chen',
    studentPhoto: '/images/aspiring_student.jpg',
    steps: [
      {
        time: '02:20 PM',
        office: 'Campus Retail Hub',
        action: 'Overtime Shift Offered to Student',
        desc: 'Campus coffee shop manager offers Maya Chen a 6-hour Sunday replacement shift.',
        actor: 'Work Rota Link',
        status: 'INGESTED',
        humanSummary: {
          offeredShift: '6.0 hours on Sunday',
          role: 'Campus Barista',
          source: 'Campus Union coffee shop rota'
        }
      },
      {
        time: '02:20 PM',
        office: 'Visa Work-Hour Rule Check',
        action: 'Weekly Work Hours Evaluated',
        desc: 'WorldLynk adds current weekly logged hours (16h) with the proposed shift (6h) = 22h total, which would breach the 20-hour legal limit by 2 hours.',
        actor: 'Visa Rule Assistant',
        status: 'LIMIT EXCEEDED',
        humanSummary: {
          currentHours: '16.0 hours',
          proposedHours: '22.0 hours total',
          legalLimit: '20.0 hours weekly term-time cap',
          breachPrevented: 'Overtime blocked before acceptance'
        }
      },
      {
        time: '02:20 PM',
        office: 'Student Mobile Companion',
        action: 'Friendly Message Explaining the Limit',
        desc: 'Maya receives a message explaining that accepting 6 hours would exceed her visa work limit, and offering to find a shorter, compliant shift.',
        actor: 'Student Guidance Assistant',
        status: 'INTERCEPTED',
        humanSummary: {
          recipient: 'Maya Chen',
          channel: 'Student Mobile App & WhatsApp',
          guidance: 'Clear explanation of the 20-hour visa regulation',
          alternativeOffered: 'Search for maximum 4.0-hour shift'
        }
      },
      {
        time: '02:21 PM',
        office: 'Campus Jobs & Careers Desk',
        action: 'Compliant 4-Hour Shift Found',
        desc: 'The assistant identifies an open 4-hour Friday shift at the library tech helpdesk, bringing Maya exactly to her 20-hour cap without breaking any rules.',
        actor: 'Campus Job Assistant',
        status: 'RESOLVED',
        humanSummary: {
          replacementShift: '4.0 hours Friday (Library Helpdesk)',
          newWeeklyTotal: '20.0 hours (100% legally compliant)',
          studentEarnings: 'Fully protected without visa risk'
        }
      },
      {
        time: '02:21 PM',
        office: 'Visa Compliance Audit Record',
        action: 'Proactive Sponsor Defense Recorded',
        desc: 'The prevented violation is recorded in the university compliance audit log, demonstrating proactive sponsor license protection for inspections.',
        actor: 'Compliance Audit Assistant',
        status: 'AUDIT LOGGED',
        humanSummary: {
          sponsorLicense: '100% Protected',
          auditEvidence: 'Permanent verifiable record created',
          inspectionStatus: '1-click ready for Home Office sponsor review'
        }
      }
    ]
  },
  {
    id: 'cas_summer_melt',
    name: 'Scenario C: International Offer Holder Summer Melt',
    tag: 'ADMISSIONS & REVENUE RECOVERY',
    summary: 'An accepted international student goes quiet during pre-arrival. WorldLynk spots housing anxiety as the roadblock and coordinates verified student accommodation.',
    studentName: 'Jin-Woo Park',
    studentPhoto: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    steps: [
      {
        time: '11:00 AM',
        office: 'Admissions & Recruitment',
        action: '14-Day Inactivity Signal Detected',
        desc: 'Jin-Woo Park has not completed his pre-arrival visa checklist in 14 days, entering the critical summer drop-off window.',
        actor: 'Admissions Progress Assistant',
        status: 'FLAGGED',
        humanSummary: {
          applicant: 'Jin-Woo Park (BSc Software Engineering)',
          offerStatus: 'Unconditional Offer Accepted',
          inactivity: '14 days without opening visa checklists',
          risk: 'Potential summer drop-off / non-arrival'
        }
      },
      {
        time: '11:00 AM',
        office: 'Applicant Inquiry Analysis',
        action: 'Root Cause Identified: Housing Anxiety',
        desc: 'Reviewing recent student questions reveals repeated searches for student housing in London within a £300/week budget without finding verified options.',
        actor: 'Applicant Care Assistant',
        status: 'DIAGNOSED',
        humanSummary: {
          blocker: 'Unable to find safe student accommodation from abroad',
          studentBudget: 'Up to £300 / week',
          preferredLocation: 'Central London (Bloomsbury)'
        }
      },
      {
        time: '11:00 AM',
        office: 'Verified Student Housing Partner',
        action: 'Verified Room Held for Student',
        desc: 'WorldLynk identifies a guaranteed ensuite room at Scape Bloomsbury (£295/wk) held exclusively for incoming university students.',
        actor: 'Student Housing Assistant',
        status: 'ROOM RESERVED',
        humanSummary: {
          hallOfResidence: 'Scape Bloomsbury (Ensuite Room)',
          weeklyRent: '£295 / week (within student budget)',
          guarantee: '100% verified partner property — zero scam risk'
        }
      },
      {
        time: '11:01 AM',
        office: 'Admissions Team Review',
        action: 'Admissions Officer Reviews Outreach Pack',
        desc: 'Admissions officer K. Bell reviews the personalized room tour and pre-departure guide, approving dispatch with one click.',
        actor: 'K. Bell (Admissions Officer)',
        status: 'APPROVED BY STAFF',
        humanSummary: {
          approvedBy: 'K. Bell (Admissions Lead)',
          dispatchBundle: 'Virtual 3D room tour + direct booking link + visa guide',
          outreachMode: 'WhatsApp message & applicant portal'
        }
      },
      {
        time: '11:45 AM',
        office: 'Student Confirmation & Visa Registry',
        action: 'Room Confirmed & Visa Document Issued',
        desc: 'Jin-Woo books the room with peace of mind. His official visa CAS document is generated and dispatched with zero drop-off.',
        actor: 'Admissions & Visa Sync',
        status: 'ARRIVING ON CAMPUS',
        humanSummary: {
          tuitionProtected: '£24,500 annual tuition fee secured',
          accommodation: 'Confirmed room waiting for student arrival',
          visaDocument: 'CAS document generated and issued',
          result: 'Student arrives on campus with complete confidence'
        }
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
                HOW WORLDLYNK WORKS
              </div>
              <h1 className="headline-xl" style={{ marginBottom: '12px', lineHeight: 1.15 }}>
                One clear system. Every campus team stays in sync.
              </h1>
              <p className="body-lg text-secondary" style={{ maxWidth: '780px' }}>
                No more messy spreadsheets or lost email threads between admissions, tutoring, and visa teams. See how WorldLynk connects everyday campus events with smart, timely actions—all while staff stay in total control.
              </p>
            </div>

            <div className="flex flex-col gap-sm" style={{ minWidth: '220px' }}>
              <div className="card-dark" style={{ padding: '16px', border: '1px solid var(--border-subtle)' }}>
                <div className="mono-label" style={{ color: 'var(--status-pass)', fontSize: '10px' }}>FAST RESOLUTION</div>
                <div style={{ fontSize: '1.3rem', fontWeight: '800', marginTop: '2px' }}>Under 3 Minutes</div>
                <div className="mono-sm text-secondary" style={{ fontSize: '11px' }}>From Flagged Issue to Staff Review</div>
              </div>
              <Link to="/platform" className="btn-primary btn-sm" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <span>Explore Platform Overview</span>
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
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>HOW IT WORKS IN 5 SIMPLE STEPS</span>
            <h2 className="headline-lg" style={{ marginTop: '4px', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '6px' }}>
              <span>Connect</span>
              <ArrowRight size={20} color="var(--accent-orange)" />
              <span>Understand</span>
              <ArrowRight size={20} color="var(--accent-orange)" />
              <span>Draft</span>
              <ArrowRight size={20} color="var(--accent-orange)" />
              <span>Approve</span>
              <ArrowRight size={20} color="var(--accent-orange)" />
              <span>Act &amp; Complete</span>
            </h2>
            <p className="section-desc">
              Whether a student misses a lecture, logs extra work hours, or needs housing support, WorldLynk follows a simple, transparent process.
            </p>
          </div>

          <div className="grid-auto mb-3xl">
            {[
              { num: '01', title: 'CONNECT', sub: 'Zero-Migration Sync', desc: 'WorldLynk reads updates from your existing student records, timetables, and learning management systems with zero migration.', color: 'var(--accent-orange)' },
              { num: '02', title: 'UNDERSTAND', sub: 'Policies & Work Caps', desc: 'AI assistants check university rules, assignment deadlines, and visa regulations so nothing slips through the cracks.', color: 'var(--accent-cyan)' },
              { num: '03', title: 'DRAFT', sub: 'Pre-Written Solutions', desc: 'Specialist assistants draft helpful outreach messages, propose timetable adjustments, or compile student support briefs.', color: 'var(--accent-purple)' },
              { num: '04', title: 'APPROVE', sub: 'Staff Review & Confirmation', desc: 'Every important decision stops at your staff portal. A named team member reviews the details and approves with one click.', color: 'var(--status-held)' },
              { num: '05', title: 'ACT & COMPLETE', sub: 'Safely Update Records', desc: 'Once approved, messages are sent to the student and records are safely updated with a complete audit history.', color: 'var(--status-pass)' }
            ].map((stage, i) => (
              <div key={i} className="card-dark" style={{ padding: '20px', borderRadius: '12px', border: '1px solid var(--border-subtle)', position: 'relative' }}>
                <span className="mono-label" style={{ color: stage.color }}>STEP {stage.num}</span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '800', margin: '4px 0', color: '#ffffff' }}>{stage.title}</h3>
                <div className="mono-sm text-secondary" style={{ fontSize: '10.5px', marginBottom: '8px' }}>{stage.sub}</div>
                <p className="body-sm" style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.45 }}>{stage.desc}</p>
              </div>
            ))}
          </div>

          {/* ── INTERACTIVE EVENT CASCADE SIMULATOR ─────────────────── */}
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>INTERACTIVE WALKTHROUGH</span>
            <h2 className="headline-lg" style={{ marginTop: '4px' }}>
              See how common campus issues get resolved.
            </h2>
            <p className="section-desc">
              Choose a scenario below to see how AI assistants prepare solutions and staff make the final call in minutes.
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
              <span className="pill pill-approved">5-STEP RESOLUTION</span>
            </div>
          </div>

          {/* Master Step-by-Step Execution Workbench */}
          <div className="responsive-grid-split">
            
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
                      <div className="mono-sm text-secondary" style={{ fontSize: '10px', marginTop: '2px' }}>{st.office} · Assistant: {st.actor}</div>
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
              <div className="flex-between mb-sm">
                <div>
                  <span className="mono-label" style={{ color: 'var(--accent-cyan)' }}>STEP DETAILS &amp; RESOLUTION BRIEF</span>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '800', margin: '4px 0 0 0' }}>Step {activeStepIdx + 1}: {step.action}</h3>
                </div>
                {scenario.studentPhoto && (
                  <img
                    src={scenario.studentPhoto}
                    alt={scenario.studentName}
                    style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--accent-orange)' }}
                  />
                )}
              </div>

              <div style={{ backgroundColor: '#0d0d12', padding: '14px', borderRadius: '10px', border: '1px solid #222230', marginBottom: '16px' }}>
                <div className="mono-sm" style={{ fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '6px', color: 'var(--text-secondary)' }}>
                  <div><strong>STUDENT:</strong> <span style={{ color: '#ffffff' }}>{scenario.studentName}</span></div>
                  <div><strong>TIME:</strong> <span style={{ color: '#ffffff' }}>{step.time}</span></div>
                  <div><strong>CAMPUS AREA:</strong> <span style={{ color: '#ffffff' }}>{step.office}</span></div>
                  <div><strong>CAMPUS ASSISTANT:</strong> <span style={{ color: 'var(--accent-orange)' }}>{step.actor}</span></div>
                  <div><strong>OUTCOME:</strong> <span style={{ color: 'var(--status-pass)' }}>{step.status}</span></div>
                </div>
              </div>

              <div className="mono-label" style={{ fontSize: '9.5px', marginBottom: '8px' }}>SUMMARY FOR ADVISORS &amp; STAFF</div>
              <div style={{ backgroundColor: '#060609', padding: '16px', borderRadius: '10px', border: '1px solid #1a1a24', marginBottom: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {step.humanSummary && Object.entries(step.humanSummary).map(([key, value], idx) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #14141e', paddingBottom: '6px' }}>
                      <span className="mono-sm text-secondary" style={{ fontSize: '11px', textTransform: 'capitalize' }}>
                        {key.replace(/([A-Z])/g, ' $1')}:
                      </span>
                      <span style={{ fontSize: '11.5px', fontWeight: '600', color: key.toLowerCase().includes('risk') || key.toLowerCase().includes('breach') ? 'var(--accent-orange)' : '#ffffff' }}>
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Staff Control Guarantee */}
              <div style={{ backgroundColor: '#181822', padding: '14px', borderRadius: '10px', borderLeft: '3px solid var(--status-pass)' }}>
                <div className="mono-label" style={{ fontSize: '9px', color: 'var(--status-pass)' }}>STAFF ALWAYS IN CONTROL</div>
                <p style={{ fontSize: '11.5px', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: 1.45 }}>
                  AI assistants handle the research and drafting, but your university staff always make the final decision. No critical change to a student record or visa status happens without staff approval.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
