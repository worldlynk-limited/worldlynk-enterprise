import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  Lock,
  ArrowRight,
  ExternalLink,
  Eye,
  Keyboard,
  Cpu,
  Download
} from 'lucide-react';

const VPAT_CRITERIA = [
  { rule: '1.1.1 Non-text Content', level: 'Level A', support: 'Supports', notes: 'All functional UI icons, charts, and telemetry graphs have meaningful ARIA labels or text alternatives.' },
  { rule: '1.4.3 Minimum Contrast', level: 'Level AA', support: 'Supports', notes: 'Text elements maintain at least 4.5:1 contrast against dark (#0c0c0f) and card surfaces. Editorial headlines exceed 7:1.' },
  { rule: '1.4.11 Non-text Contrast', level: 'Level AA', support: 'Supports', notes: 'Interactive queue borders, focus rings, and status pills maintain minimum 3:1 contrast against adjacent colors.' },
  { rule: '2.1.1 Keyboard Navigation', level: 'Level A', support: 'Supports', notes: 'All interactive elements, queue dossiers, modals, and tabs are fully operable via standard keyboard alone.' },
  { rule: '2.1.2 No Keyboard Trap', level: 'Level A', support: 'Supports', notes: 'Focus moves cleanly through modals and drawers, with Esc key dismissing active overlays.' },
  { rule: '2.4.7 Focus Visible', level: 'Level AA', support: 'Supports', notes: 'High-visibility 2px focus indicators (#ff6b00) highlight currently active keyboard elements.' },
  { rule: '4.1.2 Name, Role, Value', level: 'Level A', support: 'Supports', notes: 'All custom controls implement standard ARIA roles (button, tab, dialog) with dynamic aria-expanded attributes.' },
  { rule: '4.1.3 Status Messages', level: 'Level AA', support: 'Supports', notes: 'Live telemetry updates and Arbiter gate transitions use aria-live="polite" regions for non-disruptive announcements.' }
];

const COMPATIBILITY = [
  { tech: 'Apple VoiceOver (macOS & iOS)', version: 'macOS 15+ / iOS 18+', rating: 'Optimal', notes: 'Flawless rotor navigation through headings, tables, and ARIA live queue updates.' },
  { tech: 'NVDA Screen Reader', version: '2026.1 / Windows 11', rating: 'Optimal', notes: 'Clean table row announcements and modal dialog containment.' },
  { tech: 'JAWS Screen Reader', version: '2026 / Windows 11', rating: 'Optimal', notes: 'Full support for virtual cursor navigation and ARIA landmarks.' },
  { tech: 'Google TalkBack', version: 'Android 15', rating: 'Optimal', notes: 'Tested across mobile Student OS phone viewports.' }
];

const KEYBOARD_SHORTCUTS = [
  { key: 'Cmd / Ctrl + K', action: 'Open Global Command Palette & Navigation Search' },
  { key: 'Tab / Shift + Tab', action: 'Navigate sequentially between interactive buttons and queue items' },
  { key: 'Enter / Space', action: 'Activate selected button, tab, or open student dossier' },
  { key: 'Esc', action: 'Dismiss active modal, drawer, or command palette overlay' }
];

