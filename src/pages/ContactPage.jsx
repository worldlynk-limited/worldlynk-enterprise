import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Building,
  GraduationCap,
  ArrowRight,
  Send,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

const DEPARTMENTS = [
  {
    id: 'executive',
    title: 'Vice-Chancellor & Executive Briefings',
    email: 'executive@worldlynk.com',
    lead: 'Founding Team Desk',
    desc: 'For Provosts, Vice-Chancellors, and Board members evaluating institutional capacity, retention dividends, and multi-year campus roadmaps.'
  },
  {
    id: 'registrar',
    title: 'Academic Registrar & SIS Integration',
    email: 'integrations@worldlynk.com',
    lead: 'Systems Engineering Desk',
    desc: 'For Registrars and IT directors inquiring about SITS:Vision, Banner, and Moodle bi-directional adaptors and zero-migration deployments.'
  },
  {
    id: 'compliance',
    title: 'UKVI Tier-4 Sponsor Compliance',
    email: 'compliance@worldlynk.com',
    lead: 'Arbiter Regulatory Desk',
    desc: 'For university visa compliance officers seeking automated 20-hour work cap monitoring and dynamic QR attendance audit readiness.'
  },
  {
    id: 'procurement',
    title: 'Trust, Security & HECVAT Procurement',
    email: 'procurement@worldlynk.com',
    lead: 'Legal & InfoSec Desk',
    desc: 'For University Procurement, CISO, and DPO offices requesting our SOC-2 Type II audit, HECVAT, and Data Processing Addendum.'
  }
];

const OFFICES = [
  {
    city: 'London Headquarters',
    address: '14 Chancery Lane, Holborn, London WC2A 1LG, United Kingdom',
    phone: '+44 20 7946 0912',
    type: 'Global HQ & Engineering'
  },
  {
    city: 'Edinburgh Technology Hub',
    address: 'St Andrew Square, Edinburgh EH2 2BD, Scotland',
    phone: '+44 131 496 0884',
    type: 'Higher Ed Research & SIS Labs'
  },
  {
    city: 'Singapore Regional Desk',
    address: 'Marina Bay Financial Centre, Tower 1, Singapore 018981',
    phone: '+65 6712 8900',
    type: 'Asia-Pacific International Admissions'
  }
];

