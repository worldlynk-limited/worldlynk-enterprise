import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, GraduationCap, Users, ArrowRight, CheckCircle2, 
  Sparkles, Layers, ShieldCheck, Building, Zap, Briefcase, 
  ChevronRight, Calendar, ArrowUpRight
} from 'lucide-react';

export default function LifecycleOverviewSection() {
  const [activeZone, setActiveZone] = useState('discover');

  const zones = [
    {
      id: 'discover',
      stepRange: 'Stages 01 – 06',
      title: 'Discover & Convert',
      subtitle: 'Pre-Enrolment & Acquisition Layer',
      tagline: 'From first enquiry to confirmed offer',
      color: '#ff6b00',
      bgLight: 'rgba(255, 107, 0, 0.08)',
      borderColor: 'rgba(255, 107, 0, 0.35)',
      description: 'WorldLynk captures permitted student intent across web portals, campaigns, and partners. Personal AI agents guide course evaluation, qualify readiness, and route high-intent signals directly to admissions teams and approved consultants.',
      keyOutcomes: [
        'Instant answers for international & domestic prospects',
        'Permitted intent & readiness scoring before application',
        'Consent-governed routing to university staff or consultants',
        'Document and qualification checklist acceleration'
      ],
      stagesIncluded: [
        '01 Awareness & Discovery',
        '02 Active Inquiry & Intent Capture',
        '03 Intake & Course Qualification',
        '04 Permitted Consultant / Staff Connect',
        '05 Application & Dossier Assembly',
        '06 Offer Issuance & Decision Nurturing'
      ],
      surfaces: ['University Web Portals', 'Student Prospect Agent', 'Compass Recruitment Console', 'Approved Partner Desks'],
      systems: ['CRM (Salesforce / HubSpot)', 'Admissions Systems', 'Direct Messaging (WhatsApp)']
    },
    {
      id: 'enrol',
      stepRange: 'Stages 07 – 08',
      title: 'Enrol & Operate',
      subtitle: 'Transition & Campus Operations Layer',
      tagline: 'From CAS & visa to active student induction',
      color: '#38bdf8',
      bgLight: 'rgba(56, 189, 248, 0.08)',
      borderColor: 'rgba(56, 189, 248, 0.35)',
      description: 'The journey continues seamlessly without dropping context. The student transitions into the WorldLynk Student App for pre-arrival guidance, verified room reservations, visa compliance checks, and automated LMS/SIS onboarding.',
      keyOutcomes: [
        'Personal AI checklist for visa, CAS, and finance',
        'Verified student accommodation matched before flight',
        'Seamless handoff from prospect record to SIS student ID',
        'Automatic timetable & learning portal (Moodle/Canvas) sync'
      ],
      stagesIncluded: [
        '07 Pre-Arrival: Visa, Housing & Flight Readiness',
        '08 On-Campus Enrolment & System Sync'
      ],
      surfaces: ['WorldLynk Student App', 'Compass Admissions Console', 'Accommodation Partner Desk'],
      systems: ['SITS:Vision / Ellucian Banner', 'Moodle / Canvas LMS', 'Campus Timetable Feeds']
    },
    {
      id: 'engage',
      stepRange: 'Stages 09 – 11',
      title: 'Engage & Succeed',
      subtitle: 'Campus Life, Retention & Careers Layer',
      tagline: 'From lecture hall persistence to graduate employment',
      color: '#10b981',
      bgLight: 'rgba(16, 185, 129, 0.08)',
      borderColor: 'rgba(16, 185, 129, 0.35)',
      description: 'Throughout campus life, multi-agent signals detect drop-out risks, protect the 20h/wk visa work cap, and empower staff to intervene early. As graduation approaches, students transition directly into career coaching and graduate jobs.',
      keyOutcomes: [
        '1-tap attendance check-in and automated compliance logs',
        'Early-warning welfare signals for struggling students',
        'Strict 20h/wk student visa work cap validation',
        'Tailored CV builder, mock voice interviews & graduate routes'
      ],
      stagesIncluded: [
        '09 Campus Engagement & Everyday Support',
        '10 Retention Signals & Human-Led Intervention',
        '11 Careers, Post-Study Work & Alumni Transition'
      ],
      surfaces: ['WorldLynk Student App', 'Compass Staff Portal', 'Senior Tutor & Welfare Desks'],
      systems: ['Attendance Logs', 'Student Records (SIS)', 'Careers & Graduate Job Networks']
    }
  ];

  const currentZone = zones.find(z => z.id === activeZone) || zones[0];

  return (
    <section className="section" style={{ backgroundColor: '#0e0e12', borderTop: '1px solid #1f1f2a', position: 'relative' }}>
      <div className="main-container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem' }}>
          <div className="mono-label" style={{ color: 'var(--wl-accent)', marginBottom: '0.75rem' }}>
            CONTINUOUS LIFECYCLE ARCHITECTURE
          </div>
          <h2 className="headline-lg" style={{ marginBottom: '1rem', color: '#ffffff' }}>
            From first interest to student success.
          </h2>
          <p className="body-lg text-secondary" style={{ lineHeight: 1.6 }}>
            Most universities lose context the moment a prospect converts into an applicant, or an applicant becomes an enrolled student. 
            WorldLynk operates as a <strong>continuous context layer</strong> across all three chapters of student life.
          </p>
        </div>

        {/* 3 Zone Selector Cards */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '1.25rem',
            marginBottom: '2.5rem'
          }}
        >
          {zones.map((zone) => {
            const isSelected = activeZone === zone.id;
            return (
              <div
                key={zone.id}
                onClick={() => setActiveZone(zone.id)}
                style={{
                  backgroundColor: isSelected ? '#161720' : '#121217',
                  border: isSelected ? `2px solid ${zone.color}` : '1px solid #242432',
                  borderRadius: '12px',
                  padding: '1.75rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: isSelected ? `0 12px 30px -8px ${zone.color}22` : 'none'
                }}
              >
                {/* Active Indicator Bar */}
                {isSelected && (
                  <div 
                    style={{ 
                      position: 'absolute', 
                      top: 0, 
                      left: 0, 
                      right: 0, 
                      height: '3px', 
                      backgroundColor: zone.color 
                    }} 
                  />
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span 
                    style={{ 
                      fontSize: '0.72rem', 
                      fontWeight: 700, 
                      fontFamily: 'var(--font-mono)', 
                      color: zone.color,
                      backgroundColor: zone.bgLight,
                      border: `1px solid ${zone.borderColor}`,
                      padding: '0.2rem 0.55rem',
                      borderRadius: '4px'
                    }}
                  >
                    {zone.stepRange}
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#71717a', fontWeight: 600 }}>
                    {zone.tagline}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.35rem' }}>
                  {zone.title}
                </h3>
                <div style={{ fontSize: '0.85rem', color: '#a1a1aa', fontWeight: 500, marginBottom: '1.25rem' }}>
                  {zone.subtitle}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: isSelected ? zone.color : '#71717a', fontSize: '0.8rem', fontWeight: 600 }}>
                  <span>{isSelected ? 'Viewing Zone Details' : 'Click to inspect zone'}</span>
                  <ChevronRight size={14} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Zone Breakdown Showcase */}
        <div 
          style={{ 
            backgroundColor: '#131319', 
            borderRadius: '14px', 
            border: `1px solid ${currentZone.borderColor}`,
            padding: '2.5rem',
            position: 'relative',
            boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.6)'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
            
            {/* Left: Zone Narrative & Outcomes */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
                <span 
                  style={{ 
                    width: 10, 
                    height: 10, 
                    borderRadius: '50%', 
                    backgroundColor: currentZone.color,
                    boxShadow: `0 0 10px ${currentZone.color}` 
                  }} 
                />
                <span className="mono-sm" style={{ color: currentZone.color, fontWeight: 700 }}>
                  {currentZone.stepRange} // LIFECYCLE FOCUS
                </span>
              </div>

              <h3 className="headline-md" style={{ color: '#ffffff', marginBottom: '1rem' }}>
                {currentZone.title}: {currentZone.subtitle}
              </h3>
              
              <p className="body-md text-secondary" style={{ lineHeight: 1.65, marginBottom: '1.75rem' }}>
                {currentZone.description}
              </p>

              <div style={{ marginBottom: '1.75rem' }}>
                <div className="mono-sm text-muted" style={{ marginBottom: '0.75rem', fontWeight: 600 }}>
                  KEY INSTITUTIONAL OUTCOMES:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {currentZone.keyOutcomes.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={16} style={{ color: currentZone.color, flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '0.88rem', color: '#e4e4e7', lineHeight: 1.4 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a 
                  href="#interactive-funnel" 
                  className="btn-primary" 
                  style={{ 
                    padding: '0.75rem 1.4rem', 
                    fontSize: '0.88rem',
                    backgroundColor: currentZone.color,
                    borderColor: currentZone.color
                  }}
                >
                  Inspect Full 11 Stages <ArrowRight size={14} />
                </a>
                <Link 
                  to="/demo" 
                  className="btn-secondary" 
                  style={{ padding: '0.75rem 1.4rem', fontSize: '0.88rem', border: '1px solid #2f2f3d', color: '#ffffff' }}
                >
                  Book Walkthrough
                </Link>
              </div>
            </div>

            {/* Right: Stages Included & Connected Stack */}
            <div 
              style={{ 
                backgroundColor: '#181922', 
                borderRadius: '10px', 
                border: '1px solid #2a2a38', 
                padding: '1.75rem' 
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid #2a2a38', paddingBottom: '0.75rem' }}>
                <span className="mono-sm text-muted" style={{ fontWeight: 700 }}>STAGES COVERED IN THIS ZONE</span>
                <span style={{ fontSize: '0.75rem', color: currentZone.color, fontWeight: 700 }}>Active Coverage</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.75rem' }}>
                {currentZone.stagesIncluded.map((stg, i) => (
                  <div 
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '6px',
                      backgroundColor: '#121217',
                      border: '1px solid #23232f',
                      fontSize: '0.82rem',
                      color: '#f4f4f5'
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>{stg}</span>
                    <span style={{ fontSize: '0.68rem', color: '#10b981', backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>
                      Connected
                    </span>
                  </div>
                ))}
              </div>

              {/* Connected Surfaces & Systems Badges */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div>
                  <div className="mono-sm text-muted" style={{ fontSize: '0.7rem', marginBottom: '0.4rem' }}>ACTIVE SURFACES:</div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {currentZone.surfaces.map((s, idx) => (
                      <span 
                        key={idx} 
                        style={{ 
                          fontSize: '0.72rem', 
                          padding: '0.2rem 0.55rem', 
                          borderRadius: '4px', 
                          backgroundColor: '#20202c', 
                          color: '#d4d4d8', 
                          border: '1px solid #2d2d3e' 
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mono-sm text-muted" style={{ fontSize: '0.7rem', marginBottom: '0.4rem' }}>CONNECTED INSTITUTIONAL SYSTEMS:</div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {currentZone.systems.map((sys, idx) => (
                      <span 
                        key={idx} 
                        style={{ 
                          fontSize: '0.72rem', 
                          padding: '0.2rem 0.55rem', 
                          borderRadius: '4px', 
                          backgroundColor: currentZone.bgLight, 
                          color: currentZone.color, 
                          border: `1px solid ${currentZone.borderColor}` 
                        }}
                      >
                        {sys}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
