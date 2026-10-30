import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EnterpriseCTASection from '../components/EnterpriseCTASection';
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
  X,
  Code,
  Activity,
  Check
} from 'lucide-react';

const ALL_CONNECTORS = [
  {
    id: 'sits',
    name: 'SITS:Vision (Tribal Group)',
    category: 'SIS',
    categoryLabel: 'Student Information System',
    type: 'Bi-Directional Transactional Sync',
    status: 'Production Live',
    icon: Database,
    latency: '8ms',
    syncFreq: 'Sub-second Webhooks + CDC Poll',
    desc: 'Bi-directionally synchronizes student records, enrollment status, degree audits, CAS generation briefs, and marks with zero schema alteration.',
    schemaSample: {
      "source": "sits_vision",
      "entity": "STU_RECORD",
      "cdc_mode": "WAL_STREAMING",
      "fields": ["STU_CODE", "DEGREE_ID", "ENROL_STATUS", "CAS_REF", "TIER4_HOURS_LOGGED"],
      "security": "Mutual TLS (mTLS) + IP Allowlist",
      "sync_cadence": "Real-time trigger on record mutation"
    }
  },
  {
    id: 'banner',
    name: 'Ellucian Banner',
    category: 'SIS',
    categoryLabel: 'Student Information System',
    type: 'REST & Ethos Data Bus',
    status: 'Production Live',
    icon: Building,
    latency: '14ms',
    syncFreq: 'Ethos Webhooks (Sub-100ms)',
    desc: 'Real-time student academic status, registration hold clearance, degree progress evaluations, and international bursary reconciliations.',
    schemaSample: {
      "source": "ellucian_banner",
      "api": "ethos_rest_v2",
      "resources": ["student-academic-periods", "holds", "academic-credentials"],
      "auth": "OAuth2 Bearer with Institutional Scopes",
      "retry_policy": "Exponential backoff with dead-letter queue"
    }
  },
  {
    id: 'oracle_campus',
    name: 'Oracle PeopleSoft Campus Solutions',
    category: 'SIS',
    categoryLabel: 'Student Information System',
    type: 'Integration Broker (REST/XML)',
    status: 'Production Live',
    icon: Database,
    latency: '16ms',
    syncFreq: 'Transactional Queue (1-sec)',
    desc: 'Seamlessly maps student enrolment rosters, bursaries & hardship allocations, and academic advising logs into the unified entity graph.',
    schemaSample: {
      "source": "peoplesoft_cs",
      "broker": "rest_node",
      "objects": ["STDNT_ENRL", "ACAD_PROG", "SSR_TSRPT"],
      "encryption": "AES-256-GCM"
    }
  },
  {
    id: 'workday',
    name: 'Workday Student',
    category: 'SIS',
    categoryLabel: 'Student Information System',
    type: 'Enterprise Interface Builder (EIB)',
    status: 'Production Live',
    icon: Building,
    latency: '18ms',
    syncFreq: 'Near Real-Time API Stream',
    desc: 'Modern cloud SIS connector streaming student degree trajectory milestones, course registration rosters, and academic standing.',
    schemaSample: {
      "source": "workday_student",
      "protocol": "eib_stream",
      "entities": ["Student_Records", "Academic_Units", "Registration_Holds"],
      "format": "JSON / REST API"
    }
  },
  {
    id: 'moodle',
    name: 'Moodle LMS',
    category: 'LMS',
    categoryLabel: 'Learning Management System',
    type: 'AES-256 Token Proxy Client',
    status: 'Production Live',
    icon: GraduationCap,
    latency: '12ms',
    syncFreq: 'Live Event Observer + Polling',
    desc: 'Streams student logins, course interaction telemetry, quiz submissions, and syllabus engagement radar for early dropout prediction.',
    schemaSample: {
      "source": "moodle_lms",
      "auth": "aes256_proxy",
      "events": ["user_logged_in", "course_module_viewed", "assign_submitted", "forum_post_created"],
      "lead_time": "14 days earlier warning trigger"
    }
  },
  {
    id: 'canvas',
    name: 'Canvas LMS (Instructure)',
    category: 'LMS',
    categoryLabel: 'Learning Management System',
    type: 'LTI 1.3 & GraphQL Gateway',
    status: 'Production Live',
    icon: BookOpen,
    latency: '10ms',
    syncFreq: 'Live Webhooks + GraphQL Subscription',
    desc: 'Deep integration with Canvas SpeedGrader, assignment submission timestamps, module discussions, and syllabus risk analytics.',
    schemaSample: {
      "source": "canvas_lms",
      "standard": "lti_1_3_advantage",
      "endpoints": ["assignments", "submissions", "course_analytics"],
      "sync": "Bi-directional assignment extension writeback"
    }
  },
  {
    id: 'blackboard',
    name: 'Blackboard Learn Ultra',
    category: 'LMS',
    categoryLabel: 'Learning Management System',
    type: 'REST APIs & Caliper Analytics',
    status: 'Production Live',
    icon: BookOpen,
    latency: '15ms',
    syncFreq: 'Caliper Sensor Stream',
    desc: 'Ingests IMS Global Caliper sensor events to evaluate student study patterns, lecture content downloads, and discussion forum participation.',
    schemaSample: {
      "source": "blackboard_ultra",
      "caliper": "sensor_v1p2",
      "metric": "NavigationEvent",
      "sampling": "Continuous event pipeline"
    }
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp Business API',
    category: 'Gateways',
    categoryLabel: 'Messaging Gateway',
    type: 'Live WebSocket Messaging Loop',
    status: 'Production Live',
    icon: MessageSquare,
    latency: '60ms',
    syncFreq: 'Instant 2-Way Message Push',
    desc: 'Zero-app-install student communication delivering attendance warnings, makeup lab slot bookings, and PBSA housing updates.',
    schemaSample: {
      "gateway": "whatsapp_cloud_api",
      "security": "End-to-End Encrypted via Meta Business Platform",
      "templates": ["absence_makeup_offer", "ukvi_work_warning", "accommodation_key_ready"],
      "sla": "Instant push under 2 seconds"
    }
  },
  {
    id: 'telegram',
    name: 'Telegram Bot API',
    category: 'Gateways',
    categoryLabel: 'Messaging Gateway',
    type: 'Webhook & High-Speed Polling',
    status: 'Production Live',
    icon: Send,
    latency: '55ms',
    syncFreq: 'Real-Time Webhook',
    desc: 'High-speed messaging adapter for incoming international cohorts: pre-departure arrival checklists, airport transfers, and housing tours.',
    schemaSample: {
      "gateway": "telegram_bot",
      "security": "webhook_secret_token",
      "capabilities": ["inline_keyboards", "photo_verification", "push_broadcasts"]
    }
  },
  {
    id: 'stripe',
    name: 'Stripe Connect & Escrows',
    category: 'Finance',
    categoryLabel: 'Payments & Housing Escrows',
    type: 'Custom Accounts & Hold Escrow',
    status: 'Production Live',
    icon: CreditCard,
    latency: '45ms',
    syncFreq: 'Stripe Webhooks (Sub-200ms)',
    desc: 'Secures PBSA student accommodation deposits in escrow, manages tuition payment schedules, and dispenses peer tutor stipends.',
    schemaSample: {
      "gateway": "stripe_connect",
      "escrow_contract": "hold_until_checkin",
      "currencies": ["GBP", "EUR", "USD", "INR"],
      "compliance": "PCI-DSS Level 1 Certified"
    }
  },
  {
    id: 'flywire',
    name: 'Flywire International Payments',
    category: 'Finance',
    categoryLabel: 'Payments & Housing Escrows',
    type: 'International Tuition Gateway',
    status: 'Production Live',
    icon: CreditCard,
    latency: '50ms',
    syncFreq: 'Daily Settlement Webhooks',
    desc: 'Verifies international tuition settlements across 140+ foreign currencies directly matching against the university SITS student account.',
    schemaSample: {
      "gateway": "flywire_api",
      "event": "payment_delivered",
      "currency_conversion": "fx_guaranteed",
      "reconciliation": "Automated SITS transaction matching"
    }
  },
  {
    id: 'firestore',
    name: 'Sovereign Multi-Tenant Store',
    category: 'Operations',
    categoryLabel: 'Secure Database Layer',
    type: 'Scoped Multi-Tenant Database',
    status: 'Production Live',
    icon: Database,
    latency: '18ms',
    syncFreq: 'Real-time WebSocket Listeners',
    desc: 'Low-latency multi-tenant document store with strict universityId boundary partition rules, UK London data residency, and client-side offline sync.',
    schemaSample: {
      "residency": "London AWS eu-west-2 & GCP europe-west2",
      "isolation": "Row-level tenant security by universityId",
      "encryption": "AES-256 at rest, TLS 1.3 in transit"
    }
  }
];

