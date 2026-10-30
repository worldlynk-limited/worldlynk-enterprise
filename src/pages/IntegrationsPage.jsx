import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EnterpriseCTASection from '../components/EnterpriseCTASection';
import IntegrationsMatrixSection from '../components/funnel/IntegrationsMatrixSection';
import {
  Database,
  Building,
  GraduationCap,
  BookOpen,
  CreditCard,
  Search,
  MessageSquare,
  Send,
  Cpu,
  Layers,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Globe,
  RefreshCw,
  Zap,
  Terminal,
  FileCode,
  X
} from 'lucide-react';

const ALL_CONNECTORS = [
  {
    id: 'sits',
    name: 'SITS:Vision (Tribal Group)',
    category: 'SIS',
    categoryLabel: 'Student Information System',
    type: 'Bi-Directional Transactional Sync',
    status: 'Production',
    icon: Database,
    latency: '8ms',
    syncFreq: 'Sub-second Webhooks + CDC Poll',
    desc: 'Bi-directionally synchronizes student records, enrollment status, degree audits, CAS generation briefs, and marks with zero schema alteration.',
    schemaSample: { "source": "sits_vision", "table": "STU_RECORD", "fields": ["STU_CODE", "DEGREE_ID", "ENROL_STATUS", "CAS_REF"], "cdc_mode": "WAL_STREAMING" }
  },
  {
    id: 'banner',
    name: 'Ellucian Banner',
    category: 'SIS',
    categoryLabel: 'Student Information System',
    type: 'REST & Ethos Data Bus',
    status: 'Production',
    icon: Building,
    latency: '14ms',
    syncFreq: 'Ethos Webhooks (Sub-100ms)',
    desc: 'Real-time student academic status, registration hold clearance, degree progress evaluations, and international bursary reconciliations.',
    schemaSample: { "source": "ellucian_banner", "api": "ethos_rest_v2", "resources": ["student-academic-periods", "holds", "academic-credentials"] }
  },
  {
    id: 'oracle_campus',
    name: 'Oracle PeopleSoft Campus Solutions',
    category: 'SIS',
    categoryLabel: 'Student Information System',
    type: 'Integration Broker (REST/XML)',
    status: 'Production',
    icon: Database,
    latency: '16ms',
    syncFreq: 'Transactional Queue (1-sec)',
    desc: 'Seamlessly maps legacy student enrollment rosters, financial aid packages, and academic advising logs into the unified entity graph.',
    schemaSample: { "source": "peoplesoft_cs", "broker": "rest_node", "objects": ["STDNT_ENRL", "ACAD_PROG", "SSR_TSRPT"] }
  },
  {
    id: 'workday',
    name: 'Workday Student',
    category: 'SIS',
    categoryLabel: 'Student Information System',
    type: 'Enterprise Interface Builder (EIB)',
    status: 'Production',
    icon: Building,
    latency: '18ms',
    syncFreq: 'Near Real-Time API Stream',
    desc: 'Modern cloud SIS connector streaming student degree trajectory milestones, course registration rosters, and academic standing.',
    schemaSample: { "source": "workday_student", "protocol": "eib_stream", "entities": ["Student_Records", "Academic_Units", "Registration_Holds"] }
  },
  {
    id: 'moodle',
    name: 'Moodle LMS',
    category: 'LMS',
    categoryLabel: 'Learning Management System',
    type: 'AES-256 Token Proxy Client',
    status: 'Production',
    icon: GraduationCap,
    latency: '12ms',
    syncFreq: 'Live Event Observer + Polling',
    desc: 'Streams student logins, course interaction telemetry, quiz submissions, and syllabus engagement radar for early dropout prediction.',
    schemaSample: { "source": "moodle_lms", "auth": "aes256_proxy", "events": ["user_logged_in", "course_module_viewed", "assign_submitted"] }
  },
  {
    id: 'canvas',
    name: 'Canvas LMS (Instructure)',
    category: 'LMS',
    categoryLabel: 'Learning Management System',
    type: 'LTI 1.3 & GraphQL Gateway',
    status: 'Production',
    icon: BookOpen,
    latency: '10ms',
    syncFreq: 'Live Webhooks + GraphQL Subscription',
    desc: 'Deep integration with Canvas SpeedGrader, assignment submission timestamps, module discussions, and syllabus risk analytics.',
    schemaSample: { "source": "canvas_lms", "standard": "lti_1_3_advantage", "endpoints": ["assignments", "submissions", "course_analytics"] }
  },
  {
    id: 'blackboard',
    name: 'Blackboard Learn Ultra',
    category: 'LMS',
    categoryLabel: 'Learning Management System',
    type: 'REST APIs & Caliper Analytics',
    status: 'Production',
    icon: BookOpen,
    latency: '15ms',
    syncFreq: 'Caliper Sensor Stream',
    desc: 'Ingests IMS Global Caliper sensor events to evaluate student study patterns, lecture content downloads, and discussion forum participation.',
    schemaSample: { "source": "blackboard_ultra", "caliper": "sensor_v1p2", "metric": "NavigationEvent" }
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp Business (Baileys)',
    category: 'Gateways',
    categoryLabel: 'Messaging Gateway',
    type: 'Live WebSocket Messaging Loop',
    status: 'Production',
    icon: MessageSquare,
    latency: '60ms',
    syncFreq: 'Instant 2-Way Message Push',
    desc: 'Zero-app-install student communication delivering attendance warnings, makeup lab slot bookings, and PBSA housing updates.',
    schemaSample: { "gateway": "baileys_ws", "channel": "whatsapp_secure", "templates": ["absence_makeup_offer", "ukvi_work_warning"] }
  },
  {
    id: 'telegram',
    name: 'Telegram Bot API',
    category: 'Gateways',
    categoryLabel: 'Messaging Gateway',
    type: 'Webhook & High-Speed Polling',
    status: 'Production',
    icon: Send,
    latency: '55ms',
    syncFreq: 'Real-Time Webhook',
    desc: 'High-speed messaging adapter for incoming international cohorts: pre-departure arrival checklists, airport transfers, and housing tours.',
    schemaSample: { "gateway": "telegram_bot", "security": "webhook_secret_token", "capabilities": ["inline_keyboards", "photo_verification"] }
  },
  {
    id: 'stripe',
    name: 'Stripe Connect & Escrows',
    category: 'Finance',
    categoryLabel: 'Payments & Housing Escrows',
    type: 'Custom Accounts & Hold Escrow',
    status: 'Production',
    icon: CreditCard,
    latency: '45ms',
    syncFreq: 'Stripe Webhooks (Sub-200ms)',
    desc: 'Secures PBSA student accommodation deposits in escrow, manages tuition payment schedules, and dispenses peer tutor stipends.',
    schemaSample: { "gateway": "stripe_connect", "escrow_contract": "hold_until_checkin", "currencies": ["GBP", "EUR", "USD", "INR"] }
  },
  {
    id: 'flywire',
    name: 'Flywire International Payments',
    category: 'Finance',
    categoryLabel: 'Payments & Housing Escrows',
    type: 'International Tuition Gateway',
    status: 'Production',
    icon: CreditCard,
    latency: '50ms',
    syncFreq: 'Daily Settlement Webhooks',
    desc: 'Verifies international tuition settlements across 140+ foreign currencies directly matching against the university SITS student account.',
    schemaSample: { "gateway": "flywire_api", "event": "payment_delivered", "currency_conversion": "fx_guaranteed" }
  },
  {
    id: 'algolia',
    name: 'Algolia Search Engine',
    category: 'Operations',
    categoryLabel: 'Discovery & Vector Index',
    type: 'Sub-20ms Faceted Search',
    status: 'Production',
    icon: Search,
    latency: '16ms',
    syncFreq: 'Incremental Real-Time Indexing',
    desc: 'Instant faceted search across university course catalogs, verified campus barista jobs, student societies, and PBSA housing rosters.',
    schemaSample: { "engine": "algolia_search", "indices": ["courses_catalog", "campus_jobs", "pbsa_rooms"], "latency_ms": 16 }
  },
  {
    id: 'bullmq',
    name: 'BullMQ & Redis Cluster',
    category: 'Operations',
    categoryLabel: 'Task Execution Engine',
    type: '14 Dedicated Task Workers',
    status: 'Production',
    icon: Layers,
    latency: '2ms',
    syncFreq: 'Sub-Millisecond Message Queue',
    desc: 'High-throughput background job cluster executing UKVI 20-hour work cap recalculations, dynamic QR token rotators, and attendance cleanups.',
    schemaSample: { "queue": "bullmq_cluster", "workers": 14, "jobs": ["qr_token_rotator", "work_cap_audit", "risk_recalculation"] }
  },
  {
    id: 'firestore',
    name: 'Firebase Firestore Enterprise',
    category: 'Operations',
    categoryLabel: 'Database & Sync Layer',
    type: 'Multi-Tenant Scoped Database',
    status: 'Production',
    icon: Database,
    latency: '18ms',
    syncFreq: 'Real-time WebSocket Listeners',
    desc: 'Low-latency multi-tenant document store with strict universityId boundary partition rules and client-side offline sync.',
    schemaSample: { "db": "firestore_multi_tenant", "isolation": "rules_scoped_by_universityId", "encryption": "aes256_gcm" }
  }
];

