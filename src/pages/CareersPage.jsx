import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Briefcase,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  Heart,
  Globe,
  Award,
  DollarSign,
  ChevronRight,
  Send,
  Download,
  FileText
} from 'lucide-react';

const ROLES = [
  {
    id: 'lead-multi-agent',
    title: 'Lead Multi-Agent Systems Engineer',
    dept: 'Nova AI & Multi-Agent',
    location: 'London, UK / Remote',
    type: 'Full-time',
    salary: '£110,000 - £140,000 + Equity',
    visa: 'UK Skilled Worker Visa Sponsorship Available',
    desc: 'Scale our 30-agent Nova Mastra graph orchestration and 12 deterministic DAG workflows. Build deterministic delegation pipelines, tool limiters, and cryptographic PII anonymization envelopes for millions of student interactions.',
    requirements: [
      '5+ years experience in distributed systems and Node.js/TypeScript or Python.',
      'Deep architectural knowledge of LLM tool calling, vector databases, and multi-agent coordination.',
      'Experience building low-latency, fault-tolerant message buses (Kafka/Redis).'
    ],
    tech: ['TypeScript', 'Mastra', 'Redis', 'Vector DB', 'BullMQ']
  },
  {
    id: 'senior-sis-integration',
    title: 'Senior Integration Engineer (Higher Ed SIS)',
    dept: 'Fabric & Data',
    location: 'London, UK / Hybrid',
    type: 'Full-time',
    salary: '£95,000 - £120,000 + Equity',
    visa: 'UK Skilled Worker Visa Sponsorship Available',
    desc: 'Engineer rock-solid bi-directional connectors for Tribal SITS:Vision, Ellucian Banner, Canvas, and Moodle. Solve complex entity resolution and schema mapping with zero legacy table mutation.',
    requirements: [
      'Expertise in enterprise database integrations (PostgreSQL, Oracle, SQL Server).',
      'Familiarity with higher-ed data models (HESA, UCAS, Tribal SITS or Ellucian Ethos).',
      'Proven track record with Change Data Capture (CDC) and webhooks.'
    ],
    tech: ['PostgreSQL', 'Oracle', 'SITS:Vision', 'REST APIs', 'GraphQL']
  },
  {
    id: 'staff-product-designer',
    title: 'Staff Product Designer (Enterprise EdTech)',
    dept: 'Design & Ops',
    location: 'London, UK / Remote',
    type: 'Full-time',
    salary: '£85,000 - £110,000 + Equity',
    visa: 'UK Skilled Worker Visa Sponsorship Available',
    desc: 'Design high-throughput queue consoles for Registrars and Advisors. Craft the visual language of human-agent collaboration where routine work is automated and authority remains clear.',
    requirements: [
      'Proven portfolio of high-density enterprise software or developer tooling.',
      'Obsession with typography, micro-interactions, and keyboard-first queue triage.',
      'Ability to prototype complex interactive state machines in Figma and React.'
    ],
    tech: ['Figma', 'Design Systems', 'React', 'CSS Architecture']
  },
  {
    id: 'compliance-architect',
    title: 'Higher Education Compliance Architect',
    dept: 'Compliance & Governance',
    location: 'London, UK',
    type: 'Full-time',
    salary: '£80,000 - £105,000 + Equity',
    visa: 'UK Skilled Worker Visa Sponsorship Available',
    desc: 'Translate complex Home Office Tier-4 student visa regulations and institutional attendance mandates into formal graph rules, Arbiter gate constraints, and audit models.',
    requirements: [
      'Prior experience working with university compliance, international student advisory, or Home Office sponsor licenses.',
      'Ability to codify regulatory text into deterministic logic constraints.',
      'Strong institutional communication skills for working with university registrars.'
    ],
    tech: ['UKVI Tier-4', 'Arbiter Gate', 'Policy Engine', 'Audit Ledgers']
  },
  {
    id: 'distributed-systems-infra',
    title: 'Site Reliability & Infrastructure Architect',
    dept: 'Fabric & Data',
    location: 'London, UK / Remote',
    type: 'Full-time',
    salary: '£100,000 - £125,000 + Equity',
    visa: 'UK Skilled Worker Visa Sponsorship Available',
    desc: 'Manage our multi-cloud Kubernetes clusters across AWS eu-west-2 (London) and GCP. Maintain 99.95% uptime SLAs for sub-180ms dynamic QR check-in infrastructure.',
    requirements: [
      'Hands-on expertise with Kubernetes, Terraform, AWS KMS, and HSM architectures.',
      'Experience managing distributed Redis PubSub clusters under high burst loads.',
      'Commitment to SOC-2 Type II and ISO 27001 operational rigor.'
    ],
    tech: ['Kubernetes', 'Terraform', 'AWS London', 'Redis Cluster', 'mTLS']
  },
  {
    id: 'campus-success-lead',
    title: 'Campus Implementation & Success Director',
    dept: 'Design & Ops',
    location: 'London, UK / Hybrid',
    type: 'Full-time',
    salary: '£75,000 - £95,000 + Equity',
    visa: 'UK Skilled Worker Visa Sponsorship Available',
    desc: 'Guide university CIOs, Registrars, and Tutoring Deans through 4-week zero-migration campus rollouts. Train faculty on the Compass queue terminal and monitor student engagement metrics.',
    requirements: [
      'Experience leading enterprise SaaS implementations in higher education.',
      'Deep empathy for campus staff, faculty tutors, and international students.',
      'Outstanding technical project management and stakeholder leadership.'
    ],
    tech: ['Enterprise Implementation', 'SITS Change Management', 'Faculty Training']
  }
];