export default function IntegrationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSchemaModal, setActiveSchemaModal] = useState(null);
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const filteredConnectors = ALL_CONNECTORS.filter(c => {
    const matchesCat = selectedCategory === 'All' || c.category === selectedCategory;
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleCopy = (code) => {
    navigator.clipboard.writeText(JSON.stringify(code, null, 2));
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', backgroundColor: 'var(--wl-light)', color: '#0c0c0f' }}>
      
      {/* ── HERO ARCHITECTURAL BANNER ─────────────────────────────── */}
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '48px', borderBottom: '1px solid #d8d4cd' }}>
        <div className="main-container">
          <div className="flex-between flex-wrap gap-md" style={{ alignItems: 'flex-start' }}>
            <div style={{ maxWidth: '820px' }}>
              <div className="mono-label" style={{ color: 'var(--accent-orange)', marginBottom: '10px' }}>
                CAMPUS CONNECTIVITY MESH // BI-DIRECTIONAL EVENT FABRIC
              </div>
              <h1 className="headline-xl" style={{ marginBottom: '16px', lineHeight: 1.12, textWrap: 'balance' }}>
                The bi-directional data layer for modern universities.
              </h1>
              <p className="body-lg text-secondary" style={{ maxWidth: '740px', lineHeight: 1.65 }}>
                No disruptive multi-year IT migrations. WorldLynk plugs non-invasively into SITS:Vision, Banner, Moodle, and Canvas with sub-second real-time CDC synchronization — keeping your underlying core records completely intact.
              </p>
            </div>

            <div className="flex flex-col gap-sm" style={{ minWidth: '260px' }}>
              <div className="card-elevated" style={{ padding: '20px', borderLeft: '3px solid var(--accent-emerald)' }}>
                <div className="mono-label" style={{ color: 'var(--accent-emerald)', fontSize: '10px' }}>GUARANTEED INTEGRITY</div>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', marginTop: '4px', color: '#0c0c0f' }}>0 Schema Changes</div>
                <div className="mono-sm text-secondary" style={{ fontSize: '11px', marginTop: '2px' }}>Non-invasive read/write adapters</div>
              </div>
              <button
                onClick={() => setShowCustomModal(true)}
                className="btn-primary btn-sm"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
              >
                <span>Request Custom SIS Adapter</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

          {/* ── LIVE INTERACTIVE MESH TOPOLOGY STRIP ── */}
          <div
            style={{
              marginTop: '40px',
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #d8d4cd',
              padding: '24px 32px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)'
            }}
          >
            <div className="flex-between mb-md flex-wrap gap-xs">
              <span className="mono-label" style={{ color: 'var(--accent-orange)', fontSize: '10px' }}>
                ARCHITECTURE TOPOLOGY // HOW DATA FLOWS
              </span>
              <span className="pill pill-approved" style={{ fontSize: '9px' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block', marginRight: '6px' }} />
                ACTIVE BI-DIRECTIONAL PIPELINE (SUB-15MS)
              </span>
            </div>

            <div className="grid-3 gap-lg" style={{ alignItems: 'center', position: 'relative' }}>
              {/* Step 1: Core Records */}
              <div style={{ backgroundColor: '#f4f1ee', padding: '18px', borderRadius: '12px', border: '1px solid #d8d4cd' }}>
                <div className="flex-between mb-xs">
                  <span className="mono-sm" style={{ color: 'var(--accent-cyan)', fontWeight: '700', fontSize: '10px' }}>01 · SOURCE OF TRUTH</span>
                  <Database size={14} color="#0c0c0f" />
                </div>
                <div style={{ fontSize: '14px', fontWeight: '800', color: '#0c0c0f' }}>Campus Core Systems</div>
                <p className="mono-sm text-secondary" style={{ fontSize: '10.5px', marginTop: '4px', lineHeight: 1.4 }}>
                  Tribal SITS, Ellucian Banner, Moodle LMS, Canvas, and student payroll.
                </p>
                <div className="mono-sm mt-xs" style={{ fontSize: '9px', color: 'var(--accent-emerald)' }}>
                  ✓ Untouched &amp; Unaltered
                </div>
              </div>

              {/* Step 2: WorldLynk Mesh */}
              <div style={{ backgroundColor: '#0c0c0f', color: '#ffffff', padding: '18px', borderRadius: '12px', border: '1px solid #2a2a35', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
                <div className="flex-between mb-xs">
                  <span className="mono-sm" style={{ color: 'var(--accent-orange)', fontWeight: '700', fontSize: '10px' }}>02 · UNIFIED INTELLIGENCE</span>
                  <Zap size={14} color="var(--accent-orange)" />
                </div>
                <div style={{ fontSize: '14px', fontWeight: '800' }}>WorldLynk Real-Time Mesh</div>
                <p className="mono-sm" style={{ fontSize: '10.5px', marginTop: '4px', color: '#9ca3af', lineHeight: 1.4 }}>
                  CDC Event Bus · Entity Vector Graph · Zero-Retention Inference · Policy Arbiter.
                </p>
                <div className="mono-sm mt-xs" style={{ fontSize: '9px', color: 'var(--accent-orange)' }}>
                  ⚡ Sub-15ms Sync Latency
                </div>
              </div>

              {/* Step 3: Frontline Interfaces */}
              <div style={{ backgroundColor: '#f4f1ee', padding: '18px', borderRadius: '12px', border: '1px solid #d8d4cd' }}>
                <div className="flex-between mb-xs">
                  <span className="mono-sm" style={{ color: 'var(--accent-purple)', fontWeight: '700', fontSize: '10px' }}>03 · GOVERNED ACTION</span>
                  <ShieldCheck size={14} color="#0c0c0f" />
                </div>
                <div style={{ fontSize: '14px', fontWeight: '800', color: '#0c0c0f' }}>Staff &amp; Student Interfaces</div>
                <p className="mono-sm text-secondary" style={{ fontSize: '10.5px', marginTop: '4px', lineHeight: 1.4 }}>
                  Compass Staff Triage · Mobile Super-App · WhatsApp · 1-Click SITS Approvals.
                </p>
                <div className="mono-sm mt-xs" style={{ fontSize: '9px', color: 'var(--accent-purple)' }}>
                  ✓ 100% Certified Human Sign-Off
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── FILTER & SEARCH RIBBON ────────────────────────────────── */}
      <section className="section" style={{ paddingTop: '36px', paddingBottom: '60px' }}>
        <div className="main-container">
          
          <div
            className="flex-between flex-wrap gap-md mb-xl"
            style={{
              backgroundColor: '#ffffff',
              padding: '16px 20px',
              borderRadius: '14px',
              border: '1px solid #d8d4cd',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)'
            }}
          >
            {/* Search Input */}
            <div style={{ position: 'relative', width: '320px', maxWidth: '100%' }}>
              <Search size={15} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#71717a' }} />
              <input
                type="text"
                placeholder="Search SITS, Banner, Moodle, APIs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '9px 14px 9px 36px',
                  backgroundColor: '#f4f1ee',
                  border: '1px solid #d8d4cd',
                  borderRadius: '8px',
                  color: '#0c0c0f',
                  fontSize: '12.5px',
                  outline: 'none'
                }}
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex gap-xs flex-wrap">
              {[
                { id: 'All', label: 'All Connectors (12)' },
                { id: 'SIS', label: 'Student Records (4)' },
                { id: 'LMS', label: 'Learning Portals (3)' },
                { id: 'Gateways', label: 'Messaging & Mobile (2)' },
                { id: 'Finance', label: 'Finance & Housing (2)' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`tab-pill-premium ${selectedCategory === cat.id ? 'tab-pill-premium--active' : ''}`}
                  style={{ padding: '8px 16px', fontSize: '11.5px' }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connectors Grid */}
          <div className="grid-2 gap-lg mb-2xl">
            {filteredConnectors.map((c) => {
              const IconComp = c.icon;
              return (
                <div
                  key={c.id}
                  className="card-elevated"
                  style={{
                    padding: '28px',
                    borderRadius: '14px',
                    border: '1px solid #d8d4cd',
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.02)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                  }}
                >
                  <div>
                    <div className="flex-between mb-sm">
                      <div className="flex gap-sm alignItems-center">
                        <div
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '10px',
                            backgroundColor: '#f4f1ee',
                            border: '1px solid #d8d4cd',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--accent-orange)'
                          }}
                        >
                          <IconComp size={22} />
                        </div>
                        <div>
                          <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0c0c0f', margin: 0 }}>
                            {c.name}
                          </h3>
                          <div className="mono-sm text-secondary" style={{ fontSize: '10.5px', marginTop: '2px' }}>
                            {c.categoryLabel} · {c.type}
                          </div>
                        </div>
                      </div>
                      <span className="pill pill-approved" style={{ fontSize: '9px', padding: '3px 8px' }}>
                        {c.status}
                      </span>
                    </div>

                    <p className="body-sm text-secondary mb-md" style={{ lineHeight: 1.6, fontSize: '12.5px' }}>
                      {c.desc}
                    </p>
                  </div>

                  <div
                    className="flex-between mt-sm"
                    style={{
                      borderTop: '1px solid #e5e5e5',
                      paddingTop: '14px'
                    }}
                  >
                    <div className="flex gap-sm alignItems-center">
                      <span className="mono-sm" style={{ fontSize: '10.5px', color: 'var(--accent-emerald)', fontWeight: '700' }}>
                        ⚡ Latency: {c.latency}
                      </span>
                      <span className="mono-sm text-secondary" style={{ fontSize: '10px' }}>
                        · {c.syncFreq}
                      </span>
                    </div>

                    <button
                      onClick={() => setActiveSchemaModal(c)}
                      className="mono-sm"
                      style={{
                        fontSize: '11px',
                        color: 'var(--accent-orange)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontWeight: '700',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <Code size={13} />
                      <span>Inspect Payload</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bespoke Adapter Callout Banner */}
          <div
            className="card-elevated flex-between flex-wrap gap-md"
            style={{
              padding: '36px',
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #d8d4cd',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.03)'
            }}
          >
            <div style={{ maxWidth: '720px' }}>
              <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>
                PROPRIETARY &amp; ON-PREMISES CAMPUS DATABASES
              </span>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginTop: '6px', color: '#0c0c0f' }}>
                Need a connector for an internal or custom university system?
              </h3>
              <p className="body-sm text-secondary mt-xs" style={{ lineHeight: 1.6 }}>
                Our systems engineering team builds accredited, secure bi-directional adapters for custom on-premises Oracle, Microsoft SQL, or legacy PostgreSQL campus databases in under 3 weeks.
              </p>
            </div>
            <button
              onClick={() => setShowCustomModal(true)}
              className="btn-primary"
              style={{ flexShrink: 0, display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <span>Request Custom Connector Spec</span>
              <ArrowRight size={14} />
            </button>
          </div>

        </div>
      </section>

      {/* ── TECHNICAL SCHEMA DRAWER / MODAL ───────────────────────── */}
      {activeSchemaModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(12, 12, 15, 0.7)',
            backdropFilter: 'blur(8px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setActiveSchemaModal(null)}
        >
          <div
            style={{
              backgroundColor: '#131318',
              color: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #2a2a35',
              width: '640px',
              maxWidth: '100%',
              padding: '28px',
              boxShadow: '0 24px 60px rgba(0,0,0,0.8)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-between mb-md">
              <div className="flex gap-sm alignItems-center">
                <Code size={18} color="var(--accent-orange)" />
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', margin: 0 }}>
                  {activeSchemaModal.name} // Event Schema
                </h3>
              </div>
              <button
                onClick={() => setActiveSchemaModal(null)}
                style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer' }}
              >
                <X size={18} />
              </button>
            </div>

            <p className="mono-sm text-secondary mb-md" style={{ fontSize: '11px', color: '#9ca3af' }}>
              Standardized bi-directional CDC JSON payload streamed over TLS 1.3 to university private VPC.
            </p>

            <div
              style={{
                backgroundColor: '#0a0a0d',
                borderRadius: '8px',
                border: '1px solid #1f1f28',
                padding: '16px',
                fontFamily: 'var(--font-mono)',
                fontSize: '11.5px',
                color: '#38bdf8',
                overflowX: 'auto',
                lineHeight: 1.6
              }}
            >
              <pre style={{ margin: 0 }}>
                {JSON.stringify(activeSchemaModal.schemaSample, null, 2)}
              </pre>
            </div>

            <div className="flex-between mt-lg">
              <span className="mono-sm" style={{ fontSize: '10.5px', color: '#9ca3af' }}>
                Zero PII Persistence Guarantee
              </span>
              <div className="flex gap-sm">
                <button
                  onClick={() => handleCopy(activeSchemaModal.schemaSample)}
                  className="btn-secondary btn-sm"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  {copiedCode ? <Check size={13} color="#10b981" /> : <Code size={13} />}
                  <span>{copiedCode ? 'Copied to Clipboard!' : 'Copy Schema JSON'}</span>
                </button>
                <button
                  onClick={() => setActiveSchemaModal(null)}
                  className="btn-primary btn-sm"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── CUSTOM CONNECTOR MODAL ────────────────────────────────── */}
      {showCustomModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(12, 12, 15, 0.7)',
            backdropFilter: 'blur(8px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setShowCustomModal(false)}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              color: '#0c0c0f',
              borderRadius: '16px',
              border: '1px solid #d8d4cd',
              width: '540px',
              maxWidth: '100%',
              padding: '32px',
              boxShadow: '0 24px 60px rgba(0,0,0,0.2)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-between mb-md">
              <h3 style={{ fontSize: '1.3rem', fontWeight: '800', margin: 0 }}>
                Request Custom Campus Connector
              </h3>
              <button
                onClick={() => setShowCustomModal(false)}
                style={{ background: 'none', border: 'none', color: '#71717a', cursor: 'pointer' }}
              >
                <X size={18} />
              </button>
            </div>

            <p className="body-sm text-secondary mb-lg" style={{ lineHeight: 1.55 }}>
              Specify your institution's on-premises student database or custom legacy system. Our enterprise integration engineers will review your schema requirements and provide a 3-week deployment brief.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Custom connector request logged. A technical specialist will contact your IT team.');
                setShowCustomModal(false);
              }}
              className="flex flex-col gap-md"
            >
              <div>
                <label className="form-label">University / Institution Name</label>
                <input type="text" required placeholder="University of Bristol" className="form-input" />
              </div>
              <div>
                <label className="form-label">System or Database Type</label>
                <input type="text" required placeholder="Oracle Database 19c / Custom SQL Server" className="form-input" />
              </div>
              <div>
                <label className="form-label">Institutional IT Contact Email</label>
                <input type="email" required placeholder="head.of.it@bristol.ac.uk" className="form-input" />
              </div>

              <div className="flex justify-end gap-sm mt-sm">
                <button type="button" onClick={() => setShowCustomModal(false)} className="btn-secondary btn-sm">
                  Cancel
                </button>
                <button type="submit" className="btn-primary btn-sm">
                  Submit Connector Specification ➔
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── BOTTOM CONVERSION CTA ─────────────────────────────────── */}
      <EnterpriseCTASection />

    </div>
  );
}