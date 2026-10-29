import React from 'react';
import { Link } from 'react-router-dom';
import EnterpriseCTASection from '../components/EnterpriseCTASection';
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
      <section className="page-hero-banner">
        <div className="main-container">
          <div className="flex-between flex-wrap gap-md" style={{ alignItems: 'center' }}>
            <div style={{ maxWidth: '780px' }}>
              <div className="mono-label" style={{ color: 'var(--accent-orange)', marginBottom: '10px' }}>
                OUR STORY &amp; MISSION // WHY WE BUILT WORLDLYNK
              </div>
              <h1 className="headline-xl" style={{ marginBottom: '16px', lineHeight: 1.12, textWrap: 'balance' }}>
                Why We Built WorldLynk.
              </h1>
              <p className="body-lg text-secondary" style={{ maxWidth: '720px', lineHeight: 1.65 }}>
                We saw firsthand how confusing student portals, stressful housing searches, and complex visa rules make university life harder than it needs to be. We built WorldLynk to connect every piece of campus life into one simple, supportive platform.
              </p>
            </div>

            <div className="flex flex-col gap-sm" style={{ minWidth: '240px' }}>
              <div className="card-elevated" style={{ padding: '20px' }}>
                <div className="mono-label" style={{ color: 'var(--accent-cyan)', fontSize: '10px' }}>HEADQUARTERS</div>
                <div style={{ fontSize: '1.35rem', fontWeight: '800', marginTop: '4px', color: '#ffffff' }}>London, UK</div>
                <div className="mono-sm text-secondary" style={{ fontSize: '11px', marginTop: '2px' }}>Serving UK &amp; Global Campuses</div>
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
      <section className="section section-spacious" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <div className="main-container">
          
          <div className="card-elevated mb-3xl" style={{ padding: '0', overflow: 'hidden', backgroundColor: '#13131c' }}>
            <div className="responsive-grid-split">
              {/* Left Column: Conviction & Bio */}
              <div style={{ padding: '38px' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '24px' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'linear-gradient(135deg, #ff6b00, #ff8833)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '20px', flexShrink: 0, boxShadow: '0 8px 24px rgba(255,107,0,0.3)' }}>
                    JT
                  </div>
                  <div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#ffffff', margin: 0 }}>Jaswanth Thummala</h2>
                    <div className="mono-sm text-secondary" style={{ fontSize: '11px', marginTop: '2px' }}>FOUNDER &amp; CHIEF ARCHITECT · LONDON, UK</div>
                    <span className="pill pill-approved mt-xs" style={{ fontSize: '9px', display: 'inline-block' }}>SYSTEMS ARCHITECT &amp; RESEARCHER</span>
                  </div>
                </div>

                <div className="mono-label" style={{ color: 'var(--accent-orange)', fontSize: '9.5px', marginTop: '16px' }}>
                  THE OPERATING CONVICTION
                </div>
                <p className="body-md text-secondary mt-xs" style={{ lineHeight: 1.65, fontSize: '13.5px' }}>
                  Higher education is the most transformative ladder for social and economic mobility in human history. Yet every single academic year, hundreds of thousands of brilliant international students land in the UK only to face disjointed portals, predatory rental housing scams, and accidental visa compliance breaches that derail their degrees.
                </p>

                <div className="mono-label" style={{ color: 'var(--accent-cyan)', fontSize: '9.5px', marginTop: '20px' }}>
                  WHAT WE ARCHITECTED
                </div>
                <p className="body-md text-secondary mt-xs" style={{ lineHeight: 1.65, fontSize: '13.5px' }}>
                  AI should never act as an unmonitored replacement for human educators. It should be the ultimate preparation engine—lifting the crushing administrative burden of routine transcript grading, scheduling conflicts, and CAS tracking off staff shoulders so educators can do what only humans can: inspire, mentor, and guide.
                </p>
              </div>

              {/* Right Column: London Campus Visual & Mission Snapshot */}
              <div style={{ position: 'relative', minHeight: '340px', borderLeft: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <img
                  src="/images/london_campus.jpg"
                  alt="University Campus London"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13, 13, 18, 0.95) 0%, rgba(13, 13, 18, 0.4) 60%, transparent 100%)' }} />
                <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px' }}>
                  <div className="mono-label" style={{ color: 'var(--accent-orange)', fontSize: '9.5px' }}>HEADQUARTERED IN LONDON</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#ffffff', margin: '4px 0 8px 0' }}>Serving Campuses Across the UK &amp; Worldwide</h3>
                  <p className="mono-sm text-secondary" style={{ fontSize: '11px', margin: 0, lineHeight: 1.5 }}>
                    From Russell Group institutions to international pathways, WorldLynk brings calmness and confidence to campus operations.
                  </p>
                </div>
              </div>
            </div>
          </div>


          {/* ── FOUNDING CHRONOLOGY TIMELINE ────────────────────────── */}
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>OUR JOURNEY // 2023 - 2026</span>
            <h2 className="headline-lg" style={{ marginTop: '6px' }}>
              How WorldLynk Came to Life.
            </h2>
          </div>

          <div className="card-elevated mb-3xl" style={{ padding: '36px', backgroundColor: '#13131c' }}>
            <div className="grid-4 gap-lg">
              {TIMELINE.map((item, idx) => (
                <div key={idx} style={{ position: 'relative' }}>
                  <div className="mono-sm" style={{ color: 'var(--accent-orange)', fontWeight: '800', fontSize: '1.6rem' }}>
                    {item.year}
                  </div>
                  <div className="mono-label" style={{ color: 'var(--text-muted)', fontSize: '9px', margin: '4px 0 8px 0' }}>
                    {item.phase}
                  </div>
                  <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>{item.title}</h4>
                  <p className="body-sm text-secondary" style={{ fontSize: '12px', lineHeight: 1.55 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── GOVERNING PRINCIPLES ───────────────────────────────── */}
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>OUR CORE VALUES</span>
            <h2 className="headline-lg" style={{ marginTop: '6px' }}>
              The Principles that Guide Our Software.
            </h2>
          </div>

          <div className="grid-3 gap-lg mb-xl">
            <div className="card-elevated" style={{ padding: '26px' }}>
              <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>PRINCIPLE 01</span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', margin: '8px 0 10px 0', color: '#ffffff' }}>AI Prepares, Staff Decide</h3>
              <p className="body-sm text-secondary" style={{ lineHeight: 1.6 }}>
                AI does the heavy lifting, but human staff always make the final call. No student status changes, holds, or visa reports happen without human approval.
              </p>
            </div>

            <div className="card-elevated" style={{ padding: '26px' }}>
              <span className="mono-label" style={{ color: 'var(--accent-cyan)' }}>PRINCIPLE 02</span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', margin: '8px 0 10px 0', color: '#ffffff' }}>Your Student Data Stays Private</h3>
              <p className="body-sm text-secondary" style={{ lineHeight: 1.6 }}>
                We never train AI models on student data or transcripts. Your university's information is encrypted and protected under strict UK GDPR standards.
              </p>
            </div>

            <div className="card-elevated" style={{ padding: '26px' }}>
              <span className="mono-label" style={{ color: 'var(--status-pass)' }}>PRINCIPLE 03</span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', margin: '8px 0 10px 0', color: '#ffffff' }}>Zero Database Disruption</h3>
              <p className="body-sm text-secondary" style={{ lineHeight: 1.6 }}>
                Your university keeps complete ownership of its data. WorldLynk works seamlessly with your existing SITS:Vision, Banner, and Moodle systems without risky migrations.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── BOTTOM CONVERSION CTA ────────────────────────────── */}
      <EnterpriseCTASection 
        eyebrow="CONNECT WITH OUR LEADERSHIP"
        title="Schedule an executive briefing with our founders."
        description="We are always eager to speak with university leaders, registrars, and researchers shaping the future of global higher education."
        primaryText="Schedule Founder Discussion"
        primaryLink="/contact"
        secondaryText="Explore Careers at WorldLynk"
        secondaryLink="/careers"
        secondaryIsExternal={false}
      />

    </div>
  );
}
