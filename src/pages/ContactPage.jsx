import React, { useState, useEffect } from 'react';
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
  MessageSquare,
  FileText,
  Lock,
  Calendar,
  Download,
  Check
} from 'lucide-react';
import EnterpriseCTASection from '../components/EnterpriseCTASection';

const DEPARTMENTS = [
  {
    id: 'executive',
    title: 'Vice-Chancellor & Executive Briefings',
    email: 'executive@worldlynk.com',
    lead: 'Founding Team Desk',
    status: 'Online · Avg response: 14 mins',
    desc: 'For Provosts, Vice-Chancellors, and Board members evaluating institutional capacity, student retention dividends, and multi-year campus roadmaps.',
    sla: '< 2 Hours',
    specialist: 'Julian Ward · Head of Higher Ed Partnerships'
  },
  {
    id: 'registrar',
    title: 'Academic Registrar & SIS Integration',
    email: 'integrations@worldlynk.com',
    lead: 'Systems Engineering Desk',
    status: 'Online · Solutions Architects On Duty',
    desc: 'For Registrars and IT directors inquiring about Tribal SITS:Vision, Ellucian Banner, and Moodle zero-migration CDC connectors.',
    sla: '< 4 Hours',
    specialist: 'Elena Rostova · Principal Campus Solutions Architect'
  },
  {
    id: 'compliance',
    title: 'UKVI Tier-4 Sponsor Compliance',
    email: 'compliance@worldlynk.com',
    lead: 'Visa & Compliance Desk',
    status: 'Online · UKVI Casework Specialist Active',
    desc: 'For campus compliance officers seeking automated 20-hour work limit monitoring and audit-proof SMS attendance data pipelines.',
    sla: '< 1 Hour',
    specialist: 'Marcus Vance · Senior Immigration Compliance Lead'
  },
  {
    id: 'procurement',
    title: 'Trust, Security & HECVAT Procurement',
    email: 'procurement@worldlynk.com',
    lead: 'Legal & InfoSec Desk',
    status: 'Online · Pre-Cleared DPIA Ready',
    desc: 'For University Procurement, CISO, and DPO offices requesting our SOC-2 Type II audit report, HECVAT 3.0, and Data Processing Addendum.',
    sla: '< 4 Hours',
    specialist: 'Sarah Jenkins, CISM · Director of Information Security'
  }
];

const OFFICES = [
  {
    city: 'London Headquarters',
    address: '14 Chancery Lane, Holborn, London WC2A 1LG, United Kingdom',
    phone: '+44 20 7946 0912',
    type: 'Global HQ & Solutions Lab',
    tz: 'Europe/London',
    tube: 'Chancery Lane (Central) · 2m walk'
  },
  {
    city: 'Edinburgh Technology Hub',
    address: 'St Andrew Square, Edinburgh EH2 2BD, Scotland',
    phone: '+44 131 496 0884',
    type: 'Higher Ed Research & SIS Labs',
    tz: 'Europe/London',
    tube: 'Waverley Station · 5m walk'
  },
  {
    city: 'Singapore Regional Desk',
    address: 'Marina Bay Financial Centre, Tower 1, Singapore 018981',
    phone: '+65 6712 8900',
    type: 'Asia-Pacific International Admissions',
    tz: 'Asia/Singapore',
    tube: 'Downtown / Marina Bay MRT'
  }
];

