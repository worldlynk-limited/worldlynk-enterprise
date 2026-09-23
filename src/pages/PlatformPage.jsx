import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Database,
  Layers,
  Bot,
  ShieldCheck,
  Cpu,
  Network,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Lock,
  Zap,
  Globe,
  MessageSquare,
  Server,
  Code,
  Check,
  Activity,
  GitBranch,
  RefreshCw,
  Terminal,
  FileCode,
  HardDrive
} from 'lucide-react';

const COMPASS_BACKEND_URL = "https://uniportal-uq1p.onrender.com";

const STUDENTS = [
  {
    name: 'Maya Chen',
    course: 'MSc Data Science & Machine Learning',
    sitsId: '0091-2847',
    moodleUser: 'mchen3',
    cas: 'E2948102A',
    stripeCus: 'cus_9941a88b',
    status: 'Enrolled Full-Time · Tier-4 Sponsored',
    recentSignal: 'CS-5100 attendance drop; 16h work fatigue detected.',
    sitsPayload: { "student_id": "0091-2847", "degree": "MSc Data Science", "enrol_status": "ENR", "fee_status": "OS_INTL", "tutor": "Dr. R. Jenkins" },
    moodlePayload: { "user_id": "mchen3", "last_access": "2026-09-21T08:14:00Z", "inactivity_hours": 114, "coursework_complete": "3/5" },
    stripePayload: { "customer_id": "cus_9941a88b", "escrow_id": "esc_8849", "hall": "Chapter King's Cross", "amount": 31500, "currency": "gbp" },
    attendancePayload: { "hmac_scan": "hmac_sha256:7f8b9a2c...88e1", "session": "EB-02", "missed_consecutive": 2, "late_minutes": 0, "verified_at": "2026-09-23T08:58:14Z" }
  },
  {
    name: 'Jin-Woo Park',
    course: 'BSc Software Engineering',
    sitsId: '0088-1249',
    moodleUser: 'jwpark9',
    cas: 'E1948201B',
    stripeCus: 'cus_8812b11a',
    status: 'Offer Holder · International Applicant',
    recentSignal: 'NARIC math equivalency evaluated; CAS brief drafted.',
    sitsPayload: { "student_id": "0088-1249", "degree": "BSc Software Eng", "enrol_status": "OFFER_COND", "fee_status": "OS_INTL", "tutor": "Prof. T. Davis" },
    moodlePayload: { "user_id": "jwpark9", "last_access": "N/A", "inactivity_hours": 0, "coursework_complete": "Pre-Enrolled" },
    stripePayload: { "customer_id": "cus_8812b11a", "escrow_id": "esc_7712", "hall": "Scape Bloomsbury", "amount": 29500, "currency": "gbp" },
    attendancePayload: { "hmac_scan": "N/A", "session": "Orientation", "missed_consecutive": 0, "late_minutes": 0, "verified_at": null }
  },
  {
    name: 'Tariq Hassan',
    course: 'BSc Accounting & Finance',
    sitsId: '0074-9912',
    moodleUser: 'thassan1',
    cas: 'E3091841C',
    stripeCus: 'cus_7712c99f',
    status: 'Year 2 Enrolled · Tier-4 Sponsored',
    recentSignal: '120h Moodle inactivity; study guide compiled for tutor review.',
    sitsPayload: { "student_id": "0074-9912", "degree": "BSc Finance", "enrol_status": "ENR", "fee_status": "OS_INTL", "tutor": "Dr. J. Ward" },
    moodlePayload: { "user_id": "thassan1", "last_access": "2026-09-17T11:20:00Z", "inactivity_hours": 120, "coursework_complete": "1/4" },
    stripePayload: { "customer_id": "cus_7712c99f", "escrow_id": "esc_9912", "hall": "Campus Halls B", "amount": 22000, "currency": "gbp" },
    attendancePayload: { "hmac_scan": "hmac_sha256:9d4e21ab...ce43", "session": "Hall-1", "missed_consecutive": 1, "late_minutes": 15, "verified_at": "2026-09-22T09:15:22Z" }
  }
];

