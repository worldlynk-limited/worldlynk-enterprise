import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import EnterpriseCTASection from '../components/EnterpriseCTASection';
import {
  ShieldCheck,
  TrendingUp,
  Clock,
  CheckCircle2,
  Users,
  GraduationCap,
  Building,
  Briefcase,
  FileCheck,
  ChevronRight,
  Sparkles,
  Download,
  AlertCircle,
  ArrowRight,
  ExternalLink,
  Laptop,
  Layers,
  Activity,
  Check,
  Lock,
  Compass
} from 'lucide-react';

const SECTORS = [
  {
    slug: 'vice-chancellor',
    role: 'Vice-Chancellors & University Leadership',
    shortRole: 'Leadership',
    headline: 'Student Retention & Financial Stability',
    thesis: 'Protect student tuition revenue, keep visa compliance audit-ready, and support larger cohorts without burning out your administrative teams.',
    metric: '£3.8M',
    metricLabel: 'Average tuition protected per year by preventing student dropouts across a 15,000-student cohort',
    roiPill: '+18.4% Retention Yield',
    systemIntegrations: 'Tribal SITS · HESA Data Platform · PowerBI Governance',
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
    workflowMockup: {
      type: 'LEADERSHIP_COCKPIT',
      title: 'Institutional Retention & Financial Sentinel',
      liveSignal: '142 At-Risk Students Identified & Retained (Term 1)',
      stats: [
        { label: 'Retention Yield', val: '94.2%', change: '+3.8%' },
        { label: 'Protected Revenue', val: '£3,840,000', change: 'On Track' },
        { label: 'UKVI Sponsor Risk', val: '0 Breaches', change: 'Audit-Proof' }
      ]
    },
    quote: '"WorldLynk gave our leadership team real-time visibility across campus operations. We helped 142 at-risk international students stay on track in Term 1 alone."',
    quoteAuthor: 'Pro-Vice-Chancellor (Student Experience), Russell Group University'
  },
  {
    slug: 'registrars',
    role: 'Academic Registrars & Student Records',
    shortRole: 'Registrar',
    headline: 'Faster Approvals with Full Records Integrity',
    thesis: 'Clear peak-season backlogs for transcripts, course swaps, and visa documents with smart assistants that organize everything for staff approval.',
    metric: '62%',
    metricLabel: 'Reduction in routine manual enrollment and course audit inquiries during peak season',
    roiPill: 'Instant Processing',
    systemIntegrations: 'Tribal SITS:Vision · Ellucian Banner · Turnitin API',
    challenges: [
      'Weeks of processing delays during peak international credential evaluations.',
      'Manual visa paperwork prone to typos and missing records.',
      'High student stress and long queues during course add/drop periods.'
    ],
    worldlynkSol: 'AI assistants check qualification equivalencies, verify bank statements, and prepare draft visa certificates so registrars can review and approve in minutes.',
    kpis: [
      { label: 'Visa Prep Time', val: '4 mins (was 14d)' },
      { label: 'Document Accuracy', val: '99.8%' },
      { label: 'System Sync Speed', val: 'Instant' }
    ],
    workflowMockup: {
      type: 'REGISTRAR_QUEUE',
      title: 'Autonomous Degree Audit & CAS Issuance Queue',
      liveSignal: '48 CAS Certificates Prepared · 0 Typing Errors',
      stats: [
        { label: 'Queue Clearance', val: '4.2 mins/case', change: '96% faster' },
        { label: 'Equivalency Engine', val: 'UK ENIC Synced', change: 'Verified' },
        { label: 'SITS Sync Status', val: 'Bi-directional', change: 'Zero drift' }
      ]
    },
    quote: '"Our registrar team used to drown in thousands of emails during Welcome Week. Compass organized over 80% of routine requests before staff even sat down at their desks."',
    quoteAuthor: 'Academic Registrar, UK University'
  },
  {
    slug: 'admissions',
    role: 'International Admissions & Recruitment',
    shortRole: 'Admissions',
    headline: 'Guiding Offer Holders from Acceptance to Arrival',
    thesis: 'Help accepted international students complete visa checks, secure verified accommodation, and arrive on campus without stress.',
    metric: '+28%',
    metricLabel: 'Increase in offer-to-enrolled conversion velocity across international cohorts',
    roiPill: '-42% Drop-off Rate',
    systemIntegrations: 'UCAS Web-Link · Slate CRM · Stripe Escrow PBSA',
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
    workflowMockup: {
      type: 'ADMISSIONS_FUNNEL',
      title: 'Global Offer-to-Arrival Conversion Pipeline',
      liveSignal: '1,840 International Students Guided to Campus',
      stats: [
        { label: 'CAS Acceptance', val: '92.4%', change: '+14% YoY' },
        { label: 'Pre-Arrival Verified', val: '98.1%', change: 'Housing Done' },
        { label: 'Deposit Escrow', val: '£14.2M Locked', change: 'Stripe Escrow' }
      ]
    },
    quote: '"We reduced offer drop-offs by 42% because applicants had 24/7 guidance and secured verified student housing before ever leaving home."',
    quoteAuthor: 'Director of International Recruitment, London University'
  },
  {
    slug: 'compliance',
    role: 'Visa & Compliance Officers',
    shortRole: 'Compliance',
    headline: 'Protecting Your Sponsor License & Visa Work Hours',
    thesis: 'Keep your sponsor license completely safe. QR attendance check-ins and smart work-hour tracking ensure full audit readiness at all times.',
    metric: '100%',
    metricLabel: 'Real-time student visa compliance with zero work-cap breaches',
    roiPill: 'Audit-Ready Always',
    systemIntegrations: 'Home Office SMS API · Salto Access · Jisc Eduroam',
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
    workflowMockup: {
      type: 'COMPLIANCE_SENTINEL',
      title: 'UKVI Sponsor License & 20h Work Cap Radar',
      liveSignal: 'Zero Compliance Breaches Across 15,000 Cohort',
      stats: [
        { label: 'Term Work Cap', val: '20h Hard Ceiling', change: 'Active Guard' },
        { label: 'QR Dynamic Seed', val: 'Rotating TOTP', change: 'Anti-Proxy' },
        { label: 'SMS Audit Ledger', val: 'SHA-256 Chained', change: 'Home Office' }
      ]
    },
    quote: '"When visa compliance inspectors requested our sponsor audit data, we generated complete attendance trails and work-hour records in minutes."',
    quoteAuthor: 'Head of Visa Compliance, UK University'
  },
  {
    slug: 'faculty-tutors',
    role: 'Personal Tutors & Academic Advisors',
    shortRole: 'Faculty',
    headline: 'Personalized Student Support Without the Paperwork',
    thesis: 'Spot students who need help weeks before they fall behind. Advisors receive a clear summary and pre-written outreach notes, saving hours of manual data checking.',
    metric: '+35%',
    metricLabel: 'More time spent mentoring students by eliminating routine admin tasks',
    roiPill: '89.2% Retention',
    systemIntegrations: 'Moodle LMS · Canvas by Instructure · Outlook Calendar',
    challenges: [
      'Advisors handle large caseloads with little visibility into attendance dips across different modules.',
      'Interventions happen too late—often only after a student has already failed an assignment.',
      'Hours spent drafting routine extension emails and scheduling makeup sessions.'
    ],
    worldlynkSol: 'WorldLynk connects portal activity with attendance records. Advisors receive a clear briefing and suggested catch-up options ready to approve with one click.',
    kpis: [
      { label: 'Early Notice Lead', val: '14 Days Earlier' },
      { label: 'Admin Time Saved', val: '3.4 hrs / wk' },
      { label: 'Catch-up Rate', val: '91% on-time' }
    ],
    workflowMockup: {
      type: 'TUTOR_ADVISOR',
      title: 'Early Warning Briefing & Catch-Up Workflow',
      liveSignal: '3 At-Risk Students Recommended for 1-on-1 Outreach',
      stats: [
        { label: 'Notice Lead Time', val: '14 Days Earlier', change: 'Pre-Exam' },
        { label: '1-Click Draft Note', val: 'Empathetic AI', change: 'Staff Approved' },
        { label: 'Module Retention', val: '+35% Yield', change: 'Measured' }
      ]
    },
    quote: '"I no longer have to check 5 different portals to see if a student is struggling. The summary is right there—I just review it and focus on supporting the student."',
    quoteAuthor: 'Senior Tutor & Department Lead, Scottish University'
  },
  {
    slug: 'housing',
    role: 'Campus Accommodation & Student Life',
    shortRole: 'Housing',
    headline: 'Safe, Verified Student Accommodation',
    thesis: 'Eliminate rental scams and long waitlists. Connect students directly with verified student housing providers with secure payments held safely until move-in.',
    metric: '100%',
    metricLabel: 'Verified student housing placement with complete scam protection',
    roiPill: 'Zero Rental Scams',
    systemIntegrations: 'StarRez · Kinetics KX · Stripe Escrow Marketplace',
    challenges: [
      'International students falling prey to fake online rental listings.',
      'Campus housing offices overwhelmed with inquiries from unplaced students.',
      'Complicated international money transfers for deposits and rent.'
    ],
    worldlynkSol: 'All student accommodation listings are verified before publishing, and payments are protected in secure escrow accounts until the student receives their keys on campus.',
    kpis: [
      { label: 'Verified Listings', val: '100% Inspected' },
      { label: 'Deposit Escrow', val: 'Stripe Protected' },
      { label: 'Student Stress', val: 'Significantly Lower' }
    ],
    workflowMockup: {
      type: 'HOUSING_ESCROW',
      title: 'Verified PBSA Living & Escrow Protection',
      liveSignal: '£14.2M in Student Deposits Held in Protected Escrow',
      stats: [
        { label: 'Tenancy Integrity', val: '100% Accredited', change: 'No Scams' },
        { label: 'Key Pickup Check', val: 'NFC Scan Valid', change: 'Move-in Safe' },
        { label: 'Deposit Release', val: 'Post-Inspection', change: 'Escrow Lock' }
      ]
    },
    quote: '"WorldLynk gave our incoming students peace of mind. Not a single student in our cohort reported accommodation issues during Welcome Week."',
    quoteAuthor: 'Head of Student Accommodation Services, UK University'
  }
];