export default function AccessibilityPage() {
  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', backgroundColor: 'var(--wl-dark)', color: '#ffffff' }}>
      
      {/* ── HERO BANNER ─────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '32px', borderBottom: '1px solid var(--border-hairline)' }}>
        <div className="main-container">
          <div className="flex-between flex-wrap gap-md">
            <div>
              <div className="mono-label" style={{ color: 'var(--accent-orange)', marginBottom: '8px' }}>
                INCLUSION STANDARDS // WCAG 2.1 LEVEL AA AUDITED · SECTION 508 &amp; EN 301 549
              </div>
              <h1 className="headline-xl" style={{ marginBottom: '12px', lineHeight: 1.15 }}>
                Accessibility &amp; VPAT Conformance.
              </h1>
              <p className="body-lg text-secondary" style={{ maxWidth: '780px' }}>
                Higher education software must be accessible to every student, faculty member, and registrar. WorldLynk is engineered to strictly conform with WCAG 2.1 Level AA standards across both the desktop Compass terminal and mobile Student OS.
              </p>
            </div>

            <div className="flex flex-col gap-sm" style={{ minWidth: '220px' }}>
              <div className="card-dark" style={{ padding: '16px', border: '1px solid var(--border-subtle)' }}>
                <div className="mono-label" style={{ color: 'var(--status-pass)', fontSize: '10px' }}>CONFORMANCE LEVEL</div>
                <div style={{ fontSize: '1.3rem', fontWeight: '800', marginTop: '2px' }}>WCAG 2.1 AA</div>
                <div className="mono-sm text-secondary" style={{ fontSize: '11px' }}>VPAT Document Available</div>
              </div>
              <button onClick={() => alert('Downloading WorldLynk VPAT Statement (PDF)')} className="btn-secondary btn-sm" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <Download size={13} />
                <span>Download VPAT (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── VPAT CONFORMANCE TABLE ──────────────────────────────── */}
      <section className="section" style={{ paddingTop: '40px', paddingBottom: '32px' }}>
        <div className="main-container">
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>VOLUNTARY PRODUCT ACCESSIBILITY TEMPLATE</span>
            <h2 className="headline-lg" style={{ marginTop: '4px' }}>
              WCAG 2.1 Level AA Audit Matrix.
            </h2>
            <p className="section-desc">
              Detailed technical breakdown of accessibility criteria supported across all WorldLynk enterprise interfaces.
            </p>
          </div>

          <div className="card-dark mb-3xl" style={{ padding: '0', borderRadius: '14px', overflow: 'hidden', border: '1px solid var(--border-subtle)' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '12px' }}>
                <thead>
                  <tr style={{ backgroundColor: '#101016', borderBottom: '1px solid var(--border-hairline)', color: 'var(--text-muted)' }}>
                    <th style={{ padding: '14px 20px', width: '25%' }}>CRITERION</th>
                    <th style={{ padding: '14px 20px', width: '15%' }}>CONFORMANCE</th>
                    <th style={{ padding: '14px 20px', width: '20%' }}>LEVEL OF SUPPORT</th>
                    <th style={{ padding: '14px 20px', width: '40%' }}>TECHNICAL REMARKS</th>
                  </tr>
                </thead>
                <tbody>
                  {VPAT_CRITERIA.map((c, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--border-hairline)', backgroundColor: idx % 2 === 0 ? '#13131c' : '#101016' }}>
                      <td style={{ padding: '14px 20px', fontWeight: '700', color: '#ffffff' }}>{c.rule}</td>
                      <td style={{ padding: '14px 20px', color: 'var(--text-secondary)' }}>{c.level}</td>
                      <td style={{ padding: '14px 20px', color: 'var(--status-pass)', fontWeight: '600' }}>✓ {c.support}</td>
                      <td style={{ padding: '14px 20px', color: 'var(--text-secondary)', lineHeight: 1.45 }}>{c.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── ASSISTIVE TECHNOLOGY COMPATIBILITY ──────────────────── */}
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>SCREEN READER COMPATIBILITY</span>
            <h2 className="headline-lg" style={{ marginTop: '4px' }}>
              Tested Across Industry-Standard Assistive Tools.
            </h2>
          </div>

          <div className="grid-2 gap-md mb-3xl">
            {COMPATIBILITY.map((item, idx) => (
              <div key={idx} className="card-dark" style={{ padding: '24px', borderRadius: '12px', border: '1px solid var(--border-subtle)', backgroundColor: '#13131c' }}>
                <div className="flex-between mb-xs">
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#ffffff', margin: 0 }}>{item.tech}</h3>
                  <span className="pill pill-approved">{item.rating}</span>
                </div>
                <div className="mono-sm text-secondary mb-sm" style={{ fontSize: '10.5px' }}>{item.version}</div>
                <p className="body-sm text-secondary" style={{ lineHeight: 1.5 }}>{item.notes}</p>
              </div>
            ))}
          </div>

          {/* ── KEYBOARD SHORTCUTS MATRIX ──────────────────────────── */}
          <div className="section-header-left mb-xl">
            <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>KEYBOARD NAVIGATION</span>
            <h2 className="headline-lg" style={{ marginTop: '4px' }}>
              Keyboard-First Queue Triage Shortcuts.
            </h2>
          </div>

          <div className="card-dark mb-3xl" style={{ padding: '24px', borderRadius: '14px', border: '1px solid var(--border-subtle)', backgroundColor: '#13131c' }}>
            <div className="grid-2 gap-md">
              {KEYBOARD_SHORTCUTS.map((sc, idx) => (
                <div key={idx} style={{ backgroundColor: '#0d0d14', padding: '14px 18px', borderRadius: '8px', border: '1px solid #1f1f2e', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="mono-sm" style={{ color: 'var(--accent-orange)', fontWeight: '700', fontSize: '12px' }}>{sc.key}</span>
                  <span className="body-sm text-secondary" style={{ fontSize: '12px' }}>{sc.action}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── ASSISTANCE & FEEDBACK DESK ──────────────────────────── */}
          <div className="card-dark flex-between flex-wrap gap-md" style={{ padding: '32px 36px', borderRadius: '16px', border: '1px solid var(--border-subtle)', backgroundColor: '#13131b' }}>
            <div>
              <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>ACCESSIBILITY COORDINATOR</span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginTop: '4px' }}>
                Need an accommodation or have accessibility feedback?
              </h3>
              <p className="body-sm text-secondary mt-xs" style={{ maxWidth: '640px' }}>
                We are committed to resolving digital accessibility barriers immediately. Our accessibility team responds within 2 business days.
              </p>
              <div className="mono-sm text-muted mt-sm" style={{ fontSize: '11px' }}>
                Email: accessibility@worldlynk.com · Phone: +44 20 7946 0912
              </div>
            </div>
            <Link to="/contact" className="btn-primary" style={{ flexShrink: 0 }}>
              Contact Accessibility Lead ➔
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