const LAYERS = [
  {
    id: 'fabric',
    num: '01',
    name: 'Fabric // Nervous System',
    tag: 'HIGH-THROUGHPUT EVENT BUS',
    tech: 'Redis Pub/Sub · BullMQ Workers · WebSockets · Event Emitter',
    desc: 'The connective nervous system of the university. Ingests real-time events from legacy SIS, Moodle LMS, and dynamic QR scanners behind institutional firewalls without database duplication.',
    benchmarks: '12ms Average Event Latency · 10,000+ Events/sec · 99.99% Uptime',
    features: [
      'Bi-directional transactional connectors for Tribal SITS:Vision and Ellucian Banner.',
      'AES-256 token proxy for Moodle and Canvas LMS course activity polling.',
      'Sub-180ms rotating cryptographic HMAC QR validation engine with anti-replay defenses.',
      '14 dedicated BullMQ queue workers running deterministic reconciliation and alert jobs.'
    ]
  },
  {
    id: 'graph',
    num: '02',
    name: 'Data Plane // Unified Identity & Living Graph',
    tag: 'SHARED CLOUD FIRESTORE DATA PLANE',
    tech: 'Multi-Tenant Firestore · users/{uid} Canonical Key · In-Memory Graph Index · LibSQL Vector Store',
    desc: 'A unified operational data plane that maps every student, course, lecture hall, Tier-4 CAS record, and PBSA housing contract into a connected, real-time relational model with zero schema alteration on legacy databases.',
    benchmarks: '18ms Data Plane Queries · 100% Deterministic Resolution · Strict Multi-Tenancy',
    features: [
      'Single canonical users/{uid} identity stitched across Uniportal backend and WorldLynk student apps.',
      'UKVI Tier-4 work margin monitor: real-time term-time employment tracking against 20h cap.',
      'Degree prerequisite topology mapping for automated module exception checks.',
      'Per-tenant cryptographic database partitioning and Firestore security rules scoped by universityId.'
    ]
  },
  {
    id: 'cortex',
    num: '03',
    name: 'Cortex // Autonomous Multi-Agent Brain',
    tag: '30-AGENT MASTRA ORCHESTRATION',
    tech: 'Mastra Engine · 12 Deterministic DAG Workflows · LibSQL Vector Memory · Tool Calling Envelopes',
    desc: 'The autonomous cognitive engine of the modern campus. 30 specialized Mastra agents operating under a central Supervisor agent to evaluate signals, draft CAS summaries, recommend housing, and prepare interventions.',
    benchmarks: '250ms Tokenized Inference · 12 Deterministic DAG Workflows · Zero PII Leakage',
    features: [
      'Central Supervisor Agent orchestrates sub-agents including Accommodation, JobMatch, Moodle, and CVAnalysis.',
      '12 deterministic DAG workflows for student onboarding, visa checks, accommodation matching, and journey gaps.',
      'Cryptographic PII tokenization envelope strips student identities before external LLM prompts.',
      'Native multi-channel adapters for WhatsApp Business (Baileys WebSocket) and Telegram Bot API.'
    ]
  },
  {
    id: 'arbiter',
    num: '04',
    name: 'Arbiter // Consequential Governance Gate',
    tag: 'HUMAN AUTHORITY AS CODE',
    tech: 'Deterministic Policy Engine · SHA-256 Event Signatures · Role-Based Access · Immutable Audit Lineage',
    desc: 'The governance compass of the autonomous university. Enforces the golden rule: AI agents prepare, named university staff decide. Consequential academic, visa, or financial actions cannot auto-commit.',
    benchmarks: '5ms Rule Evaluation · 100% Audit Lineage · Tamper-Evident SHA-256 Signatures',
    features: [
      'Held-state interception halts any action that alters grades, visas, or financial status.',
      'Named staff approval workflow logs credentials, timestamp, and diffs to immutable audit log.',
      'Tamper-evident SHA-256 audit writebacks directly into SITS:Vision history tables.',
      'One-click UKVI inspection packet generation with cryptographically verifiable proofs.'
    ]
  }
];

