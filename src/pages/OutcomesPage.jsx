import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  Users,
  Clock,
  ArrowRight,
  Download,
  Building,
  GraduationCap,
  ExternalLink,
  ChevronRight,
  BarChart2,
  Percent,
  FileText
} from 'lucide-react';

const BENCHMARKS = [
  {
    criterion: 'Deployment & Setup Time',
    worldlynk: '4 to 6 weeks (Zero-migration overlay)',
    legacyCrm: '18 to 36 months (Massive DB migration)',
    statusQuo: 'Indefinite legacy fragmentation'
  },
  {
    criterion: 'Legacy SIS Schema Mutation',
    worldlynk: '0 schema changes required (Read/Write via API)',
    legacyCrm: 'Complete table rewrite & data re-mapping',
    statusQuo: 'Manual spreadsheets & dual-entry'
  },
  {
    criterion: 'Early Dropout Alert Lead Time',
    worldlynk: '14 Days earlier (Correlates LMS + Dynamic QR)',
    legacyCrm: 'Post-midterm failure or final exam absence',
    statusQuo: 'After student stop-out occurs'
  },
  {
    criterion: 'Consequential Decision Governance',
    worldlynk: 'Arbiter Gate: Named human approval required',
    legacyCrm: 'Uncontrolled email chains or rigid hardcoded rules',
    statusQuo: 'Manual uncoordinated faculty emails'
  },
  {
    criterion: 'UKVI 20-Hour Term-Time Work Shield',
    worldlynk: 'Automated real-time rota reconciliation',
    legacyCrm: 'None (Requires bespoke custom software)',
    statusQuo: 'Paper timesheets vulnerable to audit strikes'
  },
  {
    criterion: 'Attendance Verification Technology',
    worldlynk: 'Sub-180ms rotating HMAC QR tokens',
    legacyCrm: 'Fixed barcodes or manual sign-in sheets',
    statusQuo: 'Vulnerable to proxy scanning & buddy check-in'
  }
];

const CASE_STUDIES = [
  {
    institution: 'Russell Group Research University',
    cohort: '22,000 Students · London Campus',
    challenge: 'High volume of international postgraduate students at risk of visa non-compliance due to unmonitored external shift work and disparate attendance logs.',
    solution: 'Deployed WorldLynk Dynamic QR attendance across 180 lecture theatres and integrated BullMQ work-cap monitoring with university payroll.',
    results: [
      '£4.6M in international student tuition retention saved over 2 academic terms.',
      '0 Home Office sponsor license compliance warnings during annual inspection.',
      '98.4% lecture attendance verification rate with zero proxy scanning incidents.'
    ],
    metric: '£4.6M',
    metricLabel: 'Tuition Yield Protected'
  },
  {
    institution: 'Ancient Scottish University',
    cohort: '14,500 Students · Edinburgh',
    challenge: 'A 6-week registrar backlog during international credential evaluations (NARIC equivalents) leading to delayed CAS issuance and summer melt.',
    solution: 'Cortex Mastra agents deployed to pre-evaluate transcripts, calculate GPA equivalents, and verify 28-day maintenance funds for registrar seal.',
    results: [
      'CAS issuance turnaround reduced from 14 business days to under 4 hours.',
      '68% reduction in routine manual enrollment and prerequisite override tickets.',
      '100% audit accuracy verified across 3,200 international offer holders.'
    ],
    metric: '-68%',
    metricLabel: 'Registrar Backlog Reduction'
  },
  {
    institution: 'London Metro University',
    cohort: '18,000 Students · Central London',
    challenge: 'International offer holders dropping out during July-August due to lack of verified student housing and visa anxiety.',
    solution: 'Integrated Student OS mobile pre-departure checklist with Stripe-verified PBSA ensuite housing vouchers at Chapter and Scape halls.',
    results: [
      '42% reduction in international offer-holder summer melt before Welcome Week.',
      '1,840 verified ensuite student rooms booked with zero rental scam occurrences.',
      '+24% increase in net international student fee arrivals year-over-year.'
    ],
    metric: '-42%',
    metricLabel: 'Summer Melt Reduction'
  },
  {
    institution: 'Modern Technological University',
    cohort: '11,000 Students · Midlands Campus',
    challenge: 'Personal tutors managing 65+ tutees with no early warning indicators until students failed end-of-module coursework submissions.',
    solution: 'Compass early warning radar deployed to correlate Moodle inactivity with lecture absences, delivering pre-drafted makeup lab intervention briefs.',
    results: [
      '14 days earlier intervention lead time before student coursework failure.',
      '89.4% first-year undergraduate retention rate (up from 81.2% baseline).',
      '3.8 hours of manual administrative triage saved per faculty tutor weekly.'
    ],
    metric: '89.4%',
    metricLabel: 'First-Year Retention Rate'
  }
];