const BENEFITS = [
  { title: 'Visa Sponsorship & Relocation', desc: 'UK Skilled Worker Visa sponsorship provided for you and dependents, plus a £5,000 international relocation budget.' },
  { title: 'Top-Tier Health & Wellness', desc: 'Comprehensive private medical, dental, and optical insurance via Bupa UK with mental health support included.' },
  { title: 'Learning & Research Stipend', desc: '£3,000 annual personal budget for academic research papers, AI conferences, books, and continued education.' },
  { title: 'Workstation of Your Choice', desc: 'Apple M3 Max MacBook Pro, dual 4K Studio Displays, and ergonomic home office setup budget.' },
  { title: 'Hybrid & Remote Flexibility', desc: 'Work from our Central London headquarters or remotely from anywhere across the UK and Europe.' },
  { title: 'Substantial Equity Ownership', desc: 'Every team member receives significant equity options with transparent 4-year vesting schedules.' }
];

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState('All');
  const [activeRoleForApply, setActiveRoleForApply] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const filteredRoles = selectedDept === 'All'
    ? ROLES
    : ROLES.filter(r => r.dept === selectedDept);

  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', backgroundColor: 'var(--wl-dark)', color: '#ffffff' }}>
      
      {/* ── HERO BANNER ─────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '32px', borderBottom: '1px solid var(--border-hairline)' }}>
        <div className="main-container">
          <div className="flex-between flex-wrap gap-md">
            <div>
              <div className="mono-label" style={{ color: 'var(--accent-orange)', marginBottom: '8px' }}>
                CAREERS AT WORLDLYNK // JOIN THE CAMPUS OPERATING LAYER
              </div>
              <h1 className="headline-xl" style={{ marginBottom: '12px', lineHeight: 1.15 }}>
                Build the operating layer for sovereign higher education.
              </h1>
              <p className="body-lg text-secondary" style={{ maxWidth: '780px' }}>
                We are assembling an elite team of distributed systems engineers, agentic AI researchers, and higher education veterans to transform how universities operate. We sponsor UK visas and offer meaningful equity in our mission.
              </p>
            </div>

            <div className="flex flex-col gap-sm" style={{ minWidth: '220px' }}>
              <div className="card-dark" style={{ padding: '16px', border: '1px solid var(--border-subtle)' }}>
                <div className="mono-label" style={{ color: 'var(--status-pass)', fontSize: '10px' }}>OPEN POSITIONS</div>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', marginTop: '2px' }}>{ROLES.length} Open Roles</div>
                <div className="mono-sm text-secondary" style={{ fontSize: '11px' }}>London HQ &amp; Remote UK</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEPARTMENT FILTER BAR ───────────────────────────────── */}
      <section className="section" style={{ paddingTop: '32px', paddingBottom: '32px' }}>
        <div className="main-container">
          
          <div className="flex gap-xs mb-xl flex-wrap">
            {['All', 'Nova AI & Multi-Agent', 'Fabric & Data', 'Design & Ops', 'Compliance & Governance'].map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className="tab-btn"
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  backgroundColor: selectedDept === dept ? 'var(--accent-orange)' : '#13131c',
                  color: selectedDept === dept ? '#ffffff' : 'var(--text-secondary)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '12px',
                  fontWeight: selectedDept === dept ? '700' : '500',
                  cursor: 'pointer'
                }}
              >
                {dept} ({dept === 'All' ? ROLES.length : ROLES.filter(r => r.dept === dept).length})
              </button>
            ))}
          </div>

          {/* Open Roles Grid */}
          <div className="grid-2 gap-md mb-3xl">
            {filteredRoles.map((role) => (
              <div
                key={role.id}
                className="card-dark"
                style={{
                  padding: '28px',
                  borderRadius: '14px',
                  border: '1px solid var(--border-subtle)',
                  backgroundColor: '#13131c',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div className="flex-between mb-xs">
                    <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>{role.dept}</span>
                    <span className="pill pill-approved" style={{ fontSize: '9px' }}>{role.type}</span>
                  </div>

                  <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#ffffff', margin: '4px 0 6px 0' }}>
                    {role.title}
                  </h3>

                  <div className="mono-sm text-secondary mb-md" style={{ fontSize: '11px', display: 'flex', gap: '12px' }}>
                    <span>📍 {role.location}</span>
                    <span>💰 {role.salary}</span>
                  </div>

                  <p className="body-sm text-secondary mb-md" style={{ lineHeight: 1.5 }}>
                    {role.desc}
                  </p>

                  <div className="mono-sm text-muted mb-md" style={{ fontSize: '10.5px' }}>
                    ✓ {role.visa}
                  </div>

                  <div className="flex gap-xs flex-wrap mb-md">
                    {role.tech.map((t, ti) => (
                      <span key={ti} className="pill" style={{ fontSize: '9px', backgroundColor: '#1a1a26', color: 'var(--accent-cyan)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex-between mt-sm" style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: '16px' }}>
                  <button
                    onClick={() => setActiveRoleForApply(role)}
                    className="btn-primary btn-sm"
                    style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                  >
                    <span>Apply for Role</span>
                    <ArrowRight size={13} />
                  </button>
                  <span className="mono-sm text-muted" style={{ fontSize: '10.5px' }}>Quick 2-Minute Form</span>
                </div>
              </div>
            ))}
          </div>

          {/* ── BENEFITS & PERKS GRID ───────────────────────────────── */}
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>BENEFITS &amp; CULTURE</span>
            <h2 className="headline-lg" style={{ marginTop: '4px' }}>
              Why Work at WorldLynk.
            </h2>
          </div>

          <div className="grid-3 mb-3xl">
            {BENEFITS.map((b, idx) => (
              <div key={idx} className="card-dark" style={{ padding: '24px', borderRadius: '12px', border: '1px solid var(--border-subtle)', backgroundColor: '#13131c' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#ffffff', marginBottom: '8px' }}>{b.title}</h4>
                <p className="body-sm text-secondary" style={{ lineHeight: 1.5 }}>{b.desc}</p>
              </div>
            ))}
          </div>

          {/* ── 4-STAGE TRANSPARENT HIRING PIPELINE ─────────────────── */}
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>THE HIRING PIPELINE</span>
            <h2 className="headline-lg" style={{ marginTop: '4px' }}>
              Transparent, Respectful, and Fast.
            </h2>
            <p className="section-desc">We respect your time. Total turnaround from first interview to offer is under 14 calendar days.</p>
          </div>

          <div className="grid-4 mb-3xl">
            {[
              { num: '01', title: 'Application Review', desc: 'Our engineering founders personally review every CV and Github portfolio within 48 hours.' },
              { num: '02', title: 'Technical Architecture', desc: '45-minute discussion covering distributed systems, multi-agent concepts, or higher-ed operations.' },
              { num: '03', title: 'Hands-on Sandbox', desc: 'A paid, real-world practical challenge matching actual day-to-day problems we solve.' },
              { num: '04', title: 'Founders Alignment', desc: 'Meet our Founder Jaswanth Thummala and discuss vision, compensation, equity, and start date.' }
            ].map((step, idx) => (
              <div key={idx} className="card-dark" style={{ padding: '20px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>STAGE {step.num}</span>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#ffffff', margin: '4px 0 8px 0' }}>{step.title}</h4>
                <p className="body-sm text-secondary" style={{ fontSize: '12px', lineHeight: 1.45 }}>{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── MODAL: JOB APPLICATION FORM ────────────────────────────── */}
      {activeRoleForApply && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: '#13131a',
            border: '1px solid var(--border-subtle)',
            borderRadius: '16px',
            maxWidth: '600px',
            width: '100%',
            padding: '28px',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.9)'
          }}>
            <div className="flex-between mb-md">
              <div>
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>APPLY FOR ROLE</span>
                <h3 className="headline-sm" style={{ marginTop: '2px' }}>{activeRoleForApply.title}</h3>
                <div className="mono-sm text-secondary">{activeRoleForApply.location} · {activeRoleForApply.salary}</div>
              </div>
              <button onClick={() => { setActiveRoleForApply(null); setFormSubmitted(false); }} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
            </div>

            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '36px 0' }}>
                <div className="pill pill-approved mb-md">APPLICATION DELIVERED</div>
                <h3 className="headline-sm" style={{ marginBottom: '8px' }}>Thank you for applying!</h3>
                <p className="body-sm text-secondary mb-lg">
                  Our engineering team has received your application. You will hear back within 48 hours regarding the next stage.
                </p>
                <button onClick={() => { setActiveRoleForApply(null); setFormSubmitted(false); }} className="btn-secondary btn-sm">
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }} className="flex flex-col gap-sm">
                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input type="text" required placeholder="Alexander Wright" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input type="email" required placeholder="a.wright@gmail.com" className="form-input" />
                  </div>
                </div>

                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label">LinkedIn or GitHub Profile</label>
                    <input type="url" required placeholder="https://github.com/..." className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">UK Visa Sponsorship Needed?</label>
                    <select className="form-input" style={{ backgroundColor: '#101016' }}>
                      <option>Yes, UK Skilled Worker Visa Required</option>
                      <option>No, UK Citizen / Indefinite Leave to Remain</option>
                      <option>No, Working Holiday / Graduate Visa</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Brief Note / What Excites You About WorldLynk?</label>
                  <textarea rows={3} placeholder="Tell us about relevant distributed systems or EdTech experience..." className="form-textarea" />
                </div>

                <div className="flex justify-end gap-sm mt-sm">
                  <button type="button" onClick={() => setActiveRoleForApply(null)} className="btn-secondary btn-sm">
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary btn-sm">
                    Submit Application ➔
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
