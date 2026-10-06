import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, Lock, ExternalLink, ArrowUpRight } from 'lucide-react';

const COMPASS_BACKEND_URL = "https://uniportal-uq1p.onrender.com";

const GridOverlay = ({ variant = 'dark' }) => (
  <div className={`wl-grid-overlay wl-grid-overlay--${variant}`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <div key={i} className="wl-grid-line" />
    ))}
  </div>
);

export default function GlobalFooter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="wl-footer" style={{ position: 'relative', overflow: 'hidden' }}>
      <GridOverlay variant="dark" />
      
      <div className="wl-footer__inner" style={{ position: 'relative', zIndex: 2 }}>
        <div className="wl-footer__top">
          {/* Column 1: Ecosystem */}
          <div className="wl-footer__col">
            <h3 className="wl-footer__col-title">Platform</h3>
            <ul className="wl-footer__list">
              <li><Link to="/journey" style={{ color: 'var(--wl-accent)', fontWeight: 600 }}>Student Journey Funnel</Link></li>
              <li><Link to="/platform#nova">Specialist AI Assistants</Link></li>
              <li><Link to="/staff-os">Compass Staff Portal</Link></li>
              <li><Link to="/student-os">Student Mobile App</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/integrations">Integrations Directory</Link></li>
              <li><a href="https://worldlynk.co.uk" target="_blank" rel="noopener noreferrer">Student App ↗</a></li>
              <li><a href="https://uniportal-uq1p.onrender.com" target="_blank" rel="noopener noreferrer">Compass Staff Portal ↗</a></li>
            </ul>
          </div>
          
          {/* Column 2: Governance & Solutions */}
          <div className="wl-footer__col">
            <h3 className="wl-footer__col-title">Solutions</h3>
            <ul className="wl-footer__list">
              <li><Link to="/solutions/vice-chancellor">Vice-Chancellors &amp; Leadership</Link></li>
              <li><Link to="/solutions/registrars">Academic Registrars</Link></li>
              <li><Link to="/solutions/admissions">International Admissions</Link></li>
              <li><Link to="/solutions/compliance">Visa &amp; Compliance Teams</Link></li>
              <li><Link to="/outcomes">Outcomes &amp; Case Studies</Link></li>
              <li><Link to="/demo">Book a Demo</Link></li>
            </ul>
          </div>

          {/* Column 3: Trust & Governance */}
          <div className="wl-footer__col">
            <h3 className="wl-footer__col-title">Trust &amp; Security</h3>
            <ul className="wl-footer__list">
              <li><Link to="/trust">Trust &amp; Procurement</Link></li>
              <li><Link to="/security">Security &amp; Privacy</Link></li>
              <li><Link to="/privacy">UK GDPR &amp; Privacy Policy</Link></li>
              <li><Link to="/accessibility">Accessibility Statement</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/founders">Founders &amp; Mission</Link></li>
            </ul>
          </div>

          {/* Column 4: Leadership Briefing */}
          <div className="wl-footer__col wl-footer__col--newsletter">
            <h3 className="wl-footer__col-title">Higher Education Newsletter</h3>
            <p style={{ fontSize: '12px', color: '#9494a0', lineHeight: 1.6, margin: '0 0 16px 0' }}>
              Practical insights on student retention, visa compliance, and saving staff time with AI.
            </p>
            {subscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10b981', fontSize: '13px', fontWeight: '500' }}>
                <CheckCircle2 size={16} /> Subscribed to WorldLynk Insights
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="wl-footer__newsletter-form">
                <input 
                  type="email" 
                  placeholder="registrar@university.ac.uk" 
                  className="wl-footer__input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
                <button type="submit" className="wl-footer__subscribe-btn">
                  Subscribe
                </button>
              </form>
            )}
            
            <div className="wl-footer__socials" style={{ marginTop: '24px' }}>
              <span style={{ fontSize: '11px', color: '#686875', fontFamily: 'var(--font-mono)' }}>
                GLOBAL PLATFORM INFRASTRUCTURE · MULTI-JURISDICTION COMPLIANCE
              </span>
            </div>
          </div>
        </div>

        {/* Lower Banner & Compliance Seal */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '28px', marginTop: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src="/worldlynk-logo.svg" alt="WorldLynk" style={{ height: '16px', width: 'auto', display: 'block' }} />
              <span style={{ fontSize: '10px', color: '#ff6b00', background: 'rgba(255, 107, 0, 0.12)', padding: '2px 6px', borderRadius: '2px', border: '1px solid rgba(255, 107, 0, 0.25)', fontFamily: 'var(--font-mono)' }}>
                GLOBAL HIGHER EDUCATION PLATFORM
              </span>
              <span style={{ fontSize: '10px', color: '#9494a0', background: 'rgba(255, 255, 255, 0.06)', padding: '2px 6px', borderRadius: '2px', border: '1px solid rgba(255, 255, 255, 0.1)', fontFamily: 'var(--font-mono)' }}>
                ZERO MIGRATION · SITS · BANNER · MOODLE · WORKDAY
              </span>
            </div>

            {/* Trust Badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap', fontSize: '11px', color: '#9494a0', fontFamily: 'var(--font-mono)' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <CheckCircle2 size={13} color="#10b981" /> SOC-2 Type II
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <CheckCircle2 size={13} color="#10b981" /> UK &amp; EU GDPR
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <CheckCircle2 size={13} color="#10b981" /> FERPA Compliant
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <CheckCircle2 size={13} color="#10b981" /> ISO 27001 Aligned
              </span>
            </div>
          </div>

          <div style={{ marginTop: '24px', textAlign: 'center', fontSize: '11px', color: '#686875', fontFamily: 'var(--font-mono)' }}>
            © {new Date().getFullYear()} WorldLynk Technologies Ltd. All rights reserved. The trusted global AI operating platform for higher education.
          </div>
        </div>
      </div>

      <div className="wl-footer__watermark-outline">WORLDLYNK</div>
    </footer>
  );
}
