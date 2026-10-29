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
  Check,
  FileText,
  Play,
  Download
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
    systems: '',
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
    setSubmitted(true);
  };

  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', backgroundColor: 'var(--wl-dark)', color: '#ffffff' }}>
      
      {/* ── HERO BANNER ─────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '32px', borderBottom: '1px solid var(--border-hairline)' }}>
        <div className="main-container">
          <div className="flex-between flex-wrap gap-md">
            <div>
              <div className="mono-label" style={{ color: 'var(--accent-orange)', marginBottom: '8px' }}>
                INSTITUTIONAL BRIEFING &amp; LIVE DEMO
              </div>
              <h1 className="headline-xl" style={{ marginBottom: '12px', lineHeight: 1.15 }}>
                Book an executive demonstration.
              </h1>
              <p className="body-lg text-secondary" style={{ maxWidth: '780px' }}>
                See how WorldLynk connects with your university’s SITS:Vision, Banner, and Moodle systems to support students earlier, protect visa compliance, and save staff time.
              </p>
            </div>

            {/* Forwardable Assets / Low-Commitment Paths */}
            <div className="flex flex-col gap-sm" style={{ minWidth: '240px' }}>
              <div className="card-dark" style={{ padding: '16px', border: '1px solid var(--border-subtle)' }}>
                <div className="mono-label" style={{ color: 'var(--accent-cyan)', fontSize: '10px' }}>FORWARDABLE BRIEFING</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '700', marginTop: '2px' }}>Committee 1-Pager</div>
                <div className="mono-sm text-secondary" style={{ fontSize: '11px', marginBottom: '8px' }}>For Vice-Chancellors &amp; Registrars</div>
                <a 
                  href="/outcomes" 
                  className="btn-secondary btn-sm" 
                  style={{ width: '100%', fontSize: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                >
                  <Download size={12} />
                  <span>Download Executive Deck (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2-STEP FAST CONVERSION WORKBENCH ───────────────────── */}
      <section className="section" style={{ paddingTop: '32px', paddingBottom: '60px' }}>
        <div className="main-container" style={{ maxWidth: '860px' }}>

          {/* Stepper Indicator */}
          <div className="flex-between mb-xl">
            <div style={{ flex: 1, paddingRight: '12px' }}>
              <div style={{
                height: '4px',
                borderRadius: '2px',
                backgroundColor: step >= 1 ? 'var(--accent-orange)' : '#232332',
                transition: 'all 0.3s ease'
              }} />
              <div className="mono-sm mt-xs" style={{ fontSize: '10px', color: step >= 1 ? 'var(--accent-orange)' : 'var(--text-muted)' }}>
                01. Contact &amp; Session Focus
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <div style={{
                height: '4px',
                borderRadius: '2px',
                backgroundColor: step === 2 ? 'var(--accent-orange)' : '#232332',
                transition: 'all 0.3s ease'
              }} />
              <div className="mono-sm mt-xs" style={{ fontSize: '10px', color: step === 2 ? 'var(--accent-orange)' : 'var(--text-muted)' }}>
                02. Date, Time &amp; Confirmation
              </div>
            </div>
          </div>

          <div className="card-dark" style={{ padding: '36px', borderRadius: '16px', border: '1px solid var(--border-subtle)', backgroundColor: '#13131c' }}>
            
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <div className="pill pill-approved mb-md" style={{ fontSize: '12px', padding: '6px 16px' }}>
                  <Check size={14} style={{ marginRight: '6px' }} /> DEMO BRIEFING CONFIRMED
                </div>
                <h2 className="headline-md" style={{ marginBottom: '8px' }}>
                  Walkthrough scheduled for {formData.name}.
                </h2>
                <p className="body-md text-secondary" style={{ maxWidth: '580px', margin: '0 auto 24px auto', lineHeight: 1.6 }}>
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
                  <h2 className="headline-md" style={{ margin: '6px 0 6px 0' }}>
                    Tell us about your university and priorities.
                  </h2>
                  <p className="body-sm text-secondary">
                    We tailor every demonstration to your current systems and specific departmental goals.
                  </p>
                </div>

                {/* Priority Focus Chips */}
                <div>
                  <label className="form-label" style={{ marginBottom: '8px', display: 'block' }}>
                    What would you like to see during the session? (Select all that apply)
                  </label>
                  <div className="flex gap-xs flex-wrap">
                    {TOPIC_CHIPS.map(chip => {
                      const isSelected = selectedTopics.includes(chip.id);
                      return (
                        <button
                          key={chip.id}
                          type="button"
                          onClick={() => toggleTopic(chip.id)}
                          style={{
                            padding: '8px 14px',
                            borderRadius: '20px',
                            border: isSelected ? '1px solid var(--accent-orange)' : '1px solid rgba(255, 255, 255, 0.12)',
                            backgroundColor: isSelected ? 'rgba(255, 107, 0, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                            color: isSelected ? '#ffffff' : '#9ca3af',
                            fontSize: '12px',
                            fontWeight: isSelected ? '600' : '400',
                            cursor: 'pointer',
                            transition: 'all 0.15s ease'
                          }}
                        >
                          {isSelected && <Check size={12} style={{ display: 'inline', marginRight: '4px' }} />}
                          {chip.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid-2 gap-md">
                  <div className="form-group">
                    <label className="form-label">Full Name &amp; Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Eleanor Vance (Academic Registrar)"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Institutional Work Email *</label>
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

                <div className="grid-2 gap-md">
                  <div className="form-group">
                    <label className="form-label">University / Higher Education Institution *</label>
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
                    <label className="form-label">Your Primary Role</label>
                    <select
                      className="form-input"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    >
                      <option>Academic Registrar / Student Records</option>
                      <option>Vice-Chancellor / Pro-Vice-Chancellor / Executive</option>
                      <option>Director of International Recruitment &amp; Admissions</option>
                      <option>Head of Student Visa Compliance (UKVI)</option>
                      <option>CIO / CTO / IT &amp; Enterprise Architecture</option>
                      <option>Dean of Faculty / Senior Academic Tutor</option>
                    </select>
                  </div>
                </div>

                <div className="flex-between mt-sm" style={{ alignItems: 'center' }}>
                  <div className="mono-sm text-secondary" style={{ fontSize: '11px' }}>
                    <ShieldCheck size={13} style={{ display: 'inline', marginRight: '4px', color: 'var(--accent-emerald)' }} />
                    Zero spam · NDA protected · Institutional data never shared
                  </div>
                  <button type="submit" className="btn-primary" style={{ padding: '0.85rem 1.75rem' }}>
                    <span>Next: Select Date &amp; Time</span>
                    <ArrowRight size={14} style={{ marginLeft: '6px' }} />
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-lg">
                <div>
                  <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>STEP 02 OF 02</span>
                  <h2 className="headline-md" style={{ margin: '6px 0 6px 0' }}>
                    Choose your walkthrough date and time.
                  </h2>
                  <p className="body-sm text-secondary">
                    Demonstration for <strong>{formData.name}</strong> at <strong>{formData.institution}</strong>.
                  </p>
                </div>

                <div className="grid-2 gap-md">
                  <div className="form-group">
                    <label className="form-label">Preferred Date *</label>
                    <input
                      type="date"
                      required
                      className="form-input"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Current Campus Systems (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. SITS:Vision, Moodle, Banner, Canvas"
                      className="form-input"
                      value={formData.systems}
                      onChange={(e) => setFormData({ ...formData, systems: e.target.value })}
                    />
                  </div>
                </div>

                {/* Time Slot Selector */}
                <div>
                  <label className="form-label mb-xs" style={{ display: 'block' }}>Select Preferred London GMT Time Slot</label>
                  <div className="grid-2 gap-sm">
                    {TIME_SLOTS.map((slot) => (
                      <div
                        key={slot}
                        onClick={() => setSelectedTimeSlot(slot)}
                        style={{
                          padding: '12px 14px',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          backgroundColor: selectedTimeSlot === slot ? 'var(--accent-orange)' : '#101016',
                          color: selectedTimeSlot === slot ? '#ffffff' : 'var(--text-secondary)',
                          border: '1px solid var(--border-subtle)',
                          fontSize: '12px',
                          fontWeight: '600',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <Clock size={14} />
                        <span>{slot}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Specific Questions or Focus Areas</label>
                  <textarea
                    rows={2}
                    placeholder="Any specific accreditation, audit, or workflow requirements to prepare for..."
                    className="form-textarea"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  />
                </div>

                <div className="flex-between mt-sm">
                  <button type="button" onClick={() => setStep(1)} className="btn-secondary">
                    ❮ Back to Details
                  </button>
                  <button type="submit" className="btn-primary" style={{ padding: '0.85rem 2rem' }}>
                    Confirm &amp; Book Walkthrough ➔
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}
