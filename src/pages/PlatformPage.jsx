import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AgentGraphVisualizer from '../components/AgentGraphVisualizer';
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
  HardDrive,
  Mic,
  Radio
} from 'lucide-react';

const COMPASS_BACKEND_URL = "https://uniportal-uq1p.onrender.com";
const STUDENT_PLATFORM_URL = "https://worldlynk.co.uk";

const STUDENTS = [
  {
    name: 'Maya Chen',
    photo: '/images/aspiring_student.jpg',
    course: 'MSc Data Science & Machine Learning',
    sitsId: '0091-2847',
    moodleUser: 'mchen3',
    cas: 'E2948102A',
    stripeCus: 'cus_9941a88b',
    status: 'Enrolled Full-Time · Tier-4 Sponsored',
    tutor: 'Dr. R. Jenkins (Senior Tutor)',
    recentSignal: 'Missed CS-5100 seminar; work fatigue detected after evening shift.',
    details: {
      sits: {
        title: 'Student Records System (SITS:Vision)',
        status: 'Active · Good Academic Standing',
        enrolment: 'Full-Time Postgraduate',
        tutor: 'Dr. R. Jenkins',
        feeStatus: 'International Tier-4'
      },
      moodle: {
        title: 'Learning Portal (Moodle)',
        status: 'Needs Engagement Follow-Up',
        lastLogin: '3 days ago',
        coursework: '3 of 5 assignments submitted',
        alert: 'Study guide prepared for tutor check-in'
      },
      stripe: {
        title: 'Student Housing & Tenancy',
        status: 'Confirmed & Deposit Protected',
        residence: "Chapter King's Cross (Studio Ensuite)",
        rent: '£315 / week',
        escrow: 'Protected via Stripe Escrow'
      },
      attendance: {
        title: 'Lecture & Seminar Check-In',
        status: 'Missed 2 Seminars (EB-02)',
        verification: 'Verified via Student Mobile Check-In',
        action: 'Makeup lab slot reserved by tutor'
      }
    }
  },
  {
    name: 'Jin-Woo Park',
    photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    course: 'BSc Software Engineering',
    sitsId: '0088-1249',
    moodleUser: 'jwpark9',
    cas: 'E1948201B',
    stripeCus: 'cus_8812b11a',
    status: 'Offer Holder · International Applicant',
    tutor: 'Prof. T. Davis (Admissions Lead)',
    recentSignal: 'High school math equivalency verified; CAS visa draft ready for review.',
    details: {
      sits: {
        title: 'Student Records System (SITS:Vision)',
        status: 'Unconditional Offer Accepted',
        enrolment: 'Incoming Undergraduate (Year 1)',
        tutor: 'Prof. T. Davis',
        feeStatus: 'International Applicant'
      },
      moodle: {
        title: 'Learning Portal (Moodle)',
        status: 'Pre-Enrolment Welcome Module Ready',
        lastLogin: 'Pending term start',
        coursework: 'Reading list delivered via app',
        alert: 'Welcome pack dispatched via WhatsApp'
      },
      stripe: {
        title: 'Student Housing & Tenancy',
        status: 'Accommodation Voucher Reserved',
        residence: 'Scape Bloomsbury (Standard Ensuite)',
        rent: '£295 / week',
        escrow: 'Holding deposit verified'
      },
      attendance: {
        title: 'Lecture & Seminar Check-In',
        status: 'Orientation Session Scheduled',
        verification: 'Welcome Week check-in pending',
        action: 'Campus arrival guide shared'
      }
    }
  },
  {
    name: 'Tariq Hassan',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    course: 'BSc Accounting & Finance',
    sitsId: '0074-9912',
    moodleUser: 'thassan1',
    cas: 'E3091841C',
    stripeCus: 'cus_7712c99f',
    status: 'Year 2 Enrolled · Tier-4 Sponsored',
    tutor: 'Dr. J. Ward (Academic Advisor)',
    recentSignal: '5 days of portal inactivity; personalized study plan compiled for tutor review.',
    details: {
      sits: {
        title: 'Student Records System (SITS:Vision)',
        status: 'Enrolled Year 2 · Good Standing',
        enrolment: 'Full-Time Undergraduate',
        tutor: 'Dr. J. Ward',
        feeStatus: 'International Tier-4'
      },
      moodle: {
        title: 'Learning Portal (Moodle)',
        status: '5 Days Inactive on Finance Modules',
        lastLogin: 'Last Tuesday 11:20',
        coursework: '1 of 4 modules in progress',
        alert: 'Suggested 1-on-1 advisor check-in prepared'
      },
      stripe: {
        title: 'Student Housing & Tenancy',
        status: 'Campus Residence Confirmed',
        residence: 'Campus Halls (Ensuite Block B)',
        rent: '£220 / week',
        escrow: 'Term 1 payment complete'
      },
      attendance: {
        title: 'Lecture & Seminar Check-In',
        status: '91% Attendance Rate',
        verification: 'Checked-in for Tuesday Lecture (Hall-1)',
        action: 'No attendance flags active'
      }
    }
  }
];

