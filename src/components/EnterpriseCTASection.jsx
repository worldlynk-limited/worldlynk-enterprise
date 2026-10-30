import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, Lock, ArrowRight, ExternalLink, Calendar, Sparkles } from 'lucide-react';

const COMPASS_BACKEND_URL = "https://uniportal-uq1p.onrender.com";
const STUDENT_PLATFORM_URL = "https://worldlynk.co.uk";

export default function EnterpriseCTASection({
  eyebrow = "READY TO TRANSFORM YOUR CAMPUS?",
  title = "Start your zero-migration campus deployment.",
  description = "Join leading UK and global institutions using WorldLynk to connect student records, automate early support, and keep visa compliance audit-ready — with staff approving every key action.",
  primaryText = "Book a Live Institutional Walkthrough",
  primaryLink = "/demo",
  secondaryText = "Explore Compass Staff Portal",
  secondaryLink = COMPASS_BACKEND_URL,
  secondaryIsExternal = true,
  variant = "dark"
}) {
  const isLight = variant === 'light';

  return (
    <section 
      className={`section enterprise-cta-section ${isLight ? 'section-stone' : ''}`} 
      style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        borderTop: isLight ? '1px solid #d4d0ca' : '1px solid rgba(255, 255, 255, 0.08)', 
        borderBottom: isLight ? '1px solid #d4d0ca' : 'none',
        backgroundColor: isLight ? 'var(--wl-light)' : '#090a0f', 
        color: isLight ? '#0c0c0f' : '#ffffff',
        padding: '6rem 0' 
      }}
    >
      {/* Background Radial Glow */}
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '400px',
          background: isLight 
            ? 'radial-gradient(ellipse at center, rgba(255, 107, 0, 0.15) 0%, rgba(37, 99, 235, 0.08) 50%, transparent 75%)'
            : 'radial-gradient(ellipse at center, rgba(255, 107, 0, 0.12) 0%, rgba(56, 189, 248, 0.05) 50%, transparent 75%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="main-container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '880px', margin: '0 auto' }}>
        
        {/* Eyebrow Pill */}
        <div 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            padding: '6px 14px', 
            borderRadius: '30px', 
            backgroundColor: isLight ? '#ffffff' : 'rgba(255, 107, 0, 0.1)', 
            border: isLight ? '1px solid #d4d0ca' : '1px solid rgba(255, 107, 0, 0.25)', 
            boxShadow: isLight ? '0 2px 6px rgba(0, 0, 0, 0.04)' : 'none',
            marginBottom: '1.5rem' 
          }}
        >
          <Sparkles size={14} style={{ color: 'var(--wl-accent)' }} />
          <span className="mono-label" style={{ color: 'var(--wl-accent)', fontSize: '0.72rem', letterSpacing: '0.08em', margin: 0, fontWeight: 700 }}>
            {eyebrow}
          </span>
        </div>

        {/* Title */}
        <h2 className="headline-lg" style={{ marginBottom: '1.25rem', lineHeight: 1.15, textWrap: 'balance', color: isLight ? '#0c0c0f' : '#ffffff' }}>
          {title}
        </h2>

        {/* Description */}
        <p className="body-lg" style={{ maxWidth: '680px', margin: '0 auto 2.25rem', lineHeight: 1.65, color: isLight ? '#52525b' : '#cbd5e1' }}>
          {description}
        </p>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          <Link 
            to={primaryLink} 
            className="btn-primary" 
            style={{ 
              padding: '0.95rem 2.2rem', 
              fontSize: '1rem',
              boxShadow: '0 8px 24px -6px rgba(255, 107, 0, 0.35)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Calendar size={17} />
            <span>{primaryText}</span>
            <ArrowRight size={16} />
          </Link>

          {secondaryIsExternal ? (
            <a 
              href={secondaryLink} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-secondary cta-btn-secondary" 
              style={{ 
                padding: '0.95rem 1.8rem', 
                fontSize: '0.95rem', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                border: isLight ? '1px solid #d4d0ca' : '1px solid rgba(255, 255, 255, 0.25)', 
                background: isLight ? '#ffffff' : 'rgba(255, 255, 255, 0.08)',
                color: isLight ? '#0c0c0f' : '#ffffff',
                boxShadow: isLight ? '0 2px 6px rgba(0, 0, 0, 0.04)' : 'none'
              }}
            >
              <span style={{ color: isLight ? '#0c0c0f' : '#ffffff' }}>{secondaryText}</span>
              <ExternalLink size={15} style={{ opacity: 0.85, color: isLight ? '#0c0c0f' : '#ffffff' }} />
            </a>
          ) : (
            <Link 
              to={secondaryLink} 
              className="btn-secondary cta-btn-secondary" 
              style={{ 
                padding: '0.95rem 1.8rem', 
                fontSize: '0.95rem', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                border: isLight ? '1px solid #d4d0ca' : '1px solid rgba(255, 255, 255, 0.25)', 
                background: isLight ? '#ffffff' : 'rgba(255, 255, 255, 0.08)',
                color: isLight ? '#0c0c0f' : '#ffffff',
                boxShadow: isLight ? '0 2px 6px rgba(0, 0, 0, 0.04)' : 'none'
              }}
            >
              <span style={{ color: isLight ? '#0c0c0f' : '#ffffff' }}>{secondaryText}</span>
              <ArrowRight size={15} style={{ color: isLight ? '#0c0c0f' : '#ffffff' }} />
            </Link>
          )}
        </div>

        {/* Enterprise Trust Grid */}
        {/* <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '1.75rem', 
            flexWrap: 'wrap', 
            paddingTop: '1.5rem', 
            borderTop: '1px solid rgba(255, 255, 255, 0.08)' 
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#a1a1aa', fontSize: '0.8rem' }}>
            <ShieldCheck size={16} style={{ color: '#10b981' }} />
            <span>SOC 2 Type II Certified</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#a1a1aa', fontSize: '0.8rem' }}>
            <Lock size={16} style={{ color: '#38bdf8' }} />
            <span>UK GDPR &amp; FERPA Safe</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#a1a1aa', fontSize: '0.8rem' }}>
            <CheckCircle2 size={16} style={{ color: '#ff6b00' }} />
            <span>Zero Database Migrations</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#a1a1aa', fontSize: '0.8rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block' }} />
            <span>99.95% Enterprise SLA</span>
          </div>
        </div> */}

      </div>
    </section>
  );
}
