import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, ShieldCheck, CheckCircle2, AlertTriangle, Clock, 
  ArrowRight, ExternalLink, Bot, Zap, Layers, Search, 
  Users, Database, Calendar, Building, GraduationCap, 
  FileText, Lock, GitCommit, Check, Cpu, Network, Globe, MessageSquare,
  Server, Shield, MessageCircle, BarChart, HardDrive, Sparkles,
  Play, Pause, RotateCcw, ChevronRight
} from 'lucide-react';

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

  // State for Section 2: Cortex
  const [selectedAgentId, setSelectedAgentId] = useState('supervisor');
  const [agentSearch, setAgentSearch] = useState('');

  // State for Section 3: Cascade Simulation
  const [activeCascadeStep, setActiveCascadeStep] = useState(0);

  // State for Section 4: Architecture Pillars
  const [activePillarId, setActivePillarId] = useState('fabric');

  // State for Section 5: Dual OS
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
      triggerText: 'International offer confirmed · Heathrow flight landing Sept 28',
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

  const agents = [
    { id: 'supervisor', name: 'Nova Campus Coordinator', role: 'Directs requests and checks campus rules', desc: 'Connects student inquiries to the right department, checks institutional policies, and coordinates specialist AI assistants while keeping staff in control.', channels: ['Staff Portal', 'Student App', 'WhatsApp'], read: ['Student Records', 'Course Enrollment', 'Attendance Signals'], action: ['Prepares Staff Briefs', 'Alerts Personal Tutors'], owner: 'Registry & Student Support', icon: ShieldCheck },
    { id: 'tailoredResume', name: 'CV & Career Coach', role: 'Helps students tailor CVs for UK graduate jobs', desc: 'Helps students improve their CVs, match with visa-compliant UK vacancies, and prepare tailored applications for graduate schemes.', channels: ['Student App', 'Web Portal'], read: ['Student CV', 'Target Job Requirements'], action: ['Optimized CV Draft', 'ATS Scorecard & Feedback'], owner: 'Careers Service', icon: FileText },
    { id: 'accommodation', name: 'Student Housing Assistant', role: 'Matches students with verified student rooms', desc: 'Helps students find vetted student housing, secure lease agreements, and avoid rental scams before arrival.', channels: ['Student App', 'WhatsApp'], read: ['Campus Halls', 'Partner Housing Inventory'], action: ['Room Allocation', 'Secure Deposit Link'], owner: 'Accommodation Services', icon: Building },
    { id: 'moodle', name: 'Course & Learning Assistant', role: 'Connects course deadlines and lecture timetables', desc: 'Answers course questions, checks assignment deadlines, and syncs timetables directly from Moodle and Canvas.', channels: ['Student App', 'Web Portal'], read: ['Course Catalog', 'Assignment Timetable'], action: ['Timetable Sync', 'Deadline Reminder'], owner: 'Academic Departments', icon: Cpu },
    { id: 'interviewPrep', name: 'Mock Interview Coach', role: 'Realistic practice interviews with voice feedback', desc: 'Gives students real-time mock interviews with personalized spoken feedback to build job-search confidence.', channels: ['Student App', 'Voice Assistant'], read: ['Job Description', 'Student Background'], action: ['Practice Question Sets', 'Spoken Feedback'], owner: 'Careers Service', icon: Bot },
    { id: 'jobMatch', name: 'Visa Work Cap Checker', role: 'Finds jobs while protecting the 20h/wk visa limit', desc: 'Helps international students discover campus and local jobs while making sure they never exceed their 20-hour weekly visa limit.', channels: ['Student App', 'Telegram'], read: ['Weekly Rota Log', 'Verified Campus Jobs'], action: ['Work Hour Check', 'Safe Application Pass'], owner: 'Visa & Compliance', icon: Users },
    { id: 'eventMatch', name: 'Campus Life & Events Curator', role: 'Connects students to clubs, events, and societies', desc: 'Recommends university workshops, society meetups, and campus events to help students build community and stay engaged.', channels: ['Student App', 'Telegram'], read: ['Student Interests', 'Union Events Calendar'], action: ['Calendar Invite', 'Mobile Event Pass'], owner: 'Student Union', icon: Calendar },
    { id: 'planYourDay', name: 'Daily Schedule Planner', role: 'Combines classes, study time, and campus routes', desc: 'Brings together lecture times, library study slots, and campus walking directions into one convenient daily view.', channels: ['Student App', 'Mobile Web'], read: ['Class Timetable', 'Campus Map'], action: ['Daily Schedule Digest', 'Walking Directions'], owner: 'Student Support', icon: Clock },
    { id: 'searchAgent', name: 'Live Visa & Policy Researcher', role: 'Instant answers on Home Office visa rules and policies', desc: 'Searches official UK Home Office guidelines and university policies in real time to give students and staff accurate, cited answers.', channels: ['Staff Console', 'Student App'], read: ['UKVI Guidelines', 'Campus Knowledge Base'], action: ['Clear Cited Answers'], owner: 'Immigration Advice', icon: Globe },
    { id: 'consultantCopilot', name: 'Admissions Assistant', role: 'Helps admissions teams review student applications faster', desc: 'Assists admissions staff by summarizing overseas credentials, checking visa readiness, and preparing CAS files for sign-off.', channels: ['Compass Console', 'Web'], read: ['Application Checklist', 'Equivalency Guidelines'], action: ['Student Summary Dossier', 'Staff Notification'], owner: 'International Admissions', icon: Database }
  ];

  const filteredAgents = agents.filter(a => a.name.toLowerCase().includes(agentSearch.toLowerCase()) || a.role.toLowerCase().includes(agentSearch.toLowerCase()));
  const selectedAgent = agents.find(a => a.id === selectedAgentId) || agents[0];

  const cascadeSteps = [
    { id: 0, title: 'Missed Class Flagged', time: '09:12:04', loc: 'Lecture Hall EB-02', status: 'FLAGGED', pillClass: 'pill-flagged', narrative: 'Maya Chen misses morning check-in for her CS-5100 seminar. The system notes this is her 3rd consecutive missed lecture.', ledger: '{"event": "attendance_miss", "student_name": "Maya Chen", "module": "CS-5100", "location": "EB-02", "timestamp": "09:12:04"}' },
    { id: 1, title: 'Course Activity Checked', time: '09:12:05', loc: 'Learning Portal (Moodle)', status: 'CHECKED', pillClass: 'pill-active', narrative: 'The system checks the online course portal and sees Maya has had zero login activity on coursework materials for over 4 days.', ledger: '{"source": "moodle_lms", "query": "student_activity", "inactivity_hours": 114, "coursework_status": "due_soon"}' },
    { id: 2, title: 'Support Need Identified', time: '09:12:07', loc: 'Nova Campus Coordinator', status: 'IDENTIFIED', pillClass: 'pill-active', narrative: 'The AI reviews her recent schedule, noting she worked late barista shifts over the weekend. It identifies potential burnout before she falls further behind.', ledger: '{"action": "welfare_risk_check", "reason": "attendance_drop_and_workload", "suggested_action": "tutor_check_in"}' },
    { id: 3, title: 'Staff Review on Compass', time: '09:12:08', loc: 'Staff Portal (Compass)', status: 'WAITING REVIEW', pillClass: 'pill-held', narrative: 'Staff always stay in control. Rather than sending an unapproved notice, the system prepares a friendly check-in draft and makeup lab suggestion for Senior Tutor Dr. Jenkins.', ledger: '{"staff_review_required": true, "assigned_to": "Dr. Jenkins", "suggested_channel": "WhatsApp", "state": "awaiting_approval"}' },
    { id: 4, title: 'Support Sent & Saved', time: '09:14:22', loc: 'Senior Tutor & Student Records', status: 'RESOLVED', pillClass: 'pill-approved', narrative: 'Dr. Jenkins reviews the brief on Compass and clicks approve. Maya receives a supportive message on WhatsApp, and university records are updated automatically.', ledger: '{"approved_by": "Dr. Jenkins", "action_taken": "whatsapp_welfare_sent", "records_updated": true, "timestamp": "09:14:22"}' }
  ];

  const architecturePillars = [
    { id: 'fabric', num: '01', name: 'Connect', desc: 'Plugs directly into your existing SIS, LMS, and campus databases with zero complex migrations or downtime.', tech: ['Works with SITS:Vision & Banner', 'Syncs with Moodle & Canvas', 'Real-time event updates', 'Zero database migrations'], activeColor: '#ff6b00', metrics: { coverage: 98, latency: 12, uptime: 99.99 } },
    { id: 'graph', num: '02', name: 'Understand', desc: 'Brings student records, timetables, and housing into one unified profile so staff don’t have to jump across multiple tools.', tech: ['Unified student profile', 'Secure cloud storage', 'Instant search across records', 'Privacy-first permissions'], activeColor: '#3b82f6', metrics: { coverage: 100, latency: 18, uptime: 99.95 } },
    { id: 'nova', num: '03', name: 'Assist', desc: '30 specialized AI assistants work 24/7 to answer student questions, spot drop-out risks early, and prepare routine tasks.', tech: ['30 Focused campus assistants', '24/7 Student chat & guidance', 'Real-time mock interview voice', 'Early alert indicators'], activeColor: '#8b5cf6', metrics: { coverage: 94, latency: 180, uptime: 99.99 } },
    { id: 'arbiter', num: '04', name: 'Control & Govern', desc: 'A clear staff dashboard where your team reviews, edits, and approves all important actions. Staff always stay in control.', tech: ['Staff review portal (Compass)', 'One-click approvals', 'Complete audit trail', 'Strict UK GDPR & FERPA compliance'], activeColor: '#10b981', metrics: { coverage: 100, latency: 5, uptime: 100 } },
  ];

  const activePillar = architecturePillars.find(p => p.id === activePillarId) || architecturePillars[0];

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
              <div className="mono-label" style={{ color: 'var(--wl-accent)', marginBottom: '1rem' }}>AI PLATFORM FOR HIGHER EDUCATION</div>
              <h1 className="headline-xl" style={{ marginBottom: '1.5rem', lineHeight: 1.1 }}>One AI platform for your entire campus.</h1>
              <p className="body-lg text-secondary" style={{ marginBottom: '1.5rem', maxWidth: '540px' }}>
                WorldLynk connects your existing university systems to automate student support, simplify attendance, protect visa compliance, and save staff thousands of hours.
              </p>
              <div className="hero-keywords-container">
                {[
                  { label: 'Admissions', icon: GraduationCap },
                  { label: 'Attendance', icon: Clock },
                  { label: 'Student Support', icon: Users },
                  { label: 'Campus Housing', icon: Building },
                  { label: 'Visa & Careers', icon: Zap },
                ].map(({ label, icon: Icon }) => (
                  <span key={label} className="hero-keyword-pill">
                    <Icon size={12} className="hero-keyword-icon" />
                    <span>{label}</span>
                  </span>
                ))}
              </div>
              <div className="flex gap-md" style={{ flexWrap: 'wrap', alignItems: 'center' }}>
                <Link to="/demo" className="btn-primary" style={{ padding: '0.9rem 1.8rem', fontSize: '1rem' }}>Book a Live Demo</Link>
                <a href={COMPASS_BACKEND_URL} target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '0.9rem 1.5rem', fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(255, 107, 0, 0.35)', background: 'rgba(255, 107, 0, 0.08)' }}>
                  <span style={{ color: '#ff8833', fontWeight: 600 }}>Staff Portal</span> <ExternalLink size={15} color="#ff8833" />
                </a>
                <a href={STUDENT_PLATFORM_URL} target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '0.9rem 1.5rem', fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(56, 189, 248, 0.35)', background: 'rgba(56, 189, 248, 0.08)' }}>
                  <span style={{ color: '#38bdf8', fontWeight: 600 }}>Student App</span> <ExternalLink size={15} color="#38bdf8" />
                </a>
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
                    <span className="mono-sm" style={{ color: '#71717a', fontSize: '0.66rem', marginLeft: '0.4rem', letterSpacing: '0.04em' }}>
                      CAMPUS_AI_IN_ACTION // LIVE_PREVIEW
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
                        {actionsResolvedCount.toLocaleString()} ACTIONS RESOLVED TODAY
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
          
          {/* Telemetry bar */}
          <div style={{ marginTop: '4rem', padding: '1rem', borderTop: '1px solid #2a2a35', borderBottom: '1px solid #2a2a35', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <div className="mono-sm text-muted">CAMPUS AUTOMATION: 99.4%</div>
            <div className="mono-sm text-muted">STUDENTS SUPPORTED: 15,000+</div>
            <div className="mono-sm text-muted">SPECIALIST ASSISTANTS: 30 ACTIVE</div>
            <div className="mono-sm text-muted">VISA COMPLIANCE: 100% AUDIT READY</div>
          </div>
        </div>
      </section>

      {/* SECTION 2: NOVA AI MULTI-AGENT ENGINE (DARK) */}
      <section className="section" style={{ borderTop: '1px solid #1a1a24' }}>
        <div className="main-container">
          <div className="section-header-left mb-xl">
            <div className="mono-label" style={{ color: 'var(--wl-accent)' }}>SPECIALIST AI ASSISTANTS · 30 FOCUSED AGENTS</div>
            <h2 className="headline-lg">30 focused AI assistants for every team on campus.</h2>
            <p className="body-md text-secondary" style={{ maxWidth: '780px', marginTop: '8px' }}>
              Instead of one generic chatbot, WorldLynk gives your university 30 specialized AI assistants trained for admissions, student welfare, attendance, and careers — always working inside the tools you already use.
            </p>
          </div>
          
          <div className="responsive-grid-cortex">
            {/* Left Sidebar: Agent List */}
            <div className="flex flex-col gap-md">
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <div style={{ position: 'relative' }}>
                  <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#6b7280' }} />
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Search assistants by name or department..." 
                    value={agentSearch}
                    onChange={(e) => setAgentSearch(e.target.value)}
                    style={{ paddingLeft: '2.5rem', width: '100%', backgroundColor: '#131318', border: '1px solid #2a2a35', color: 'white', borderRadius: '4px', padding: '0.75rem 0.75rem 0.75rem 2.5rem' }}
                  />
                </div>
              </div>
              <div style={{ maxHeight: '500px', overflowY: 'auto', paddingRight: '0.5rem' }} className="flex flex-col gap-sm">
                {filteredAgents.map(agent => (
                  <div 
                    key={agent.id} 
                    className={`card ${selectedAgentId === agent.id ? 'card-selected' : 'card-hover'}`}
                    onClick={() => setSelectedAgentId(agent.id)}
                    style={{ 
                      padding: '1rem', 
                      cursor: 'pointer', 
                      backgroundColor: selectedAgentId === agent.id ? '#1a1a24' : '#131318',
                      border: selectedAgentId === agent.id ? '1px solid var(--wl-accent)' : '1px solid #2a2a35',
                      borderRadius: '8px'
                    }}
                  >
                    <div className="flex flex-between alignItems-center">
                      <div className="flex gap-md alignItems-center">
                        <agent.icon size={20} style={{ color: selectedAgentId === agent.id ? 'var(--wl-accent)' : '#a1a1aa' }} />
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '1rem' }}>{agent.name}</div>
                          <div className="mono-sm text-muted" style={{ fontSize: '0.75rem' }}>{agent.role}</div>
                        </div>
                      </div>
                      <ArrowRight size={16} style={{ color: selectedAgentId === agent.id ? 'var(--wl-accent)' : 'transparent' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel: Agent Detail */}
            {selectedAgent && (
              <div className="card-dark" style={{ padding: '2rem', borderRadius: '12px', border: '1px solid #2a2a35', backgroundColor: '#131318', display: 'flex', flexDirection: 'col', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, padding: '2rem', opacity: 0.05 }}>
                  <selectedAgent.icon size={120} />
                </div>
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div className="flex gap-md alignItems-center mb-lg">
                    <div style={{ padding: '1rem', backgroundColor: '#1a1a24', borderRadius: '8px', border: '1px solid #2a2a35' }}>
                      <selectedAgent.icon size={32} style={{ color: 'var(--wl-accent)' }} />
                    </div>
                    <div>
                      <h3 className="headline-md" style={{ marginBottom: '0.25rem' }}>{selectedAgent.name}</h3>
                      <div className="pill" style={{ backgroundColor: '#1a1a24', color: '#a1a1aa', border: '1px solid #2a2a35' }}>{selectedAgent.role}</div>
                    </div>
                  </div>
                  
                  <p className="body-lg text-secondary mb-xl">{selectedAgent.desc}</p>
                  
                  <div className="grid-2 gap-md mb-lg">
                    <div>
                      <div className="mono-label text-muted mb-sm" style={{ fontSize: '0.75rem' }}>DATA SOURCES</div>
                      <div className="flex gap-sm flex-wrap">
                        {selectedAgent.read.map((r, i) => <span key={i} className="badge badge-cyan">{r}</span>)}
                      </div>
                    </div>
                    <div>
                      <div className="mono-label text-muted mb-sm" style={{ fontSize: '0.75rem' }}>WHAT THIS ASSISTANT DOES</div>
                      <div className="flex gap-sm flex-wrap">
                        {selectedAgent.action.map((a, i) => <span key={i} className="badge badge-purple">{a}</span>)}
                      </div>
                    </div>
                  </div>

                  <div className="divider" style={{ borderTop: '1px solid #2a2a35', margin: '2rem 0' }}></div>

                  <div className="flex flex-between alignItems-center flex-wrap gap-md">
                    <div>
                      <div className="mono-label text-muted mb-sm" style={{ fontSize: '0.75rem' }}>WHERE IT WORKS</div>
                      <div className="flex gap-sm flex-wrap">
                        {selectedAgent.channels.map((c, i) => <span key={i} className="mono-sm" style={{ color: '#e4e4e7' }}>[{c}]</span>)}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div className="mono-label text-muted mb-sm" style={{ fontSize: '0.75rem' }}>CAMPUS TEAM</div>
                      <div className="flex gap-sm alignItems-center justify-end">
                        <ShieldCheck size={14} className="text-secondary" />
                        <span style={{ fontWeight: 500 }}>{selectedAgent.owner}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 3: INCIDENT CASCADE SIMULATION (DARK) */}
      <section className="section" style={{ backgroundColor: '#09090b', borderTop: '1px solid #1a1a24', borderBottom: '1px solid #1a1a24' }}>
        <div className="main-container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="mono-label" style={{ color: 'var(--wl-accent)' }}>HOW IT WORKS IN PRACTICE</div>
            <h2 className="headline-lg">How a student issue gets resolved in minutes.</h2>
            <p className="body-md text-secondary" style={{ maxWidth: '600px', margin: '1rem auto 0' }}>See how missed classes and a quiet week online turn into a friendly, helpful check-in — before a student falls behind.</p>
          </div>

          {/* Cascade Stepper */}
          <div className="flex gap-sm mb-lg" style={{ overflowX: 'auto', paddingBottom: '1rem' }}>
            {cascadeSteps.map((step, idx) => (
              <button 
                key={step.id}
                onClick={() => setActiveCascadeStep(idx)}
                style={{
                  flex: 1,
                  minWidth: '180px',
                  padding: '1rem',
                  backgroundColor: activeCascadeStep === idx ? '#1a1a24' : 'transparent',
                  border: activeCascadeStep === idx ? '1px solid var(--wl-accent)' : '1px solid #2a2a35',
                  borderRadius: '8px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  position: 'relative'
                }}
              >
                <div className="mono-sm text-muted mb-sm">STEP 0{idx + 1}</div>
                <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem', color: activeCascadeStep === idx ? 'white' : '#a1a1aa' }}>{step.title}</div>
                <div className={`pill ${step.pillClass}`} style={{ fontSize: '0.65rem' }}>{step.status}</div>
                
                {/* Connecting Line (except last) */}
                {idx < cascadeSteps.length - 1 && (
                  <div style={{ position: 'absolute', right: '-1rem', top: '50%', width: '1rem', height: '1px', backgroundColor: '#2a2a35' }} />
                )}
              </button>
            ))}
          </div>

          {/* Detail Panel */}
          <div className="grid-2 gap-lg" style={{ alignItems: 'stretch' }}>
            {/* Narrative Card */}
            <div className="card-dark" style={{ padding: '2rem', backgroundColor: '#131318', border: '1px solid #2a2a35', borderRadius: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="flex flex-between mb-md">
                  <div className="flex gap-sm alignItems-center">
                    <Clock size={16} className="text-secondary" />
                    <span className="mono-sm">{cascadeSteps[activeCascadeStep].time}</span>
                  </div>
                  <div className="flex gap-sm alignItems-center">
                    <Building size={16} className="text-secondary" />
                    <span className="mono-sm text-secondary">{cascadeSteps[activeCascadeStep].loc}</span>
                  </div>
                </div>
                <h3 className="headline-md mb-md">{cascadeSteps[activeCascadeStep].title}</h3>
                <p className="body-lg text-secondary" style={{ lineHeight: 1.6 }}>{cascadeSteps[activeCascadeStep].narrative}</p>
              </div>

              {/* Interactive Action for Step 4 (Index 3) */}
              {activeCascadeStep === 3 && (
                <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#1a1a24', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '8px' }}>
                  <div className="flex gap-sm alignItems-center mb-sm">
                    <AlertTriangle size={16} style={{ color: '#f59e0b' }} />
                    <span style={{ color: '#f59e0b', fontWeight: 600, fontSize: '0.9rem' }}>Staff Approval Required</span>
                  </div>
                  <button 
                    className="btn-primary" 
                    style={{ width: '100%', padding: '0.75rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
                    onClick={() => setActiveCascadeStep(4)}
                  >
                    Approve Support & Send Message <Check size={16} />
                  </button>
                </div>
              )}
            </div>

            {/* Activity Log */}
            <div className="mockup-window" style={{ backgroundColor: '#000', border: '1px solid #333' }}>
              <div className="mockup-chrome flex flex-between" style={{ padding: '0.5rem 1rem', borderBottom: '1px solid #333', backgroundColor: '#111' }}>
                <span className="mono-sm text-muted">system_activity_log</span>
              </div>
              <div className="mockup-body" style={{ padding: '1.5rem', fontFamily: 'monospace', fontSize: '0.85rem', color: '#a1a1aa', overflowX: 'auto', whiteSpace: 'pre-wrap' }}>
                <div style={{ color: '#4ade80', marginBottom: '1rem' }}>$ live_events --student "Maya Chen"</div>
                <div style={{ color: '#e4e4e7' }}>
                  {JSON.stringify(JSON.parse(cascadeSteps[activeCascadeStep].ledger), null, 2)}
                </div>
                <div className="animate-pulse" style={{ marginTop: '1rem', color: 'var(--wl-accent)' }}>_</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ARCHITECTURE PILLARS (STONE/LIGHT) */}
      <section className="section section-stone" style={{ backgroundColor: 'var(--wl-light)', color: '#0c0c0f' }}>
        <div className="main-container">
          <div className="section-header-left mb-xl">
            <div className="mono-label" style={{ color: 'var(--wl-accent)' }}>HOW THE PLATFORM WORKS</div>
            <h2 className="headline-lg" style={{ color: '#0c0c0f' }}>Four simple layers built for higher education.</h2>
          </div>

          {/* Pipeline layout */}
          <div className="pipeline grid-4 gap-md mb-xl">
            {architecturePillars.map(pillar => (
              <div 
                key={pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
                className={`pipeline-step card-stone ${activePillarId === pillar.id ? 'active' : ''}`}
                style={{ 
                  padding: '1.5rem', 
                  backgroundColor: activePillarId === pillar.id ? 'white' : 'transparent',
                  border: activePillarId === pillar.id ? `2px solid ${pillar.activeColor}` : '1px solid #d4d4d8',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: activePillarId === pillar.id ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
                }}
              >
                <div className="mono-sm mb-sm" style={{ color: activePillarId === pillar.id ? pillar.activeColor : '#71717a', fontWeight: 600 }}>LAYER {pillar.num}</div>
                <h3 className="headline-md" style={{ color: '#0c0c0f', marginBottom: '0.5rem' }}>{pillar.name}</h3>
                <p className="body-sm" style={{ color: '#52525b', marginBottom: '1rem' }}>{pillar.desc}</p>
                <div className="flex flex-col gap-xs">
                  {pillar.tech.map((t, i) => (
                    <div key={i} className="flex gap-sm alignItems-center">
                      <Check size={12} style={{ color: activePillarId === pillar.id ? pillar.activeColor : '#a1a1aa' }} />
                      <span className="mono-sm" style={{ fontSize: '0.7rem', color: '#3f3f46' }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Detail Panel */}
          {activePillar && (
            <div className="card-stone" style={{ backgroundColor: 'white', padding: '2.5rem', borderRadius: '12px', border: '1px solid #e4e4e7', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)' }}>
              <div className="grid-2 gap-lg" style={{ alignItems: 'center' }}>
                <div>
                  <h3 className="headline-lg mb-md" style={{ color: '#0c0c0f' }}>{activePillar.name} Layer</h3>
                  <p className="body-lg mb-lg" style={{ color: '#52525b' }}>How the {activePillar.name} layer connects with your existing university systems to deliver trusted, reliable outcomes.</p>
                  
                  <div className="flex flex-col gap-md">
                    <div>
                      <div className="flex flex-between mb-xs">
                        <span className="mono-sm" style={{ fontWeight: 600 }}>Campus System Coverage</span>
                        <span className="mono-sm">{activePillar.metrics.coverage}%</span>
                      </div>
                      <div className="comp-bar-track" style={{ height: '8px', backgroundColor: '#e4e4e7', borderRadius: '4px', overflow: 'hidden' }}>
                        <div className="comp-bar-fill" style={{ height: '100%', width: `${activePillar.metrics.coverage}%`, backgroundColor: activePillar.activeColor, transition: 'width 0.5s ease' }} />
                      </div>
                    </div>
                    
                    <div className="grid-2 gap-md mt-md">
                      <div style={{ padding: '1rem', backgroundColor: '#f4f4f5', borderRadius: '8px' }}>
                        <div className="mono-label text-muted mb-xs" style={{ fontSize: '0.7rem' }}>RESPONSE SPEED</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0c0c0f' }}>{activePillar.metrics.latency}ms</div>
                      </div>
                      <div style={{ padding: '1rem', backgroundColor: '#f4f4f5', borderRadius: '8px' }}>
                        <div className="mono-label text-muted mb-xs" style={{ fontSize: '0.7rem' }}>SYSTEM UPTIME</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0c0c0f' }}>{activePillar.metrics.uptime}%</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem', backgroundColor: '#f4f4f5', borderRadius: '12px', minHeight: '300px' }}>
                   {activePillar.id === 'fabric' && <Network size={120} style={{ color: activePillar.activeColor, opacity: 0.8 }} />}
                   {activePillar.id === 'graph' && <Database size={120} style={{ color: activePillar.activeColor, opacity: 0.8 }} />}
                   {activePillar.id === 'nova' && <Bot size={120} style={{ color: activePillar.activeColor, opacity: 0.8 }} />}
                   {activePillar.id === 'arbiter' && <Shield size={120} style={{ color: activePillar.activeColor, opacity: 0.8 }} />}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

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
              <div className="grid-3 gap-md">
                <div className="card-dark" style={{ padding: '1.5rem', backgroundColor: '#131318', border: '1px solid #2a2a35', borderRadius: '8px' }}>
                  <Clock size={24} style={{ color: 'var(--wl-accent)', marginBottom: '1rem' }} />
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Daily Schedule</h4>
                  <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Classes, deadlines, and campus events combined into one clear timeline.</p>
                </div>
                <div className="card-dark" style={{ padding: '1.5rem', backgroundColor: '#131318', border: '1px solid #2a2a35', borderRadius: '8px' }}>
                  <MessageCircle size={24} style={{ color: 'var(--wl-accent)', marginBottom: '1rem' }} />
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>24/7 AI Support</h4>
                  <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Instant answers to student questions, grounded directly in your university policies.</p>
                </div>
                <div className="card-dark" style={{ padding: '1.5rem', backgroundColor: '#131318', border: '1px solid #2a2a35', borderRadius: '8px' }}>
                  <Building size={24} style={{ color: 'var(--wl-accent)', marginBottom: '1rem' }} />
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Student Housing</h4>
                  <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Find verified accommodation, secure tenancy agreements, and log maintenance.</p>
                </div>
                <div className="card-dark" style={{ padding: '1.5rem', backgroundColor: '#131318', border: '1px solid #2a2a35', borderRadius: '8px' }}>
                  <Users size={24} style={{ color: 'var(--wl-accent)', marginBottom: '1rem' }} />
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Career &amp; Jobs</h4>
                  <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Discover part-time work that strictly respects student visa work limits.</p>
                </div>
                <div className="card-dark" style={{ padding: '1.5rem', backgroundColor: '#131318', border: '1px solid #2a2a35', borderRadius: '8px' }}>
                  <Activity size={24} style={{ color: 'var(--wl-accent)', marginBottom: '1rem' }} />
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Quick Attendance</h4>
                  <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Fast, 1-tap class check-in using their phone. No queues or lost paper slips.</p>
                </div>
                <div className="card-dark" style={{ padding: '1.5rem', backgroundColor: '#131318', border: '1px solid #2a2a35', borderRadius: '8px' }}>
                  <Globe size={24} style={{ color: 'var(--wl-accent)', marginBottom: '1rem' }} />
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Pre-Arrival Guide</h4>
                  <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Step-by-step visa prep and arrival checklists for international students.</p>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                <Link to="/student-os" className="btn-secondary" style={{ padding: '0.75rem 1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#131318', border: '1px solid #2a2a35', color: 'white' }}>
                  Explore Student App <ArrowRight size={16} />
                </Link>
                <a href={STUDENT_PLATFORM_URL} target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '0.75rem 1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  Launch Student App <ExternalLink size={16} />
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 6: INTEGRATION CONNECTOR MATRIX (STONE/LIGHT) */}
      <section className="section section-stone" style={{ backgroundColor: 'var(--wl-light)', color: '#0c0c0f' }}>
        <div className="main-container">
          <div className="section-header-left mb-xl">
            <div className="mono-label" style={{ color: 'var(--wl-accent)' }}>CONNECTS WITH YOUR TOOLS</div>
            <h2 className="headline-lg" style={{ color: '#0c0c0f' }}>Works with the systems you already use every day.</h2>
          </div>

          <div className="grid-auto gap-md" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
            {[
              { name: 'SITS:Vision', cat: 'Student Records', type: 'Two-way sync', icon: Database },
              { name: 'Ellucian Banner', cat: 'Student Records', type: 'Two-way sync', icon: Database },
              { name: 'Moodle LMS', cat: 'Course Portal', type: 'Automatic sync', icon: GraduationCap },
              { name: 'Canvas LMS', cat: 'Course Portal', type: 'Automatic sync', icon: GraduationCap },
              { name: 'Stripe Payments', cat: 'Housing Deposits', type: 'Secure Checkout', icon: HardDrive },
              { name: 'Algolia Search', cat: 'Campus Search', type: 'Instant search', icon: Search },
              { name: 'WhatsApp', cat: 'Student Messaging', type: 'Two-way chat', icon: MessageSquare },
              { name: 'Telegram', cat: 'Student Messaging', type: 'Two-way chat', icon: MessageSquare },
              { name: 'Campus Timetables', cat: 'Scheduling', type: 'Live sync', icon: Server },
              { name: 'Student Records (SIS)', cat: 'Identity', type: 'Real-time', icon: Zap },
            ].map((conn, i) => (
              <div key={i} className="card-stone" style={{ padding: '1.25rem', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e4e4e7', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', backgroundColor: '#f4f4f5', borderRadius: '6px' }}>
                  <conn.icon size={20} style={{ color: '#52525b' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: '0.95rem', color: '#0c0c0f' }}>{conn.name}</div>
                  <div className="mono-sm text-muted" style={{ fontSize: '0.7rem' }}>{conn.cat}</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.25rem' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--status-pass)' }} />
                  <span style={{ fontSize: '0.65rem', color: '#71717a' }}>{conn.type}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link to="/integrations" style={{ color: 'var(--wl-accent)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              View all 40+ integrations <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

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
