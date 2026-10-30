import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AgentGraphVisualizer from '../components/AgentGraphVisualizer';
import EnterpriseCTASection from '../components/EnterpriseCTASection';
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
  Radio,
  Play,
  Share2,
  AlertTriangle,
  UserCheck
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

const SIMULATION_EVENTS = [
  {
    id: 'work-shift',
    title: 'Work Shift Logged',
    badge: 'UKVI 20h Sentinel',
    desc: 'Maya logs a 4.0h barista shift at Costa Coffee campus branch.',
    flow: [
      { layer: '01 Connect', action: 'CDC event received from Campus Retail till' },
      { layer: '02 Understand', action: 'In-memory graph updates: 16.0h + 4.0h = 20.0h hard ceiling' },
      { layer: '03 Assist', action: 'Nova AI triggers compliance guardrail: 0.0h buffer left' },
      { layer: '04 Control', action: 'Compass alerts Senior Tutor & updates student mobile app' }
    ]
  },
  {
    id: 'absence',
    title: 'Unverified Absence',
    badge: 'Retention Sentinel',
    desc: 'Maya is flagged absent for Tuesday 09:00 CS-5100 seminar.',
    flow: [
      { layer: '01 Connect', action: 'EB-02 Dynamic QR check-in window closes at 09:15' },
      { layer: '02 Understand', action: 'Profile attendance drops to 78%; unverified absence count = 2' },
      { layer: '03 Assist', action: 'Nova AI analyzes schedule & identifies Friday 14:00 makeup lab' },
      { layer: '04 Control', action: 'Compass queues draft WhatsApp check-in for Dr. Jenkins approval' }
    ]
  },
  {
    id: 'cas-prep',
    title: 'CAS Generation',
    badge: 'Registrar Automation',
    desc: 'Jin-Woo Park submits foreign high school diploma and bank statement.',
    flow: [
      { layer: '01 Connect', action: 'UCAS Web-Link pushes application docs into ingestion queue' },
      { layer: '02 Understand', action: 'Zero-copy token vault shields bank details; verifies £14,200 balance' },
      { layer: '03 Assist', action: 'Nova AI maps credential to UK ENIC standard (Distinction equivalent)' },
      { layer: '04 Control', action: 'Compass outputs pre-cleared CAS certificate for 1-click Registrar sign-off' }
    ]
  }
];

