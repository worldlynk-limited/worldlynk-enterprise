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
    role: 'Vice-Chancellors & Executive Cabinet',
    shortRole: 'Leadership',
    headline: 'Macro-Capacity & Institutional Financial Viability',
    thesis: 'Protect vital international tuition revenues, maintain sponsor license integrity, and expand campus capacity without linear administrative payroll inflation.',
    metric: '£3.8M',
    metricLabel: 'Average tuition recovery from early attrition prevention across 5,000 students',
    roiPill: '+18.4% Net Yield',
    challenges: [
      'Structural reliance on non-EU international student tuition streams facing global visa headwinds.',
      'Staff burnout and strikes across personal tutoring networks unable to keep up with cohort size.',
      'Data fragmentation between SITS, Moodle, and housing preventing board-level proactive interventions.'
    ],
    worldlynkSol: 'WorldLynk unifies your legacy databases into an autonomous living graph. Nova AI agents predict dropouts 14 days earlier and pre-draft interventions, while Arbiter ensures faculty maintain total authority on Compass.',
    kpis: [
      { label: 'Net Tuition Protection', val: '£3.8M/yr' },
      { label: 'Staff Admin Reduction', val: '-62%' },
      { label: 'UKVI Compliance Safety', val: '100%' }
    ],
    quote: '"WorldLynk provided our governing council with real-time operational telemetry we had never seen before. We protected 142 at-risk international students in Term 1 alone."',
    quoteAuthor: 'Pro-Vice-Chancellor (Student Experience), Russell Group University'
  },
  {
    slug: 'registrars',
    role: 'Academic Registrars & Student Records',
    shortRole: 'Registrar',
    headline: 'Queue Clearance with Absolute Cryptographic Lineage',
    thesis: 'Eliminate peak-season backlogs across transcript evaluations, course prerequisite overrides, and CAS issuance with deterministic agent verification.',
    metric: '-62%',
    metricLabel: 'Reduction in routine manual enrollment and degree audit tickets',
    roiPill: 'Zero-Lag Processing',
    challenges: [
      'Weeks of processing delay during peak international credential equivalency reviews (NARIC/UK ENIC).',
      'Manual CAS generation prone to transcription errors, risking Home Office audit strikes.',
      'High student friction and registrar queues during midterm course add/drop windows.'
    ],
    worldlynkSol: 'Mastra sub-agents evaluate NARIC equivalents, audit 28-day bank maintenance funds, and stage approved CAS certificates for one-click registrar seal with immutable SHA-256 history.',
    kpis: [
      { label: 'CAS Processing Time', val: '4 mins (was 14 days)' },
      { label: 'Transcript Audit Accuracy', val: '99.8%' },
      { label: 'SITS Sync Latency', val: '< 8ms' }
    ],
    quote: '"Our registrar team used to drown in 4,000 manual email tickets during Welcome Week. Compass pre-drafted 82% of prerequisite exceptions before staff even arrived at their desks."',
    quoteAuthor: 'Academic Registrar, Ancient Scottish University'
  },
  {
    slug: 'admissions',
    role: 'International Admissions & Recruitment',
    shortRole: 'Admissions',
    headline: 'Eliminating CAS Bottlenecks and Summer Melt',
    thesis: 'Transform offers into enrolled arrivals. Deliver 24/7 AI visa guidance, secure PBSA housing vouchers, and maintain constant international offer-holder engagement.',
    metric: '+28%',
    metricLabel: 'Increase in offer-to-enrolled conversion velocity across international cohorts',
    roiPill: '-42% Melt Rate',
    challenges: [
      'Summer melt: up to 35% of international offer holders drop out before arriving in the UK due to visa confusion.',
      'Immigration and accommodation inquiries clogging inboxes across different global timezones.',
      'Scarcity of verified student accommodation leading to last-minute offer withdrawals.'
    ],
    worldlynkSol: 'Omnichannel WhatsApp and Telegram agents guide offer holders through an interactive arrival checklist, with direct Stripe-verified PBSA housing vouchers and live arrival assistance.',
    kpis: [
      { label: 'Offer Conversion Rate', val: '+28%' },
      { label: 'Inquiry Response Time', val: '< 4 seconds' },
      { label: 'PBSA Housing Guarantee', val: '100% Placed' }
    ],
    quote: '"We reduced summer melt by 42% because applicants had continuous 24/7 visa coaching and guaranteed student housing in London before ever stepping on a plane."',
    quoteAuthor: 'Director of International Recruitment, London Metro University'
  },
  {
    slug: 'compliance',
    role: 'UKVI Tier-4 Compliance Officers',
    shortRole: 'Compliance',
    headline: 'Automated Sponsor License Protection & Work-Cap Audits',
    thesis: 'Never risk Home Office license revocation. Sub-180ms dynamic QR scans and external employment tracking provide continuous audit readiness.',
    metric: '100%',
    metricLabel: 'Real-time Tier-4 compliance audit readiness with zero work-cap breaches',
    roiPill: 'Zero Sponsor Strikes',
    challenges: [
      'Manual paper attendance sheets vulnerable to proxy sign-ins, impersonation, and lost clipboards.',
      'Students inadvertently breaching the 20-hour weekly term-time work ceiling on external employment rotas.',
      'Substantial institutional liability during unannounced Home Office Sponsor Compliance inspections.'
    ],
    worldlynkSol: 'Anti-spoof dynamic QR codes expire every sub-180ms. Smart calendar intelligence cross-references job rotas with lecture timetables, flagging legal ceiling breaches before they happen.',
    kpis: [
      { label: 'Proxy Scan Vulnerability', val: '0% (Anti-Replay)' },
      { label: 'Work Cap Breaches Logged', val: '0 Breaches' },
      { label: 'UKVI Audit Readiness', val: 'Instant 1-Click' }
    ],
    quote: '"When UKVI compliance inspectors arrived for our unannounced sponsor audit, we produced full cryptographic attendance trails and work-hour ledgers in 90 seconds."',
    quoteAuthor: 'Head of Visa Compliance, Russell Group University'
  },
  {
    slug: 'faculty-tutors',
    role: 'Personal Tutors & Academic Faculty',
    shortRole: 'Faculty',
    headline: 'Proactive Pastoral Care Without Administrative Burnout',
    thesis: 'Detect student disengagement 14 days before failure. Faculty receive synthesized context and pre-drafted interventions instead of searching through raw logs.',
    metric: '+35%',
    metricLabel: 'Increase in meaningful tutor-student mentorship time by eliminating routine triage',
    roiPill: '89.2% Retention',
    challenges: [
      'Tutors have caseloads of 60+ personal tutees with zero visibility into cross-module attendance drops.',
      'Interventions occur too late—often only after formal end-of-term academic failure or exam absence.',
      'Hours spent drafting routine extension letters, makeup lab scheduling, and email follow-ups.'
    ],
    worldlynkSol: 'Early warning radar correlates Moodle inactivity with QR lecture absences. Tutors receive an actionable dossier with pre-drafted makeup lab slots ready to approve with one click.',
    kpis: [
      { label: 'Early Warning Lead Time', val: '14 Days Earlier' },
      { label: 'Admin Triage Saved', val: '3.4 hrs/week/tutor' },
      { label: 'Coursework Recovery', val: '91% on-time' }
    ],
    quote: '"I no longer have to check 5 different systems to see if my tutee is struggling. The dossier is already prepared—I just review it and focus on mentoring the student."',
    quoteAuthor: 'Senior Lecturer & Senior Tutor, School of Computing'
  },
  {
    slug: 'housing-directors',
    role: 'Campus Accommodation & PBSA Directors',
    shortRole: 'Housing',
    headline: 'Guaranteed Student Living & Zero Tenancy Scams',
    thesis: 'Protect incoming international cohorts from predatory rental markets with Stripe-verified student housing vouchers and real-time residential rosters.',
    metric: '100%',
    metricLabel: 'Verified housing placement for all incoming international undergraduate & postgraduate cohorts',
    roiPill: 'Zero Fraud Leases',
    challenges: [
      'International students landing in the UK without accommodation, falling prey to unverified rental scams.',
      'Lack of real-time visibility into campus residential occupancy and maintenance ticket queues.',
      'Manual lease contract coordination causing delayed student arrivals and deferred enrollments.'
    ],
    worldlynkSol: 'Integrated PBSA marketplace pairs students with verified ensuite rooms (Chapter, Scape, iQ). Tenancies are held with Stripe escrow contracts before international departure.',
    kpis: [
      { label: 'Housing Scam Incidents', val: '0 Reported' },
      { label: 'Escrow Security Deposit', val: 'Stripe Protected' },
      { label: 'PBSA Occupancy Rate', val: '99.4%' }
    ],
    quote: '"WorldLynk transformed our international arrival experience. Every single student had a confirmed ensuite room key waiting for them before they even touched down at Heathrow."',
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
                SOLUTIONS BY CAMPUS STAKEHOLDER // INSTITUTIONAL EXCELLENCE
              </div>
              <h1 className="headline-xl" style={{ marginBottom: '12px', lineHeight: 1.15 }}>
                Tailored operational frameworks for university leadership.
              </h1>
              <p className="body-lg text-secondary" style={{ maxWidth: '780px' }}>
                Every campus leader faces distinct institutional mandates. Whether safeguarding your UKVI Tier-4 sponsor license, clearing peak registrar queues, beating summer melt, or empowering personal tutors, WorldLynk provides dedicated operational automation.
              </p>
            </div>

            <div className="flex flex-col gap-sm" style={{ minWidth: '220px' }}>
              <div className="card-dark" style={{ padding: '16px', border: '1px solid var(--border-subtle)' }}>
                <div className="mono-label" style={{ color: 'var(--accent-cyan)', fontSize: '10px' }}>ACTIVE STAKEHOLDER</div>
                <div style={{ fontSize: '1.25rem', fontWeight: '800', marginTop: '2px' }}>{activeSector.shortRole}</div>
                <div className="mono-sm text-secondary" style={{ fontSize: '11px' }}>{activeSector.roiPill}</div>
              </div>
              <button onClick={() => setShowBriefingModal(true)} className="btn-primary btn-sm" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <Download size={13} />
                <span>Executive Briefing Pack</span>
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
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '40px', alignItems: 'start' }}>
              
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
                  <div className="mono-label" style={{ fontSize: '9.5px', color: 'var(--status-fail)', marginBottom: '6px' }}>THE INSTITUTIONAL FRICTION</div>
                  <ul style={{ paddingLeft: '18px', color: 'var(--text-secondary)', fontSize: '12.5px', lineHeight: 1.6 }}>
                    {activeSector.challenges.map((c, i) => (
                      <li key={i} style={{ marginBottom: '6px' }}>{c}</li>
                    ))}
                  </ul>
                </div>

                {/* Resolution */}
                <div style={{ backgroundColor: '#101016', padding: '18px', borderRadius: '12px', borderLeft: '3px solid var(--status-pass)', marginBottom: '24px' }}>
                  <div className="mono-label" style={{ fontSize: '9.5px', color: 'var(--status-pass)', marginBottom: '6px' }}>THE WORLDLYNK RESOLUTION</div>
                  <p style={{ fontSize: '13px', color: '#ffffff', lineHeight: 1.5 }}>
                    {activeSector.worldlynkSol}
                  </p>
                </div>

                <div className="flex gap-sm">
                  <Link to="/demo" className="btn-primary">
                    Simulate Workflow for {activeSector.shortRole} ➔
                  </Link>
                  <button onClick={() => setShowBriefingModal(true)} className="btn-secondary">
                    Download Briefing PDF
                  </button>
                </div>
              </div>

              {/* Right Column: KPIs & Testimonial Quote */}
              <div className="flex flex-col gap-lg">
                {/* Metric Hero Card */}
                <div style={{ backgroundColor: '#0d0d14', padding: '24px', borderRadius: '14px', border: '1px solid var(--border-subtle)' }}>
                  <div className="mono-label" style={{ color: 'var(--accent-orange)' }}>PRIMARY VALUE DELIVERED</div>
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
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>EXECUTIVE OPERATIONAL BRIEFING</span>
                <h3 className="headline-sm" style={{ marginTop: '2px' }}>{activeSector.role}</h3>
              </div>
              <button onClick={() => setShowBriefingModal(false)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
            </div>

            <p className="body-sm text-secondary mb-md">
              Download the complete 18-page whitepaper with detailed SIS integration specifications, Home Office compliance audit checklists, and board-level financial projections.
            </p>

            <div style={{ backgroundColor: '#0a0a0f', padding: '14px', borderRadius: '10px', border: '1px solid #222230', marginBottom: '20px' }}>
              <div className="mono-sm" style={{ fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div><strong>DOCUMENT:</strong> WorldLynk_Executive_Brief_{activeSector.slug}.pdf</div>
                <div><strong>PAGES:</strong> 18 Pages (Includes Architecture Schematics)</div>
                <div><strong>SECURITY CLEARANCE:</strong> Institutional Leadership / Board Review</div>
                <div><strong>FORMAT:</strong> PDF (Signed SHA-256 Stamp)</div>
              </div>
            </div>

            <div className="flex justify-end gap-sm">
              <button onClick={() => setShowBriefingModal(false)} className="btn-secondary btn-sm">
                Cancel
              </button>
              <button onClick={() => { alert(`Downloading Executive Brief for: ${activeSector.role}`); setShowBriefingModal(false); }} className="btn-primary btn-sm">
                Download PDF Package ➔
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
