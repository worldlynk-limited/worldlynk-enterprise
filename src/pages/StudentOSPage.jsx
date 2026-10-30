import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EnterpriseCTASection from '../components/EnterpriseCTASection';
import {
  Home,
  Calendar,
  Building2,
  Briefcase,
  Bot,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Send,
  ExternalLink,
  MessageSquare,
  Compass,
  Check,
  Battery,
  Wifi,
  MapPin,
  AlertTriangle,
  Download,
  Phone,
  FileText,
  UserCheck,
  Lock,
  ChevronRight,
  Layers,
  QrCode,
  Search,
  HelpCircle,
  Users,
  Smartphone,
  RefreshCw,
  Share2,
  CreditCard,
  BellRing
} from 'lucide-react';

const MILESTONE_STAGES = [
  {
    id: 'stage-1',
    num: '01',
    title: 'Pre-Departure & CAS Compliance',
    status: 'COMPLETE',
    tasks: [
      { id: 1, label: 'Valid International Passport with 6+ Months Validity', done: true, authority: 'HMPO Checked', tag: 'CRITICAL' },
      { id: 2, label: 'Unconditional University Offer & Electronic CAS Letter', done: true, authority: 'CAS: E2948102A', tag: 'ACADEMIC' },
      { id: 3, label: 'UKVI Tier-4 Student Visa Biometric Decision Letter', done: true, authority: 'UKVI SMS Synced', tag: 'LEGAL' },
      { id: 4, label: '28-Day Bank Statement Audit for Maintenance (£12,006+)', done: true, authority: 'Open Banking API', tag: 'FINANCE' }
    ]
  },
  {
    id: 'stage-2',
    num: '02',
    title: 'UK Border & Arrival Essentials',
    status: 'IN PROGRESS',
    tasks: [
      { id: 5, label: 'Tuberculosis (TB) Clearance Certificate (IOM Clinic)', done: true, authority: 'NHS Spine Cleared', tag: 'HEALTH' },
      { id: 6, label: 'Verified PBSA Ensuite Accommodation Voucher (Chapter King’s Cross)', done: true, authority: 'Stripe Escrow Verified', tag: 'HOUSING' },
      { id: 7, label: 'UK eSIM Card Activation & BRP Collection Letter (Staines Branch)', done: false, authority: 'Pickup Due Oct 2', tag: 'CRITICAL' },
      { id: 8, label: 'London Oyster / Contactless Student Travelcard 18+ Link', done: false, authority: 'TfL Portal Sync', tag: 'TRANSPORT' }
    ]
  },
  {
    id: 'stage-3',
    num: '03',
    title: 'Campus Induction & Academic Sync',
    status: 'UPCOMING',
    tasks: [
      { id: 9, label: 'NHS Local GP Surgery Registration (Englefield Green Health Centre)', done: false, authority: 'NHS Practice Form', tag: 'HEALTH' },
      { id: 10, label: 'Moodle LMS Two-Factor Authentication & Timetable Calendar Sync', done: false, authority: 'SITS Portal Link', tag: 'ACADEMIC' },
      { id: 11, label: 'Monzo / Revolut UK Student Current Account Biometric Verification', done: false, authority: 'FCA Regulated', tag: 'FINANCE' }
    ]
  },
  {
    id: 'stage-4',
    num: '04',
    title: 'Term-Time Work Permit & NI Setup',
    status: 'GOVERNED',
    tasks: [
      { id: 12, label: 'National Insurance (NI) Number Application to DWP', done: false, authority: 'DWP Portal', tag: 'LEGAL' },
      { id: 13, label: 'Right-to-Work Share Code Generated for Campus Barista Shift', done: false, authority: 'UKVI Verified', tag: 'COMPLIANCE' }
    ]
  }
];

const SCHEDULE_ITEMS = [
  { time: '09:00 - 11:00', title: 'CS-5100: Distributed Machine Learning Systems', loc: 'Lecture Hall EB-02 · Prof. R. Thorne', type: 'Lecture', status: 'verified', qrStatus: 'Checked-in 08:58' },
  { time: '11:30 - 13:00', title: 'Data Systems Lab: GPU Cluster Benchmarking', loc: 'Turing Computing Lab 4 · Dr. Jenkins', type: 'Lab', status: 'verified', qrStatus: 'Checked-in 11:28' },
  { time: '13:00 - 14:00', title: 'Academic Peer Mentoring & Lunch', loc: 'Student Central Commons', type: 'Break', status: 'scheduled', qrStatus: 'Optional' },
  { time: '14:30 - 18:30', title: 'Barista Shift (Costa Coffee Campus)', loc: 'Campus Union Retail Hub', type: 'Work', status: 'monitored', qrStatus: 'Logged: 4.0h towards UKVI cap' }
];

