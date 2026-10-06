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
      name: 'Campus Coordination & Policy Gate',
      role: 'Keeps all campus departments connected & compliant',
      lifecycleZone: 'Entire Student Journey (Stages 01–11)',
      tagColor: '#ff6b00',
      desc: 'Connects information across admissions, housing, welfare, and student records. Whenever an important decision needs to be made, it prepares a clear summary for university staff to review on Compass.',
      trigger: 'Any cross-department event, attendance drop, or student inquiry requiring coordination.',
      reads: ['University Academic Regulations', 'Student Privacy Preferences', 'Campus Event Feeds'],
      actions: ['Prepares Staff Approval Briefs', 'Connects Relevant Team Members', 'Enforces UK & EU GDPR Rules'],
      owner: 'University Registry & Senior Leadership',
      channels: ['Compass Staff Console', 'University Systems'],
      humanControl: 'University staff always make the final call. No academic warnings or status changes are ever sent without human approval.',
      icon: ShieldCheck
    },
    {
      id: 'recruitment',
      name: 'Course Discovery & Inquiry Guide',
      role: 'Welcoming 24/7 course guidance for prospective students',
      lifecycleZone: 'Discover & Apply (Stages 01–04)',
      tagColor: '#ff6b00',
      desc: 'Greets prospective students on course pages, answers admissions and fee questions 24/7, checks international grade equivalencies, and connects high-interest applicants directly to admissions advisors.',
      trigger: 'A prospective student asks about degree requirements, course fees, or scholarships.',
      reads: ['Course Curriculum & Fees', 'English Waiver Benchmarks', 'Entry Grade Thresholds'],
      actions: ['Calculates Qualification Match', 'Prepares Personalized Checklist', 'Introduces Student to Admissions Advisor'],
      owner: 'Admissions & International Recruitment',
      channels: ['University Web Portals', 'Official WhatsApp', 'Course Inquiries'],
      humanControl: 'Human admissions advisors take over conversations whenever a student requests 1-on-1 counseling or scholarship advice.',
      icon: Users
    },
    {
      id: 'admissions',
      name: 'Admissions & Offer Assistant',
      role: 'Fast document verification & offer letter preparation',
      lifecycleZone: 'Discover & Apply (Stages 05–06)',
      tagColor: '#ff6b00',
      desc: 'Assists university admissions officers by reviewing uploaded transcripts, verifying grade comparability against international Ecctis/NARIC guidelines, and assembling offer and CAS paperwork.',
      trigger: 'An applicant uploads high school or degree transcripts, statement of purpose, or passport.',
      reads: ['Academic Transcripts', 'International Credential Equivalencies', 'Language Certificates'],
      actions: ['Checks Document Completeness', 'Highlights Discrepancies for Staff', 'Drafts Offer Letter & CAS Packet'],
      owner: 'Admissions & Credential Teams',
      channels: ['Compass Admissions Desk', 'Applicant Portal'],
      humanControl: '100% human admissions officer sign-off required before any official offer letter or CAS is issued.',
      icon: FileText
    },
    {
      id: 'pre_arrival',
      name: 'Visa & International Arrival Guide',
      role: 'Stress-free student visa checklists & travel guidance',
      lifecycleZone: 'Arrival & Housing (Stage 07)',
      tagColor: '#38bdf8',
      desc: 'Guides international students through their student visa journey, sends biometric appointment reminders, logs flight arrivals, and coordinates university campus welcome desks.',
      trigger: 'Student accepts university offer and confirms tuition deposit.',
      reads: ['Visa Application Deadlines', 'Flight Arrival Dates', 'Campus Orientation Schedules'],
      actions: ['Creates Step-by-Step Visa Plan', 'Books Airport Welcome Pickups', 'Sends International Welcome Guide'],
      owner: 'International Student Support',
      channels: ['WorldLynk Student App', 'WhatsApp', 'Email Alerts'],
      humanControl: 'Complex visa situations are immediately routed to certified university Immigration Advisors.',
      icon: Globe
    },
    {
      id: 'housing',
      name: 'Student Housing & Room Finder',
      role: 'Verified student rooms & safe digital tenancies',
      lifecycleZone: 'Arrival & Housing (Stages 07–08)',
      tagColor: '#38bdf8',
      desc: 'Matches incoming students with verified campus halls and approved private student accommodation. Eliminates rental scams, collects deposits safely, and issues digital keys to the student app.',
      trigger: 'Student receives an offer or requests student accommodation.',
      reads: ['Campus Halls Availability', 'Approved Partner Listings', 'Room Budget & Preferences'],
      actions: ['Matches Verified Available Rooms', 'Prepares Digital Tenancy Agreement', 'Delivers Room Key to Student App'],
      owner: 'Accommodation & Residential Services',
      channels: ['Student App', 'Housing Desk Portal'],
      humanControl: 'Room disputes and accessibility accommodations are handled directly by residential staff.',
      icon: Building
    },
    {
      id: 'learning',
      name: 'Daily Timetable & Study Companion',
      role: 'Lecture rooms, deadlines & timetable reminders',
      lifecycleZone: 'Campus Life & Careers (Stages 08–09)',
      tagColor: '#10b981',
      desc: 'Connects directly with Moodle and Canvas to answer syllabus questions, organize assignment deadlines, sync daily lecture timetables, and provide campus walking directions.',
      trigger: 'Daily class update, approaching assignment deadline, or student coursework question.',
      reads: ['Course Materials & Syllabus', 'Lecture Hall Timetables', 'Campus Building Maps'],
      actions: ['Sends Morning Timetable Brief', 'Reminds of Upcoming Deadlines', 'Provides Room Walking Directions'],
      owner: 'Faculty & Academic Departments',
      channels: ['Student App', 'Student Learning Dashboard'],
      humanControl: 'Grading questions, extenuating circumstances, and appeals are directed straight to course tutors.',
      icon: Cpu
    },
    {
      id: 'welfare',
      name: 'Student Welfare & Caring Check-In',
      role: 'Gentle check-in drafts before students fall behind',
      lifecycleZone: 'Campus Life & Careers (Stage 10)',
      tagColor: '#10b981',
      desc: 'Notices when a student might be struggling — such as multiple missed lectures combined with quiet online activity — and prepares a supportive check-in draft for their personal tutor.',
      trigger: '3 missed lectures in a row and 4+ days of inactivity on the course portal.',
      reads: ['Class Attendance Logs', 'Course Portal Activity', 'Campus Timetable Attendance'],
      actions: ['Identifies Early Signs of Burnout', 'Drafts Friendly Tutor Message', 'Alerts Tutor on Compass Desk'],
      owner: 'Student Welfare & Personal Tutors',
      channels: ['Compass Staff Console', 'WhatsApp (Only After Tutor Approves)'],
      humanControl: 'Messages are never sent autonomously. The Senior Tutor reviews, edits, and clicks approve before anything reaches the student.',
      icon: Clock
    },
    {
      id: 'compliance',
      name: 'Visa Work-Hour Guardian',
      role: 'Protects international students from exceeding 20h limit',
      lifecycleZone: 'Campus Life & Careers (Stages 09–11)',
      tagColor: '#10b981',
      desc: 'Helps international students keep track of campus shifts and part-time jobs so they never accidentally breach their 20-hour weekly visa limit during term time.',
      trigger: 'Student logs campus employment shift or applies for a part-time job.',
      reads: ['Weekly Work Schedules', 'Term-Time vs Holiday Dates', 'Student Visa Work Regulations'],
      actions: ['Keeps Real-Time Hour Counter', 'Issues Official Verification Letter', 'Maintains 100% Audit-Safe Records'],
      owner: 'Visa Compliance & Campus Employment',
      channels: ['Student App', 'Compass Compliance Desk'],
      humanControl: 'Compliance officers have full visibility with one-click exportable audit reports.',
      icon: Lock
    },
    {
      id: 'career',
      name: 'Careers & Graduate Job Mentor',
      role: 'CV feedback, voice mock interviews & graduate jobs',
      lifecycleZone: 'Campus Life & Careers (Stage 11)',
      tagColor: '#10b981',
      desc: 'Prepares students for global employment with instant CV feedback, realistic voice mock interviews, and access to verified graduate employers and visa-sponsored roles.',
      trigger: 'Student uploads CV, looks for internships, or approaches graduation.',
      reads: ['Student Academic Profile', 'Industry Job Descriptions', 'Visa-Compliant Graduate Roles'],
      actions: ['Optimizes CV for Employer Screening', 'Conducts Spoken Voice Mock Interviews', 'Matches Sponsored Graduate Roles'],
      owner: 'University Careers & Employability',
      channels: ['Student App', 'Careers Web Portal'],
      humanControl: 'University careers advisors can review student portfolios for dedicated 1-on-1 counseling.',
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
            YOUR 24/7 CAMPUS ASSISTANCE TEAM
          </div>
          <h2 className="headline-lg" style={{ marginBottom: '1rem', color: '#ffffff' }}>
            Support for every student. Total peace of mind for staff.
          </h2>
          <p className="body-lg text-secondary" style={{ lineHeight: 1.6 }}>
            Instead of an impersonal bot, WorldLynk provides dedicated assistants tailored to each area of campus life — admissions, housing, welfare check-ins, and visa safety. 
            The AI handles the repetitive research and drafts; <strong>your staff make the final decisions with one click</strong>.
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
