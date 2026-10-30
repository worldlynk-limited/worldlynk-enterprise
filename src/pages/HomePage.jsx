import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, ShieldCheck, CheckCircle2, AlertTriangle, Clock, 
  ArrowRight, ExternalLink, Bot, Zap, Layers, Search, 
  Users, Database, Calendar, Building, GraduationCap, 
  FileText, Lock, GitCommit, Check, Cpu, Network, Globe, MessageSquare,
  Server, Shield, MessageCircle, BarChart, HardDrive, Sparkles,
  Play, Pause, RotateCcw, ChevronRight, Award
} from 'lucide-react';

import LifecycleOverviewSection from '../components/funnel/LifecycleOverviewSection';
import SpecialistAgentsSection from '../components/funnel/SpecialistAgentsSection';
import CampusMapAgentGraph from '../components/risely/CampusMapAgentGraph';
import OneFrontDoorFunnel from '../components/risely/OneFrontDoorFunnel';
import UnifiedIntelligenceGraph from '../components/risely/UnifiedIntelligenceGraph';
import EnterpriseCTASection from '../components/EnterpriseCTASection';
import HeroMockup3D from '../components/HeroMockup3D';
import Hero3DBackground from '../components/Hero3DBackground';

const COMPASS_BACKEND_URL = "https://uniportal-uq1p.onrender.com";
const STUDENT_PLATFORM_URL = "https://worldlynk.co.uk";

const GridOverlay = ({ variant = 'dark' }) => (
  <div className={`wl-grid-overlay wl-grid-overlay--${variant}`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <div key={i} className="wl-grid-line" />
    ))}
  </div>
);

