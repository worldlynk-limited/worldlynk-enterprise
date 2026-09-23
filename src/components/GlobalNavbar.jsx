import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ChevronDown, ExternalLink, ArrowRight, Menu, X, Shield, Bot, Layout, GraduationCap } from 'lucide-react';

const COMPASS_BACKEND_URL = "https://uniportal-uq1p.onrender.com";
const STUDENT_PLATFORM_URL = "https://worldlynk.co.uk";

export default function GlobalNavbar({ onOpenSearch }) {
  const [platformDropdown, setPlatformDropdown] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setPlatformDropdown(false);
    setSolutionsDropdown(false);
    setCompanyDropdown(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '56px',
        backgroundColor: 'rgba(12, 12, 15, 0.94)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="main-container" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <img src="/worldlynk-logo.svg" alt="WorldLynk" style={{ height: '17px', width: 'auto', display: 'block' }} />
            <span style={{ fontSize: '10px', color: '#ff6b00', background: 'rgba(255, 107, 0, 0.12)', padding: '2px 6px', borderRadius: '2px', border: '1px solid rgba(255, 107, 0, 0.25)', fontFamily: 'var(--font-mono)' }}>
              ENTERPRISE
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav-links">
          {/* Platform Menu */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setPlatformDropdown(true)}
            onMouseLeave={() => setPlatformDropdown(false)}
          >
            <Link
              to="/platform"
              style={{
                fontSize: '13px',
                fontWeight: '500',
                color: isActive('/platform') || isActive('/how-it-works') || isActive('/integrations') ? '#ffffff' : '#9494a0',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '16px 0',
                textDecoration: 'none'
              }}
            >
              <span>Platform</span>
              <ChevronDown size={13} color="#9494a0" />
            </Link>

            {platformDropdown && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-10px',
                  width: '280px',
                  backgroundColor: '#131318',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '4px',
                  padding: '8px',
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.6)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px',
                  zIndex: 1100
                }}
              >
                <div style={{ fontSize: '10px', padding: '4px 8px', color: '#686875', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>
                  CAMPUS ARCHITECTURE
                </div>
                <Link to="/platform" style={{ padding: '6px 8px', borderRadius: '3px', fontSize: '12.5px', color: '#ffffff', textDecoration: 'none' }}>
                  <div style={{ fontWeight: '500' }}>Platform Overview</div>
                  <div style={{ fontSize: '11px', color: '#9494a0' }}>Living Agent Graph &amp; 4 core layers</div>
                </Link>
                <Link to="/platform#nova" style={{ padding: '6px 8px', borderRadius: '3px', fontSize: '12.5px', color: '#ffffff', textDecoration: 'none' }}>
                  <div style={{ fontWeight: '600', color: 'var(--accent-orange)' }}>Nova AI Infrastructure</div>
                  <div style={{ fontSize: '11px', color: '#9494a0' }}>30 Agents, 12 DAGs &amp; Realtime Voice</div>
                </Link>
                <Link to="/how-it-works" style={{ padding: '6px 8px', borderRadius: '3px', fontSize: '12.5px', color: '#ffffff', textDecoration: 'none' }}>
                  <div style={{ fontWeight: '500' }}>Event Continuous Loop</div>
                  <div style={{ fontSize: '11px', color: '#9494a0' }}>Deterministic cascade &amp; multi-system sync</div>
                </Link>
                <Link to="/integrations" style={{ padding: '6px 8px', borderRadius: '3px', fontSize: '12.5px', color: '#ffffff', textDecoration: 'none' }}>
                  <div style={{ fontWeight: '500' }}>Connectors Matrix</div>
                  <div style={{ fontSize: '11px', color: '#9494a0' }}>SITS, Banner, Moodle, Stripe, Wires</div>
                </Link>
                <Link to="/security" style={{ padding: '6px 8px', borderRadius: '3px', fontSize: '12.5px', color: '#ffffff', textDecoration: 'none' }}>
                  <div style={{ fontWeight: '500' }}>Security &amp; Governance</div>
                  <div style={{ fontSize: '11px', color: '#9494a0' }}>FERPA, UK GDPR &amp; cryptographic ledger</div>
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/staff-os"
            style={{
              fontSize: '13px',
              fontWeight: '500',
              color: isActive('/staff-os') ? '#ffffff' : '#9494a0',
              textDecoration: 'none'
            }}
          >
            Compass Portal
          </Link>

          <Link
            to="/student-os"
            style={{
              fontSize: '13px',
              fontWeight: '500',
              color: isActive('/student-os') ? '#ffffff' : '#9494a0',
              textDecoration: 'none'
            }}
          >
            Student OS
          </Link>

          {/* Solutions Dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setSolutionsDropdown(true)}
            onMouseLeave={() => setSolutionsDropdown(false)}
          >
            <Link
              to="/solutions"
              style={{
                fontSize: '13px',
                fontWeight: '500',
                color: isActive('/solutions') || isActive('/outcomes') ? '#ffffff' : '#9494a0',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '16px 0',
                textDecoration: 'none'
              }}
            >
              <span>Solutions</span>
              <ChevronDown size={13} color="#9494a0" />
            </Link>

            {solutionsDropdown && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-10px',
                  width: '260px',
                  backgroundColor: '#131318',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '4px',
                  padding: '8px',
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.6)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px',
                  zIndex: 1100
                }}
              >
                <div style={{ fontSize: '10px', padding: '4px 8px', color: '#686875', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>
                  STAKEHOLDER GOVERNANCE
                </div>
                <Link to="/solutions/vice-chancellor" style={{ padding: '6px 8px', borderRadius: '3px', fontSize: '12.5px', color: '#ffffff', textDecoration: 'none' }}>
                  Vice-Chancellors &amp; Cabinet
                </Link>
                <Link to="/solutions/registrars" style={{ padding: '6px 8px', borderRadius: '3px', fontSize: '12.5px', color: '#ffffff', textDecoration: 'none' }}>
                  Academic Registrars
                </Link>
                <Link to="/solutions/admissions" style={{ padding: '6px 8px', borderRadius: '3px', fontSize: '12.5px', color: '#ffffff', textDecoration: 'none' }}>
                  International Admissions
                </Link>
                <Link to="/solutions/compliance" style={{ padding: '6px 8px', borderRadius: '3px', fontSize: '12.5px', color: '#ffffff', textDecoration: 'none' }}>
                  UKVI Compliance Officers
                </Link>
                <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.08)', margin: '4px 0' }} />
                <Link to="/outcomes" style={{ padding: '6px 8px', borderRadius: '3px', fontSize: '12.5px', color: '#ff6b00', fontWeight: '600', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>Institutional ROI &amp; Outcomes</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            )}
          </div>

          {/* Company Dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setCompanyDropdown(true)}
            onMouseLeave={() => setCompanyDropdown(false)}
          >
            <span
              style={{
                fontSize: '13px',
                fontWeight: '500',
                color: isActive('/founders') || isActive('/careers') || isActive('/contact') || isActive('/trust') ? '#ffffff' : '#9494a0',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '16px 0',
                cursor: 'pointer'
              }}
            >
              <span>Company</span>
              <ChevronDown size={13} color="#9494a0" />
            </span>

            {companyDropdown && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  width: '200px',
                  backgroundColor: '#131318',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '4px',
                  padding: '8px',
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.6)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px',
                  zIndex: 1100
                }}
              >
                <Link to="/founders" style={{ padding: '6px 8px', borderRadius: '3px', fontSize: '12.5px', color: '#ffffff', textDecoration: 'none' }}>
                  Founders &amp; Mission
                </Link>
                <Link to="/careers" style={{ padding: '6px 8px', borderRadius: '3px', fontSize: '12.5px', color: '#ffffff', textDecoration: 'none' }}>
                  Careers
                </Link>
                <Link to="/trust" style={{ padding: '6px 8px', borderRadius: '3px', fontSize: '12.5px', color: '#ffffff', textDecoration: 'none' }}>
                  Trust &amp; Security Hub
                </Link>
                <Link to="/contact" style={{ padding: '6px 8px', borderRadius: '3px', fontSize: '12.5px', color: '#ffffff', textDecoration: 'none' }}>
                  Contact Team
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Action Controls & Cmd+K */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Find Button (Visible on all viewports) */}
          <button
            onClick={onOpenSearch}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 10px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '4px',
              cursor: 'pointer',
              color: '#9494a0'
            }}
            title="Search command center (Ctrl+K)"
          >
            <Search size={13} color="#ff6b00" />
            <span style={{ fontSize: '12px', color: '#e4e4e7', fontWeight: '500' }}>Find</span>
            <kbd style={{ fontSize: '9px', padding: '1px 5px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '2px', color: '#9494a0' }}>Ctrl+K</kbd>
          </button>

          {/* Desktop Only Actions */}
          <div className="desktop-action-links">
            <Link
              to="/demo"
              style={{
                padding: '6px 12px',
                fontSize: '12px',
                fontWeight: '500',
                borderRadius: '4px',
                color: '#ffffff',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                textDecoration: 'none'
              }}
            >
              Book Demo
            </Link>

            <a
              href={STUDENT_PLATFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '6px 11px',
                fontSize: '11.5px',
                fontWeight: '600',
                borderRadius: '4px',
                color: '#38bdf8',
                background: 'rgba(56, 189, 248, 0.08)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <span>Student App</span>
              <ExternalLink size={10} color="#38bdf8" />
            </a>

            <a
              href={COMPASS_BACKEND_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '6px 12px',
                fontSize: '11.5px',
                fontWeight: '600',
                borderRadius: '4px',
                color: '#0c0c0f',
                background: '#ff6b00',
                border: '1px solid #ff6b00',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <span>Compass Portal</span>
              <ExternalLink size={10} color="#0c0c0f" />
            </a>
          </div>

          {/* Mobile Navigation Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-nav-toggle"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '4px',
              padding: '7px 9px',
              color: '#ffffff'
            }}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer animate-fade-in">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: '32px' }}>
            
            {/* Direct Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div className="mono-label" style={{ fontSize: '10px', color: 'var(--accent-orange)' }}>CAMPUS OS PRODUCTS</div>
              <Link
                to="/platform"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  color: '#ffffff',
                  padding: '10px 12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '6px',
                  border: '1px solid rgba(255, 255, 255, 0.06)'
                }}
              >
                Platform &amp; Agent Graph Architecture
              </Link>
              <Link
                to="/staff-os"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  color: '#ffffff',
                  padding: '10px 12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '6px',
                  border: '1px solid rgba(255, 255, 255, 0.06)'
                }}
              >
                Compass Operations Console
              </Link>
              <Link
                to="/student-os"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  color: '#ffffff',
                  padding: '10px 12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '6px',
                  border: '1px solid rgba(255, 255, 255, 0.06)'
                }}
              >
                Student OS Super-App
              </Link>
              <Link
                to="/how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '14px',
                  color: '#9494a0',
                  padding: '8px 12px'
                }}
              >
                Event Continuous Loop
              </Link>
              <Link
                to="/integrations"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '14px',
                  color: '#9494a0',
                  padding: '8px 12px'
                }}
              >
                Integrations Matrix (SITS, Moodle, Stripe)
              </Link>
            </div>

            {/* Solutions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div className="mono-label" style={{ fontSize: '10px', color: 'var(--accent-cyan)' }}>SOLUTIONS &amp; STAKEHOLDERS</div>
              <Link to="/solutions" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '14px', color: '#e4e4e7', padding: '6px 12px' }}>
                Solutions Overview
              </Link>
              <Link to="/solutions/vice-chancellor" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '13.5px', color: '#9494a0', padding: '4px 12px' }}>
                Vice-Chancellors &amp; Cabinet
              </Link>
              <Link to="/solutions/registrars" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '13.5px', color: '#9494a0', padding: '4px 12px' }}>
                Academic Registrars
              </Link>
              <Link to="/solutions/compliance" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '13.5px', color: '#9494a0', padding: '4px 12px' }}>
                UKVI Tier-4 Compliance
              </Link>
              <Link to="/outcomes" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '14px', color: '#ff6b00', fontWeight: '600', padding: '6px 12px' }}>
                Institutional Outcomes &amp; ROI
              </Link>
            </div>

            {/* Trust & Company */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div className="mono-label" style={{ fontSize: '10px', color: 'var(--ink-secondary)' }}>TRUST &amp; COMPANY</div>
              <Link to="/security" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '14px', color: '#e4e4e7', padding: '4px 12px' }}>
                Security &amp; FERPA Architecture
              </Link>
              <Link to="/trust" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '14px', color: '#e4e4e7', padding: '4px 12px' }}>
                Trust &amp; Procurement Hub
              </Link>
              <Link to="/founders" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '14px', color: '#e4e4e7', padding: '4px 12px' }}>
                Founders &amp; Mission
              </Link>
              <Link to="/careers" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '14px', color: '#e4e4e7', padding: '4px 12px' }}>
                Careers
              </Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '14px', color: '#e4e4e7', padding: '4px 12px' }}>
                Contact Team
              </Link>
            </div>

            {/* Bottom Action CTAs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <Link
                to="/demo"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary"
                style={{ width: '100%', textAlign: 'center', padding: '12px' }}
              >
                Book Executive Briefing
              </Link>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <a
                  href={STUDENT_PLATFORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ textAlign: 'center', fontSize: '12px', padding: '10px 8px', color: '#38bdf8' }}
                >
                  Student App ↗
                </a>
                <a
                  href={COMPASS_BACKEND_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ textAlign: 'center', fontSize: '12px', padding: '10px 8px', color: '#ff6b00' }}
                >
                  Compass Portal ↗
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
