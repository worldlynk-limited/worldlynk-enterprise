import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ChevronDown, ExternalLink, ArrowRight, Menu, X, Shield, Bot, Layout, GraduationCap, Sparkles } from 'lucide-react';

const COMPASS_BACKEND_URL = "https://uniportal-uq1p.onrender.com";
const STUDENT_PLATFORM_URL = "https://worldlynk.co.uk";

export default function GlobalNavbar({ onOpenSearch }) {
  const [platformDropdown, setPlatformDropdown] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);
  const [trustDropdown, setTrustDropdown] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);
  const [loginDropdown, setLoginDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setPlatformDropdown(false);
    setSolutionsDropdown(false);
    setTrustDropdown(false);
    setCompanyDropdown(false);
    setLoginDropdown(false);
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
        height: '60px',
        backgroundColor: 'rgba(12, 12, 15, 0.88)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="main-container" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              textDecoration: 'none'
            }}
          >
            <span style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '-0.3px', color: '#ffffff' }}>
              WorldLynk
            </span>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--wl-accent)', display: 'inline-block' }} />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav-links" style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
          
          {/* Platform Menu */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setPlatformDropdown(true)}
            onMouseLeave={() => setPlatformDropdown(false)}
          >
            <Link
              to="/platform"
              style={{
                fontSize: '13.5px',
                fontWeight: '500',
                color: isActive('/platform') || isActive('/staff-os') || isActive('/student-os') || isActive('/integrations') ? '#ffffff' : '#9ca3af',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '18px 0',
                textDecoration: 'none',
                transition: 'color 0.15s ease'
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
                  backgroundColor: '#13131a',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                  padding: '10px',
                  boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  zIndex: 1100
                }}
              >
                <div style={{ fontSize: '10px', padding: '4px 8px', color: '#686875', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>
                  CAMPUS CAPABILITIES
                </div>
                <Link to="/platform" style={{ padding: '8px 10px', borderRadius: '6px', fontSize: '13px', color: '#ffffff', textDecoration: 'none' }}>
                  <div style={{ fontWeight: '600', color: 'var(--accent-orange)' }}>Platform Architecture</div>
                  <div style={{ fontSize: '11px', color: '#9494a0' }}>4 core layers: Connect, Understand, Assist, Govern</div>
                </Link>
                <Link to="/staff-os" style={{ padding: '8px 10px', borderRadius: '6px', fontSize: '13px', color: '#ffffff', textDecoration: 'none' }}>
                  <div style={{ fontWeight: '500' }}>Compass Staff OS</div>
                  <div style={{ fontSize: '11px', color: '#9494a0' }}>Predictive triage, welfare casework &amp; 1-click approvals</div>
                </Link>
                <Link to="/student-os" style={{ padding: '8px 10px', borderRadius: '6px', fontSize: '13px', color: '#ffffff', textDecoration: 'none' }}>
                  <div style={{ fontWeight: '500' }}>Student Mobile Super-App</div>
                  <div style={{ fontSize: '11px', color: '#9494a0' }}>20h work tracker, verified PBSA housing &amp; dynamic QR</div>
                </Link>
                <Link to="/integrations" style={{ padding: '8px 10px', borderRadius: '6px', fontSize: '13px', color: '#ffffff', textDecoration: 'none' }}>
                  <div style={{ fontWeight: '500' }}>Integrations &amp; Connectors</div>
                  <div style={{ fontSize: '11px', color: '#9494a0' }}>SITS, Banner, Moodle, Canvas, Stripe</div>
                </Link>
              </div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setSolutionsDropdown(true)}
            onMouseLeave={() => setSolutionsDropdown(false)}
          >
            <Link
              to="/solutions"
              style={{
                fontSize: '13.5px',
                fontWeight: '500',
                color: isActive('/solutions') || isActive('/outcomes') ? '#ffffff' : '#9494a0',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '18px 0',
                textDecoration: 'none',
                transition: 'color 0.15s ease'
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
                  backgroundColor: '#13131a',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                  padding: '10px',
                  boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  zIndex: 1100
                }}
              >
                <div style={{ fontSize: '10px', padding: '4px 8px', color: '#686875', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>
                  BY CAMPUS ROLE
                </div>
                <Link to="/solutions/vice-chancellor" style={{ padding: '8px 10px', borderRadius: '6px', fontSize: '13px', color: '#ffffff', textDecoration: 'none' }}>
                  Vice-Chancellors &amp; Leadership
                </Link>
                <Link to="/solutions/registrars" style={{ padding: '8px 10px', borderRadius: '6px', fontSize: '13px', color: '#ffffff', textDecoration: 'none' }}>
                  Academic Registrars
                </Link>
                <Link to="/solutions/admissions" style={{ padding: '8px 10px', borderRadius: '6px', fontSize: '13px', color: '#ffffff', textDecoration: 'none' }}>
                  International Admissions
                </Link>
                <Link to="/solutions/compliance" style={{ padding: '8px 10px', borderRadius: '6px', fontSize: '13px', color: '#ffffff', textDecoration: 'none' }}>
                  Visa &amp; Compliance Teams
                </Link>
                <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.08)', margin: '4px 0' }} />
                <Link to="/outcomes" style={{ padding: '8px 10px', borderRadius: '6px', fontSize: '13px', color: '#ff6b00', fontWeight: '600', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>Outcomes &amp; Case Studies</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            )}
          </div>

          {/* Trust & Governance in Primary Nav */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setTrustDropdown(true)}
            onMouseLeave={() => setTrustDropdown(false)}
          >
            <Link
              to="/trust"
              style={{
                fontSize: '13.5px',
                fontWeight: '500',
                color: isActive('/trust') || isActive('/privacy') || isActive('/accessibility') || isActive('/terms') ? '#ffffff' : '#9ca3af',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '18px 0',
                textDecoration: 'none',
                transition: 'color 0.15s ease'
              }}
            >
              <span>Trust &amp; Governance</span>
              <ChevronDown size={13} color="#9494a0" />
            </Link>

            {trustDropdown && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-10px',
                  width: '270px',
                  backgroundColor: '#13131a',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                  padding: '10px',
                  boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  zIndex: 1100
                }}
              >
                <div style={{ fontSize: '10px', padding: '4px 8px', color: '#686875', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>
                  INSTITUTIONAL ASSURANCE
                </div>
                <Link to="/trust" style={{ padding: '8px 10px', borderRadius: '6px', fontSize: '13px', color: '#ffffff', textDecoration: 'none' }}>
                  <div style={{ fontWeight: '600', color: '#38bdf8' }}>Trust &amp; Security Hub</div>
                  <div style={{ fontSize: '11px', color: '#9494a0' }}>SOC-2, HECVAT, PII tokenization &amp; AI ethics</div>
                </Link>
                <Link to="/privacy" style={{ padding: '8px 10px', borderRadius: '6px', fontSize: '13px', color: '#ffffff', textDecoration: 'none' }}>
                  <div style={{ fontWeight: '500' }}>UK GDPR Privacy Policy</div>
                  <div style={{ fontSize: '11px', color: '#9494a0' }}>Data residency, DPA &amp; sub-processors</div>
                </Link>
                <Link to="/accessibility" style={{ padding: '8px 10px', borderRadius: '6px', fontSize: '13px', color: '#ffffff', textDecoration: 'none' }}>
                  <div style={{ fontWeight: '500' }}>Accessibility Statement</div>
                  <div style={{ fontSize: '11px', color: '#9494a0' }}>WCAG 2.1 AA compliance &amp; audited VPAT</div>
                </Link>
                <Link to="/terms" style={{ padding: '8px 10px', borderRadius: '6px', fontSize: '13px', color: '#ffffff', textDecoration: 'none' }}>
                  <div style={{ fontWeight: '500' }}>Master Services Agreement</div>
                  <div style={{ fontSize: '11px', color: '#9494a0' }}>Higher education enterprise terms &amp; SLAs</div>
                </Link>
              </div>
            )}
          </div>

          {/* Contact Direct Link */}
          <Link
            to="/contact"
            style={{
              fontSize: '13.5px',
              fontWeight: '500',
              color: isActive('/contact') ? '#ffffff' : '#9ca3af',
              display: 'flex',
              alignItems: 'center',
              padding: '18px 0',
              textDecoration: 'none',
              transition: 'color 0.15s ease'
            }}
          >
            <span>Contact</span>
          </Link>
        </nav>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          
          {/* Compact Find / Command Palette Trigger */}
          <button
            onClick={onOpenSearch}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 10px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '6px',
              cursor: 'pointer',
              color: '#9ca3af',
              transition: 'all 0.2s ease'
            }}
            title="Search command center (⌘K)"
          >
            <Search size={13} color="var(--wl-accent)" />
            <span style={{ fontSize: '12px', color: '#e4e4e7', fontWeight: '500' }}>Search</span>
            <kbd style={{ fontSize: '9.5px', padding: '1px 5px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '3px', color: '#9ca3af', fontFamily: 'var(--font-mono)' }}>⌘K</kbd>
          </button>

          {/* Desktop Only Actions */}
          <div className="desktop-action-links" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            
            {/* Utility Log in Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setLoginDropdown(true)}
              onMouseLeave={() => setLoginDropdown(false)}
            >
              <button
                type="button"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '7px 11px',
                  fontSize: '12.5px',
                  fontWeight: '500',
                  color: '#e4e4e7',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'background 0.2s'
                }}
              >
                <span>Log in</span>
                <ChevronDown size={12} color="#9ca3af" />
              </button>

              {loginDropdown && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    width: '230px',
                    backgroundColor: '#13131a',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    padding: '8px',
                    boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    zIndex: 1100
                  }}
                >
                  <a
                    href={COMPASS_BACKEND_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '8px 10px',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      backgroundColor: 'rgba(255, 107, 0, 0.06)',
                      border: '1px solid rgba(255, 107, 0, 0.2)',
                      display: 'block'
                    }}
                  >
                    <div style={{ fontWeight: '600', color: 'var(--wl-accent)', fontSize: '12.5px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span>Compass Staff Portal</span>
                      <ExternalLink size={12} />
                    </div>
                    <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: '2px' }}>Real-time triage &amp; approvals</div>
                  </a>

                  <a
                    href={STUDENT_PLATFORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '8px 10px',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      backgroundColor: 'rgba(56, 189, 248, 0.06)',
                      border: '1px solid rgba(56, 189, 248, 0.2)',
                      display: 'block'
                    }}
                  >
                    <div style={{ fontWeight: '600', color: '#38bdf8', fontSize: '12.5px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span>Student Mobile App</span>
                      <ExternalLink size={12} />
                    </div>
                    <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: '2px' }}>Timetable &amp; 1-tap class check-in</div>
                  </a>
                </div>
              )}
            </div>

            {/* Primary Book Demo CTA */}
            <Link
              to="/demo"
              className="btn-primary"
              style={{
                padding: '7px 16px',
                fontSize: '12.5px',
                fontWeight: '600',
                borderRadius: '6px',
                textDecoration: 'none'
              }}
            >
              Book a Demo
            </Link>
          </div>

          {/* Mobile Navigation Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-nav-toggle"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '6px',
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div className="mono-label" style={{ fontSize: '10px', color: 'var(--accent-orange)' }}>PLATFORM ARCHITECTURE</div>
              <Link
                to="/platform"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '14.5px',
                  fontWeight: '600',
                  color: '#ffffff',
                  padding: '10px 12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '6px',
                  border: '1px solid rgba(255, 255, 255, 0.06)'
                }}
              >
                Platform Architecture (4 Layers)
              </Link>
              <Link
                to="/staff-os"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '14.5px',
                  fontWeight: '600',
                  color: '#ffffff',
                  padding: '10px 12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '6px',
                  border: '1px solid rgba(255, 255, 255, 0.06)'
                }}
              >
                Staff OS (Compass Portal)
              </Link>
              <Link
                to="/student-os"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '14.5px',
                  fontWeight: '600',
                  color: '#ffffff',
                  padding: '10px 12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '6px',
                  border: '1px solid rgba(255, 255, 255, 0.06)'
                }}
              >
                Student OS (Mobile App)
              </Link>
              <Link
                to="/integrations"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '13.5px',
                  color: '#9494a0',
                  padding: '6px 12px'
                }}
              >
                Integrations (SITS, Banner, Moodle)
              </Link>
            </div>

            {/* Solutions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div className="mono-label" style={{ fontSize: '10px', color: 'var(--accent-cyan)' }}>SOLUTIONS BY ROLE</div>
              <Link to="/solutions" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '13.5px', color: '#e4e4e7', padding: '5px 12px' }}>
                Solutions Overview
              </Link>
              <Link to="/solutions/vice-chancellor" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '13px', color: '#9494a0', padding: '4px 12px' }}>
                Vice-Chancellors &amp; Leadership
              </Link>
              <Link to="/solutions/registrars" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '13px', color: '#9494a0', padding: '4px 12px' }}>
                Academic Registrars
              </Link>
              <Link to="/solutions/compliance" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '13px', color: '#9494a0', padding: '4px 12px' }}>
                Visa &amp; Compliance Teams
              </Link>
              <Link to="/outcomes" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '13.5px', color: '#ff6b00', fontWeight: '600', padding: '5px 12px' }}>
                Outcomes &amp; Case Studies
              </Link>
            </div>

            {/* Trust & Company */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div className="mono-label" style={{ fontSize: '10px', color: 'var(--ink-secondary)' }}>TRUST &amp; GOVERNANCE</div>
              <Link to="/trust" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '13.5px', color: '#e4e4e7', padding: '4px 12px' }}>
                Trust &amp; Security Hub
              </Link>
              <Link to="/privacy" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '13.5px', color: '#e4e4e7', padding: '4px 12px' }}>
                UK GDPR Privacy Policy
              </Link>
              <Link to="/accessibility" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '13.5px', color: '#e4e4e7', padding: '4px 12px' }}>
                Accessibility Statement (VPAT)
              </Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '13.5px', color: '#e4e4e7', padding: '4px 12px' }}>
                Contact Campus Desks
              </Link>
            </div>

            {/* Bottom Action CTAs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <Link
                to="/demo"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary"
                style={{ width: '100%', textAlign: 'center', padding: '12px', borderRadius: '6px' }}
              >
                Book a Demo
              </Link>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <a
                  href={COMPASS_BACKEND_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ textAlign: 'center', fontSize: '12px', padding: '10px 8px', color: '#ff6b00' }}
                >
                  Compass Portal ↗
                </a>
                <a
                  href={STUDENT_PLATFORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ textAlign: 'center', fontSize: '12px', padding: '10px 8px', color: '#38bdf8' }}
                >
                  Student App ↗
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