const HOUSING_LISTINGS = [
  { name: 'Chapter King’s Cross', type: 'Studio Ensuite', price: '£315/wk', dist: '12m Tube to Campus', verified: true, stripeStatus: 'Escrow Active', img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=400&q=80' },
  { name: 'Scape Bloomsbury', type: 'Standard Ensuite', price: '£295/wk', dist: '18m Walk to Campus', verified: true, stripeStatus: 'Available', img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=400&q=80' },
  { name: 'iQ Shoreditch Student Living', type: 'Premium Studio', price: '£340/wk', dist: '20m Overground', verified: true, stripeStatus: 'Available', img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=80' }
];

const VERIFIED_JOBS = [
  { title: 'Student Union Barista', employer: 'Costa Coffee Campus Hub', hours: '8-12 hrs/week', wage: '£13.15/hr (London Living)', status: 'Approved for Tier-4', tags: ['On-Campus', 'Flexible'] },
  { title: 'Peer Programming Tutor (CS)', employer: 'School of Computing', hours: '4-6 hrs/week', wage: '£16.50/hr', status: 'Approved for Tier-4', tags: ['Academic', 'Skill-Match'] },
  { title: 'Campus Library Technology Assistant', employer: 'University Library Services', hours: '6 hrs/week', wage: '£13.50/hr', status: 'Approved for Tier-4', tags: ['Quiet', 'Study-Friendly'] }
];

const DEFAULT_CHAT = [
  { sender: 'bot', text: 'Hello Maya! I am Nova, your Student OS copilot. Your weekly UKVI work allowance is currently at 16h / 20h. How can I help you today?' },
  { sender: 'user', text: 'Can I pick up an extra 6-hour barista shift on Sunday?' },
  { sender: 'bot', text: '⚠️ Caution Maya: You already have 16 hours scheduled this week at Costa Coffee. Adding a 6-hour shift would reach 22 hours, breaching your 20-hour UKVI Tier-4 term-time ceiling by 2 hours. This would trigger a compliance hold. I recommend searching for a 4-hour replacement shift instead.' }
];

export default function StudentOSPage() {
  const [stages, setStages] = useState(MILESTONE_STAGES);
  const [activeTab, setActiveTab] = useState('home'); // home, schedule, housing, work, reliv, chat
  const [chatMessages, setChatMessages] = useState(DEFAULT_CHAT);
  const [chatInput, setChatInput] = useState('');
  const [selectedStageId, setSelectedStageId] = useState('stage-2');
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [studentToast, setStudentToast] = useState(null);
  const [tokenCountdown, setTokenCountdown] = useState(28);

  // Live countdown for TOTP dynamic student QR pass
  useEffect(() => {
    const timer = setInterval(() => {
      setTokenCountdown((prev) => (prev <= 1 ? 30 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const showToast = (msg) => {
    setStudentToast(msg);
    setTimeout(() => setStudentToast(null), 3400);
  };

  const toggleTask = (stageId, taskId) => {
    setStages(prevStages =>
      prevStages.map(stage => {
        if (stage.id !== stageId) return stage;
        const updatedTasks = stage.tasks.map(t =>
          t.id === taskId ? { ...t, done: !t.done } : t
        );
        const allDone = updatedTasks.every(t => t.done);
        return {
          ...stage,
          tasks: updatedTasks,
          status: allDone ? 'COMPLETE' : 'IN PROGRESS'
        };
      })
    );
    showToast('Student onboarding ledger synchronized');
  };

  const totalTasks = stages.reduce((acc, s) => acc + s.tasks.length, 0);
  const doneTasks = stages.reduce((acc, s) => acc + s.tasks.filter(t => t.done).length, 0);
  const progressPercent = Math.round((doneTasks / totalTasks) * 100);

  const activeStage = stages.find(s => s.id === selectedStageId) || stages[0];

  const handleSendChat = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput.trim();
    const newChat = [...chatMessages, { sender: 'user', text: userText }];
    setChatMessages(newChat);
    setChatInput('');

    setTimeout(() => {
      let reply = "I understand. I am tracking your academic progress and UKVI status against campus databases. Dr. Jenkins will be notified if tutor approval is needed.";
      const lower = userText.toLowerCase();

      if (lower.includes('brp') || lower.includes('biometric') || lower.includes('post office')) {
        reply = "Your BRP collection letter specifies Staines Post Office (TW18 4EE). Bring your passport and decision letter. Open today: 09:00 - 17:30.";
      } else if (lower.includes('shift') || lower.includes('work') || lower.includes('hour') || lower.includes('job')) {
        reply = "Under UKVI Tier-4 regulations, you are strictly limited to 20 hours per week during term time. You have 4.0 hours remaining for this week.";
      } else if (lower.includes('swap') || lower.includes('lab') || lower.includes('timetable') || lower.includes('class')) {
        reply = "There are 3 seats available in Friday's 14:00 GPU Computing Lab (EB-04). Would you like me to submit an automated swap request to Dr. Jenkins?";
      } else if (lower.includes('housing') || lower.includes('room') || lower.includes('rent')) {
        reply = "Your tenancy at Chapter King's Cross is confirmed under Stripe Escrow ID #esc_8849. Key pickup is scheduled for Sep 28 at the reception desk.";
      }

      setChatMessages([...newChat, { sender: 'bot', text: reply }]);
    }, 600);
  };

  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', backgroundColor: 'var(--wl-dark)', color: '#0c0c0f' }}>
      
      {/* ── TOAST NOTIFICATION ── */}
      {studentToast && (
        <div
          style={{
            position: 'fixed',
            bottom: '28px',
            right: '28px',
            backgroundColor: '#0c0c0f',
            color: '#ffffff',
            padding: '14px 20px',
            borderRadius: '10px',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '13px',
            fontWeight: '600',
            border: '1px solid rgba(255, 107, 0, 0.4)',
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          <CheckCircle2 size={18} color="var(--accent-orange)" />
          <span>{studentToast}</span>
        </div>
      )}

      {/* ── HERO BANNER ─────────────────────────────────────────── */}
      <section className="page-hero-banner" style={{ borderBottom: '1px solid #d8d4cd', paddingBottom: '3.5rem' }}>
        <div className="main-container">
          <div className="flex-between flex-wrap gap-md" style={{ alignItems: 'flex-start' }}>
            <div style={{ maxWidth: '780px' }}>
              <div className="mono-label" style={{ color: 'var(--accent-orange)', marginBottom: '10px' }}>
                STUDENT OS // CAMPUS MOBILE SUPER-APP
              </div>
              <h1 className="headline-xl" style={{ marginBottom: '16px', lineHeight: 1.12, textWrap: 'balance' }}>
                One simple mobile app for students. No more jumping between 10 portals.
              </h1>
              <p className="body-lg text-secondary" style={{ maxWidth: '720px', lineHeight: 1.65 }}>
                International students often have to manage 10+ different websites—course portals, visa emails, bank statements, and accommodation forms. WorldLynk unifies timetables, weekly work hours, verified housing, and pre-arrival checklists into one friendly mobile app powered by helpful AI assistants.
              </p>

              {/* Institutional Compliance Seals */}
              <div className="flex gap-md flex-wrap mt-lg pt-md" style={{ borderTop: '1px solid #d8d4cd' }}>
                <div className="flex gap-xs items-center mono-sm" style={{ fontSize: '11.5px', color: '#475569' }}>
                  <ShieldCheck size={14} color="var(--accent-orange)" />
                  <span>Apple Wallet & Google Wallet NFC Certified</span>
                </div>
                <div className="flex gap-xs items-center mono-sm" style={{ fontSize: '11.5px', color: '#475569' }}>
                  <Lock size={14} color="var(--status-pass)" />
                  <span>Biometric Secure Enclave Storage</span>
                </div>
                <div className="flex gap-xs items-center mono-sm" style={{ fontSize: '11.5px', color: '#475569' }}>
                  <Clock size={14} color="#0284c7" />
                  <span>UKVI 20h Work Cap Real-Time Guardrail</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-sm" style={{ minWidth: '260px' }}>
              <div className="card-elevated" style={{ padding: '20px', border: '1px solid #d8d4cd', borderRadius: '14px', backgroundColor: '#ffffff' }}>
                <div className="flex-between mb-xs">
                  <span className="mono-label" style={{ fontSize: '10px', color: '#0284c7' }}>AUTHENTICATED STUDENT</span>
                  <span className="pill pill-approved" style={{ fontSize: '9px' }}>TIER-4 ACTIVE</span>
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: '800', marginTop: '4px', color: '#0c0c0f' }}>Maya Chen</div>
                <div className="mono-sm text-secondary" style={{ fontSize: '11.5px', marginTop: '2px' }}>MSc Data Science · Royal Holloway</div>
                <div className="flex gap-xs mt-sm flex-wrap">
                  <span className="pill" style={{ fontSize: '9px', backgroundColor: '#f4f1ee', color: '#475569' }}>CAS: E2948102A</span>
                  <span className="pill" style={{ fontSize: '9px', backgroundColor: '#f4f1ee', color: '#475569' }}>SITS: 0091-2847</span>
                </div>
              </div>
              <div className="flex gap-sm">
                <button onClick={() => setShowCertificateModal(true)} className="btn-secondary btn-sm" style={{ flex: 1, fontSize: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                  <Download size={13} /> CAS Dossier
                </button>
                <a href="https://worldlynk.co.uk" target="_blank" rel="noopener noreferrer" className="btn-primary btn-sm" style={{ flex: 1, fontSize: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                  Launch App <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN INTERACTIVE WORKSPACE ─────────────────────────────── */}
      <section className="section" style={{ paddingTop: '44px', paddingBottom: '70px' }}>
        <div className="main-container">
          <div className="responsive-grid-student-os" style={{ alignItems: 'start' }}>
            
            {/* ── LEFT: INTERACTIVE SMARTPHONE WORKSTATION ── */}
            <div style={{ maxWidth: '400px', width: '100%', margin: '0 auto' }}>
              <div className="flex-between mb-sm">
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>INTERACTIVE APP PREVIEW</span>
                <span className="mono-sm text-muted" style={{ fontSize: '11px' }}>Click dock icons to switch screens</span>
              </div>

              {/* iPhone 16 Pro Style Hardware Shell */}
              <div style={{
                width: '100%',
                maxWidth: '400px',
                height: '760px',
                backgroundColor: '#f4f1ee',
                borderRadius: '44px',
                border: '4px solid #2a2a35',
                boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.4), 0 0 0 1px rgba(15, 23, 42, 0.08), inset 0 0 8px rgba(15, 23, 42, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                position: 'relative'
              }}>
                {/* Dynamic Island */}
                <div style={{
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  padding: '6px 20px',
                  zIndex: 20
                }}>
                  <div style={{
                    width: '120px',
                    height: '24px',
                    backgroundColor: '#0c0c0f',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 10px',
                    border: '1px solid #333'
                  }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--status-pass)' }} />
                    <span className="mono-sm" style={{ fontSize: '9px', color: '#ffffff' }}>WORK: 16/20h</span>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', border: '2px solid #555' }} />
                  </div>
                </div>

                {/* Status Bar */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '4px 24px 8px 24px',
                  fontSize: '11px',
                  fontWeight: '600',
                  color: '#27272a'
                }}>
                  <span>09:41</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Wifi size={12} />
                    <span style={{ fontSize: '9px', fontWeight: '800' }}>5G</span>
                    <Battery size={14} />
                  </div>
                </div>

                {/* Internal Phone Viewport Screen */}
                <div style={{
                  flex: 1,
                  backgroundColor: '#ffffff',
                  overflowY: 'auto',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px'
                }}>

                  {/* TAB 1: HOME SCREEN */}
                  {activeTab === 'home' && (
                    <>
                      {/* Student Card */}
                      <div className="card-dark" style={{ padding: '14px', borderRadius: '16px', border: '1px solid rgba(15, 23, 42, 0.08)' }}>
                        <div className="flex-between">
                          <div>
                            <div className="mono-label" style={{ fontSize: '9px', color: 'var(--accent-orange)' }}>ROYAL HOLLOWAY // STUDENT APP</div>
                            <div style={{ fontSize: '1.15rem', fontWeight: '800' }}>Welcome, Maya</div>
                          </div>
                          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #ff6b00, #ff8833)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '13px', color: '#ffffff' }}>
                            MC
                          </div>
                        </div>

                        {/* Dual Gauges */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '12px' }}>
                          <div style={{ backgroundColor: '#f4f1ee', padding: '10px', borderRadius: '12px' }}>
                            <div className="mono-sm" style={{ fontSize: '9px', color: 'var(--text-secondary)' }}>ACADEMIC STANDING</div>
                            <div style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0284c7' }}>1st Class (74%)</div>
                            <div style={{ height: '4px', backgroundColor: '#d8d4cd', borderRadius: '2px', marginTop: '4px' }}>
                              <div style={{ width: '74%', height: '100%', backgroundColor: '#0284c7', borderRadius: '2px' }} />
                            </div>
                            <div className="mono-sm" style={{ fontSize: '8.5px', color: 'var(--text-muted)', marginTop: '4px' }}>On track for Distinction</div>
                          </div>

                          <div style={{ backgroundColor: '#f4f1ee', padding: '10px', borderRadius: '12px' }}>
                            <div className="mono-sm" style={{ fontSize: '9px', color: 'var(--text-secondary)' }}>WEEKLY WORK LIMIT</div>
                            <div style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--accent-orange)' }}>16h / 20h</div>
                            <div style={{ height: '4px', backgroundColor: '#d8d4cd', borderRadius: '2px', marginTop: '4px' }}>
                              <div style={{ width: '80%', height: '100%', backgroundColor: 'var(--accent-orange)', borderRadius: '2px' }} />
                            </div>
                            <div className="mono-sm" style={{ fontSize: '8.5px', color: 'var(--status-pass)', marginTop: '4px' }}>4.0h buffer safe</div>
                          </div>
                        </div>
                      </div>

                      {/* Today's Schedule Feed */}
                      <div>
                        <div className="flex-between mb-xs">
                          <span className="mono-label" style={{ fontSize: '10px' }}>TODAY'S TIMETABLE</span>
                          <span className="mono-sm" style={{ fontSize: '9px', color: 'var(--accent-orange)' }}>4 Events</span>
                        </div>
                        <div className="flex flex-col gap-xs">
                          {SCHEDULE_ITEMS.map((item, idx) => (
                            <div key={idx} style={{ backgroundColor: '#f4f1ee', padding: '10px 12px', borderRadius: '12px', borderLeft: item.type === 'Work' ? '3px solid var(--accent-orange)' : '3px solid #0284c7' }}>
                              <div className="flex-between">
                                <span className="mono-sm" style={{ fontSize: '9.5px', color: 'var(--text-secondary)' }}>{item.time}</span>
                                <span className="pill pill-approved" style={{ fontSize: '8px', padding: '1px 6px' }}>{item.type}</span>
                              </div>
                              <div style={{ fontSize: '11px', fontWeight: '700', marginTop: '2px' }}>{item.title}</div>
                              <div className="mono-sm" style={{ fontSize: '9px', color: 'var(--text-muted)', marginTop: '2px' }}>{item.loc}</div>
                              <div className="mono-sm" style={{ fontSize: '8.5px', color: item.status === 'monitored' ? 'var(--accent-orange)' : 'var(--status-pass)', marginTop: '4px' }}>
                                ✓ {item.qrStatus}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Quick Nova Prompt */}
                      <div style={{ backgroundColor: '#ffffff', padding: '12px', borderRadius: '14px', border: '1px dashed rgba(255,107,0,0.4)' }}>
                        <div className="flex gap-xs alignItems-center mb-xs">
                          <Bot size={13} color="var(--accent-orange)" />
                          <span className="mono-label" style={{ fontSize: '9.5px', color: 'var(--accent-orange)' }}>HELPFUL SUGGESTION</span>
                        </div>
                        <p style={{ fontSize: '11px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                          "You have a 1h 30m break before your Costa shift. The Turing Computing lab has 6 free workstations for your coursework assignment."
                        </p>
                      </div>
                    </>
                  )}

                  {/* TAB 2: SCHEDULE SCREEN */}
                  {activeTab === 'schedule' && (
                    <>
                      <div className="flex-between">
                        <span className="mono-label" style={{ fontSize: '10px', color: '#0284c7' }}>ACADEMIC TIMETABLE</span>
                        <span className="pill pill-approved" style={{ fontSize: '8px' }}>Synced</span>
                      </div>
                      <div style={{ backgroundColor: '#f4f1ee', padding: '10px', borderRadius: '12px' }}>
                        <div className="flex-between mb-xs">
                          <span style={{ fontSize: '11px', fontWeight: '700' }}>Thursday, 26 October</span>
                          <span className="mono-sm" style={{ fontSize: '9px', color: 'var(--text-muted)' }}>Week 4</span>
                        </div>
                        <div className="flex flex-col gap-xs">
                          {SCHEDULE_ITEMS.map((item, idx) => (
                            <div key={idx} style={{ backgroundColor: '#ffffff', padding: '10px', borderRadius: '8px' }}>
                              <div className="flex-between">
                                <span className="mono-sm" style={{ fontSize: '9px', color: 'var(--accent-orange)' }}>{item.time}</span>
                                <span className="pill" style={{ fontSize: '8px', padding: '1px 5px' }}>{item.type}</span>
                              </div>
                              <div style={{ fontSize: '11px', fontWeight: '700', marginTop: '2px' }}>{item.title}</div>
                              <div className="mono-sm" style={{ fontSize: '9px', color: 'var(--text-secondary)' }}>{item.loc}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {/* TAB 3: HOUSING SCREEN */}
                  {activeTab === 'housing' && (
                    <>
                      <div className="flex-between">
                        <span className="mono-label" style={{ fontSize: '10px', color: 'var(--accent-orange)' }}>VERIFIED PBSA LIVING</span>
                        <span className="pill pill-approved" style={{ fontSize: '8px' }}>Stripe Escrow</span>
                      </div>
                      <div className="flex flex-col gap-xs">
                        {HOUSING_LISTINGS.map((h, i) => (
                          <div key={i} style={{ backgroundColor: '#f4f1ee', borderRadius: '12px', overflow: 'hidden', border: '1px solid #d8d4cd' }}>
                            <img src={h.img} alt={h.name} style={{ width: '100%', height: '80px', objectFit: 'cover' }} />
                            <div style={{ padding: '8px 10px' }}>
                              <div className="flex-between">
                                <span style={{ fontSize: '11px', fontWeight: '700' }}>{h.name}</span>
                                <span className="mono-sm" style={{ fontSize: '10px', fontWeight: '800', color: 'var(--accent-orange)' }}>{h.price}</span>
                              </div>
                              <div className="mono-sm" style={{ fontSize: '8.5px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                                {h.type} · {h.dist}
                              </div>
                              <div className="flex-between mt-xs">
                                <span className="pill pill-active" style={{ fontSize: '7.5px' }}>{h.stripeStatus}</span>
                                <span className="mono-sm" style={{ fontSize: '8px', color: 'var(--accent-orange)', cursor: 'pointer' }}>View Contract</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {/* TAB 4: WORK SCREEN */}
                  {activeTab === 'work' && (
                    <>
                      <div className="flex-between">
                        <span className="mono-label" style={{ fontSize: '10px', color: 'var(--accent-orange)' }}>TIER-4 WORK MONITOR</span>
                        <span className="pill pill-approved" style={{ fontSize: '8px' }}>UKVI Safe</span>
                      </div>
                      <div style={{ backgroundColor: '#f4f1ee', padding: '12px', borderRadius: '12px' }}>
                        <div className="flex-between">
                          <span style={{ fontSize: '11px', fontWeight: '700' }}>Term-Time Cap</span>
                          <span className="mono-sm" style={{ fontSize: '10px', color: 'var(--accent-orange)' }}>16h / 20h Used</span>
                        </div>
                        <div style={{ height: '6px', backgroundColor: '#d8d4cd', borderRadius: '3px', margin: '6px 0' }}>
                          <div style={{ width: '80%', height: '100%', backgroundColor: 'var(--accent-orange)', borderRadius: '3px' }} />
                        </div>
                        <div className="mono-sm" style={{ fontSize: '8.5px', color: 'var(--text-secondary)' }}>
                          Remaining buffer this week: <strong>4.0 hours</strong>. Resets Monday 00:01.
                        </div>
                      </div>

                      <div className="mono-label" style={{ fontSize: '9.5px', marginTop: '4px' }}>VERIFIED ON-CAMPUS VACANCIES</div>
                      <div className="flex flex-col gap-xs">
                        {VERIFIED_JOBS.map((j, i) => (
                          <div key={i} style={{ backgroundColor: '#ffffff', padding: '10px', borderRadius: '10px', border: '1px solid #d8d4cd' }}>
                            <div className="flex-between">
                              <span style={{ fontSize: '11px', fontWeight: '700' }}>{j.title}</span>
                              <span className="mono-sm" style={{ fontSize: '9px', color: 'var(--status-pass)' }}>{j.wage}</span>
                            </div>
                            <div className="mono-sm" style={{ fontSize: '9px', color: 'var(--text-secondary)', margin: '2px 0' }}>{j.employer} · {j.hours}</div>
                            <div className="flex gap-xs mt-xs">
                              {j.tags.map((t, ti) => (
                                <span key={ti} className="pill" style={{ fontSize: '7.5px', padding: '1px 5px', backgroundColor: '#f4f1ee' }}>{t}</span>
                              ))}
                              <span className="mono-sm" style={{ fontSize: '8px', color: 'var(--accent-orange)', marginLeft: 'auto' }}>1-Click Apply</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {/* TAB 5: RELIV SOCIAL & COMMUNITY EXPERIENCES */}
                  {activeTab === 'reliv' && (
                    <>
                      <div className="flex-between">
                        <span className="mono-label" style={{ fontSize: '10px', color: '#9333ea' }}>CAMPUS COMMUNITY &amp; EVENTS</span>
                        <span className="pill pill-approved" style={{ fontSize: '8px' }}>Cohort Match</span>
                      </div>

                      <div style={{ backgroundColor: '#faf5ff', padding: '12px', borderRadius: '14px', border: '1px solid rgba(168,85,247,0.3)' }}>
                        <div className="flex-between mb-xs">
                          <span className="mono-label" style={{ fontSize: '8.5px', color: '#9333ea' }}>MEET YOUR COHORT</span>
                          <span className="pill pill-active" style={{ fontSize: '8px' }}>3 Matches</span>
                        </div>
                        <div style={{ fontSize: '12px', fontWeight: '800' }}>MSc Data Science Cohort</div>
                        <p style={{ fontSize: '10.5px', color: 'var(--text-secondary)', margin: '4px 0 8px 0', lineHeight: 1.4 }}>
                          3 students from your course arriving in London this week are matched for airport transit &amp; campus tours.
                        </p>
                        <div className="flex gap-xs">
                          <span className="pill" style={{ fontSize: '8px', backgroundColor: '#f3e8ff', color: '#9333ea' }}>Arriving Sept 24</span>
                          <span className="pill" style={{ fontSize: '8px', backgroundColor: '#f3e8ff', color: '#9333ea' }}>Chapter Halls</span>
                          <span className="mono-sm" style={{ fontSize: '8px', color: '#9333ea', marginLeft: 'auto', alignSelf: 'center', cursor: 'pointer' }}>Join Group ➔</span>
                        </div>
                      </div>

                      <div className="mono-label" style={{ fontSize: '9.5px', marginTop: '4px' }}>VERIFIED CAMPUS EXPERIENCES</div>
                      <div className="flex flex-col gap-xs">
                        {[
                          { title: 'International Postgraduate Welcome Gala', loc: 'Founder\'s Great Hall · Oct 2', ticket: 'Pass #WL-9041', status: 'Entry Pass Ready' },
                          { title: 'London Tech Careers & Coffee Meetup', loc: 'Student Union Lounge · Oct 5', ticket: 'Free · 48 Attending', status: 'RSVP Confirmed' }
                        ].map((evt, ei) => (
                          <div key={ei} style={{ backgroundColor: '#ffffff', padding: '10px', borderRadius: '10px', border: '1px solid #d8d4cd' }}>
                            <div className="flex-between">
                              <span style={{ fontSize: '11px', fontWeight: '700' }}>{evt.title}</span>
                            </div>
                            <div className="mono-sm" style={{ fontSize: '9px', color: 'var(--text-secondary)', marginTop: '2px' }}>{evt.loc}</div>
                            <div className="flex-between mt-xs">
                              <span className="mono-sm" style={{ fontSize: '8.5px', color: '#9333ea' }}>{evt.ticket}</span>
                              <span className="pill pill-approved" style={{ fontSize: '7.5px' }}>{evt.status}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {/* TAB 6: NOVA CHAT COPILOT SCREEN */}
                  {activeTab === 'chat' && (
                    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                      <div className="flex-between mb-xs">
                        <div className="flex gap-xs alignItems-center">
                          <Bot size={14} color="var(--accent-orange)" />
                          <span style={{ fontSize: '11px', fontWeight: '700' }}>Nova Campus Assistant</span>
                        </div>
                        <span className="pill pill-active" style={{ fontSize: '8px' }}>24/7 Support</span>
                      </div>

                      {/* Chat Messages */}
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px', overflowY: 'auto', maxHeight: '430px', paddingRight: '2px' }}>
                        {chatMessages.map((msg, i) => (
                          <div
                            key={i}
                            style={{
                              alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                              backgroundColor: msg.sender === 'user' ? 'var(--accent-orange)' : '#f4f1ee',
                              color: msg.sender === 'user' ? '#ffffff' : '#0c0c0f',
                              padding: '8px 12px',
                              borderRadius: '12px',
                              maxWidth: '85%',
                              fontSize: '11px',
                              lineHeight: 1.4
                            }}
                          >
                            {msg.text}
                          </div>
                        ))}
                      </div>

                      {/* Quick Prompt Chips */}
                      <div className="flex gap-xs mt-xs" style={{ overflowX: 'auto', paddingBottom: '4px' }}>
                        {["BRP location?", "Lab swap?", "Housing rent?", "Work cap?"].map((chip, idx) => (
                          <button
                            key={idx}
                            onClick={() => setChatInput(chip)}
                            className="mono-sm"
                            style={{
                              backgroundColor: '#f4f1ee',
                              color: 'var(--text-secondary)',
                              border: '1px solid #d8d4cd',
                              borderRadius: '12px',
                              padding: '2px 8px',
                              fontSize: '8.5px',
                              whiteSpace: 'nowrap',
                              cursor: 'pointer'
                            }}
                          >
                            {chip}
                          </button>
                        ))}
                      </div>

                      {/* Input Box */}
                      <form onSubmit={handleSendChat} style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
                        <input
                          type="text"
                          placeholder="Ask Nova anything..."
                          value={chatInput}
                          onChange={(e) => setChatInput(e.target.value)}
                          style={{
                            flex: 1,
                            backgroundColor: '#ffffff',
                            border: '1px solid #d8d4cd',
                            borderRadius: '16px',
                            padding: '6px 12px',
                            color: '#0c0c0f',
                            fontSize: '10.5px',
                            outline: 'none'
                          }}
                        />
                        <button type="submit" style={{ backgroundColor: 'var(--accent-orange)', border: 'none', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', cursor: 'pointer' }}>
                          <Send size={12} />
                        </button>
                      </form>
                    </div>
                  )}

                </div>

                {/* Bottom App Navigation Dock */}
                <div style={{
                  height: '56px',
                  backgroundColor: '#ffffff',
                  borderTop: '1px solid #d8d4cd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  padding: '0 8px',
                  zIndex: 10
                }}>
                  {[
                    { id: 'home', label: 'Today', icon: Home },
                    { id: 'schedule', label: 'Schedule', icon: Calendar },
                    { id: 'reliv', label: 'Reliv', icon: Users },
                    { id: 'housing', label: 'Housing', icon: Building2 },
                    { id: 'work', label: 'Work 20h', icon: Briefcase },
                    { id: 'chat', label: 'Nova AI', icon: Bot }
                  ].map((tab) => {
                    const IconComp = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        style={{
                          background: 'none',
                          border: 'none',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '2px',
                          color: isActive ? 'var(--accent-orange)' : '#64748b',
                          cursor: 'pointer',
                          padding: '4px 6px'
                        }}
                      >
                        <IconComp size={15} strokeWidth={isActive ? 2.5 : 1.8} />
                        <span style={{ fontSize: '8.5px', fontWeight: isActive ? '700' : '500' }}>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Home Indicator Bar */}
                <div style={{
                  height: '14px',
                  backgroundColor: '#f4f1ee',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingBottom: '4px'
                }}>
                  <div style={{ width: '100px', height: '4px', backgroundColor: '#333342', borderRadius: '2px' }} />
                </div>
              </div>
            </div>

            {/* ── RIGHT: ELEVATED INSTITUTIONAL SUITE & MILESTONE JOURNEY ── */}
            <div className="flex flex-col gap-xl">
              
              {/* 1. Pre-Arrival & Orientation Milestone Journey */}
              <div className="card-elevated" style={{ padding: '28px', border: '1px solid #d8d4cd', borderRadius: '16px', backgroundColor: '#ffffff' }}>
                <div className="flex-between flex-wrap gap-sm mb-md">
                  <div>
                    <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>ONBOARDING WORKSPACE</span>
                    <h3 className="headline-md" style={{ marginTop: '4px', color: '#0c0c0f' }}>
                      UKVI Pre-Arrival &amp; Orientation Milestone Journey
                    </h3>
                    <p className="body-sm text-secondary" style={{ marginTop: '2px' }}>
                      Four verified stages tracking student compliance from home country departure through term-time work authorizations.
                    </p>
                  </div>
                  <div style={{ textAlign: 'right', minWidth: '120px' }}>
                    <div style={{ fontSize: '2rem', fontWeight: '800', color: progressPercent === 100 ? 'var(--status-pass)' : 'var(--accent-orange)', lineHeight: 1 }}>
                      {progressPercent}%
                    </div>
                    <div className="mono-sm text-muted mt-xs">{doneTasks} of {totalTasks} milestones verified</div>
                  </div>
                </div>

                {/* Milestone Stage Switcher Buttons */}
                <div className="grid-4 gap-xs mb-lg" style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '14px' }}>
                  {stages.map((stg) => {
                    const isSelected = selectedStageId === stg.id;
                    const stageDone = stg.tasks.filter(t => t.done).length;
                    return (
                      <div
                        key={stg.id}
                        onClick={() => setSelectedStageId(stg.id)}
                        style={{
                          padding: '10px 12px',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          backgroundColor: isSelected ? '#f4f1ee' : '#ffffff',
                          border: isSelected ? '1.5px solid var(--accent-orange)' : '1px solid #e2e8f0',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <div className="flex-between">
                          <span className="mono-label" style={{ fontSize: '9px', color: isSelected ? 'var(--accent-orange)' : '#64748b' }}>
                            STAGE {stg.num}
                          </span>
                          <span className="pill" style={{
                            fontSize: '8px',
                            padding: '1px 5px',
                            backgroundColor: stg.status === 'COMPLETE' ? '#dcfce7' : '#f1f5f9',
                            color: stg.status === 'COMPLETE' ? '#166534' : '#475569'
                          }}>
                            {stageDone}/{stg.tasks.length}
                          </span>
                        </div>
                        <div style={{ fontSize: '11px', fontWeight: '700', color: '#0c0c0f', marginTop: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {stg.title}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Stage Tasks List */}
                <div className="flex flex-col gap-xs mb-md">
                  <div className="flex-between mb-xs">
                    <span className="mono-label" style={{ fontSize: '10px', color: '#475569' }}>
                      TASKS FOR: {activeStage.title.toUpperCase()}
                    </span>
                    <span className="mono-sm text-muted" style={{ fontSize: '10.5px' }}>Click to toggle verified status</span>
                  </div>

                  {activeStage.tasks.map((task) => (
                    <div
                      key={task.id}
                      onClick={() => toggleTask(activeStage.id, task.id)}
                      style={{
                        backgroundColor: task.done ? '#f8fafc' : '#ffffff',
                        border: task.done ? '1px solid #cbd5e1' : '1px solid #e2e8f0',
                        borderRadius: '10px',
                        padding: '12px 16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    >
                      <div style={{
                        width: '22px',
                        height: '22px',
                        borderRadius: '6px',
                        backgroundColor: task.done ? 'var(--accent-orange)' : '#ffffff',
                        border: task.done ? 'none' : '2px solid #94a3b8',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        flexShrink: 0
                      }}>
                        {task.done && <Check size={14} strokeWidth={3} />}
                      </div>

                      <div style={{ flex: 1 }}>
                        <div style={{
                          fontSize: '13px',
                          fontWeight: task.done ? '500' : '600',
                          color: task.done ? '#64748b' : '#0f172a',
                          textDecoration: task.done ? 'line-through' : 'none'
                        }}>
                          {task.label}
                        </div>
                        <div className="mono-sm text-muted" style={{ fontSize: '10px', marginTop: '2px' }}>
                          Authority: <span style={{ color: '#0284c7' }}>{task.authority}</span>
                        </div>
                      </div>

                      <span className="pill" style={{
                        fontSize: '9px',
                        backgroundColor: task.tag === 'CRITICAL' ? '#fee2e2' : '#f1f5f9',
                        color: task.tag === 'CRITICAL' ? '#dc2626' : '#475569',
                        fontWeight: '700'
                      }}>
                        {task.tag}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex-between pt-sm" style={{ borderTop: '1px solid #f1f5f9' }}>
                  <div className="mono-sm text-muted" style={{ fontSize: '11px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <ShieldCheck size={14} color="var(--status-pass)" />
                    <span>Cross-referenced against UK Home Office SMS portal</span>
                  </div>
                  <button onClick={() => setShowCertificateModal(true)} className="btn-secondary btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <FileText size={13} /> Export CAS Dossier
                  </button>
                </div>
              </div>

              {/* 2. Elevated Dynamic Emergency & Student Campus Pass */}
              <div className="card-elevated" style={{
                padding: '28px',
                border: '1px solid #cbd5e1',
                borderRadius: '16px',
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
              }}>
                <div className="flex-between flex-wrap gap-sm mb-md">
                  <div>
                    <span className="mono-label" style={{ color: '#0284c7' }}>OFFICIAL CAMPUS CREDENTIAL</span>
                    <h3 className="headline-sm" style={{ marginTop: '2px', color: '#0c0c0f' }}>
                      Dynamic Student ID &amp; NFC Emergency Pass
                    </h3>
                  </div>
                  <div className="flex gap-xs items-center">
                    <span className="pill pill-approved" style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '10px' }}>
                      <ShieldCheck size={12} /> BIOMETRICALLY LINKED
                    </span>
                  </div>
                </div>

                <div className="grid-2 gap-lg" style={{ alignItems: 'center' }}>
                  
                  {/* Left: Credential Dossier Details */}
                  <div style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                  }}>
                    <div className="flex-between pb-xs" style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <span className="mono-sm text-muted" style={{ fontSize: '10px' }}>INSTITUTION</span>
                      <span className="mono-sm" style={{ fontWeight: '700', color: '#0c0c0f', fontSize: '11px' }}>Royal Holloway, Univ. of London</span>
                    </div>
                    <div className="flex-between pb-xs" style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <span className="mono-sm text-muted" style={{ fontSize: '10px' }}>STUDENT NAME</span>
                      <span className="mono-sm" style={{ fontWeight: '700', color: '#0c0c0f', fontSize: '11px' }}>Maya Chen (ID: 0091-2847)</span>
                    </div>
                    <div className="flex-between pb-xs" style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <span className="mono-sm text-muted" style={{ fontSize: '10px' }}>TIER-4 SPONSOR CAS</span>
                      <span className="mono-sm" style={{ fontWeight: '700', color: 'var(--accent-orange)', fontSize: '11px' }}>CAS: E2948102A (Exp 09/2027)</span>
                    </div>
                    <div className="flex-between pb-xs" style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <span className="mono-sm text-muted" style={{ fontSize: '10px' }}>CAMPUS ENTRANCE RIGHTS</span>
                      <span className="mono-sm" style={{ fontWeight: '700', color: 'var(--status-pass)', fontSize: '11px' }}>Turing Labs &amp; Founders 24/7</span>
                    </div>
                    <div className="flex-between">
                      <span className="mono-sm text-muted" style={{ fontSize: '10px' }}>NHS EMERGENCY NUMBER</span>
                      <span className="mono-sm" style={{ fontWeight: '700', color: '#0c0c0f', fontSize: '11px' }}>948 201 8841 (Englefield Green)</span>
                    </div>
                  </div>

                  {/* Right: Dynamic TOTP Pass Shell */}
                  <div style={{
                    backgroundColor: '#0c0c0f',
                    borderRadius: '14px',
                    padding: '18px',
                    color: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    boxShadow: '0 8px 24px rgba(12, 12, 15, 0.2)'
                  }}>
                    <div className="flex-between w-full mb-xs">
                      <span className="mono-label" style={{ fontSize: '9px', color: 'var(--accent-orange)' }}>DYNAMIC QR PASS</span>
                      <span className="mono-sm" style={{ fontSize: '9px', color: '#22c55e', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <RefreshCw size={10} className="spin-slow" /> Rotating in {tokenCountdown}s
                      </span>
                    </div>

                    <div style={{
                      backgroundColor: '#ffffff',
                      padding: '10px',
                      borderRadius: '10px',
                      margin: '6px 0',
                      boxShadow: '0 0 16px rgba(255, 107, 0, 0.25)'
                    }}>
                      <QrCode size={110} color="#0c0c0f" />
                    </div>

                    <div className="mono-sm text-center" style={{ fontSize: '9.5px', color: '#94a3b8', marginTop: '4px' }}>
                      TOKEN: <strong style={{ color: '#ffffff' }}>WL-8941-K7X-{tokenCountdown}</strong>
                    </div>
                    <div className="mono-sm text-center" style={{ fontSize: '8px', color: '#64748b', marginTop: '2px' }}>
                      HMPO / UKVI Cryptographic Anti-Screenshot Protection
                    </div>

                    <div className="flex gap-xs w-full mt-sm">
                      <button
                        onClick={() => showToast('Apple Wallet pass generated (PKPass)')}
                        className="btn-secondary btn-sm"
                        style={{ flex: 1, fontSize: '9.5px', padding: '4px 6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', backgroundColor: '#1e293b', color: '#ffffff', border: '1px solid #334155' }}
                      >
                        <Smartphone size={11} /> Apple Wallet
                      </button>
                      <button
                        onClick={() => showToast('Google Wallet credential provisioned')}
                        className="btn-secondary btn-sm"
                        style={{ flex: 1, fontSize: '9.5px', padding: '4px 6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', backgroundColor: '#1e293b', color: '#ffffff', border: '1px solid #334155' }}
                      >
                        <CreditCard size={11} /> Google Wallet
                      </button>
                    </div>
                  </div>

                </div>
              </div>

              {/* 3. Multi-Channel Messaging Simulator (WhatsApp & Telegram) */}
              <div className="card-elevated" style={{ padding: '28px', border: '1px solid #d8d4cd', borderRadius: '16px', backgroundColor: '#ffffff' }}>
                <div className="flex-between flex-wrap gap-sm mb-xs">
                  <div>
                    <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>STUDENT OUTREACH CHANNELS</span>
                    <h3 className="headline-sm" style={{ marginTop: '2px', color: '#0c0c0f' }}>
                      Zero Web Portal Friction: WhatsApp &amp; Telegram Integration
                    </h3>
                  </div>
                  <span className="mono-sm text-muted" style={{ fontSize: '11px' }}>98.4% open rate within 9 minutes</span>
                </div>
                <p className="body-sm text-secondary mb-md">
                  Students often ignore institutional email inboxes. WorldLynk delivers attendance alerts, lab room swaps, and 20h work limit guardrails directly to students on the messaging apps they check constantly.
                </p>

                <div className="grid-2 gap-md">
                  
                  {/* WhatsApp Simulation Bubble */}
                  <div style={{
                    backgroundColor: '#efeae2',
                    borderRadius: '12px',
                    padding: '14px',
                    border: '1px solid #dcd7cd'
                  }}>
                    <div className="flex-between mb-xs">
                      <div className="flex gap-xs items-center">
                        <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
                          <MessageSquare size={12} />
                        </div>
                        <span style={{ fontSize: '12px', fontWeight: '700', color: '#0c0c0f' }}>WorldLynk Campus Bot</span>
                      </div>
                      <span className="pill" style={{ backgroundColor: '#dcfce7', color: '#166534', fontSize: '8.5px' }}>OFFICIAL VERIFIED</span>
                    </div>

                    <div style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '8px',
                      padding: '10px 12px',
                      marginTop: '8px',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.06)'
                    }}>
                      <p style={{ fontSize: '12px', color: '#1e293b', lineHeight: 1.45, margin: 0 }}>
                        ⚠️ <strong>Attendance Warning:</strong> Maya, you were flagged absent for CS-5100 today. Dr. Jenkins has reserved an authorized makeup lab slot for Friday at 14:00 (EB-04).
                      </p>
                      <div className="flex-between mt-xs">
                        <span className="mono-sm text-muted" style={{ fontSize: '9px' }}>10:14 AM</span>
                        <span style={{ color: '#0284c7', fontSize: '11px', fontWeight: '800' }}>✓✓</span>
                      </div>
                    </div>

                    <div className="flex gap-xs mt-sm">
                      <button
                        onClick={() => showToast('Makeup lab confirmed with Dr. Jenkins (EB-04, Fri 14:00)')}
                        className="btn-primary btn-sm"
                        style={{ flex: 1, fontSize: '10px', padding: '6px 8px', textAlign: 'center' }}
                      >
                        Reply '1' to Accept Slot
                      </button>
                      <button
                        onClick={() => showToast('Inquiry forwarded to Senior Tutor desk')}
                        className="btn-secondary btn-sm"
                        style={{ flex: 1, fontSize: '10px', padding: '6px 8px', textAlign: 'center' }}
                      >
                        Contact Tutor
                      </button>
                    </div>
                  </div>

                  {/* Telegram Simulation Bubble */}
                  <div style={{
                    backgroundColor: '#e6f2f8',
                    borderRadius: '12px',
                    padding: '14px',
                    border: '1px solid #c9e2f0'
                  }}>
                    <div className="flex-between mb-xs">
                      <div className="flex gap-xs items-center">
                        <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#0088cc', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
                          <Send size={12} />
                        </div>
                        <span style={{ fontSize: '12px', fontWeight: '700', color: '#0c0c0f' }}>UKVI Visa Sentinel Channel</span>
                      </div>
                      <span className="pill" style={{ backgroundColor: '#e0f2fe', color: '#0369a1', fontSize: '8.5px' }}>ENCRYPTED</span>
                    </div>

                    <div style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '8px',
                      padding: '10px 12px',
                      marginTop: '8px',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.06)'
                    }}>
                      <p style={{ fontSize: '12px', color: '#1e293b', lineHeight: 1.45, margin: 0 }}>
                        🔔 <strong>Work Shift Alert:</strong> 4.0 hours logged today at Costa Coffee. Weekly total: <strong>16.0h / 20.0h</strong>. Safe buffer remaining: <strong>4.0 hours</strong> before term cap.
                      </p>
                      <div className="flex-between mt-xs">
                        <span className="mono-sm text-muted" style={{ fontSize: '9px' }}>14:32 PM</span>
                        <span style={{ color: '#0088cc', fontSize: '11px', fontWeight: '800' }}>✓✓</span>
                      </div>
                    </div>

                    <div className="flex gap-xs mt-sm">
                      <button
                        onClick={() => showToast('Rota planner synchronized (4.0h buffer safe)')}
                        className="btn-primary btn-sm"
                        style={{ flex: 1, fontSize: '10px', padding: '6px 8px', textAlign: 'center', backgroundColor: '#0088cc', borderColor: '#0088cc' }}
                      >
                        View Shift Ledger
                      </button>
                      <button
                        onClick={() => showToast('Campus payroll slip generated')}
                        className="btn-secondary btn-sm"
                        style={{ flex: 1, fontSize: '10px', padding: '6px 8px', textAlign: 'center' }}
                      >
                        Download Payslip
                      </button>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── LIVE LAUNCH CALL TO ACTION ──────────────────────────────── */}
      <EnterpriseCTASection 
        eyebrow="GET STARTED WITH WORLDLYNK"
        title="Give your students an effortless campus experience."
        description="Help international and domestic students navigate university life with confidence—from visa checklists and course timetables to verified accommodation and part-time work tracking."
        primaryText="Schedule Campus App Demo"
        primaryLink="/demo"
        secondaryText="Launch Live Student App"
        secondaryLink="https://worldlynk.co.uk"
        secondaryIsExternal={true}
      />

      {/* ── MODAL: EXPORT CAS AUDIT DOSSIER ───────────────────────── */}
      {showCertificateModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(12, 12, 15, 0.65)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            maxWidth: '600px',
            width: '100%',
            padding: '32px',
            border: '1px solid #d8d4cd',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.35)'
          }}>
            <div className="flex-between mb-md">
              <div>
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>OFFICIAL RECORD</span>
                <h3 className="headline-sm" style={{ marginTop: '2px', color: '#0c0c0f' }}>Pre-Arrival Compliance Record</h3>
              </div>
              <button
                onClick={() => setShowCertificateModal(false)}
                style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#64748b' }}
              >
                ✕
              </button>
            </div>

            <div style={{ backgroundColor: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0', marginBottom: '20px' }}>
              <div className="mono-sm" style={{ fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '6px', color: '#334155' }}>
                <div><strong>STUDENT:</strong> Maya Chen (ID: 0091-2847)</div>
                <div><strong>CAS NUMBER:</strong> E2948102A · Royal Holloway, University of London</div>
                <div><strong>COURSE:</strong> MSc Data Science &amp; Machine Learning (2024-2025)</div>
                <div><strong>VISA STATUS:</strong> Tier-4 Student Route · Biometric Granted</div>
                <div><strong>HOUSING:</strong> Chapter King’s Cross (Tenancy Confirmed via Stripe Escrow)</div>
                <div><strong>ONBOARDING COMPLETION:</strong> {progressPercent}% of critical pre-arrival tasks cleared</div>
              </div>
            </div>

            <div className="flex gap-sm">
              <button
                onClick={() => {
                  showToast('CAS Verification Dossier PDF downloaded');
                  setShowCertificateModal(false);
                }}
                className="btn-primary"
                style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                <Download size={14} /> Download Verified Dossier PDF
              </button>
              <button
                onClick={() => setShowCertificateModal(false)}
                className="btn-secondary"
                style={{ padding: '0 20px' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
