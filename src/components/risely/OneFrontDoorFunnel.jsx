import React, { useState } from 'react';
import { 
  ArrowRight, Check, ChevronRight, Mic, Sparkles, 
  GraduationCap, Briefcase, Wallet, BookOpen, Compass, 
  HeartPulse, ShieldCheck, Clock, CheckCircle2, MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DEPARTMENTS = [
  { id: 'admissions', name: 'Admissions', color: '#ff8f3d' },
  { id: 'finaid', name: 'Financial Aid', color: '#f7a13a' },
  { id: 'advising', name: 'Advising', color: '#fb923c' },
  { id: 'registrar', name: 'Registrar', color: '#3ecf8e' },
  { id: 'bursar', name: 'Bursar', color: '#e6c33a' },
  { id: 'retention', name: 'Retention', color: '#ea580c' },
  { id: 'career', name: 'Career', color: '#f97316' },
  { id: 'advancement', name: 'Advancement', color: '#f59e0b' },
  { id: 'marketing', name: 'Marketing', color: '#ef8f4a' },
  { id: 'research', name: 'Research', color: '#5fc7e6' },
  { id: 'compliance', name: 'Compliance', color: '#fdba74' },
  { id: 'cont_ed', name: 'Continuing Ed', color: '#4bd0b0' },
  { id: 'housing', name: 'Housing', color: '#ff6b00' },
  { id: 'it_help', name: 'IT Help Desk', color: '#7cc6ff' },
  { id: 'conduct', name: 'Student Conduct', color: '#fb923c' },
  { id: 'title_ix', name: 'Title IX', color: '#ea580c' },
  { id: 'library', name: 'Library', color: '#e0b93a' },
  { id: 'wellness', name: 'Wellness', color: '#ff8f3d' }
];

export default function OneFrontDoorFunnel() {
  const [activeScreen, setActiveScreen] = useState('welcome'); // 'welcome' | 'plan' | 'chat'
  const [hoveredDept, setHoveredDept] = useState(null);

  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden', padding: '5.5rem 0' }}>
      <div className="main-container">
        
        {/* Section Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <div>
            <div className="mono-label" style={{ color: 'var(--wl-accent)', marginBottom: '0.75rem', letterSpacing: '0.12em' }}>
              STUDENT OPERATING EXPERIENCE
            </div>
            <h2 className="headline-lg" style={{ fontFamily: 'var(--wl-font-sans)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              The student sees all of it as{' '}
              <span className="fd-gradient-text">
                one front door
              </span>.
            </h2>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <Link 
              to="/student-os" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.4rem', 
                fontWeight: 700, 
                color: '#ff6b00',
                fontSize: '1rem',
                textDecoration: 'none'
              }}
            >
              <span>See One-Stop</span>
              <ArrowRight size={16} />
            </Link>
            <Link 
              to="/student-os" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.4rem', 
                fontWeight: 600, 
                color: '#9ca3af',
                fontSize: '1rem',
                textDecoration: 'none'
              }}
            >
              <span>Explore Student OS</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Dual Layout: Funnel Diagram (Left) + Phone Simulator (Right) */}
        <div className="fd-split-grid">
          
          {/* LEFT: THE FIBER OPTIC FUNNEL */}
          <div className="fd-funnel-col">
            
            {/* Department Tags Cloud */}
            <div className="fd-dept-tags-wrap">
              {DEPARTMENTS.map(dept => {
                const isHovered = hoveredDept === dept.id;
                return (
                  <span 
                    key={dept.id} 
                    onMouseEnter={() => setHoveredDept(dept.id)}
                    onMouseLeave={() => setHoveredDept(null)}
                    className="fd-dept-pill"
                    style={{ 
                      borderColor: `${dept.color}55`,
                      transform: isHovered ? 'scale(1.05)' : 'none',
                      backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.03)'
                    }}
                  >
                    <span className="fd-pill-dot" style={{ backgroundColor: dept.color }} />
                    <span className="fd-pill-text">{dept.name}</span>
                  </span>
                );
              })}
            </div>

            {/* SVG Converging Fiber Streams */}
            <div className="fd-svg-stream-wrap">
              <svg 
                viewBox="0 0 400 128" 
                preserveAspectRatio="none" 
                className="fd-stream-svg"
                aria-hidden="true"
              >
                {DEPARTMENTS.map((dept, idx) => {
                  const startX = 11 + idx * 22.2;
                  const isHighlighted = !hoveredDept || hoveredDept === dept.id;
                  return (
                    <g key={dept.id} opacity={isHighlighted ? 1 : 0.25} style={{ transition: 'opacity 0.3s' }}>
                      {/* Background Soft Track */}
                      <path 
                        d={`M ${startX} 2 C ${startX} 72, 200 46, 200 116`}
                        fill="none" 
                        stroke={dept.color} 
                        strokeOpacity="0.22" 
                        strokeWidth="1" 
                        vectorEffect="non-scaling-stroke" 
                      />
                      {/* Animated Flowing Optical Pulse */}
                      <path 
                        d={`M ${startX} 2 C ${startX} 72, 200 46, 200 116`}
                        fill="none" 
                        stroke={dept.color} 
                        strokeOpacity="0.9" 
                        strokeWidth="1.6" 
                        strokeDasharray="4 22" 
                        strokeLinecap="round" 
                        vectorEffect="non-scaling-stroke"
                        className="fd-flow-anim"
                        style={{ animationDelay: `${(idx * 0.1) % 1.6}s` }}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Glowing Focal Point: ONE-STOP Portal Button */}
              <div className="fd-portal-anchor">
                <div className="fd-portal-glow" />
                <div className="fd-one-stop-btn">
                  <svg viewBox="0 0 33 35" width="22" height="22" fill="white">
                    <path d="M 7.362 9.962 L 12.989 9.962 C 17.928 1.772 25.619 1.459 30.245 2.334 C 30.995 2.459 31.558 3.022 31.683 3.772 C 32.559 8.399 32.246 16.089 24.055 21.029 L 24.055 26.655 C 24.055 28.218 23.18 29.719 21.805 30.532 L 16.303 33.783 C 15.803 34.033 15.24 34.096 14.802 33.783 C 14.302 33.533 14.052 33.033 14.052 32.47 L 14.052 25.343 C 14.052 23.904 13.489 22.529 12.489 21.529 C 11.489 20.528 10.113 19.966 8.675 19.966 L 1.547 19.966 C 0.985 19.966 0.485 19.715 0.234 19.215 C -0.078 18.778 -0.078 18.215 0.234 17.715 L 3.486 12.213 C 4.298 10.837 5.799 9.962 7.362 9.962 Z" />
                    <circle cx="24" cy="10" r="3" fill="#ffffff" />
                  </svg>
                  <span className="fd-btn-label">One-Stop</span>
                </div>
              </div>
            </div>

            {/* Bottom Explanatory Caption */}
            <p className="fd-funnel-caption">
              Every office on campus stands behind one conversation. The record does the routing, and a person approves what matters.
            </p>
          </div>

          {/* RIGHT: INTERACTIVE REALISTIC IPHONE 16 SIMULATOR */}
          <div className="fd-phone-col">
            
            {/* Simulator Screen Selector Pill Tabs */}
            <div className="fd-screen-switcher">
              <button 
                type="button" 
                onClick={() => setActiveScreen('welcome')}
                className={`fd-switch-tab ${activeScreen === 'welcome' ? 'fd-switch-tab--active' : ''}`}
              >
                Today
              </button>
              <button 
                type="button" 
                onClick={() => setActiveScreen('plan')}
                className={`fd-switch-tab ${activeScreen === 'plan' ? 'fd-switch-tab--active' : ''}`}
              >
                Degree Plan
              </button>
              <button 
                type="button" 
                onClick={() => setActiveScreen('chat')}
                className={`fd-switch-tab ${activeScreen === 'chat' ? 'fd-switch-tab--active' : ''}`}
              >
                Ask One-Stop
              </button>
            </div>

            {/* iPhone Chassis */}
            <div className="iphone-chassis">
              {/* Dynamic Island Notch */}
              <div className="iphone-island" />

              {/* Screen Bezel & Container */}
              <div className="iphone-screen">
                
                {/* Status Bar */}
                <div className="iphone-status-bar">
                  <span className="iphone-time">9:41</span>
                  <div className="iphone-status-icons">
                    <span className="signal-bars">●●●●</span>
                    <span className="battery-icon">100%</span>
                  </div>
                </div>

                {/* App Brand Header */}
                <div className="iphone-app-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: 14, height: 14, borderRadius: '4px', background: 'linear-gradient(135deg, #ff6b00, #f97316)', display: 'grid', placeItems: 'center' }}>
                      <Sparkles size={8} color="#fff" />
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#141531' }}>worldlynk</span>
                  </div>
                  <span style={{ fontSize: '11px', color: '#ea580c', fontWeight: 600 }}>Active Campus ID</span>
                </div>

                {/* SCREEN 1: WELCOME / DASHBOARD */}
                {activeScreen === 'welcome' && (
                  <div className="iphone-content-view">
                    
                    {/* Welcome Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '4px' }}>
                      <div>
                        <div style={{ fontSize: '20px', fontWeight: 800, color: '#141531', lineHeight: 1.15 }}>Welcome back</div>
                        <div style={{ fontSize: '11.5px', color: '#ea580c', marginTop: '3px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Sparkles size={11} />
                          <span>your team handled 4 things while you were away</span>
                        </div>
                      </div>
                      <div className="iphone-avatar-ring">MC</div>
                    </div>

                    {/* Degree Progress Ring Card */}
                    <div className="iphone-card" style={{ marginTop: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        {/* Circular SVG Gauge */}
                        <div style={{ width: 62, height: 62, position: 'relative', flexShrink: 0 }}>
                          <svg viewBox="0 0 64 64" width="62" height="62" style={{ transform: 'rotate(-90deg)' }}>
                            <circle cx="32" cy="32" r="26" fill="none" stroke="#ecebf8" strokeWidth="5.5" />
                            <circle 
                              cx="32" 
                              cy="32" 
                              r="26" 
                              fill="none" 
                              stroke="url(#progressGrad)" 
                              strokeWidth="5.5" 
                              strokeLinecap="round" 
                              strokeDasharray="140 164" 
                            />
                            <defs>
                              <linearGradient id="progressGrad" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#ff6b00" />
                                <stop offset="100%" stopColor="#f97316" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <span style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', fontSize: '14px', fontWeight: 800, color: '#141531' }}>
                            85%
                          </span>
                        </div>

                        {/* Text */}
                        <div>
                          <div style={{ fontSize: '13px', fontWeight: 700, color: '#141531' }}>Degree progress</div>
                          <div style={{ fontSize: '11.5px', color: '#5b6178', marginTop: '1px' }}>3.42 GPA · 12 credits this term</div>
                          <span className="iphone-track-tag">
                            <Check size={11} color="#0a7651" />
                            <span>on track · May 2027</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Your Team Bar */}
                    <div style={{ marginTop: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: 700, color: '#5f6479', padding: '0 2px' }}>
                        <span>YOUR TEAM</span>
                        <span style={{ color: '#ea580c' }}>every office</span>
                      </div>
                      <div className="iphone-team-row">
                        {[
                          { label: 'Advisor', icon: GraduationCap, color: '#f97316', bg: 'rgba(249, 115, 22, 0.12)' },
                          { label: 'Career', icon: Briefcase, color: '#6ab7ff', bg: 'rgba(106, 183, 255, 0.12)' },
                          { label: 'Aid', icon: Wallet, color: '#2bbcd4', bg: 'rgba(43, 188, 212, 0.12)' },
                          { label: 'Study', icon: BookOpen, color: '#ea580c', bg: 'rgba(234, 88, 12, 0.12)' },
                          { label: 'Nav', icon: Compass, color: '#f7a13a', bg: 'rgba(247, 161, 58, 0.12)' },
                          { label: 'Well', icon: HeartPulse, color: '#fb5d7a', bg: 'rgba(251, 93, 122, 0.12)' },
                        ].map(t => {
                          const Icon = t.icon;
                          return (
                            <div key={t.label} className="iphone-team-member">
                              <div className="iphone-team-bubble" style={{ backgroundColor: t.bg, borderColor: `${t.color}35` }}>
                                <Icon size={18} color={t.color} />
                                <span className="iphone-bubble-dot" />
                              </div>
                              <span style={{ fontSize: '10px', color: '#5b6178', fontWeight: 500 }}>{t.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Proactive Action Cards */}
                    <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      
                      {/* Card 1: Study Coach */}
                      <div className="iphone-card">
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <div style={{ width: 32, height: 32, borderRadius: '10px', backgroundColor: 'rgba(244, 90, 208, 0.12)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                            <BookOpen size={16} color="#cf2f9e" />
                          </div>
                          <div>
                            <div style={{ fontSize: '11px', fontWeight: 800, color: '#cf2f9e' }}>Study Coach</div>
                            <div style={{ fontSize: '12.5px', color: '#3c4258', lineHeight: 1.3, marginTop: '2px' }}>
                              HISTORY 201 slipped to 88%. A recovery plan is built around your Tuesday block.
                            </div>
                            <span 
                              onClick={() => setActiveScreen('plan')}
                              style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', marginTop: '6px', fontSize: '11.5px', fontWeight: 700, color: '#141531', cursor: 'pointer' }}
                            >
                              <span>See the plan</span>
                              <ChevronRight size={12} />
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Card 2: Financial Aid */}
                      <div className="iphone-card">
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <div style={{ width: 32, height: 32, borderRadius: '10px', backgroundColor: 'rgba(43, 188, 212, 0.12)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                            <Wallet size={16} color="#1899b4" />
                          </div>
                          <div>
                            <div style={{ fontSize: '11px', fontWeight: 800, color: '#0c7186' }}>Financial Aid</div>
                            <div style={{ fontSize: '12.5px', color: '#3c4258', lineHeight: 1.3, marginTop: '2px' }}>
                              A £247 balance blocks transcripts Friday. A payment plan is drafted.
                            </div>
                            <button 
                              type="button"
                              className="iphone-pill-btn"
                              style={{ marginTop: '6px' }}
                            >
                              Approve it
                            </button>
                          </div>
                        </div>
                      </div>

                    </div>

                    <div style={{ flex: 1 }} />

                    {/* Bottom Input: Ask anything, any office */}
                    <div 
                      onClick={() => setActiveScreen('chat')}
                      className="iphone-bottom-search"
                    >
                      <Sparkles size={13} color="#ff6b00" />
                      <span style={{ fontSize: '12.5px', color: '#6b7280', flex: 1 }}>Ask anything, any office</span>
                      <div className="iphone-mic-bubble">
                        <Mic size={12} color="#fff" />
                      </div>
                    </div>

                  </div>
                )}

                {/* SCREEN 2: DEGREE PLAN & COURSE SWAP */}
                {activeScreen === 'plan' && (
                  <div className="iphone-content-view">
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px' }}>
                      <div style={{ fontSize: '20px', fontWeight: 800, color: '#141531' }}>Degree plan</div>
                      <span className="iphone-track-tag">12 credits · full-time</span>
                    </div>

                    {/* Spring term card */}
                    <div className="iphone-card" style={{ marginTop: '10px', padding: '10px 14px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                        <span style={{ fontWeight: 600, color: '#141531' }}>Spring term</span>
                        <span style={{ fontWeight: 700, color: '#ea580c' }}>85% · May 2027</span>
                      </div>
                      <div style={{ height: 6, borderRadius: 4, backgroundColor: '#ecebf8', overflow: 'hidden', marginTop: '8px' }}>
                        <div style={{ width: '85%', height: '100%', background: 'linear-gradient(90deg, #ff6b00, #f97316)' }} />
                      </div>
                    </div>

                    {/* Courses Stack */}
                    <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                      
                      <div style={{ padding: '10px 12px', borderRadius: '12px', border: '1px solid rgba(255, 107, 0, 0.45)', backgroundColor: 'rgba(255, 107, 0, 0.08)' }}>
                        <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#141531' }}>PSY-210 · Intro Psychology</div>
                        <div style={{ fontSize: '11px', color: '#ea580c', marginTop: '2px' }}>swapped in for CHM-151 · seat held</div>
                      </div>

                      <div className="iphone-card" style={{ padding: '10px 12px' }}>
                        <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#141531' }}>GIS-240 · Intro to GIS</div>
                        <div style={{ fontSize: '11px', color: '#5b6178', marginTop: '2px' }}>the elective aimed at conservation science</div>
                      </div>

                      <div className="iphone-card" style={{ padding: '10px 12px' }}>
                        <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#141531' }}>CHM-151 · General Chemistry</div>
                        <div style={{ fontSize: '11px', color: '#5b6178', marginTop: '2px' }}>moves to fall · prerequisite chain intact</div>
                      </div>

                      <div className="iphone-card" style={{ padding: '10px 12px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <div style={{ width: 28, height: 28, borderRadius: '8px', backgroundColor: 'rgba(255, 107, 0, 0.15)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                          <GraduationCap size={15} color="#ea580c" />
                        </div>
                        <div style={{ fontSize: '11.5px', color: '#3c4258', lineHeight: 1.25 }}>
                          Your advisor sees the same plan and approves the swap.
                        </div>
                      </div>

                    </div>

                    <div style={{ flex: 1 }} />

                    {/* Action Button */}
                    <button type="button" className="iphone-wide-btn" style={{ marginBottom: '6px' }}>
                      Send to my advisor
                    </button>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontSize: '11px', color: '#5b6178', marginBottom: '8px' }}>
                      <Check size={12} color="#0a7651" />
                      <span>still graduating May 2027</span>
                    </div>

                  </div>
                )}

                {/* SCREEN 3: ASK ONE-STOP (CHAT CONVERSATION) */}
                {activeScreen === 'chat' && (
                  <div className="iphone-content-view">
                    
                    {/* Header */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
                      <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'linear-gradient(135deg, #ff6b00, #f97316)', display: 'grid', placeItems: 'center' }}>
                        <Sparkles size={14} color="#fff" />
                      </div>
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 800, color: '#141531' }}>Ask</div>
                        <div style={{ fontSize: '10.5px', color: '#5f6479' }}>every office answers here</div>
                      </div>
                    </div>

                    <div style={{ flex: 1 }} />

                    {/* Chat Bubble Sequence */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '10px' }}>
                      
                      {/* User message */}
                      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <div className="iphone-user-bubble">
                          Can I drop chem this semester? It is a lot right now.
                        </div>
                      </div>

                      {/* AI Response 1 */}
                      <div>
                        <div className="iphone-ai-bubble">
                          You can. One thing worth knowing first: dropping CHM-151 puts you at 11 credits, which is under full-time.
                        </div>
                        <div style={{ fontSize: '9.5px', color: '#6b7280', paddingLeft: '8px', marginTop: '2px' }}>
                          read from your record: current schedule
                        </div>
                      </div>

                      {/* AI Response 2 */}
                      <div>
                        <div className="iphone-ai-bubble">
                          One option keeps you full-time: swap CHM-151 for a 3-credit elective on your plan. I can send it to your advisor.
                        </div>
                        <div style={{ fontSize: '9.5px', color: '#6b7280', paddingLeft: '8px', marginTop: '2px' }}>
                          drafted for your advisor to review
                        </div>
                      </div>

                      {/* Routed Tag */}
                      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4px' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', borderRadius: '999px', padding: '3px 10px', fontSize: '10px', fontWeight: 700, color: '#ea580c', backgroundColor: 'rgba(255, 107, 0, 0.12)', border: '1px solid rgba(255, 107, 0, 0.3)' }}>
                          <span style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: '#ea580c' }} />
                          <span>Routed to Advising</span>
                        </span>
                      </div>

                    </div>

                    {/* Bottom input */}
                    <div className="iphone-bottom-search">
                      <Sparkles size={13} color="#ff6b00" />
                      <span style={{ fontSize: '12.5px', color: '#6b7280', flex: 1 }}>Ask anything, any office</span>
                      <div className="iphone-mic-bubble">
                        <Mic size={12} color="#fff" />
                      </div>
                    </div>

                  </div>
                )}

              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        .fd-gradient-text {
          background: linear-gradient(90deg, #ff6b00, #f97316);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: #ff6b00;
          font-weight: 800;
          display: inline;
        }

        .fd-split-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.85fr;
          gap: 3.5rem;
          align-items: center;
        }

        /* Tags Cloud */
        .fd-dept-tags-wrap {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          max-width: 580px;
          margin: 0 auto;
        }

        .fd-dept-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-radius: 999px;
          border: 1px solid;
          padding: 8px 14px;
          box-shadow: 0 4px 14px rgba(4, 7, 20, 0.25);
          cursor: pointer;
          transition: transform 0.2s, background-color 0.2s;
        }

        .fd-pill-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .fd-pill-text {
          font-size: 13.5px;
          font-weight: 600;
          color: #e5e7eb;
        }

        /* SVG Streams */
        .fd-svg-stream-wrap {
          position: relative;
          margin-top: 1.5rem;
          height: 280px;
        }

        .fd-stream-svg {
          width: 100%;
          height: 100%;
        }

        @keyframes fdFlowAnim {
          to { stroke-dashoffset: -26; }
        }

        .fd-flow-anim {
          animation: fdFlowAnim 1.6s linear infinite;
        }

        /* One Stop Portal Button */
        .fd-portal-anchor {
          position: absolute;
          left: 50%;
          bottom: 10px;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .fd-portal-glow {
          position: absolute;
          inset: -20px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255, 107, 0, 0.65), transparent 70%);
          filter: blur(20px);
          animation: glowPulse 3s infinite ease-in-out;
        }

        @keyframes glowPulse {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 0.95; }
        }

        .fd-one-stop-btn {
          position: relative;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #ff6b00, #f97316);
          color: #ffffff;
          padding: 12px 28px;
          border-radius: 999px;
          box-shadow: 0 20px 50px rgba(255, 107, 0, 0.45);
          cursor: pointer;
          transition: transform 0.2s;
        }

        .fd-one-stop-btn:hover {
          transform: translateY(-2px);
        }

        .fd-btn-label {
          font-size: 18px;
          font-weight: 800;
          letter-spacing: -0.01em;
        }

        .fd-funnel-caption {
          text-align: center;
          font-size: 16px;
          color: #9ca3af;
          margin-top: 1.75rem;
          max-width: 460px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.55;
        }

        /* iPhone Simulator */
        .fd-phone-col {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .fd-screen-switcher {
          display: inline-flex;
          background: #161724;
          padding: 3px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 14px;
        }

        .fd-switch-tab {
          border: none;
          background: transparent;
          color: #9ca3af;
          padding: 5px 14px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .fd-switch-tab--active {
          background: #ff6b00;
          color: #ffffff;
        }

        .iphone-chassis {
          position: relative;
          width: 360px;
          max-width: 100%;
          border-radius: 48px;
          background: #07061a;
          padding: 10px;
          border: 1px solid #3c2415;
          box-shadow: 0 50px 120px rgba(4, 7, 20, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.08);
        }

        .iphone-island {
          position: absolute;
          top: 18px;
          left: 50%;
          transform: translateX(-50%);
          width: 98px;
          height: 24px;
          background: #07061a;
          border-radius: 999px;
          z-index: 30;
        }

        .iphone-screen {
          position: relative;
          border-radius: 40px;
          overflow: hidden;
          background: #f6f7fd;
          height: 680px;
          display: flex;
          flex-direction: column;
        }

        .iphone-status-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 22px 4px;
          font-size: 11px;
          font-weight: 700;
          color: #141531;
          flex-shrink: 0;
        }

        .iphone-app-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 4px 22px 8px;
          border-bottom: 1px solid rgba(20, 21, 49, 0.06);
          flex-shrink: 0;
        }

        .iphone-content-view {
          padding: 12px 18px;
          display: flex;
          flex-direction: column;
          flex: 1;
          overflow-y: auto;
        }

        .iphone-avatar-ring {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff6b00, #f97316);
          color: #fff;
          font-size: 11.5px;
          font-weight: 800;
          display: grid;
          place-items: center;
          box-shadow: 0 6px 16px rgba(255, 107, 0, 0.35);
        }

        .iphone-card {
          border-radius: 20px;
          background: #ffffff;
          border: 1px solid #e8e9f5;
          padding: 12px 14px;
          box-shadow: 0 8px 22px rgba(24, 24, 70, 0.05);
        }

        .iphone-track-tag {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          margin-top: 6px;
          border-radius: 999px;
          padding: 2px 8px;
          font-size: 10.5px;
          font-weight: 700;
          color: #0a7651;
          background: rgba(62, 207, 142, 0.12);
          border: 1px solid rgba(62, 207, 142, 0.35);
        }

        .iphone-team-row {
          display: flex;
          justify-content: space-between;
          margin-top: 6px;
        }

        .iphone-team-member {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .iphone-team-bubble {
          position: relative;
          width: 38px;
          height: 38px;
          border-radius: 12px;
          border: 1px solid;
          display: grid;
          place-items: center;
        }

        .iphone-bubble-dot {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #3ecf8e;
          border: 1.5px solid #fff;
        }

        .iphone-pill-btn {
          border: none;
          background: linear-gradient(90deg, #ff6b00, #f97316);
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          border-radius: 999px;
          padding: 4px 12px;
          box-shadow: 0 4px 12px rgba(255, 107, 0, 0.3);
          cursor: pointer;
        }

        .iphone-wide-btn {
          width: 100%;
          border: none;
          background: linear-gradient(90deg, #ff6b00, #f97316);
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          border-radius: 999px;
          padding: 9px 0;
          text-align: center;
          box-shadow: 0 8px 22px rgba(255, 107, 0, 0.3);
          cursor: pointer;
        }

        .iphone-bottom-search {
          border-radius: 999px;
          background: #ffffff;
          border: 1px solid #e4e4f2;
          box-shadow: 0 8px 20px rgba(24, 24, 70, 0.06);
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 6px 6px 14px;
          cursor: pointer;
        }

        .iphone-mic-bubble {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff6b00, #f97316);
          display: grid;
          place-items: center;
        }

        .iphone-user-bubble {
          max-width: 85%;
          border-radius: 18px 18px 4px 18px;
          padding: 8px 12px;
          font-size: 12px;
          color: #ffffff;
          background: linear-gradient(135deg, #ff6b00, #ea580c);
          line-height: 1.35;
          box-shadow: 0 6px 18px rgba(255, 107, 0, 0.25);
        }

        .iphone-ai-bubble {
          max-width: 90%;
          border-radius: 18px 18px 18px 4px;
          padding: 8px 12px;
          font-size: 12px;
          color: #3c4258;
          background: #ffffff;
          border: 1px solid #e8e9f5;
          line-height: 1.35;
          box-shadow: 0 6px 18px rgba(24, 24, 70, 0.05);
        }

        /* Responsive Breakpoint */
        @media (max-width: 960px) {
          .fd-split-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}
