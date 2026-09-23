import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  FileCode
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
    <div className="page-wrapper" style={{ minHeight: '100vh', backgroundColor: 'var(--wl-dark)', color: '#ffffff' }}>
      
      {/* ── HERO BANNER ─────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '32px', borderBottom: '1px solid var(--border-hairline)' }}>
        <div className="main-container">
          <div className="flex-between flex-wrap gap-md">
            <div>
              <div className="mono-label" style={{ color: 'var(--accent-orange)', marginBottom: '8px' }}>
                CONNECTOR CATALOG // ZERO-MIGRATION ENTERPRISE ECOSYSTEM
              </div>
              <h1 className="headline-xl" style={{ marginBottom: '12px', lineHeight: 1.15 }}>
                Plug into your university's live technology stack.
              </h1>
              <p className="body-lg text-secondary" style={{ maxWidth: '780px' }}>
                WorldLynk deploys as an operational fabric directly over your existing higher-ed IT infrastructure. Connect your on-premises SIS, learning management systems, payment processors, and student messaging gateways with zero database schema mutations.
              </p>
            </div>

            <div className="flex flex-col gap-sm" style={{ minWidth: '220px' }}>
              <div className="card-dark" style={{ padding: '16px', border: '1px solid var(--border-subtle)' }}>
                <div className="mono-label" style={{ color: 'var(--accent-cyan)', fontSize: '10px' }}>CONNECTOR STACK</div>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', marginTop: '2px' }}>14 Production Connectors</div>
                <div className="mono-sm text-secondary" style={{ fontSize: '11px' }}>Sub-18ms Average Latency</div>
              </div>
              <button onClick={() => setShowCustomModal(true)} className="btn-primary btn-sm" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <span>Request Custom Adaptor</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FILTER & SEARCH RIBBON ──────────────────────────────── */}
      <section className="section" style={{ paddingTop: '32px', paddingBottom: '40px' }}>
        <div className="main-container">
          
          <div className="flex-between flex-wrap gap-md mb-xl" style={{ backgroundColor: '#13131c', padding: '14px 20px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
            {/* Search Box */}
            <div style={{ position: 'relative', width: '300px' }}>
              <Search size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                type="text"
                placeholder="Search connectors, SIS, LMS..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px 8px 32px',
                  backgroundColor: '#191924',
                  border: '1px solid var(--border-hairline)',
                  borderRadius: '6px',
                  color: '#ffffff',
                  fontSize: '12px',
                  outline: 'none'
                }}
              />
            </div>

            {/* Category Tabs */}
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
                  className="tab-btn"
                  style={{
                    padding: '6px 12px',
                    borderRadius: '6px',
                    backgroundColor: selectedCategory === cat.id ? 'var(--accent-orange)' : '#191924',
                    color: selectedCategory === cat.id ? '#ffffff' : 'var(--text-secondary)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '11.5px',
                    fontWeight: selectedCategory === cat.id ? '700' : '500',
                    cursor: 'pointer'
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connectors Grid */}
          <div className="grid-2 gap-md mb-3xl">
            {filteredConnectors.map((c) => {
              const IconComp = c.icon;
              return (
                <div
                  key={c.id}
                  onClick={() => setActiveConnector(c)}
                  className="card-dark card-hover"
                  style={{
                    padding: '24px',
                    borderRadius: '12px',
                    border: '1px solid var(--border-subtle)',
                    backgroundColor: '#13131c',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div className="flex-between mb-sm">
                      <div className="flex gap-sm alignItems-center">
                        <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: 'rgba(255,107,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-orange)' }}>
                          <IconComp size={20} />
                        </div>
                        <div>
                          <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#ffffff', margin: 0 }}>{c.name}</h3>
                          <div className="mono-sm text-secondary" style={{ fontSize: '10.5px' }}>{c.categoryLabel}</div>
                        </div>
                      </div>
                      <span className="pill pill-approved">{c.status}</span>
                    </div>

                    <p className="body-sm text-secondary mb-md" style={{ lineHeight: 1.5 }}>
                      {c.desc}
                    </p>
                  </div>

                  <div className="flex-between mt-sm" style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: '12px' }}>
                    <div className="mono-sm" style={{ fontSize: '10.5px', color: 'var(--accent-cyan)' }}>
                      Latency: {c.latency} · {c.type}
                    </div>
                    <span className="mono-sm" style={{ fontSize: '10.5px', color: 'var(--accent-orange)' }}>
                      Inspect Specs ➔
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bespoke Campus Connector Callout */}
          <div className="card-dark flex-between flex-wrap gap-md" style={{ padding: '32px 36px', borderRadius: '16px', border: '1px solid var(--border-subtle)', backgroundColor: '#13131b' }}>
            <div>
              <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>ON-PREMISES &amp; LEGACY CAMPUS DATABASES</span>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginTop: '4px' }}>
                Need a bespoke campus connector for a legacy database?
              </h3>
              <p className="body-sm text-secondary mt-xs" style={{ maxWidth: '680px' }}>
                Our systems engineering team builds certified bi-directional adaptors for custom on-premises SQL databases, legacy Oracle campus installations, and proprietary student housing backends within 3 weeks.
              </p>
            </div>
            <button onClick={() => setShowCustomModal(true)} className="btn-primary" style={{ flexShrink: 0 }}>
              Request Custom Connector ➔
            </button>
          </div>

        </div>
      </section>

      {/* ── MODAL: CONNECTOR TECH SPECS DRAWER ─────────────────────── */}
      {activeConnector && (
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
            maxWidth: '640px',
            width: '100%',
            padding: '28px',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.9)'
          }}>
            <div className="flex-between mb-md">
              <div>
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>CONNECTOR TECHNICAL SPECIFICATION</span>
                <h3 className="headline-sm" style={{ marginTop: '2px' }}>{activeConnector.name}</h3>
              </div>
              <button onClick={() => setActiveConnector(null)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
            </div>

            <div style={{ backgroundColor: '#0d0d12', padding: '16px', borderRadius: '10px', border: '1px solid #222230', marginBottom: '16px' }}>
              <div className="mono-sm" style={{ fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--text-secondary)' }}>
                <div><strong>CATEGORY:</strong> {activeConnector.categoryLabel}</div>
                <div><strong>INTEGRATION TYPE:</strong> {activeConnector.type}</div>
                <div><strong>SYNC CADENCE:</strong> {activeConnector.syncFreq}</div>
                <div><strong>AVERAGE LATENCY:</strong> <span style={{ color: 'var(--accent-emerald)' }}>{activeConnector.latency}</span></div>
                <div><strong>CRYPTOGRAPHIC ENVELOPE:</strong> AES-256 with mTLS Certificate Pinning</div>
              </div>
            </div>

            <div className="mono-label" style={{ fontSize: '9.5px', marginBottom: '6px' }}>SAMPLE PAYLOAD SCHEMA</div>
            <div style={{ backgroundColor: '#060609', padding: '14px', borderRadius: '8px', border: '1px solid #1a1a24', marginBottom: '20px' }}>
              <pre style={{ margin: 0, fontSize: '11px', color: 'var(--accent-cyan)', fontFamily: 'var(--wl-font-mono)', lineHeight: 1.5, overflowX: 'auto' }}>
                {JSON.stringify(activeConnector.schemaSample, null, 2)}
              </pre>
            </div>

            <div className="flex justify-end gap-sm">
              <button onClick={() => setActiveConnector(null)} className="btn-secondary btn-sm">
                Close
              </button>
              <Link to="/contact" className="btn-primary btn-sm">
                Inquire for Campus Pilot ➔
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
            maxWidth: '560px',
            width: '100%',
            padding: '28px',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.9)'
          }}>
            <div className="flex-between mb-md">
              <div>
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>INTEGRATION ENGINEERING</span>
                <h3 className="headline-sm" style={{ marginTop: '2px' }}>Request Bespoke Campus Adaptor</h3>
              </div>
              <button onClick={() => setShowCustomModal(false)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
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
                <button type="submit" className="btn-primary btn-sm">
                  Submit Feasibility Request ➔
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
