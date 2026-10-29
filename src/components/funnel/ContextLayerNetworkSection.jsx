import React, { useState } from 'react';
import { 
  Layers, Network, ShieldCheck, Lock, Users, Building, 
  Bot, Database, ArrowRight, ArrowDown, Check, Sparkles, 
  Compass, ExternalLink, HelpCircle, CheckCircle2, AlertTriangle, Key
} from 'lucide-react';

export default function ContextLayerNetworkSection() {
  const [activeTab, setActiveTab] = useState('network'); // 'network' | 'architecture'
  const [activeActor, setActiveActor] = useState('student');

  const architectureTiers = [
    {
      num: '01',
      title: 'ENTRY SURFACES',
      subtitle: 'Where Students, Prospects & Partners Enter',
      items: ['WorldLynk Student App', 'University Websites & Course Portals', 'Approved In-Market Consultants', 'Recruitment Campaigns', 'Ecosystem Partners', 'Campus Open Days & Events'],
      color: '#ff6b00',
      desc: 'Multiple entry surfaces capture interest without forcing users into rigid, fragmented forms.'
    },
    {
      num: '02',
      title: 'WORLDLYNK CONTEXT LAYER',
      subtitle: 'The Unified Context & Orchestration Spine',
      items: ['Identity & Consent Engine', 'Journey State Machine (11 Stages)', 'Permitted Context Store', 'Intent Scoring & Intent Signals', 'Institutional Policy Arbiter', 'Immutable Interaction Ledger'],
      color: '#2563eb',
      desc: 'Connects who the student is, what they need, and what policies apply — strictly permissioned under UK GDPR and institutional governance.'
    },
    {
      num: '03',
      title: 'AI SPECIALIST AGENT LAYER',
      subtitle: 'Context-Aware Autonomous & Assistive Agents',
      items: ['Personal Student Copilot', 'Admissions Credential Agent', 'Recruitment Prospect Agent', 'Student Support & Welfare Agent', 'Compliance & 20h Work-Cap Agent', 'Careers & CV Optimization Agent'],
      color: '#ff6b00',
      desc: 'Specialized agents that operate directly on workflows and context, drafting actions for human staff to approve.'
    },
    {
      num: '04',
      title: 'INSTITUTIONAL & ECOSYSTEM SYSTEMS',
      subtitle: 'Systems of Record Remain Untouched',
      items: ['CRM (Salesforce / HubSpot)', 'Admissions (SITS / UCAS / Banner)', 'SIS (Student Records)', 'LMS (Moodle / Canvas)', 'Attendance Hardware / Beacons', 'Accommodation Inventory', 'UKVI Compliance Portals', 'Graduate Career Boards'],
      color: '#10b981',
      desc: 'WorldLynk does not replace your university databases; it connects them non-invasively via real-time bi-directional sync.'
    },
    {
      num: '05',
      title: 'OPERATIONAL SURFACES',
      subtitle: 'Unified Dashboards for Everyone in the Ecosystem',
      items: ['Compass Staff Portal (Registry & Tutors)', 'WorldLynk Student App (iOS & Android)', 'Existing University Portals (SSO)', 'Approved Partner & Consultant Desks'],
      color: '#ff6b00',
      desc: 'Every actor interacts through the interface built specifically for their needs with role-based access control.'
    }
  ];

  return (
    <section id="context-layer-network" className="section section-stone" style={{ backgroundColor: 'var(--wl-light)', color: '#0c0c0f', borderTop: '1px solid #d4d0ca', borderBottom: '1px solid #d4d0ca', position: 'relative' }}>
      <div className="main-container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 3rem' }}>
          <div className="mono-label" style={{ color: '#ff6b00', marginBottom: '0.75rem', fontWeight: 800 }}>
            ENTERPRISE ARCHITECTURE &amp; PERMITTED NETWORK FLOW
          </div>
          <h2 className="headline-lg" style={{ marginBottom: '1rem', color: '#0c0c0f' }}>
            One Context Layer. Intelligently Connected Actors.
          </h2>
          <p className="body-lg" style={{ color: '#52525b', lineHeight: 1.6 }}>
            WorldLynk is not another isolated database or generic chatbot. It is an intelligent orchestration layer 
            that connects students, university teams, and approved partners with strict consent and policy controls.
          </p>

          {/* Tab Switcher */}
          <div style={{ display: 'inline-flex', backgroundColor: '#ded9d2', padding: '0.3rem', borderRadius: '10px', border: '1px solid #c8c2b9', marginTop: '1.75rem' }}>
            <button
              type="button"
              onClick={() => setActiveTab('network')}
              style={{
                padding: '0.65rem 1.75rem',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: activeTab === 'network' ? '#ff6b00' : 'transparent',
                color: activeTab === 'network' ? '#ffffff' : '#52525b',
                fontWeight: activeTab === 'network' ? 700 : 600,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: activeTab === 'network' ? '0 2px 6px rgba(255,107,0,0.3)' : 'none'
              }}
            >
              Consent-Governed Network Flow
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('architecture')}
              style={{
                padding: '0.65rem 1.75rem',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: activeTab === 'architecture' ? '#0c0c0f' : 'transparent',
                color: activeTab === 'architecture' ? '#ffffff' : '#52525b',
                fontWeight: activeTab === 'architecture' ? 700 : 600,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: activeTab === 'architecture' ? '0 2px 6px rgba(12,12,15,0.2)' : 'none'
              }}
            >
              5-Tier Architecture Stack
            </button>
          </div>
        </div>

        {/* VIEW 1: PERMITTED CONSENT NETWORK FLOW */}
        {activeTab === 'network' && (
          <div className="animate-fade-in">
            
            {/* Top Flow Graphic */}
            <div 
              style={{ 
                backgroundColor: '#ffffff', 
                borderRadius: '16px', 
                border: '1px solid #d8d4cd', 
                padding: '2.5rem',
                boxShadow: '0 12px 35px -10px rgba(0,0,0,0.06)',
                marginBottom: '2rem'
              }}
            >
              {/* Step 1: Student Shows Interest */}
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div 
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '8px', 
                    backgroundColor: '#f5f3ef', 
                    border: '1px solid #dcd7ce', 
                    padding: '0.6rem 1.5rem', 
                    borderRadius: '30px' 
                  }}
                >
                  <Sparkles size={16} style={{ color: '#ff6b00' }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0c0c0f' }}>
                    1. PROSPECT SHOWS INTEREST ACROSS ANY ENTRY SURFACE
                  </span>
                </div>
                <div style={{ fontSize: '0.82rem', color: '#52525b', marginTop: '0.45rem' }}>
                  Web Course Search · WhatsApp Inquiry · Campaign Landing Page · Partner Recommendation
                </div>
              </div>

              {/* Arrow Down */}
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem', color: '#ff6b00' }}>
                <ArrowDown size={22} />
              </div>

              {/* Step 2: WorldLynk Context Layer */}
              <div 
                style={{ 
                  backgroundColor: '#fbfaf8', 
                  borderRadius: '12px', 
                  border: '1px solid #ff6b0040', 
                  padding: '1.5rem',
                  maxWidth: '780px',
                  margin: '0 auto 1.5rem',
                  boxShadow: '0 8px 24px -8px rgba(255, 107, 0, 0.08)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Key size={16} style={{ color: '#ff6b00' }} />
                    <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ff6b00' }}>
                      2. WORLDLYNK CAPTURES &amp; CONNECTS PERMITTED CONTEXT
                    </span>
                  </div>
                  <span style={{ fontSize: '0.72rem', color: '#10b981', backgroundColor: 'rgba(16, 185, 129, 0.12)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 700, border: '1px solid rgba(16, 185, 129, 0.25)' }}>
                    Consent Protected
                  </span>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '0.75rem' }}>
                  {['Course Preference', 'Target University', 'Intake Cycle', 'Nationality / Market', 'Journey Stage', 'Specific Questions', 'Academic Intent'].map((tag, i) => (
                    <span key={i} style={{ fontSize: '0.75rem', padding: '0.25rem 0.65rem', borderRadius: '6px', backgroundColor: '#ffffff', color: '#18181b', border: '1px solid #dcd7ce', fontWeight: 500 }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ fontSize: '0.82rem', color: '#52525b', borderTop: '1px solid #eae6df', paddingTop: '0.65rem' }}>
                  <strong style={{ color: '#0c0c0f' }}>Orchestration Rule:</strong> WorldLynk evaluates qualification signals and decides the <em>Next Best Action</em>, strictly obeying institutional data-sharing policies.
                </div>
              </div>

              {/* Arrow Down */}
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem', color: '#ff6b00' }}>
                <ArrowDown size={22} />
              </div>

              {/* Step 3: Tri-Directional Consent Routing */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  <span className="mono-sm" style={{ color: '#52525b', fontWeight: 700 }}>
                    3. WORLDLYNK ROUTES THE APPROPRIATE SIGNAL &amp; ACTION TO THE RIGHT ACTOR:
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                  
                  {/* Actor 1: Student */}
                  <div 
                    onClick={() => setActiveActor('student')}
                    style={{
                      backgroundColor: activeActor === 'student' ? '#fbfaf8' : '#ffffff',
                      border: activeActor === 'student' ? '2px solid #2563eb' : '1px solid #dcd7ce',
                      borderRadius: '10px',
                      padding: '1.5rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      boxShadow: activeActor === 'student' ? '0 4px 15px rgba(37,99,235,0.08)' : 'none'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem' }}>
                      <div style={{ width: 34, height: 34, borderRadius: '8px', backgroundColor: 'rgba(37, 99, 235, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb' }}>
                        <Users size={17} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0c0c0f' }}>STUDENT</div>
                        <div style={{ fontSize: '0.72rem', color: '#2563eb', fontWeight: 600 }}>Personal AI Assistance</div>
                      </div>
                    </div>
                    <p style={{ fontSize: '0.82rem', color: '#52525b', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                      Receives 24/7 personal AI guidance, tailored requirement checklists, and instant answers grounded in campus policy.
                    </p>
                    <div style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 600 }}>
                      ✓ Always free &amp; autonomous
                    </div>
                  </div>

                  {/* Actor 2: University */}
                  <div 
                    onClick={() => setActiveActor('university')}
                    style={{
                      backgroundColor: activeActor === 'university' ? '#fbfaf8' : '#ffffff',
                      border: activeActor === 'university' ? '2px solid #ff6b00' : '1px solid #dcd7ce',
                      borderRadius: '10px',
                      padding: '1.5rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      boxShadow: activeActor === 'university' ? '0 4px 15px rgba(255,107,0,0.08)' : 'none'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem' }}>
                      <div style={{ width: 34, height: 34, borderRadius: '8px', backgroundColor: 'rgba(255, 107, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff6b00' }}>
                        <Building size={17} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0c0c0f' }}>UNIVERSITY</div>
                        <div style={{ fontSize: '0.72rem', color: '#ff6b00', fontWeight: 600 }}>Prospect Signal &amp; Workflow</div>
                      </div>
                    </div>
                    <p style={{ fontSize: '0.82rem', color: '#52525b', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                      Recruitment and admissions teams receive high-intent prospect signals and pre-assembled credential dossiers in Compass.
                    </p>
                    <div style={{ fontSize: '0.72rem', color: '#ff6b00', fontWeight: 600 }}>
                      ✓ Direct recruitment workflow
                    </div>
                  </div>

                  {/* Actor 3: Consultant / Partner */}
                  <div 
                    onClick={() => setActiveActor('partner')}
                    style={{
                      backgroundColor: activeActor === 'partner' ? '#fbfaf8' : '#ffffff',
                      border: activeActor === 'partner' ? '2px solid #0c0c0f' : '1px solid #dcd7ce',
                      borderRadius: '10px',
                      padding: '1.5rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      boxShadow: activeActor === 'partner' ? '0 4px 15px rgba(12,12,15,0.08)' : 'none'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem' }}>
                      <div style={{ width: 34, height: 34, borderRadius: '8px', backgroundColor: 'rgba(12, 12, 15, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0c0c0f' }}>
                        <Compass size={17} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0c0c0f' }}>CONSULTANT / PARTNER</div>
                        <div style={{ fontSize: '0.72rem', color: '#52525b', fontWeight: 600 }}>Human Help (If Requested)</div>
                      </div>
                    </div>
                    <p style={{ fontSize: '0.82rem', color: '#52525b', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                      If student explicitly requests human advisor support, relevant in-market partner is alerted with attached conversation context.
                    </p>
                    <div style={{ fontSize: '0.72rem', color: '#0c0c0f', fontWeight: 600 }}>
                      ✓ Consent-gated routing only
                    </div>
                  </div>

                </div>
              </div>

              {/* Arrow Down */}
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem', color: '#10b981' }}>
                <ArrowDown size={22} />
              </div>

              {/* Step 4: Full Lifecycle Continuity */}
              <div 
                style={{ 
                  backgroundColor: '#f5f3ef', 
                  borderRadius: '10px', 
                  border: '1px solid #dcd7ce', 
                  padding: '1.25rem 1.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#71717a', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                    4. UNBROKEN POST-ENROLMENT CONTINUITY:
                  </div>
                  <div style={{ fontSize: '0.86rem', color: '#0c0c0f', fontWeight: 600, marginTop: '2px' }}>
                    Application → Offer → Pre-Arrival → Enrolment → Student App → Welfare &amp; Attendance → Retention → Careers
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981', fontSize: '0.8rem', fontWeight: 700 }}>
                  <CheckCircle2 size={16} />
                  <span>Single Student Record Preserved</span>
                </div>
              </div>

            </div>

            {/* Privacy & Guardrails Callout */}
            <div 
              style={{ 
                backgroundColor: '#ffffff', 
                borderRadius: '12px', 
                border: '1px solid #d8d4cd', 
                padding: '1.5rem 2rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
                alignItems: 'center'
              }}
            >
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <Lock size={20} style={{ color: '#10b981', flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0c0c0f', marginBottom: '0.25rem' }}>
                    Explicit Consent &amp; Privacy Boundaries
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#52525b', lineHeight: 1.5 }}>
                    Prospects are never automatically broadcasted to third parties. Sensitive information is never exposed to consultants or partners unless authorized by the student and aligned with university policy.
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <Database size={20} style={{ color: '#2563eb', flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0c0c0f', marginBottom: '0.25rem' }}>
                    Non-Invasive Architecture
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#52525b', lineHeight: 1.5 }}>
                    WorldLynk does not force your university to replace SITS, Banner, or Salesforce. It connects people and workflows across the systems you already run.
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* VIEW 2: 5-TIER ARCHITECTURE STACK */}
        {activeTab === 'architecture' && (
          <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            {architectureTiers.map((tier) => (
              <div 
                key={tier.num}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  border: `1px solid #d8d4cd`,
                  borderLeft: `5px solid ${tier.color}`,
                  padding: '1.5rem 2rem',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.5rem',
                  alignItems: 'center',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.04)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.35rem' }}>
                    <span 
                      style={{ 
                        fontSize: '0.72rem', 
                        fontWeight: 800, 
                        fontFamily: 'var(--font-mono)', 
                        color: tier.color,
                        backgroundColor: `${tier.color}15`,
                        padding: '0.15rem 0.5rem',
                        borderRadius: '4px' 
                      }}
                    >
                      TIER {tier.num}
                    </span>
                    <span style={{ fontSize: '0.82rem', color: '#71717a', fontWeight: 600 }}>{tier.subtitle}</span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0c0c0f', marginBottom: '0.5rem' }}>
                    {tier.title}
                  </h3>

                  <p style={{ fontSize: '0.85rem', color: '#52525b', lineHeight: 1.5 }}>
                    {tier.desc}
                  </p>
                </div>

                {/* Badges / Items */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {tier.items.map((item, idx) => (
                    <span 
                      key={idx}
                      style={{
                        fontSize: '0.76rem',
                        padding: '0.35rem 0.75rem',
                        borderRadius: '6px',
                        backgroundColor: '#f5f3ef',
                        color: '#18181b',
                        border: '1px solid #e0dbd2',
                        fontWeight: 500
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Architecture Summary Callout */}
            <div 
              style={{ 
                marginTop: '1rem', 
                padding: '1.5rem 2rem', 
                backgroundColor: '#ffffff', 
                borderRadius: '10px', 
                border: '1px solid #d8d4cd',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
            >
              <div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0c0c0f' }}>
                  WorldLynk is the Orchestration Layer — Not Another Isolated Portal
                </div>
                <div style={{ fontSize: '0.82rem', color: '#52525b', marginTop: '2px' }}>
                  Staff use Compass. Students use the Student App. Your existing systems remain systems of record.
                </div>
              </div>

              <a 
                href="/integrations" 
                className="btn-primary" 
                style={{ padding: '0.65rem 1.4rem', fontSize: '0.85rem' }}
              >
                Inspect Integration Connectors <ArrowRight size={14} />
              </a>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