const CONNECTORS = [
  { name: 'SITS:Vision (Tribal)', category: 'Student Information System', type: 'Two-Way Bi-directional', status: 'Production', icon: Database, latency: '8ms' },
  { name: 'Ellucian Banner', category: 'Student Information System', type: 'REST & Ethos API', status: 'Production', icon: Database, latency: '14ms' },
  { name: 'Moodle LMS', category: 'Learning Management', type: 'AES-256 Token Proxy', status: 'Production', icon: Cpu, latency: '12ms' },
  { name: 'Canvas LMS', category: 'Learning Management', type: 'LTI 1.3 & GraphQL', status: 'Production', icon: Cpu, latency: '10ms' },
  { name: 'Stripe Connect', category: 'Billing & Escrows', type: 'Webhooks & Marketplace', status: 'Production', icon: Lock, latency: '45ms' },
  { name: 'Algolia Search', category: 'Discovery Engine', type: 'Sub-20ms Faceted Search', status: 'Production', icon: Zap, latency: '16ms' },
  { name: 'WhatsApp (Baileys)', category: 'Messaging Gateway', type: 'WebSocket Live Gateway', status: 'Production', icon: MessageSquare, latency: '60ms' },
  { name: 'Telegram Bot API', category: 'Messaging Gateway', type: 'Webhook & Polling Engine', status: 'Production', icon: Globe, latency: '55ms' },
  { name: 'BullMQ & Redis', category: 'Task Execution', type: '14 Dedicated Workers', status: 'Production', icon: Layers, latency: '2ms' },
  { name: 'Firebase Firestore', category: 'Shared Data Plane', type: 'Multi-Tenant Scoped', status: 'Production', icon: Database, latency: '18ms' }
];

