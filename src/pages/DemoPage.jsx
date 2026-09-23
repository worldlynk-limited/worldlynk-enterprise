import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Building,
  GraduationCap,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Lock,
  UserCheck,
  Send,
  Check
} from 'lucide-react';

const STEP_OPTIONS = {
  1: [
    { id: 'retention', label: 'Student Retention & Early Alerts', desc: 'Predict dropouts 14 days before midterm failure by correlating LMS and attendance.' },
    { id: 'attendance', label: 'Dynamic Sub-180ms QR Attendance', desc: 'Eliminate proxy check-ins and automate UKVI Tier-4 attendance tracking.' },
    { id: 'admissions', label: 'International Admissions & CAS Melt', desc: 'Accelerate inquiry-to-enrollment conversion with 24/7 AI visa guidance.' },
    { id: 'compliance', label: 'UKVI 20-Hour Work-Cap Shield', desc: 'Reconcile student work shifts with university timetables automatically.' }
  ],
  2: [
    { id: 'vc', label: 'Vice-Chancellor / Provost', desc: 'Institutional capacity, tuition yield protection, and board-level risk radar.' },
    { id: 'registrar', label: 'Academic Registrar', desc: 'Degree audits, transcript evaluation, and CAS issuance queues.' },
    { id: 'admissions_lead', label: 'Admissions & Recruitment Lead', desc: 'Offer-holder nurturing, PBSA housing vouchers, and international conversion.' },
    { id: 'compliance_officer', label: 'UKVI Compliance Officer', desc: 'Tier-4 sponsor license protection and audit readiness.' }
  ],
  3: [
    { id: 'missed_lecture', label: 'A Missed Lecture Cascading to Sponsor Risk', desc: 'Follow a single unverified absence through attendance, tutor alerts, and visa checks.' },
    { id: 'transcript_backlog', label: 'Peak-Season International Transcript Backlog', desc: 'Watch agents extract NARIC equivalents and pre-score applicants for staff review.' },
    { id: 'work_hour_conflict', label: 'Student Over-Working Past the 20h UKVI Cap', desc: 'See how real-time calendar reconciliation prevents compliance violations.' }
  ]
};

const TIME_SLOTS = [
  '09:30 AM (London GMT)',
  '11:00 AM (London GMT)',
  '02:00 PM (London GMT)',
  '04:30 PM (London GMT)'
];