export default function ContactPage() {
  const [selectedDeptId, setSelectedDeptId] = useState('executive');
  const [formData, setFormData] = useState({ name: '', email: '', institution: '', role: '', cohortSize: '5,000 - 15,000', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [localTimes, setLocalTimes] = useState({});

  useEffect(() => {
    const updateTimes = () => {
      const times = {};
      OFFICES.forEach(off => {
        try {
          times[off.city] = new Intl.DateTimeFormat('en-GB', {
            timeZone: off.tz,
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
          }).format(new Date());
        } catch (e) {
          times[off.city] = '--:--';
        }
      });
      setLocalTimes(times);
    };
    updateTimes();
    const interval = setInterval(updateTimes, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      localStorage.setItem('wl_enterprise_contact_inquiry', JSON.stringify({
        ...formData,
        department: selectedDept.title,
        createdAt: new Date().toISOString()
      }));
    } catch (err) {
      console.warn('LocalStorage unavailable', err);
    }
    setSubmitted(true);
  };

  const selectedDept = DEPARTMENTS.find(d => d.id === selectedDeptId) || DEPARTMENTS[0];

  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', backgroundColor: 'var(--wl-dark)', color: '#0c0c0f' }}>
      
      {/* ── HERO BANNER ─────────────────────────────────────────── */}
      <section className="section page-hero-banner" style={{ borderBottom: '1px solid #d8d4cd', paddingBottom: '3.5rem' }}>
        <div className="main-container">
          <div className="flex-between flex-wrap gap-md" style={{ alignItems: 'flex-start' }}>
            <div style={{ maxWidth: '800px' }}>
              <div className="mono-label" style={{ color: 'var(--accent-orange)', marginBottom: '8px' }}>
                GET IN TOUCH // CAMPUS SYSTEM DESKS
              </div>
              <h1 className="headline-xl" style={{ marginBottom: '16px', lineHeight: 1.15 }}>
                Talk to our higher education specialists.
              </h1>
              <p className="body-lg text-secondary" style={{ maxWidth: '750px', lineHeight: 1.65 }}>
                Whether you need technical guidance on SITS:Vision zero-migration connectors, advice on UKVI Tier-4 sponsor audit defense, or pre-cleared procurement documentation, our dedicated desks route your inquiry directly to experienced university practitioners.
              </p>

              {/* Institutional Framework Seals */}
              <div className="flex gap-md flex-wrap mt-lg pt-md" style={{ borderTop: '1px solid #d8d4cd' }}>
                <div className="flex gap-xs items-center mono-sm" style={{ fontSize: '11px', color: '#475569' }}>
                  <ShieldCheck size={14} color="var(--accent-orange)" />
                  <span>Crown Commercial Service (CCS) G-Cloud 14</span>
                </div>
                <div className="flex gap-xs items-center mono-sm" style={{ fontSize: '11px', color: '#475569' }}>
                  <Lock size={14} color="var(--status-pass)" />
                  <span>Cyber Essentials Plus Certified</span>
                </div>
                <div className="flex gap-xs items-center mono-sm" style={{ fontSize: '11px', color: '#475569' }}>
                  <GraduationCap size={14} color="#0284c7" />
                  <span>HEFESTIS &amp; Jisc Compliant</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-sm" style={{ minWidth: '240px' }}>
              <div className="card-elevated" style={{ padding: '20px', border: '1px solid #d8d4cd', borderRadius: '14px', backgroundColor: '#ffffff' }}>
                <div className="flex-between mb-xs">
                  <span className="mono-label" style={{ color: 'var(--status-pass)', fontSize: '10px' }}>EXECUTIVE SLA</span>
                  <span className="pill pill-approved" style={{ fontSize: '8.5px' }}>GUARANTEED</span>
                </div>
                <div style={{ fontSize: '1.45rem', fontWeight: '800', marginTop: '2px', color: '#0c0c0f' }}>Under 2 Hours</div>
                <div className="mono-sm text-secondary" style={{ fontSize: '11.5px', marginTop: '2px' }}>Senior specialist response time</div>
              </div>
              <Link to="/demo" className="btn-primary btn-sm" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <Calendar size={13} /> Book 30-Min Briefing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN WORKSPACE: ROUTING TABS & FORM ─────────────────── */}
      <section className="section" style={{ paddingTop: '40px', paddingBottom: '70px' }}>
        <div className="main-container">

          {/* Department Selector Cards */}
          <div className="grid-4 gap-md mb-xl">
            {DEPARTMENTS.map((dept) => {
              const isSelected = selectedDeptId === dept.id;
              return (
                <div
                  key={dept.id}
                  onClick={() => setSelectedDeptId(dept.id)}
                  className={`card-elevated card-interactive ${isSelected ? 'card-selected' : ''}`}
                  style={{
                    padding: '22px',
                    borderRadius: '14px',
                    border: isSelected ? '2px solid var(--accent-orange)' : '1px solid #d8d4cd',
                    backgroundColor: isSelected ? '#ffffff' : '#ffffff',
                    cursor: 'pointer',
                    boxShadow: isSelected ? '0 8px 24px rgba(255, 107, 0, 0.12)' : 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div className="flex-between mb-xs">
                    <span className="mono-label" style={{ fontSize: '9px', color: isSelected ? 'var(--accent-orange)' : '#64748b' }}>
                      {dept.lead}
                    </span>
                    <span className="pill" style={{
                      fontSize: '8px',
                      backgroundColor: isSelected ? '#fff7ed' : '#f1f5f9',
                      color: isSelected ? 'var(--accent-orange)' : '#64748b',
                      padding: '1px 6px'
                    }}>
                      SLA {dept.sla}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '14px', fontWeight: '800', color: '#0c0c0f', marginBottom: '6px', lineHeight: 1.3 }}>
                    {dept.title}
                  </h4>
                  <div className="mono-sm text-secondary" style={{ fontSize: '11px', marginBottom: '8px' }}>
                    {dept.email}
                  </div>
                  <div className="mono-sm" style={{ fontSize: '9.5px', color: 'var(--status-pass)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--status-pass)' }} />
                    {dept.status}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Two-Column Grid: Form + Office Locations */}
          <div className="responsive-grid-split" style={{ alignItems: 'start' }}>
            
            {/* Form Column */}
            <div className="card-elevated" style={{ padding: '36px', borderRadius: '16px', border: '1px solid #d8d4cd', backgroundColor: '#ffffff' }}>
              <div className="flex-between flex-wrap gap-xs mb-xs">
                <div className="mono-label" style={{ color: 'var(--accent-orange)' }}>
                  DIRECT ROUTING // {selectedDept.lead.toUpperCase()}
                </div>
                <span className="mono-sm text-muted" style={{ fontSize: '11px' }}>
                  Desk Lead: <strong style={{ color: '#0c0c0f' }}>{selectedDept.specialist}</strong>
                </span>
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '8px', color: '#0c0c0f' }}>
                {selectedDept.title}
              </h3>
              <p className="body-sm text-secondary mb-lg" style={{ lineHeight: 1.55 }}>
                {selectedDept.desc}
              </p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 20px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <div className="pill pill-approved mb-md" style={{ fontSize: '11px', padding: '6px 14px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle2 size={13} /> MESSAGE DISPATCHED TO {selectedDept.lead.toUpperCase()}
                  </div>
                  <h3 className="headline-sm mb-xs" style={{ color: '#0c0c0f' }}>Thank You, {formData.name}.</h3>
                  <p className="body-sm text-secondary mb-lg" style={{ maxWidth: '480px', margin: '0 auto 20px auto', lineHeight: 1.5 }}>
                    Your inquiry has been logged into our UK higher education dispatch queue. <strong>{selectedDept.specialist}</strong> will review your specifications and contact you within <strong>{selectedDept.sla}</strong>.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-secondary btn-sm">
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-md">
                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">Full Name &amp; Academic Title</label>
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
                      <label className="form-label">Official Institutional Email</label>
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
                        style={{ backgroundColor: '#ffffff' }}
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
                      placeholder="Tell us about your current SIS version (SITS:Vision / Banner), upcoming UKVI audits, or specific retention goals..."
                      className="form-textarea"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div className="flex-between mt-sm flex-wrap gap-sm">
                    <span className="mono-sm text-muted" style={{ fontSize: '10.5px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Lock size={12} color="var(--status-pass)" /> UK Sovereign Cloud encrypted dispatch · Zero spam guarantee
                    </span>
                    <button type="submit" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <span>Dispatch to {selectedDept.lead}</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Offices & Direct Desks Column */}
            <div className="flex flex-col gap-md">
              
              {/* Campus Hubs with Live Clocks */}
              <div className="card-elevated" style={{ padding: '28px', borderRadius: '16px', border: '1px solid #d8d4cd', backgroundColor: '#ffffff' }}>
                <div className="flex-between mb-xs">
                  <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>GLOBAL CAMPUS HUBS</span>
                  <span className="mono-sm text-muted" style={{ fontSize: '10px' }}>3 Timezones</span>
                </div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: '800', margin: '2px 0 16px 0', color: '#0c0c0f' }}>
                  Engineering &amp; Executive Centres
                </h4>

                <div className="flex flex-col gap-md">
                  {OFFICES.map((off, idx) => (
                    <div key={idx} style={{ backgroundColor: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                      <div className="flex-between mb-xs">
                        <span style={{ fontSize: '13.5px', fontWeight: '700', color: '#0c0c0f' }}>{off.city}</span>
                        <div className="flex gap-xs items-center">
                          <span className="mono-sm" style={{ fontSize: '10px', fontWeight: '700', color: 'var(--accent-orange)', backgroundColor: '#fff7ed', padding: '2px 6px', borderRadius: '4px' }}>
                            {localTimes[off.city] || '12:00'} GMT
                          </span>
                        </div>
                      </div>
                      <div className="mono-sm text-secondary" style={{ fontSize: '11px', lineHeight: 1.45 }}>
                        {off.address}
                      </div>
                      <div className="flex-between mt-xs pt-xs" style={{ borderTop: '1px solid #edf2f7' }}>
                        <div className="mono-sm text-muted" style={{ fontSize: '10px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Phone size={11} color="var(--text-muted)" />
                          <span>{off.phone}</span>
                        </div>
                        <span className="mono-sm" style={{ fontSize: '9px', color: '#64748b' }}>
                          {off.tube}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fast-Track Procurement Card */}
              <div className="card-elevated" style={{ padding: '24px', borderRadius: '14px', border: '1px solid #cbd5e1', backgroundColor: '#ffffff' }}>
                <div className="flex gap-xs items-center mb-xs">
                  <FileText size={16} color="var(--accent-orange)" />
                  <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>HIGHER ED PROCUREMENT FAST-TRACK</span>
                </div>
                <p className="body-sm text-secondary" style={{ fontSize: '12px', lineHeight: 1.5, marginBottom: '12px' }}>
                  Need procurement documentation ahead of a committee review? Access pre-approved standard agreements directly:
                </p>
                <div className="flex flex-col gap-xs">
                  <a
                    href="#download-hecvat"
                    onClick={(e) => { e.preventDefault(); alert('WorldLynk HECVAT 3.0 Dossier downloaded'); }}
                    className="flex-between"
                    style={{ padding: '8px 10px', borderRadius: '6px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', textDecoration: 'none', color: '#0c0c0f', fontSize: '11.5px', fontWeight: '600' }}
                  >
                    <span>HECVAT 3.0 Security Assessment</span>
                    <Download size={13} color="var(--accent-orange)" />
                  </a>
                  <a
                    href="#download-dpia"
                    onClick={(e) => { e.preventDefault(); alert('Higher Ed UK GDPR DPIA Template downloaded'); }}
                    className="flex-between"
                    style={{ padding: '8px 10px', borderRadius: '6px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', textDecoration: 'none', color: '#0c0c0f', fontSize: '11.5px', fontWeight: '600' }}
                  >
                    <span>UK GDPR Higher Education DPIA Template</span>
                    <Download size={13} color="var(--accent-orange)" />
                  </a>
                </div>
              </div>

              {/* 24/7 Support Desk */}
              <div className="card-elevated" style={{ padding: '20px', borderRadius: '14px', border: '1px solid #d8d4cd', backgroundColor: '#f8fafc' }}>
                <div className="flex gap-xs items-center mb-xs">
                  <ShieldCheck size={16} color="var(--status-pass)" />
                  <span className="mono-label" style={{ color: 'var(--status-pass)' }}>24/7 CAMPUS INCIDENT DESK</span>
                </div>
                <p className="body-sm text-secondary" style={{ fontSize: '11.5px', lineHeight: 1.5, margin: 0 }}>
                  Active partner institutions receive an escalation priority code for 24/7 on-call engineering support during Welcome Week, exam timetable releases, and UKVI census dates.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── ENTERPRISE CTA SECTION ───────────────────────────────── */}
      <EnterpriseCTASection 
        title="Ready to evaluate WorldLynk for your institution?"
        description="Book a dedicated briefing with our leadership and systems engineering desk, or test the staff console live."
      />

    </div>
  );
}
