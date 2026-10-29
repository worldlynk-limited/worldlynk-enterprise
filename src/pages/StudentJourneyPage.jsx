import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, ArrowRight, ShieldCheck, 
  CheckCircle2, Lock, Sparkles
} from 'lucide-react';

import InteractiveFunnelSection from '../components/funnel/InteractiveFunnelSection';
import MeetStudentStorySection from '../components/funnel/MeetStudentStorySection';
import ContextLayerNetworkSection from '../components/funnel/ContextLayerNetworkSection';
import EnterpriseCTASection from '../components/EnterpriseCTASection';

const COMPASS_BACKEND_URL = "https://uniportal-uq1p.onrender.com";

const GridOverlay = ({ variant = 'dark' }) => (
  <div className={`wl-grid-overlay wl-grid-overlay--${variant}`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <div key={i} className="wl-grid-line" />
    ))}
  </div>
);

export default function StudentJourneyPage() {
  return (
    <div style={{ backgroundColor: '#07070a', color: 'white', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* SECTION 1: HERO (DARK - MATCHES HOMEPAGE TITLE STYLE) */}
      <section className="section hero-main-section" style={{ backgroundColor: '#07070a' }}>
        <GridOverlay variant="dark" />
        <div className="main-container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '860px', margin: '0 auto', paddingTop: '10px' }}>
          
          <h1 className="hero-main-headline">
            From first inquiry to graduation day.
          </h1>

          <p className="hero-main-subtext">
            Most university software loses context the moment an applicant converts to an enrolled student. 
            WorldLynk operates as a continuous intelligence layer across admissions, verified housing, daily campus life, and graduate careers — without database migrations.
          </p>

          <div className="hero-cta-group">
            <Link to="/demo" className="hero-cta-btn hero-cta-btn--primary">
              Book a Live Demo
            </Link>
            <a href="#interactive-funnel" className="hero-cta-btn hero-cta-btn--secondary">
              <span>Explore 11 Funnel Stages</span>
              <ArrowRight size={15} />
            </a>
          </div>

          {/* Clean Trust Row (Matches Homepage Style) */}
          <div className="hero-trust-row" style={{ marginBottom: '2.5rem' }}>
            <div className="hero-trust-badge">
              <CheckCircle2 size={14} style={{ color: '#ff6b00' }} />
              <span>11 Connected Stages</span>
            </div>
            <div className="hero-trust-badge">
              <ShieldCheck size={14} style={{ color: '#10b981' }} />
              <span>Zero Context Loss</span>
            </div>
            <div className="hero-trust-badge">
              <Lock size={14} style={{ color: '#2563eb' }} />
              <span>UK GDPR &amp; FERPA Safe</span>
            </div>
            <div className="hero-trust-badge">
              <CheckCircle2 size={14} style={{ color: '#10b981' }} />
              <span>Non-Invasive Sync</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: INTERACTIVE 11-STAGE FUNNEL (LIGHT STONE) */}
      <InteractiveFunnelSection />

      {/* SECTION 3: STUDENT JOURNEY CASE STUDY (DARK) */}
      <MeetStudentStorySection />

      {/* SECTION 4: CONTEXT LAYER ARCHITECTURE & NETWORK FLOW (LIGHT STONE) */}
      <ContextLayerNetworkSection />

      {/* SECTION 5: ENTERPRISE CALL TO ACTION (DARK) */}
      <EnterpriseCTASection 
        eyebrow="CONNECT YOUR CAMPUS TODAY"
        title="Experience the connected campus operating layer."
        description="Keep your existing SIS, CRM, and LMS untouched while giving staff and students the AI context layer they deserve. Pilot sandboxes ready in under 48 hours."
        primaryText="Schedule Campus Walkthrough"
        primaryLink="/demo"
        secondaryText="Explore Compass Staff Portal"
        secondaryLink={COMPASS_BACKEND_URL}
        secondaryIsExternal={true}
        variant="dark"
      />

    </div>
  );
}
