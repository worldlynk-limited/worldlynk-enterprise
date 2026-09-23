import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, ShieldCheck, CheckCircle2, AlertTriangle, Clock, 
  ArrowRight, ExternalLink, Bot, Zap, Layers, Search, 
  Users, Database, Calendar, Building, GraduationCap, 
  FileText, Lock, GitCommit, Check, Cpu, Network, Globe, MessageSquare,
  Server, Shield, MessageCircle, BarChart, HardDrive
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

  // --- Data structures ---

  const agents = [
    { id: 'supervisor', name: 'worldlynk-supervisor-agent', role: 'Nova Master Orchestrator', desc: 'Central intent router & context binder. Injects authenticated UID, enforces institutional boundaries, evaluates risk, and orchestrates 29 sub-agents.', channels: ['Fabric Event Bus', 'Omnichannel Gateway'], read: ['Student Records', 'LibSQL Memory', 'Moodle Signals'], action: ['SITS Commit Staging', 'Tutor Escalation'], owner: 'Registry & Compliance', icon: ShieldCheck },
    { id: 'tailoredResume', name: 'worldlynk-tailored-resume-agent', role: 'Career & ATS Optimization', desc: 'Rewrites student CVs aligned to specific UK graduate schemes and visa-compliant vacancies using deterministic 3-step DAG execution.', channels: ['Student App', 'Web'], read: ['Student CV', 'Target Job Description'], action: ['Optimized CV Generation', 'ATS Scorecard'], owner: 'Careers Service', icon: FileText },
    { id: 'accommodation', name: 'worldlynk-accommodation-agent', role: 'PBSA Housing Allocator', desc: 'Conversational housing match with verified tenancy escrows, room inventory check, and 51-week lease contract lock via Stripe Connect.', channels: ['Student App', 'WhatsApp'], read: ['PBSA Hall Roster', 'Maintenance Database'], action: ['Room Allocation', 'Stripe Escrow Lock'], owner: 'Estate Management', icon: Building },
    { id: 'moodle', name: 'worldlynk-moodle-agent', role: 'Academic LMS Synchronizer', desc: 'Queries enrolled courses, assignment schedules, lecture timetables, and campus LMS FAQs with zero schema modification to on-prem databases.', channels: ['Student App', 'Web'], read: ['Moodle REST API', 'Course Catalog'], action: ['Timetable Sync', 'Assignment Alert'], owner: 'Faculty Administration', icon: Cpu },
    { id: 'interviewPrep', name: 'worldlynk-interview-prep-agent', role: 'AI Mock Interview Coach', desc: 'Generates role-specific behavioral, technical, and situational mock packs with real-time audio playback using Nova Voice AI streaming.', channels: ['Student App', 'Voice API'], read: ['Job Context', 'Student Profile'], action: ['Mock Pack Composition', 'Audio Streaming'], owner: 'Careers Service', icon: Bot },
    { id: 'jobMatch', name: 'worldlynk-job-match-agent', role: 'Tier-4 Work Cap Shield', desc: 'Algolia-indexed job discovery enforcing the strict UKVI 20-hour weekly term-time ceiling before applications can be lodged.', channels: ['Student App', 'Telegram'], read: ['Weekly Rota Log', 'Algolia Job DB'], action: ['Work Cap Verification', 'Job Application'], owner: 'UKVI Compliance', icon: Users },
    { id: 'eventMatch', name: 'worldlynk-event-match-agent', role: 'Campus Engagement Curator', desc: 'Matches students to verified academic symposiums and society events; sends calendar invites and manages QR live gate check-in tickets.', channels: ['Student App', 'Telegram'], read: ['Student Interests', 'Union Events DB'], action: ['Calendar Invite', 'QR Ticket Minting'], owner: 'Student Union', icon: Calendar },
    { id: 'planYourDay', name: 'worldlynk-plan-your-day-agent', role: 'Itinerary & Route Engine', desc: 'Assembles dynamic daily itineraries combining lecture slots, transit routes, and study sessions with shareable public URLs.', channels: ['Student App', 'Reliv'], read: ['Campus Timetable', 'Google Maps API'], action: ['Itinerary Compilation', 'Public Slug Minting'], owner: 'Academic Support', icon: Clock },
    { id: 'searchAgent', name: 'worldlynk-search-agent', role: 'Live Immigration & Web Research', desc: 'Conducts real-time live web research via Exa Search API for up-to-date Home Office UKVI policy guidance and currency exchange updates.', channels: ['Nova Copilot', 'MCP Server'], read: ['Exa Web Index', 'UKVI Gazettes'], action: ['Live Citation Dossier'], owner: 'Immigration Services', icon: Globe },
    { id: 'consultantCopilot', name: 'worldlynk-consultant-copilot', role: 'Admissions Caseload Manager', desc: 'Manages CAS document preparation timelines, international credential translation, and student-advisor collaboration queues.', channels: ['Compass Console', 'Web'], read: ['CAS Checklist', 'NARIC DB'], action: ['CAS Brief Generation', 'Advisor Alert'], owner: 'International Admissions', icon: Database }
  ];

  const filteredAgents = agents.filter(a => a.name.toLowerCase().includes(agentSearch.toLowerCase()) || a.role.toLowerCase().includes(agentSearch.toLowerCase()));
  const selectedAgent = agents.find(a => a.id === selectedAgentId) || agents[0];

  const cascadeSteps = [
    { id: 0, title: 'Ingest (Dynamic QR)', time: '09:12:04', loc: 'Classroom EB-02', status: 'FLAGGED', pillClass: 'pill-flagged', narrative: 'A dynamically rotating QR code for lecture attendance expires. Maya Chen fails to register attendance for the 3rd consecutive seminar.', ledger: '{"event_type": "attendance_miss", "student_id": "84729", "location": "EB-02", "timestamp": "2026-09-23T09:12:04Z", "signature": "hmac_sha256:7f8b...88e1"}' },
    { id: 1, title: 'Fabric Sync (LMS)', time: '09:12:05', loc: 'Moodle Gateway', status: 'SYNCED', pillClass: 'pill-active', narrative: 'The event bus pulls contextual data from Moodle LMS, revealing 114 hours of inactivity on coursework modules for the same module.', ledger: '{"action": "data_fetch", "source": "moodle_lms", "query": "course_activity", "result": {"inactivity_hrs": 114, "last_login": "2026-09-17T14:22:00Z"}, "status": "success"}' },
    { id: 2, title: 'Nova AI Eval (Risk Model)', time: '09:12:07', loc: 'Nova Supervisor Agent', status: 'EVALUATED', pillClass: 'pill-active', narrative: 'The Nova Supervisor Agent ingests the attendance flag and LMS inactivity. Cross-referencing her work profile, it notes a 16-hour weekend barista shift. Burnout probability assessed at 87%.', ledger: '{"agent": "worldlynk-supervisor-agent", "runtime": "nova_mastra_v4", "inputs": ["attendance_miss_3", "lms_inactive_114h", "work_shift_16h"], "output": {"risk_score": 0.87, "reason": "fatigue_indicator"}}' },
    { id: 3, title: 'Arbiter Gate (Compass Governance)', time: '09:12:08', loc: 'Compass Arbiter', status: 'HELD', pillClass: 'pill-held', narrative: 'Tier-4 UKVI compliance threshold breached. Autonomous remediation is HELD. Policy dictates human-in-the-loop approval by Senior Tutor on Compass before changes commit.', ledger: '{"governance_check": "tier_4_policy", "rule_id": "pol_742", "action_required": "human_approval", "assigned_to": "tutor_jenkins", "state": "pending"}' },
    { id: 4, title: 'Audit Seal & Execution', time: '09:14:22', loc: 'Senior Tutor & SITS', status: 'SEALED', pillClass: 'pill-approved', narrative: 'Dr. Jenkins reviews the summarized context via the Compass Portal and approves a wellbeing intervention. SITS:Vision is updated with an immutable SHA-256 audit log.', ledger: '{"approval": "granted", "approver": "tutor_jenkins", "timestamp": "2026-09-23T09:14:22Z", "downstream_sync": ["sits_vision", "wellbeing_crm"], "hash": "sha256:8b4f...d1a9"}' }
  ];

  const architecturePillars = [
    { id: 'fabric', num: '01', name: 'Fabric', desc: 'The nervous system. High-throughput event bus connecting legacy on-prem systems with modern cloud infrastructure.', tech: ['Redis Pub/Sub', 'BullMQ Workers', 'WebSockets', 'GraphQL API'], activeColor: '#ff6b00', metrics: { coverage: 98, latency: 12, uptime: 99.99 } },
    { id: 'graph', num: '02', name: 'Data Plane', desc: 'The memory. Unified identity resolution mapping students across Compass and WorldLynk apps into a shared schema.', tech: ['Firestore Data Plane', 'users/{uid} Identity', 'Redis Graph Cache', 'LibSQL Vector'], activeColor: '#3b82f6', metrics: { coverage: 100, latency: 18, uptime: 99.95 } },
    { id: 'nova', num: '03', name: 'Nova AI Engine', desc: 'The autonomous AI brain. 30 specialized agents and 12 deterministic Mastra DAG workflows evaluating thousands of institutional signals.', tech: ['30 Nova Agents', '12 Deterministic DAGs', 'Realtime Voice WebRTC', 'LibSQL Vector Memory', 'Omni-Channel Gateways'], activeColor: '#8b5cf6', metrics: { coverage: 94, latency: 180, uptime: 99.99 } },
    { id: 'arbiter', num: '04', name: 'Arbiter & Compass', desc: 'The conscience & console. Immutable governance layer ensuring no automated action breaches compliance, ethics, or UKVI rules.', tech: ['Compass Portal', 'Policy Engine', 'Audit Ledger', 'Human-in-the-loop UI', 'SHA-256 Signatures'], activeColor: '#10b981', metrics: { coverage: 100, latency: 5, uptime: 100 } },
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
              <div className="mono-label" style={{ color: 'var(--wl-accent)', marginBottom: '1rem' }}>AUTONOMOUS CAMPUS OPERATING LAYER</div>
              <h1 className="headline-xl" style={{ marginBottom: '1.5rem', lineHeight: 1.1 }}>The living multi-agent fabric for sovereign higher education.</h1>
              <p className="body-lg text-secondary" style={{ marginBottom: '2.5rem', maxWidth: '540px' }}>
                Unify SITS:Vision, Moodle, dynamic QR attendance, and campus housing into a single deterministic nervous system. Empower leadership with real-time telemetry and automated governance.
              </p>
              <div className="flex gap-md" style={{ flexWrap: 'wrap', alignItems: 'center' }}>
                <Link to="/demo" className="btn-primary" style={{ padding: '0.9rem 1.8rem', fontSize: '1rem' }}>Request Executive Briefing</Link>
                <a href={COMPASS_BACKEND_URL} target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '0.9rem 1.5rem', fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(255, 107, 0, 0.35)', background: 'rgba(255, 107, 0, 0.08)' }}>
                  <span style={{ color: '#ff8833', fontWeight: 600 }}>Staff Console</span> <ExternalLink size={15} color="#ff8833" />
                </a>
                <a href={STUDENT_PLATFORM_URL} target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '0.9rem 1.5rem', fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(56, 189, 248, 0.35)', background: 'rgba(56, 189, 248, 0.08)' }}>
                  <span style={{ color: '#38bdf8', fontWeight: 600 }}>Student App</span> <ExternalLink size={15} color="#38bdf8" />
                </a>
              </div>
            </div>
            
            {/* Right Mockup */}
            <div style={{ perspective: '1000px' }}>
              <div className="mockup-window" style={{ transform: 'rotateY(-5deg) rotateX(2deg)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 107, 0, 0.2)' }}>
                <div className="mockup-chrome flex flex-between" style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #2a2a35' }}>
                  <div className="flex gap-sm">
                    <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ff5f56' }} />
                    <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
                    <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#27c93f' }} />
                  </div>
                  <div className="mono-sm text-muted">COMPASS_OS :: SYSTEM_TELEMETRY</div>
                </div>
                <div className="mockup-body" style={{ padding: '1.5rem', backgroundColor: '#0c0c0f' }}>
                  <div className="flex flex-col gap-md">
                    <div className="flex flex-between" style={{ paddingBottom: '0.75rem', borderBottom: '1px dashed #2a2a35' }}>
                      <div className="flex gap-sm alignItems-center"><Network size={16} className="text-secondary"/> <span className="mono-sm">API Gateway</span></div>
                      <div className="flex gap-sm alignItems-center"><span className="mono-sm">12ms</span> <div style={{width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--status-pass)'}}/></div>
                    </div>
                    <div className="flex flex-between" style={{ paddingBottom: '0.75rem', borderBottom: '1px dashed #2a2a35' }}>
                      <div className="flex gap-sm alignItems-center"><Server size={16} className="text-secondary"/> <span className="mono-sm">Redis PubSub</span></div>
                      <div className="flex gap-sm alignItems-center"><span className="mono-sm text-secondary">Healthy</span> <div style={{width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--status-pass)'}}/></div>
                    </div>
                    <div className="flex flex-between" style={{ paddingBottom: '0.75rem', borderBottom: '1px dashed #2a2a35' }}>
                      <div className="flex gap-sm alignItems-center"><Shield size={16} className="text-secondary"/> <span className="mono-sm">Arbiter Gate</span></div>
                      <div className="flex gap-sm alignItems-center"><span className="mono-sm" style={{color: '#f59e0b'}}>Enforcing</span> <div style={{width: 8, height: 8, borderRadius: '50%', backgroundColor: '#f59e0b'}}/></div>
                    </div>
                    <div className="flex flex-between" style={{ paddingBottom: '0.75rem', borderBottom: '1px dashed #2a2a35' }}>
                      <div className="flex gap-sm alignItems-center"><Users size={16} className="text-secondary"/> <span className="mono-sm">Active Rosters</span></div>
                      <span className="mono-sm">14,892</span>
                    </div>
                    <div className="flex flex-between" style={{ paddingBottom: '0.75rem', borderBottom: '1px dashed #2a2a35' }}>
                      <div className="flex gap-sm alignItems-center"><Bot size={16} className="text-secondary"/> <span className="mono-sm">Nova Agents</span></div>
                      <div className="flex gap-sm alignItems-center"><span className="mono-sm">30 Online</span> <div style={{width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--status-pass)'}}/></div>
                    </div>
                    <div className="flex flex-between">
                      <div className="flex gap-sm alignItems-center"><GitCommit size={16} className="text-secondary"/> <span className="mono-sm">SITS Sync</span></div>
                      <span className="mono-sm" style={{color: 'var(--status-pass)'}}>Real-time</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Telemetry bar */}
          <div style={{ marginTop: '4rem', padding: '1rem', borderTop: '1px solid #2a2a35', borderBottom: '1px solid #2a2a35', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <div className="mono-sm text-muted">FABRIC_UPTIME: 99.998%</div>
            <div className="mono-sm text-muted">LAST_AUDIT: {new Date().toISOString().split('T')[1].substring(0,8)}Z</div>
            <div className="mono-sm text-muted">PENDING_QUEUES: 0</div>
            <div className="mono-sm text-muted">SEC_PROTOCOL: TLS 1.3 / AES-256</div>
          </div>
        </div>
      </section>

      {/* SECTION 2: NOVA AI MULTI-AGENT ENGINE (DARK) */}
      <section className="section" style={{ borderTop: '1px solid #1a1a24' }}>
        <div className="main-container">
          <div className="section-header-left mb-xl">
            <div className="mono-label" style={{ color: 'var(--wl-accent)' }}>NOVA AI INFRASTRUCTURE · 30 SPECIALIST AGENTS &amp; 12 WORKFLOWS</div>
            <h2 className="headline-lg">Every campus decision routed through Nova's deterministic multi-agent brain.</h2>
            <p className="body-md text-secondary" style={{ maxWidth: '780px', marginTop: '8px' }}>
              Built on the Mastra TypeScript framework with LibSQL vector memory and Exa live web search, Nova coordinates 30 specialized AI agents across admissions, student persistence, accommodation, and careers.
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
                    placeholder="Search agents by name or role..." 
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
                      <div className="mono-label text-muted mb-sm" style={{ fontSize: '0.75rem' }}>DATA INGESTION (READ)</div>
                      <div className="flex gap-sm flex-wrap">
                        {selectedAgent.read.map((r, i) => <span key={i} className="badge badge-cyan">{r}</span>)}
                      </div>
                    </div>
                    <div>
                      <div className="mono-label text-muted mb-sm" style={{ fontSize: '0.75rem' }}>DETERMINISTIC ACTION (WRITE)</div>
                      <div className="flex gap-sm flex-wrap">
                        {selectedAgent.action.map((a, i) => <span key={i} className="badge badge-purple">{a}</span>)}
                      </div>
                    </div>
                  </div>

                  <div className="divider" style={{ borderTop: '1px solid #2a2a35', margin: '2rem 0' }}></div>

                  <div className="flex flex-between alignItems-center flex-wrap gap-md">
                    <div>
                      <div className="mono-label text-muted mb-sm" style={{ fontSize: '0.75rem' }}>DELIVERY CHANNELS</div>
                      <div className="flex gap-sm flex-wrap">
                        {selectedAgent.channels.map((c, i) => <span key={i} className="mono-sm" style={{ color: '#e4e4e7' }}>[{c}]</span>)}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div className="mono-label text-muted mb-sm" style={{ fontSize: '0.75rem' }}>INSTITUTIONAL OWNER</div>
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
            <div className="mono-label" style={{ color: 'var(--wl-accent)' }}>INCIDENT CASCADE SIMULATION</div>
            <h2 className="headline-lg">Maya Chen — Cross-Office Intervention</h2>
            <p className="body-md text-secondary" style={{ maxWidth: '600px', margin: '1rem auto 0' }}>Trace how a single missed attendance scan cascades through multiple deterministic systems to trigger a human-in-the-loop wellbeing intervention.</p>
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
                    <span style={{ color: '#f59e0b', fontWeight: 600, fontSize: '0.9rem' }}>Human Approval Required</span>
                  </div>
                  <button 
                    className="btn-primary" 
                    style={{ width: '100%', padding: '0.75rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
                    onClick={() => setActiveCascadeStep(4)}
                  >
                    Approve Intervention & Seal <Check size={16} />
                  </button>
                </div>
              )}
            </div>

            {/* Terminal Ledger */}
            <div className="mockup-window" style={{ backgroundColor: '#000', border: '1px solid #333' }}>
              <div className="mockup-chrome flex flex-between" style={{ padding: '0.5rem 1rem', borderBottom: '1px solid #333', backgroundColor: '#111' }}>
                <span className="mono-sm text-muted">fabric_ledger_stdout</span>
              </div>
              <div className="mockup-body" style={{ padding: '1.5rem', fontFamily: 'monospace', fontSize: '0.85rem', color: '#a1a1aa', overflowX: 'auto', whiteSpace: 'pre-wrap' }}>
                <div style={{ color: '#4ade80', marginBottom: '1rem' }}>$ tail -f /var/log/fabric/events.log | jq .</div>
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
            <div className="mono-label" style={{ color: 'var(--wl-accent)' }}>ARCHITECTURE PILLARS</div>
            <h2 className="headline-lg" style={{ color: '#0c0c0f' }}>Four sovereign layers, one deterministic fabric.</h2>
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
                  <h3 className="headline-lg mb-md" style={{ color: '#0c0c0f' }}>{activePillar.name} Infrastructure</h3>
                  <p className="body-lg mb-lg" style={{ color: '#52525b' }}>Deep dive into the operational metrics and technical capabilities of the {activePillar.name.toLowerCase()} layer deployed on your sovereign campus cloud.</p>
                  
                  <div className="flex flex-col gap-md">
                    <div>
                      <div className="flex flex-between mb-xs">
                        <span className="mono-sm" style={{ fontWeight: 600 }}>System Coverage</span>
                        <span className="mono-sm">{activePillar.metrics.coverage}%</span>
                      </div>
                      <div className="comp-bar-track" style={{ height: '8px', backgroundColor: '#e4e4e7', borderRadius: '4px', overflow: 'hidden' }}>
                        <div className="comp-bar-fill" style={{ height: '100%', width: `${activePillar.metrics.coverage}%`, backgroundColor: activePillar.activeColor, transition: 'width 0.5s ease' }} />
                      </div>
                    </div>
                    
                    <div className="grid-2 gap-md mt-md">
                      <div style={{ padding: '1rem', backgroundColor: '#f4f4f5', borderRadius: '8px' }}>
                        <div className="mono-label text-muted mb-xs" style={{ fontSize: '0.7rem' }}>P99 LATENCY</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0c0c0f' }}>{activePillar.metrics.latency}ms</div>
                      </div>
                      <div style={{ padding: '1rem', backgroundColor: '#f4f4f5', borderRadius: '8px' }}>
                        <div className="mono-label text-muted mb-xs" style={{ fontSize: '0.7rem' }}>TARGET UPTIME</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0c0c0f' }}>{activePillar.metrics.uptime}%</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem', backgroundColor: '#f4f4f5', borderRadius: '12px', minHeight: '300px' }}>
                   {/* Abstract visualization of the layer */}
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
            <div className="mono-label" style={{ color: 'var(--wl-accent)' }}>DUAL OPERATING SYSTEM</div>
            <h2 className="headline-lg">Two interfaces, one fabric.</h2>
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
                Staff OS (Compass)
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
                Student OS (Super-App)
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
                          <th style={{ padding: '1rem', color: '#a1a1aa', fontWeight: 500, fontSize: '0.875rem' }}>Dept</th>
                          <th style={{ padding: '1rem', color: '#a1a1aa', fontWeight: 500, fontSize: '0.875rem' }}>Signal</th>
                          <th style={{ padding: '1rem', color: '#a1a1aa', fontWeight: 500, fontSize: '0.875rem' }}>Status</th>
                          <th style={{ padding: '1rem', color: '#a1a1aa', fontWeight: 500, fontSize: '0.875rem' }}>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ borderBottom: '1px solid #1a1a24' }}>
                          <td style={{ padding: '1rem' }}><div style={{ fontWeight: 500 }}>James Thorne</div><div className="mono-sm text-muted">ID: 847291</div></td>
                          <td style={{ padding: '1rem', color: '#e4e4e7' }}>Engineering</td>
                          <td style={{ padding: '1rem' }}><span className="source-badge source-badge-attendance" style={{ color: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.1)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem' }}>QR Miss (3x)</span></td>
                          <td style={{ padding: '1rem' }}><span className="pill pill-held">Held by Arbiter</span></td>
                          <td style={{ padding: '1rem' }}><button className="btn-sm" style={{ backgroundColor: '#2a2a35', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', color: 'white', cursor: 'pointer' }}>Review</button></td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid #1a1a24' }}>
                          <td style={{ padding: '1rem' }}><div style={{ fontWeight: 500 }}>Sarah Jenkins</div><div className="mono-sm text-muted">ID: 921104</div></td>
                          <td style={{ padding: '1rem', color: '#e4e4e7' }}>Business</td>
                          <td style={{ padding: '1rem' }}><span className="source-badge source-badge-lms" style={{ color: '#f59e0b', backgroundColor: 'rgba(245, 158, 11, 0.1)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem' }}>LMS Inactive (72h)</span></td>
                          <td style={{ padding: '1rem' }}><span className="pill pill-active">Agent Nudging</span></td>
                          <td style={{ padding: '1rem' }}><button className="btn-sm" style={{ backgroundColor: 'transparent', border: '1px solid #2a2a35', padding: '0.5rem 1rem', borderRadius: '4px', color: '#a1a1aa', cursor: 'pointer' }}>View Log</button></td>
                        </tr>
                        <tr>
                          <td style={{ padding: '1rem' }}><div style={{ fontWeight: 500 }}>Aisha Patel</div><div className="mono-sm text-muted">ID: 773829</div></td>
                          <td style={{ padding: '1rem', color: '#e4e4e7' }}>Law</td>
                          <td style={{ padding: '1rem' }}><span className="source-badge source-badge-sis" style={{ color: '#10b981', backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem' }}>Visa Doc Uploaded</span></td>
                          <td style={{ padding: '1rem' }}><span className="pill pill-approved">Auto-Verified</span></td>
                          <td style={{ padding: '1rem' }}><button className="btn-sm" style={{ backgroundColor: 'transparent', border: '1px solid #2a2a35', padding: '0.5rem 1rem', borderRadius: '4px', color: '#a1a1aa', cursor: 'pointer' }}>Audit Trail</button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <a href={COMPASS_BACKEND_URL} target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '0.75rem 1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  Explore Compass Portal <ArrowRight size={16} />
                </a>
              </div>
            </div>
          )}

          {activeOS === 'student' && (
            <div className="animate-fade-in">
              <div className="grid-3 gap-md">
                <div className="card-dark" style={{ padding: '1.5rem', backgroundColor: '#131318', border: '1px solid #2a2a35', borderRadius: '8px' }}>
                  <Clock size={24} style={{ color: 'var(--wl-accent)', marginBottom: '1rem' }} />
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Daily Timeline</h4>
                  <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Deterministic routing of classes, society events, and deadlines into a single feed.</p>
                </div>
                <div className="card-dark" style={{ padding: '1.5rem', backgroundColor: '#131318', border: '1px solid #2a2a35', borderRadius: '8px' }}>
                  <MessageCircle size={24} style={{ color: 'var(--wl-accent)', marginBottom: '1rem' }} />
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Nova AI Chat</h4>
                  <p className="text-secondary" style={{ fontSize: '0.9rem' }}>24/7 autonomous support mapped directly to university knowledge bases.</p>
                </div>
                <div className="card-dark" style={{ padding: '1.5rem', backgroundColor: '#131318', border: '1px solid #2a2a35', borderRadius: '8px' }}>
                  <Building size={24} style={{ color: 'var(--wl-accent)', marginBottom: '1rem' }} />
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Housing Ops</h4>
                  <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Log maintenance, request swaps, and manage tenancy docs natively.</p>
                </div>
                <div className="card-dark" style={{ padding: '1.5rem', backgroundColor: '#131318', border: '1px solid #2a2a35', borderRadius: '8px' }}>
                  <Users size={24} style={{ color: 'var(--wl-accent)', marginBottom: '1rem' }} />
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Career Match</h4>
                  <p className="text-secondary" style={{ fontSize: '0.9rem' }}>CV parsing and automated matching to local part-time work or grad schemes.</p>
                </div>
                <div className="card-dark" style={{ padding: '1.5rem', backgroundColor: '#131318', border: '1px solid #2a2a35', borderRadius: '8px' }}>
                  <Activity size={24} style={{ color: 'var(--wl-accent)', marginBottom: '1rem' }} />
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Dynamic QR</h4>
                  <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Sub-180ms rotating QR for spoof-proof attendance logging.</p>
                </div>
                <div className="card-dark" style={{ padding: '1.5rem', backgroundColor: '#131318', border: '1px solid #2a2a35', borderRadius: '8px' }}>
                  <Globe size={24} style={{ color: 'var(--wl-accent)', marginBottom: '1rem' }} />
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Pre-Departure</h4>
                  <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Checklists and visa prep for international students before they arrive.</p>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                <Link to="/student-os" className="btn-secondary" style={{ padding: '0.75rem 1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#131318', border: '1px solid #2a2a35', color: 'white' }}>
                  Explore Student OS <ArrowRight size={16} />
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
            <div className="mono-label" style={{ color: 'var(--wl-accent)' }}>INTEGRATION MATRIX</div>
            <h2 className="headline-lg" style={{ color: '#0c0c0f' }}>Pre-built connectors for your existing infrastructure.</h2>
          </div>

          <div className="grid-auto gap-md" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
            {[
              { name: 'SITS:Vision', cat: 'SIS', type: 'Bi-directional', icon: Database },
              { name: 'Ellucian Banner', cat: 'SIS', type: 'Bi-directional', icon: Database },
              { name: 'Moodle LMS', cat: 'Learning', type: 'Read-only Sync', icon: GraduationCap },
              { name: 'Canvas LMS', cat: 'Learning', type: 'Read-only Sync', icon: GraduationCap },
              { name: 'Stripe Connect', cat: 'Payments', type: 'Webhooks', icon: HardDrive },
              { name: 'Algolia Search', cat: 'Discovery', type: 'Index Sync', icon: Search },
              { name: 'WhatsApp (Baileys)', cat: 'Messaging', type: 'Bi-directional', icon: MessageSquare },
              { name: 'Telegram Bot', cat: 'Messaging', type: 'Bi-directional', icon: MessageSquare },
              { name: 'BullMQ & Redis', cat: 'Infrastructure', type: 'Queueing', icon: Server },
              { name: 'Firebase', cat: 'Auth/Push', type: 'Real-time', icon: Zap },
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
              View all 40+ connectors <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7: ROI SIMULATOR (DARK) */}
      <section className="section" style={{ borderTop: '1px solid #1a1a24' }}>
        <div className="main-container">
          <div className="section-header-left mb-xl">
            <div className="mono-label" style={{ color: 'var(--wl-accent)' }}>INSTITUTIONAL ECONOMICS</div>
            <h2 className="headline-lg">Quantified impact on retention and compliance.</h2>
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
                *Projections based on aggregate data from pilot institutions reducing attrition by ~5.8% and automating routine registry queries.
              </p>
            </div>

            {/* Metrics */}
            <div className="grid-2 gap-md">
              <div className="card-dark" style={{ padding: '1.5rem', backgroundColor: '#1a1a24', borderRadius: '8px', border: '1px solid #2a2a35', borderLeft: '4px solid var(--wl-accent)' }}>
                <div className="mono-label text-muted mb-sm" style={{ fontSize: '0.75rem' }}>PREVENTED ATTRITIONS / YR</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white', marginBottom: '0.25rem' }}>{savedStudents}</div>
                <div className="body-sm text-secondary">Students flagged & retained</div>
              </div>
              
              <div className="card-dark" style={{ padding: '1.5rem', backgroundColor: '#1a1a24', borderRadius: '8px', border: '1px solid #2a2a35', borderLeft: '4px solid var(--status-pass)' }}>
                <div className="mono-label text-muted mb-sm" style={{ fontSize: '0.75rem' }}>RECOVERED REVENUE / YR</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white', marginBottom: '0.25rem' }}>£{(recoveredRevenue / 1000000).toFixed(1)}M</div>
                <div className="body-sm text-secondary">Protected tuition fees</div>
              </div>
              
              <div className="card-dark" style={{ padding: '1.5rem', backgroundColor: '#1a1a24', borderRadius: '8px', border: '1px solid #2a2a35', borderLeft: '4px solid #e4e4e7' }}>
                <div className="mono-label text-muted mb-sm" style={{ fontSize: '0.75rem' }}>ADMIN HOURS SAVED / YR</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white', marginBottom: '0.25rem' }}>{(adminHours / 1000).toFixed(1)}k</div>
                <div className="body-sm text-secondary">Automated via Nova AI Engine</div>
              </div>
              
              <div className="card-dark" style={{ padding: '1.5rem', backgroundColor: '#1a1a24', borderRadius: '8px', border: '1px solid #2a2a35', borderLeft: '4px solid var(--status-pass)' }}>
                <div className="mono-label text-muted mb-sm" style={{ fontSize: '0.75rem' }}>UKVI AUDIT RISK</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--status-pass)', marginBottom: '0.25rem' }}>0.0%</div>
                <div className="body-sm text-secondary">Deterministic compliance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: TRUST & CTA (DARK) */}
      <section className="section" style={{ backgroundColor: '#09090b', borderTop: '1px solid #1a1a24', paddingBottom: '8rem' }}>
        <div className="main-container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <div className="mono-label mb-md" style={{ color: 'var(--wl-accent)' }}>INSTITUTIONAL ONBOARDING</div>
          <h2 className="headline-xl mb-lg" style={{ lineHeight: 1.1 }}>Deploy sovereign campus intelligence this academic term.</h2>
          <p className="body-lg text-secondary mb-xl" style={{ maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Join leading UK institutions bridging legacy systems with deterministic AI. Schedule a tailored demonstration with our architecture team.
          </p>
          
          <div className="flex gap-md justify-center mb-xl" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/demo" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Book Tailored Consultation</Link>
            <Link to="/trust" className="btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', backgroundColor: '#131318', border: '1px solid #2a2a35', color: 'white' }}>Review Trust & Security Hub</Link>
          </div>
          
          {/* Trust Badges */}
          <div className="trust-row flex gap-lg justify-center" style={{ flexWrap: 'wrap', opacity: 0.7 }}>
            <div className="trust-item flex gap-sm alignItems-center">
              <ShieldCheck size={18} className="text-secondary" />
              <span className="mono-sm text-secondary">SOC-2 Type II</span>
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
              <span className="mono-sm text-secondary">Sub-180ms QR HMAC</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
