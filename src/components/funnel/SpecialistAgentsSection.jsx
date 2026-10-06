import React, { useState } from 'react';
import { 
  Bot, ShieldCheck, FileText, Building, Cpu, Users, 
  Clock, Globe, Database, ArrowRight, Search, CheckCircle2, 
  Sparkles, Zap, Lock, Compass, GraduationCap, ChevronRight
} from 'lucide-react';

export default function SpecialistAgentsSection() {
  const [selectedAgentId, setSelectedAgentId] = useState('supervisor');
  const [searchQuery, setSearchQuery] = useState('');
  const [lifecycleFilter, setLifecycleFilter] = useState('all');

  const agents = [
    {
      id: 'supervisor',
      name: 'Nova Campus Supervisor',
      role: 'Master Orchestration & Policy Governance',
      lifecycleZone: 'Entire Lifecycle (Stages 01–11)',
      tagColor: '#ff6b00',
      desc: 'Oversees multi-agent handoffs, validates data-sharing consent across all touchpoints, checks institutional regulations, and routes consequential decisions to human staff via Compass.',
      trigger: 'Any cross-departmental event or risk threshold triggered across the campus ecosystem.',
      reads: ['Institutional Policy Rules', 'Student Consent State', 'Cross-System Event Stream'],
      actions: ['Orchestrates Multi-Agent Handoffs', 'Prepares Staff Decision Packets', 'Enforces UK GDPR Boundaries'],
      owner: 'University Registry & Senior Leadership',
      channels: ['Compass Staff Console', 'System Event Broker'],
      humanControl: 'Mandatory staff sign-off required for any consequential academic or visa change.',
      icon: ShieldCheck
    },
    {
      id: 'recruitment',
      name: 'Prospect & Intent Agent',
      role: 'Discovery, Inquiry & Intent Scoring',
      lifecycleZone: 'Discover & Convert (Stages 01–04)',
      tagColor: '#ff6b00',
      desc: 'Engages prospective students on course pages, answers admissions questions 24/7, scores qualification readiness, and prepares high-intent prospect signals for regional recruitment teams.',
      trigger: 'Student initiates course enquiry, asks fee questions, or submits academic background.',
      reads: ['Course Curriculum & Fees', 'English Waiver Rules', 'Entry Grade Thresholds'],
      actions: ['Scores Prospect Intent (0-100)', 'Prepares Tailored Entry Checklist', 'Alerts Recruitment Desk with Consent'],
      owner: 'International Recruitment & Marketing',
      channels: ['University Web Portals', 'WhatsApp', 'Campaign Pages'],
      humanControl: 'Human advisors take over whenever student requests live guidance or scholarship consultation.',
      icon: Users
    },
    {
      id: 'admissions',
      name: 'Admissions & Credential Agent',
      role: 'Document Verification & CAS Dossier Assembly',
      lifecycleZone: 'Discover & Convert (Stages 05–06)',
      tagColor: '#ff6b00',
      desc: 'Assists international admissions officers by parsing overseas transcripts, checking qualification equivalencies against Ecctis/NARIC guidelines, and assembling CAS-ready files.',
      trigger: 'Applicant uploads degree transcripts, statement of purpose, or passport copy.',
      reads: ['Uploaded Academic Transcripts', 'Ecctis Equivalency Standards', 'English Language Certificates'],
      actions: ['Verifies Document Completeness', 'Flags Inconsistencies for Human Review', 'Drafts CAS Data Sheet'],
      owner: 'International Admissions Office',
      channels: ['Compass Admissions Portal', 'Applicant Dashboard'],
      humanControl: '100% human admissions officer approval required before issuing any CAS or offer letter.',
      icon: FileText
    },
    {
      id: 'pre_arrival',
      name: 'Pre-Arrival & Visa Agent',
      role: 'Student Visa Timelines, Biometrics & Settlement Prep',
      lifecycleZone: 'Enrol & Operate (Stage 07)',
      tagColor: '#38bdf8',
      desc: 'Guides international students through the student visa application lifecycle, sends biometric appointment reminders, logs flight arrivals, and coordinates university arrival welcome hubs.',
      trigger: 'Offer accepted and tuition deposit verified in student finance.',
      reads: ['Visa Application Timelines', 'Flight Arrival Itineraries', 'Campus Orientation Rota'],
      actions: ['Generates Visa Readiness Timeline', 'Schedules Airport Welcome Pickup', 'Issues International Arrival Checklist'],
      owner: 'International Student Support',
      channels: ['WorldLynk Student App', 'WhatsApp', 'Email Alerts'],
      humanControl: 'Complex visa queries automatically routed to certified campus Immigration & Compliance Advisors.',
      icon: Globe
    },
    {
      id: 'housing',
      name: 'Student Housing & Tenancy Agent',
      role: 'Accommodation Matching & Digital Room Access',
      lifecycleZone: 'Enrol & Operate (Stages 07–08)',
      tagColor: '#38bdf8',
      desc: 'Matches incoming students with verified, vetted university halls and approved private student accommodation. Eliminates rental scams and automates digital tenancy agreements.',
      trigger: 'Student receives conditional/unconditional offer or logs accommodation preference.',
      reads: ['Campus Halls Inventory', 'Approved Partner Listings', 'Room Preferences & Budget'],
      actions: ['Matches Verified Available Rooms', 'Generates Tenancy Pack', 'Issues Digital Room Key to App'],
      owner: 'Accommodation & Residential Services',
      channels: ['Student App', 'Housing Desk Portal'],
      humanControl: 'Room disputes and special accessibility requirements managed directly by housing officers.',
      icon: Building
    },
    {
      id: 'learning',
      name: 'Academic & Learning Copilot',
      role: 'Moodle / Canvas Sync & Timetable Guidance',
      lifecycleZone: 'Engage & Succeed (Stages 08–09)',
      tagColor: '#10b981',
      desc: 'Connects directly with Moodle and Canvas to answer syllabus questions, organize assignment deadlines, sync timetables, and remind students of upcoming seminar locations.',
      trigger: 'Daily timetable update, assignment due date approaching, or student syllabus question.',
      reads: ['Moodle / Canvas Course Materials', 'Timetable Syllabus', 'Campus Building Maps'],
      actions: ['Delivers Daily Schedule Digest', 'Sends 48h Coursework Deadlines', 'Provides Room Walking Directions'],
      owner: 'Academic Departments & Faculty',
      channels: ['Student App', 'Web Learning Dashboard'],
      humanControl: 'Academic queries regarding grading or appeals routed directly to module convenors.',
      icon: Cpu
    },
    {
      id: 'welfare',
      name: 'Student Welfare & Persistence Agent',
      role: 'Early Dropout Indicators & Caring Check-Ins',
      lifecycleZone: 'Engage & Succeed (Stage 10)',
      tagColor: '#10b981',
      desc: 'Analyzes subtle signals — such as missed morning lectures combined with prolonged LMS inactivity — to identify students experiencing burnout or personal distress before they drop out.',
      trigger: '3 consecutive missed lectures + 4+ days inactivity on coursework portal.',
      reads: ['Lecture Attendance Logs', 'LMS Login Activity', 'Library Check-in Patterns'],
      actions: ['Identifies Welfare Risk Factors', 'Drafts Supportive Tutor Check-In', 'Alerts Compass Welfare Queue'],
      owner: 'Student Welfare & Senior Personal Tutors',
      channels: ['Compass Staff Console', 'WhatsApp (After Tutor Approval)'],
      humanControl: 'AI never sends messages autonomously. Senior Tutor reviews, edits, and signs off check-in first.',
      icon: Clock
    },
    {
      id: 'compliance',
      name: 'Visa Work-Cap & Compliance Agent',
      role: 'Strict 20-Hour Weekly Work Limit Safeguard',
      lifecycleZone: 'Engage & Succeed (Stages 09–11)',
      tagColor: '#10b981',
      desc: 'Protects international students from inadvertently breaching their 20-hour weekly term-time visa work conditions. Issues official verification letters to vetted campus employers.',
      trigger: 'Student logs campus employment shift or applies for part-time role.',
      reads: ['Weekly Campus Work Rota', 'Term-Time vs Vacation Dates', 'Student Route Visa Regulations'],
      actions: ['Calculates Running Weekly Hours', 'Issues Official Employer Work Letter', 'Generates 100% Audit-Proof Logs'],
      owner: 'Visa Compliance & Student Employment',
      channels: ['Student App', 'Compass Compliance Console'],
      humanControl: 'Compliance officers have real-time visibility into all logged hours with exportable audit logs.',
      icon: Lock
    },
    {
      id: 'career',
      name: 'CV & Post-Study Career Coach',
      role: 'ATS Tailoring, Mock Interviews & Graduate Jobs',
      lifecycleZone: 'Engage & Succeed (Stage 11)',
      tagColor: '#10b981',
      desc: 'Helps students prepare for global graduate employment by tailoring their CV for enterprise applicant tracking systems, running voice mock interviews with spoken feedback, and surfacing verified post-study work visa sponsors.',
      trigger: 'Student uploads CV, seeks campus job, or enters final degree semester.',
      reads: ['Student Academic CV', 'Target Job Descriptions', 'Visa-Compliant Graduate Roles'],
      actions: ['Optimizes CV Format for Global Enterprise ATS', 'Conducts Spoken Voice Mock Interviews', 'Matches Sponsored Graduate Schemes'],
      owner: 'Careers & Employability Service',
      channels: ['Student App', 'Careers Web Portal'],
      humanControl: 'Careers advisors review student CV portfolios for dedicated 1-on-1 coaching sessions.',
      icon: GraduationCap
    }
  ];

  const filteredAgents = agents.filter(a => {
    const matchesSearch = a.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          a.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          a.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesZone = lifecycleFilter === 'all' || a.lifecycleZone.toLowerCase().includes(lifecycleFilter.toLowerCase());
    return matchesSearch && matchesZone;
  });

  const selectedAgent = agents.find(a => a.id === selectedAgentId) || agents[0];
  const SelectedIcon = selectedAgent.icon;

  return (
    <section className="section" style={{ backgroundColor: '#0b0c11', borderTop: '1px solid #1a1a26', position: 'relative' }}>
      <div className="main-container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 3rem' }}>
          <div className="mono-label" style={{ color: 'var(--wl-accent)', marginBottom: '0.75rem' }}>
            AUTONOMOUS CAMPUS SPECIALIST AGENTS
          </div>
          <h2 className="headline-lg" style={{ marginBottom: '1rem', color: '#ffffff' }}>
            Role-Specific Agents Built for Campus Workflows
          </h2>
          <p className="body-lg text-secondary" style={{ lineHeight: 1.6 }}>
            Not a generic conversational chatbot. WorldLynk deploys specialized, autonomous agents that act directly on 
            admissions, welfare, compliance, and career workflows — with <strong>human staff always in control</strong>.
          </p>

          {/* Quick Lifecycle Filters */}
          <div style={{ display: 'inline-flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginTop: '1.5rem' }}>
            {[
              { id: 'all', label: 'All 9 Core Agents' },
              { id: 'discover', label: 'Pre-Enrolment (Stages 01–06)' },
              { id: 'enrol', label: 'Transition & Operations (Stages 07–08)' },
              { id: 'engage', label: 'Campus Life & Careers (Stages 09–11)' }
            ].map(f => (
              <button
                key={f.id}
                type="button"
                onClick={() => setLifecycleFilter(f.id)}
                style={{
                  padding: '0.4rem 0.9rem',
                  borderRadius: '20px',
                  fontSize: '0.76rem',
                  fontWeight: lifecycleFilter === f.id ? 700 : 500,
                  backgroundColor: lifecycleFilter === f.id ? 'var(--wl-accent)' : '#161722',
                  color: lifecycleFilter === f.id ? '#ffffff' : '#9ca3af',
                  border: '1px solid',
                  borderColor: lifecycleFilter === f.id ? 'var(--wl-accent)' : '#262738',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Cortex View */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 380px) 1fr', gap: '2rem', alignItems: 'start' }}>
          
          {/* Left Column: Agent Selection List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            {/* Search Input */}
            <div style={{ position: 'relative' }}>
              <Search size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#6b7280' }} />
              <input
                type="text"
                placeholder="Search specialist agents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.65rem 0.75rem 0.65rem 2.5rem',
                  borderRadius: '8px',
                  backgroundColor: '#12131c',
                  border: '1px solid #252636',
                  color: '#ffffff',
                  fontSize: '0.85rem'
                }}
              />
            </div>

            {/* Agent List Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '580px', overflowY: 'auto', paddingRight: '4px' }}>
              {filteredAgents.map(ag => {
                const isSelected = selectedAgentId === ag.id;
                const Icon = ag.icon;
                return (
                  <div
                    key={ag.id}
                    onClick={() => setSelectedAgentId(ag.id)}
                    style={{
                      padding: '1rem',
                      borderRadius: '8px',
                      backgroundColor: isSelected ? '#191a27' : '#12131a',
                      border: isSelected ? `1px solid ${ag.tagColor}` : '1px solid #232433',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      boxShadow: isSelected ? `0 4px 15px -4px ${ag.tagColor}33` : 'none'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div 
                        style={{ 
                          width: 36, 
                          height: 36, 
                          borderRadius: '8px', 
                          backgroundColor: `${ag.tagColor}15`, 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          color: ag.tagColor,
                          flexShrink: 0
                        }}
                      >
                        <Icon size={18} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>
                          {ag.name}
                        </div>
                        <div style={{ fontSize: '0.72rem', color: '#9ca3af', lineHeight: 1.25 }}>
                          {ag.role}
                        </div>
                      </div>
                    </div>

                    <ChevronRight size={16} style={{ color: isSelected ? ag.tagColor : '#4b5563', flexShrink: 0 }} />
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Selected Agent Deep Inspection Dossier */}
          <div 
            style={{ 
              backgroundColor: '#12131d', 
              borderRadius: '14px', 
              border: `1px solid ${selectedAgent.tagColor}33`, 
              padding: '2.25rem',
              position: 'relative',
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7)'
            }}
          >
            {/* Ambient Watermark Icon */}
            <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', opacity: 0.04, pointerEvents: 'none' }}>
              <SelectedIcon size={160} />
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1.5rem' }}>
                <div 
                  style={{ 
                    width: 52, 
                    height: 52, 
                    borderRadius: '12px', 
                    backgroundColor: `${selectedAgent.tagColor}20`, 
                    border: `1px solid ${selectedAgent.tagColor}40`,
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: selectedAgent.tagColor,
                    flexShrink: 0
                  }}
                >
                  <SelectedIcon size={26} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span 
                      style={{ 
                        fontSize: '0.72rem', 
                        fontFamily: 'var(--font-mono)', 
                        fontWeight: 700, 
                        color: selectedAgent.tagColor,
                        backgroundColor: `${selectedAgent.tagColor}15`,
                        padding: '0.15rem 0.5rem',
                        borderRadius: '4px'
                      }}
                    >
                      {selectedAgent.lifecycleZone}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff' }}>
                    {selectedAgent.name}
                  </h3>
                  <div style={{ fontSize: '0.85rem', color: '#9ca3af', fontWeight: 500 }}>
                    {selectedAgent.role}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p style={{ fontSize: '0.98rem', color: '#e4e4e7', lineHeight: 1.6, marginBottom: '2rem' }}>
                {selectedAgent.desc}
              </p>

              {/* Data & Actions Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                
                {/* Trigger */}
                <div style={{ backgroundColor: '#171825', padding: '1.25rem', borderRadius: '8px', border: '1px solid #28293d' }}>
                  <div className="mono-sm text-muted" style={{ fontSize: '0.72rem', marginBottom: '0.5rem', fontWeight: 700 }}>
                    WHEN THIS AGENT TRIGGERS:
                  </div>
                  <div style={{ fontSize: '0.86rem', color: '#ffffff', lineHeight: 1.45 }}>
                    {selectedAgent.trigger}
                  </div>
                </div>

                {/* Human Control Gate */}
                <div style={{ backgroundColor: '#171825', padding: '1.25rem', borderRadius: '8px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.5rem' }}>
                    <ShieldCheck size={14} style={{ color: '#10b981' }} />
                    <span className="mono-sm" style={{ color: '#10b981', fontSize: '0.72rem', fontWeight: 700 }}>
                      HUMAN-IN-THE-LOOP CONTROL:
                    </span>
                  </div>
                  <div style={{ fontSize: '0.86rem', color: '#ffffff', lineHeight: 1.45 }}>
                    {selectedAgent.humanControl}
                  </div>
                </div>

              </div>

              {/* Sources Read & Actions Executed */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                
                <div>
                  <div className="mono-sm text-muted" style={{ fontSize: '0.72rem', marginBottom: '0.6rem', fontWeight: 700 }}>
                    DATA SOURCES ACCESSED (PERMITTED):
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {selectedAgent.reads.map((r, i) => (
                      <span key={i} className="badge badge-cyan" style={{ fontSize: '0.74rem' }}>
                        {r}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mono-sm text-muted" style={{ fontSize: '0.72rem', marginBottom: '0.6rem', fontWeight: 700 }}>
                    WORKFLOW ACTIONS EXECUTED:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {selectedAgent.actions.map((a, i) => (
                      <span key={i} className="badge badge-purple" style={{ fontSize: '0.74rem' }}>
                        {a}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Metadata: Owner & Channels */}
              <div style={{ borderTop: '1px solid #232437', paddingTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <span className="mono-sm text-muted" style={{ fontSize: '0.7rem' }}>CAMPUS OWNER: </span>
                  <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#f4f4f5' }}>{selectedAgent.owner}</span>
                </div>

                <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  <span className="mono-sm text-muted" style={{ fontSize: '0.7rem' }}>ACTIVE CHANNELS: </span>
                  {selectedAgent.channels.map((ch, idx) => (
                    <span key={idx} style={{ fontSize: '0.72rem', color: '#38bdf8', backgroundColor: 'rgba(56, 189, 248, 0.1)', padding: '0.15rem 0.45rem', borderRadius: '4px' }}>
                      {ch}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