export default function DemoPage() {
  const [step, setStep] = useState(1);
  const [selectedTopic, setSelectedTopic] = useState('retention');
  const [selectedRole, setSelectedRole] = useState('vc');
  const [selectedWorkflow, setSelectedWorkflow] = useState('missed_lecture');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(TIME_SLOTS[0]);
  const [formData, setFormData] = useState({ name: '', institution: '', role: '', email: '', date: '2026-09-30', notes: '' });
  const [submitted, setSubmitted] = useState(false);
  const [simulatedActionApproved, setSimulatedActionApproved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getTopicLabel = () => STEP_OPTIONS[1].find(o => o.id === selectedTopic)?.label;
  const getRoleLabel = () => STEP_OPTIONS[2].find(o => o.id === selectedRole)?.label;
  const getWorkflowLabel = () => STEP_OPTIONS[3].find(o => o.id === selectedWorkflow)?.label;

  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', backgroundColor: 'var(--wl-dark)', color: '#ffffff' }}>
      
      {/* ── HERO BANNER ─────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '32px', borderBottom: '1px solid var(--border-hairline)' }}>
        <div className="main-container">
          <div className="flex-between flex-wrap gap-md">
            <div>
              <div className="mono-label" style={{ color: 'var(--accent-orange)', marginBottom: '8px' }}>
                TAILORED CAMPUS PREVIEW // 5-STEP EXECUTIVE WALKTHROUGH
              </div>
              <h1 className="headline-xl" style={{ marginBottom: '12px', lineHeight: 1.15 }}>
                See WorldLynk configured for your institutional stakes.
              </h1>
              <p className="body-lg text-secondary" style={{ maxWidth: '780px' }}>
                Select your office, your greatest operational friction, and your real-world workflow to preview how WorldLynk resolves it in seconds. Schedule an executive technical briefing with our founding architecture team.
              </p>
            </div>

            <div className="flex flex-col gap-sm" style={{ minWidth: '220px' }}>
              <div className="card-dark" style={{ padding: '16px', border: '1px solid var(--border-subtle)' }}>
                <div className="mono-label" style={{ color: 'var(--accent-cyan)', fontSize: '10px' }}>BRIEFING STEP</div>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', marginTop: '2px' }}>Step 0{step} of 05</div>
                <div className="mono-sm text-secondary" style={{ fontSize: '11px' }}>Custom Sandbox Environment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE STEPPER & WORKBENCH ──────────────────────── */}
      <section className="section" style={{ paddingTop: '32px', paddingBottom: '40px' }}>
        <div className="main-container" style={{ maxWidth: '960px' }}>

          {/* Stepper Progress Indicator */}
          <div className="flex-between mb-xl">
            {[1, 2, 3, 4, 5].map((s) => {
              const isActive = step === s;
              const isPast = step > s;
              return (
                <div key={s} style={{ flex: 1, paddingRight: s < 5 ? '8px' : '0' }}>
                  <div style={{
                    height: '4px',
                    borderRadius: '2px',
                    backgroundColor: isActive ? 'var(--accent-orange)' : isPast ? 'var(--status-pass)' : '#232332',
                    transition: 'all 0.3s ease'
                  }} />
                  <div className="mono-sm mt-xs" style={{ fontSize: '9.5px', color: isActive ? 'var(--accent-orange)' : isPast ? 'var(--status-pass)' : 'var(--text-muted)' }}>
                    0{s}. {s === 1 ? 'Focus' : s === 2 ? 'Role' : s === 3 ? 'Scenario' : s === 4 ? 'Sandbox' : 'Book'}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Step Content Card */}
          <div className="card-dark" style={{ padding: '36px', borderRadius: '16px', border: '1px solid var(--border-subtle)', backgroundColor: '#13131c' }}>
            
            {/* ── STEP 1: FOCUS AREA ── */}
            {step === 1 && (
              <div>
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>STEP 01 OF 05</span>
                <h2 className="headline-md" style={{ margin: '6px 0 20px 0' }}>
                  What campus challenge do you want to inspect?
                </h2>
                <div className="grid-2 gap-md mb-xl">
                  {STEP_OPTIONS[1].map((opt) => (
                    <div
                      key={opt.id}
                      onClick={() => setSelectedTopic(opt.id)}
                      style={{
                        padding: '18px',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        backgroundColor: selectedTopic === opt.id ? 'rgba(255,107,0,0.1)' : '#101016',
                        border: selectedTopic === opt.id ? '2px solid var(--accent-orange)' : '1px solid var(--border-subtle)',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <div style={{ fontSize: '14px', fontWeight: '700', color: '#ffffff', marginBottom: '4px' }}>{opt.label}</div>
                      <p className="body-sm text-secondary" style={{ fontSize: '12px', lineHeight: 1.45 }}>{opt.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end">
                  <button onClick={() => setStep(2)} className="btn-primary">
                    Next: Choose Your Role ➔
                  </button>
                </div>
              </div>
            )}

            {/* ── STEP 2: STAKEHOLDER ROLE ── */}
            {step === 2 && (
              <div>
                <span className="mono-label" style={{ color: 'var(--accent-cyan)' }}>STEP 02 OF 05</span>
                <h2 className="headline-md" style={{ margin: '6px 0 20px 0' }}>
                  What role do you hold at your university?
                </h2>
                <div className="grid-2 gap-md mb-xl">
                  {STEP_OPTIONS[2].map((opt) => (
                    <div
                      key={opt.id}
                      onClick={() => setSelectedRole(opt.id)}
                      style={{
                        padding: '18px',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        backgroundColor: selectedRole === opt.id ? 'rgba(56,189,248,0.1)' : '#101016',
                        border: selectedRole === opt.id ? '2px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <div style={{ fontSize: '14px', fontWeight: '700', color: '#ffffff', marginBottom: '4px' }}>{opt.label}</div>
                      <p className="body-sm text-secondary" style={{ fontSize: '12px', lineHeight: 1.45 }}>{opt.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="flex-between">
                  <button onClick={() => setStep(1)} className="btn-secondary">
                    ❮ Back
                  </button>
                  <button onClick={() => setStep(3)} className="btn-primary">
                    Next: Choose Workflow ➔
                  </button>
                </div>
              </div>
            )}

            {/* ── STEP 3: WORKFLOW SCENARIO ── */}
            {step === 3 && (
              <div>
                <span className="mono-label" style={{ color: 'var(--accent-purple)' }}>STEP 03 OF 05</span>
                <h2 className="headline-md" style={{ margin: '6px 0 20px 0' }}>
                  Which signature workflow would you like to test?
                </h2>
                <div className="flex flex-col gap-md mb-xl">
                  {STEP_OPTIONS[3].map((opt) => (
                    <div
                      key={opt.id}
                      onClick={() => setSelectedWorkflow(opt.id)}
                      style={{
                        padding: '18px',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        backgroundColor: selectedWorkflow === opt.id ? 'rgba(192,132,252,0.1)' : '#101016',
                        border: selectedWorkflow === opt.id ? '2px solid var(--accent-purple)' : '1px solid var(--border-subtle)',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <div style={{ fontSize: '14px', fontWeight: '700', color: '#ffffff', marginBottom: '4px' }}>{opt.label}</div>
                      <p className="body-sm text-secondary" style={{ fontSize: '12px', lineHeight: 1.45 }}>{opt.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="flex-between">
                  <button onClick={() => setStep(2)} className="btn-secondary">
                    ❮ Back
                  </button>
                  <button onClick={() => setStep(4)} className="btn-primary">
                    Next: Preview Live Sandbox ➔
                  </button>
                </div>
              </div>
            )}

            {/* ── STEP 4: INTERACTIVE SIMULATION SANDBOX ── */}
            {step === 4 && (
              <div>
                <span className="mono-label" style={{ color: 'var(--status-pass)' }}>STEP 04 OF 05 // LIVE SIMULATION SANDBOX</span>
                <h2 className="headline-md" style={{ margin: '6px 0 8px 0' }}>
                  Simulated Compass Workbench: {getRoleLabel()}
                </h2>
                <p className="body-sm text-secondary mb-lg">
                  Below is how WorldLynk resolves <strong>{getWorkflowLabel()}</strong> in real time under your governance parameters.
                </p>

                {/* Mockup Compass Terminal */}
                <div style={{ backgroundColor: '#0d0d14', padding: '20px', borderRadius: '12px', border: '1px solid var(--border-subtle)', marginBottom: '24px' }}>
                  <div className="flex-between mb-sm" style={{ borderBottom: '1px solid var(--border-hairline)', paddingBottom: '10px' }}>
                    <div className="flex gap-xs alignItems-center">
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--status-pass)' }} />
                      <span className="mono-sm" style={{ fontSize: '11px', color: '#ffffff' }}>UNIPORTAL COMPASS // TELEMETRY ACTIVE</span>
                    </div>
                    <span className="pill pill-held">{simulatedActionApproved ? 'APPROVED & COMMITTED' : 'HELD FOR YOUR REVIEW'}</span>
                  </div>

                  <div className="grid-2 gap-md mt-md">
                    <div style={{ backgroundColor: '#14141e', padding: '14px', borderRadius: '8px' }}>
                      <div className="mono-label" style={{ fontSize: '9px', color: 'var(--accent-orange)' }}>STUDENT DOSSIER</div>
                      <div style={{ fontSize: '13px', fontWeight: '700', marginTop: '2px' }}>Maya Chen (MSc Data Science)</div>
                      <div className="mono-sm text-secondary" style={{ fontSize: '10px' }}>SITS ID: 0091-2847 · Tier-4 CAS: E2948102A</div>
                      <div className="mono-sm mt-xs" style={{ color: 'var(--status-fail)', fontSize: '10px' }}>
                        Signal: 2nd Consecutive Absence in CS-5100 + 16h Weekend Rota
                      </div>
                    </div>

                    <div style={{ backgroundColor: '#14141e', padding: '14px', borderRadius: '8px' }}>
                      <div className="mono-label" style={{ fontSize: '9px', color: 'var(--status-pass)' }}>CORTEX PRE-DRAFTED ACTION</div>
                      <div style={{ fontSize: '12px', color: '#ffffff', marginTop: '2px', lineHeight: 1.4 }}>
                        "Makeup Lab reserved for Thursday 14:00 (EB-04). WhatsApp wellness nudge prepared for student."
                      </div>
                      <div className="mono-sm text-muted mt-xs" style={{ fontSize: '9.5px' }}>
                        Governance Rule: UKVI Policy #74 · Requires Named Human Authority
                      </div>
                    </div>
                  </div>

                  <div className="flex-between mt-lg" style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: '14px' }}>
                    <span className="mono-sm text-muted" style={{ fontSize: '10.5px' }}>
                      {simulatedActionApproved ? '✓ SHA-256 Signature Generated: sha256:8b4f7a2d...d1a9 committed to SITS' : 'Click "Approve" to simulate one-click human clearance'}
                    </span>
                    {!simulatedActionApproved ? (
                      <button
                        onClick={() => setSimulatedActionApproved(true)}
                        className="btn-primary btn-sm"
                        style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                      >
                        <CheckCircle2 size={13} />
                        Approve &amp; Commit (Simulated)
                      </button>
                    ) : (
                      <span className="mono-sm" style={{ color: 'var(--status-pass)', fontWeight: '700' }}>
                        ✓ Action Sealed by {getRoleLabel()}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex-between">
                  <button onClick={() => setStep(3)} className="btn-secondary">
                    ❮ Back
                  </button>
                  <button onClick={() => setStep(5)} className="btn-primary">
                    Next: Schedule Executive Briefing ➔
                  </button>
                </div>
              </div>
            )}

            {/* ── STEP 5: EXECUTIVE BRIEFING SCHEDULER ── */}
            {step === 5 && (
              <div>
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>STEP 05 OF 05 // CONFIRM EXECUTIVE BRIEFING</span>
                <h2 className="headline-md" style={{ margin: '6px 0 8px 0' }}>
                  Request a Dedicated Technical Walkthrough.
                </h2>
                <p className="body-sm text-secondary mb-lg">
                  Meet directly with our Founding Architect and Higher Education Systems Engineers for a tailored demonstration on your campus test data.
                </p>

                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '36px 0' }}>
                    <div className="pill pill-approved mb-md" style={{ fontSize: '12px', padding: '6px 16px' }}>
                      BRIEFING REQUEST CONFIRMED
                    </div>
                    <h3 className="headline-md" style={{ marginBottom: '8px' }}>
                      Thank You, {formData.name}.
                    </h3>
                    <p className="body-md text-secondary" style={{ maxWidth: '580px', margin: '0 auto 24px auto' }}>
                      Your tailored campus briefing for <strong>{formData.institution}</strong> has been assigned to our London Executive Desk for <strong>{formData.date} at {selectedTimeSlot}</strong>. You will receive an encrypted calendar invite within 2 hours.
                    </p>
                    <button onClick={() => { setSubmitted(false); setStep(1); }} className="btn-secondary btn-sm">
                      Start Another Walkthrough
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-md">
                    <div className="grid-2">
                      <div className="form-group">
                        <label className="form-label">Full Name &amp; Title</label>
                        <input
                          type="text"
                          required
                          placeholder="Dr. Eleanor Vance"
                          className="form-input"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Institutional Email</label>
                        <input
                          type="email"
                          required
                          placeholder="e.vance@university.ac.uk"
                          className="form-input"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid-2">
                      <div className="form-group">
                        <label className="form-label">University / Higher Ed Institution</label>
                        <input
                          type="text"
                          required
                          placeholder="University of Edinburgh"
                          className="form-input"
                          value={formData.institution}
                          onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Preferred Date</label>
                        <input
                          type="date"
                          required
                          className="form-input"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Time Slot Selector */}
                    <div>
                      <label className="form-label mb-xs">Select Preferred London Time Slot</label>
                      <div className="grid-2 gap-sm">
                        {TIME_SLOTS.map((slot) => (
                          <div
                            key={slot}
                            onClick={() => setSelectedTimeSlot(slot)}
                            style={{
                              padding: '10px 14px',
                              borderRadius: '8px',
                              cursor: 'pointer',
                              backgroundColor: selectedTimeSlot === slot ? 'var(--accent-orange)' : '#101016',
                              color: selectedTimeSlot === slot ? '#ffffff' : 'var(--text-secondary)',
                              border: '1px solid var(--border-subtle)',
                              fontSize: '11.5px',
                              fontWeight: '600'
                            }}
                          >
                            {slot}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Specific Legacy Systems (e.g. SITS:Vision, Banner, Moodle, Canvas)</label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your campus SIS version or specific UKVI compliance concerns..."
                        className="form-textarea"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      />
                    </div>

                    <div className="flex-between mt-sm">
                      <button type="button" onClick={() => setStep(4)} className="btn-secondary">
                        ❮ Back
                      </button>
                      <button type="submit" className="btn-primary">
                        Confirm Executive Briefing ➔
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}