export default function SolutionsPage() {
  const { role } = useParams();
  const [activeIdx, setActiveIdx] = useState(0);
  const [showBriefingModal, setShowBriefingModal] = useState(false);

  useEffect(() => {
    if (role) {
      const foundIdx = SECTORS.findIndex(s => s.slug === role);
      if (foundIdx !== -1) {
        setActiveIdx(foundIdx);
      }
    }
  }, [role]);

  const activeSector = SECTORS[activeIdx];

  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', backgroundColor: 'var(--wl-dark)', color: '#0c0c0f' }}>
      
      {/* ── HERO BANNER ─────────────────────────────────────────── */}
      <section className="section page-hero-banner" style={{ borderBottom: '1px solid #d8d4cd', paddingBottom: '3.5rem' }}>
        <div className="main-container">
          <div className="flex-between flex-wrap gap-md" style={{ alignItems: 'flex-start' }}>
            <div style={{ maxWidth: '820px' }}>
              <div className="mono-label" style={{ color: 'var(--accent-orange)', marginBottom: '8px' }}>
                SOLUTIONS BY BUYER &amp; CAMPUS ROLE
              </div>
              <h1 className="headline-xl" style={{ marginBottom: '16px', lineHeight: 1.12 }}>
                Built for every team across your university.
              </h1>
              <p className="body-lg text-secondary" style={{ maxWidth: '750px', lineHeight: 1.65 }}>
                Whether you're protecting student retention, clearing registrar queues, guiding international arrivals, or supporting tutors, WorldLynk gives your teams the tools to work faster and with complete confidence.
              </p>

              {/* Institutional Framework Seals */}
              <div className="flex gap-md flex-wrap mt-lg pt-md" style={{ borderTop: '1px solid #d8d4cd' }}>
                <div className="flex gap-xs items-center mono-sm" style={{ fontSize: '11px', color: '#475569' }}>
                  <ShieldCheck size={14} color="var(--accent-orange)" />
                  <span>Role-Based Granular Permissions (RBAC)</span>
                </div>
                <div className="flex gap-xs items-center mono-sm" style={{ fontSize: '11px', color: '#475569' }}>
                  <Lock size={14} color="var(--status-pass)" />
                  <span>Audit-Trail Governed Human-in-the-Loop</span>
                </div>
                <div className="flex gap-xs items-center mono-sm" style={{ fontSize: '11px', color: '#475569' }}>
                  <Building size={14} color="#0284c7" />
                  <span>Works Across Russell Group &amp; Post-92 Campuses</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-sm" style={{ minWidth: '240px' }}>
              <div className="card-elevated" style={{ padding: '20px', border: '1px solid #d8d4cd', borderRadius: '14px', backgroundColor: '#ffffff' }}>
                <div className="mono-label" style={{ color: 'var(--accent-orange)', fontSize: '10px' }}>ACTIVE VIEW</div>
                <div style={{ fontSize: '1.25rem', fontWeight: '800', marginTop: '2px', color: '#0c0c0f' }}>{activeSector.shortRole}</div>
                <div className="mono-sm text-secondary" style={{ fontSize: '11px', marginTop: '2px' }}>{activeSector.roiPill}</div>
              </div>
              <button onClick={() => setShowBriefingModal(true)} className="btn-primary btn-sm" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <Download size={13} /> Download Solution Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE ROLE NAVIGATION WORKBENCH ───────────────── */}
      <section className="section" style={{ paddingTop: '36px', paddingBottom: '70px' }}>
        <div className="main-container">

          {/* Persona Selection Pills */}
          <div className="flex gap-xs mb-lg overflow-x-auto pb-xs" style={{ borderBottom: '1px solid #d8d4cd', paddingBottom: '14px' }}>
            {SECTORS.map((s, idx) => {
              const isSelected = activeIdx === idx;
              return (
                <button
                  key={s.slug}
                  onClick={() => setActiveIdx(idx)}
                  className={`tab-btn ${isSelected ? 'active' : ''}`}
                  style={{
                    padding: '8px 16px',
                    fontSize: '12px',
                    fontWeight: isSelected ? '700' : '500',
                    backgroundColor: isSelected ? '#0c0c0f' : '#ffffff',
                    color: isSelected ? '#ffffff' : '#475569',
                    border: isSelected ? '1px solid #0c0c0f' : '1px solid #d8d4cd',
                    borderRadius: '8px',
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span className="mono-sm" style={{ fontSize: '9px', opacity: 0.7 }}>0{idx + 1}</span>
                  <span>{s.shortRole}</span>
                </button>
              );
            })}
          </div>

          {/* Master Detail Card */}
          <div className="card-elevated mb-xl" style={{ padding: '36px', border: '1px solid #d8d4cd', borderRadius: '16px', backgroundColor: '#ffffff' }}>
            <div className="responsive-grid-split" style={{ alignItems: 'start', gap: '40px' }}>
              
              {/* Left Column: Role Details & Core Value */}
              <div>
                <div className="flex-between mb-xs">
                  <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>
                    CAMPUS STAKEHOLDER // {activeSector.role.toUpperCase()}
                  </span>
                  <span className="pill pill-approved" style={{ fontSize: '9px' }}>
                    {activeSector.roiPill}
                  </span>
                </div>
                
                <h2 className="headline-lg" style={{ margin: '8px 0 16px 0', lineHeight: 1.15, color: '#0c0c0f' }}>
                  {activeSector.headline}
                </h2>
                
                <p className="body-lg text-secondary mb-lg" style={{ lineHeight: 1.65 }}>
                  {activeSector.thesis}
                </p>

                {/* Challenges Block (Urgent Soft-Crimson) */}
                <div style={{ 
                  backgroundColor: '#fff5f5', 
                  border: '1px solid #fecaca', 
                  borderRadius: '12px', 
                  padding: '20px', 
                  marginBottom: '16px' 
                }}>
                  <div className="mono-label" style={{ color: '#dc2626', fontSize: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <AlertCircle size={14} /> THE CAMPUS CHALLENGE
                  </div>
                  <ul style={{ margin: '10px 0 0 0', paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {activeSector.challenges.map((c, i) => (
                      <li key={i} style={{ fontSize: '13px', color: '#7f1d1d', lineHeight: 1.5 }}>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* WorldLynk Transformation (Reassuring Soft-Evergreen) */}
                <div style={{ 
                  backgroundColor: '#f0fdf4', 
                  border: '1px solid #bbf7d0', 
                  borderRadius: '12px', 
                  padding: '20px', 
                  marginBottom: '24px' 
                }}>
                  <div className="mono-label" style={{ color: '#16a34a', fontSize: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle2 size={14} /> HOW WORLDLYNK TRANSFORMS THIS
                  </div>
                  <p style={{ fontSize: '13.5px', color: '#14532d', lineHeight: 1.6, fontWeight: '500', margin: '8px 0 0 0' }}>
                    {activeSector.worldlynkSol}
                  </p>
                </div>

                <div className="mono-sm text-muted mb-md" style={{ fontSize: '11px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Layers size={13} color="var(--accent-orange)" />
                  <span>Integrates with: <strong style={{ color: '#0c0c0f' }}>{activeSector.systemIntegrations}</strong></span>
                </div>

                <div className="flex gap-sm" style={{ flexWrap: 'wrap' }}>
                  <Link to="/demo" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <span>Schedule {activeSector.shortRole} Walkthrough</span>
                    <ArrowRight size={14} />
                  </Link>
                  <button onClick={() => setShowBriefingModal(true)} className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <Download size={14} />
                    <span>Download Role Blueprint (PDF)</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Live Institutional Workflow Preview Console */}
              <div className="flex flex-col gap-lg">
                
                {/* Real-time Interactive Workflow Preview Console (Replacing generic photo placeholder) */}
                <div style={{
                  backgroundColor: '#0c0c0f',
                  borderRadius: '16px',
                  padding: '22px',
                  color: '#ffffff',
                  boxShadow: '0 12px 30px rgba(12, 12, 15, 0.25)',
                  border: '1px solid #27272a'
                }}>
                  <div className="flex-between pb-xs" style={{ borderBottom: '1px solid #27272a' }}>
                    <div className="flex gap-xs items-center">
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--status-pass)' }} />
                      <span className="mono-label" style={{ fontSize: '9.5px', color: 'var(--accent-orange)' }}>
                        {activeSector.workflowMockup.title.toUpperCase()}
                      </span>
                    </div>
                    <span className="pill pill-approved" style={{ fontSize: '8.5px' }}>
                      COMPASS OS
                    </span>
                  </div>

                  <div className="mono-sm mt-sm mb-md" style={{ fontSize: '11px', color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Activity size={13} />
                    <span>{activeSector.workflowMockup.liveSignal}</span>
                  </div>

                  {/* 3 Live Mini-Stats */}
                  <div className="grid-3 gap-xs mb-md">
                    {activeSector.workflowMockup.stats.map((st, si) => (
                      <div key={si} style={{ backgroundColor: '#18181b', padding: '10px', borderRadius: '8px', border: '1px solid #27272a' }}>
                        <div className="mono-sm text-muted" style={{ fontSize: '9px' }}>{st.label}</div>
                        <div style={{ fontSize: '12.5px', fontWeight: '800', color: '#ffffff', marginTop: '2px' }}>{st.val}</div>
                        <div className="mono-sm" style={{ fontSize: '8.5px', color: 'var(--status-pass)', marginTop: '2px' }}>✓ {st.change}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex-between pt-xs" style={{ borderTop: '1px solid #27272a' }}>
                    <span className="mono-sm text-muted" style={{ fontSize: '9.5px' }}>
                      Sovereign AWS London eu-west-2
                    </span>
                    <Link to="/staff-os" className="mono-sm" style={{ fontSize: '9.5px', color: 'var(--accent-orange)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      Launch Compass View <ExternalLink size={10} />
                    </Link>
                  </div>
                </div>

                {/* Metric Hero Card */}
                <div style={{ backgroundColor: '#f8fafc', padding: '24px', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                  <div className="mono-label" style={{ color: 'var(--accent-orange)' }}>KEY INSTITUTIONAL OUTCOME</div>
                  <div style={{ fontSize: '2.8rem', fontWeight: '800', color: 'var(--accent-orange)', marginTop: '4px', lineHeight: 1 }}>
                    {activeSector.metric}
                  </div>
                  <div className="body-sm text-secondary mt-sm" style={{ lineHeight: 1.5 }}>
                    {activeSector.metricLabel}
                  </div>
                </div>

                {/* KPI Breakdown */}
                <div className="grid-3 gap-sm">
                  {activeSector.kpis.map((kpi, ki) => (
                    <div key={ki} style={{ backgroundColor: '#ffffff', padding: '14px', borderRadius: '10px', border: '1px solid #cbd5e1' }}>
                      <div className="mono-sm text-secondary" style={{ fontSize: '10px' }}>{kpi.label}</div>
                      <div style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0c0c0f', marginTop: '4px' }}>{kpi.val}</div>
                    </div>
                  ))}
                </div>

                {/* Executive Testimonial Quote */}
                <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #d8d4cd' }}>
                  <p style={{ fontSize: '13px', fontStyle: 'italic', color: '#334155', lineHeight: 1.6, margin: 0 }}>
                    {activeSector.quote}
                  </p>
                  <div className="mono-sm text-muted mt-sm" style={{ fontSize: '11px' }}>
                    — {activeSector.quoteAuthor}
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* ── ALL STAKEHOLDERS COMPARISON MATRIX ───────────────── */}
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>INSTITUTIONAL COVERAGE</span>
            <h2 className="headline-lg" style={{ marginTop: '6px' }}>
              How WorldLynk supports your entire campus leadership.
            </h2>
            <p className="section-desc" style={{ maxWidth: '680px', lineHeight: 1.6 }}>
              Compare how each campus department leverages WorldLynk's connected data layer to eliminate silos and protect retention.
            </p>
          </div>

          <div className="grid-3 gap-lg mb-xl">
            {SECTORS.map((s, idx) => (
              <div 
                key={idx} 
                onClick={() => setActiveIdx(idx)}
                className={`card-elevated card-interactive ${activeIdx === idx ? 'card-selected' : ''}`}
                style={{ 
                  padding: '24px', 
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column',
                  border: activeIdx === idx ? '2px solid var(--accent-orange)' : '1px solid #cbd5e1',
                  borderRadius: '14px',
                  cursor: 'pointer',
                  boxShadow: activeIdx === idx ? '0 8px 24px rgba(255,107,0,0.1)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <div className="flex-between mb-sm">
                  <span className="mono-label" style={{ fontSize: '9px', color: 'var(--accent-orange)' }}>
                    0{idx + 1} // {s.shortRole.toUpperCase()}
                  </span>
                  <span className="pill pill-approved" style={{ fontSize: '8px' }}>
                    {s.roiPill}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: '800', marginBottom: '8px', color: '#0c0c0f' }}>
                  {s.role}
                </h3>
                <p className="body-sm text-secondary mb-md" style={{ flex: 1, lineHeight: 1.5 }}>
                  {s.headline}
                </p>

                <div className="mono-sm text-muted mb-sm" style={{ fontSize: '10px' }}>
                  Integrates: <span style={{ color: '#0c0c0f' }}>{s.systemIntegrations}</span>
                </div>

                <div className="flex-between pt-sm" style={{ borderTop: '1px solid #e2e8f0', marginTop: 'auto' }}>
                  <div>
                    <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--accent-orange)' }}>{s.metric}</div>
                    <div className="mono-sm text-muted" style={{ fontSize: '9px' }}>Key Impact</div>
                  </div>
                  <span className="mono-sm" style={{ fontSize: '11px', color: '#0284c7', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    Inspect Persona ➔
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── ENTERPRISE CTA SECTION ───────────────────────────────── */}
      <EnterpriseCTASection 
        eyebrow="TAILORED INSTITUTIONAL SOLUTIONS"
        title="Ready to transform your department's operations?"
        description="Schedule a 30-minute tailored walkthrough configured for your specific campus systems and student cohort size."
        primaryText="Schedule Campus Walkthrough"
        primaryLink="/demo"
        secondaryText="Explore Compass Staff Portal"
        secondaryLink="/staff-os"
      />

      {/* ── MODAL: DOWNLOAD EXECUTIVE BRIEFING ────────────────────── */}
      {showBriefingModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(12, 12, 15, 0.65)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            maxWidth: '560px',
            width: '100%',
            padding: '32px',
            border: '1px solid #d8d4cd',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.35)'
          }}>
            <div className="flex-between mb-md">
              <div>
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>EXECUTIVE BRIEFING</span>
                <h3 className="headline-sm" style={{ marginTop: '2px', color: '#0c0c0f' }}>{activeSector.shortRole} Solution Blueprint</h3>
              </div>
              <button
                onClick={() => setShowBriefingModal(false)}
                style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#64748b' }}
              >
                ✕
              </button>
            </div>

            <p className="body-sm text-secondary mb-md">
              Download the complete 8-page architecture and ROI briefing document for <strong>{activeSector.role}</strong>, including implementation timeline, SITS integration specs, and HESA compliance mapping.
            </p>

            <div style={{ backgroundColor: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0', marginBottom: '20px' }}>
              <div className="mono-sm" style={{ fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '6px', color: '#334155' }}>
                <div><strong>DOCUMENT:</strong> WorldLynk-{activeSector.slug}-Executive-Briefing.pdf</div>
                <div><strong>SIZE:</strong> 2.4 MB · Version 4.2 (Updated Q4 2024)</div>
                <div><strong>COMPLIANCE:</strong> UKVI Tier-4 Sponsor &amp; UK GDPR Pre-Cleared</div>
              </div>
            </div>

            <div className="flex gap-sm">
              <button
                onClick={() => {
                  alert(`Downloaded ${activeSector.shortRole} Solution Blueprint PDF`);
                  setShowBriefingModal(false);
                }}
                className="btn-primary"
                style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                <Download size={14} /> Download PDF Now
              </button>
              <button
                onClick={() => setShowBriefingModal(false)}
                className="btn-secondary"
                style={{ padding: '0 20px' }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
