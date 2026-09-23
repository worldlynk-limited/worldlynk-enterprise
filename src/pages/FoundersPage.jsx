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
    phase: 'The Friction',
    title: 'The International Student Crisis',
    desc: 'Witnessed firsthand the heartbreak of brilliant international students in the UK falling through bureaucratic cracks—facing disjointed portals, PBSA housing scams, and inadvertent term-time work ceiling breaches.'
  },
  {
    year: '2024',
    phase: 'The Invention',
    title: 'Zero-Migration Fabric Prototype',
    desc: 'Engineered the first bi-directional event bus that interfaces with legacy SITS:Vision and Moodle LMS instances without requiring universities to modify underlying database schemas or commit to multi-year migrations.'
  },
  {
    year: '2025',
    phase: 'The Architecture',
    title: 'Nova AI Engine & The Arbiter Gate',
    desc: 'Formalized the 30-agent Nova multi-agent swarm governed by the Arbiter consequential gate, proving that autonomous AI can assemble evidence while named human staff retain absolute institutional authority on Compass.'
  },
  {
    year: '2026',
    phase: 'The Operating Layer',
    title: 'Sovereign Campus Enterprise Standard',
    desc: 'WorldLynk powers leading UK higher education institutions, protecting millions in international tuition fee income, clearing peak registrar backlogs, and safeguarding university sponsor licenses.'
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
                FOUNDERSHIP &amp; MISSION // OPERATING CONVICTION
              </div>
              <h1 className="headline-xl" style={{ marginBottom: '12px', lineHeight: 1.15 }}>
                Why We Built WorldLynk.
              </h1>
              <p className="body-lg text-secondary" style={{ maxWidth: '780px' }}>
                We did not set out to build another enterprise software vendor. We experienced firsthand how disconnected portals, predatory student housing markets, and accidental visa compliance breaches derail higher education—and resolved to fix the operating layer of campus life.
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
          
          <div className="card-dark mb-3xl" style={{ padding: '36px', borderRadius: '16px', border: '1px solid var(--border-subtle)', backgroundColor: '#13131c' }}>
            <div style={{ display: 'flex', gap: '28px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div style={{ width: '72px', height: '72px', borderRadius: '14px', background: 'linear-gradient(135deg, #ff6b00, #ff8833)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '22px', flexShrink: 0 }}>
                JT
              </div>
              
              <div style={{ flex: 1, minWidth: '240px' }}>
                <div className="flex-between flex-wrap gap-xs mb-sm">
                  <div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#ffffff', margin: 0 }}>Jaswanth Thummala</h2>
                    <div className="mono-sm text-secondary" style={{ fontSize: '11px' }}>FOUNDER &amp; CHIEF ARCHITECT · LONDON, UK</div>
                  </div>
                  <span className="pill pill-approved">SYSTEMS ARCHITECT &amp; RESEARCHER</span>
                </div>

                <div className="mono-label" style={{ color: 'var(--accent-orange)', fontSize: '9.5px', marginTop: '12px' }}>
                  THE OPERATING CONVICTION
                </div>
                <p className="body-md text-secondary mt-xs" style={{ lineHeight: 1.6 }}>
                  Higher education is the most transformative ladder for social and economic mobility in human history. Yet every single academic year, hundreds of thousands of brilliant international students land in the UK only to face disjointed portals, predatory rental housing scams, and accidental visa compliance breaches that derail their degrees.
                </p>

                <div className="mono-label" style={{ color: 'var(--accent-cyan)', fontSize: '9.5px', marginTop: '16px' }}>
                  WHAT WE ARCHITECTED
                </div>
                <p className="body-md text-secondary mt-xs" style={{ lineHeight: 1.6 }}>
                  AI should never act as an unmonitored replacement for human educators. It should be the ultimate preparation engine—lifting the crushing administrative burden of routine transcript grading, scheduling conflicts, and CAS tracking off staff shoulders so educators can do what only humans can: inspire, mentor, and guide.
                </p>
              </div>
            </div>
          </div>


          {/* ── FOUNDING CHRONOLOGY TIMELINE ────────────────────────── */}
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>CHRONOLOGY // 2023 - 2026</span>
            <h2 className="headline-lg" style={{ marginTop: '4px' }}>
              The Road to Sovereign Campus Intelligence.
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
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>OPERATING CHARTER</span>
            <h2 className="headline-lg" style={{ marginTop: '4px' }}>
              Our Governing Architectural Principles.
            </h2>
          </div>

          <div className="grid-3 mb-3xl">
            <div className="card-dark" style={{ padding: '24px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
              <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>PRINCIPLE 01</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '800', margin: '6px 0 8px 0' }}>Agents Prepare, Staff Decide</h3>
              <p className="body-sm text-secondary">
                We never execute a consequential institutional change—an academic hold, attendance penalty, or visa revocation—without a named staff member clicking approve.
              </p>
            </div>

            <div className="card-dark" style={{ padding: '24px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
              <span className="mono-label" style={{ color: 'var(--accent-cyan)' }}>PRINCIPLE 02</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '800', margin: '6px 0 8px 0' }}>Zero Student Data Exploitation</h3>
              <p className="body-sm text-secondary">
                We never train foundational AI models on student records or transcripts. Every campus maintains its own cryptographic AES-256 boundary with full UK GDPR compliance.
              </p>
            </div>

            <div className="card-dark" style={{ padding: '24px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
              <span className="mono-label" style={{ color: 'var(--status-pass)' }}>PRINCIPLE 03</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '800', margin: '6px 0 8px 0' }}>Zero Migration Lock-In</h3>
              <p className="body-sm text-secondary">
                Universities should own their institutional memory forever. If you ever leave WorldLynk, your underlying SITS:Vision, Banner, and Moodle databases remain 100% intact.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
