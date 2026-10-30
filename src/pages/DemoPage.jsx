import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  CheckCircle2,
  Building,
  GraduationCap,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  Lock,
  UserCheck,
  Send,
  Check,
  FileText,
  Download,
  Zap,
  Sparkles,
  HelpCircle
} from 'lucide-react';

const TOPIC_CHIPS = [
  { id: 'retention', label: 'Early Student Support & Retention' },
  { id: 'compliance', label: 'Student Visa 20h Work Cap Monitoring' },
  { id: 'sits_sync', label: 'SITS:Vision & Moodle Live Sync' },
  { id: 'staff_approvals', label: 'Compass Staff Triage & Approvals' },
  { id: 'housing', label: 'Verified Housing & Digital Key' }
];

const TIME_SLOTS = [
  '09:30 AM (London GMT)',
  '11:00 AM (London GMT)',
  '02:00 PM (London GMT)',
  '04:30 PM (London GMT)'
];

export default function DemoPage() {
  const [step, setStep] = useState(1); // 1 = Details & Focus, 2 = Date & Slot
  const [selectedTopics, setSelectedTopics] = useState(['retention', 'compliance']);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(TIME_SLOTS[0]);
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    role: 'Academic Registrar',
    email: '',
    date: '2026-11-04',
    systems: 'SITS:Vision + Moodle',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleTopic = (id) => {
    setSelectedTopics(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.institution) return;
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      localStorage.setItem('wl_enterprise_demo_booking', JSON.stringify({
        ...formData,
        selectedTopics,
        selectedTimeSlot,
        createdAt: new Date().toISOString()
      }));
    } catch (err) {
      console.warn('LocalStorage unavailable', err);
    }
    setSubmitted(true);
  };

  const isAcUk = formData.email.toLowerCase().includes('.ac.uk') || formData.email.toLowerCase().includes('.edu');

  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', backgroundColor: 'var(--wl-light)', color: '#0c0c0f' }}>
      
      {/* ── HERO BANNER ─────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '36px', borderBottom: '1px solid #d8d4cd' }}>
        <div className="main-container">
          <div className="flex-between flex-wrap gap-md" style={{ alignItems: 'flex-start' }}>
            <div style={{ maxWidth: '820px' }}>
              <div className="mono-label" style={{ color: 'var(--accent-orange)', marginBottom: '8px' }}>
                EXECUTIVE DEMONSTRATION &amp; ARCHITECTURAL REVIEW
              </div>
              <h1 className="headline-xl" style={{ marginBottom: '14px', lineHeight: 1.12, textWrap: 'balance' }}>
                Book an institutional walkthrough.
              </h1>
              <p className="body-lg text-secondary" style={{ maxWidth: '740px', lineHeight: 1.65 }}>
                See how WorldLynk plugs non-invasively into your university’s SITS:Vision, Banner, and Moodle systems to identify at-risk students 14 days earlier, automate UKVI compliance, and save administrative teams thousands of hours.
              </p>
            </div>

            <div className="flex flex-col gap-sm" style={{ minWidth: '240px' }}>
              <div className="card-elevated" style={{ padding: '18px', borderLeft: '3px solid var(--accent-orange)' }}>
                <div className="mono-label" style={{ color: 'var(--accent-orange)', fontSize: '10px' }}>SESSION FORMAT</div>
                <div style={{ fontSize: '1.25rem', fontWeight: '800', marginTop: '2px', color: '#0c0c0f' }}>45-Minute Private Briefing</div>
                <div className="mono-sm text-secondary" style={{ fontSize: '11px', marginTop: '2px' }}>Tailored to your student records &amp; LMS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN WORKSPACE: 2-COLUMN SPLIT ────────────────────────── */}
      <section className="section" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
        <div className="main-container">
          
          <div className="responsive-grid-split" style={{ alignItems: 'start' }}>
            
            {/* Left Column: Interactive 2-Step Form */}
            <div
              className="card-elevated"
              style={{
                padding: '36px',
                borderRadius: '16px',
                border: '1px solid #d8d4cd',
                backgroundColor: '#ffffff',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.03)'
              }}
            >
              {/* Stepper Tabs */}
              <div className="flex-between mb-xl">
                <div style={{ flex: 1, paddingRight: '12px' }}>
                  <div
                    style={{
                      height: '4px',
                      borderRadius: '2px',
                      backgroundColor: step >= 1 ? 'var(--accent-orange)' : '#d8d4cd',
                      transition: 'all 0.3s ease'
                    }}
                  />
                  <div className="mono-sm mt-xs" style={{ fontSize: '10px', color: step >= 1 ? 'var(--accent-orange)' : 'var(--text-muted)' }}>
                    01. Contact &amp; Campus Focus
                  </div>
                </div>

                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      height: '4px',
                      borderRadius: '2px',
                      backgroundColor: step === 2 ? 'var(--accent-orange)' : '#d8d4cd',
                      transition: 'all 0.3s ease'
                    }}
                  />
                  <div className="mono-sm mt-xs" style={{ fontSize: '10px', color: step === 2 ? 'var(--accent-orange)' : 'var(--text-muted)' }}>
                    02. Slot &amp; Confirmation
                  </div>
                </div>
              </div>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '32px 0' }}>
                  <div className="pill pill-approved mb-md" style={{ fontSize: '12px', padding: '6px 16px' }}>
                    <Check size={14} style={{ marginRight: '6px' }} /> WALKTHROUGH CONFIRMED
                  </div>
                  <h2 className="headline-md" style={{ marginBottom: '8px' }}>
                    Walkthrough scheduled for {formData.name}.
                  </h2>
                  <p className="body-md text-secondary" style={{ maxWidth: '480px', margin: '0 auto 24px auto', lineHeight: 1.6 }}>
                    We look forward to meeting with your team at <strong>{formData.institution}</strong> on <strong>{formData.date} at {selectedTimeSlot}</strong>. A calendar invite, meeting link, and technical briefing packet have been sent to <strong>{formData.email}</strong>.
                  </p>
                  <div className="flex gap-md justify-center" style={{ flexWrap: 'wrap' }}>
                    <Link to="/trust" className="btn-secondary btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <ShieldCheck size={14} />
                      <span>Review Trust &amp; DPIA Pack</span>
                    </Link>
                    <Link to="/staff-os" className="btn-primary btn-sm">
                      <span>Explore Compass Staff Triage</span>
                    </Link>
                  </div>
                </div>
              ) : step === 1 ? (
                <form onSubmit={handleNext} className="flex flex-col gap-lg">
                  <div>
                    <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>STEP 01 OF 02</span>
                    <h2 className="headline-md" style={{ margin: '4px 0 6px 0', fontSize: '1.4rem' }}>
                      Tell us about your university priorities.
                    </h2>
                    <p className="body-sm text-secondary">
                      We tailor every demonstration to your current systems and specific departmental goals.
                    </p>
                  </div>

                  {/* Priority Focus Chips */}
                  <div>
                    <label className="form-label" style={{ marginBottom: '8px', display: 'block', fontSize: '12px' }}>
                      What would you like to see during the session? (Select all that apply)
                    </label>
                    <div className="flex gap-xs flex-wrap">
                      {TOPIC_CHIPS.map((chip) => {
                        const isSelected = selectedTopics.includes(chip.id);
                        return (
                          <button
                            key={chip.id}
                            type="button"
                            onClick={() => toggleTopic(chip.id)}
                            style={{
                              padding: '7px 12px',
                              borderRadius: '8px',
                              border: isSelected ? '1px solid var(--accent-orange)' : '1px solid #d8d4cd',
                              backgroundColor: isSelected ? 'rgba(255, 107, 0, 0.08)' : '#f4f1ee',
                              color: isSelected ? '#ff6b00' : '#4b5563',
                              fontSize: '11.5px',
                              fontWeight: isSelected ? '700' : '500',
                              cursor: 'pointer',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px'
                            }}
                          >
                            {isSelected && <Check size={12} />}
                            {chip.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid-2 gap-md">
                    <div>
                      <label className="form-label" style={{ fontSize: '12px' }}>Full Name &amp; Title *</label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. Eleanor Vance (Academic Registrar)"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input"
                        style={{ fontSize: '12.5px' }}
                      />
                    </div>

                    <div>
                      <div className="flex-between mb-xs">
                        <label className="form-label" style={{ fontSize: '12px' }}>Institutional Email *</label>
                        {isAcUk && (
                          <span className="mono-sm" style={{ color: 'var(--accent-emerald)', fontSize: '9px', fontWeight: '700' }}>
                            ✓ Verified Institutional Domain
                          </span>
                        )}
                      </div>
                      <input
                        type="email"
                        required
                        placeholder="e.vance@university.ac.uk"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input"
                        style={{ fontSize: '12.5px' }}
                      />
                    </div>
                  </div>

                  <div className="grid-2 gap-md">
                    <div>
                      <label className="form-label" style={{ fontSize: '12px' }}>University / Higher Education Institution *</label>
                      <input
                        type="text"
                        required
                        placeholder="University of Edinburgh"
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        className="form-input"
                        style={{ fontSize: '12.5px' }}
                      />
                    </div>

                    <div>
                      <label className="form-label" style={{ fontSize: '12px' }}>Your Primary Role</label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="form-input"
                        style={{ fontSize: '12.5px' }}
                      >
                        <option>Academic Registrar / Student Records</option>
                        <option>Vice-Chancellor / Pro-Vice-Chancellor</option>
                        <option>Director of Student Experience &amp; Wellbeing</option>
                        <option>Head of Visa Compliance (Student Route)</option>
                        <option>Director of Admissions &amp; Recruitment</option>
                        <option>CIO / Head of Campus IT Infrastructure</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex-between mt-sm" style={{ borderTop: '1px solid #e5e5e5', paddingTop: '16px' }}>
                    <div className="mono-sm text-secondary" style={{ fontSize: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Lock size={12} color="var(--accent-emerald)" />
                      <span>Zero spam · NDA protected · Institutional data never shared</span>
                    </div>

                    <button type="submit" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <span>Next: Select Date &amp; Time</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-lg">
                  <div>
                    <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>STEP 02 OF 02</span>
                    <h2 className="headline-md" style={{ margin: '4px 0 6px 0', fontSize: '1.4rem' }}>
                      Select your preferred briefing window.
                    </h2>
                    <p className="body-sm text-secondary">
                      Our systems architects run live demonstrations between 09:00 and 18:00 London time.
                    </p>
                  </div>

                  <div className="grid-2 gap-md">
                    <div>
                      <label className="form-label" style={{ fontSize: '12px' }}>Preferred Date</label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="form-input"
                        style={{ fontSize: '12.5px' }}
                      />
                    </div>

                    <div>
                      <label className="form-label" style={{ fontSize: '12px' }}>Time Slot (London GMT)</label>
                      <select
                        value={selectedTimeSlot}
                        onChange={(e) => setSelectedTimeSlot(e.target.value)}
                        className="form-input"
                        style={{ fontSize: '12.5px' }}
                      >
                        {TIME_SLOTS.map((slot, i) => (
                          <option key={i} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="form-label" style={{ fontSize: '12px' }}>Primary Campus Core Systems (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. Tribal SITS:Vision + Moodle + Chapter PBSA"
                      value={formData.systems}
                      onChange={(e) => setFormData({ ...formData, systems: e.target.value })}
                      className="form-input"
                      style={{ fontSize: '12.5px' }}
                    />
                  </div>

                  <div>
                    <label className="form-label" style={{ fontSize: '12px' }}>Any specific questions or focus areas for our engineers?</label>
                    <textarea
                      rows={3}
                      placeholder="e.g. How does the dynamic QR anti-proxy code interact with large lecture theatres?"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="form-input"
                      style={{ fontSize: '12px', resize: 'vertical' }}
                    />
                  </div>

                  <div className="flex-between mt-sm" style={{ borderTop: '1px solid #e5e5e5', paddingTop: '16px' }}>
                    <button type="button" onClick={() => setStep(1)} className="btn-secondary btn-sm">
                      ← Back to Step 1
                    </button>

                    <button type="submit" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <Calendar size={14} />
                      <span>Confirm Institutional Briefing</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: High-Trust Executive Context */}
            <div className="flex flex-col gap-md">
              
              {/* Card 1: What to Expect */}
              <div
                className="card-elevated"
                style={{
                  padding: '28px',
                  borderRadius: '16px',
                  border: '1px solid #d8d4cd',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)'
                }}
              >
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>WHAT TO EXPECT</span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', margin: '4px 0 14px 0' }}>
                  A Technical Briefing, Not a Sales Pitch.
                </h3>
                
                <div className="flex flex-col gap-sm">
                  {[
                    { step: '01', title: 'Live SITS & Banner Connector Test', desc: 'Watch real-time bi-directional synchronization with zero schema modification.' },
                    { step: '02', title: 'Compass Staff Triage in Action', desc: 'Test 1-click approvals for attendance alerts, lab swaps, and visa compliance flags.' },
                    { step: '03', title: 'Student Mobile Super-App Simulation', desc: 'Inspect the 30-second dynamic rotating QR code and 20h work cap ledger.' },
                    { step: '04', title: 'Institutional Retention & ROI Modeling', desc: 'Calculate exact protected tuition revenue modeled on your university cohort size.' }
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <span className="mono-sm" style={{ fontWeight: '800', color: 'var(--accent-orange)', fontSize: '11px', marginTop: '2px' }}>
                        {item.step}
                      </span>
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: '700', color: '#0c0c0f' }}>{item.title}</div>
                        <div className="mono-sm text-secondary" style={{ fontSize: '11px', marginTop: '1px', lineHeight: 1.4 }}>
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 2: Security & DPIA Guarantee */}
              <div
                className="card-elevated"
                style={{
                  padding: '22px',
                  borderRadius: '14px',
                  borderLeft: '4px solid var(--accent-emerald)',
                  backgroundColor: '#ffffff'
                }}
              >
                <div className="flex gap-sm alignItems-center mb-xs">
                  <ShieldCheck size={18} color="var(--accent-emerald)" />
                  <span style={{ fontSize: '13px', fontWeight: '800' }}>Pre-Cleared Compliance Pack</span>
                </div>
                <p className="mono-sm text-secondary" style={{ fontSize: '11px', lineHeight: 1.5 }}>
                  Demonstrations operate exclusively on synthetic Russell Group test cohorts. Pre-cleared UK GDPR Article 35 Data Protection Impact Assessments (DPIA) are available for your university DPO.
                </p>
                <div className="mt-sm">
                  <Link to="/trust" style={{ fontSize: '11px', color: 'var(--accent-emerald)', fontWeight: '700', textDecoration: 'none' }}>
                    Inspect Security Hub &amp; SOC 2 Status ➔
                  </Link>
                </div>
              </div>

              {/* Card 3: Forwardable Executive 1-Pager */}
              <div
                className="card-elevated flex-between"
                style={{
                  padding: '20px 24px',
                  borderRadius: '14px',
                  backgroundColor: '#0c0c0f',
                  color: '#ffffff'
                }}
              >
                <div>
                  <div className="mono-label" style={{ color: 'var(--accent-cyan)', fontSize: '9px' }}>FOR UNIVERSITY COMMITTEES</div>
                  <div style={{ fontSize: '13px', fontWeight: '800', marginTop: '2px' }}>Download Executive Deck</div>
                  <div className="mono-sm text-secondary" style={{ fontSize: '10.5px', color: '#9ca3af' }}>Clean 2-page brief for Registrars &amp; VCs</div>
                </div>
                <a
                  href="/outcomes"
                  className="btn-primary btn-sm"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <Download size={13} />
                  <span>PDF</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}