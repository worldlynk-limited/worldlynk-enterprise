import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Building,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  Users,
  Clock,
  ArrowRight,
  TrendingUp,
  FileText,
  DollarSign,
  Lock,
  ChevronRight,
  Sparkles,
  Download,
  AlertCircle
} from 'lucide-react';

const SECTORS = [
  {
    slug: 'vice-chancellor',
    role: 'Vice-Chancellors & University Leadership',
    shortRole: 'Leadership',
    image: '/images/oxford_campus.jpg',
    headline: 'Student Retention & Financial Stability',
    thesis: 'Protect student tuition revenue, keep visa compliance audit-ready, and support larger cohorts without burning out your administrative teams.',
    metric: '£3.8M',
    metricLabel: 'Average tuition protected per year by preventing student dropouts across 5,000 students',
    roiPill: '+18.4% Retention Yield',
    challenges: [
      'Heavy reliance on international student tuition amid shifting global visa policies.',
      'Staff burnout across academic advising and support teams struggling with growing caseloads.',
      'Disconnected databases (student records, learning portals, housing) making it difficult to spot issues early.'
    ],
    worldlynkSol: 'WorldLynk brings your campus systems together into one clear view. AI assistants spot at-risk students weeks earlier and prepare helpful check-ins, while faculty and staff review and approve every key action.',
    kpis: [
      { label: 'Tuition Protected', val: '£3.8M/yr' },
      { label: 'Staff Admin Saved', val: '62%' },
      { label: 'Audit Readiness', val: '100%' }
    ],
    quote: '"WorldLynk gave our leadership team real-time visibility across campus operations. We helped 142 at-risk international students stay on track in Term 1 alone."',
    quoteAuthor: 'Pro-Vice-Chancellor (Student Experience), Russell Group University'
  },
  {
    slug: 'registrars',
    role: 'Academic Registrars & Student Records',
    shortRole: 'Registrar',
    image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80',
    headline: 'Faster Approvals with Full Records Integrity',
    thesis: 'Clear peak-season backlogs for transcripts, course swaps, and visa documents with smart assistants that organize everything for staff approval.',
    metric: '62%',
    metricLabel: 'Reduction in routine manual enrollment and course audit inquiries',
    roiPill: 'Instant Processing',
    challenges: [
      'Weeks of processing delays during peak international credential evaluations.',
      'Manual visa paperwork prone to typos and missing records.',
      'High student stress and long queues during course add/drop periods.'
    ],
    worldlynkSol: 'AI assistants check qualification equivalencies, verify bank statements, and prepare draft visa certificates so registrars can review and approve in minutes.',
    kpis: [
      { label: 'Visa Prep Time', val: '4 mins (was 14 days)' },
      { label: 'Document Accuracy', val: '99.8%' },
      { label: 'System Sync Speed', val: 'Instant' }
    ],
    quote: '"Our registrar team used to drown in thousands of emails during Welcome Week. Compass organized over 80% of routine requests before staff even sat down at their desks."',
    quoteAuthor: 'Academic Registrar, UK University'
  },
  {
    slug: 'admissions',
    role: 'International Admissions & Recruitment',
    shortRole: 'Admissions',
    image: '/images/london_campus.jpg',
    headline: 'Guiding Offer Holders from Acceptance to Arrival',
    thesis: 'Help accepted international students complete visa checks, secure verified accommodation, and arrive on campus without stress.',
    metric: '+28%',
    metricLabel: 'Increase in offer-to-enrolled conversion velocity across international cohorts',
    roiPill: '-42% Drop-off Rate',
    challenges: [
      'Up to 35% of international offer holders drop out before arriving due to visa confusion or housing stress.',
      'Inquiries flooding inboxes from applicants across different global timezones.',
      'Shortage of verified student housing leading to last-minute offer withdrawals.'
    ],
    worldlynkSol: 'Helpful assistants on WhatsApp and Telegram answer applicant questions 24/7, guide them through pre-arrival checklists, and help them secure verified student housing.',
    kpis: [
      { label: 'Offer Conversion', val: '+28%' },
      { label: 'Response Time', val: '< 4 seconds' },
      { label: 'Housing Placement', val: '100% Placed' }
    ],
    quote: '"We reduced offer drop-offs by 42% because applicants had 24/7 guidance and secured verified student housing before ever leaving home."',
    quoteAuthor: 'Director of International Recruitment, London University'
  },
  {
    slug: 'compliance',
    role: 'Visa & Compliance Officers',
    shortRole: 'Compliance',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
    headline: 'Protecting Your Sponsor License & Visa Work Hours',
    thesis: 'Keep your sponsor license completely safe. QR attendance check-ins and smart work-hour tracking ensure full audit readiness at all times.',
    metric: '100%',
    metricLabel: 'Real-time student visa compliance with zero work-cap breaches',
    roiPill: 'Audit-Ready Always',
    challenges: [
      'Paper sign-in sheets vulnerable to proxy check-ins and misplaced records.',
      'Students inadvertently exceeding their legal 20-hour weekly term-time work limits.',
      'High administrative burden preparing for sponsor compliance inspections.'
    ],
    worldlynkSol: 'Secure QR codes make lecture check-in easy, while smart calendar tracking alerts students and staff before work hours exceed weekly legal limits.',
    kpis: [
      { label: 'Proxy Scan Risk', val: '0%' },
      { label: 'Work Cap Breaches', val: '0 Breaches' },
      { label: 'Inspection Audit', val: '1-Click Ready' }
    ],
    quote: '"When visa compliance inspectors requested our sponsor audit data, we generated complete attendance trails and work-hour records in minutes."',
    quoteAuthor: 'Head of Visa Compliance, UK University'
  },
  {
    slug: 'faculty-tutors',
    role: 'Personal Tutors & Academic Advisors',
    shortRole: 'Faculty',
    image: '/images/student_support.png',
    headline: 'Personalized Student Support Without the Paperwork',
    thesis: 'Spot students who need help weeks before they fall behind. Advisors receive a clear summary and pre-written outreach notes, saving hours of manual data checking.',
    metric: '+35%',
    metricLabel: 'More time spent mentoring students by eliminating routine admin tasks',
    roiPill: '89.2% Retention',
    challenges: [
      'Advisors handle large caseloads with little visibility into attendance dips across different modules.',
      'Interventions happen too late—often only after a student has already failed an assignment.',
      'Hours spent drafting routine extension emails and scheduling makeup sessions.'
    ],
    worldlynkSol: 'WorldLynk connects portal activity with attendance records. Advisors receive a clear briefing and suggested catch-up options ready to approve with one click.',
    kpis: [
      { label: 'Early Notice Lead Time', val: '14 Days Earlier' },
      { label: 'Admin Time Saved', val: '3.4 hrs / wk' },
      { label: 'Assignment Catch-up', val: '91% on-time' }
    ],
    quote: '"I no longer have to check 5 different portals to see if a student is struggling. The summary is right there—I just review it and focus on supporting the student."',
    quoteAuthor: 'Senior Lecturer & Senior Tutor, School of Computing'
  },
  {
    slug: 'housing-directors',
    role: 'Campus Accommodation & Student Life',
    shortRole: 'Housing',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
    headline: 'Safe, Verified Student Accommodation',
    thesis: 'Protect incoming students from rental scams with verified student accommodations and secure booking before they arrive in the UK.',
    metric: '100%',
    metricLabel: 'Verified housing placement for incoming international cohorts',
    roiPill: 'Zero Rental Scams',
    challenges: [
      'International students arriving in the UK without housing and falling prey to online scams.',
      'Limited visibility into residential occupancy and student arrival schedules.',
      'Late tenancy confirmations causing delayed arrivals and deferred enrollments.'
    ],
    worldlynkSol: 'Connects students with verified student halls and secure bookings before they leave home, giving families complete peace of mind.',
    kpis: [
      { label: 'Rental Scam Incidents', val: '0 Reported' },
      { label: 'Deposit Protection', val: 'Fully Secure' },
      { label: 'Room Occupancy', val: '99.4%' }
    ],
    quote: '"WorldLynk transformed our arrival experience. Every single student had a confirmed room waiting for them before they even touched down at the airport."',
    quoteAuthor: 'Director of Campus Estates & Residential Life'
  }
];