export default function IntegrationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeConnector, setActiveConnector] = useState(null);
  const [showCustomModal, setShowCustomModal] = useState(false);

  const filteredConnectors = ALL_CONNECTORS.filter(c => {
    const matchesCat = selectedCategory === 'All' || c.category === selectedCategory;
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', backgroundColor: 'var(--wl-dark)', color: '#0c0c0f' }}>
      
      {/* ── HERO INTEGRATIONS MATRIX SECTION ──────────────────────── */}
      <IntegrationsMatrixSection 
        isFullPage={true} 
        onRequestCustom={() => setShowCustomModal(true)} 
      />

      {/* ── FILTER & SEARCH RIBBON ──────────────────────────────── */}
      {/* <section className="section section-spacious">
        <div className="main-container">
          
          <div className="flex-between flex-wrap gap-md mb-xl" style={{ backgroundColor: '#ffffff', padding: '16px 22px', borderRadius: '14px', border: '1px solid rgba(15, 23, 42, 0.08)' }}>
            <div style={{ position: 'relative', width: '320px', maxWidth: '100%' }}>
              <Search size={15} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                type="text"
                placeholder="Search connectors, SIS, LMS..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '9px 14px 9px 36px',
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(15, 23, 42, 0.08)',
                  borderRadius: '8px',
                  color: '#0c0c0f',
                  fontSize: '12.5px',
                  outline: 'none'
                }}
              />
            </div>

            <div className="flex gap-xs flex-wrap">
              {[
                { id: 'All', label: 'All Ecosystem' },
                { id: 'SIS', label: 'Student Records (SIS)' },
                { id: 'LMS', label: 'Courseware (LMS)' },
                { id: 'Gateways', label: 'Messaging Gateways' },
                { id: 'Finance', label: 'Finance & Escrows' },
                { id: 'Operations', label: 'Operations & Tasks' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`tab-pill-premium ${selectedCategory === cat.id ? 'tab-pill-premium--active' : ''}`}
                  style={{ padding: '7px 14px', fontSize: '11.5px' }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid-2 gap-lg mb-3xl">
            {filteredConnectors.map((c) => {
              const IconComp = c.icon;
              return (
                <div
                  key={c.id}
                  onClick={() => setActiveConnector(c)}
                  className="card-elevated card-interactive"
                  style={{
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundColor: '#ffffff'
                  }}
                >
                  <div>
                    <div className="flex-between mb-sm">
                      <div className="flex gap-sm alignItems-center">
                        <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'rgba(255,107,0,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-orange)' }}>
                          <IconComp size={20} />
                        </div>
                        <div>
                          <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0c0c0f', margin: 0 }}>{c.name}</h3>
                          <div className="mono-sm text-secondary" style={{ fontSize: '11px', marginTop: '2px' }}>{c.categoryLabel}</div>
                        </div>
                      </div>
                      <span className="pill pill-approved">{c.status}</span>
                    </div>

                    <p className="body-sm text-secondary mb-md" style={{ lineHeight: 1.6, fontSize: '12.5px' }}>
                      {c.desc}
                    </p>
                  </div>

                  <div className="flex-between mt-sm" style={{ borderTop: '1px solid rgba(15, 23, 42, 0.08)', paddingTop: '14px' }}>
                    <div className="mono-sm" style={{ fontSize: '11px', color: 'var(--accent-cyan)' }}>
                       Latency: {c.latency} · {c.type}
                     </div>
                     <span className="mono-sm" style={{ fontSize: '11px', color: 'var(--accent-orange)', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: '600' }}>
                       Inspect Specs <ArrowRight size={12} />
                     </span>
                   </div>
                 </div>
               );
             })}
           </div>

           <div className="card-elevated flex-between flex-wrap gap-md mb-xl" style={{ padding: '36px', backgroundColor: '#ffffff' }}>
             <div>
               <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>ON-PREMISES &amp; CUSTOM CAMPUS SYSTEMS</span>
               <h3 style={{ fontSize: '1.35rem', fontWeight: '800', marginTop: '6px', color: '#0c0c0f' }}>
                 Need an integration for a custom or in-house database?
               </h3>
               <p className="body-sm text-secondary mt-xs" style={{ maxWidth: '680px', lineHeight: 1.6 }}>
                 Our engineering team builds certified integrations for custom on-premises SQL databases, legacy campus setups, and proprietary student housing backends in under 3 weeks.
               </p>
             </div>
             <button onClick={() => setShowCustomModal(true)} className="btn-primary" style={{ flexShrink: 0, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
               <span>Request Custom Integration</span>
               <ArrowRight size={13} />
             </button>
           </div>

        </div>
      </section> */}

      {/* ── BOTTOM CONVERSION CTA ────────────────────────────── */}
      <EnterpriseCTASection 
        eyebrow="READY TO CONNECT YOUR CAMPUS?"
        title="Check system compatibility for your university."
        description="Book an integration audit with our systems architects. We will inspect your SITS, Banner, Canvas, or Moodle APIs and confirm connectivity in under 48 hours."
        primaryText="Request Integration Architecture Review"
        primaryLink="/demo"
        secondaryText="View Security &amp; Data Isolation"
        secondaryLink="/security"
        secondaryIsExternal={false}
      />

      {/* ── MODAL: CONNECTOR TECH SPECS DRAWER ─────────────────────── */}
      {activeConnector && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(12, 12, 15, 0.55)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            border: '1px solid var(--border-subtle)',
            borderRadius: '16px',
            maxWidth: '640px',
            width: '100%',
            padding: '28px',
            boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.55)'
          }}>
            <div className="flex-between mb-md">
              <div>
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>CONNECTOR TECHNICAL SPECIFICATION</span>
                <h3 className="headline-sm" style={{ marginTop: '2px' }}>{activeConnector.name}</h3>
              </div>
              <button onClick={() => setActiveConnector(null)} style={{ background: 'none', border: 'none', color: '#0c0c0f', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <X size={18} />
              </button>
            </div>

            <div style={{ backgroundColor: '#f4f1ee', padding: '16px', borderRadius: '10px', border: '1px solid #d8d4cd', marginBottom: '16px' }}>
              <div className="mono-sm" style={{ fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--text-secondary)' }}>
                <div><strong>CATEGORY:</strong> {activeConnector.categoryLabel}</div>
                <div><strong>INTEGRATION TYPE:</strong> {activeConnector.type}</div>
                <div><strong>SYNC CADENCE:</strong> {activeConnector.syncFreq}</div>
                <div><strong>AVERAGE LATENCY:</strong> <span style={{ color: 'var(--accent-emerald)' }}>{activeConnector.latency}</span></div>
                <div><strong>CRYPTOGRAPHIC ENVELOPE:</strong> AES-256 with mTLS Certificate Pinning</div>
              </div>
            </div>

            <div className="mono-label" style={{ fontSize: '9.5px', marginBottom: '6px' }}>SAMPLE PAYLOAD SCHEMA</div>
            <div style={{ backgroundColor: '#f4f1ee', padding: '14px', borderRadius: '8px', border: '1px solid #d8d4cd', marginBottom: '20px' }}>
              <pre style={{ margin: 0, fontSize: '11px', color: 'var(--accent-cyan)', fontFamily: 'var(--wl-font-mono)', lineHeight: 1.5, overflowX: 'auto' }}>
                {JSON.stringify(activeConnector.schemaSample, null, 2)}
              </pre>
            </div>

            <div className="flex justify-end gap-sm">
              <button onClick={() => setActiveConnector(null)} className="btn-secondary btn-sm">
                Close
              </button>
              <Link to="/contact" className="btn-primary btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <span>Inquire for Campus Pilot</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ── MODAL: REQUEST CUSTOM CONNECTOR ───────────────────────── */}
      {showCustomModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(12, 12, 15, 0.55)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            border: '1px solid var(--border-subtle)',
            borderRadius: '16px',
            maxWidth: '560px',
            width: '100%',
            padding: '28px',
            boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.55)'
          }}>
            <div className="flex-between mb-md">
              <div>
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>INTEGRATION ENGINEERING</span>
                <h3 className="headline-sm" style={{ marginTop: '2px' }}>Request Bespoke Campus Adaptor</h3>
              </div>
              <button onClick={() => setShowCustomModal(false)} style={{ background: 'none', border: 'none', color: '#0c0c0f', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <X size={18} />
              </button>
            </div>

            <p className="body-sm text-secondary mb-md">
              Provide details on your institution's legacy database or proprietary accommodation system. Our integration engineers will review feasibility within 24 hours.
            </p>

            <form onSubmit={(e) => { e.preventDefault(); alert('Custom adaptor request submitted to engineering.'); setShowCustomModal(false); }} className="flex flex-col gap-sm">
              <div className="form-group">
                <label className="form-label">University / Institution</label>
                <input type="text" required placeholder="University of Oxford" className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">Legacy System / Database Version</label>
                <input type="text" required placeholder="Custom Oracle 19c on-premise SIS" className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">Your Email</label>
                <input type="email" required placeholder="lead.architect@university.ac.uk" className="form-input" />
              </div>
              <div className="flex justify-end gap-sm mt-sm">
                <button type="button" onClick={() => setShowCustomModal(false)} className="btn-secondary btn-sm">
                  Cancel
                </button>
                <button type="submit" className="btn-primary btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <span>Submit Feasibility Request</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