const LAYERS = [
  {
    id: 'fabric',
    num: '01',
    name: 'Connect // Campus System Links',
    tag: 'PLUGS INTO YOUR TOOLS',
    tech: 'Works with SITS:Vision, Banner, Moodle, Canvas, and campus databases',
    desc: 'Connects directly to your university databases and learning portals without requiring database changes or technical headaches.',
    benchmarks: 'Instant live sync · 10,000+ updates/sec · 99.99% uptime',
    features: [
      'Direct two-way links for Tribal SITS:Vision and Ellucian Banner.',
      'Secure connections for Moodle and Canvas course portals.',
      'Fast, spoof-proof dynamic QR attendance check-in.',
      'Automated background workers that keep records in sync.'
    ]
  },
  {
    id: 'graph',
    num: '02',
    name: 'Understand // One Unified Student View',
    tag: 'A SINGLE PROFILE FOR EVERY STUDENT',
    tech: 'Unified student profile · Real-time search · Privacy-first permissions',
    desc: 'Brings student records, course timetables, visa status, and housing into one clear, connected view so your staff don\'t have to check multiple systems.',
    benchmarks: 'Sub-second search · Clean data model · Full privacy isolation',
    features: [
      'One student profile shared smoothly between the staff portal and student mobile app.',
      'Real-time visa work tracking against the 20-hour weekly term-time limit.',
      'Automated checks for prerequisite classes and course conflicts.',
      'Strict data separation with institutional privacy controls.'
    ]
  },
  {
    id: 'nova',
    num: '03',
    name: 'Assist // 30 Specialized AI Assistants',
    tag: '24/7 SUPPORT FOR STUDENTS & STAFF',
    tech: '30 Focused campus assistants · 24/7 Student chat · Real-time mock interview voice',
    desc: 'Specialized AI assistants trained on university workflows. They answer student questions 24/7, check visa work hours, spot dropout risks early, and prepare routine paperwork for staff.',
    benchmarks: 'Fast, friendly answers · 30 Specialized assistants · Zero data leaks',
    features: [
      'Campus coordinator directs student inquiries to the right specialized assistant.',
      'Automated workflows for onboarding, visa tracking, and housing matching.',
      'Private and compliant: student data is never used to train public models.',
      'Works across WhatsApp, web portals, and mobile apps.'
    ]
  },
  {
    id: 'arbiter',
    num: '04',
    name: 'Control // Staff Review & Governance',
    tag: 'STAFF ALWAYS IN CONTROL',
    tech: 'Staff review dashboard (Compass) · One-click approvals · Full audit history',
    desc: 'The core rule of WorldLynk: AI assistants prepare the work, but staff make the final call. Any important academic, visa, or financial decision always waits for staff approval.',
    benchmarks: 'Instant alerts · Complete audit history · Staff sign-off required',
    features: [
      'Important actions are held in a clear review inbox until staff approve.',
      'One-click approval workflow records who approved what and when.',
      'Complete, tamper-evident audit history written back into student records.',
      'Instant one-click compliance reports for accreditation or visa audits.'
    ]
  }
];

const CONNECTORS = [
  { name: 'SITS:Vision (Tribal)', category: 'Student Information System', type: 'Two-Way Bi-directional', status: 'Production', icon: Database, latency: '8ms' },
  { name: 'Ellucian Banner', category: 'Student Information System', type: 'REST & Ethos API', status: 'Production', icon: Database, latency: '14ms' },
  { name: 'Moodle LMS', category: 'Learning Management', type: 'Official University Proxy', status: 'Production', icon: Cpu, latency: '12ms' },
  { name: 'Canvas LMS', category: 'Learning Management', type: 'LTI 1.3 & Webhook Sync', status: 'Production', icon: Cpu, latency: '10ms' },
  { name: 'Stripe Connect', category: 'Billing & Escrows', type: 'Verified PBSA Payments', status: 'Production', icon: Lock, latency: '45ms' },
  { name: 'Algolia Search', category: 'Discovery Engine', type: 'Instant Student Search', status: 'Production', icon: Zap, latency: '16ms' },
  { name: 'WhatsApp (Verified)', category: 'Messaging Gateway', type: 'Official Student Outreach', status: 'Production', icon: MessageSquare, latency: '60ms' },
  { name: 'Telegram Bot API', category: 'Messaging Gateway', type: 'Student Group Outreach', status: 'Production', icon: Globe, latency: '55ms' },
  { name: 'Campus Task Queue', category: 'Background Tasks', type: 'Automated Event Workers', status: 'Production', icon: Layers, latency: '2ms' },
  { name: 'Cloud Student Store', category: 'Secure Data Layer', type: 'Encrypted Multi-Tenant', status: 'Production', icon: Database, latency: '18ms' }
];