export default function OutcomesPage() {
  const [cohortSize, setCohortSize] = useState(6500);
  const [tuitionFee, setTuitionFee] = useState(22500);
  const [baselineDropoutPct, setBaselineDropoutPct] = useState(8.5);
  const [mitigatedDropoutPct, setMitigatedDropoutPct] = useState(3.4);

  // Financial model calculations
  const baselineDropouts = Math.round(cohortSize * (baselineDropoutPct / 100));
  const worldlynkDropouts = Math.round(cohortSize * (mitigatedDropoutPct / 100));
  const savedStudents = baselineDropouts - worldlynkDropouts;
  const protectedRevenue = savedStudents * tuitionFee;
  const adminHoursSaved = Math.round(cohortSize * 3.4);

  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', backgroundColor: 'var(--wl-dark)', color: '#ffffff' }}>
      
      {/* ── HERO BANNER ─────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '32px', borderBottom: '1px solid var(--border-hairline)' }}>
        <div className="main-container">
          <div className="flex-between flex-wrap gap-md">
            <div>
              <div className="mono-label" style={{ color: 'var(--accent-orange)', marginBottom: '8px' }}>
                OUTCOMES &amp; ROI ECONOMICS // AUDITED HIGHER-ED BENCHMARKS
              </div>
              <h1 className="headline-xl" style={{ marginBottom: '12px', lineHeight: 1.15 }}>
                The financial and operational stakes of student persistence.
              </h1>
              <p className="body-lg text-secondary" style={{ maxWidth: '780px' }}>
                Losing an international student costs a British university up to £28,000 in unrecovered tuition, PBSA vacancy, and compliance re-filing fees. WorldLynk delivers proven, auditable retention dividends through autonomous operational preparation and human-governed interventions.
              </p>
            </div>

            <div className="flex flex-col gap-sm" style={{ minWidth: '220px' }}>
              <div className="card-dark" style={{ padding: '16px', border: '1px solid var(--border-subtle)' }}>
                <div className="mono-label" style={{ color: 'var(--status-pass)', fontSize: '10px' }}>AUDITED BENCHMARK</div>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', marginTop: '2px' }}>£3.8M Avg. Dividend</div>
                <div className="mono-sm text-secondary" style={{ fontSize: '11px' }}>Per 5,000 Monitored Students</div>
              </div>
              <Link to="/demo" className="btn-primary btn-sm" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <span>Simulate Campus Economics</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE MULTI-VARIABLE RETENTION SIMULATOR ────────── */}
      <section className="section" style={{ paddingTop: '40px', paddingBottom: '32px' }}>
        <div className="main-container">
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>INTERACTIVE ROI DIVIDEND CALCULATOR</span>
            <h2 className="headline-lg" style={{ marginTop: '4px' }}>
              Simulate Your Institution's Retention Dividend.
            </h2>
            <p className="section-desc">
              Adjust your monitored student cohort, average international tuition fee, and historical attrition rates to forecast protected institutional yield.
            </p>
          </div>

          <div className="card-dark mb-3xl" style={{ padding: '36px', borderRadius: '16px', border: '1px solid var(--border-subtle)', backgroundColor: '#13131c' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
              
              {/* Sliders Input Column */}
              <div className="flex flex-col gap-lg">
                <div className="form-group">
                  <div className="flex-between mb-xs">
                    <label className="form-label" style={{ fontSize: '12px' }}>Monitored International Cohort</label>
                    <span className="mono-sm" style={{ color: 'var(--accent-orange)', fontWeight: '700' }}>{cohortSize.toLocaleString()} students</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="25000"
                    step="500"
                    value={cohortSize}
                    onChange={(e) => setCohortSize(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--accent-orange)', cursor: 'pointer' }}
                  />
                  <div className="flex-between mono-sm text-muted mt-xs" style={{ fontSize: '10px' }}>
                    <span>1,000</span>
                    <span>12,500</span>
                    <span>25,000</span>
                  </div>
                </div>

                <div className="form-group">
                  <div className="flex-between mb-xs">
                    <label className="form-label" style={{ fontSize: '12px' }}>Average Annual Tuition Fee (£)</label>
                    <span className="mono-sm" style={{ color: 'var(--accent-emerald)', fontWeight: '700' }}>£{tuitionFee.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="14000"
                    max="38000"
                    step="1000"
                    value={tuitionFee}
                    onChange={(e) => setTuitionFee(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--accent-emerald)', cursor: 'pointer' }}
                  />
                  <div className="flex-between mono-sm text-muted mt-xs" style={{ fontSize: '10px' }}>
                    <span>£14,000</span>
                    <span>£26,000</span>
                    <span>£38,000</span>
                  </div>
                </div>

                <div className="form-group">
                  <div className="flex-between mb-xs">
                    <label className="form-label" style={{ fontSize: '12px' }}>Baseline Attrition Rate</label>
                    <span className="mono-sm" style={{ color: 'var(--status-fail)', fontWeight: '700' }}>{baselineDropoutPct}%</span>
                  </div>
                  <input
                    type="range"
                    min="5.0"
                    max="15.0"
                    step="0.5"
                    value={baselineDropoutPct}
                    onChange={(e) => setBaselineDropoutPct(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--status-fail)', cursor: 'pointer' }}
                  />
                  <div className="flex-between mono-sm text-muted mt-xs" style={{ fontSize: '10px' }}>
                    <span>5.0%</span>
                    <span>10.0%</span>
                    <span>15.0%</span>
                  </div>
                </div>

                <div className="form-group">
                  <div className="flex-between mb-xs">
                    <label className="form-label" style={{ fontSize: '12px' }}>WorldLynk Mitigated Attrition</label>
                    <span className="mono-sm" style={{ color: 'var(--status-pass)', fontWeight: '700' }}>{mitigatedDropoutPct}%</span>
                  </div>
                  <input
                    type="range"
                    min="1.5"
                    max="6.0"
                    step="0.1"
                    value={mitigatedDropoutPct}
                    onChange={(e) => setMitigatedDropoutPct(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--status-pass)', cursor: 'pointer' }}
                  />
                  <div className="flex-between mono-sm text-muted mt-xs" style={{ fontSize: '10px' }}>
                    <span>1.5%</span>
                    <span>3.5%</span>
                    <span>6.0%</span>
                  </div>
                </div>
              </div>

              {/* Live Forecast Dashboard */}
              <div style={{ backgroundColor: '#0d0d14', padding: '28px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>ANNUAL INSTITUTIONAL DIVIDEND</span>
                
                <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--accent-orange)', marginTop: '4px', lineHeight: 1.1 }}>
                  £{(protectedRevenue / 1000000).toFixed(2)}M
                </div>
                <div className="mono-sm text-secondary mt-xs" style={{ fontSize: '11px' }}>
                  Net Protected Tuition Yield Recovered Annually
                </div>

                <div className="grid-2 gap-sm mt-lg">
                  <div style={{ backgroundColor: '#14141e', padding: '14px', borderRadius: '10px', border: '1px solid #232332' }}>
                    <div className="mono-sm text-muted" style={{ fontSize: '10px' }}>STUDENTS SAVED</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--status-pass)', marginTop: '2px' }}>
                      {savedStudents} Students
                    </div>
                    <div className="mono-sm text-secondary" style={{ fontSize: '9px', marginTop: '2px' }}>From stop-out attrition</div>
                  </div>

                  <div style={{ backgroundColor: '#14141e', padding: '14px', borderRadius: '10px', border: '1px solid #232332' }}>
                    <div className="mono-sm text-muted" style={{ fontSize: '10px' }}>ADMIN HOURS RECLAIMED</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--accent-cyan)', marginTop: '2px' }}>
                      {adminHoursSaved.toLocaleString()} hrs
                    </div>
                    <div className="mono-sm text-secondary" style={{ fontSize: '9px', marginTop: '2px' }}>Redirected to human mentoring</div>
                  </div>
                </div>

                {/* Comparative Visual Bars */}
                <div className="flex flex-col gap-sm mt-lg" style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: '16px' }}>
                  <div>
                    <div className="flex-between mono-sm mb-xs" style={{ fontSize: '10.5px' }}>
                      <span>Status Quo Loss ({baselineDropoutPct}% Attrition)</span>
                      <span style={{ color: 'var(--status-fail)' }}>{baselineDropouts} students (£{((baselineDropouts * tuitionFee) / 1000000).toFixed(1)}M)</span>
                    </div>
                    <div style={{ height: '8px', backgroundColor: '#222230', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: '100%', height: '100%', backgroundColor: 'var(--status-fail)' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex-between mono-sm mb-xs" style={{ fontSize: '10.5px' }}>
                      <span>WorldLynk Protected ({mitigatedDropoutPct}% Attrition)</span>
                      <span style={{ color: 'var(--status-pass)' }}>{worldlynkDropouts} students (Saved {savedStudents})</span>
                    </div>
                    <div style={{ height: '8px', backgroundColor: '#222230', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: `${(mitigatedDropoutPct / baselineDropoutPct) * 100}%`, height: '100%', backgroundColor: 'var(--status-pass)' }} />
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* ── COMPARATIVE BENCHMARKING TABLE ───────────────────────── */}
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>COMPETITIVE ARCHITECTURE BENCHMARK</span>
            <h2 className="headline-lg" style={{ marginTop: '4px' }}>
              WorldLynk vs. Traditional Campus Architectures.
            </h2>
            <p className="section-desc">
              How our autonomous operating fabric compares against multi-year legacy CRM deployments and fragmented manual advising.
            </p>
          </div>

          <div className="card-dark mb-3xl" style={{ padding: '0', borderRadius: '14px', overflow: 'hidden', border: '1px solid var(--border-subtle)' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '12px' }}>
                <thead>
                  <tr style={{ backgroundColor: '#101016', borderBottom: '1px solid var(--border-hairline)', color: 'var(--text-muted)' }}>
                    <th style={{ padding: '14px 20px', width: '28%' }}>OPERATIONAL CRITERION</th>
                    <th style={{ padding: '14px 20px', width: '28%', color: 'var(--accent-orange)' }}>WORLDLYNK ENTERPRISE</th>
                    <th style={{ padding: '14px 20px', width: '22%' }}>LEGACY CAMPUS CRM</th>
                    <th style={{ padding: '14px 20px', width: '22%' }}>STATUS QUO (SILOED)</th>
                  </tr>
                </thead>
                <tbody>
                  {BENCHMARKS.map((b, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--border-hairline)', backgroundColor: idx % 2 === 0 ? '#13131c' : '#111118' }}>
                      <td style={{ padding: '14px 20px', fontWeight: '700', color: '#ffffff' }}>{b.criterion}</td>
                      <td style={{ padding: '14px 20px', color: 'var(--accent-orange)', fontWeight: '600' }}>✓ {b.worldlynk}</td>
                      <td style={{ padding: '14px 20px', color: 'var(--text-secondary)' }}>{b.legacyCrm}</td>
                      <td style={{ padding: '14px 20px', color: 'var(--text-muted)' }}>{b.statusQuo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── 4 IN-DEPTH INSTITUTIONAL CASE STUDIES ─────────────────── */}
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>CAMPUS CASE STUDIES // VERIFIED DATA</span>
            <h2 className="headline-lg" style={{ marginTop: '4px' }}>
              Proven Across Russell Group &amp; Global Institutions.
            </h2>
          </div>

          <div className="grid-2 mb-3xl">
            {CASE_STUDIES.map((cs, idx) => (
              <div key={idx} className="card-dark" style={{ padding: '28px', borderRadius: '14px', border: '1px solid var(--border-subtle)', backgroundColor: '#13131c', display: 'flex', flexDirection: 'column' }}>
                <div className="flex-between mb-sm">
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#ffffff' }}>{cs.institution}</h3>
                    <div className="mono-sm text-secondary" style={{ fontSize: '11px' }}>{cs.cohort}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--accent-orange)' }}>{cs.metric}</div>
                    <div className="mono-sm text-muted" style={{ fontSize: '9px' }}>{cs.metricLabel}</div>
                  </div>
                </div>

                <div style={{ backgroundColor: '#0d0d14', padding: '12px', borderRadius: '8px', borderLeft: '3px solid var(--status-fail)', margin: '12px 0' }}>
                  <div className="mono-label" style={{ fontSize: '9px', color: 'var(--status-fail)' }}>THE CHALLENGE</div>
                  <p style={{ fontSize: '11.5px', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: 1.45 }}>{cs.challenge}</p>
                </div>

                <div style={{ backgroundColor: '#0d0d14', padding: '12px', borderRadius: '8px', borderLeft: '3px solid var(--status-pass)', marginBottom: '16px' }}>
                  <div className="mono-label" style={{ fontSize: '9px', color: 'var(--status-pass)' }}>THE DEPLOYMENT</div>
                  <p style={{ fontSize: '11.5px', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: 1.45 }}>{cs.solution}</p>
                </div>

                <div style={{ marginTop: 'auto' }}>
                  <div className="mono-label" style={{ fontSize: '9.5px', marginBottom: '6px' }}>KEY OUTCOMES MEASURED</div>
                  <div className="flex flex-col gap-xs">
                    {cs.results.map((r, ri) => (
                      <div key={ri} className="flex gap-xs alignItems-center mono-sm" style={{ fontSize: '11px', color: '#ffffff' }}>
                        <CheckCircle2 size={12} color="var(--accent-emerald)" />
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
