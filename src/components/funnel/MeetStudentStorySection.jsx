import React, { useState, useEffect } from 'react';
import { 
  Play, Pause, RotateCcw, ChevronRight, CheckCircle2, 
  MapPin, GraduationCap, Building, Bot, ShieldCheck, 
  FileText, Clock, Users, ArrowRight, Sparkles, Send, Check, Plane, Briefcase
} from 'lucide-react';

export default function MeetStudentStorySection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const storySteps = [
    {
      id: 'signal',
      stepNum: '01',
      title: 'Initial Signal',
      actor: 'Prospective International Student',
      actorIcon: MapPin,
      actorColor: '#ff6b00',
      badge: 'Discovery Phase',
      narrative: 'An international prospective applicant searches global postgraduate degree programs and discovers MSc Advanced Computer Science at a partner university via an accredited international education portal.',
      whatUserSees: 'Student views course curriculum, fee structure, international scholarship eligibility, language requirements, and post-study graduate employment pathways directly on the verified course portal.',
      contextTransferred: {
        prospect_origin: 'International Applicant (Global Inquiry)',
        target_course: 'MSc Advanced Computer Science',
        intake_cycle: 'September 2026',
        source_channel: 'Verified Global Education Network',
        consent_status: 'Explicit consent granted for institutional degree inquiries'
      },
      systemAction: 'WorldLynk logs discovery touchpoint without collecting unpermitted personal trackers.'
    },
    {
      id: 'context',
      stepNum: '02',
      title: 'Permitted Context Captured',
      actor: 'WorldLynk Context Layer',
      actorIcon: Sparkles,
      actorColor: '#ff6b00',
      badge: 'Context Orchestration',
      narrative: 'WorldLynk securely establishes permitted intent: program selection (MSc Advanced CS), target institution, September intake cycle, verified undergraduate credential comparability, and tuition deposit timeline.',
      whatUserSees: 'Instant personalized guidance matching international bachelor degree equivalence and credential evaluation to university admissions benchmarks.',
      contextTransferred: {
        academic_background: 'Bachelor of Science / Computer Science (First Class Honours Equiv.)',
        credential_evaluation: 'UK ENIC / Ecctis Comparability Verified',
        language_proficiency: 'Documented higher education in English medium',
        budget_range: '£22,000 – £26,000 (Self-funded + Institutional Merit Scholarship)',
        stage: 'Inquiry → Qualified'
      },
      systemAction: 'Context token generated; student profile remains encrypted and private under UK GDPR and international privacy standards.'
    },
    {
      id: 'ai',
      stepNum: '03',
      title: 'Personal AI Guidance',
      actor: 'Student AI Agent',
      actorIcon: Bot,
      actorColor: '#c084fc',
      badge: '24/7 AI Copilot',
      narrative: 'The student’s personal AI assistant answers technical curriculum questions, explains CAS timeline requirements, and calculates exact deposit confirmation schedules.',
      whatUserSees: 'Chat response: "Your undergraduate qualification meets entry standards. Your documented academic language history qualifies for direct institutional verification with this university."',
      contextTransferred: {
        ai_recommendation: 'Direct MSc Application with Standardized Credential Verification',
        next_step: 'Upload degree transcripts and statement of purpose'
      },
      systemAction: 'AI guidance grounded directly in the university’s published international admissions criteria.'
    },
    {
      id: 'university',
      stepNum: '04',
      title: 'University Recruitment Alert',
      actor: 'University Admissions (Compass)',
      actorIcon: Building,
      actorColor: '#38bdf8',
      badge: 'Institutional Workflow',
      narrative: 'Subject to student permission, the university’s international recruitment desk receives an anonymized high-intent prospect signal in the Compass Staff Portal.',
      whatUserSees: 'Admissions Officer sees: "High-readiness international prospect: MSc Advanced CS (Sept Intake) · Global recruitment pipeline · Ready for credential review."',
      contextTransferred: {
        institution_alert: 'Global Admissions & International Recruitment Desk',
        intent_score: '94 / 100 (High Readiness)',
        workflow_state: 'Admissions Prospect Lead'
      },
      systemAction: 'Lead synchronized to university CRM (Salesforce / HubSpot) with zero duplicate data entry.'
    },
    {
      id: 'consultant',
      stepNum: '05',
      title: 'Permitted Consultant Routing',
      actor: 'Accredited International Advisor / Counselor',
      actorIcon: Users,
      actorColor: '#f59e0b',
      badge: 'Consent-Governed Handoff',
      narrative: 'The student clicks: "I’d like human guidance reviewing my statement of purpose and visa documentation." WorldLynk alerts an accredited, connected regional advisor with full permitted conversation history.',
      whatUserSees: 'Advisor reaches out: "Hello! I see you’ve verified your MSc Advanced CS eligibility and would like guidance finalizing your documentation for the September intake."',
      contextTransferred: {
        student_consent: 'Authorized human advisor contact',
        advisor_assigned: 'Accredited Global Education Advisory Partner',
        handoff_context: 'Course details, academic transcripts, and credential evaluation attached'
      },
      systemAction: 'Advisor receives contextual brief without student repeating basic questions.'
    },
    {
      id: 'conversion',
      stepNum: '06',
      title: 'Application & Offer Acceptance',
      actor: 'Admissions Engine',
      actorIcon: FileText,
      actorColor: '#10b981',
      badge: 'Conversion Complete',
      narrative: 'The student submits their formal application. AI verifies international transcript comparability (Ecctis / UK ENIC benchmarks). University issues an Unconditional Offer; student accepts and pays deposit.',
      whatUserSees: 'Offer Letter issued digitally. Student pays deposit securely via international payment rails; instant CAS initiation notice appears.',
      contextTransferred: {
        application_id: 'WL-INTL-2026-9921',
        offer_status: 'Unconditional Offer Issued',
        deposit_received: '£3,000 Tuition Deposit Verified via Flywire / Stripe',
        cas_reference: 'CAS-UKVI-773199'
      },
      systemAction: 'SITS:Vision student record created; admissions status automatically toggled to Deposited.'
    },
    {
      id: 'pre_arrival',
      stepNum: '07',
      title: 'Pre-Arrival & Housing Matching',
      actor: 'Arrival Logistics Layer',
      actorIcon: Plane,
      actorColor: '#38bdf8',
      badge: 'Settlement Readiness',
      narrative: 'The same WorldLynk context now activates pre-arrival mode: student visa biometric appointment reminders, airport welcome slots from Heathrow, and verified student accommodation booking.',
      whatUserSees: 'Student App displays: "Room Reserved: Riverside Student Hall, En-suite Room 4B. International Welcome Bus landing Sept 18th booked with university pickup."',
      contextTransferred: {
        visa_vignette: 'UKVI Student Route Verified',
        accommodation: 'En-suite Tenancy Agreement Digitally Executed',
        arrival_slot: 'International Airport Welcome Terminal 3 Bus confirmed'
      },
      systemAction: 'Student profile seamlessly transferred into campus operations and accommodation systems.'
    },
    {
      id: 'student',
      stepNum: '08',
      title: 'Enrolment & Active Campus Life',
      actor: 'WorldLynk Student App',
      actorIcon: GraduationCap,
      actorColor: '#10b981',
      badge: 'Active Enrolled Student',
      narrative: 'The student lands in the UK and registers on campus. The prospect profile automatically switches to enrolled student profile in the Student App, syncing Moodle timetables and campus WiFi.',
      whatUserSees: 'Single app for everything: Daily lecture schedule, 1-tap lecture attendance, digital campus pass, and Moodle assignment notifications.',
      contextTransferred: {
        student_id: 'STU-0091-8832',
        enrolled_modules: ['CS-5100 Distributed Systems', 'CS-5102 Cloud Computing'],
        attendance_status: 'Active (100% attendance recorded)'
      },
      systemAction: 'Real-time two-way sync with Moodle LMS and campus timetable management.'
    },
    {
      id: 'success',
      stepNum: '09',
      title: 'Early Welfare & Retention Guard',
      actor: 'Campus Welfare (Compass)',
      actorIcon: ShieldCheck,
      actorColor: '#ff6b00',
      badge: 'Human-in-the-Loop Care',
      narrative: 'Midway through Term 1, student misses two consecutive morning seminars following return travel from mid-term break. System notices drop in Moodle logins and alerts Senior Tutor with drafted friendly check-in.',
      whatUserSees: 'Tutor reviews and approves draft. Student receives WhatsApp: "Hi! Hope your mid-term travel went smoothly. Missed you at Cloud Computing — let’s catch up at 2pm."',
      contextTransferred: {
        signal_type: 'Attendance drop + Moodle inactivity',
        action_taken: 'Senior Tutor Dr. Jenkins approved check-in',
        outcome: 'Student attended 2pm tutorial; coursework submitted on time'
      },
      systemAction: 'Dropout risk mitigated weeks before exam failure. Zero automated unapproved notices sent.'
    },
    {
      id: 'career',
      stepNum: '10',
      title: '20-Hour Cap, Careers & Graduation',
      actor: 'Careers & Post-Study Route',
      actorIcon: Briefcase,
      actorColor: '#10b981',
      badge: 'Graduate Outcomes',
      narrative: 'Student balances a weekend campus IT desk role (safely monitored within the legal 20h/wk visa limit), completes mock voice interviews, and receives sponsorship offer for Graduate Route visa.',
      whatUserSees: 'Visa work log: "16h worked this week · 4h allowance remaining." Tailored ATS CV sent to UK Tech Graduate schemes.',
      contextTransferred: {
        compliance_status: '100% Home Office compliant (Never exceeded 20h cap)',
        employment_outcome: 'Junior Software Engineer at London FinTech',
        visa_transition: 'Sponsored UK Graduate Route Visa'
      },
      systemAction: 'Full lifecycle captured from initial global discovery to campus enrolment, academic persistence, and graduate career launch.'
    }
  ];

  // Auto-advance scrubber effect
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % storySteps.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying, storySteps.length]);

  const currentStep = storySteps[activeStep];
  const ActorIcon = currentStep.actorIcon;

  return (
    <section id="meet-student-story" className="section" style={{ backgroundColor: '#0c0d12', borderTop: '1px solid #1c1d28', position: 'relative' }}>
      <div className="main-container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3rem' }}>
          <div className="mono-label" style={{ color: 'var(--wl-accent)', marginBottom: '0.75rem' }}>
            STUDENT JOURNEY CASE STUDY
          </div>
          <h2 className="headline-lg" style={{ marginBottom: '1rem', color: '#ffffff' }}>
            From Global Discovery to Degree &amp; Employment: The Complete Journey
          </h2>
          <p className="body-lg text-secondary" style={{ lineHeight: 1.6 }}>
            Follow an international student’s continuous trajectory. See how the same permitted context flows seamlessly 
            from global discovery to application, visa preparation, campus persistence, and graduate employment.
          </p>
        </div>

        {/* Playback Controls & Scrubber */}
        <div 
          style={{ 
            backgroundColor: '#14151f', 
            borderRadius: '12px', 
            border: '1px solid #232435', 
            padding: '1rem 1.5rem', 
            marginBottom: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              type="button"
              onClick={() => setIsPlaying(p => !p)}
              style={{
                backgroundColor: isPlaying ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 107, 0, 0.15)',
                border: isPlaying ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid rgba(255, 107, 0, 0.4)',
                color: isPlaying ? '#10b981' : '#ff8833',
                padding: '0.45rem 0.85rem',
                borderRadius: '6px',
                fontSize: '0.8rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer'
              }}
            >
              {isPlaying ? <Pause size={13} /> : <Play size={13} />}
              <span>{isPlaying ? 'Auto-Advancing' : 'Paused (Click to Auto-Play)'}</span>
            </button>

            <button
              type="button"
              onClick={() => { setActiveStep(0); setIsPlaying(false); }}
              style={{
                backgroundColor: '#1b1c28',
                border: '1px solid #2e3042',
                color: '#a1a1aa',
                padding: '0.45rem 0.75rem',
                borderRadius: '6px',
                fontSize: '0.8rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <RotateCcw size={13} />
              <span>Restart</span>
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="mono-sm text-muted">
              STEP {currentStep.stepNum} OF {storySteps.length.toString().padStart(2, '0')}:
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: currentStep.actorColor }}>
              {currentStep.title}
            </span>
          </div>
        </div>

        {/* 10-Step Timeline Strip */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(10, 1fr)', 
            gap: '4px', 
            marginBottom: '2rem',
            overflowX: 'auto',
            paddingBottom: '0.5rem'
          }}
        >
          {storySteps.map((s, idx) => {
            const isCurrent = activeStep === idx;
            const isPassed = activeStep > idx;
            return (
              <div
                key={s.id}
                onClick={() => { setActiveStep(idx); setIsPlaying(false); }}
                style={{
                  minWidth: '60px',
                  padding: '0.55rem 0.35rem',
                  borderRadius: '6px',
                  backgroundColor: isCurrent ? '#1e202e' : isPassed ? '#151620' : '#111219',
                  border: isCurrent ? `2px solid ${s.actorColor}` : isPassed ? '1px solid #292a3a' : '1px solid #1f202c',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{ fontSize: '0.65rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: isCurrent ? s.actorColor : isPassed ? '#10b981' : '#6b7280' }}>
                  {s.stepNum}
                </div>
                <div style={{ fontSize: '0.68rem', fontWeight: isCurrent ? 700 : 500, color: isCurrent ? '#ffffff' : '#9ca3af', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {s.id}
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Step Presentation Window */}
        <div 
          style={{ 
            backgroundColor: '#12131c', 
            borderRadius: '16px', 
            border: '1px solid #28293c', 
            overflow: 'hidden',
            boxShadow: '0 25px 65px -15px rgba(0, 0, 0, 0.8)'
          }}
        >
          {/* Header Banner */}
          <div 
            style={{ 
              padding: '1.5rem 2rem', 
              backgroundColor: '#171825', 
              borderBottom: '1px solid #28293c',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div 
                style={{ 
                  width: 44, 
                  height: 44, 
                  borderRadius: '10px', 
                  backgroundColor: `${currentStep.actorColor}20`, 
                  border: `1px solid ${currentStep.actorColor}40`,
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: currentStep.actorColor,
                  flexShrink: 0
                }}
              >
                <ActorIcon size={22} />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                  <span className="mono-sm" style={{ color: currentStep.actorColor, fontWeight: 800 }}>
                    STEP {currentStep.stepNum} // {currentStep.badge}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>
                  {currentStep.title} — {currentStep.actor}
                </h3>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setActiveStep((activeStep + 1) % storySteps.length);
                setIsPlaying(false);
              }}
              style={{
                backgroundColor: currentStep.actorColor,
                color: '#ffffff',
                border: 'none',
                padding: '0.6rem 1.2rem',
                borderRadius: '6px',
                fontSize: '0.82rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer'
              }}
            >
              <span>Advance Step</span>
              <ChevronRight size={14} />
            </button>
          </div>

          {/* Main Visual Split */}
          <div style={{ padding: '2.25rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            
            {/* Left: What Unfolds & What the User Sees */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              <div style={{ backgroundColor: '#181926', padding: '1.5rem', borderRadius: '10px', border: '1px solid #2d2e42' }}>
                <div className="mono-sm text-muted" style={{ marginBottom: '0.5rem', fontWeight: 700 }}>
                  WHAT HAPPENS AT THIS MOMENT:
                </div>
                <p style={{ fontSize: '0.96rem', color: '#f4f4f5', lineHeight: 1.6 }}>
                  {currentStep.narrative}
                </p>
              </div>

              <div style={{ backgroundColor: '#181926', padding: '1.5rem', borderRadius: '10px', border: `1px solid ${currentStep.actorColor}44` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem' }}>
                  <Sparkles size={16} style={{ color: currentStep.actorColor }} />
                  <span className="mono-sm" style={{ color: currentStep.actorColor, fontWeight: 700 }}>
                    WHAT THE USER SEES ON SCREEN:
                  </span>
                </div>
                <div style={{ fontSize: '0.92rem', color: '#e4e4e7', lineHeight: 1.55 }}>
                  {currentStep.whatUserSees}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0.75rem 1rem', borderRadius: '8px', backgroundColor: '#141520', border: '1px solid #232435' }}>
                <CheckCircle2 size={16} style={{ color: '#10b981', flexShrink: 0 }} />
                <span style={{ fontSize: '0.82rem', color: '#9ca3af' }}>
                  <strong>Orchestration:</strong> {currentStep.systemAction}
                </span>
              </div>

            </div>

            {/* Right: Live Permitted Context Packet (Terminal / Ledger View) */}
            <div 
              style={{ 
                backgroundColor: '#0a0a0f', 
                borderRadius: '10px', 
                border: '1px solid #26273a', 
                display: 'flex', 
                flexDirection: 'column', 
                overflow: 'hidden' 
              }}
            >
              <div 
                style={{ 
                  backgroundColor: '#12131c', 
                  padding: '0.65rem 1rem', 
                  borderBottom: '1px solid #26273a', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center' 
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: 9, height: 9, borderRadius: '50%', backgroundColor: '#ff5f56' }} />
                  <div style={{ width: 9, height: 9, borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
                  <div style={{ width: 9, height: 9, borderRadius: '50%', backgroundColor: '#27c93f' }} />
                  <span className="mono-sm" style={{ color: '#71717a', fontSize: '0.68rem', marginLeft: '6px' }}>
                    WORLDLYNK_CONTEXT_PACKET // PAYLOAD
                  </span>
                </div>
                <span className="mono-sm" style={{ color: '#10b981', fontSize: '0.68rem' }}>
                  ENCRYPTED · UK GDPR SAFE
                </span>
              </div>

              <div style={{ padding: '1.25rem', flex: 1, fontFamily: 'monospace', fontSize: '0.8rem', color: '#e4e4e7', lineHeight: 1.6, overflowX: 'auto' }}>
                <div style={{ color: '#38bdf8', marginBottom: '0.5rem' }}>
                  // Live permitted context transferred at Stage {currentStep.stepNum}:
                </div>
                <pre style={{ margin: 0, color: '#f4f4f5', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                  {JSON.stringify(currentStep.contextTransferred, null, 2)}
                </pre>
                <div style={{ marginTop: '1rem', color: '#a1a1aa', borderTop: '1px solid #1f2030', paddingTop: '0.75rem', fontSize: '0.72rem' }}>
                  <div>$ context_chain --verify-consent</div>
                  <div style={{ color: '#10b981' }}>✓ 100% Policy Compliant · Zero Sensitive Data Exposed to Third Parties</div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Footnote */}
          <div 
            style={{ 
              padding: '0.9rem 2rem', 
              backgroundColor: '#0f1017', 
              borderTop: '1px solid #222332',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px'
            }}
          >
            <span style={{ fontSize: '0.78rem', color: '#9ca3af' }}>
              Notice: The student’s context was maintained continuously across 10 lifecycle stages without restarting in separate siloed tools.
            </span>
            <a 
              href="#context-layer-network" 
              style={{ color: 'var(--wl-accent)', fontSize: '0.82rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
            >
              Explore Context Layer Architecture <ArrowRight size={14} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
