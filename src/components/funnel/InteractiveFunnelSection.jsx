import React, { useState } from 'react';
import { 
  Users, Bot, Database, ArrowRight, ArrowLeft, CheckCircle2, 
  Sparkles, ShieldCheck, Compass, GraduationCap, Building, 
  Clock, FileText, Zap, ChevronRight, Eye, Send, Check
} from 'lucide-react';

export default function InteractiveFunnelSection() {
  const [selectedStageIdx, setSelectedStageIdx] = useState(2); // default to 03 Qualified / High Intent

  const stages = [
    {
      num: '01',
      id: 'awareness',
      name: 'Awareness / Prospect',
      zone: 'Discover & Convert',
      zoneColor: '#ff6b00',
      tagline: 'Discovery across channels',
      whatHappens: 'Prospective student discovers a university, course, scholarship or degree opportunity through the university website, student campaign, educational consultant or partner network.',
      worldlynkRole: 'WorldLynk operates non-invasively at the top of the funnel, providing embeddable web widgets, partner discovery connectors, and verified course catalogs that preserve channel source attribution.',
      studentAction: 'Browses courses, compares entry requirements, fees, intakes, and campus location details.',
      staffAction: 'Recruitment teams gain real-time visibility into channel reach and aggregate market interest without manual spreadsheet imports.',
      aiAction: 'Prospect Discovery Agent answers initial exploratory queries and tailors course recommendations to student background.',
      systemsConnected: 'University Web CMS, Marketing Campaigns, Partner Portals, Google Analytics, CRM Lead Capture'
    },
    {
      num: '02',
      id: 'inquiry',
      name: 'Interest / Inquiry',
      zone: 'Discover & Convert',
      zoneColor: '#ff6b00',
      tagline: 'Active intent capture',
      whatHappens: 'Student actively engages: asks a specific question, views detailed module structures, requests intake information, or initiates a conversation via web chat or WhatsApp.',
      worldlynkRole: 'WorldLynk captures permitted intent and context with student consent. Zero spam, zero unauthorized sharing—only permissioned context is logged.',
      studentAction: 'Asks specific questions regarding tuition deposits, English language waivers (IELTS/PTE), and upcoming September/January intakes.',
      staffAction: 'Inquiries automatically categorized and scored in Compass Staff Portal, eliminating duplicate inbox queries.',
      aiAction: 'Conversational Inquiry Copilot provides 24/7 instant, policy-grounded answers citing official university guidelines.',
      systemsConnected: 'WhatsApp / Web Widget, CRM Inquiry Queue (Salesforce / HubSpot), Knowledge Base'
    },
    {
      num: '03',
      id: 'qualified',
      name: 'Qualified / High Intent',
      zone: 'Discover & Convert',
      zoneColor: '#ff6b00',
      tagline: 'Intent scoring & next-best action',
      whatHappens: 'Student context is sufficiently rich: course choice, preferred intake, country of origin, budget, and academic qualifications are clear, indicating high readiness to apply.',
      worldlynkRole: 'WorldLynk calculates intent scoring, evaluates qualification readiness, and determines the Next Best Action for the prospective student.',
      studentAction: 'Receives tailored checklist of required documents (transcripts, statement of purpose, passport) customized to their nationality.',
      staffAction: 'Admissions team receives prioritized prospect alerts in Compass with an auto-assembled readiness profile.',
      aiAction: 'Admissions Readiness Agent checks qualification equivalency against country-specific NARIC/Ecctis standards and drafts next-best guidance.',
      systemsConnected: 'CRM Opportunity Stage, Qualification Database, International Admissions Rules Engine'
    },
    {
      num: '04',
      id: 'consult',
      name: 'Consult / Connect',
      zone: 'Discover & Convert',
      zoneColor: '#ff6b00',
      tagline: 'Consent-based human routing',
      whatHappens: 'Student seeks human guidance or specialized assistance (e.g., complex visa history, portfolio review, scholarship guidance, or local in-market advisor support).',
      worldlynkRole: 'Subject to explicit student consent and institutional policy, WorldLynk routes the qualified lead to the university’s in-house international team or an approved connected consultant.',
      studentAction: 'Requests human consultation with one click, choosing between university advisor or certified regional representative.',
      staffAction: 'Advisors receive full conversation context so the student never has to repeat their story or start from scratch.',
      aiAction: 'Routing Arbiter validates data-sharing consent, enforces university policy boundaries, and schedules the consultation.',
      systemsConnected: 'Compass Staff Queue, Approved Consultant Desk, Calendar / Appointment Booking'
    },
    {
      num: '05',
      id: 'application',
      name: 'Application',
      zone: 'Discover & Convert',
      zoneColor: '#ff6b00',
      tagline: 'Document & checklist support',
      whatHappens: 'Student starts and completes their formal university application, uploading academic transcripts, statements, reference letters, and identification.',
      worldlynkRole: 'AI agents support the admissions workflow by checking document completeness, validating formatting, and tracking application progress in real time.',
      studentAction: 'Uploads documents via simple mobile/web interface; receives real-time validation if a document is blurry or missing pages.',
      staffAction: 'Admissions officers review pre-verified application dossiers with AI-generated summary sheets in Compass.',
      aiAction: 'Credential Verification Agent validates document integrity, checks transcript grading scales, and prepares draft CAS dossiers.',
      systemsConnected: 'Admissions Management System, SITS:Vision / Banner Admissions Module, Secure Document Cloud'
    },
    {
      num: '06',
      id: 'offer',
      name: 'Offer / Acceptance',
      zone: 'Discover & Convert',
      zoneColor: '#ff6b00',
      tagline: 'Nurture, decision & deposit',
      whatHappens: 'University issues a conditional or unconditional offer; student evaluates course options, meets remaining conditions, accepts the offer, and pays the tuition deposit.',
      worldlynkRole: 'WorldLynk powers personalized offer nurture sequences, condition-clearing reminders, and secure deposit confirmation directly synced to student finance.',
      studentAction: 'Reviews official offer letter, signs acceptance digitally, and pays deposit through integrated secure gateway.',
      staffAction: 'Admissions and finance teams monitor offer-to-deposit conversion rates and automated CAS issuance queues.',
      aiAction: 'Offer Nurture Copilot answers questions regarding conditions, payment schedules, and tuition refund policies.',
      systemsConnected: 'SIS Offer Records, Stripe / Flywire Payment Gateways, Finance Ledger'
    },
    {
      num: '07',
      id: 'pre_arrival',
      name: 'Pre-Arrival',
      zone: 'Enrol & Operate',
      zoneColor: '#38bdf8',
      tagline: 'Visa, housing, finance & travel',
      whatHappens: 'Student prepares for their university transition: admissions clearance, student visa sponsorship and processing, booking verified student accommodation, flights, and campus orientation.',
      worldlynkRole: 'WorldLynk Personal AI Agent transitions into pre-arrival mode, integrating verified accommodation inventory, airport arrival schedules, and visa timeline trackers.',
      studentAction: 'Tracks visa issuance, reserves vetted student accommodation, and logs travel arrival details in the Student App.',
      staffAction: 'Compliance teams review visa issuance readiness; accommodation teams track arrival dates and room bookings.',
      aiAction: 'Housing & Visa Prep Agent matches students with verified rooms, issues digital tenancy packs, and monitors student visa processing milestones.',
      systemsConnected: 'Visa & Immigration Tracking, Accommodation Inventory, Travel & Arrival Logistics Portal'
    },
    {
      num: '08',
      id: 'enrolled',
      name: 'Enrolled / On Campus',
      zone: 'Enrol & Operate',
      zoneColor: '#38bdf8',
      tagline: 'Campus induction & system sync',
      whatHappens: 'Student arrives on campus, completes biometric identity check / BRP verification, registers for modules, and activates their student profile.',
      worldlynkRole: 'WorldLynk synchronizes the prospect context into the active Student App, automatically linking Moodle/Canvas LMS, university timetables, and campus facilities.',
      studentAction: 'Opens WorldLynk Student App to access digital campus ID, personalized daily lecture schedule, and campus navigation map.',
      staffAction: 'Registry confirms enrollment status in SITS/Banner with one click; departmental tutors receive updated cohort rosters.',
      aiAction: 'Campus Orientation Agent welcomes student, guides them to module enrollment, and explains library & facility access.',
      systemsConnected: 'SITS:Vision / Ellucian Banner (SIS), Moodle / Canvas LMS, Campus Access Control'
    },
    {
      num: '09',
      id: 'engage_support',
      name: 'Engage / Support',
      zone: 'Engage & Succeed',
      zoneColor: '#10b981',
      tagline: 'Everyday campus life & well-being',
      whatHappens: 'Student attends lectures, submits coursework, uses campus services, and asks everyday questions regarding facilities, societies, and academic help.',
      worldlynkRole: 'WorldLynk provides 1-tap mobile attendance logging, 24/7 policy-grounded student support, and seamless cross-departmental assistance.',
      studentAction: 'Checks in for lectures in 1 tap, checks assignment deadlines on Moodle, and accesses mental health / tutor resources.',
      staffAction: 'Student support staff access consolidated student records without switching between 5 separate siloed campus tools.',
      aiAction: 'Nova Campus Coordinator and Moodle Course Assistant provide 24/7 timetable sync and instant answers to routine questions.',
      systemsConnected: 'Attendance Beacon Logs, Moodle/Canvas Deadlines, Campus Union & Facilities Feeds'
    },
    {
      num: '10',
      id: 'success_retention',
      name: 'Success / Retention',
      zone: 'Engage & Succeed',
      zoneColor: '#10b981',
      tagline: 'Early signals & human intervention',
      whatHappens: 'Relevant academic and attendance signals (e.g., missed lectures, portal inactivity, late coursework) are analyzed to identify students needing timely support.',
      worldlynkRole: 'WorldLynk detects drop-out risks weeks before grades suffer. Critically, AI drafts caring, contextual check-ins for human staff review—staff always retain control.',
      studentAction: 'Receives a supportive, personal check-in from their senior tutor or student welfare team on WhatsApp or email.',
      staffAction: 'Senior tutors and welfare officers review flagged cases and pre-written check-in drafts on Compass with one-click approval.',
      aiAction: 'Student Persistence Agent correlates attendance dips with course inactivity, evaluates burn-out risk, and prepares staff briefs.',
      systemsConnected: 'Compass Staff Portal, Welfare Case Management, Early Alert Retention Engine'
    },
    {
      num: '11',
      id: 'career_grad',
      name: 'Career / Graduation',
      zone: 'Engage & Succeed',
      zoneColor: '#10b981',
      tagline: 'Jobs, 20h cap & graduate transition',
      whatHappens: 'Student progresses toward graduation, balances part-time work within the legal 20-hour weekly visa limit, builds their CV, and lands graduate employment.',
      worldlynkRole: 'WorldLynk automatically protects the 20h/wk visa work cap, delivers AI CV optimization, voice mock interview preparation, and connects alumni networks.',
      studentAction: 'Verifies campus work hours, practices interviews with real-time voice feedback, and applies for verified global and regional graduate scheme vacancies.',
      staffAction: 'Careers service tracks graduate outcomes and employer engagement; compliance teams access 100% audit-proof work logs.',
      aiAction: 'CV & Career Coach tailors resumes to global enterprise ATS standards; Work-Cap Agent verifies weekly rota hours against student visa employment regulations.',
      systemsConnected: 'Careers Service Portal, Employer Job Boards, Visa Compliance Audit Logs, Alumni SIS'
    }
  ];

  const currentStage = stages[selectedStageIdx];

  return (
    <section 
      id="interactive-funnel" 
      className="section section-stone" 
      style={{ 
        backgroundColor: 'var(--wl-light)', 
        color: '#0c0c0f', 
        borderTop: '1px solid #d4d0ca', 
        borderBottom: '1px solid #d4d0ca', 
        position: 'relative',
        padding: '5.5rem 0'
      }}
    >
      <div className="main-container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 3rem' }}>
          <div className="mono-label" style={{ color: 'var(--wl-accent)', marginBottom: '0.75rem', fontWeight: 700 }}>
            THE 11 STAGES OF STUDENT LIFE
          </div>
          <h2 className="headline-lg" style={{ marginBottom: '1rem', color: '#0c0c0f' }}>
            Every step from application to graduation, fully connected.
          </h2>
          <p className="body-lg" style={{ color: '#52525b', lineHeight: 1.6 }}>
            See how admissions teams, tutors, housing managers, and careers staff work together smoothly without lost emails or manual spreadsheets. 
            Click any stage below to see how it works for students and staff.
          </p>
        </div>

        {/* 11 Stage Navigation Strip (Desktop & Scrollable Mobile) */}
        <div 
          style={{ 
            display: 'flex', 
            gap: '8px', 
            overflowX: 'auto', 
            paddingBottom: '1.25rem',
            marginBottom: '2rem',
            scrollbarWidth: 'thin'
          }}
        >
          {stages.map((stg, idx) => {
            const isActive = selectedStageIdx === idx;
            return (
              <button
                key={stg.id}
                onClick={() => setSelectedStageIdx(idx)}
                style={{
                  minWidth: '135px',
                  flex: 1,
                  padding: '0.85rem 0.65rem',
                  borderRadius: '10px',
                  backgroundColor: '#ffffff',
                  border: isActive ? '2px solid #ff6b00' : '1px solid #d4d0ca',
                  textAlign: 'left',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 6px 18px -4px rgba(255, 107, 0, 0.25)' : '0 1px 3px rgba(0, 0, 0, 0.04)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <span 
                    style={{ 
                      fontSize: '0.72rem', 
                      fontWeight: 800, 
                      fontFamily: 'var(--font-mono)', 
                      color: isActive ? '#ff6b00' : '#64748b' 
                    }}
                  >
                    STAGE {stg.num}
                  </span>
                  {isActive && (
                    <span 
                      style={{ 
                        width: 6, 
                        height: 6, 
                        borderRadius: '50%', 
                        backgroundColor: '#ff6b00',
                        boxShadow: '0 0 6px rgba(255, 107, 0, 0.6)' 
                      }} 
                    />
                  )}
                </div>

                <div 
                  style={{ 
                    fontSize: '0.82rem', 
                    fontWeight: isActive ? 700 : 600, 
                    color: isActive ? '#0c0c0f' : '#475569',
                    lineHeight: 1.25,
                    marginBottom: '4px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {stg.name}
                </div>

                <div 
                  style={{ 
                    fontSize: '0.64rem', 
                    color: isActive ? '#ea580c' : '#64748b',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {stg.tagline}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Showcase Card */}
        <div 
          style={{ 
            backgroundColor: '#ffffff', 
            borderRadius: '16px', 
            border: '1px solid #d4d0ca', 
            overflow: 'hidden',
            boxShadow: '0 15px 35px -10px rgba(0, 0, 0, 0.08), 0 4px 10px rgba(0, 0, 0, 0.03)'
          }}
        >
          {/* Top Banner / Summary */}
          <div 
            style={{ 
              padding: '1.75rem 2rem', 
              backgroundColor: '#f8fafc', 
              borderBottom: '1px solid #e2e8f0',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.4rem' }}>
                <span 
                  style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.78rem', 
                    fontWeight: 800, 
                    color: '#ff6b00',
                    backgroundColor: 'rgba(255, 107, 0, 0.08)',
                    border: '1px solid rgba(255, 107, 0, 0.25)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px'
                  }}
                >
                  FUNNEL STAGE {currentStage.num}
                </span>
                <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>
                  Lifecycle Zone: <strong style={{ color: '#0c0c0f' }}>{currentStage.zone}</strong>
                </span>
              </div>

              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0c0c0f' }}>
                {currentStage.name}
              </h3>
            </div>

            {/* Stepper Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                type="button"
                onClick={() => setSelectedStageIdx(prev => Math.max(0, prev - 1))}
                disabled={selectedStageIdx === 0}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #d4d0ca',
                  color: selectedStageIdx === 0 ? '#94a3b8' : '#0c0c0f',
                  padding: '0.45rem 0.9rem',
                  borderRadius: '6px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: selectedStageIdx === 0 ? 'not-allowed' : 'pointer'
                }}
              >
                <ArrowLeft size={14} /> Previous
              </button>

              <button
                type="button"
                onClick={() => setSelectedStageIdx(prev => Math.min(stages.length - 1, prev + 1))}
                disabled={selectedStageIdx === stages.length - 1}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#ff6b00',
                  border: 'none',
                  color: '#ffffff',
                  padding: '0.45rem 0.9rem',
                  borderRadius: '6px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: selectedStageIdx === stages.length - 1 ? 'not-allowed' : 'pointer'
                }}
              >
                Next <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Deep Breakdown Grid: 4 Core Perspectives */}
          <div style={{ padding: '2rem' }}>
            
            {/* Top 2 Narrative Cards: What Happens & WorldLynk Role */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
              
              <div style={{ backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.65rem' }}>
                  <Eye size={16} style={{ color: '#ff6b00' }} />
                  <span className="mono-sm" style={{ fontWeight: 700, color: '#475569' }}>WHAT HAPPENS AT THIS STAGE</span>
                </div>
                <p style={{ fontSize: '0.92rem', color: '#1e293b', lineHeight: 1.6 }}>
                  {currentStage.whatHappens}
                </p>
              </div>

              <div style={{ backgroundColor: '#fff7ed', padding: '1.5rem', borderRadius: '10px', border: '1px solid rgba(255, 107, 0, 0.22)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.65rem' }}>
                  <Sparkles size={16} style={{ color: '#ea580c' }} />
                  <span className="mono-sm" style={{ color: '#ea580c', fontWeight: 700 }}>WORLDLYNK ORCHESTRATION ROLE</span>
                </div>
                <p style={{ fontSize: '0.92rem', color: '#1e293b', lineHeight: 1.6 }}>
                  {currentStage.worldlynkRole}
                </p>
              </div>

            </div>

            {/* 4 Action Perspectives: Student, Staff, AI Agent, Connected Systems */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
              
              {/* Perspective 1: Student Surface */}
              <div style={{ backgroundColor: '#f8fafc', padding: '1.25rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
                  <Users size={16} style={{ color: '#2563eb' }} />
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#2563eb' }}>STUDENT EXPERIENCE</span>
                </div>
                <p style={{ fontSize: '0.86rem', color: '#334155', lineHeight: 1.55 }}>
                  {currentStage.studentAction}
                </p>
              </div>

              {/* Perspective 2: University & Staff Surface */}
              <div style={{ backgroundColor: '#f8fafc', padding: '1.25rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
                  <Compass size={16} style={{ color: '#ff6b00' }} />
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#ff6b00' }}>STAFF WORKFLOW (COMPASS)</span>
                </div>
                <p style={{ fontSize: '0.86rem', color: '#334155', lineHeight: 1.55 }}>
                  {currentStage.staffAction}
                </p>
              </div>

              {/* Perspective 3: AI Specialist Agent */}
              <div style={{ backgroundColor: '#f8fafc', padding: '1.25rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
                  <Bot size={16} style={{ color: '#0284c7' }} />
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0284c7' }}>AI SPECIALIST AGENT</span>
                </div>
                <p style={{ fontSize: '0.86rem', color: '#334155', lineHeight: 1.55 }}>
                  {currentStage.aiAction}
                </p>
              </div>

              {/* Perspective 4: Connected Systems */}
              <div style={{ backgroundColor: '#f8fafc', padding: '1.25rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
                  <Database size={16} style={{ color: '#059669' }} />
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#059669' }}>CONNECTED SYSTEMS</span>
                </div>
                <p style={{ fontSize: '0.86rem', color: '#334155', lineHeight: 1.55 }}>
                  {currentStage.systemsConnected}
                </p>
              </div>

            </div>

          </div>

          {/* Bottom Footer Note */}
          <div 
            style={{ 
              padding: '1rem 2rem', 
              backgroundColor: '#f1f5f9', 
              borderTop: '1px solid #e2e8f0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: '#475569' }}>
              <ShieldCheck size={15} style={{ color: '#059669' }} />
              <span>Permission Guardrail: Student consent strictly required for external party handoffs. Zero automatic leakage.</span>
            </div>
            
            <a 
              href="#meet-student-story" 
              style={{ 
                color: '#ff6b00', 
                fontSize: '0.82rem', 
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                textDecoration: 'none'
              }}
            >
              See how this unfolds for a real student <ChevronRight size={14} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
