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
      image: '/images/student_universities_mockup.png',
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
      color: '#38bdf8',
      bgLight: 'rgba(56, 189, 248, 0.08)',
      borderColor: 'rgba(56, 189, 248, 0.35)',
      image: '/images/student_housing_mockup.png',
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
                <Link 
                  to="/journey" 
                  className="btn-primary" 
                  style={{ 
                    padding: '0.75rem 1.4rem', 
                    fontSize: '0.88rem',
                    backgroundColor: currentZone.color,
                    borderColor: currentZone.color
                  }}
                >
                  Explore 11-Stage Student Journey <ArrowRight size={14} />
                </Link>
                <Link 
                  to="/demo" 
                  className="btn-secondary" 
                  style={{ padding: '0.75rem 1.4rem', fontSize: '0.88rem', border: '1px solid #2f2f3d', color: '#ffffff' }}
                >
                  Book Walkthrough
                </Link>
              </div>
            </div>

            {/* Right: Visual Experience Preview & Stages Included */}
            <div 
              style={{ 
                backgroundColor: '#181922', 
                borderRadius: '12px', 
                border: '1px solid #2a2a38', 
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem'
              }}
            >
              {/* Dynamic Zone Image Spotlight */}
              {currentZone.image && (
                <div style={{ borderRadius: '10px', overflow: 'hidden', border: `1px solid ${currentZone.color}33`, position: 'relative' }}>
                  <img 
                    src={currentZone.image} 
                    alt={currentZone.title} 
                    style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }}
                  />
                  <div 
                    style={{ 
                      position: 'absolute', 
                      bottom: 0, 
                      left: 0, 
                      right: 0, 
                      background: 'linear-gradient(to top, rgba(12, 13, 18, 0.95), rgba(12, 13, 18, 0.4))', 
                      padding: '0.6rem 0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span style={{ fontSize: '0.76rem', color: '#ffffff', fontWeight: 600 }}>
                      {currentZone.imageCaption}
                    </span>
                    <span style={{ fontSize: '0.68rem', color: currentZone.color, fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                      LIVE PREVIEW
                    </span>
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #2a2a38', paddingBottom: '0.5rem' }}>
                <span className="mono-sm text-muted" style={{ fontWeight: 700 }}>STUDENT STAGES COVERED</span>
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