export default function ContactPage() {
  const [selectedDeptId, setSelectedDeptId] = useState('executive');
  const [formData, setFormData] = useState({ name: '', email: '', institution: '', role: '', cohortSize: '5,000 - 15,000', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const selectedDept = DEPARTMENTS.find(d => d.id === selectedDeptId) || DEPARTMENTS[0];

  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', backgroundColor: 'var(--wl-dark)', color: '#ffffff' }}>
      
      {/* ── HERO BANNER ─────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '32px', borderBottom: '1px solid var(--border-hairline)' }}>
        <div className="main-container">
          <div className="flex-between flex-wrap gap-md">
            <div>
              <div className="mono-label" style={{ color: 'var(--accent-orange)', marginBottom: '8px' }}>
                DIRECT ROUTING // CAMPUS OPERATIONS &amp; INTEGRATION ENGINEERING
              </div>
              <h1 className="headline-xl" style={{ marginBottom: '12px', lineHeight: 1.15 }}>
                Direct contact with university systems specialists.
              </h1>
              <p className="body-lg text-secondary" style={{ maxWidth: '780px' }}>
                Select your inquiry department below so your message routes directly to the appropriate campus operations engineer, registrar advisor, or compliance specialist.
              </p>
            </div>

            <div className="flex flex-col gap-sm" style={{ minWidth: '220px' }}>
              <div className="card-dark" style={{ padding: '16px', border: '1px solid var(--border-subtle)' }}>
                <div className="mono-label" style={{ color: 'var(--status-pass)', fontSize: '10px' }}>SLA COMMITMENT</div>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', marginTop: '2px' }}>Sub-4 Hour</div>
                <div className="mono-sm text-secondary" style={{ fontSize: '11px' }}>Executive Desk Response</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN WORKSPACE: ROUTING TABS & FORM ─────────────────── */}
      <section className="section" style={{ paddingTop: '32px', paddingBottom: '40px' }}>
        <div className="main-container">

          {/* Department Selector Cards */}
          <div className="grid-4 mb-xl">
            {DEPARTMENTS.map((dept) => {
              const isSelected = selectedDeptId === dept.id;
              return (
                <div
                  key={dept.id}
                  onClick={() => setSelectedDeptId(dept.id)}
                  className={`card-dark ${isSelected ? 'card-selected' : ''}`}
                  style={{
                    padding: '18px',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    border: isSelected ? '2px solid var(--accent-orange)' : '1px solid var(--border-subtle)',
                    backgroundColor: isSelected ? '#161622' : '#101016',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div className="mono-label mb-xs" style={{ fontSize: '9px', color: isSelected ? 'var(--accent-orange)' : 'var(--text-muted)' }}>
                    {dept.lead}
                  </div>
                  <h4 style={{ fontSize: '13px', fontWeight: '700', color: '#ffffff', marginBottom: '6px' }}>{dept.title}</h4>
                  <div className="mono-sm text-secondary" style={{ fontSize: '10.5px' }}>{dept.email}</div>
                </div>
              );
            })}
          </div>

          {/* Two-Column Grid: Form + Office Locations */}
          <div className="responsive-grid-split">
            
            {/* Form Column */}
            <div className="card-dark" style={{ padding: '32px', borderRadius: '16px', border: '1px solid var(--border-subtle)', backgroundColor: '#13131c' }}>
              <div className="mono-label" style={{ color: 'var(--accent-orange)', marginBottom: '4px' }}>
                DIRECT DISPATCH // {selectedDept.lead}
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '8px' }}>
                {selectedDept.title}
              </h3>
              <p className="body-sm text-secondary mb-lg">
                {selectedDept.desc}
              </p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '36px 0' }}>
                  <div className="pill pill-approved mb-md" style={{ fontSize: '11px', padding: '6px 14px' }}>
                    MESSAGE DISPATCHED
                  </div>
                  <h3 className="headline-sm mb-xs">Thank You, {formData.name}.</h3>
                  <p className="body-sm text-secondary mb-lg" style={{ maxWidth: '480px', margin: '0 auto 20px auto' }}>
                    Your inquiry has been routed to our <strong>{selectedDept.lead}</strong>. A technical specialist will contact you within 4 hours.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-secondary btn-sm">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-md">
                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. Julian Ward"
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
                        placeholder="j.ward@university.ac.uk"
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">University / Institution</label>
                      <input
                        type="text"
                        required
                        placeholder="King's College London"
                        className="form-input"
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Approximate Student Cohort</label>
                      <select
                        className="form-input"
                        style={{ backgroundColor: '#101016' }}
                        value={formData.cohortSize}
                        onChange={(e) => setFormData({ ...formData, cohortSize: e.target.value })}
                      >
                        <option>Under 5,000 Students</option>
                        <option>5,000 - 15,000 Students</option>
                        <option>15,000 - 30,000 Students</option>
                        <option>Over 30,000 Students</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">How can our campus systems team assist your institution?</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your current SIS version, retention goals, or specific UKVI compliance questions..."
                      className="form-textarea"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div className="flex-between mt-sm">
                    <span className="mono-sm text-muted" style={{ fontSize: '10.5px' }}>
                      Encrypted dispatch · Zero spam policy
                    </span>
                    <button type="submit" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <span>Route Message to {selectedDept.lead}</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Offices & Direct Desks Column */}
            <div className="flex flex-col gap-md">
              <div className="card-dark" style={{ padding: '24px', borderRadius: '14px', border: '1px solid var(--border-subtle)', backgroundColor: '#13131c' }}>
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>CAMPUS HUBS &amp; OFFICES</span>
                <h4 style={{ fontSize: '1.15rem', fontWeight: '800', margin: '4px 0 16px 0' }}>Global Headquarters</h4>

                <div className="flex flex-col gap-md">
                  {OFFICES.map((off, idx) => (
                    <div key={idx} style={{ backgroundColor: '#0d0d14', padding: '14px', borderRadius: '10px', border: '1px solid #1a1a26' }}>
                      <div className="flex-between mb-xs">
                        <span style={{ fontSize: '12.5px', fontWeight: '700', color: '#ffffff' }}>{off.city}</span>
                        <span className="pill pill-approved" style={{ fontSize: '8.5px' }}>{off.type}</span>
                      </div>
                      <div className="mono-sm text-secondary" style={{ fontSize: '11px', lineHeight: 1.4 }}>
                        {off.address}
                      </div>
                      <div className="mono-sm text-muted mt-xs" style={{ fontSize: '10px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Phone size={11} color="var(--text-muted)" />
                        <span>{off.phone}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-dark" style={{ padding: '20px', borderRadius: '12px', border: '1px solid var(--border-subtle)', backgroundColor: '#13131c' }}>
                <div className="flex gap-xs alignItems-center mb-xs">
                  <ShieldCheck size={16} color="var(--status-pass)" />
                  <span className="mono-label" style={{ color: 'var(--status-pass)' }}>CAMPUS EMERGENCY DESK</span>
                </div>
                <p className="body-sm text-secondary" style={{ fontSize: '12px', lineHeight: 1.45 }}>
                  Active campus partner institutions have access to our 24/7/365 critical operations emergency hotline for live UKVI unannounced sponsor inspections and peak Welcome Week attendance spikes.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