export default function PlatformPage() {
  const [selectedStudentIdx, setSelectedStudentIdx] = useState(0);
  const [activeLayerId, setActiveLayerId] = useState('fabric');
  const [detailTab, setDetailTab] = useState('sits'); // sits, moodle, stripe, attendance
  const [activeSimulationId, setActiveSimulationId] = useState('work-shift');

  React.useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      }
    }
  }, []);

  const student = STUDENTS[selectedStudentIdx];
  const activeLayer = LAYERS.find(l => l.id === activeLayerId) || LAYERS[0];
  const activeSimulation = SIMULATION_EVENTS.find(s => s.id === activeSimulationId) || SIMULATION_EVENTS[0];

  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', backgroundColor: 'var(--wl-dark)', color: '#0c0c0f' }}>
      
      {/* ── HERO BANNER ─────────────────────────────────────────── */}
      <section className="page-hero-banner" style={{ borderBottom: '1px solid #d8d4cd', paddingBottom: '3.5rem' }}>
        <div className="main-container">
          <div className="flex-between flex-wrap gap-md" style={{ alignItems: 'flex-start' }}>
            <div style={{ maxWidth: '800px' }}>
              <div className="mono-label" style={{ color: 'var(--accent-orange)', marginBottom: '10px' }}>
                PLATFORM ARCHITECTURE // ZERO-MIGRATION DATA UNIFICATION
              </div>
              <h1 className="headline-xl" style={{ marginBottom: '16px', lineHeight: 1.12, textWrap: 'balance' }}>
                Connect all your campus systems without a painful migration.
              </h1>
              <p className="body-lg text-secondary" style={{ maxWidth: '720px', lineHeight: 1.65 }}>
                Universities don't need another disruptive, multi-year IT overhaul. WorldLynk plugs directly into your existing SITS:Vision, Banner, Canvas, and Moodle systems — bringing everything together in real time while your current tools stay in place.
              </p>

              {/* Institutional Framework Seals */}
              <div className="flex gap-md flex-wrap mt-lg pt-md" style={{ borderTop: '1px solid #d8d4cd' }}>
                <div className="flex gap-xs items-center mono-sm" style={{ fontSize: '11px', color: '#475569' }}>
                  <Zap size={14} color="var(--accent-orange)" />
                  <span>Sub-12ms Change Data Capture (CDC)</span>
                </div>
                <div className="flex gap-xs items-center mono-sm" style={{ fontSize: '11px', color: '#475569' }}>
                  <ShieldCheck size={14} color="var(--status-pass)" />
                  <span>Zero Database Schema Alterations Required</span>
                </div>
                <div className="flex gap-xs items-center mono-sm" style={{ fontSize: '11px', color: '#475569' }}>
                  <Lock size={14} color="#0284c7" />
                  <span>Deterministic In-Memory PII Tokenization Vault</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-sm" style={{ minWidth: '240px' }}>
              <div className="card-elevated" style={{ padding: '20px', border: '1px solid #d8d4cd', borderRadius: '14px', backgroundColor: '#ffffff' }}>
                <div className="mono-label" style={{ color: '#0284c7', fontSize: '10px' }}>SYSTEM PERFORMANCE</div>
                <div style={{ fontSize: '1.45rem', fontWeight: '800', marginTop: '4px', color: '#0c0c0f' }}>Instant Live Sync</div>
                <div className="mono-sm text-secondary" style={{ fontSize: '11px', marginTop: '2px' }}>14,200 events/sec · 99.99% Uptime</div>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="flex gap-xs">
                  <a href={COMPASS_BACKEND_URL} target="_blank" rel="noreferrer" className="btn-secondary btn-sm" style={{ flex: 1, fontSize: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                    <span>Staff Portal</span>
                    <ExternalLink size={11} />
                  </a>
                  <a href={STUDENT_PLATFORM_URL} target="_blank" rel="noreferrer" className="btn-secondary btn-sm" style={{ flex: 1, fontSize: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                    <span>Student App</span>
                    <ExternalLink size={11} />
                  </a>
                </div>
                <Link to="/demo" className="btn-primary btn-sm" style={{ fontSize: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                  <span>Request Technical Simulation</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIVE INTERACTIVE DATA PIPELINE SIMULATOR ───────────────── */}
      <section className="section" style={{ paddingTop: '36px', paddingBottom: '30px' }}>
        <div className="main-container">
          
          <div className="card-elevated" style={{ padding: '28px', border: '1px solid #d8d4cd', borderRadius: '16px', backgroundColor: '#ffffff' }}>
            <div className="flex-between flex-wrap gap-sm mb-md">
              <div>
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>INTERACTIVE DATA PIPELINE // END-TO-END EVENT FLOW</span>
                <h3 className="headline-sm" style={{ marginTop: '2px', color: '#0c0c0f' }}>
                  See how an event travels through WorldLynk's 4 layers
                </h3>
              </div>
              
              {/* Event Switcher Chips */}
              <div className="flex gap-xs flex-wrap">
                {SIMULATION_EVENTS.map((sim) => {
                  const isActive = activeSimulationId === sim.id;
                  return (
                    <button
                      key={sim.id}
                      onClick={() => setActiveSimulationId(sim.id)}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '8px',
                        fontSize: '11.5px',
                        fontWeight: isActive ? '700' : '500',
                        cursor: 'pointer',
                        backgroundColor: isActive ? '#0c0c0f' : '#f8fafc',
                        color: isActive ? '#ffffff' : '#334155',
                        border: isActive ? '1px solid #0c0c0f' : '1px solid #e2e8f0',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <Play size={10} color={isActive ? 'var(--accent-orange)' : '#64748b'} />
                      <span>{sim.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <p className="body-sm text-secondary mb-lg" style={{ lineHeight: 1.5 }}>
              <strong>Scenario:</strong> {activeSimulation.desc}
            </p>

            {/* 4-Stage Horizontal Flow Diagram */}
            <div className="grid-4 gap-sm">
              {activeSimulation.flow.map((step, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#f8fafc',
                    borderRadius: '12px',
                    padding: '16px',
                    border: '1.5px solid #e2e8f0',
                    position: 'relative'
                  }}
                >
                  <div className="flex-between mb-xs">
                    <span className="mono-label" style={{ fontSize: '9px', color: 'var(--accent-orange)' }}>
                      STEP 0{idx + 1}
                    </span>
                    <span className="pill pill-approved" style={{ fontSize: '8px' }}>
                      {step.layer.split(' ')[1]}
                    </span>
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: '800', color: '#0c0c0f', marginBottom: '6px' }}>
                    {step.layer}
                  </div>
                  <div className="body-sm text-secondary" style={{ fontSize: '11.5px', lineHeight: 1.45 }}>
                    {step.action}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── 4-LAYER OPERATIONAL ARCHITECTURE TABS ───────────────── */}
      <section className="section" style={{ paddingTop: '20px', paddingBottom: '60px' }}>
        <div className="main-container">
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>HOW THE PLATFORM WORKS</span>
            <h2 className="headline-lg" style={{ marginTop: '6px' }}>
              Built specifically for higher education.
            </h2>
            <p className="section-desc" style={{ maxWidth: '680px', lineHeight: 1.6 }}>
              Four connected layers work together — from instant system connection to complete staff control.
            </p>
          </div>

          {/* Layer Selector Cards */}
          <div className="grid-4 gap-md mb-xl">
            {LAYERS.map((layer) => {
              const isSelected = activeLayerId === layer.id;
              return (
                <div
                  key={layer.id}
                  onClick={() => setActiveLayerId(layer.id)}
                  className={`card-elevated card-interactive ${isSelected ? 'card-selected' : ''}`}
                  style={{
                    padding: '24px',
                    borderRadius: '14px',
                    border: isSelected ? '2px solid var(--accent-orange)' : '1px solid #d8d4cd',
                    backgroundColor: isSelected ? '#ffffff' : '#ffffff',
                    cursor: 'pointer',
                    boxShadow: isSelected ? '0 8px 24px rgba(255, 107, 0, 0.12)' : 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div className="flex-between mb-xs">
                    <span className="mono-label" style={{ color: isSelected ? 'var(--accent-orange)' : 'var(--text-muted)' }}>LAYER {layer.num}</span>
                    <span className="pill pill-approved" style={{ fontSize: '8.5px' }}>ONLINE</span>
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '800', margin: '6px 0', color: '#0c0c0f' }}>{layer.name.split('//')[0]}</h3>
                  <div className="mono-sm text-secondary" style={{ fontSize: '11px', marginBottom: '8px' }}>{layer.tag}</div>
                  <div className="mono-sm" style={{ fontSize: '10px', color: '#0284c7' }}>{layer.benchmarks.split('·')[0]}</div>
                </div>
              );
            })}
          </div>

          {/* Detailed Layer Workbench */}
          <div className="card-elevated" style={{ padding: '36px', backgroundColor: '#ffffff', border: '1px solid #d8d4cd', borderRadius: '16px' }}>
            <div className="flex-between flex-wrap gap-md mb-lg">
              <div>
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>{activeLayer.tag}</span>
                <h3 className="headline-md" style={{ margin: '6px 0', color: '#0c0c0f' }}>{activeLayer.name}</h3>
                <p className="body-md text-secondary" style={{ maxWidth: '780px', lineHeight: 1.6 }}>{activeLayer.desc}</p>
              </div>
              <div className="mono-sm text-secondary" style={{ backgroundColor: '#f8fafc', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <strong>SYSTEMS SUPPORTED:</strong> <span style={{ color: '#0c0c0f' }}>{activeLayer.tech}</span>
              </div>
            </div>

            <div className="grid-2 gap-xl" style={{ alignItems: 'start' }}>
              {/* Features List */}
              <div>
                <span className="mono-label" style={{ color: '#475569' }}>KEY CAPABILITIES</span>
                <div className="flex flex-col gap-sm mt-sm">
                  {activeLayer.features.map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', backgroundColor: '#f8fafc', padding: '14px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                      <CheckCircle2 size={16} color="var(--status-pass)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '13px', color: '#1e293b', lineHeight: 1.5 }}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Benchmarks & Topology Box */}
              <div style={{ backgroundColor: '#f8fafc', padding: '24px', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                <span className="mono-label" style={{ color: '#0284c7' }}>GUARANTEED STANDARDS &amp; SAFETY</span>
                <div className="mono-sm mt-md" style={{ fontSize: '11.5px', display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-secondary)' }}>
                  <div><strong>REAL-TIME PERFORMANCE:</strong> <span style={{ color: '#0c0c0f' }}>{activeLayer.benchmarks}</span></div>
                  <div><strong>ZERO LOST UPDATES:</strong> <span style={{ color: 'var(--status-pass)' }}>All student updates queued safely and delivered reliably</span></div>
                  <div><strong>ZERO SYSTEM DISRUPTION:</strong> <span style={{ color: 'var(--status-pass)' }}>No changes or alterations required on your existing campus databases</span></div>
                  <div><strong>PRIVACY &amp; SECURITY:</strong> <span style={{ color: '#0c0c0f' }}>Strict institutional encryption compliant with UK GDPR and higher education standards</span></div>
                </div>

                <div style={{ marginTop: '24px', paddingTop: '18px', borderTop: '1px solid #e2e8f0' }}>
                  <Link to="/demo" className="btn-secondary btn-sm" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                    <span>Schedule an Architectural Walkthrough</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── UNIFIED STUDENT RECORD MOCKUP ───────────────── */}
      <section className="section" style={{ paddingTop: '20px', paddingBottom: '70px', borderBottom: '1px solid #d8d4cd' }}>
        <div className="main-container">
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>UNIFIED STUDENT RECORD</span>
            <h2 className="headline-lg" style={{ marginTop: '6px' }}>
              One clear view for your entire campus.
            </h2>
            <p className="section-desc" style={{ maxWidth: '680px', lineHeight: 1.6 }}>
              Select a student to see how WorldLynk brings together records from your student database, course portal, accommodation, and lecture attendance into one friendly profile.
            </p>
          </div>

          <div className="mockup-window mb-xl" style={{ border: '1px solid #cbd5e1', borderRadius: '14px', overflow: 'hidden', backgroundColor: '#ffffff', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)' }}>
            <div className="mockup-chrome flex-between flex-wrap gap-sm" style={{ padding: '14px 20px', backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
              <div className="flex gap-sm alignItems-center">
                <div className="mockup-dots">
                  <span className="mockup-dot mockup-dot-red" />
                  <span className="mockup-dot mockup-dot-amber" />
                  <span className="mockup-dot mockup-dot-green" />
                </div>
                <span className="mono-sm text-muted">CONNECTED STUDENT RECORD // LIVE PROFILE</span>
              </div>

              {/* Student Switcher */}
              <div className="flex gap-xs" style={{ flexWrap: 'wrap' }}>
                {STUDENTS.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedStudentIdx(idx)}
                    className={`tab-pill-premium ${selectedStudentIdx === idx ? 'tab-pill-premium--active' : ''}`}
                    style={{ padding: '6px 14px', fontSize: '11.5px' }}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mockup-body" style={{ padding: '28px', backgroundColor: '#f8fafc' }}>
              <div className="flex-between flex-wrap gap-md mb-lg" style={{ paddingBottom: '18px', borderBottom: '1px solid #e2e8f0' }}>
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
                    <div className="flex gap-xs alignItems-center">
                      <span className="mono-label" style={{ fontSize: '10px', color: 'var(--accent-orange)' }}>STUDENT DOSSIER</span>
                      <span className="pill pill-approved" style={{ fontSize: '8px' }}>Active Profile</span>
                    </div>
                    <div style={{ fontSize: '1.4rem', fontWeight: '800', marginTop: '2px', color: '#0c0c0f' }}>{student.name}</div>
                    <div className="mono-sm text-secondary" style={{ fontSize: '11.5px', marginTop: '2px' }}>
                      {student.course} · {student.status}
                    </div>
                  </div>
                </div>

                <div className="mono-sm text-secondary" style={{ backgroundColor: '#ffffff', padding: '10px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', maxWidth: '420px', fontSize: '11px', lineHeight: 1.45 }}>
                  <span style={{ color: 'var(--accent-orange)', fontWeight: '700' }}>Recent Signal:</span> {student.recentSignal}
                </div>
              </div>

              {/* 4 Connected Cards Grid */}
              <div className="grid-4 gap-md mb-lg">
                <div style={{ backgroundColor: '#ffffff', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <div className="mono-sm text-muted" style={{ fontSize: '9.5px' }}>STUDENT RECORD (SITS)</div>
                  <div style={{ fontSize: '12px', fontWeight: '800', margin: '4px 0', color: '#0c0c0f' }}>ID: {student.sitsId}</div>
                  <div className="mono-sm text-secondary" style={{ fontSize: '10.5px' }}>{student.details.sits.status}</div>
                  <div className="mono-sm" style={{ fontSize: '10px', color: 'var(--status-pass)', marginTop: '8px' }}>✓ SITS Bi-directional Synced</div>
                </div>

                <div style={{ backgroundColor: '#ffffff', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <div className="mono-sm text-muted" style={{ fontSize: '9.5px' }}>COURSE PORTAL (MOODLE)</div>
                  <div style={{ fontSize: '12px', fontWeight: '800', margin: '4px 0', color: '#0c0c0f' }}>User: {student.moodleUser}</div>
                  <div className="mono-sm text-secondary" style={{ fontSize: '10.5px' }}>{student.details.moodle.coursework}</div>
                  <div className="mono-sm" style={{ fontSize: '10px', color: '#0284c7', marginTop: '8px' }}>✓ Last Login: {student.details.moodle.lastLogin}</div>
                </div>

                <div style={{ backgroundColor: '#ffffff', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <div className="mono-sm text-muted" style={{ fontSize: '9.5px' }}>VERIFIED PBSA HOUSING</div>
                  <div style={{ fontSize: '12px', fontWeight: '800', margin: '4px 0', color: '#0c0c0f' }}>{student.details.stripe.residence.split('(')[0]}</div>
                  <div className="mono-sm text-secondary" style={{ fontSize: '10.5px' }}>Rent: {student.details.stripe.rent}</div>
                  <div className="mono-sm" style={{ fontSize: '10px', color: 'var(--status-pass)', marginTop: '8px' }}>✓ Escrow Deposit Protected</div>
                </div>

                <div style={{ backgroundColor: '#ffffff', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <div className="mono-sm text-muted" style={{ fontSize: '9.5px' }}>UKVI ATTENDANCE &amp; VISA</div>
                  <div style={{ fontSize: '12px', fontWeight: '800', margin: '4px 0', color: '#0c0c0f' }}>CAS: {student.cas}</div>
                  <div className="mono-sm text-secondary" style={{ fontSize: '10.5px' }}>{student.details.attendance.status}</div>
                  <div className="mono-sm" style={{ fontSize: '10px', color: 'var(--accent-orange)', marginTop: '8px' }}>✓ Within 20h Work Cap</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── AGENT GRAPH SECTION ──────────────────────────────────── */}
      <section id="agent-graph" className="section section-spacious" style={{ borderBottom: '1px solid #d8d4cd' }}>
        <div className="main-container">
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>CAMPUS AGENT NETWORK</span>
            <h2 className="headline-lg" style={{ marginTop: '6px' }}>
              30 Specialized AI Assistants Working in Concert.
            </h2>
            <p className="section-desc" style={{ maxWidth: '680px', lineHeight: 1.6 }}>
              Inspect how the Campus Coordinator routes student inquiries and staff workflows to domain-specific assistants under full human governance.
            </p>
          </div>

          <AgentGraphVisualizer />
        </div>
      </section>

      {/* ── ENTERPRISE CTA SECTION ───────────────────────────────── */}
      <EnterpriseCTASection 
        eyebrow="ARCHITECTURE &amp; EVALUATION"
        title="Ready to evaluate WorldLynk's zero-migration architecture?"
        description="Book a dedicated technical session with our systems engineering team, or test our live SITS:Vision connector sandbox."
        primaryText="Schedule Technical Walkthrough"
        primaryLink="/demo"
        secondaryText="Explore Compass Staff Portal"
        secondaryLink="/staff-os"
      />

    </div>
  );
}