export default function PlatformPage() {
  const [selectedStudentIdx, setSelectedStudentIdx] = useState(0);
  const [activeLayerId, setActiveLayerId] = useState('fabric');
  const [payloadView, setPayloadView] = useState('sits'); // sits, moodle, stripe, attendance

  const student = STUDENTS[selectedStudentIdx];
  const activeLayer = LAYERS.find(l => l.id === activeLayerId) || LAYERS[0];

  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', backgroundColor: 'var(--wl-dark)', color: '#ffffff' }}>
      
      {/* ── HERO BANNER ─────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '32px', borderBottom: '1px solid var(--border-hairline)' }}>
        <div className="main-container">
          <div className="flex-between flex-wrap gap-md">
            <div>
              <div className="mono-label" style={{ color: 'var(--accent-orange)', marginBottom: '8px' }}>
                PLATFORM ARCHITECTURE // FOUR-LAYER OPERATING SPECIFICATION
              </div>
              <h1 className="headline-xl" style={{ marginBottom: '12px', lineHeight: 1.15 }}>
                Zero migration. Unify legacy campus databases into one living record.
              </h1>
              <p className="body-lg text-secondary" style={{ maxWidth: '780px' }}>
                Higher education does not need another high-risk, 3-year SIS migration that disrupts campus life. WorldLynk deploys as an operational overlay directly over your existing SITS:Vision, Banner, and Moodle instances, maintaining real-time canonical identity while legacy systems stay in place.
              </p>
            </div>

            <div className="flex flex-col gap-sm" style={{ minWidth: '220px' }}>
              <div className="card-dark" style={{ padding: '16px', border: '1px solid var(--border-subtle)' }}>
                <div className="mono-label" style={{ color: 'var(--accent-cyan)', fontSize: '10px' }}>SYSTEM TELEMETRY</div>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', marginTop: '2px' }}>12ms Event Bus</div>
                <div className="mono-sm text-secondary" style={{ fontSize: '11px' }}>100% Deterministic Resolution</div>
              </div>
              <div className="flex gap-sm">
                <Link to="/how-it-works" className="btn-primary btn-sm" style={{ flex: 1, fontSize: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                  <span>Operating Loop</span>
                  <ArrowRight size={12} />
                </Link>
                <a href={COMPASS_BACKEND_URL} target="_blank" rel="noreferrer" className="btn-secondary btn-sm" style={{ flex: 1, fontSize: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                  <span>Compass</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4-LAYER OPERATIONAL ARCHITECTURE TABS ───────────────── */}
      <section className="section" style={{ paddingTop: '40px', paddingBottom: '32px' }}>
        <div className="main-container">
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>THE 4 OPERATING LAYERS</span>
            <h2 className="headline-lg" style={{ marginTop: '4px' }}>
              Engineered for Sovereign Higher Education.
            </h2>
            <p className="section-desc">
              Each layer serves an immutable architectural mandate — from low-latency event ingestion to legal human governance.
            </p>
          </div>

          {/* Layer Selector Cards */}
          <div className="grid-4 mb-xl">
            {LAYERS.map((layer) => {
              const isSelected = activeLayerId === layer.id;
              return (
                <div
                  key={layer.id}
                  onClick={() => setActiveLayerId(layer.id)}
                  className={`card-dark ${isSelected ? 'card-selected' : ''}`}
                  style={{
                    padding: '20px',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    border: isSelected ? '2px solid var(--accent-orange)' : '1px solid var(--border-subtle)',
                    backgroundColor: isSelected ? '#161622' : '#101016',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div className="flex-between mb-xs">
                    <span className="mono-label" style={{ color: isSelected ? 'var(--accent-orange)' : 'var(--text-muted)' }}>LAYER {layer.num}</span>
                    <span className="pill pill-approved" style={{ fontSize: '8.5px' }}>ONLINE</span>
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '800', margin: '4px 0', color: '#ffffff' }}>{layer.name.split('//')[0]}</h3>
                  <div className="mono-sm text-secondary" style={{ fontSize: '10px', marginBottom: '8px' }}>{layer.tag}</div>
                  <div className="mono-sm" style={{ fontSize: '9.5px', color: 'var(--accent-cyan)' }}>{layer.benchmarks.split('·')[0]}</div>
                </div>
              );
            })}
          </div>

          {/* Detailed Layer Workbench */}
          <div className="card-dark mb-3xl" style={{ padding: '32px', borderRadius: '16px', border: '1px solid var(--border-subtle)', backgroundColor: '#13131c' }}>
            <div className="flex-between flex-wrap gap-md mb-lg">
              <div>
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>{activeLayer.tag}</span>
                <h3 className="headline-md" style={{ margin: '4px 0' }}>{activeLayer.name}</h3>
                <p className="body-md text-secondary" style={{ maxWidth: '780px' }}>{activeLayer.desc}</p>
              </div>
              <div className="mono-sm text-secondary" style={{ backgroundColor: '#0d0d12', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-hairline)' }}>
                <strong>STACK:</strong> {activeLayer.tech}
              </div>
            </div>

            <div className="grid-2 gap-xl" style={{ alignItems: 'start' }}>
              {/* Features List */}
              <div>
                <span className="mono-label" style={{ color: 'var(--text-muted)' }}>ARCHITECTURAL MANDATES</span>
                <div className="flex flex-col gap-sm mt-sm">
                  {activeLayer.features.map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', backgroundColor: '#171722', padding: '12px', borderRadius: '8px' }}>
                      <CheckCircle2 size={16} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.45 }}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Benchmarks & Topology Box */}
              <div style={{ backgroundColor: '#0d0d14', padding: '20px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                <span className="mono-label" style={{ color: 'var(--accent-cyan)' }}>LAYER SPECIFICATIONS &amp; METRICS</span>
                <div className="mono-sm mt-md" style={{ fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--text-secondary)' }}>
                  <div><strong>REAL-TIME PERFORMANCE:</strong> <span style={{ color: '#ffffff' }}>{activeLayer.benchmarks}</span></div>
                  <div><strong>FAULT TOLERANCE:</strong> <span style={{ color: 'var(--accent-emerald)' }}>Zero-loss queue persistence with Redis cluster replication</span></div>
                  <div><strong>MIGRATION OVERHEAD:</strong> <span style={{ color: 'var(--status-pass)' }}>0 database schema alterations required on host SIS</span></div>
                  <div><strong>SECURITY MODEL:</strong> <span style={{ color: '#ffffff' }}>Per-tenant AES-256 envelope encryption with hardware HSM</span></div>
                </div>

                <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-hairline)' }}>
                  <Link to="/how-it-works" className="btn-secondary btn-sm" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                    <span>Trace Event Lifecycle in How It Works</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ── INTERACTIVE IDENTITY RESOLVER MOCKUP ───────────────── */}
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>DETERMINISTIC ENTITY RESOLVER</span>
            <h2 className="headline-lg" style={{ marginTop: '4px' }}>
              Five Fragmented Silos. Reconciled in Milliseconds.
            </h2>
            <p className="section-desc">
              Select a student to inspect how WorldLynk stitches records from SITS, Moodle, Stripe, and QR attendance into a single canonical dossier without altering source schemas.
            </p>
          </div>

          <div className="mockup-window mb-3xl" style={{ border: '1px solid var(--border-subtle)' }}>
            <div className="mockup-chrome flex-between flex-wrap gap-sm">
              <div className="flex gap-sm alignItems-center">
                <div className="mockup-dots">
                  <span className="mockup-dot mockup-dot-red" />
                  <span className="mockup-dot mockup-dot-amber" />
                  <span className="mockup-dot mockup-dot-green" />
                </div>
                <span className="mono-sm text-muted">FABRIC ENTITY RESOLVER // LIVE RECONCILIATION</span>
              </div>

              {/* Student Switcher */}
              <div className="flex gap-xs">
                {STUDENTS.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedStudentIdx(idx)}
                    className="tab-btn"
                    style={{
                      padding: '4px 10px',
                      fontSize: '11px',
                      borderRadius: '6px',
                      backgroundColor: selectedStudentIdx === idx ? 'var(--accent-orange)' : '#191924',
                      color: selectedStudentIdx === idx ? '#ffffff' : 'var(--text-secondary)',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mockup-body" style={{ padding: '24px', backgroundColor: '#0d0d12' }}>
              <div className="flex-between flex-wrap gap-md mb-lg">
                <div>
                  <div className="mono-label" style={{ color: 'var(--accent-cyan)' }}>CANONICAL RESOLVED IDENTITY</div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginTop: '2px' }}>{student.name}</h3>
                  <div className="mono-sm text-secondary">{student.course} · {student.status}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span className="pill pill-approved"><CheckCircle2 size={12} style={{ marginRight: '4px' }} /> 100% CONFIDENCE MATCH</span>
                  <div className="mono-sm text-muted mt-xs">Signal: {student.recentSignal}</div>
                </div>
              </div>

              {/* Disparate Feeds Grid */}
              <div className="grid-4 mb-xl">
                <div className="card-dark" style={{ padding: '14px', border: '1px solid #232332' }}>
                  <div className="mono-label" style={{ color: 'var(--accent-cyan)', fontSize: '9.5px' }}>SITS:VISION (TRIBAL)</div>
                  <div style={{ fontSize: '13px', fontWeight: '700', marginTop: '4px' }}>ID: {student.sitsId}</div>
                  <div className="mono-sm text-secondary" style={{ fontSize: '10px', marginTop: '2px' }}>Status: Enrolled Full-Time</div>
                </div>

                <div className="card-dark" style={{ padding: '14px', border: '1px solid #232332' }}>
                  <div className="mono-label" style={{ color: 'var(--accent-orange)', fontSize: '9.5px' }}>MOODLE LMS</div>
                  <div style={{ fontSize: '13px', fontWeight: '700', marginTop: '4px' }}>User: {student.moodleUser}</div>
                  <div className="mono-sm text-secondary" style={{ fontSize: '10px', marginTop: '2px' }}>Inactivity: {student.moodlePayload.inactivity_hours}h</div>
                </div>

                <div className="card-dark" style={{ padding: '14px', border: '1px solid #232332' }}>
                  <div className="mono-label" style={{ color: 'var(--accent-emerald)', fontSize: '9.5px' }}>STRIPE ESCROW</div>
                  <div style={{ fontSize: '13px', fontWeight: '700', marginTop: '4px' }}>Cus: {student.stripeCus}</div>
                  <div className="mono-sm text-secondary" style={{ fontSize: '10px', marginTop: '2px' }}>PBSA: £{student.stripePayload.amount / 100}/wk</div>
                </div>

                <div className="card-dark" style={{ padding: '14px', border: '1px solid #232332' }}>
                  <div className="mono-label" style={{ color: 'var(--accent-purple)', fontSize: '9.5px' }}>DYNAMIC QR ATTENDANCE</div>
                  <div style={{ fontSize: '13px', fontWeight: '700', marginTop: '4px' }}>CAS: {student.cas}</div>
                  <div className="mono-sm text-secondary" style={{ fontSize: '10px', marginTop: '2px' }}>Missed: {student.attendancePayload.missed_consecutive} sessions</div>
                </div>
              </div>

              {/* Raw JSON Payload Viewer */}
              <div style={{ backgroundColor: '#060609', padding: '16px', borderRadius: '10px', border: '1px solid #1a1a24' }}>
                <div className="flex-between mb-sm">
                  <div className="flex gap-xs">
                    {[
                      { id: 'sits', label: 'SITS Payload' },
                      { id: 'moodle', label: 'Moodle LMS' },
                      { id: 'stripe', label: 'Stripe Escrow' },
                      { id: 'attendance', label: 'QR Attendance' }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setPayloadView(tab.id)}
                        style={{
                          backgroundColor: payloadView === tab.id ? '#20202e' : 'transparent',
                          color: payloadView === tab.id ? 'var(--accent-orange)' : 'var(--text-muted)',
                          border: 'none',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          fontSize: '11px',
                          cursor: 'pointer'
                        }}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                  <span className="mono-sm text-muted" style={{ fontSize: '10px' }}>Ingested via Redis Event Bus</span>
                </div>

                <pre style={{ margin: 0, fontSize: '11px', color: 'var(--accent-cyan)', fontFamily: 'var(--wl-font-mono)', overflowX: 'auto', lineHeight: 1.5 }}>
                  {payloadView === 'sits' && JSON.stringify(student.sitsPayload, null, 2)}
                  {payloadView === 'moodle' && JSON.stringify(student.moodlePayload, null, 2)}
                  {payloadView === 'stripe' && JSON.stringify(student.stripePayload, null, 2)}
                  {payloadView === 'attendance' && JSON.stringify(student.attendancePayload, null, 2)}
                </pre>
              </div>
            </div>
          </div>

          {/* ── ZERO-MIGRATION CONNECTOR DIRECTORY ────────────────── */}
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>CONNECTOR CATALOG</span>
            <h2 className="headline-lg" style={{ marginTop: '4px' }}>
              Plug Directly into Your Existing Stack.
            </h2>
            <p className="section-desc">
              Bi-directional integration adaptors for the enterprise software your university already relies upon.
            </p>
          </div>

          <div className="grid-auto mb-3xl">
            {CONNECTORS.map((c, i) => {
              const ConnectorIcon = c.icon;
              return (
                <div key={i} className="connector-tile" style={{ backgroundColor: '#13131a', border: '1px solid var(--border-subtle)', borderRadius: '10px', padding: '16px' }}>
                  <div className="connector-icon" style={{ background: 'rgba(255,107,0,0.1)', color: 'var(--accent-orange)' }}>
                    <ConnectorIcon size={18} />
                  </div>
                  <div>
                    <div className="connector-name" style={{ color: '#ffffff', fontWeight: '700' }}>{c.name}</div>
                    <div className="connector-desc text-secondary" style={{ fontSize: '11px' }}>{c.category} · {c.type}</div>
                  </div>
                  <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                    <span className="pill pill-approved">{c.status}</span>
                    <div className="mono-sm text-muted mt-xs" style={{ fontSize: '9px' }}>Latency: {c.latency}</div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