export default function PlatformPage() {
  const [selectedStudentIdx, setSelectedStudentIdx] = useState(0);
  const [activeLayerId, setActiveLayerId] = useState('fabric');
  const [detailTab, setDetailTab] = useState('sits'); // sits, moodle, stripe, attendance

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
                PLATFORM ARCHITECTURE // CONNECTING YOUR CAMPUS
              </div>
              <h1 className="headline-xl" style={{ marginBottom: '12px', lineHeight: 1.15 }}>
                Connect all your campus systems without a painful migration.
              </h1>
              <p className="body-lg text-secondary" style={{ maxWidth: '780px' }}>
                Universities don't need another disruptive, multi-year IT overhaul. WorldLynk plugs directly into your existing SITS:Vision, Banner, Canvas, and Moodle systems — bringing everything together in real time while your current tools stay in place.
              </p>
            </div>

            <div className="flex flex-col gap-sm" style={{ minWidth: '220px' }}>
              <div className="card-dark" style={{ padding: '16px', border: '1px solid var(--border-subtle)' }}>
                <div className="mono-label" style={{ color: 'var(--accent-cyan)', fontSize: '10px' }}>SYSTEM PERFORMANCE</div>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', marginTop: '2px' }}>Instant Live Sync</div>
                <div className="mono-sm text-secondary" style={{ fontSize: '11px' }}>100% Reliable &amp; Fully Audited</div>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="flex gap-xs">
                  <a href={COMPASS_BACKEND_URL} target="_blank" rel="noreferrer" className="btn-secondary btn-sm" style={{ flex: 1, fontSize: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', border: '1px solid rgba(255, 107, 0, 0.35)', background: 'rgba(255, 107, 0, 0.08)' }}>
                    <span style={{ color: '#ff8833', fontWeight: 600 }}>Staff Portal</span>
                    <ExternalLink size={11} color="#ff8833" />
                  </a>
                  <a href={STUDENT_PLATFORM_URL} target="_blank" rel="noreferrer" className="btn-secondary btn-sm" style={{ flex: 1, fontSize: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', border: '1px solid rgba(56, 189, 248, 0.35)', background: 'rgba(56, 189, 248, 0.08)' }}>
                    <span style={{ color: '#38bdf8', fontWeight: 600 }}>Student App</span>
                    <ExternalLink size={11} color="#38bdf8" />
                  </a>
                </div>
                <Link to="/how-it-works" className="btn-primary btn-sm" style={{ fontSize: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                  <span>See How It Works</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4-LAYER OPERATIONAL ARCHITECTURE TABS ───────────────── */}
      <section className="section" style={{ paddingTop: '40px', paddingBottom: '32px' }}>
        <div className="main-container">
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>HOW THE PLATFORM WORKS</span>
            <h2 className="headline-lg" style={{ marginTop: '4px' }}>
              Built specifically for higher education.
            </h2>
            <p className="section-desc">
              Four connected layers work together — from instant system connection to complete staff control.
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
                <strong>SYSTEMS SUPPORTED:</strong> {activeLayer.tech}
              </div>
            </div>

            <div className="grid-2 gap-xl" style={{ alignItems: 'start' }}>
              {/* Features List */}
              <div>
                <span className="mono-label" style={{ color: 'var(--text-muted)' }}>KEY CAPABILITIES</span>
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
                <span className="mono-label" style={{ color: 'var(--accent-cyan)' }}>GUARANTEED STANDARDS &amp; SAFETY</span>
                <div className="mono-sm mt-md" style={{ fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--text-secondary)' }}>
                  <div><strong>REAL-TIME PERFORMANCE:</strong> <span style={{ color: '#ffffff' }}>{activeLayer.benchmarks}</span></div>
                  <div><strong>ZERO LOST UPDATES:</strong> <span style={{ color: 'var(--accent-emerald)' }}>All student updates queued safely and delivered reliably</span></div>
                  <div><strong>ZERO SYSTEM DISRUPTION:</strong> <span style={{ color: 'var(--status-pass)' }}>No changes or alterations required on your existing campus databases</span></div>
                  <div><strong>PRIVACY &amp; SECURITY:</strong> <span style={{ color: '#ffffff' }}>Strict institutional encryption compliant with UK GDPR and higher education standards</span></div>
                </div>

                <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-hairline)' }}>
                  <Link to="/how-it-works" className="btn-secondary btn-sm" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                    <span>See How Common Issues Get Resolved</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ── UNIFIED STUDENT RECORD MOCKUP ───────────────── */}
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>UNIFIED STUDENT RECORD</span>
            <h2 className="headline-lg" style={{ marginTop: '4px' }}>
              One clear view for your entire campus.
            </h2>
            <p className="section-desc">
              Select a student to see how WorldLynk brings together records from your student database, course portal, accommodation, and lecture attendance into one friendly profile.
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
                <span className="mono-sm text-muted">CONNECTED STUDENT RECORD // LIVE PROFILE</span>
              </div>

              {/* Student Switcher */}
              <div className="flex gap-xs">
                {STUDENTS.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedStudentIdx(idx)}
                    className="tab-btn"
                    style={{
                      padding: '5px 12px',
                      fontSize: '11px',
                      borderRadius: '6px',
                      backgroundColor: selectedStudentIdx === idx ? 'var(--accent-orange)' : '#191924',
                      color: selectedStudentIdx === idx ? '#ffffff' : 'var(--text-secondary)',
                      border: '1px solid var(--border-subtle)',
                      fontWeight: selectedStudentIdx === idx ? '700' : '500'
                    }}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mockup-body" style={{ padding: '24px', backgroundColor: '#0d0d12' }}>
              <div className="flex-between flex-wrap gap-md mb-lg" style={{ paddingBottom: '16px', borderBottom: '1px solid #1a1a24' }}>
                <div className="flex gap-md alignItems-center">
                  <img
                    src={student.photo}
                    alt={student.name}
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid var(--accent-orange)'
                    }}
                  />
                  <div>
                    <div className="mono-label" style={{ color: 'var(--accent-cyan)' }}>STUDENT DOSSIER</div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginTop: '2px' }}>{student.name}</h3>
                    <div className="mono-sm text-secondary">{student.course} · {student.status}</div>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span className="pill pill-approved"><CheckCircle2 size={12} style={{ marginRight: '4px' }} /> ALL CAMPUS SYSTEMS CONNECTED</span>
                  <div className="mono-sm text-muted mt-xs">Latest Note: {student.recentSignal}</div>
                </div>
              </div>

              {/* 4 Connected Systems Grid */}
              <div className="grid-4 mb-xl">
                <div className="card-dark" style={{ padding: '16px', border: '1px solid #232332', borderRadius: '10px' }}>
                  <div className="mono-label" style={{ color: 'var(--accent-cyan)', fontSize: '9.5px' }}>STUDENT RECORD (SITS)</div>
                  <div style={{ fontSize: '13px', fontWeight: '700', marginTop: '4px' }}>ID: {student.sitsId}</div>
                  <div className="mono-sm text-secondary" style={{ fontSize: '10.5px', marginTop: '4px' }}>Tutor: {student.tutor}</div>
                  <div className="pill pill-approved" style={{ marginTop: '8px', fontSize: '9px' }}>Official Record Synced</div>
                </div>

                <div className="card-dark" style={{ padding: '16px', border: '1px solid #232332', borderRadius: '10px' }}>
                  <div className="mono-label" style={{ color: 'var(--accent-orange)', fontSize: '9.5px' }}>LEARNING PORTAL (MOODLE)</div>
                  <div style={{ fontSize: '13px', fontWeight: '700', marginTop: '4px' }}>User: {student.moodleUser}</div>
                  <div className="mono-sm text-secondary" style={{ fontSize: '10.5px', marginTop: '4px' }}>{student.details.moodle.coursework}</div>
                  <div className="pill pill-active" style={{ marginTop: '8px', fontSize: '9px' }}>Coursework In Progress</div>
                </div>

                <div className="card-dark" style={{ padding: '16px', border: '1px solid #232332', borderRadius: '10px' }}>
                  <div className="mono-label" style={{ color: 'var(--accent-emerald)', fontSize: '9.5px' }}>VERIFIED HOUSING</div>
                  <div style={{ fontSize: '13px', fontWeight: '700', marginTop: '4px' }}>{student.details.stripe.residence.split('(')[0]}</div>
                  <div className="mono-sm text-secondary" style={{ fontSize: '10.5px', marginTop: '4px' }}>Rent: {student.details.stripe.rent}</div>
                  <div className="pill pill-approved" style={{ marginTop: '8px', fontSize: '9px' }}>Deposit Protected</div>
                </div>

                <div className="card-dark" style={{ padding: '16px', border: '1px solid #232332', borderRadius: '10px' }}>
                  <div className="mono-label" style={{ color: 'var(--accent-purple)', fontSize: '9.5px' }}>ATTENDANCE &amp; VISA</div>
                  <div style={{ fontSize: '13px', fontWeight: '700', marginTop: '4px' }}>CAS: {student.cas}</div>
                  <div className="mono-sm text-secondary" style={{ fontSize: '10.5px', marginTop: '4px' }}>{student.details.attendance.verification}</div>
                  <div className="pill pill-approved" style={{ marginTop: '8px', fontSize: '9px' }}>Within 20h Work Cap</div>
                </div>
              </div>

              {/* Friendly Tabbed Detail Inspector (No Raw JSON) */}
              <div style={{ backgroundColor: '#13131c', padding: '18px', borderRadius: '12px', border: '1px solid #20202e' }}>
                <div className="flex-between mb-md" style={{ borderBottom: '1px solid #1c1c28', paddingBottom: '10px' }}>
                  <div className="flex gap-xs">
                    {[
                      { id: 'sits', label: 'Student Records' },
                      { id: 'moodle', label: 'Learning Portal' },
                      { id: 'stripe', label: 'Housing & Tenancy' },
                      { id: 'attendance', label: 'Attendance & Check-In' }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setDetailTab(tab.id)}
                        style={{
                          backgroundColor: detailTab === tab.id ? 'var(--accent-orange)' : '#191924',
                          color: detailTab === tab.id ? '#ffffff' : 'var(--text-secondary)',
                          border: 'none',
                          padding: '6px 12px',
                          borderRadius: '6px',
                          fontSize: '11.5px',
                          fontWeight: detailTab === tab.id ? '700' : '500',
                          cursor: 'pointer'
                        }}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                  <span className="mono-sm text-muted" style={{ fontSize: '10px' }}>Synced via WorldLynk Campus Connector</span>
                </div>

                {detailTab === 'sits' && (
                  <div className="grid-3 gap-md">
                    <div style={{ backgroundColor: '#0d0d14', padding: '12px', borderRadius: '8px', border: '1px solid #1c1c28' }}>
                      <div className="mono-label" style={{ fontSize: '9px' }}>OFFICIAL ENROLMENT STATUS</div>
                      <div style={{ fontWeight: '700', marginTop: '4px', color: '#ffffff' }}>{student.details.sits.status}</div>
                      <div className="mono-sm text-secondary" style={{ marginTop: '2px' }}>{student.details.sits.enrolment}</div>
                    </div>
                    <div style={{ backgroundColor: '#0d0d14', padding: '12px', borderRadius: '8px', border: '1px solid #1c1c28' }}>
                      <div className="mono-label" style={{ fontSize: '9px' }}>ASSIGNED TUTOR</div>
                      <div style={{ fontWeight: '700', marginTop: '4px', color: '#ffffff' }}>{student.details.sits.tutor}</div>
                      <div className="mono-sm text-secondary" style={{ marginTop: '2px' }}>Faculty of Computing</div>
                    </div>
                    <div style={{ backgroundColor: '#0d0d14', padding: '12px', borderRadius: '8px', border: '1px solid #1c1c28' }}>
                      <div className="mono-label" style={{ fontSize: '9px' }}>FEES &amp; SPONSORSHIP</div>
                      <div style={{ fontWeight: '700', marginTop: '4px', color: 'var(--accent-emerald)' }}>{student.details.sits.feeStatus}</div>
                      <div className="mono-sm text-secondary" style={{ marginTop: '2px' }}>CAS: {student.cas}</div>
                    </div>
                  </div>
                )}

                {detailTab === 'moodle' && (
                  <div className="grid-3 gap-md">
                    <div style={{ backgroundColor: '#0d0d14', padding: '12px', borderRadius: '8px', border: '1px solid #1c1c28' }}>
                      <div className="mono-label" style={{ fontSize: '9px' }}>PORTAL ENGAGEMENT</div>
                      <div style={{ fontWeight: '700', marginTop: '4px', color: '#ffffff' }}>{student.details.moodle.status}</div>
                      <div className="mono-sm text-secondary" style={{ marginTop: '2px' }}>Last seen: {student.details.moodle.lastLogin}</div>
                    </div>
                    <div style={{ backgroundColor: '#0d0d14', padding: '12px', borderRadius: '8px', border: '1px solid #1c1c28' }}>
                      <div className="mono-label" style={{ fontSize: '9px' }}>COURSEWORK PROGRESS</div>
                      <div style={{ fontWeight: '700', marginTop: '4px', color: '#ffffff' }}>{student.details.moodle.coursework}</div>
                      <div className="mono-sm text-secondary" style={{ marginTop: '2px' }}>On track for Term 1</div>
                    </div>
                    <div style={{ backgroundColor: '#0d0d14', padding: '12px', borderRadius: '8px', border: '1px solid #1c1c28' }}>
                      <div className="mono-label" style={{ fontSize: '9px' }}>ADVISOR RECOMMENDATION</div>
                      <div style={{ fontWeight: '700', marginTop: '4px', color: 'var(--accent-orange)' }}>{student.details.moodle.alert}</div>
                      <div className="mono-sm text-secondary" style={{ marginTop: '2px' }}>Ready for tutor approval</div>
                    </div>
                  </div>
                )}

                {detailTab === 'stripe' && (
                  <div className="grid-3 gap-md">
                    <div style={{ backgroundColor: '#0d0d14', padding: '12px', borderRadius: '8px', border: '1px solid #1c1c28' }}>
                      <div className="mono-label" style={{ fontSize: '9px' }}>BOOKING STATUS</div>
                      <div style={{ fontWeight: '700', marginTop: '4px', color: 'var(--accent-emerald)' }}>{student.details.stripe.status}</div>
                      <div className="mono-sm text-secondary" style={{ marginTop: '2px' }}>{student.details.stripe.escrow}</div>
                    </div>
                    <div style={{ backgroundColor: '#0d0d14', padding: '12px', borderRadius: '8px', border: '1px solid #1c1c28' }}>
                      <div className="mono-label" style={{ fontSize: '9px' }}>VERIFIED HALL OF RESIDENCE</div>
                      <div style={{ fontWeight: '700', marginTop: '4px', color: '#ffffff' }}>{student.details.stripe.residence}</div>
                      <div className="mono-sm text-secondary" style={{ marginTop: '2px' }}>Rate: {student.details.stripe.rent}</div>
                    </div>
                    <div style={{ backgroundColor: '#0d0d14', padding: '12px', borderRadius: '8px', border: '1px solid #1c1c28' }}>
                      <div className="mono-label" style={{ fontSize: '9px' }}>FRAUD PROTECTION</div>
                      <div style={{ fontWeight: '700', marginTop: '4px', color: 'var(--accent-cyan)' }}>100% Scam-Free Guarantee</div>
                      <div className="mono-sm text-secondary" style={{ marginTop: '2px' }}>Verified partner property</div>
                    </div>
                  </div>
                )}

                {detailTab === 'attendance' && (
                  <div className="grid-3 gap-md">
                    <div style={{ backgroundColor: '#0d0d14', padding: '12px', borderRadius: '8px', border: '1px solid #1c1c28' }}>
                      <div className="mono-label" style={{ fontSize: '9px' }}>ATTENDANCE SUMMARY</div>
                      <div style={{ fontWeight: '700', marginTop: '4px', color: '#ffffff' }}>{student.details.attendance.status}</div>
                      <div className="mono-sm text-secondary" style={{ marginTop: '2px' }}>{student.details.attendance.verification}</div>
                    </div>
                    <div style={{ backgroundColor: '#0d0d14', padding: '12px', borderRadius: '8px', border: '1px solid #1c1c28' }}>
                      <div className="mono-label" style={{ fontSize: '9px' }}>NEXT ACTION</div>
                      <div style={{ fontWeight: '700', marginTop: '4px', color: 'var(--accent-orange)' }}>{student.details.attendance.action}</div>
                      <div className="mono-sm text-secondary" style={{ marginTop: '2px' }}>Waiting for tutor sign-off</div>
                    </div>
                    <div style={{ backgroundColor: '#0d0d14', padding: '12px', borderRadius: '8px', border: '1px solid #1c1c28' }}>
                      <div className="mono-label" style={{ fontSize: '9px' }}>VISA SPONSOR STATUS</div>
                      <div style={{ fontWeight: '700', marginTop: '4px', color: 'var(--accent-emerald)' }}>Fully Compliant</div>
                      <div className="mono-sm text-secondary" style={{ marginTop: '2px' }}>Meets sponsor requirements</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ── AGENT GRAPH // LIVING OPERATIONAL MAP ──────────────── */}
          <div id="agent-graph" className="mb-3xl" style={{ scrollMarginTop: '100px' }}>
            <div className="section-header-left mb-xl">
              <div className="flex gap-xs alignItems-center mb-xs">
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>LAYER 02 // AGENT GRAPH</span>
                <span className="pill pill-approved" style={{ fontSize: '9px' }}>LIVING TOPOLOGY · ZERO-HALLUCINATION MAP</span>
              </div>
              <h2 className="headline-lg" style={{ marginTop: '4px' }}>
                The Institutional Operational Graph
              </h2>
              <p className="section-desc">
                Existing campus architectures leave each office trapped in isolated records. WorldLynk constructs a live relational topology connecting students, degree milestones, LMS engagement, Tier-4 work margins, and accommodation contracts into one operational graph.
              </p>
            </div>

            <AgentGraphVisualizer />
          </div>

          {/* ── DEDICATED NOVA AI INFRASTRUCTURE SPECIFICATION ─────── */}
          <div id="nova" className="mb-3xl" style={{ scrollMarginTop: '100px' }}>
            <div className="section-header-left mb-xl">
              <div className="flex gap-xs alignItems-center mb-xs">
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>SPECIALIST AI ASSISTANTS // HOW THEY WORK</span>
                <span className="pill pill-approved" style={{ fontSize: '9px' }}>ENTERPRISE READY</span>
              </div>
              <h2 className="headline-lg" style={{ marginTop: '4px' }}>
                How WorldLynk's AI assistants work together.
              </h2>
              <p className="section-desc">
                Nova coordinates 30 specialized AI assistants across student support, admissions, attendance, and careers — working smoothly in the background while always keeping staff in control.
              </p>
            </div>

            {/* Quick Specs Ribbon */}
            <div className="grid-4 gap-md mb-xl">
              <div className="card-dark" style={{ padding: '20px', border: '1px solid rgba(255,107,0,0.3)', backgroundColor: 'rgba(255,107,0,0.04)', borderRadius: '12px' }}>
                <div className="mono-label" style={{ color: 'var(--accent-orange)', fontSize: '9.5px' }}>SPECIALIZED ASSISTANTS</div>
                <div style={{ fontSize: '1.8rem', fontWeight: '800', marginTop: '4px' }}>30 Assistants</div>
                <div className="mono-sm text-secondary" style={{ fontSize: '11px' }}>Trained on campus workflows</div>
              </div>
              <div className="card-dark" style={{ padding: '20px', border: '1px solid rgba(56,189,248,0.3)', backgroundColor: 'rgba(56,189,248,0.04)', borderRadius: '12px' }}>
                <div className="mono-label" style={{ color: 'var(--accent-cyan)', fontSize: '9.5px' }}>STRUCTURED WORKFLOWS</div>
                <div style={{ fontSize: '1.8rem', fontWeight: '800', marginTop: '4px' }}>12 Workflows</div>
                <div className="mono-sm text-secondary" style={{ fontSize: '11px' }}>Consistent and reliable steps</div>
              </div>
              <div className="card-dark" style={{ padding: '20px', border: '1px solid rgba(16,185,129,0.3)', backgroundColor: 'rgba(16,185,129,0.04)', borderRadius: '12px' }}>
                <div className="mono-label" style={{ color: 'var(--accent-emerald)', fontSize: '9.5px' }}>VOICE PRACTICE</div>
                <div style={{ fontSize: '1.8rem', fontWeight: '800', marginTop: '4px' }}>Real-Time</div>
                <div className="mono-sm text-secondary" style={{ fontSize: '11px' }}>Natural spoken interview prep</div>
              </div>
              <div className="card-dark" style={{ padding: '20px', border: '1px solid rgba(192,132,252,0.3)', backgroundColor: 'rgba(192,132,252,0.04)', borderRadius: '12px' }}>
                <div className="mono-label" style={{ color: 'var(--accent-purple)', fontSize: '9.5px' }}>CHANNELS</div>
                <div style={{ fontSize: '1.8rem', fontWeight: '800', marginTop: '4px' }}>Every Channel</div>
                <div className="mono-sm text-secondary" style={{ fontSize: '11px' }}>Web · WhatsApp · Telegram · Mobile</div>
              </div>
            </div>

            {/* 4 Architectural Pillars of Nova */}
            <div className="grid-2 gap-lg mb-xl">
              {/* Card 1: Supervisor & Agent Topology */}
              <div className="card-dark" style={{ padding: '28px', borderRadius: '14px', border: '1px solid var(--border-subtle)', backgroundColor: '#13131c' }}>
                <div className="flex gap-sm alignItems-center mb-sm">
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255,107,0,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-orange)' }}>
                    <Bot size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: '800', margin: 0 }}>Campus Coordinator &amp; Specialized Assistants</h3>
                    <div className="mono-sm text-secondary" style={{ fontSize: '10.5px' }}>Intelligent routing &amp; secure student verification</div>
                  </div>
                </div>
                <p className="body-sm text-secondary mb-md" style={{ lineHeight: 1.5 }}>
                  The campus coordinator understands student questions in natural language, verifies their student profile securely, and routes their request to the right specialized assistant.
                </p>
                <div className="flex flex-col gap-xs">
                  <div style={{ padding: '8px 12px', borderRadius: '6px', backgroundColor: '#0d0d12', border: '1px solid #1f1f2e', fontSize: '11.5px', color: 'rgba(255,255,255,0.9)' }}>
                    <strong>Admissions &amp; Academics:</strong> <span className="text-secondary">Course recommendations · Admissions briefs · Course deadlines</span>
                  </div>
                  <div style={{ padding: '8px 12px', borderRadius: '6px', backgroundColor: '#0d0d12', border: '1px solid #1f1f2e', fontSize: '11.5px', color: 'rgba(255,255,255,0.9)' }}>
                    <strong>Careers &amp; Visa Rules:</strong> <span className="text-secondary">Job match · CV feedback · Visa 20h limit checker · Mock interview prep</span>
                  </div>
                  <div style={{ padding: '8px 12px', borderRadius: '6px', backgroundColor: '#0d0d12', border: '1px solid #1f1f2e', fontSize: '11.5px', color: 'rgba(255,255,255,0.9)' }}>
                    <strong>Student Life &amp; Housing:</strong> <span className="text-secondary">Verified student housing · Campus food &amp; services · Daily planner · Event matching</span>
                  </div>
                </div>
              </div>

              {/* Card 2: 12 Deterministic DAG Workflows */}
              <div className="card-dark" style={{ padding: '28px', borderRadius: '14px', border: '1px solid var(--border-subtle)', backgroundColor: '#13131c' }}>
                <div className="flex gap-sm alignItems-center mb-sm">
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(56,189,248,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)' }}>
                    <GitBranch size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: '800', margin: 0 }}>12 Structured Campus Workflows</h3>
                    <div className="mono-sm text-secondary" style={{ fontSize: '10.5px' }}>Reliable, predictable step-by-step processes</div>
                  </div>
                </div>
                <p className="body-sm text-secondary mb-md" style={{ lineHeight: 1.5 }}>
                  Important university policies follow clear, predictable rules. Critical workflows follow structured steps with complete audit logs and built-in checks so you get dependable results every time.
                </p>
                <div className="grid-2 gap-xs">
                  <div style={{ padding: '8px 10px', borderRadius: '6px', backgroundColor: '#0d0d12', border: '1px solid #1f1f2e', fontSize: '11px', color: 'rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Check size={12} color="var(--accent-cyan)" /> <span>New student onboarding</span>
                  </div>
                  <div style={{ padding: '8px 10px', borderRadius: '6px', backgroundColor: '#0d0d12', border: '1px solid #1f1f2e', fontSize: '11px', color: 'rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Check size={12} color="var(--accent-cyan)" /> <span>Housing reservation matching</span>
                  </div>
                  <div style={{ padding: '8px 10px', borderRadius: '6px', backgroundColor: '#0d0d12', border: '1px solid #1f1f2e', fontSize: '11px', color: 'rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Check size={12} color="var(--accent-cyan)" /> <span>Visa work-cap check</span>
                  </div>
                  <div style={{ padding: '8px 10px', borderRadius: '6px', backgroundColor: '#0d0d12', border: '1px solid #1f1f2e', fontSize: '11px', color: 'rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Check size={12} color="var(--accent-cyan)" /> <span>CV analysis &amp; feedback</span>
                  </div>
                  <div style={{ padding: '8px 10px', borderRadius: '6px', backgroundColor: '#0d0d12', border: '1px solid #1f1f2e', fontSize: '11px', color: 'rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Check size={12} color="var(--accent-cyan)" /> <span>Targeted graduate CV coach</span>
                  </div>
                  <div style={{ padding: '8px 10px', borderRadius: '6px', backgroundColor: '#0d0d12', border: '1px solid #1f1f2e', fontSize: '11px', color: 'rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Check size={12} color="var(--accent-cyan)" /> <span>AI mock interview coaching</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Nova Voice AI Engine */}
              <div className="card-dark" style={{ padding: '28px', borderRadius: '14px', border: '1px solid var(--border-subtle)', backgroundColor: '#13131c' }}>
                <div className="flex gap-sm alignItems-center mb-sm">
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(16,185,129,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-emerald)' }}>
                    <Mic size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: '800', margin: 0 }}>Real-Time Voice AI for Student Practice</h3>
                    <div className="mono-sm text-secondary" style={{ fontSize: '10.5px' }}>Instant spoken dialogue · Natural pronunciation practice</div>
                  </div>
                </div>
                <p className="body-sm text-secondary mb-md" style={{ lineHeight: 1.5 }}>
                  Fast, natural voice streaming allows students to practice job interviews, speak through visa questions, and get spoken coaching anytime on their mobile phone.
                </p>
                <div style={{ backgroundColor: '#0a0a0f', padding: '12px', borderRadius: '8px', border: '1px solid #1c1c28' }}>
                  <div className="mono-sm" style={{ fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '6px', color: 'var(--text-secondary)' }}>
                    <div><strong>VOICE SPEED:</strong> <span style={{ color: '#ffffff' }}>Instant, conversational audio with zero awkward lag</span></div>
                    <div><strong>ACCURACY:</strong> <span style={{ color: '#ffffff' }}>Accurate recognition across international accents</span></div>
                    <div><strong>FEEDBACK:</strong> <span style={{ color: 'var(--accent-emerald)' }}>Helpful coaching on clarity, pacing, and answers</span></div>
                  </div>
                </div>
              </div>

              {/* Card 4: Omni-Channel Bridges & Standard MCP */}
              <div className="card-dark" style={{ padding: '28px', borderRadius: '14px', border: '1px solid var(--border-subtle)', backgroundColor: '#13131c' }}>
                <div className="flex gap-sm alignItems-center mb-sm">
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(192,132,252,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-purple)' }}>
                    <Radio size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: '800', margin: 0 }}>Multi-Channel Support (WhatsApp, Web &amp; Mobile)</h3>
                    <div className="mono-sm text-secondary" style={{ fontSize: '10.5px' }}>Meets students on the channels they already use</div>
                  </div>
                </div>
                <p className="body-sm text-secondary mb-md" style={{ lineHeight: 1.5 }}>
                  WorldLynk reaches students where they spend their time. Safe verification using official university email ensures that only verified students receive assistance.
                </p>
                <div style={{ backgroundColor: '#0a0a0f', padding: '12px', borderRadius: '8px', border: '1px solid #1c1c28' }}>
                  <div className="mono-sm" style={{ fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '6px', color: 'var(--text-secondary)' }}>
                    <div><strong>POPULAR CHANNELS:</strong> <span style={{ color: '#ffffff' }}>Official WhatsApp · Mobile Student App · Web Portal</span></div>
                    <div><strong>STUDENT SECURITY:</strong> <span style={{ color: 'var(--accent-purple)' }}>Verified official university email login</span></div>
                    <div><strong>DATA PRIVACY:</strong> <span style={{ color: '#ffffff' }}>Fully compliant with UK GDPR &amp; university data standards</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── ZERO-MIGRATION CONNECTOR DIRECTORY ────────────────── */}
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>CONNECTOR CATALOG</span>
            <h2 className="headline-lg" style={{ marginTop: '4px' }}>
              Plug directly into the tools you already use.
            </h2>
            <p className="section-desc">
              Pre-built connectors for the software and databases your university already relies upon.
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
