import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, Lock, ExternalLink, ArrowUpRight } from 'lucide-react';

const COMPASS_BACKEND_URL = "https://uniportal-uq1p.onrender.com";
const STUDENT_PLATFORM_URL = "https://worldlynk.co.uk";

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
    <footer className="wl-footer">
      <GridOverlay variant="dark" />
      
      <div className="main-container wl-footer__inner">
        <div className="wl-footer__grid">
          {/* Column 1: Brand & Enterprise Overview */}
          <div className="wl-footer__brand-col">
            <Link to="/" className="wl-footer__brand-logo" aria-label="WorldLynk Home">
              <img 
                src="/worldlynk-logo.png" 
                alt="WorldLynk" 
                className="wl-footer__logo-img" 
              />
            </Link>

            <p className="wl-footer__brand-desc">
              The autonomous campus operating system for higher education. Unifying institutional SIS, LMS, and attendance data into proactive, real-time student support without migrations.
            </p>

            <div className="wl-footer__status-badge">
              <span className="wl-footer__status-dot" />
              <span>All Systems Operational</span>
            </div>

            <div className="wl-footer__brand-meta">
              LONDON, UNITED KINGDOM · GLOBAL HE DEPLOYMENTS
            </div>
          </div>

          {/* Column 2: Platform */}
          <div className="wl-footer__col">
            <h3 className="wl-footer__col-title">Platform</h3>
            <ul className="wl-footer__list">
              <li><Link to="/journey" style={{ color: 'var(--wl-accent)', fontWeight: 600 }}>Student Journey Funnel</Link></li>
              <li><Link to="/platform#nova">Specialist AI Assistants</Link></li>
              <li><Link to="/staff-os">Compass Staff Portal</Link></li>
              <li><Link to="/student-os">Student Mobile App</Link></li>
              <li><Link to="/how-it-works">Continuous Event Engine</Link></li>
              <li><Link to="/integrations">Integrations Directory</Link></li>
              <li><a href={STUDENT_PLATFORM_URL} target="_blank" rel="noopener noreferrer">Student App ↗</a></li>
              <li><a href={COMPASS_BACKEND_URL} target="_blank" rel="noopener noreferrer">Staff Console ↗</a></li>
            </ul>
          </div>
          
          {/* Column 3: Solutions */}
          <div className="wl-footer__col">
            <h3 className="wl-footer__col-title">Solutions</h3>
            <ul className="wl-footer__list">
              <li><Link to="/solutions/vice-chancellor">Vice-Chancellors &amp; Leadership</Link></li>
              <li><Link to="/solutions/registrars">Academic Registrars</Link></li>
              <li><Link to="/solutions/admissions">International Admissions</Link></li>
              <li><Link to="/solutions/compliance">Visa &amp; Compliance Teams</Link></li>
              <li><Link to="/outcomes">Outcomes &amp; Case Studies</Link></li>
              <li><Link to="/demo">Book an Enterprise Demo</Link></li>
            </ul>
          </div>

          {/* Column 4: Trust & Security */}
          <div className="wl-footer__col">
            <h3 className="wl-footer__col-title">Trust &amp; Security</h3>
            <ul className="wl-footer__list">
              <li><Link to="/trust">Trust &amp; Procurement</Link></li>
              <li><Link to="/security">Security &amp; Architecture</Link></li>
              <li><Link to="/privacy">UK &amp; EU GDPR Privacy</Link></li>
              <li><Link to="/accessibility">Accessibility Statement</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/founders">Founders &amp; Mission</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </div>

          {/* Column 5: Leadership Briefing */}
          <div className="wl-footer__col">
            <h3 className="wl-footer__col-title">HE Leadership Dispatch</h3>
            <p className="wl-footer__col-desc">
              Practical quarterly insights on student retention, compliance automation, and saving staff time with AI.
            </p>
            {subscribed ? (
              <div className="wl-footer__subscribed-msg">
                <CheckCircle2 size={16} /> Subscribed to Executive Dispatch
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
                  Subscribe to Briefing
                </button>
              </form>
            )}
            
            <div className="wl-footer__newsletter-note">
              ZERO SPAM · EXCLUSIVELY FOR HIGHER EDUCATION LEADERSHIP
            </div>
          </div>
        </div>

        {/* Lower Banner & Compliance Seal */}
        <div className="wl-footer__middle">
          <div className="wl-footer__badges">
            <span className="wl-footer__badge-accent">
              GLOBAL HIGHER EDUCATION PLATFORM
            </span>
            <span className="wl-footer__badge-muted">
              ZERO MIGRATION · SITS · BANNER · MOODLE · WORKDAY
            </span>
          </div>

          {/* Trust Badges */}
          <div className="wl-footer__trust-tags">
            <span className="wl-footer__trust-tag">
              <CheckCircle2 size={13} color="#10b981" /> SOC-2 Type II
            </span>
            <span className="wl-footer__trust-tag">
              <CheckCircle2 size={13} color="#10b981" /> UK &amp; EU GDPR
            </span>
            <span className="wl-footer__trust-tag">
              <CheckCircle2 size={13} color="#10b981" /> FERPA Compliant
            </span>
            <span className="wl-footer__trust-tag">
              <CheckCircle2 size={13} color="#10b981" /> ISO 27001 Aligned
            </span>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Quick Legal Links */}
        <div className="wl-footer__bottom">
          <div className="wl-footer__copyright">
            © {new Date().getFullYear()} WorldLynk Technologies Ltd. All rights reserved. The trusted global AI operating platform for higher education.
          </div>

          <div className="wl-footer__legal-links">
            <Link to="/privacy" className="wl-footer__legal-link">Privacy Policy</Link>
            <Link to="/terms" className="wl-footer__legal-link">Terms</Link>
            <Link to="/security" className="wl-footer__legal-link">Security</Link>
            <Link to="/accessibility" className="wl-footer__legal-link">Accessibility</Link>
            <Link to="/contact" className="wl-footer__legal-link">Contact</Link>
          </div>
        </div>
      </div>

      <div className="wl-footer__watermark-bg" aria-hidden="true">
        WORLDLYNK
      </div>
    </footer>
  );
}
