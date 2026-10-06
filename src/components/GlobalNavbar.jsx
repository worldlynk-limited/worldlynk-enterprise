import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ChevronDown, ExternalLink, ArrowRight, Menu, X, Shield, Bot, Layout, GraduationCap, Sparkles } from 'lucide-react';

const COMPASS_BACKEND_URL = "https://uniportal-uq1p.onrender.com";
const STUDENT_PLATFORM_URL = "https://worldlynk.co.uk";

export default function GlobalNavbar({ onOpenSearch }) {
  const [platformDropdown, setPlatformDropdown] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);
  const [portalsDropdown, setPortalsDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setPlatformDropdown(false);
    setSolutionsDropdown(false);
    setCompanyDropdown(false);
    setPortalsDropdown(false);
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
                color: isActive('/platform') || isActive('/journey') || isActive('/how-it-works') || isActive('/integrations') ? '#ffffff' : '#9ca3af',
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
                <Link to="/journey" style={{ padding: '8px 10px', borderRadius: '6px', fontSize: '13px', color: '#ffffff', textDecoration: 'none', backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
                  <div style={{ fontWeight: '600', color: 'var(--accent-orange)' }}>Student Journey Funnel</div>
                  <div style={{ fontSize: '11px', color: '#9494a0' }}>11 stages: Prospect → Enrolment → Career</div>
                </Link>
                <Link to="/platform" style={{ padding: '8px 10px', borderRadius: '6px', fontSize: '13px', color: '#ffffff', textDecoration: 'none' }}>
                  <div style={{ fontWeight: '500' }}>Platform Overview</div>
                  <div style={{ fontSize: '11px', color: '#9494a0' }}>4 core layers: Connect, Understand, Assist, Govern</div>
                </Link>
                <Link to="/platform#nova" style={{ padding: '8px 10px', borderRadius: '6px', fontSize: '13px', color: '#ffffff', textDecoration: 'none' }}>
                  <div style={{ fontWeight: '600', color: 'var(--accent-cyan)' }}>Specialist AI Agents</div>
                  <div style={{ fontSize: '11px', color: '#9494a0' }}>24/7 student guidance &amp; automated staff drafts</div>
                </Link>
                <Link to="/integrations" style={{ padding: '8px 10px', borderRadius: '6px', fontSize: '13px', color: '#ffffff', textDecoration: 'none' }}>
                  <div style={{ fontWeight: '500' }}>Integrations &amp; Connectors</div>
                  <div style={{ fontSize: '11px', color: '#9494a0' }}>SITS, Banner, Moodle, Canvas, Workday</div>
                </Link>
                <Link to="/how-it-works" style={{ padding: '8px 10px', borderRadius: '6px', fontSize: '13px', color: '#ffffff', textDecoration: 'none' }}>
                  <div style={{ fontWeight: '500' }}>How It Works</div>
                  <div style={{ fontSize: '11px', color: '#9494a0' }}>5 steps from risk alert to staff sign-off</div>
                </Link>
                <Link to="/security" style={{ padding: '8px 10px', borderRadius: '6px', fontSize: '13px', color: '#ffffff', textDecoration: 'none' }}>
                  <div style={{ fontWeight: '500' }}>Security &amp; Privacy</div>
                  <div style={{ fontSize: '11px', color: '#9494a0' }}>UK &amp; EU GDPR, FERPA, SOC-2 Type II</div>
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

          {/* Direct Product Links */}
          <Link
            to="/staff-os"
            style={{
              fontSize: '13.5px',
              fontWeight: '500',
              color: isActive('/staff-os') ? '#ffffff' : '#9ca3af',
              textDecoration: 'none',
              transition: 'color 0.15s ease'
            }}
          >
            Staff OS
          </Link>

          <Link
            to="/student-os"
            style={{
              fontSize: '13.5px',
              fontWeight: '500',
              color: isActive('/student-os') ? '#ffffff' : '#9ca3af',
              textDecoration: 'none',
              transition: 'color 0.15s ease'
            }}
          >
            Student OS
          </Link>

          {/* Company Dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setCompanyDropdown(true)}
            onMouseLeave={() => setCompanyDropdown(false)}
          >
            <span
              style={{
                fontSize: '13.5px',
                fontWeight: '500',
                color: isActive('/founders') || isActive('/careers') || isActive('/contact') || isActive('/trust') ? '#ffffff' : '#9ca3af',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '18px 0',
                cursor: 'pointer',
                transition: 'color 0.15s ease'
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
                  width: '210px',
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
                <Link to="/founders" style={{ padding: '8px 10px', borderRadius: '6px', fontSize: '13px', color: '#ffffff', textDecoration: 'none' }}>
                  Mission &amp; Founders
                </Link>
                <Link to="/trust" style={{ padding: '8px 10px', borderRadius: '6px', fontSize: '13px', color: '#ffffff', textDecoration: 'none' }}>
                  Trust &amp; Security Hub
                </Link>
                <Link to="/careers" style={{ padding: '8px 10px', borderRadius: '6px', fontSize: '13px', color: '#ffffff', textDecoration: 'none' }}>
                  Careers
                </Link>
                <Link to="/contact" style={{ padding: '8px 10px', borderRadius: '6px', fontSize: '13px', color: '#ffffff', textDecoration: 'none' }}>
                  Contact Team
                </Link>
              </div>
            )}
          </div>
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
            
            {/* Live Portals Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setPortalsDropdown(true)}
              onMouseLeave={() => setPortalsDropdown(false)}
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
                <span>Live Portals</span>
                <ChevronDown size={12} color="#9ca3af" />
              </button>

              {portalsDropdown && (
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
              <div className="mono-label" style={{ fontSize: '10px', color: 'var(--accent-orange)' }}>PLATFORM &amp; JOURNEY</div>
              <Link
                to="/journey"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '15px',
                  fontWeight: '700',
                  color: 'var(--wl-accent)',
                  padding: '10px 12px',
                  backgroundColor: 'rgba(255, 107, 0, 0.08)',
                  borderRadius: '6px',
                  border: '1px solid rgba(255, 107, 0, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>Student Journey Funnel</span>
                <span style={{ fontSize: '10px', backgroundColor: 'var(--wl-accent)', color: '#ffffff', padding: '2px 6px', borderRadius: '3px' }}>11 STAGES</span>
              </Link>
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
              <div className="mono-label" style={{ fontSize: '10px', color: 'var(--ink-secondary)' }}>TRUST &amp; COMPANY</div>
              <Link to="/security" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '13.5px', color: '#e4e4e7', padding: '4px 12px' }}>
                Security &amp; Privacy
              </Link>
              <Link to="/trust" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '13.5px', color: '#e4e4e7', padding: '4px 12px' }}>
                Trust &amp; Procurement
              </Link>
              <Link to="/founders" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '13.5px', color: '#e4e4e7', padding: '4px 12px' }}>
                Founders &amp; Mission
              </Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '13.5px', color: '#e4e4e7', padding: '4px 12px' }}>
                Contact Team
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
