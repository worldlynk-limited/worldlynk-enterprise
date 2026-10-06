import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, ArrowRight, ExternalLink, ShieldCheck, 
  Sparkles, Compass, Users, CheckCircle2, ChevronRight, Lock
} from 'lucide-react';

import LifecycleOverviewSection from '../components/funnel/LifecycleOverviewSection';
import InteractiveFunnelSection from '../components/funnel/InteractiveFunnelSection';
import MeetStudentStorySection from '../components/funnel/MeetStudentStorySection';
import ContextLayerNetworkSection from '../components/funnel/ContextLayerNetworkSection';

const COMPASS_BACKEND_URL = "https://uniportal-uq1p.onrender.com";
const STUDENT_PLATFORM_URL = "https://worldlynk.co.uk";

export default function StudentJourneyPage() {
  return (
    <div style={{ backgroundColor: 'var(--wl-dark)', color: 'white', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* HERO SECTION: THE CONNECTED STUDENT JOURNEY */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden', paddingTop: '130px', paddingBottom: '70px', backgroundColor: '#090a0f' }}>
        <div className="main-container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '920px' }}>
          
          <div className="mono-label" style={{ color: 'var(--wl-accent)', marginBottom: '1.25rem' }}>
            THE COMPLETE STUDENT EXPERIENCE
          </div>

          <h1 className="headline-xl" style={{ marginBottom: '1.5rem', lineHeight: 1.08 }}>
            From first inquiry to graduation day.
          </h1>

          <p className="body-lg text-secondary" style={{ marginBottom: '2rem', maxWidth: '780px', margin: '0 auto 2rem', lineHeight: 1.65 }}>
            Most university software loses context the moment an applicant becomes an enrolled student. 
            WorldLynk connects the entire journey — admissions, verified housing, daily campus life, well-being check-ins, and graduate careers — so students thrive and staff stay informed.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <Link to="/demo" className="btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
              Book an Institutional Walkthrough
            </Link>
            <a 
              href="#interactive-funnel" 
              className="btn-secondary" 
              style={{ padding: '0.9rem 1.8rem', fontSize: '0.95rem', backgroundColor: '#13131c', border: '1px solid #28293d', color: '#ffffff' }}
            >
              Explore the 11 Funnel Stages
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '12px',
              padding: '1.25rem',
              borderRadius: '10px',
              backgroundColor: '#12131c',
              border: '1px solid #222332'
            }}
          >
            <div>
              <div className="mono-sm text-muted">LIFECYCLE COVERAGE</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ff6b00' }}>11 Connected Stages</div>
            </div>
            <div>
              <div className="mono-sm text-muted">STUDENT CONTEXT DROPOFF</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#10b981' }}>0% (Continuous Record)</div>
            </div>
            <div>
              <div className="mono-sm text-muted">DATA PRIVACY STANDARDS</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#38bdf8' }}>UK GDPR &amp; FERPA Safe</div>
            </div>
            <div>
              <div className="mono-sm text-muted">EXISTING SYSTEM REPLACEMENT</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>0 (Non-Invasive)</div>
            </div>
          </div>

        </div>
      </section>

      {/* LIFECYCLE HORIZONS OVERVIEW */}
      <LifecycleOverviewSection />

      {/* INTERACTIVE 11-STAGE FUNNEL */}
      <InteractiveFunnelSection />

      {/* STUDENT JOURNEY CASE STUDY (GLOBAL APPLICANT LIFECYCLE) */}
      <MeetStudentStorySection />


      {/* CONTEXT LAYER ARCHITECTURE & NETWORK FLOW */}
      <ContextLayerNetworkSection />

      {/* PRODUCT SURFACES & CALL TO ACTION */}
      <section className="section" style={{ backgroundColor: '#09090c', borderTop: '1px solid #1a1a24', paddingBottom: '7rem' }}>
        <div className="main-container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          
          <div className="mono-label" style={{ color: 'var(--wl-accent)', marginBottom: '1rem' }}>
            CONNECT YOUR CAMPUS TODAY
          </div>

          <h2 className="headline-lg" style={{ marginBottom: '1rem' }}>
            Experience the Connected Campus Operating Layer
          </h2>

          <p className="body-md text-secondary" style={{ maxWidth: '620px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
            Keep your existing SIS, CRM, and LMS untouched while giving staff and students the AI context layer they deserve.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <Link to="/demo" className="btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
              Book an Institutional Demo
            </Link>
            <a 
              href={COMPASS_BACKEND_URL} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-secondary" 
              style={{ padding: '0.9rem 1.6rem', fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(255, 107, 0, 0.35)', background: 'rgba(255, 107, 0, 0.08)' }}
            >
              <span style={{ color: '#ff8833', fontWeight: 600 }}>Explore Compass Staff Portal</span>
              <ExternalLink size={15} color="#ff8833" />
            </a>
            <a 
              href={STUDENT_PLATFORM_URL} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-secondary" 
              style={{ padding: '0.9rem 1.6rem', fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(56, 189, 248, 0.35)', background: 'rgba(56, 189, 248, 0.08)' }}
            >
              <span style={{ color: '#38bdf8', fontWeight: 600 }}>Launch Student App</span>
              <ExternalLink size={15} color="#38bdf8" />
            </a>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', opacity: 0.75 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={16} style={{ color: '#10b981' }} />
              <span className="mono-sm text-secondary">Zero Database Migrations</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Lock size={16} style={{ color: '#10b981' }} />
              <span className="mono-sm text-secondary">UK GDPR &amp; FERPA Certified</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} style={{ color: '#10b981' }} />
              <span className="mono-sm text-secondary">Staff Always in Control</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
