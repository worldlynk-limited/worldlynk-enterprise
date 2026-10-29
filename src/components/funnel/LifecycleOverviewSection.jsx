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
      title: 'Discover & Apply',
      subtitle: 'From First Inquiry to Confirmed Offer',
      tagline: 'Instant answers & verified applications',
      color: '#ff6b00',
      bgLight: 'rgba(255, 107, 0, 0.08)',
      borderColor: 'rgba(255, 107, 0, 0.35)',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&h=700&q=80',
      imageCaption: 'Students explore courses & verify qualification equivalency in seconds',
      description: 'Prospective students get welcoming, instant answers to course and fee questions 24/7. International qualifications are evaluated against university benchmarks, routing qualified applicants directly to admissions staff without lost emails or delays.',
      keyOutcomes: [
        '24/7 welcoming guidance for domestic & international prospects',
        'Automatic entry grade & English requirement evaluations',
        'Direct connection to university admissions staff without lost emails',
        'Step-by-step document checklists that speed up completed applications'
      ],
      stagesIncluded: [
        '01 University & Course Discovery',
        '02 Instant Inquiries & Answers',
        '03 Entry Grade & Qualification Check',
        '04 Admissions Advisor Connection',
        '05 Application & Document Review',
        '06 Offer Issuance & Acceptance'
      ],
      surfaces: ['University Web Portals', 'Student Inquiry Assistant', 'Compass Admissions Desk'],
      systems: ['Admissions Database', 'University CRM', 'Official WhatsApp Channel']
    },
    {
      id: 'enrol',
      stepRange: 'Stages 07 – 08',
      title: 'Arrival & Accommodation',
      subtitle: 'From Offer to Living on Campus',
      tagline: 'Guaranteed housing & smooth visa prep',
      color: '#0284c7',
      bgLight: 'rgba(2, 132, 199, 0.08)',
      borderColor: 'rgba(2, 132, 199, 0.35)',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&h=700&q=80',
      imageCaption: 'Verified campus housing & digital room key issued before landing',
      description: 'The journey continues seamlessly without starting from scratch. Incoming students receive a clear pre-arrival checklist, secure verified campus housing with digital tenancy agreements, and arrive confident and ready for classes.',
      keyOutcomes: [
        'Step-by-step visa checklist and airport arrival support',
        'Guaranteed, verified student accommodation before flying',
        'Zero manual data re-entry: student records sync automatically',
        'Daily lecture timetables and course materials ready in their app'
      ],
      stagesIncluded: [
        '07 Visa Preparation & Travel Readiness',
        '08 Campus Housing & Timetable Setup'
      ],
      surfaces: ['WorldLynk Student App', 'Compass Admissions Console', 'Accommodation Portal'],
      systems: ['Student Records System (SIS)', 'Learning Portal (Moodle/Canvas)', 'Campus Timetable Feeds']
    },
    {
      id: 'engage',
      stepRange: 'Stages 09 – 11',
      title: 'Campus Life & Careers',
      subtitle: 'From Day One to Graduation & Employment',
      tagline: 'Welfare check-ins, visa safety & careers',
      color: '#10b981',
      bgLight: 'rgba(16, 185, 129, 0.08)',
      borderColor: 'rgba(16, 185, 129, 0.35)',
      image: '/images/student_support.png',
      imageCaption: 'Tutors review supportive check-in drafts; students thrive',
      description: 'Throughout campus life, WorldLynk supports students with 1-tap check-in, notices early signs of burnout, and prepares supportive check-in drafts for tutors. As graduation approaches, students transition directly into career mentorship and graduate jobs.',
      keyOutcomes: [
        '1-tap class check-in on smartphone; zero lost paper registers',
        'Gentle check-in drafts prepared for tutors when students miss classes',
        'Automatic checks against the 20-hour visa work cap for peace of mind',
        'Tailored CV feedback, mock interview practice & graduate job matching'
      ],
      stagesIncluded: [
        '09 Daily Campus Life & 24/7 Guidance',
        '10 Caring Support When Students Struggle',
        '11 Careers, Internships & Graduate Routes'
      ],
      surfaces: ['WorldLynk Student App', 'Compass Staff Portal', 'Senior Tutor & Welfare Desks'],
      systems: ['Attendance Records', 'Student Academic Files', 'Graduate Career Networks']
    }
  ];

  const currentZone = zones.find(z => z.id === activeZone) || zones[0];

  return (
    <section 
      className="section section-stone" 
      style={{ 
        backgroundColor: 'var(--wl-light)', 
        color: '#0c0c0f', 
        borderTop: '1px solid #d4d0ca', 
        borderBottom: '1px solid #d4d0ca', 
        position: 'relative' 
      }}
    >
      <div className="main-container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem' }}>
          <div className="mono-label" style={{ color: 'var(--wl-accent)', marginBottom: '0.75rem', fontWeight: 700 }}>
            CONTINUOUS LIFECYCLE ARCHITECTURE
          </div>
          <h2 className="headline-lg" style={{ marginBottom: '1rem', color: '#0c0c0f' }}>
            From first interest to student success.
          </h2>
          <p className="body-lg" style={{ color: '#52525b', lineHeight: 1.6 }}>
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
                  backgroundColor: '#ffffff',
                  border: isSelected ? `2px solid ${zone.color}` : '1px solid #d4d0ca',
                  borderRadius: '14px',
                  padding: '1.75rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: isSelected 
                    ? `0 12px 30px -8px ${zone.color}35, 0 4px 10px rgba(0, 0, 0, 0.05)` 
                    : '0 2px 8px rgba(0, 0, 0, 0.04)'
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
                  <span style={{ fontSize: '0.72rem', color: '#52525b', fontWeight: 600 }}>
                    {zone.tagline}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0c0c0f', marginBottom: '0.35rem' }}>
                  {zone.title}
                </h3>
                <div style={{ fontSize: '0.85rem', color: '#52525b', fontWeight: 500, marginBottom: '1.25rem' }}>
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
            backgroundColor: '#ffffff', 
            borderRadius: '16px', 
            border: `1px solid rgba(0, 0, 0, 0.08)`,
            padding: '2.5rem',
            position: 'relative',
            boxShadow: '0 20px 45px -15px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04)'
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

              <h3 className="headline-md" style={{ color: '#0c0c0f', marginBottom: '1rem' }}>
                {currentZone.title}: {currentZone.subtitle}
              </h3>
              
              <p className="body-md" style={{ color: '#52525b', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                {currentZone.description}
              </p>

              <div style={{ marginBottom: '1.75rem' }}>
                <div className="mono-sm" style={{ color: '#71717a', marginBottom: '0.75rem', fontWeight: 600 }}>
                  KEY INSTITUTIONAL OUTCOMES:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {currentZone.keyOutcomes.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={16} style={{ color: currentZone.color, flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '0.88rem', color: '#18181b', lineHeight: 1.4 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link 
                  to="/journey" 
                  className="btn-primary" 
                  style={{ 
                    padding: '0.75rem 1.4rem', 
                    fontSize: '0.88rem',
                    backgroundColor: currentZone.color,
                    borderColor: currentZone.color,
                    color: '#ffffff'
                  }}
                >
                  Explore 11-Stage Student Journey <ArrowRight size={14} />
                </Link>
                <Link 
                  to="/demo" 
                  className="btn-secondary" 
                  style={{ 
                    padding: '0.75rem 1.4rem', 
                    fontSize: '0.88rem', 
                    border: '1px solid #d4d0ca', 
                    backgroundColor: '#f4f2ee',
                    color: '#0c0c0f' 
                  }}
                >
                  Book Walkthrough
                </Link>
              </div>
            </div>

            {/* Right: Visual Experience Preview & Stages Included */}
            <div 
              style={{ 
                backgroundColor: '#f8fafc', 
                borderRadius: '14px', 
                border: '1px solid #e2e8f0', 
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem'
              }}
            >
              {/* Dynamic Zone Image Spotlight */}
              {currentZone.image && (
                <div style={{ borderRadius: '10px', overflow: 'hidden', border: `1px solid #e2e8f0`, position: 'relative', boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
                  <img 
                    src={currentZone.image} 
                    alt={currentZone.title} 
                    style={{ width: '100%', height: '190px', objectFit: 'cover', display: 'block' }}
                  />
                  <div 
                    style={{ 
                      position: 'absolute', 
                      bottom: 0, 
                      left: 0, 
                      right: 0, 
                      background: 'linear-gradient(to top, rgba(12, 13, 18, 0.9) 0%, rgba(12, 13, 18, 0.4) 70%, transparent 100%)', 
                      padding: '0.65rem 0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span style={{ fontSize: '0.78rem', color: '#ffffff', fontWeight: 600 }}>
                      {currentZone.imageCaption}
                    </span>
                    <span style={{ fontSize: '0.68rem', color: currentZone.color, fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                      LIVE PREVIEW
                    </span>
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                <span className="mono-sm" style={{ fontWeight: 700, color: '#52525b' }}>STUDENT STAGES COVERED</span>
                <span style={{ fontSize: '0.75rem', color: currentZone.color, fontWeight: 700 }}>Continuous Record</span>
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
                      borderRadius: '8px',
                      backgroundColor: '#ffffff',
                      border: '1px solid #e2e8f0',
                      fontSize: '0.82rem',
                      color: '#0f172a',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>{stg}</span>
                    <span style={{ fontSize: '0.68rem', color: '#059669', backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '0.15rem 0.45rem', borderRadius: '4px', fontWeight: 600 }}>
                      Connected
                    </span>
                  </div>
                ))}
              </div>

              {/* Connected Surfaces & Systems Badges */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div>
                  <div className="mono-sm" style={{ fontSize: '0.7rem', color: '#64748b', marginBottom: '0.4rem' }}>ACTIVE SURFACES:</div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {currentZone.surfaces.map((s, idx) => (
                      <span 
                        key={idx} 
                        style={{ 
                          fontSize: '0.72rem', 
                          padding: '0.2rem 0.55rem', 
                          borderRadius: '4px', 
                          backgroundColor: '#ffffff', 
                          color: '#334155', 
                          border: '1px solid #cbd5e1' 
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mono-sm" style={{ fontSize: '0.7rem', color: '#64748b', marginBottom: '0.4rem' }}>CONNECTED INSTITUTIONAL SYSTEMS:</div>
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
