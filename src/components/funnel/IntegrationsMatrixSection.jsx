import React, { useState } from 'react';
import { 
  Database, Search, ShieldCheck, CheckCircle2, Clock, 
  ArrowRight, ExternalLink, Cpu, Layers, Sparkles, Filter
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function IntegrationsMatrixSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const integrations = [
    // SIS
    { name: 'SITS:Vision', category: 'SIS & Records', status: 'LIVE', statusColor: '#10b981', desc: 'Two-way sync for student records, module enrollment, and cohort rosters.', type: 'Bi-directional REST API' },
    { name: 'Ellucian Banner', category: 'SIS & Records', status: 'LIVE', statusColor: '#10b981', desc: 'Real-time student status, attendance flags, and biographical updates.', type: 'Ethos API Connector' },
    { name: 'Tribal EBS', category: 'SIS & Records', status: 'AVAILABLE', statusColor: '#38bdf8', desc: 'Standardized connector for FE/HE student registry and course timetables.', type: 'Webhook Listener' },
    { name: 'Workday Student', category: 'SIS & Records', status: 'ROADMAP', statusColor: '#f59e0b', desc: 'Enterprise data adapter for curriculum, academic history, and financial aid.', type: 'Target Q1 2027' },
    { name: 'Oracle Student Cloud', category: 'SIS & Records', status: 'ROADMAP', statusColor: '#f59e0b', desc: 'Cloud SIS connector for global multi-campus university networks.', type: 'Target Q2 2027' },

    // LMS
    { name: 'Moodle LMS', category: 'LMS & Learning', status: 'LIVE', statusColor: '#10b981', desc: 'Automated coursework deadline ingestion, assignment status, and activity tracking.', type: 'LTI 1.3 & REST Plugin' },
    { name: 'Canvas LMS', category: 'LMS & Learning', status: 'LIVE', statusColor: '#10b981', desc: 'Direct syllabus sync, gradebook alerts, and student engagement telemetry.', type: 'Canvas REST API' },
    { name: 'Blackboard Learn', category: 'LMS & Learning', status: 'AVAILABLE', statusColor: '#38bdf8', desc: 'Ultra API connector for assignment deadlines and course announcements.', type: 'Standard API' },

    // CRM & Admissions
    { name: 'Salesforce Education Cloud', category: 'CRM & Admissions', status: 'AVAILABLE', statusColor: '#38bdf8', desc: 'Synchronizes prospect inquiries, intent scoring, and recruitment stage changes.', type: 'EDA / Service Cloud' },
    { name: 'HubSpot CRM', category: 'CRM & Admissions', status: 'AVAILABLE', statusColor: '#38bdf8', desc: 'Lead ingestion, campaign source attribution, and inquiry lifecycle updates.', type: 'Webhooks & REST API' },
    { name: 'UCAS Admissions Connect', category: 'CRM & Admissions', status: 'AVAILABLE', statusColor: '#38bdf8', desc: 'Applicant tracking, conditional offer tracking, and Clearing verification.', type: 'XML / REST Adapter' },
    { name: 'Student CRM (UK)', category: 'CRM & Admissions', status: 'AVAILABLE', statusColor: '#38bdf8', desc: 'Connects enquiry touchpoints and open day attendance into the central journey.', type: 'Direct API Sync' },

    // Messaging & Channels
    { name: 'WhatsApp for Education', category: 'Messaging & Access', status: 'LIVE', statusColor: '#10b981', desc: 'Direct two-way student support, friendly tutor check-ins, and verified arrival alerts.', type: 'Meta Business Cloud' },
    { name: 'Telegram Messenger', category: 'Messaging & Access', status: 'LIVE', statusColor: '#10b981', desc: 'Student community updates, timetable change broadcasts, and secure notifications.', type: 'Bot API Gateway' },
    { name: 'Microsoft Teams', category: 'Messaging & Access', status: 'AVAILABLE', statusColor: '#38bdf8', desc: 'Staff approval queues, tutor notifications, and departmental escalation channels.', type: 'MS Graph Connector' },

    // Finance & Accommodation
    { name: 'Stripe Payments', category: 'Housing & Finance', status: 'LIVE', statusColor: '#10b981', desc: 'Instant tuition deposits, accommodation reservation holding fees, and receipts.', type: 'Stripe Connect' },
    { name: 'Flywire Payments', category: 'Housing & Finance', status: 'LIVE', statusColor: '#10b981', desc: 'International cross-border tuition collection and CAS deposit reconciliation.', type: 'Financial Gateway' },
    { name: 'Student Accommodation Hubs', category: 'Housing & Finance', status: 'AVAILABLE', statusColor: '#38bdf8', desc: 'Verified student housing inventory matching, digital tenancy agreements, and check-ins.', type: 'PMS Integrator' },

    // Compliance & Careers
    { name: 'UKVI Compliance Logger', category: 'Compliance & Careers', status: 'LIVE', statusColor: '#10b981', desc: 'Automated 20-hour weekly term-time work verification and visa audit trail.', type: 'Immutable Ledger' },
    { name: 'Handshake Careers', category: 'Compliance & Careers', status: 'ROADMAP', statusColor: '#f59e0b', desc: 'Graduate job posting ingestion and employer campus interview integration.', type: 'Target Q4 2026' },
    { name: 'Symplicity Career Services', category: 'Compliance & Careers', status: 'ROADMAP', statusColor: '#f59e0b', desc: 'Alumni career tracking, internship management, and employer event feeds.', type: 'Target Q1 2027' }
  ];

  const categories = [
    { id: 'all', label: 'All Systems' },
    { id: 'SIS & Records', label: 'SIS & Records' },
    { id: 'CRM & Admissions', label: 'CRM & Admissions' },
    { id: 'LMS & Learning', label: 'LMS & Learning' },
    { id: 'Messaging & Access', label: 'Messaging & Channels' },
    { id: 'Housing & Finance', label: 'Housing & Finance' },
    { id: 'Compliance & Careers', label: 'Compliance & Careers' }
  ];

  const filtered = integrations.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="integrations-matrix" className="section section-stone" style={{ backgroundColor: 'var(--wl-light)', color: '#0c0c0f' }}>
      <div className="main-container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3rem' }}>
          <div className="mono-label" style={{ color: 'var(--wl-accent)', marginBottom: '0.75rem' }}>
            ADD #7 · CONNECTED SYSTEMS &amp; STATUS
          </div>
          <h2 className="headline-lg" style={{ color: '#0c0c0f', marginBottom: '1rem' }}>
            Works with the systems you already use every day.
          </h2>
          <p className="body-lg" style={{ color: '#52525b', lineHeight: 1.6 }}>
            WorldLynk connects non-invasively via REST APIs, webhook listeners, and event brokers. 
            Your existing CRM, Admissions, SIS, and LMS remain your system of record — zero migrations required.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div 
          style={{ 
            backgroundColor: '#ffffff', 
            borderRadius: '12px', 
            border: '1px solid #d4d4d8', 
            padding: '1.25rem', 
            marginBottom: '2rem',
            boxShadow: '0 4px 15px rgba(0,0,0,0.04)'
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
            
            {/* Category Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {categories.map(c => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActiveCategory(c.id)}
                  style={{
                    padding: '0.45rem 0.85rem',
                    borderRadius: '6px',
                    fontSize: '0.78rem',
                    fontWeight: activeCategory === c.id ? 700 : 500,
                    backgroundColor: activeCategory === c.id ? '#0c0c0f' : '#f4f4f5',
                    color: activeCategory === c.id ? '#ffffff' : '#52525b',
                    border: '1px solid',
                    borderColor: activeCategory === c.id ? '#0c0c0f' : '#e4e4e7',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div style={{ position: 'relative', minWidth: '220px' }}>
              <Search size={15} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#71717a' }} />
              <input
                type="text"
                placeholder="Search systems..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.45rem 0.75rem 0.45rem 2.2rem',
                  fontSize: '0.8rem',
                  border: '1px solid #d4d4d8',
                  borderRadius: '6px',
                  backgroundColor: '#fafafa',
                  color: '#18181b'
                }}
              />
            </div>

          </div>

          {/* Status Badge Legend */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid #f4f4f5', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.72rem', color: '#71717a', fontWeight: 600 }}>INTEGRATION STATUS LABELS:</span>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#10b981' }} />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#166534' }}>LIVE (Production Ready)</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#0284c7' }} />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#0369a1' }}>AVAILABLE (Connector Built)</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#d97706' }} />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#b45309' }}>ROADMAP (In Active Development)</span>
            </div>
          </div>
        </div>

        {/* Integrations Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', 
            gap: '1rem' 
          }}
        >
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="card-stone"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                border: '1px solid #e4e4e7',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 2px 5px rgba(0,0,0,0.03)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <div style={{ fontWeight: 700, fontSize: '1rem', color: '#0c0c0f' }}>
                    {item.name}
                  </div>
                  
                  {/* Status Badge */}
                  <span
                    style={{
                      fontSize: '0.66rem',
                      fontWeight: 800,
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      fontFamily: 'var(--font-mono)',
                      backgroundColor: item.status === 'LIVE' ? 'rgba(16, 185, 129, 0.12)' : item.status === 'AVAILABLE' ? 'rgba(2, 132, 199, 0.12)' : 'rgba(217, 119, 6, 0.12)',
                      color: item.status === 'LIVE' ? '#15803d' : item.status === 'AVAILABLE' ? '#0369a1' : '#b45309',
                      border: `1px solid ${item.statusColor}44`
                    }}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="mono-sm text-muted" style={{ fontSize: '0.7rem', marginBottom: '0.65rem' }}>
                  {item.category}
                </div>

                <p style={{ fontSize: '0.82rem', color: '#52525b', lineHeight: 1.45, marginBottom: '1rem' }}>
                  {item.desc}
                </p>
              </div>

              <div style={{ borderTop: '1px solid #f4f4f5', paddingTop: '0.65rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="mono-sm" style={{ fontSize: '0.68rem', color: '#71717a' }}>
                  {item.type}
                </span>
                <span style={{ fontSize: '0.68rem', color: '#15803d', fontWeight: 600 }}>
                  ✓ Non-invasive
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Integrations Link */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link 
            to="/integrations" 
            style={{ 
              color: 'var(--wl-accent)', 
              fontWeight: 700, 
              fontSize: '0.95rem',
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '6px' 
            }}
          >
            <span>Explore all 40+ connectors in our Integrations Directory</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