export default function HomePage() {
  // State for Section: Dual OS
  const [activeOS, setActiveOS] = useState('staff');

  // State for Section 7: ROI Simulator
  const [cohortSize, setCohortSize] = useState(15000);
  const [tuitionFee, setTuitionFee] = useState(25000);

  // Defensible, Reconciled UK Higher Education Persistence Model
  // Net 1.0% cohort retention gain from early cross-system intervention
  const savedStudents = Math.round(cohortSize * 0.01); // 150 students for 15,000 cohort
  const recoveredRevenue = savedStudents * tuitionFee; // 150 * £25,000 = £3.75M
  const adminHours = Math.round(savedStudents * 24); // ~3,600 staff hours salvaged from manual caseload triage

  return (
    <div style={{ backgroundColor: 'var(--wl-dark)', color: 'white', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* SECTION 1: HERO COMMAND CENTER (DARK) */}
      <section className="section hero-main-section">
        <Hero3DBackground />
        <GridOverlay variant="dark" />
        <div className="main-container" style={{ position: 'relative', zIndex: 10 }}>
          {/* Centered Hero Header matching the reference design */}
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto', paddingTop: '10px' }}>
            
            <h1 className="hero-main-headline">
              Powerfully simple campus intelligence.
            </h1>
            
            <p className="hero-main-subtext">
              WorldLynk connects SITS, Moodle, and attendance data into one proactive system. Specialized AI assistants research issues and draft interventions, while your staff keep complete control.
            </p>
            
            <div className="hero-cta-group">
              <Link
                to="/demo"
                className="hero-cta-btn hero-cta-btn--primary"
              >
                Book a Live Demo
              </Link>
              <Link 
                to="/platform" 
                className="hero-cta-btn hero-cta-btn--secondary"
              >
                <span>Explore Platform Architecture</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Verified Trust Badges */}
            {/* <div className="hero-trust-row">
              <div className="hero-trust-badge">
                <ShieldCheck size={14} style={{ color: '#10b981' }} />
                <span>SOC-2 Type II</span>
              </div>
              <div className="hero-trust-badge">
                <Lock size={14} style={{ color: '#38bdf8' }} />
                <span>UK &amp; EU GDPR Ready</span>
              </div>
              <div className="hero-trust-badge">
                <CheckCircle2 size={14} style={{ color: '#ff6b00' }} />
                <span>Zero Database Migrations</span>
              </div>
              <div className="hero-trust-badge">
                <Activity size={14} style={{ color: '#38bdf8' }} />
                <span>99.95% SLA Uptime</span>
              </div>
            </div> */}
          </div>

          {/* 3D REALISTIC HERO MOCKUP (Clean, Multi-Layered Depth, Orbiting Cards) */}
          <HeroMockup3D />
          
          {/* Institutional Telemetry bar */}
          <div className="hero-telemetry-bar">
            <div className="mono-sm text-muted">STUDENTS SUPPORTED: 15,000+</div>
            <div className="mono-sm text-muted">STUDENT SATISFACTION: 98%</div>
            <div className="mono-sm text-muted">CAMPUS CAPABILITIES: 30 SPECIALISTS</div>
            <div className="mono-sm text-muted">VISA COMPLIANCE: 100% AUDIT READY</div>
          </div>
        </div>
      </section>

      {/* RISELY BLUEPRINT SECTION 1: THE AGENT GRAPH & FABRIC ARCHITECTURE */}
      {/* <CampusMapAgentGraph /> */}

      {/* RISELY BLUEPRINT SECTION 2: ONE FRONT DOOR & STUDENT OS SIMULATOR */}
      <OneFrontDoorFunnel />

      {/* RISELY BLUEPRINT SECTION 3: UNIFIED INTELLIGENCE ACROSS CAMPUS */}
       {/* <UnifiedIntelligenceGraph /> */}

      {/* SECTION: BUILT FOR YOUR WHOLE CAMPUS (LIVELY PHOTO SPOTLIGHT) */}
      <section className="section" style={{ backgroundColor: '#0b0c10', borderBottom: '1px solid #1a1a24', position: 'relative' }}>
        <div className="main-container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem' }}>
            <div className="mono-label" style={{ color: 'var(--wl-accent)', marginBottom: '0.75rem' }}>
              BUILT FOR EVERY PERSON ON CAMPUS
            </div>
            <h2 className="headline-lg" style={{ marginBottom: '1rem' }}>
              A calmer campus for staff. A happier journey for students.
            </h2>
            <p className="body-lg text-secondary" style={{ lineHeight: 1.6 }}>
              Whether you lead the university, teach in lecture halls, or have just arrived from across the globe — WorldLynk takes care of the routine chaos so you can focus on what matters.
            </p>
          </div>

          <div className="spotlight-card-grid">
            
            {/* Card 1: University Leadership */}
            <div 
              style={{ 
                backgroundColor: '#101118', 
                borderRadius: '20px', 
                border: '1px solid rgba(255, 255, 255, 0.08)', 
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 16px 40px -10px rgba(0, 0, 0, 0.5)',
                transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease'
              }}
            >
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img 
                  src="/images/oxford_campus.jpg" 
                  alt="University Leadership & Historic Campus" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #101118 0%, rgba(16, 17, 24, 0.7) 45%, transparent 100%)' }} />
                <span 
                  style={{ 
                    position: 'absolute', 
                    top: '1rem', 
                    left: '1rem', 
                    backgroundColor: 'rgba(11, 12, 16, 0.78)', 
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.16)',
                    color: '#ffffff', 
                    padding: '0.35rem 0.85rem', 
                    borderRadius: '9999px', 
                    fontSize: '0.72rem', 
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#ff6b00', boxShadow: '0 0 8px #ff6b00' }} />
                  <span>FOR UNIVERSITY LEADERSHIP</span>
                </span>
              </div>
              <div className="spotlight-card-body">
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.3, letterSpacing: '-0.015em', marginBottom: '0.85rem' }}>
                    Protect Student Retention &amp; Institutional Revenue
                  </h3>
                  <p style={{ color: '#cbd5e1', fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                    Spot drop-out risks before students slip away. Retain cohorts to graduation and safeguard international tuition without painful software replacements or extra admin headcount.
                  </p>
                </div>
                <div style={{ padding: '0.9rem 1.1rem', borderRadius: '12px', backgroundColor: 'rgba(255, 107, 0, 0.08)', border: '1px solid rgba(255, 107, 0, 0.28)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: 34, height: 34, borderRadius: '8px', backgroundColor: 'rgba(255, 107, 0, 0.18)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                    <Award size={18} style={{ color: '#ff6b00' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.01em' }}>
                      £3.75M <span style={{ fontWeight: 500, fontSize: '0.82rem', color: '#fed7aa' }}>protected tuition</span>
                    </span>
                    <span style={{ fontSize: '0.74rem', color: '#fed7aa', marginTop: '1px' }}>
                      Based on 150 saved students at £25k per 15k cohort
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Faculty, Academic Tutors & Student Services */}
            <div 
              style={{ 
                backgroundColor: '#101118', 
                borderRadius: '20px', 
                border: '1px solid rgba(255, 255, 255, 0.08)', 
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 16px 40px -10px rgba(0, 0, 0, 0.5)',
                transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease'
              }}
            >
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" 
                  alt="Academic Tutor and Student Support Session" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #101118 0%, rgba(16, 17, 24, 0.7) 45%, transparent 100%)' }} />
                <span 
                  style={{ 
                    position: 'absolute', 
                    top: '1rem', 
                    left: '1rem', 
                    backgroundColor: 'rgba(11, 12, 16, 0.78)', 
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.16)',
                    color: '#ffffff', 
                    padding: '0.35rem 0.85rem', 
                    borderRadius: '9999px', 
                    fontSize: '0.72rem', 
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#38bdf8', boxShadow: '0 0 8px #38bdf8' }} />
                  <span>FOR TUTORS &amp; STUDENT WELFARE</span>
                </span>
              </div>
              <div className="spotlight-card-body">
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.3, letterSpacing: '-0.015em', marginBottom: '0.85rem' }}>
                    Less Repetitive Paperwork, More Quality Mentorship
                  </h3>
                  <p style={{ color: '#cbd5e1', fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                    Routine queries, attendance logs, and visa checklists are prepared automatically. Tutors receive thoughtful, ready-to-send welfare messages they can review and approve in seconds.
                  </p>
                </div>
                <div style={{ padding: '0.9rem 1.1rem', borderRadius: '12px', backgroundColor: 'rgba(56, 189, 248, 0.08)', border: '1px solid rgba(56, 189, 248, 0.28)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: 34, height: 34, borderRadius: '8px', backgroundColor: 'rgba(56, 189, 248, 0.18)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                    <Clock size={18} style={{ color: '#38bdf8' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.01em' }}>
                      3,400+ staff hours <span style={{ fontWeight: 500, fontSize: '0.82rem', color: '#bae6fd' }}>reclaimed</span>
                    </span>
                    <span style={{ fontSize: '0.74rem', color: '#bae6fd', marginTop: '1px' }}>
                      Automates routine queries, case notes &amp; compliance logs
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Domestic & International Students */}
            <div 
              style={{ 
                backgroundColor: '#101118', 
                borderRadius: '20px', 
                border: '1px solid rgba(255, 255, 255, 0.08)', 
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 16px 40px -10px rgba(0, 0, 0, 0.5)',
                transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease'
              }}
            >
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img 
                  src="/images/aspiring_student.jpg" 
                  alt="International Student on Campus" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #101118 0%, rgba(16, 17, 24, 0.7) 45%, transparent 100%)' }} />
                <span 
                  style={{ 
                    position: 'absolute', 
                    top: '1rem', 
                    left: '1rem', 
                    backgroundColor: 'rgba(11, 12, 16, 0.78)', 
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.16)',
                    color: '#ffffff', 
                    padding: '0.35rem 0.85rem', 
                    borderRadius: '9999px', 
                    fontSize: '0.72rem', 
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#10b981', boxShadow: '0 0 8px #10b981' }} />
                  <span>FOR STUDENTS &amp; FAMILIES</span>
                </span>
              </div>
              <div className="spotlight-card-body">
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.3, letterSpacing: '-0.015em', marginBottom: '0.85rem' }}>
                    A Warm, Confident Welcome From Day One
                  </h3>
                  <p style={{ color: '#cbd5e1', fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                    From course preparation and verified student accommodation to lecture halls and campus careers — students have a friendly guide in their pocket, available 24/7.
                  </p>
                </div>
                <div style={{ padding: '0.9rem 1.1rem', borderRadius: '12px', backgroundColor: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.28)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: 34, height: 34, borderRadius: '8px', backgroundColor: 'rgba(16, 185, 129, 0.18)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                    <ShieldCheck size={18} style={{ color: '#10b981' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.01em' }}>
                      100% verified <span style={{ fontWeight: 500, fontSize: '0.82rem', color: '#a7f3d0' }}>onboarding safety</span>
                    </span>
                    <span style={{ fontSize: '0.74rem', color: '#a7f3d0', marginTop: '1px' }}>
                      Guaranteed escrow housing &amp; 20h visa compliance guard
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTINUOUS LIFECYCLE HORIZONS OVERVIEW */}
      <LifecycleOverviewSection />

      {/* AUTONOMOUS SPECIALIST AGENTS */}
      {/* <SpecialistAgentsSection /> */}

      {/* SECTION 5: DUAL OS COMPARISON (DARK) */}
      <section className="section" style={{ borderBottom: '1px solid #1a1a24' }}>
        <div className="main-container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="mono-label" style={{ color: 'var(--wl-accent)' }}>TWO CONNECTED APPS</div>
            <h2 className="headline-lg">One portal for staff. One simple app for students.</h2>
            <p className="body-md text-secondary" style={{ maxWidth: '620px', margin: '1rem auto 0' }}>
              Staff get a unified dashboard to review and approve tasks. Students get a single smartphone app for timetables, check-ins, and 24/7 help.
            </p>
          </div>

          <div className="flex" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
            <div style={{ display: 'inline-flex', backgroundColor: '#131318', padding: '0.25rem', borderRadius: '8px', border: '1px solid #2a2a35' }}>
              <button 
                className={`tab-btn ${activeOS === 'staff' ? 'tab-btn-active' : ''}`}
                onClick={() => setActiveOS('staff')}
                style={{ 
                  padding: '0.75rem 2rem', 
                  borderRadius: '6px', 
                  border: 'none', 
                  backgroundColor: activeOS === 'staff' ? '#2a2a35' : 'transparent',
                  color: activeOS === 'staff' ? 'white' : '#a1a1aa',
                  fontWeight: activeOS === 'staff' ? 600 : 400,
                  cursor: 'pointer'
                }}
              >
                Staff Portal (Compass)
              </button>
              <button 
                className={`tab-btn ${activeOS === 'student' ? 'tab-btn-active' : ''}`}
                onClick={() => setActiveOS('student')}
                style={{ 
                  padding: '0.75rem 2rem', 
                  borderRadius: '6px', 
                  border: 'none', 
                  backgroundColor: activeOS === 'student' ? '#2a2a35' : 'transparent',
                  color: activeOS === 'student' ? 'white' : '#a1a1aa',
                  fontWeight: activeOS === 'student' ? 600 : 400,
                  cursor: 'pointer'
                }}
              >
                Student App (WorldLynk)
              </button>
            </div>
          </div>

          {activeOS === 'staff' && (
            <div className="animate-fade-in">
              <div className="mockup-window" style={{ border: '1px solid #2a2a35', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
                <div className="mockup-chrome flex flex-between" style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #2a2a35', backgroundColor: '#131318' }}>
                  <div className="flex gap-sm">
                    <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ff5f56' }} />
                    <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
                    <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#27c93f' }} />
                  </div>
                  <div className="mono-sm text-muted">COMPASS_STAFF_PORTAL</div>
                </div>
                <div className="mockup-body" style={{ backgroundColor: '#0c0c0f', padding: '0' }}>
                  <div className="table-scroll-container">
                    <table className="queue-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                      <thead style={{ backgroundColor: '#131318', borderBottom: '1px solid #2a2a35' }}>
                        <tr>
                          <th style={{ padding: '1rem', color: '#a1a1aa', fontWeight: 500, fontSize: '0.875rem' }}>Student</th>
                          <th style={{ padding: '1rem', color: '#a1a1aa', fontWeight: 500, fontSize: '0.875rem' }}>Department</th>
                          <th style={{ padding: '1rem', color: '#a1a1aa', fontWeight: 500, fontSize: '0.875rem' }}>What Happened</th>
                          <th style={{ padding: '1rem', color: '#a1a1aa', fontWeight: 500, fontSize: '0.875rem' }}>Current Status</th>
                          <th style={{ padding: '1rem', color: '#a1a1aa', fontWeight: 500, fontSize: '0.875rem' }}>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ borderBottom: '1px solid #1a1a24' }}>
                          <td style={{ padding: '1rem' }}><div style={{ fontWeight: 500 }}>James Thorne</div><div className="mono-sm text-muted">ID: 847291</div></td>
                          <td style={{ padding: '1rem', color: '#e4e4e7' }}>Engineering</td>
                          <td style={{ padding: '1rem' }}><span className="source-badge source-badge-attendance" style={{ color: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.1)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem' }}>Missed 3 Classes</span></td>
                          <td style={{ padding: '1rem' }}><span className="pill pill-held">Waiting for Review</span></td>
                          <td style={{ padding: '1rem' }}><button className="btn-sm" style={{ backgroundColor: '#2a2a35', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', color: 'white', cursor: 'pointer' }}>Review</button></td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid #1a1a24' }}>
                          <td style={{ padding: '1rem' }}><div style={{ fontWeight: 500 }}>Sarah Jenkins</div><div className="mono-sm text-muted">ID: 921104</div></td>
                          <td style={{ padding: '1rem', color: '#e4e4e7' }}>Business</td>
                          <td style={{ padding: '1rem' }}><span className="source-badge source-badge-lms" style={{ color: '#f59e0b', backgroundColor: 'rgba(245, 158, 11, 0.1)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem' }}>Inactive for 3 Days</span></td>
                          <td style={{ padding: '1rem' }}><span className="pill pill-active">AI Checking In</span></td>
                          <td style={{ padding: '1rem' }}><button className="btn-sm" style={{ backgroundColor: 'transparent', border: '1px solid #2a2a35', padding: '0.5rem 1rem', borderRadius: '4px', color: '#a1a1aa', cursor: 'pointer' }}>View Details</button></td>
                        </tr>
                        <tr>
                          <td style={{ padding: '1rem' }}><div style={{ fontWeight: 500 }}>Aisha Patel</div><div className="mono-sm text-muted">ID: 773829</div></td>
                          <td style={{ padding: '1rem', color: '#e4e4e7' }}>Law</td>
                          <td style={{ padding: '1rem' }}><span className="source-badge source-badge-sis" style={{ color: '#10b981', backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem' }}>Visa Document Uploaded</span></td>
                          <td style={{ padding: '1rem' }}><span className="pill pill-approved">Verified</span></td>
                          <td style={{ padding: '1rem' }}><button className="btn-sm" style={{ backgroundColor: 'transparent', border: '1px solid #2a2a35', padding: '0.5rem 1rem', borderRadius: '4px', color: '#a1a1aa', cursor: 'pointer' }}>Check Record</button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <a href={COMPASS_BACKEND_URL} target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '0.75rem 1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  Explore Staff Portal <ArrowRight size={16} />
                </a>
              </div>
            </div>
          )}

          {activeOS === 'student' && (
            <div className="animate-fade-in">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
                
                {/* Visual Phone Mockup Showcase */}
                <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                  <div 
                    style={{ 
                      position: 'relative', 
                      maxWidth: '340px', 
                      borderRadius: '24px', 
                      overflow: 'hidden', 
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 35px -5px rgba(56, 189, 248, 0.2)' 
                    }}
                  >
                    <img 
                      src="/images/student_housing_mockup.png" 
                      alt="WorldLynk Student Mobile App Interface" 
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                    <div 
                      style={{ 
                        position: 'absolute', 
                        bottom: '1rem', 
                        left: '1rem', 
                        right: '1rem', 
                        backgroundColor: 'rgba(12, 13, 18, 0.92)', 
                        backdropFilter: 'blur(10px)',
                        padding: '0.75rem 1rem', 
                        borderRadius: '10px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#10b981' }} />
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ffffff' }}>Student App Active</span>
                      </div>
                      <span style={{ fontSize: '0.7rem', color: '#38bdf8', fontWeight: 600 }}>iOS &amp; Android</span>
                    </div>
                  </div>
                </div>

                {/* 4 Clear Everyday Student Benefits */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  
                  <div style={{ padding: '1.25rem', backgroundColor: '#131318', border: '1px solid #2a2a35', borderRadius: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.35rem' }}>
                      <Building size={20} style={{ color: 'var(--wl-accent)' }} />
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>Verified Accommodation &amp; Digital Room Key</h4>
                    </div>
                    <p style={{ color: '#a1a1aa', fontSize: '0.88rem', lineHeight: 1.5 }}>
                      Students reserve vetted university and private halls, review tenancy terms, and secure their arrival accommodation before landing.
                    </p>
                  </div>

                  <div style={{ padding: '1.25rem', backgroundColor: '#131318', border: '1px solid #2a2a35', borderRadius: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.35rem' }}>
                      <Clock size={20} style={{ color: '#38bdf8' }} />
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>Live Timetable &amp; 1-Tap Attendance</h4>
                    </div>
                    <p style={{ color: '#a1a1aa', fontSize: '0.88rem', lineHeight: 1.5 }}>
                      Daily lectures, room locations, and coursework deadlines synchronized in one clear timeline. Attendance check-ins happen in 1 tap.
                    </p>
                  </div>

                  <div style={{ padding: '1.25rem', backgroundColor: '#131318', border: '1px solid #2a2a35', borderRadius: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.35rem' }}>
                      <ShieldCheck size={20} style={{ color: '#10b981' }} />
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>20-Hour Visa Work Cap Peace of Mind</h4>
                    </div>
                    <p style={{ color: '#a1a1aa', fontSize: '0.88rem', lineHeight: 1.5 }}>
                      Campus shifts and part-time jobs are automatically cross-checked against legal term-time visa limits so students stay safe.
                    </p>
                  </div>

                  <div style={{ padding: '1.25rem', backgroundColor: '#131318', border: '1px solid #2a2a35', borderRadius: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.35rem' }}>
                      <MessageCircle size={20} style={{ color: '#c084fc' }} />
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>24/7 Friendly University Answers</h4>
                    </div>
                    <p style={{ color: '#a1a1aa', fontSize: '0.88rem', lineHeight: 1.5 }}>
                      Instant, welcoming answers to common questions about campus services, library hours, and welfare support — day or night.
                    </p>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                    <Link to="/student-os" className="btn-secondary" style={{ padding: '0.75rem 1.4rem', fontSize: '0.9rem', color: '#ffffff', border: '1px solid #2a2a35', backgroundColor: '#131318' }}>
                      Explore Student App <ArrowRight size={15} />
                    </Link>
                    <a href={STUDENT_PLATFORM_URL} target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '0.75rem 1.4rem', fontSize: '0.9rem' }}>
                      Launch Live Student App <ExternalLink size={15} />
                    </a>
                  </div>

                </div>

              </div>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 7: ROI SIMULATOR (DARK) */}
      {/* <section className="section" style={{ borderTop: '1px solid #1a1a24' }}>
        <div className="main-container">
          <div className="section-header-left mb-xl">
            <div className="mono-label" style={{ color: 'var(--wl-accent)' }}>MEASURABLE IMPACT</div>
            <h2 className="headline-lg">Calculate the impact on your university.</h2>
          </div>

          <div className="grid-2 gap-xl" style={{ alignItems: 'center' }}>
            <div className="card-elevated" style={{ padding: '2.5rem', borderRadius: '16px' }}>
              <div className="form-group" style={{ marginBottom: '2.5rem' }}>
                <div className="flex flex-between mb-sm">
                  <label className="form-label" style={{ fontWeight: 600 }}>Total Student Cohort</label>
                  <span className="mono-sm" style={{ color: 'var(--wl-accent)', fontWeight: '700' }}>{cohortSize.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="1000" 
                  max="35000" 
                  step="500" 
                  value={cohortSize} 
                  onChange={(e) => setCohortSize(parseInt(e.target.value))}
                  className="range-input-premium"
                />
              </div>
              
              <div className="form-group">
                <div className="flex flex-between mb-sm">
                  <label className="form-label" style={{ fontWeight: 600 }}>Average Annual Tuition (£)</label>
                  <span className="mono-sm" style={{ color: 'var(--wl-accent)', fontWeight: '700' }}>£{tuitionFee.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="16000" 
                  max="40000" 
                  step="500" 
                  value={tuitionFee} 
                  onChange={(e) => setTuitionFee(parseInt(e.target.value))}
                  className="range-input-premium"
                />
              </div>
              
              <p className="body-sm text-muted mt-lg" style={{ fontStyle: 'italic' }}>
                *Estimates based on pilot university outcomes reducing student dropout and automating routine administrative tickets.
              </p>
            </div>

            <div className="grid-2 gap-md">
              <div className="card-elevated" style={{ padding: '1.75rem', borderRadius: '14px', borderLeft: '4px solid var(--wl-accent)' }}>
                <div className="mono-label text-muted mb-sm" style={{ fontSize: '0.75rem' }}>STUDENTS RETAINED / YR</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white', marginBottom: '0.25rem' }}>{savedStudents}</div>
                <div className="body-sm text-secondary">Students flagged &amp; supported</div>
              </div>
              
              <div className="card-elevated" style={{ padding: '1.75rem', borderRadius: '14px', borderLeft: '4px solid var(--status-pass)' }}>
                <div className="mono-label text-muted mb-sm" style={{ fontSize: '0.75rem' }}>TUITION PROTECTED / YR</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white', marginBottom: '0.25rem' }}>£{(recoveredRevenue / 1000000).toFixed(1)}M</div>
                <div className="body-sm text-secondary">Protected student tuition</div>
              </div>
              
              <div className="card-elevated" style={{ padding: '1.75rem', borderRadius: '14px', borderLeft: '4px solid #e4e4e7' }}>
                <div className="mono-label text-muted mb-sm" style={{ fontSize: '0.75rem' }}>STAFF HOURS SAVED / YR</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white', marginBottom: '0.25rem' }}>{(adminHours / 1000).toFixed(1)}k</div>
                <div className="body-sm text-secondary">Routine tasks automated</div>
              </div>
              
              <div className="card-elevated" style={{ padding: '1.75rem', borderRadius: '14px', borderLeft: '4px solid var(--status-pass)' }}>
                <div className="mono-label text-muted mb-sm" style={{ fontSize: '0.75rem' }}>VISA COMPLIANCE CONFIDENCE</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--status-pass)', marginBottom: '0.25rem' }}>100%</div>
                <div className="body-sm text-secondary">Peace of mind for your team</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* SECTION 8: ENTERPRISE TRUST & CTA (LIGHT STONE BG) */}
      <EnterpriseCTASection 
        variant="light"
        title="Bring modern, trusted AI to your university this term."
        description="Join forward-thinking universities supporting students 24/7 and saving staff hours every week. Book a personalized 20-minute walkthrough."
      />

    </div>
  );
}