export default function SolutionsPage() {
  const { role } = useParams();
  
  const initialIdx = role ? SECTORS.findIndex(s => s.slug === role) : 0;
  const [activeIdx, setActiveIdx] = useState(initialIdx !== -1 ? initialIdx : 0);
  const [showBriefingModal, setShowBriefingModal] = useState(false);

  const activeSector = SECTORS[activeIdx] || SECTORS[0];

  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', backgroundColor: 'var(--wl-dark)', color: '#ffffff' }}>
      
      {/* ── HERO BANNER ─────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '32px', borderBottom: '1px solid var(--border-hairline)' }}>
        <div className="main-container">
          <div className="flex-between flex-wrap gap-md">
            <div>
              <div className="mono-label" style={{ color: 'var(--accent-orange)', marginBottom: '8px' }}>
                SOLUTIONS FOR YOUR CAMPUS TEAMS
              </div>
              <h1 className="headline-xl" style={{ marginBottom: '12px', lineHeight: 1.15 }}>
                Built for every team across your university.
              </h1>
              <p className="body-lg text-secondary" style={{ maxWidth: '780px' }}>
                Whether you're protecting student retention, clearing registrar queues, guiding international arrivals, or supporting tutors, WorldLynk gives your teams the tools to work faster and with complete confidence.
              </p>
            </div>

            <div className="flex flex-col gap-sm" style={{ minWidth: '220px' }}>
              <div className="card-dark" style={{ padding: '16px', border: '1px solid var(--border-subtle)' }}>
                <div className="mono-label" style={{ color: 'var(--accent-cyan)', fontSize: '10px' }}>ACTIVE VIEW</div>
                <div style={{ fontSize: '1.25rem', fontWeight: '800', marginTop: '2px' }}>{activeSector.shortRole}</div>
                <div className="mono-sm text-secondary" style={{ fontSize: '11px' }}>{activeSector.roiPill}</div>
              </div>
              <button onClick={() => setShowBriefingModal(true)} className="btn-primary btn-sm" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <Download size={13} />
                <span>Download Solution Guide</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── STAKEHOLDER NAVIGATION BAR ──────────────────────────── */}
      <section className="section" style={{ paddingTop: '32px', paddingBottom: '32px' }}>
        <div className="main-container">
          <div className="flex gap-xs mb-xl" style={{ overflowX: 'auto', paddingBottom: '8px' }}>
            {SECTORS.map((s, idx) => {
              const isSelected = activeIdx === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className="tab-btn"
                  style={{
                    padding: '12px 16px',
                    borderRadius: '10px',
                    backgroundColor: isSelected ? 'var(--accent-orange)' : '#13131c',
                    color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '12.5px',
                    fontWeight: isSelected ? '700' : '500',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '2px'
                  }}
                >
                  <span className="mono-sm" style={{ fontSize: '9px', opacity: 0.8 }}>0{idx + 1} // STAKEHOLDER</span>
                  <span>{s.role.split('&')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Detailed Sector Spotlight Card */}
          <div className="card-dark mb-3xl" style={{ padding: '36px', borderRadius: '16px', border: '1px solid var(--border-subtle)', backgroundColor: '#13131c' }}>
            <div className="responsive-grid-split">
              
              {/* Left Column: Challenges & Resolution */}
              <div>
                <span className="pill pill-active mb-sm">{activeSector.role}</span>
                <h2 className="headline-lg" style={{ margin: '8px 0 16px 0', lineHeight: 1.2 }}>
                  {activeSector.headline}
                </h2>
                <p className="body-md text-secondary mb-xl">
                  {activeSector.thesis}
                </p>

                {/* Challenge List */}
                <div style={{ backgroundColor: '#101016', padding: '18px', borderRadius: '12px', borderLeft: '3px solid var(--status-fail)', marginBottom: '20px' }}>
                  <div className="mono-label" style={{ fontSize: '9.5px', color: 'var(--status-fail)', marginBottom: '6px' }}>THE CHALLENGE</div>
                  <ul style={{ paddingLeft: '18px', color: 'var(--text-secondary)', fontSize: '12.5px', lineHeight: 1.6 }}>
                    {activeSector.challenges.map((c, i) => (
                      <li key={i} style={{ marginBottom: '6px' }}>{c}</li>
                    ))}
                  </ul>
                </div>

                {/* Resolution */}
                <div style={{ backgroundColor: '#101016', padding: '18px', borderRadius: '12px', borderLeft: '3px solid var(--status-pass)', marginBottom: '24px' }}>
                  <div className="mono-label" style={{ fontSize: '9.5px', color: 'var(--status-pass)', marginBottom: '6px' }}>HOW WORLDLYNK HELPS</div>
                  <p style={{ fontSize: '13px', color: '#ffffff', lineHeight: 1.5 }}>
                    {activeSector.worldlynkSol}
                  </p>
                </div>

                <div className="flex gap-sm">
                  <Link to="/demo" className="btn-primary">
                    See {activeSector.shortRole} Solutions ➔
                  </Link>
                  <button onClick={() => setShowBriefingModal(true)} className="btn-secondary">
                    Download Guide (PDF)
                  </button>
                </div>
              </div>

              {/* Right Column: Image, KPIs & Testimonial Quote */}
              <div className="flex flex-col gap-lg">
                {/* Photographic Campus Spotlight Banner */}
                {activeSector.image && (
                  <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', height: '180px', border: '1px solid var(--border-subtle)' }}>
                    <img
                      src={activeSector.image}
                      alt={activeSector.role}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(19, 19, 28, 0.95) 0%, rgba(19, 19, 28, 0.2) 60%, transparent 100%)' }} />
                    <div style={{ position: 'absolute', bottom: '12px', left: '16px', right: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                      <span className="pill pill-approved" style={{ fontSize: '9px' }}>CAMPUS PROVEN</span>
                      <span className="mono-sm" style={{ fontSize: '10px', color: '#ffffff', fontWeight: '700' }}>{activeSector.shortRole} Workflow</span>
                    </div>
                  </div>
                )}

                {/* Metric Hero Card */}
                <div style={{ backgroundColor: '#0d0d14', padding: '24px', borderRadius: '14px', border: '1px solid var(--border-subtle)' }}>
                  <div className="mono-label" style={{ color: 'var(--accent-orange)' }}>KEY OUTCOME</div>
                  <div style={{ fontSize: '2.8rem', fontWeight: '800', color: 'var(--accent-orange)', marginTop: '4px', lineHeight: 1 }}>
                    {activeSector.metric}
                  </div>
                  <div className="body-sm text-secondary mt-sm" style={{ lineHeight: 1.4 }}>
                    {activeSector.metricLabel}
                  </div>
                </div>

                {/* KPI Breakdown */}
                <div className="grid-3">
                  {activeSector.kpis.map((kpi, ki) => (
                    <div key={ki} style={{ backgroundColor: '#101016', padding: '14px', borderRadius: '10px', border: '1px solid var(--border-hairline)' }}>
                      <div className="mono-sm text-secondary" style={{ fontSize: '10px' }}>{kpi.label}</div>
                      <div style={{ fontSize: '1.25rem', fontWeight: '800', color: '#ffffff', marginTop: '4px' }}>{kpi.val}</div>
                    </div>
                  ))}
                </div>

                {/* Executive Testimonial Quote */}
                <div style={{ backgroundColor: '#181822', padding: '20px', borderRadius: '12px', border: '1px solid #29293a', position: 'relative' }}>
                  <p style={{ fontSize: '13px', fontStyle: 'italic', color: 'rgba(255,255,255,0.9)', lineHeight: 1.5 }}>
                    {activeSector.quote}
                  </p>
                  <div className="mono-sm text-muted mt-sm" style={{ fontSize: '10.5px' }}>
                    — {activeSector.quoteAuthor}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── MODAL: EXECUTIVE BRIEFING DOWNLOAD ──────────────────── */}
      {showBriefingModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.85)',
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
            maxWidth: '560px',
            width: '100%',
            padding: '28px',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.9)'
          }}>
            <div className="flex-between mb-md">
              <div>
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>SOLUTION GUIDE</span>
                <h3 className="headline-sm" style={{ marginTop: '2px' }}>{activeSector.role}</h3>
              </div>
              <button onClick={() => setShowBriefingModal(false)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
            </div>

            <p className="body-sm text-secondary mb-md">
              Download the complete overview with workflow breakdowns, student feedback, and step-by-step onboarding details.
            </p>

            <div style={{ backgroundColor: '#0a0a0f', padding: '14px', borderRadius: '10px', border: '1px solid #222230', marginBottom: '20px' }}>
              <div className="mono-sm" style={{ fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div><strong>DOCUMENT:</strong> WorldLynk_Solution_Guide_{activeSector.slug}.pdf</div>
                <div><strong>FORMAT:</strong> PDF Summary</div>
                <div><strong>AUDIENCE:</strong> University Staff &amp; Leadership</div>
              </div>
            </div>

            <div className="flex justify-end gap-sm">
              <button onClick={() => setShowBriefingModal(false)} className="btn-secondary btn-sm">
                Cancel
              </button>
              <button onClick={() => { alert(`Downloading Guide for: ${activeSector.role}`); setShowBriefingModal(false); }} className="btn-primary btn-sm">
                Download PDF Package ➔
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
