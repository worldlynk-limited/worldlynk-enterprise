import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const COMPASS_BACKEND_URL = "https://uniportal-uq1p.onrender.com";
const STUDENT_PLATFORM_URL = "https://worldlynk.co.uk";

export default function GlobalFooter() {
  return (
    <footer className="wl-footer">
      <div className="main-container wl-footer__inner">
        <div className="wl-footer__grid">
          {/* Column 1: Brand & Enterprise Overview */}
          <div className="wl-footer__brand-col">
            <Link to="/" className="wl-footer__brand-logo" aria-label="WorldLynk Home">
              <span className="wl-footer__brand-text">WorldLynk</span>
              <span className="wl-footer__brand-dot" />
            </Link>

            <p className="wl-footer__brand-desc">
              The autonomous campus operating system for higher education. Unifying institutional SIS, LMS, and attendance data into proactive, real-time student support without migrations.
            </p>

            <div className="wl-footer__status-line">
              <span className="wl-footer__status-dot" />
              <span>All Systems Operational</span>
              <span className="wl-footer__sep">·</span>
              <span>London, UK</span>
            </div>
          </div>

          {/* Column 2: Platform */}
          <div className="wl-footer__col">
            <h3 className="wl-footer__col-title">Platform</h3>
            <ul className="wl-footer__list">
              <li><Link to="/platform">Platform Architecture</Link></li>
              <li><Link to="/platform#nova">Specialist AI Assistants</Link></li>
              <li><Link to="/staff-os">Compass Staff Portal</Link></li>
              <li><Link to="/student-os">Student Mobile App</Link></li>
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
            <h3 className="wl-footer__col-title">Trust &amp; Governance</h3>
            <ul className="wl-footer__list">
              <li><Link to="/trust">Trust &amp; Procurement Hub</Link></li>
              <li><Link to="/privacy">UK GDPR Privacy Policy</Link></li>
              <li><Link to="/accessibility">Accessibility Statement (VPAT)</Link></li>
              <li><Link to="/terms">Master Services Agreement</Link></li>
              <li><Link to="/contact">Contact Campus Desks</Link></li>
              <li><Link to="/demo">Book Institutional Demo</Link></li>
            </ul>
          </div>
        </div>

        {/* Compliance Row: Clean typography, no pills */}
        <div className="wl-footer__compliance-row">
          <div className="wl-footer__compliance-label">
            ENTERPRISE ARCHITECTURE
          </div>
          <div className="wl-footer__compliance-tags">
            <span className="wl-footer__compliance-item">
              <CheckCircle2 size={13} style={{ color: '#10b981' }} /> SOC-2 Type II
            </span>
            <span className="wl-footer__compliance-item">
              <CheckCircle2 size={13} style={{ color: '#10b981' }} /> UK &amp; EU GDPR Ready
            </span>
            <span className="wl-footer__compliance-item">
              <CheckCircle2 size={13} style={{ color: '#10b981' }} /> FERPA Compliant
            </span>
            <span className="wl-footer__compliance-item">
              <CheckCircle2 size={13} style={{ color: '#10b981' }} /> ISO 27001 Aligned
            </span>
            <span className="wl-footer__compliance-item">
              <CheckCircle2 size={13} style={{ color: '#10b981' }} /> Zero Migration Required
            </span>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Clean Legal Links */}
        <div className="wl-footer__bottom">
          <div className="wl-footer__copyright">
            © {new Date().getFullYear()} WorldLynk Technologies Ltd. All rights reserved.
          </div>

          <div className="wl-footer__legal-links">
            <Link to="/privacy" className="wl-footer__legal-link">Privacy Policy</Link>
            <Link to="/terms" className="wl-footer__legal-link">Terms</Link>
            <Link to="/trust" className="wl-footer__legal-link">Trust &amp; Security</Link>
            <Link to="/accessibility" className="wl-footer__legal-link">Accessibility</Link>
            <Link to="/contact" className="wl-footer__legal-link">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
