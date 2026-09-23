import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  Users
} from 'lucide-react';

const INITIAL_CHECKLIST = [
  { id: 1, category: 'Identity & Visa', label: 'Valid International Passport with 6+ Months Validity', done: true, tag: 'CRITICAL' },
  { id: 2, category: 'Identity & Visa', label: 'Unconditional University Offer Letter & Electronic CAS', done: true, tag: 'CRITICAL' },
  { id: 3, category: 'Identity & Visa', label: 'UKVI Tier-4 Student Visa Biometric Decision Letter', done: true, tag: 'LEGAL' },
  { id: 4, category: 'Health & Compliance', label: 'Tuberculosis (TB) Certificate & NHS Surcharge Payment Receipt', done: true, tag: 'HEALTH' },
  { id: 5, category: 'Finance', label: '28-Day Bank Statement Audit for Maintenance Funds (£12,006+)', done: true, tag: 'FINANCE' },
  { id: 6, category: 'Accommodation', label: 'Verified PBSA Ensuite Accommodation Booking Voucher (Chapter King’s Cross)', done: true, tag: 'HOUSING' },
  { id: 7, category: 'Arrival Setup', label: 'UK eSIM Card Activation & BRP Collection Letter (Staines Post Office)', done: false, tag: 'ARRIVAL' },
  { id: 8, category: 'Health & Compliance', label: 'NHS Local GP Surgery Registration Form Completed', done: false, tag: 'HEALTH' },
  { id: 9, category: 'Finance', label: 'Monzo / Revolut UK Student Current Account Digital Verification', done: false, tag: 'FINANCE' },
  { id: 10, category: 'Academic', label: 'Moodle LMS Two-Factor Authentication Setup & Module Timetable Sync', done: false, tag: 'ACADEMIC' }
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
  const [checklist, setChecklist] = useState(INITIAL_CHECKLIST);
  const [activeTab, setActiveTab] = useState('home'); // home, schedule, housing, work, chat
  const [chatMessages, setChatMessages] = useState(DEFAULT_CHAT);
  const [chatInput, setChatInput] = useState('');
  const [selectedFilterCategory, setSelectedFilterCategory] = useState('All');
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  const toggleCheck = (id) => {
    setChecklist(prev => prev.map(item => item.id === id ? { ...item, done: !item.done } : item));
  };

  const doneCount = checklist.filter(i => i.done).length;
  const progressPercent = Math.round((doneCount / checklist.length) * 100);

  const filteredChecklist = selectedFilterCategory === 'All'
    ? checklist
    : checklist.filter(c => c.category === selectedFilterCategory);

  const handleSendChat = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput.trim();
    const newChat = [...chatMessages, { sender: 'user', text: userText }];
    setChatMessages(newChat);
    setChatInput('');

    // Deterministic copilot answers
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
    <div className="page-wrapper" style={{ minHeight: '100vh', backgroundColor: 'var(--wl-dark)', color: '#ffffff' }}>
      
      {/* ── HERO BANNER ─────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '40px', borderBottom: '1px solid var(--border-hairline)' }}>
        <div className="main-container">
          <div className="flex-between flex-wrap gap-md">
            <div>
              <div className="mono-label" style={{ color: 'var(--accent-orange)', marginBottom: '8px' }}>
                STUDENT OS // THE SOVEREIGN CAMPUS CLIENT
              </div>
              <h1 className="headline-xl" style={{ marginBottom: '12px', maxWidth: '820px', lineHeight: 1.15 }}>
                One mobile workstation. Zero portal fragmentation.
              </h1>
              <p className="body-lg text-secondary" style={{ maxWidth: '720px' }}>
                International students typically juggle 11 disconnected portals — Moodle, SITS, bank statements, CAS PDFs, and PBSA housing emails. Student OS unifies academic timetables, UKVI 20-hour work tracking, Stripe-verified housing escrows, and pre-departure checklists into a single, responsive smartphone OS.
              </p>
            </div>

            <div className="flex flex-col gap-sm" style={{ minWidth: '240px' }}>
              <div className="card-dark" style={{ padding: '16px', border: '1px solid var(--border-subtle)' }}>
                <div className="mono-label" style={{ fontSize: '10px', color: 'var(--accent-cyan)' }}>ACTIVE STUDENT DOSSIER</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '700', marginTop: '4px' }}>Maya Chen</div>
                <div className="mono-sm text-secondary" style={{ fontSize: '11px' }}>MSc Data Science · Year 1</div>
                <div className="flex gap-xs mt-sm">
                  <span className="pill pill-approved" style={{ fontSize: '9px' }}>CAS: E2948102A</span>
                  <span className="pill pill-active" style={{ fontSize: '9px' }}>Tier-4 Sponsored</span>
                </div>
              </div>
              <div className="flex gap-sm">
                <button onClick={() => setShowCertificateModal(true)} className="btn-secondary btn-sm" style={{ flex: 1, fontSize: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                  <Download size={13} /> Export CAS Dossier
                </button>
                <a href="https://worldlynk.co.uk" target="_blank" rel="noopener noreferrer" className="btn-primary btn-sm" style={{ flex: 1, fontSize: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                  Launch Live App <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN INTERACTIVE WORKSPACE ─────────────────────────────── */}
      <section className="section" style={{ paddingTop: '40px' }}>
        <div className="main-container">
          <div style={{ display: 'grid', gridTemplateColumns: '420px 1fr', gap: '32px', alignItems: 'start' }}>
            
            {/* ── LEFT: INTERACTIVE SMARTPHONE WORKSTATION ── */}
            <div style={{ position: 'sticky', top: '100px' }}>
              <div className="flex-between mb-sm">
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>INTERACTIVE LIVE SMARTPHONE</span>
                <span className="mono-sm text-muted" style={{ fontSize: '11px' }}>Click dock icons to switch screens</span>
              </div>

              {/* iPhone 16 Pro Style Hardware Shell */}
              <div style={{
                width: '100%',
                maxWidth: '400px',
                height: '760px',
                backgroundColor: '#0a0a0d',
                borderRadius: '44px',
                border: '4px solid #2a2a35',
                boxShadow: '0 25px 60px -15px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.08), inset 0 0 8px rgba(255,255,255,0.05)',
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
                    width: '110px',
                    height: '24px',
                    backgroundColor: '#000000',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 8px',
                    border: '1px solid #1a1a24'
                  }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--status-pass)' }} />
                    <span className="mono-sm" style={{ fontSize: '9px', color: 'rgba(255,255,255,0.8)' }}>UKVI: 16/20h</span>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', border: '2px solid #333' }} />
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
                  color: 'rgba(255,255,255,0.85)'
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
                  backgroundColor: '#121217',
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
                      <div className="card-dark" style={{ padding: '14px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <div className="flex-between">
                          <div>
                            <div className="mono-label" style={{ fontSize: '9px', color: 'var(--accent-orange)' }}>ROYAL HOLLOWAY // STUDENT OS</div>
                            <div style={{ fontSize: '1.15rem', fontWeight: '800' }}>Welcome, Maya</div>
                          </div>
                          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #ff6b00, #ff8833)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '13px' }}>
                            MC
                          </div>
                        </div>

                        {/* Dual Gauges */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '12px' }}>
                          <div style={{ backgroundColor: '#1c1c24', padding: '10px', borderRadius: '12px' }}>
                            <div className="mono-sm" style={{ fontSize: '9px', color: 'var(--text-secondary)' }}>COURSE PROGRESS</div>
                            <div style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--accent-cyan)' }}>68%</div>
                            <div style={{ height: '4px', backgroundColor: '#2a2a38', borderRadius: '2px', marginTop: '4px' }}>
                              <div style={{ width: '68%', height: '100%', backgroundColor: 'var(--accent-cyan)', borderRadius: '2px' }} />
                            </div>
                            <div className="mono-sm" style={{ fontSize: '8.5px', color: 'var(--text-muted)', marginTop: '4px' }}>On track for 1st Class</div>
                          </div>

                          <div style={{ backgroundColor: '#1c1c24', padding: '10px', borderRadius: '12px' }}>
                            <div className="mono-sm" style={{ fontSize: '9px', color: 'var(--text-secondary)' }}>UKVI WORK CAP</div>
                            <div style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--accent-orange)' }}>16h / 20h</div>
                            <div style={{ height: '4px', backgroundColor: '#2a2a38', borderRadius: '2px', marginTop: '4px' }}>
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
                            <div key={idx} style={{ backgroundColor: '#191922', padding: '10px 12px', borderRadius: '12px', borderLeft: item.type === 'Work' ? '3px solid var(--accent-orange)' : '3px solid var(--accent-cyan)' }}>
                              <div className="flex-between">
                                <span className="mono-sm" style={{ fontSize: '9.5px', color: 'var(--text-secondary)' }}>{item.time}</span>
                                <span className="pill pill-approved" style={{ fontSize: '8px', padding: '1px 6px' }}>{item.type}</span>
                              </div>
                              <div style={{ fontSize: '11px', fontWeight: '700', marginTop: '2px' }}>{item.title}</div>
                              <div className="mono-sm" style={{ fontSize: '9px', color: 'var(--text-muted)', marginTop: '2px' }}>{item.loc}</div>
                              <div className="mono-sm" style={{ fontSize: '8.5px', color: item.status === 'monitored' ? 'var(--accent-orange)' : 'var(--accent-emerald)', marginTop: '4px' }}>
                                ✓ {item.qrStatus}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Quick Nova Prompt */}
                      <div style={{ backgroundColor: '#181822', padding: '12px', borderRadius: '14px', border: '1px dashed rgba(255,107,0,0.3)' }}>
                        <div className="flex gap-xs alignItems-center mb-xs">
                          <Bot size={13} color="var(--accent-orange)" />
                          <span className="mono-label" style={{ fontSize: '9.5px', color: 'var(--accent-orange)' }}>NOVA ASSISTANT RADAR</span>
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
                        <span className="mono-label" style={{ fontSize: '10px', color: 'var(--accent-cyan)' }}>ACADEMIC TIMETABLE</span>
                        <span className="pill pill-approved" style={{ fontSize: '8px' }}>SITS Synced</span>
                      </div>
                      <div style={{ backgroundColor: '#1b1b26', padding: '10px', borderRadius: '12px' }}>
                        <div className="flex-between mb-xs">
                          <span style={{ fontSize: '12px', fontWeight: '700' }}>Week 4 · Term 1</span>
                          <span className="mono-sm" style={{ fontSize: '9px', color: 'var(--accent-cyan)' }}>Oct 14 - Oct 18</span>
                        </div>
                        <div className="flex gap-xs" style={{ overflowX: 'auto', paddingBottom: '4px' }}>
                          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
                            <div key={i} style={{ flex: 1, textAlign: 'center', padding: '6px 4px', borderRadius: '8px', backgroundColor: i === 1 ? 'var(--accent-orange)' : '#121217', color: i === 1 ? '#ffffff' : 'var(--text-secondary)' }}>
                              <div style={{ fontSize: '9px' }}>{day}</div>
                              <div style={{ fontSize: '11px', fontWeight: '800' }}>{14 + i}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col gap-xs">
                        <div style={{ backgroundColor: '#181822', padding: '10px', borderRadius: '10px', borderLeft: '3px solid var(--accent-cyan)' }}>
                          <span className="mono-sm" style={{ fontSize: '9px', color: 'var(--text-muted)' }}>09:00 - 11:00</span>
                          <div style={{ fontSize: '11px', fontWeight: '700' }}>CS-5100: Distributed ML Systems</div>
                          <div className="mono-sm" style={{ fontSize: '9px', color: 'var(--text-secondary)' }}>EB-02 · Dynamic QR Check-in Required</div>
                        </div>

                        <div style={{ backgroundColor: '#181822', padding: '10px', borderRadius: '10px', borderLeft: '3px solid var(--accent-cyan)' }}>
                          <span className="mono-sm" style={{ fontSize: '9px', color: 'var(--text-muted)' }}>11:30 - 13:00</span>
                          <div style={{ fontSize: '11px', fontWeight: '700' }}>CS-5100 Lab Session (Group A)</div>
                          <div className="mono-sm" style={{ fontSize: '9px', color: 'var(--text-secondary)' }}>Turing Lab 4 · Dr. Jenkins</div>
                          <button onClick={() => alert('Swap request submitted to Senior Tutor Dr. Jenkins')} className="btn-secondary btn-sm" style={{ marginTop: '6px', fontSize: '9px', padding: '2px 8px' }}>
                            Request Lab Slot Swap ➔
                          </button>
                        </div>

                        <div style={{ backgroundColor: '#181822', padding: '10px', borderRadius: '10px', borderLeft: '3px solid var(--accent-orange)' }}>
                          <span className="mono-sm" style={{ fontSize: '9px', color: 'var(--accent-orange)' }}>14:30 - 18:30 (Work)</span>
                          <div style={{ fontSize: '11px', fontWeight: '700' }}>Campus Barista Shift</div>
                          <div className="mono-sm" style={{ fontSize: '9px', color: 'var(--text-muted)' }}>Costa Coffee · Logged to UKVI Monitor</div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* TAB 3: HOUSING / PBSA SCREEN */}
                  {activeTab === 'housing' && (
                    <>
                      <div className="flex-between">
                        <span className="mono-label" style={{ fontSize: '10px', color: 'var(--accent-emerald)' }}>PBSA HOUSING ESCROW</span>
                        <span className="pill pill-approved" style={{ fontSize: '8px' }}>Stripe Secured</span>
                      </div>

                      {/* Active Lease Card */}
                      <div style={{ backgroundColor: '#191924', padding: '12px', borderRadius: '14px', border: '1px solid rgba(16,185,129,0.3)' }}>
                        <div className="flex-between mb-xs">
                          <span className="pill pill-approved" style={{ fontSize: '8px' }}>Confirmed Tenancy</span>
                          <span className="mono-sm" style={{ fontSize: '9px', color: 'var(--accent-emerald)' }}>Paid via Stripe</span>
                        </div>
                        <div style={{ fontSize: '13px', fontWeight: '800' }}>Chapter King's Cross</div>
                        <div className="mono-sm" style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>Studio Ensuite · Floor 4, Room 412</div>
                        <div className="flex-between mt-sm" style={{ borderTop: '1px solid #282836', paddingTop: '8px' }}>
                          <span className="mono-sm" style={{ fontSize: '9px' }}>Move-in: Sep 28, 2026</span>
                          <span style={{ fontSize: '10px', fontWeight: '700', color: 'var(--accent-cyan)' }}>Download Tenancy PDF</span>
                        </div>
                      </div>

                      <div className="mono-label" style={{ fontSize: '9.5px', marginTop: '4px' }}>VERIFIED ALTERNATE HALLS</div>
                      <div className="flex flex-col gap-xs">
                        {HOUSING_LISTINGS.slice(1).map((h, i) => (
                          <div key={i} style={{ backgroundColor: '#16161f', padding: '10px', borderRadius: '10px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <div style={{ width: '42px', height: '42px', borderRadius: '8px', backgroundColor: '#2a2a38', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                              <Building2 size={18} color="var(--accent-orange)" />
                            </div>
                            <div style={{ flex: 1 }}>
                              <div style={{ fontSize: '11px', fontWeight: '700' }}>{h.name}</div>
                              <div className="mono-sm" style={{ fontSize: '9px', color: 'var(--text-secondary)' }}>{h.type} · {h.price}</div>
                              <div className="mono-sm" style={{ fontSize: '8.5px', color: 'var(--accent-emerald)' }}>{h.dist}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {/* TAB 4: WORK / UKVI 20H TRACKER SCREEN */}
                  {activeTab === 'work' && (
                    <>
                      <div className="flex-between">
                        <span className="mono-label" style={{ fontSize: '10px', color: 'var(--accent-orange)' }}>UKVI TIER-4 WORK RADAR</span>
                        <span className="pill pill-approved" style={{ fontSize: '8px' }}>Zero-Breach Shield</span>
                      </div>

                      <div style={{ backgroundColor: '#191924', padding: '12px', borderRadius: '14px', border: '1px solid rgba(255,107,0,0.3)' }}>
                        <div className="mono-sm" style={{ fontSize: '9px', color: 'var(--text-secondary)' }}>CURRENT TERM-TIME WEEK</div>
                        <div className="flex-between alignItems-center mt-xs">
                          <span style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--accent-orange)' }}>16.0 hrs</span>
                          <span className="mono-sm" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Max Legal: 20.0 hrs</span>
                        </div>
                        <div style={{ height: '6px', backgroundColor: '#2a2a38', borderRadius: '3px', marginTop: '6px', overflow: 'hidden' }}>
                          <div style={{ width: '80%', height: '100%', backgroundColor: 'var(--accent-orange)' }} />
                        </div>
                        <div className="flex-between mt-xs mono-sm" style={{ fontSize: '8.5px', color: 'var(--status-pass)' }}>
                          <span>✓ 4.0h Safe Legal Allowance Left</span>
                          <span>Reset: Sunday 23:59</span>
                        </div>
                      </div>

                      <div className="mono-label" style={{ fontSize: '9.5px', marginTop: '4px' }}>VERIFIED ON-CAMPUS VACANCIES</div>
                      <div className="flex flex-col gap-xs">
                        {VERIFIED_JOBS.map((j, i) => (
                          <div key={i} style={{ backgroundColor: '#16161f', padding: '10px', borderRadius: '10px' }}>
                            <div className="flex-between">
                              <span style={{ fontSize: '11px', fontWeight: '700' }}>{j.title}</span>
                              <span className="mono-sm" style={{ fontSize: '9px', color: 'var(--accent-emerald)' }}>{j.wage}</span>
                            </div>
                            <div className="mono-sm" style={{ fontSize: '9px', color: 'var(--text-secondary)', margin: '2px 0' }}>{j.employer} · {j.hours}</div>
                            <div className="flex gap-xs mt-xs">
                              {j.tags.map((t, ti) => (
                                <span key={ti} className="pill" style={{ fontSize: '7.5px', padding: '1px 5px', backgroundColor: '#252533' }}>{t}</span>
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
                        <span className="mono-label" style={{ fontSize: '10px', color: 'var(--accent-purple)' }}>RELIV SOCIAL EXPERIENCE</span>
                        <span className="pill pill-approved" style={{ fontSize: '8px' }}>Lynk Up Active</span>
                      </div>

                      {/* Mystery Match / Lynk Up Card */}
                      <div style={{ backgroundColor: '#191528', padding: '12px', borderRadius: '14px', border: '1px solid rgba(168,85,247,0.3)' }}>
                        <div className="flex-between mb-xs">
                          <span className="mono-label" style={{ fontSize: '8.5px', color: 'var(--accent-purple)' }}>LYNK UP // PEER MATCHER</span>
                          <span className="pill pill-active" style={{ fontSize: '8px' }}>3 Matches</span>
                        </div>
                        <div style={{ fontSize: '12px', fontWeight: '800' }}>MSc Data Science Cohort</div>
                        <p style={{ fontSize: '10.5px', color: 'var(--text-secondary)', margin: '4px 0 8px 0', lineHeight: 1.4 }}>
                          3 students from your course arriving in London this week are matched for airport transit &amp; campus tours.
                        </p>
                        <div className="flex gap-xs">
                          <span className="pill" style={{ fontSize: '8px', backgroundColor: '#2d1b4d', color: '#c084fc' }}>Arriving Sept 24</span>
                          <span className="pill" style={{ fontSize: '8px', backgroundColor: '#2d1b4d', color: '#c084fc' }}>Chapter Halls</span>
                          <span className="mono-sm" style={{ fontSize: '8px', color: 'var(--accent-purple)', marginLeft: 'auto', alignSelf: 'center', cursor: 'pointer' }}>Join Group ➔</span>
                        </div>
                      </div>

                      {/* Reliv Verified Campus Events */}
                      <div className="mono-label" style={{ fontSize: '9.5px', marginTop: '4px' }}>VERIFIED CAMPUS EXPERIENCES</div>
                      <div className="flex flex-col gap-xs">
                        {[
                          { title: 'International Postgraduate Welcome Gala', loc: 'Founder\'s Great Hall · Oct 2', ticket: 'Ticket #WL-EVT-9041', status: 'QR Gate Pass Ready' },
                          { title: 'London Tech Careers & Coffee Meetup', loc: 'Student Union Lounge · Oct 5', ticket: 'Free · 48 Attending', status: 'RSVP Confirmed' }
                        ].map((evt, ei) => (
                          <div key={ei} style={{ backgroundColor: '#16161f', padding: '10px', borderRadius: '10px' }}>
                            <div className="flex-between">
                              <span style={{ fontSize: '11px', fontWeight: '700' }}>{evt.title}</span>
                            </div>
                            <div className="mono-sm" style={{ fontSize: '9px', color: 'var(--text-secondary)', marginTop: '2px' }}>{evt.loc}</div>
                            <div className="flex-between mt-xs">
                              <span className="mono-sm" style={{ fontSize: '8.5px', color: 'var(--accent-purple)' }}>{evt.ticket}</span>
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
                          <span style={{ fontSize: '11px', fontWeight: '700' }}>Nova Campus Copilot</span>
                        </div>
                        <span className="pill pill-active" style={{ fontSize: '8px' }}>30 Mastra Agents</span>
                      </div>

                      {/* Chat Messages */}
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px', overflowY: 'auto', maxHeight: '430px', paddingRight: '2px' }}>
                        {chatMessages.map((msg, i) => (
                          <div
                            key={i}
                            style={{
                              alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                              backgroundColor: msg.sender === 'user' ? 'var(--accent-orange)' : '#1e1e28',
                              color: '#ffffff',
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
                              backgroundColor: '#252533',
                              color: 'var(--text-secondary)',
                              border: '1px solid #333344',
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
                            backgroundColor: '#191924',
                            border: '1px solid #2e2e40',
                            borderRadius: '16px',
                            padding: '6px 12px',
                            color: '#ffffff',
                            fontSize: '10.5px',
                            outline: 'none'
                          }}
                        />
                        <button
                          type="submit"
                          style={{
                            backgroundColor: 'var(--accent-orange)',
                            border: 'none',
                            borderRadius: '50%',
                            width: '28px',
                            height: '28px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                            cursor: 'pointer'
                          }}
                        >
                          <Send size={12} />
                        </button>
                      </form>
                    </div>
                  )}

                </div>

                {/* Bottom App Dock Navigation */}
                <div style={{
                  height: '62px',
                  backgroundColor: '#0d0d12',
                  borderTop: '1px solid #1f1f2a',
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  padding: '0 4px',
                  zIndex: 20
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
                          color: isActive ? 'var(--accent-orange)' : 'var(--text-muted)',
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
                  backgroundColor: '#0d0d12',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingBottom: '4px'
                }}>
                  <div style={{ width: '100px', height: '4px', backgroundColor: '#333342', borderRadius: '2px' }} />
                </div>
              </div>
            </div>

            {/* ── RIGHT: DETAILED INSTITUTIONAL SUITE & CHECKLIST ── */}
            <div className="flex flex-col gap-xl">
              
              {/* Pre-Departure Readiness Radar */}
              <div className="card-dark" style={{ padding: '24px', border: '1px solid var(--border-subtle)' }}>
                <div className="flex-between flex-wrap gap-sm mb-md">
                  <div>
                    <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>PRE-DEPARTURE &amp; LANDING RADAR</span>
                    <h3 className="headline-md" style={{ marginTop: '4px' }}>CAS &amp; UK Onboarding Checklist</h3>
                    <p className="body-sm text-secondary">
                      Deterministic verification of mandatory international student requirements prior to and upon landing in the United Kingdom.
                    </p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.8rem', fontWeight: '800', color: progressPercent === 100 ? 'var(--status-pass)' : 'var(--accent-orange)' }}>
                      {progressPercent}%
                    </div>
                    <div className="mono-sm text-muted">{doneCount} of {checklist.length} verified</div>
                  </div>
                </div>

                {/* Category Filter Chips */}
                <div className="flex gap-xs mb-md flex-wrap">
                  {['All', 'Identity & Visa', 'Health & Compliance', 'Finance', 'Accommodation', 'Arrival Setup', 'Academic'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedFilterCategory(cat)}
                      className="tab-btn"
                      style={{
                        padding: '4px 10px',
                        fontSize: '11px',
                        backgroundColor: selectedFilterCategory === cat ? 'var(--accent-orange)' : '#191924',
                        color: selectedFilterCategory === cat ? '#ffffff' : 'var(--text-secondary)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '6px'
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Checklist Rows */}
                <div className="flex flex-col gap-xs mb-md">
                  {filteredChecklist.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => toggleCheck(item.id)}
                      style={{
                        backgroundColor: item.done ? '#13131c' : '#191925',
                        border: item.done ? '1px solid #232332' : '1px solid #323246',
                        borderRadius: '8px',
                        padding: '10px 14px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    >
                      <div style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '4px',
                        backgroundColor: item.done ? 'var(--accent-orange)' : 'transparent',
                        border: item.done ? 'none' : '2px solid #555566',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        flexShrink: 0
                      }}>
                        {item.done && <Check size={13} strokeWidth={3} />}
                      </div>

                      <div style={{ flex: 1 }}>
                        <span style={{
                          fontSize: '12.5px',
                          color: item.done ? 'rgba(255,255,255,0.7)' : '#ffffff',
                          textDecoration: item.done ? 'line-through' : 'none'
                        }}>
                          {item.label}
                        </span>
                      </div>

                      <span className="pill" style={{
                        fontSize: '8.5px',
                        backgroundColor: item.tag === 'CRITICAL' ? 'rgba(239,68,68,0.15)' : 'rgba(255,255,255,0.06)',
                        color: item.tag === 'CRITICAL' ? '#ef4444' : 'var(--text-muted)'
                      }}>
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex-between">
                  <span className="mono-sm text-muted">Click any row to toggle verification state</span>
                  <button onClick={() => setShowCertificateModal(true)} className="btn-secondary btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <FileText size={13} /> View Audit Dossier
                  </button>
                </div>
              </div>

              {/* Offline Emergency Pass Card */}
              <div className="card-dark" style={{ padding: '24px', border: '1px solid rgba(56,189,248,0.2)' }}>
                <div className="flex-between flex-wrap gap-sm mb-sm">
                  <div>
                    <span className="mono-label" style={{ color: 'var(--accent-cyan)' }}>AUTHENTICATED CAMPUS CREDENTIAL</span>
                    <h3 className="headline-sm" style={{ marginTop: '2px' }}>Offline Digital Emergency Pass</h3>
                  </div>
                  <span className="pill pill-approved"><ShieldCheck size={12} style={{ marginRight: '4px' }} /> HMAC CRYPTOGRAPHICALLY SIGNED</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 140px', gap: '20px', alignItems: 'center' }}>
                  <div className="mono-sm" style={{ fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '6px', color: 'var(--text-secondary)' }}>
                    <div><strong>STUDENT:</strong> Maya Chen (ID: 0091-2847)</div>
                    <div><strong>INSTITUTION:</strong> Royal Holloway, University of London</div>
                    <div><strong>UKVI CAS:</strong> E2948102A (Valid to 30/09/2027)</div>
                    <div><strong>EMERGENCY CONTACT:</strong> Campus Security (+44 1784 443888)</div>
                    <div><strong>NHS NUMBER:</strong> 948 201 8841 (Englefield Green Health Centre)</div>
                  </div>

                  <div style={{ backgroundColor: '#ffffff', padding: '8px', borderRadius: '10px', textAlign: 'center' }}>
                    <div style={{ width: '100%', height: '110px', backgroundColor: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', borderRadius: '6px' }}>
                      <QrCode size={90} color="#ffffff" />
                    </div>
                    <div className="mono-sm" style={{ color: '#000000', fontSize: '8px', fontWeight: '800', marginTop: '4px' }}>
                      SUB-180ms ROTATING
                    </div>
                  </div>
                </div>
              </div>

              {/* Multi-Channel Notification Dispatcher */}
              <div className="card-dark" style={{ padding: '24px', border: '1px solid var(--border-subtle)' }}>
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>OMNICHANNEL MESSAGING BRIDGES</span>
                <h3 className="headline-sm" style={{ margin: '4px 0 12px 0' }}>Zero App-Install Friction: WhatsApp &amp; Telegram</h3>
                <p className="body-sm text-secondary mb-md">
                  Students don’t check institutional web portals every day. WorldLynk delivers attendance alerts, lab room swaps, and shift buffer notices via the messaging apps students already have open.
                </p>

                <div className="grid-2">
                  <div style={{ backgroundColor: '#181822', padding: '14px', borderRadius: '12px', borderLeft: '3px solid #25D366' }}>
                    <div className="flex gap-xs alignItems-center mb-xs">
                      <MessageSquare size={14} color="#25D366" />
                      <span style={{ fontSize: '12px', fontWeight: '700' }}>WhatsApp (Baileys Gateway)</span>
                    </div>
                    <p style={{ fontSize: '11px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                      "⚠️ Maya: You have 1 unverified absence for CS-5100. Dr. Jenkins has reserved a makeup lab slot tomorrow at 14:00. Reply '1' to confirm."
                    </p>
                  </div>

                  <div style={{ backgroundColor: '#181822', padding: '14px', borderRadius: '12px', borderLeft: '3px solid #0088cc' }}>
                    <div className="flex gap-xs alignItems-center mb-xs">
                      <Send size={14} color="#0088cc" />
                      <span style={{ fontSize: '12px', fontWeight: '700' }}>Telegram Bot API</span>
                    </div>
                    <p style={{ fontSize: '11px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                      "🔔 Barista Shift Alert: 4.0 hours logged today at Costa Coffee. Total this week: 16.0h / 20.0h. You have 4.0h buffer left before term cap."
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── MODAL: EXPORT CAS AUDIT DOSSIER ───────────────────────── */}
      {showCertificateModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.8)',
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
            maxWidth: '600px',
            width: '100%',
            padding: '28px',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.9)'
          }}>
            <div className="flex-between mb-md">
              <div>
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>IMMUTABLE AUDIT CERTIFICATE</span>
                <h3 className="headline-sm" style={{ marginTop: '2px' }}>Pre-Departure Compliance Dossier</h3>
              </div>
              <button onClick={() => setShowCertificateModal(false)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
            </div>

            <div style={{ backgroundColor: '#0a0a0f', padding: '16px', borderRadius: '10px', border: '1px solid #222230', marginBottom: '20px' }}>
              <div className="mono-sm" style={{ fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div><strong>STUDENT NAME:</strong> Maya Chen</div>
                <div><strong>STUDENT ID / SITS:</strong> 0091-2847</div>
                <div><strong>TIER-4 CAS NUMBER:</strong> E2948102A</div>
                <div><strong>SPONSOR INSTITUTION:</strong> Royal Holloway (Tier-4 Sponsor #4492)</div>
                <div><strong>MAINTENANCE FUNDS VERIFIED:</strong> £14,240 (Barclays 28-day audit passed)</div>
                <div><strong>PBSA TENANCY ID:</strong> CH-LON-8841 (Stripe Escrow Confirmed)</div>
                <div><strong>CRYPTOGRAPHIC HASH:</strong> sha256:7f9a2b89c4d1...88e1</div>
              </div>
            </div>

            <div className="flex justify-end gap-sm">
              <button onClick={() => setShowCertificateModal(false)} className="btn-secondary btn-sm">
                Close Preview
              </button>
              <button onClick={() => { alert('Simulated PDF Download: CAS_Dossier_MayaChen.pdf'); setShowCertificateModal(false); }} className="btn-primary btn-sm">
                Download Signed PDF ➔
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
