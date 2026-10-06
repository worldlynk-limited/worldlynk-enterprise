import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  ExternalLink,
  Users,
  Building,
  GraduationCap,
  FileText,
  Clock,
  Sparkles
} from 'lucide-react';


const TIMELINE = [
  {
    year: '2023',
    phase: 'The Challenge',
    title: 'The Student Experience Gap',
    desc: 'Witnessed firsthand how talented students struggled with confusing campus portals, stressful housing searches, and complex term-time work limits.'
  },
  {
    year: '2024',
    phase: 'The Solution',
    title: 'Seamless Campus Integration',
    desc: 'Engineered an integration system that connects with legacy SITS:Vision and Moodle systems without requiring universities to rewrite databases or undergo multi-year migrations.'
  },
  {
    year: '2025',
    phase: 'The Safety Model',
    title: 'AI Assistance with Human Oversight',
    desc: 'Built our multi-agent architecture with built-in human guardrails—ensuring AI automates routine research and evidence gathering while campus staff always make the final call.'
  },
  {
    year: '2026',
    phase: 'Campus Scale',
    title: 'Trusted across UK Higher Education',
    desc: 'WorldLynk helps leading UK institutions support thousands of students, clear peak registration backlogs, and maintain spotless visa compliance.'
  }
];

export default function FoundersPage() {
  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', backgroundColor: 'var(--wl-dark)', color: '#ffffff' }}>
      
      {/* ── HERO BANNER ─────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '32px', borderBottom: '1px solid var(--border-hairline)' }}>
        <div className="main-container">
          <div className="flex-between flex-wrap gap-md">
            <div>
              <div className="mono-label" style={{ color: 'var(--accent-orange)', marginBottom: '8px' }}>
                OUR STORY &amp; MISSION // WHY WE BUILT WORLDLYNK
              </div>
              <h1 className="headline-xl" style={{ marginBottom: '12px', lineHeight: 1.15 }}>
                Why We Built WorldLynk.
              </h1>
              <p className="body-lg text-secondary" style={{ maxWidth: '780px' }}>
                We saw firsthand how confusing student portals, stressful housing searches, and complex visa rules make university life harder than it needs to be. We built WorldLynk to connect every piece of campus life into one simple, supportive platform.
              </p>
            </div>

            <div className="flex flex-col gap-sm" style={{ minWidth: '220px' }}>
              <div className="card-dark" style={{ padding: '16px', border: '1px solid var(--border-subtle)' }}>
                <div className="mono-label" style={{ color: 'var(--accent-cyan)', fontSize: '10px' }}>HEADQUARTERS</div>
                <div style={{ fontSize: '1.25rem', fontWeight: '800', marginTop: '2px' }}>London, UK</div>
                <div className="mono-sm text-secondary" style={{ fontSize: '11px' }}>Serving UK &amp; Global Campuses</div>
              </div>
              <Link to="/contact" className="btn-primary btn-sm" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <span>Connect with Founders</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER CONVICTION CARD ──────────────────────────────── */}
      <section className="section" style={{ paddingTop: '40px', paddingBottom: '32px' }}>
        <div className="main-container">
          
          <div className="card-dark mb-3xl" style={{ padding: '0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border-subtle)', backgroundColor: '#13131c' }}>
            <div className="responsive-grid-split">
              {/* Left Column: Conviction & Bio */}
              <div style={{ padding: '36px' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'linear-gradient(135deg, #ff6b00, #ff8833)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '20px', flexShrink: 0, boxShadow: '0 8px 24px rgba(255,107,0,0.3)' }}>
                    JT
                  </div>
                  <div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#ffffff', margin: 0 }}>Jaswanth Thummala</h2>
                    <div className="mono-sm text-secondary" style={{ fontSize: '11px' }}>FOUNDER &amp; CHIEF ARCHITECT · LONDON, UK</div>
                    <span className="pill pill-approved mt-xs" style={{ fontSize: '9px', display: 'inline-block' }}>SYSTEMS ARCHITECT &amp; RESEARCHER</span>
                  </div>
                </div>

                <div className="mono-label" style={{ color: 'var(--accent-orange)', fontSize: '9.5px', marginTop: '16px' }}>
                  THE OPERATING CONVICTION
                </div>
                <p className="body-md text-secondary mt-xs" style={{ lineHeight: 1.6, fontSize: '13px' }}>
                  Higher education is the most transformative ladder for social and economic mobility in human history. Yet every single academic year, hundreds of thousands of brilliant international students land in the UK only to face disjointed portals, predatory rental housing scams, and accidental visa compliance breaches that derail their degrees.
                </p>

                <div className="mono-label" style={{ color: 'var(--accent-cyan)', fontSize: '9.5px', marginTop: '16px' }}>
                  WHAT WE ARCHITECTED
                </div>
                <p className="body-md text-secondary mt-xs" style={{ lineHeight: 1.6, fontSize: '13px' }}>
                  AI should never act as an unmonitored replacement for human educators. It should be the ultimate preparation engine—lifting the crushing administrative burden of routine transcript grading, scheduling conflicts, and CAS tracking off staff shoulders so educators can do what only humans can: inspire, mentor, and guide.
                </p>
              </div>

              {/* Right Column: London Campus Visual & Mission Snapshot */}
              <div style={{ position: 'relative', minHeight: '320px', borderLeft: '1px solid var(--border-hairline)' }}>
                <img
                  src="/images/london_campus.jpg"
                  alt="University Campus London"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13, 13, 18, 0.95) 0%, rgba(13, 13, 18, 0.4) 60%, transparent 100%)' }} />
                <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px' }}>
                  <div className="mono-label" style={{ color: 'var(--accent-orange)', fontSize: '9.5px' }}>HEADQUARTERED IN LONDON</div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#ffffff', margin: '4px 0 8px 0' }}>Serving Campuses Across the UK &amp; Worldwide</h3>
                  <p className="mono-sm text-secondary" style={{ fontSize: '11px', margin: 0, lineHeight: 1.4 }}>
                    From Russell Group institutions to international pathways, WorldLynk brings calmness and confidence to campus operations.
                  </p>
                </div>
              </div>
            </div>
          </div>


          {/* ── FOUNDING CHRONOLOGY TIMELINE ────────────────────────── */}
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>OUR JOURNEY // 2023 - 2026</span>
            <h2 className="headline-lg" style={{ marginTop: '4px' }}>
              How WorldLynk Came to Life.
            </h2>
          </div>

          <div className="card-dark mb-3xl" style={{ padding: '32px', borderRadius: '16px', border: '1px solid var(--border-subtle)', backgroundColor: '#13131c' }}>
            <div className="grid-4 gap-md">
              {TIMELINE.map((item, idx) => (
                <div key={idx} style={{ position: 'relative' }}>
                  <div className="mono-sm" style={{ color: 'var(--accent-orange)', fontWeight: '800', fontSize: '1.4rem' }}>
                    {item.year}
                  </div>
                  <div className="mono-label" style={{ color: 'var(--text-muted)', fontSize: '9px', margin: '2px 0 6px 0' }}>
                    {item.phase}
                  </div>
                  <h4 style={{ fontSize: '13px', fontWeight: '700', color: '#ffffff', marginBottom: '6px' }}>{item.title}</h4>
                  <p className="body-sm text-secondary" style={{ fontSize: '11.5px', lineHeight: 1.45 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── GOVERNING PRINCIPLES ───────────────────────────────── */}
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>OUR CORE VALUES</span>
            <h2 className="headline-lg" style={{ marginTop: '4px' }}>
              The Principles that Guide Our Software.
            </h2>
          </div>

          <div className="grid-3 mb-3xl">
            <div className="card-dark" style={{ padding: '24px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
              <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>PRINCIPLE 01</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '800', margin: '6px 0 8px 0' }}>AI Prepares, Staff Decide</h3>
              <p className="body-sm text-secondary">
                AI does the heavy lifting, but human staff always make the final call. No student status changes, holds, or visa reports happen without human approval.
              </p>
            </div>

            <div className="card-dark" style={{ padding: '24px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
              <span className="mono-label" style={{ color: 'var(--accent-cyan)' }}>PRINCIPLE 02</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '800', margin: '6px 0 8px 0' }}>Your Student Data Stays Private</h3>
              <p className="body-sm text-secondary">
                We never train AI models on student data or transcripts. Your university's information is encrypted and protected under strict UK GDPR standards.
              </p>
            </div>

            <div className="card-dark" style={{ padding: '24px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
              <span className="mono-label" style={{ color: 'var(--status-pass)' }}>PRINCIPLE 03</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '800', margin: '6px 0 8px 0' }}>Zero Database Disruption</h3>
              <p className="body-sm text-secondary">
                Your university keeps complete ownership of its data. WorldLynk works seamlessly with your existing SITS:Vision, Banner, and Moodle systems without risky migrations.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
