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
import IntegrationsMatrixSection from '../components/funnel/IntegrationsMatrixSection';

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
  // --- Hero Interactive Autonomous Execution Engine ---
  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [scenarioProgress, setScenarioProgress] = useState(0);
  const [actionsResolvedCount, setActionsResolvedCount] = useState(4184);

  // State for Section: Dual OS
  const [activeOS, setActiveOS] = useState('staff');

  // State for Section 7: ROI Simulator
  const [cohortSize, setCohortSize] = useState(15000);
  const [tuitionFee, setTuitionFee] = useState(25000);

  const heroScenarios = [
    {
      id: 'retention',
      tabLabel: 'Student Support',
      tabCode: '01',
      category: 'STUDENT WELL-BEING & PERSISTENCE',
      title: 'Early Support for Struggling Students',
      student: 'Maya Chen',
      studentMeta: 'MSc Data Science (ID: 0091-2847)',
      avatar: 'MC',
      avatarBg: '#ffedd5',
      avatarColor: '#c2410c',
      themeColor: '#10b981',
      themeBg: 'rgba(16, 185, 129, 0.12)',
      speedBadge: 'Resolved in 0.3s',
      triggerText: 'Missed 3 lectures in a row · Inactive on course portal for 5 days',
      actionTitle: 'Helpful Check-In Message Prepared',
      actionBadge: 'Ready for Review',
      actionIcon: MessageSquare,
      actionBody: '"Hi Maya, Dr. Jenkins from Student Welfare here. Noticed you couldn\'t make CS-5100 this morning. Everything okay? Let\'s grab 10 minutes this afternoon to catch up."',
      actionOutcome: 'Maya replied: "Yes please, could we do 2:30pm?"',
      verifications: [
        'Student records updated',
        'Visa 20h limit safe',
        'Tutor 1-on-1 scheduled'
      ]
    },
    {
      id: 'compliance',
      tabLabel: 'Visa Work Hours',
      tabCode: '02',
      category: 'STUDENT VISA COMPLIANCE',
      title: 'Automatic 20-Hour Work Cap Check',
      student: 'Tariq Hassan',
      studentMeta: 'BSc Finance & Economics (ID: 0074-9912)',
      avatar: 'TH',
      avatarBg: '#dbeafe',
      avatarColor: '#1d4ed8',
      themeColor: '#38bdf8',
      themeBg: 'rgba(56, 189, 248, 0.12)',
      speedBadge: 'Verified Instantly',
      triggerText: '18h campus shift logged · Checked against 20h/wk student visa limit',
      actionTitle: 'Work Verification Letter Issued',
      actionBadge: 'Approved & Active',
      actionIcon: ShieldCheck,
      actionBody: 'System automatically confirms student is within legal term-time work limits. Official verification letter generated and sent to student and campus employer.',
      actionOutcome: 'Shift rota approved · Employer packet sent',
      verifications: [
        'Within 20h legal limit',
        'Student file updated',
        '100% audit safe'
      ]
    },
    {
      id: 'housing',
      tabLabel: 'Student Housing',
      tabCode: '03',
      category: 'ACCOMMODATION & ARRIVALS',
      title: 'Guaranteed Housing & Digital Room Key',
      student: 'Elena Rostova',
      studentMeta: 'MSc Business Analytics · Arrival Sept 28',
      avatar: 'ER',
      avatarBg: '#f3e8ff',
      avatarColor: '#7e22ce',
      themeColor: '#a855f7',
      themeBg: 'rgba(168, 85, 247, 0.12)',
      speedBadge: 'Secured in 0.4s',
      triggerText: 'International offer confirmed · International flight arrival Sept 28',
      actionTitle: 'Verified Student Room Reserved',
      actionBadge: 'Booking Confirmed',
      actionIcon: Building,
      actionBody: 'Matched with verified student accommodation. Tenancy agreement and deposit confirmed digitally. Digital room access sent straight to student app.',
      actionOutcome: 'Elena confirmed room booking in Student App',
      verifications: [
        'Deposit secured',
        'Room reserved',
        'Airport welcome booked'
      ]
    },
    {
      id: 'logistics',
      tabLabel: 'Timetable Updates',
      tabCode: '04',
      category: 'CAMPUS OPERATIONS & TIMETABLES',
      title: 'Instant Room Re-Route When Issues Occur',
      student: '240 Students',
      studentMeta: 'CS-4010 Advanced Algorithms Cohort',
      avatar: '240',
      avatarBg: '#ffedd5',
      avatarColor: '#ea580c',
      themeColor: '#f97316',
      themeBg: 'rgba(249, 115, 22, 0.12)',
      speedBadge: 'Updated in 0.2s',
      triggerText: 'Lecture Hall EB-02 heating issue logged 45m before class',
      actionTitle: 'Moved Class to Great Hall West Wing',
      actionBadge: 'Sent 08:32 AM',
      actionIcon: Zap,
      actionBody: 'Instantly found an available nearby hall with enough seating. Mobile alert and campus walking map sent to all 240 enrolled students.',
      actionOutcome: '240 timetables updated · Zero missed class time',
      verifications: [
        'Timetables updated',
        'Lecturer confirmed',
        'Campus team notified'
      ]
    }
  ];

  // Auto-play timer effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setScenarioProgress(prev => {
        if (prev >= 100) {
          setActiveScenarioIdx(current => (current + 1) % 4);
          setActionsResolvedCount(count => count + 1);
          return 0;
        }
        return prev + 1.25; // ~4 second cycle
      });
    }, 50);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const activeScenario = heroScenarios[activeScenarioIdx];

  // --- Data structures ---


  // Derived ROI calculations
  const savedStudents = Math.round(cohortSize * (0.082 - 0.024));
  const recoveredRevenue = savedStudents * tuitionFee;
  const adminHours = Math.round(cohortSize * 3.4);

  return (
    <div style={{ backgroundColor: 'var(--wl-dark)', color: 'white', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* SECTION 1: HERO COMMAND CENTER (DARK) */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden', paddingTop: '120px' }}>
        <GridOverlay variant="dark" />
        <div className="main-container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="responsive-grid-split-equal" style={{ alignItems: 'center' }}>
            {/* Left Content */}
            <div>
              <div className="mono-label" style={{ color: 'var(--wl-accent)', marginBottom: '1rem' }}>HIGHER EDUCATION OPERATING PLATFORM</div>
              <h1 className="headline-xl" style={{ marginBottom: '1.5rem', lineHeight: 1.1 }}>One connected platform for your entire campus.</h1>
              <p className="body-lg text-secondary" style={{ marginBottom: '1.5rem', maxWidth: '580px', lineHeight: 1.6 }}>
                Support every student from first inquiry to graduation day. Free your staff from repetitive paperwork, ensure international students are safe and settled, and give university leadership complete confidence.
              </p>
              <div className="hero-keywords-container">
                {[
                  { label: 'Student Inquiries & Offers', icon: Search },
                  { label: 'Verified Campus Housing', icon: Building },
                  { label: 'Daily Timetables & Classes', icon: Clock },
                  { label: 'Friendly Well-being Checks', icon: Users },
                  { label: 'Visa Work-Hour Peace of Mind', icon: ShieldCheck },
                  { label: 'Careers & Graduate Jobs', icon: GraduationCap },
                ].map(({ label, icon: Icon }) => (
                  <span key={label} className="hero-keyword-pill">
                    <Icon size={12} className="hero-keyword-icon" />
                    <span>{label}</span>
                  </span>
                ))}
              </div>
              <div className="flex gap-md" style={{ flexWrap: 'wrap', alignItems: 'center' }}>
                <Link to="/demo" className="btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
                  Book a Live Demo
                </Link>
                <Link 
                  to="/journey" 
                  className="btn-secondary" 
                  style={{ 
                    padding: '0.9rem 1.6rem', 
                    fontSize: '0.95rem', 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.5rem', 
                    border: '1px solid rgba(255, 255, 255, 0.15)', 
                    background: 'rgba(255, 255, 255, 0.04)',
                    color: '#ffffff'
                  }}
                >
                  <span>Explore Student Journey</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#a1a1aa', fontSize: '0.75rem' }}>
                  <ShieldCheck size={14} style={{ color: '#10b981' }} />
                  <span>SOC-2 Type II</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#a1a1aa', fontSize: '0.75rem' }}>
                  <Lock size={14} style={{ color: '#38bdf8' }} />
                  <span>UK &amp; EU GDPR Ready</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#a1a1aa', fontSize: '0.75rem' }}>
                  <CheckCircle2 size={14} style={{ color: '#ff6b00' }} />
                  <span>Zero Database Migrations</span>
                </div>
              </div>
            </div>
            
            {/* Right Hero Visual — Interactive Animated Autonomous Campus Execution Engine */}
            <div style={{ position: 'relative' }}>
              {/* Dynamic Ambient Backlight Glow that adapts to the active scenario theme color */}
              <div 
                style={{ 
                  position: 'absolute', 
                  top: '-40px', 
                  right: '-30px', 
                  width: '450px', 
                  height: '450px', 
                  background: `radial-gradient(circle, ${activeScenario.themeColor}28 0%, rgba(248, 245, 238, 0.04) 50%, transparent 70%)`, 
                  filter: 'blur(70px)', 
                  pointerEvents: 'none',
                  zIndex: 0,
                  transition: 'background 0.8s ease'
                }} 
              />

              {/* Main Window Casing with FIXED Height (never expands or jitters) */}
              <div 
                style={{ 
                  position: 'relative', 
                  zIndex: 1, 
                  backgroundColor: '#12131a', 
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderTop: '1px solid rgba(255, 255, 255, 0.25)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 25px 65px -12px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(255, 255, 255, 0.05), 0 0 50px -10px rgba(0, 0, 0, 0.5)',
                  fontFamily: 'var(--wl-font-sans)',
                  height: '465px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* 1. Window Chrome / Titlebar (Dark Titanium Chassis) */}
                <div 
                  style={{ 
                    height: '42px',
                    padding: '0 1rem', 
                    backgroundColor: '#161720', 
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    flexShrink: 0
                  }}
                >
                  {/* Traffic Light Buttons */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ff5f56' }} />
                    <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
                    <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#27c93f' }} />
                    <span className="mono-sm" style={{ color: '#a1a1aa', fontSize: '0.66rem', marginLeft: '0.4rem', letterSpacing: '0.04em', fontWeight: 600 }}>
                      LIVE CAMPUS EXPERIENCE
                    </span>
                  </div>

                  {/* Play / Pause Toggle Control & Live Metric */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button
                      type="button"
                      onClick={() => setIsAutoPlaying(prev => !prev)}
                      title={isAutoPlaying ? "Pause Animation" : "Resume Auto-Play"}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        backgroundColor: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '6px',
                        color: '#d4d4d8',
                        fontSize: '0.65rem',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      {isAutoPlaying ? <Pause size={10} color="#10b981" /> : <Play size={10} color="#ff8833" />}
                      <span>{isAutoPlaying ? 'Auto-Play' : 'Paused'}</span>
                    </button>

                    <div 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '6px', 
                        backgroundColor: 'rgba(16, 185, 129, 0.12)', 
                        border: '1px solid rgba(16, 185, 129, 0.25)', 
                        padding: '0.2rem 0.6rem', 
                        borderRadius: '12px' 
                      }}
                    >
                      <span className="hero-pulse-dot" style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block', boxShadow: '0 0 6px #10b981' }} />
                      <span style={{ color: '#10b981', fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.02em' }}>
                        {actionsResolvedCount.toLocaleString()} STUDENT REQUESTS RESOLVED TODAY
                      </span>
                    </div>
                  </div>
                </div>

                {/* 2. THE INNER SCREEN: Clean, Uncluttered Warm Cream Canvas */}
                <div 
                  style={{ 
                    backgroundColor: '#f8f5ee', 
                    color: '#18181b', 
                    padding: '0.85rem 1rem', 
                    flex: 1,
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-between',
                    overflow: 'hidden'
                  }}
                >
                  
                  {/* Scenario Interactive Navigation Tabs */}
                  <div 
                    style={{ 
                      display: 'grid', 
                      gridTemplateColumns: 'repeat(4, 1fr)', 
                      gap: '6px',
                      flexShrink: 0
                    }}
                  >
                    {heroScenarios.map((sc, idx) => {
                      const isActive = activeScenarioIdx === idx;
                      return (
                        <div
                          key={sc.id}
                          onClick={() => {
                            setActiveScenarioIdx(idx);
                            setScenarioProgress(0);
                          }}
                          style={{
                            position: 'relative',
                            padding: '0.35rem 0.5rem',
                            borderRadius: '6px',
                            backgroundColor: isActive ? '#ffffff' : 'rgba(0, 0, 0, 0.03)',
                            border: isActive ? '1px solid #dcd3c4' : '1px solid transparent',
                            boxShadow: isActive ? '0 2px 5px rgba(0,0,0,0.04)' : 'none',
                            cursor: 'pointer',
                            overflow: 'hidden',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
                            <span style={{ fontSize: '0.62rem', fontWeight: 800, color: isActive ? sc.themeColor : '#a1a1aa' }}>
                              {sc.tabCode}
                            </span>
                            {isActive && (
                              <span style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: sc.themeColor }} />
                            )}
                          </div>
                          <div style={{ fontSize: '0.68rem', fontWeight: isActive ? 700 : 500, color: isActive ? '#18181b' : '#71717a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {sc.tabLabel}
                          </div>

                          {/* Animated Progress Bar under active tab */}
                          {isActive && (
                            <div 
                              style={{ 
                                position: 'absolute', 
                                bottom: 0, 
                                left: 0, 
                                height: '2.5px', 
                                backgroundColor: sc.themeColor, 
                                width: `${scenarioProgress}%`,
                                transition: 'width 0.05s linear'
                              }} 
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* ACTIVE SCENARIO STAGE: Single, Clean, Elevated Card */}
                  <div 
                    key={activeScenario.id}
                    className="hero-scenario-transition"
                    style={{ 
                      backgroundColor: '#ffffff', 
                      borderRadius: '10px', 
                      border: '1px solid #e5dfd3', 
                      padding: '0.9rem',
                      boxShadow: '0 4px 14px rgba(28, 25, 23, 0.05)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      flex: 1,
                      margin: '0.55rem 0',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Header: Student Profile + Resolution Badge */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div 
                          style={{ 
                            width: 32, 
                            height: 32, 
                            borderRadius: '50%', 
                            backgroundColor: activeScenario.avatarBg, 
                            color: activeScenario.avatarColor, 
                            fontWeight: 800, 
                            fontSize: '0.74rem', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            border: `1px solid ${activeScenario.avatarColor}33`,
                            flexShrink: 0
                          }}
                        >
                          {activeScenario.avatar}
                        </div>
                        <div>
                          <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#18181b' }}>
                            {activeScenario.student}
                          </div>
                          <div style={{ fontSize: '0.68rem', color: '#71717a' }}>
                            {activeScenario.studentMeta}
                          </div>
                        </div>
                      </div>

                      {/* Speed Badge */}
                      <div 
                        style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '5px', 
                          backgroundColor: activeScenario.themeBg, 
                          border: `1px solid ${activeScenario.themeColor}44`, 
                          padding: '0.2rem 0.55rem', 
                          borderRadius: '6px',
                          color: activeScenario.themeColor,
                          fontSize: '0.68rem',
                          fontWeight: 700
                        }}
                      >
                        <Zap size={11} />
                        <span>{activeScenario.speedBadge}</span>
                      </div>
                    </div>

                    {/* Clean Incident Signal Banner */}
                    <div 
                      style={{ 
                        backgroundColor: '#faf8f5', 
                        border: '1px solid #e8e2d8', 
                        borderRadius: '6px', 
                        padding: '0.45rem 0.65rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.71rem',
                        color: '#44403c',
                        flexShrink: 0
                      }}
                    >
                      <AlertTriangle size={13} style={{ color: activeScenario.themeColor, flexShrink: 0 }} />
                      <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        <strong>Trigger:</strong> {activeScenario.triggerText}
                      </div>
                    </div>

                    {/* Clean Action Display (Prominent & Readable) */}
                    <div 
                      style={{ 
                        backgroundColor: '#fbfaf8', 
                        borderRadius: '8px', 
                        border: '1px solid #e7e2d7', 
                        padding: '0.65rem 0.8rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '5px'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#18181b', display: 'flex', alignItems: 'center', gap: '5px' }}>
                          {React.createElement(activeScenario.actionIcon, { 
                            size: 13, 
                            style: { color: activeScenario.themeColor } 
                          })}
                          {activeScenario.actionTitle}
                        </span>
                        <span 
                          style={{ 
                            fontSize: '0.62rem', 
                            color: activeScenario.themeColor, 
                            backgroundColor: activeScenario.themeBg,
                            padding: '0.1rem 0.4rem',
                            borderRadius: '4px',
                            fontWeight: 600 
                          }}
                        >
                          {activeScenario.actionBadge}
                        </span>
                      </div>

                      <div 
                        style={{ 
                          fontSize: '0.74rem', 
                          lineHeight: 1.4, 
                          color: '#27272a',
                          padding: '0.2rem 0'
                        }}
                      >
                        {activeScenario.actionBody}
                      </div>

                      <div style={{ fontSize: '0.68rem', color: '#15803d', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Check size={12} /> {activeScenario.actionOutcome}
                      </div>
                    </div>

                    {/* Single Clean Row of System Verifications */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                      {activeScenario.verifications.map((v, i) => (
                        <span 
                          key={i} 
                          style={{ 
                            fontSize: '0.64rem', 
                            color: '#166534', 
                            backgroundColor: '#f0fdf4', 
                            border: '1px solid #bbf7d0', 
                            padding: '0.2rem 0.5rem', 
                            borderRadius: '4px', 
                            fontWeight: 600,
                            whiteSpace: 'nowrap'
                          }}
                        >
                          ✓ {v}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Navigation & Live Execution Footer */}
                  <div 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between', 
                      paddingTop: '0.25rem', 
                      borderTop: '1px solid #e7e0d3',
                      fontSize: '0.66rem',
                      color: '#71717a',
                      flexShrink: 0
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Sparkles size={12} style={{ color: 'var(--wl-accent)' }} />
                      <span>WorldLynk AI: <strong>30 specialist assistants active</strong></span>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setActiveScenarioIdx((activeScenarioIdx + 1) % heroScenarios.length);
                        setScenarioProgress(0);
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        color: activeScenario.themeColor,
                        fontWeight: 700,
                        fontSize: '0.66rem',
                        cursor: 'pointer',
                        padding: '0.15rem 0.45rem',
                        borderRadius: '4px',
                        backgroundColor: '#ffffff',
                        border: '1px solid #e0d8cc',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
                      }}
                    >
                      <span>Next Scenario</span>
                      <ChevronRight size={11} />
                    </button>
                  </div>

                </div>

              </div>
            </div>
          </div>
          
          {/* Institutional Telemetry bar */}
          <div style={{ marginTop: '4rem', padding: '1rem', borderTop: '1px solid #2a2a35', borderBottom: '1px solid #2a2a35', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <div className="mono-sm text-muted">STUDENTS SUPPORTED: 15,000+</div>
            <div className="mono-sm text-muted">STUDENT SATISFACTION: 98%</div>
            <div className="mono-sm text-muted">CAMPUS CAPABILITIES: 30 SPECIALISTS</div>
            <div className="mono-sm text-muted">VISA COMPLIANCE: 100% AUDIT READY</div>
          </div>
        </div>
      </section>

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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
            
            {/* Card 1: University Leadership */}
            <div 
              style={{ 
                backgroundColor: '#13131a', 
                borderRadius: '16px', 
                border: '1px solid #232332', 
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease, border-color 0.2s ease'
              }}
            >
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img 
                  src="/images/oxford_campus.jpg" 
                  alt="University Leadership & Historic Campus" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #13131a 0%, transparent 60%)' }} />
                <span 
                  style={{ 
                    position: 'absolute', 
                    top: '1rem', 
                    left: '1rem', 
                    backgroundColor: 'rgba(255, 107, 0, 0.9)', 
                    color: '#ffffff', 
                    padding: '0.3rem 0.75rem', 
                    borderRadius: '20px', 
                    fontSize: '0.72rem', 
                    fontWeight: 700,
                    letterSpacing: '0.04em'
                  }}
                >
                  FOR UNIVERSITY LEADERSHIP
                </span>
              </div>
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem' }}>
                    Protect Student Retention &amp; Institutional Revenue
                  </h3>
                  <p style={{ color: '#a1a1aa', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Spot drop-out risks before students slip away. Retain cohorts to graduation and safeguard international tuition without painful software replacements or extra admin headcount.
                  </p>
                </div>
                <div style={{ padding: '0.85rem 1rem', borderRadius: '8px', backgroundColor: 'rgba(255, 107, 0, 0.08)', border: '1px solid rgba(255, 107, 0, 0.25)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Award size={16} style={{ color: '#ff8833', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.8rem', color: '#ffb27a', fontWeight: 600 }}>
                    £1.4M+ average protected tuition per 15k cohort
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Faculty, Academic Tutors & Student Services */}
            <div 
              style={{ 
                backgroundColor: '#13131a', 
                borderRadius: '16px', 
                border: '1px solid #232332', 
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease, border-color 0.2s ease'
              }}
            >
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img 
                  src="/images/student_support.png" 
                  alt="Academic Tutor and Student Support" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #13131a 0%, transparent 60%)' }} />
                <span 
                  style={{ 
                    position: 'absolute', 
                    top: '1rem', 
                    left: '1rem', 
                    backgroundColor: 'rgba(56, 189, 248, 0.9)', 
                    color: '#0a0a0f', 
                    padding: '0.3rem 0.75rem', 
                    borderRadius: '20px', 
                    fontSize: '0.72rem', 
                    fontWeight: 700,
                    letterSpacing: '0.04em'
                  }}
                >
                  FOR TUTORS &amp; STUDENT WELFARE
                </span>
              </div>
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem' }}>
                    Less Repetitive Paperwork, More Quality Mentorship
                  </h3>
                  <p style={{ color: '#a1a1aa', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Routine queries, attendance logs, and visa checklists are prepared automatically. Tutors receive thoughtful, ready-to-send welfare messages they can review and approve in seconds.
                  </p>
                </div>
                <div style={{ padding: '0.85rem 1rem', borderRadius: '8px', backgroundColor: 'rgba(56, 189, 248, 0.08)', border: '1px solid rgba(56, 189, 248, 0.25)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Clock size={16} style={{ color: '#38bdf8', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.8rem', color: '#7dd3fc', fontWeight: 600 }}>
                    3,400+ staff hours saved from admin every year
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3: Domestic & International Students */}
            <div 
              style={{ 
                backgroundColor: '#13131a', 
                borderRadius: '16px', 
                border: '1px solid #232332', 
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease, border-color 0.2s ease'
              }}
            >
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img 
                  src="/images/aspiring_student.jpg" 
                  alt="International Student on Campus" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #13131a 0%, transparent 60%)' }} />
                <span 
                  style={{ 
                    position: 'absolute', 
                    top: '1rem', 
                    left: '1rem', 
                    backgroundColor: 'rgba(16, 185, 129, 0.9)', 
                    color: '#ffffff', 
                    padding: '0.3rem 0.75rem', 
                    borderRadius: '20px', 
                    fontSize: '0.72rem', 
                    fontWeight: 700,
                    letterSpacing: '0.04em'
                  }}
                >
                  FOR STUDENTS &amp; FAMILIES
                </span>
              </div>
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem' }}>
                    A Warm, Confident Welcome From Day One
                  </h3>
                  <p style={{ color: '#a1a1aa', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    From course preparation and verified student accommodation to lecture halls and campus careers — students have a friendly guide in their pocket, available 24/7.
                  </p>
                </div>
                <div style={{ padding: '0.85rem 1rem', borderRadius: '8px', backgroundColor: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.25)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={16} style={{ color: '#10b981', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.8rem', color: '#6ee7b7', fontWeight: 600 }}>
                    Guaranteed housing &amp; 100% visa work-hour safety
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTINUOUS LIFECYCLE HORIZONS OVERVIEW */}
      <LifecycleOverviewSection />

      {/* AUTONOMOUS SPECIALIST AGENTS */}
      <SpecialistAgentsSection />

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

      {/* ENTERPRISE CONNECTORS INTEGRATION MATRIX */}
      <IntegrationsMatrixSection />

      {/* SECTION 7: ROI SIMULATOR (DARK) */}
      <section className="section" style={{ borderTop: '1px solid #1a1a24' }}>
        <div className="main-container">
          <div className="section-header-left mb-xl">
            <div className="mono-label" style={{ color: 'var(--wl-accent)' }}>MEASURABLE IMPACT</div>
            <h2 className="headline-lg">Calculate the impact on your university.</h2>
          </div>

          <div className="grid-2 gap-xl" style={{ alignItems: 'center' }}>
            {/* Sliders */}
            <div className="card-dark" style={{ padding: '2.5rem', backgroundColor: '#131318', borderRadius: '12px', border: '1px solid #2a2a35' }}>
              <div className="form-group" style={{ marginBottom: '2.5rem' }}>
                <div className="flex flex-between mb-sm">
                  <label className="form-label" style={{ fontWeight: 600 }}>Total Student Cohort</label>
                  <span className="mono-sm" style={{ color: 'var(--wl-accent)' }}>{cohortSize.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="1000" 
                  max="35000" 
                  step="500" 
                  value={cohortSize} 
                  onChange={(e) => setCohortSize(parseInt(e.target.value))}
                  style={{ width: '100%', accentColor: '#ff6b00' }}
                />
              </div>
              
              <div className="form-group">
                <div className="flex flex-between mb-sm">
                  <label className="form-label" style={{ fontWeight: 600 }}>Average Annual Tuition (£)</label>
                  <span className="mono-sm" style={{ color: 'var(--wl-accent)' }}>£{tuitionFee.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="16000" 
                  max="40000" 
                  step="500" 
                  value={tuitionFee} 
                  onChange={(e) => setTuitionFee(parseInt(e.target.value))}
                  style={{ width: '100%', accentColor: '#ff6b00' }}
                />
              </div>
              
              <p className="body-sm text-muted mt-lg" style={{ fontStyle: 'italic' }}>
                *Estimates based on pilot university outcomes reducing student dropout and automating routine administrative tickets.
              </p>
            </div>

            {/* Metrics */}
            <div className="grid-2 gap-md">
              <div className="card-dark" style={{ padding: '1.5rem', backgroundColor: '#1a1a24', borderRadius: '8px', border: '1px solid #2a2a35', borderLeft: '4px solid var(--wl-accent)' }}>
                <div className="mono-label text-muted mb-sm" style={{ fontSize: '0.75rem' }}>STUDENTS RETAINED / YR</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white', marginBottom: '0.25rem' }}>{savedStudents}</div>
                <div className="body-sm text-secondary">Students flagged &amp; supported</div>
              </div>
              
              <div className="card-dark" style={{ padding: '1.5rem', backgroundColor: '#1a1a24', borderRadius: '8px', border: '1px solid #2a2a35', borderLeft: '4px solid var(--status-pass)' }}>
                <div className="mono-label text-muted mb-sm" style={{ fontSize: '0.75rem' }}>TUITION PROTECTED / YR</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white', marginBottom: '0.25rem' }}>£{(recoveredRevenue / 1000000).toFixed(1)}M</div>
                <div className="body-sm text-secondary">Protected student tuition</div>
              </div>
              
              <div className="card-dark" style={{ padding: '1.5rem', backgroundColor: '#1a1a24', borderRadius: '8px', border: '1px solid #2a2a35', borderLeft: '4px solid #e4e4e7' }}>
                <div className="mono-label text-muted mb-sm" style={{ fontSize: '0.75rem' }}>STAFF HOURS SAVED / YR</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white', marginBottom: '0.25rem' }}>{(adminHours / 1000).toFixed(1)}k</div>
                <div className="body-sm text-secondary">Routine tasks automated</div>
              </div>
              
              <div className="card-dark" style={{ padding: '1.5rem', backgroundColor: '#1a1a24', borderRadius: '8px', border: '1px solid #2a2a35', borderLeft: '4px solid var(--status-pass)' }}>
                <div className="mono-label text-muted mb-sm" style={{ fontSize: '0.75rem' }}>VISA COMPLIANCE CONFIDENCE</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--status-pass)', marginBottom: '0.25rem' }}>100%</div>
                <div className="body-sm text-secondary">Peace of mind for your team</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: TRUST & CTA (DARK) */}
      <section className="section" style={{ backgroundColor: '#09090b', borderTop: '1px solid #1a1a24', paddingBottom: '8rem' }}>
        <div className="main-container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <div className="mono-label mb-md" style={{ color: 'var(--wl-accent)' }}>GET STARTED</div>
          <h2 className="headline-xl mb-lg" style={{ lineHeight: 1.1 }}>Bring modern, trusted AI to your university this term.</h2>
          <p className="body-lg text-secondary mb-xl" style={{ maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Join forward-thinking universities supporting students 24/7 and saving staff hours every week. Book a personalized 20-minute walkthrough.
          </p>
          
          <div className="flex gap-md justify-center mb-xl" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/demo" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Book a Live Demo</Link>
            <Link to="/trust" className="btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', backgroundColor: '#131318', border: '1px solid #2a2a35', color: 'white' }}>Explore Trust &amp; Security</Link>
          </div>
          
          {/* Trust Badges */}
          <div className="trust-row flex gap-lg justify-center" style={{ flexWrap: 'wrap', opacity: 0.7 }}>
            <div className="trust-item flex gap-sm alignItems-center">
              <ShieldCheck size={18} className="text-secondary" />
              <span className="mono-sm text-secondary">SOC-2 Compliant</span>
            </div>
            <div className="trust-item flex gap-sm alignItems-center">
              <Lock size={18} className="text-secondary" />
              <span className="mono-sm text-secondary">UK GDPR Compliant</span>
            </div>
            <div className="trust-item flex gap-sm alignItems-center">
              <FileText size={18} className="text-secondary" />
              <span className="mono-sm text-secondary">FERPA Ready</span>
            </div>
            <div className="trust-item flex gap-sm alignItems-center">
              <Zap size={18} className="text-secondary" />
              <span className="mono-sm text-secondary">Staff Always in Control</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
