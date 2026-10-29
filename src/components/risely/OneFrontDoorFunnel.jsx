import React, { useState } from 'react';
import { 
  ArrowRight, Mic, Sparkles, 
  GraduationCap, Wallet, BookOpen, 
  MessageSquare, Home, User
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Exact 5-row structured pills matching the reference design (18 total)
const PILL_ROWS = [
  [
    { id: 'admissions', name: 'Admissions', color: '#38bdf8' },
    { id: 'finaid', name: 'Financial Aid', color: '#f59e0b' },
    { id: 'advising', name: 'Advising', color: '#818cf8' },
    { id: 'registrar', name: 'Registrar', color: '#10b981' }
  ],
  [
    { id: 'bursar', name: 'Bursar', color: '#eab308' },
    { id: 'retention', name: 'Retention', color: '#f43f5e' },
    { id: 'career', name: 'Career', color: '#c084fc' },
    { id: 'advancement', name: 'Advancement', color: '#818cf8' }
  ],
  [
    { id: 'marketing', name: 'Marketing', color: '#f97316' },
    { id: 'research', name: 'Research', color: '#38bdf8' },
    { id: 'compliance', name: 'Compliance', color: '#6366f1' }
  ],
  [
    { id: 'cont_ed', name: 'Continuing Ed', color: '#2dd4bf' },
    { id: 'housing', name: 'Housing', color: '#f43f5e' },
    { id: 'it_help', name: 'IT Help Desk', color: '#38bdf8' }
  ],
  [
    { id: 'conduct', name: 'Student Conduct', color: '#a855f7' },
    { id: 'title_ix', name: 'Title IX', color: '#60a5fa' },
    { id: 'library', name: 'Library', color: '#eab308' },
    { id: 'wellness', name: 'Wellness', color: '#ec4899' }
  ]
];

const ALL_DEPARTMENTS = PILL_ROWS.flat();

export default function OneFrontDoorFunnel() {
  const [hoveredDept, setHoveredDept] = useState(null);

  return (
    <section 
      className="section section-stone" 
      style={{ 
        backgroundColor: 'var(--wl-light)', 
        color: '#0c0c0f', 
        position: 'relative', 
        overflow: 'hidden', 
        padding: '5.5rem 0',
        borderTop: '1px solid #d4d0ca',
        borderBottom: '1px solid #d4d0ca'
      }}
    >
      <div className="main-container">
        
        {/* Section Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '3rem' }}>
          <div>
            <div className="mono-label" style={{ color: 'var(--wl-accent)', marginBottom: '0.75rem', letterSpacing: '0.12em', fontWeight: 700 }}>
              + STUDENT OPERATING EXPERIENCE
            </div>
            <h2 className="headline-lg" style={{ fontFamily: 'var(--wl-font-sans)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1, color: '#0c0c0f' }}>
              The student sees all of it as{' '}
              <span className="fd-gradient-text">
                one front door
              </span>.
            </h2>
          </div>

          {/* <div className="fd-header-links" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
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
                color: '#52525b',
                fontSize: '1rem',
                textDecoration: 'none'
              }}
            >
              <span>Explore Student OS</span>
              <ArrowRight size={16} />
            </Link>
          </div> */}
        </div>

        {/* Dual Layout: Funnel Diagram (Left) + Phone Simulator (Right) */}
        <div className="fd-split-grid">
          
          {/* LEFT: THE FIBER OPTIC FUNNEL */}
          <div className="fd-funnel-col">
            
            {/* Department 5-Row Clean Pill Funnel (Exact from Reference) */}
            <div className="fd-dept-rows-wrap">
              {PILL_ROWS.map((row, rowIdx) => (
                <div key={rowIdx} className="fd-dept-row">
                  {row.map(dept => {
                    const isHovered = hoveredDept === dept.id;
                    return (
                      <span 
                        key={dept.id} 
                        onMouseEnter={() => setHoveredDept(dept.id)}
                        onMouseLeave={() => setHoveredDept(null)}
                        className="fd-dept-pill"
                        style={{ 
                          borderColor: isHovered ? dept.color : 'rgba(0, 0, 0, 0.08)',
                          backgroundColor: '#ffffff',
                          transform: isHovered ? 'translateY(-2px) scale(1.04)' : 'none',
                          boxShadow: isHovered 
                            ? `0 10px 24px -4px ${dept.color}45, 0 2px 6px rgba(0,0,0,0.06)` 
                            : '0 2px 8px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.04)'
                        }}
                      >
                        <span className="fd-pill-dot" style={{ backgroundColor: dept.color }} />
                        <span className="fd-pill-text">{dept.name}</span>
                      </span>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* SVG Converging Fiber Streams */}
            <div className="fd-svg-stream-wrap">
              <svg 
                viewBox="0 0 400 128" 
                preserveAspectRatio="none" 
                className="fd-stream-svg"
                aria-hidden="true"
              >
                {ALL_DEPARTMENTS.map((dept, idx) => {
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
                  <svg viewBox="0 0 33 35" width="20" height="20" fill="white">
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

          {/* RIGHT: CLEAN REALISTIC IPHONE SIMULATOR (Chat Content from Reference) */}
          <div className="fd-phone-col">
            
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
                    <span style={{ fontSize: '11px', letterSpacing: '1px' }}>●●●●</span>
                    <span style={{ fontSize: '10px', marginLeft: '6px' }}>100%</span>
                  </div>
                </div>

                {/* App Brand Header */}
                <div className="iphone-app-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: 14, height: 14, borderRadius: '4px', background: 'linear-gradient(135deg, #ff6b00, #ea580c)', display: 'grid', placeItems: 'center' }}>
                      <Sparkles size={8} color="#fff" />
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#141531' }}>worldlynk</span>
                  </div>
                  <span style={{ fontSize: '10.5px', color: '#ff6b00', fontWeight: 600 }}>Active Campus ID</span>
                </div>

                {/* Main Screen Area: Direct Interactive Chat (Exact from Reference) */}
                <div className="iphone-chat-body">
                  
                  {/* Agent Header Identity */}
                  <div className="iphone-agent-header">
                    <div className="iphone-agent-avatar">
                      <Sparkles size={14} color="#ffffff" />
                    </div>
                    <div>
                      <div className="iphone-agent-title">Ask</div>
                      <div className="iphone-agent-subtitle">every office answers here</div>
                    </div>
                  </div>

                  {/* Spacer to push conversation to natural view */}
                  <div style={{ flex: 1 }} />

                  {/* Conversation Message Stack */}
                  <div className="iphone-messages-stack">
                    
                    {/* User Question Bubble */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <div className="iphone-user-bubble">
                        Can I drop chem this semester? It is a lot right now.
                      </div>
                    </div>

                    {/* AI Advisor Response 1 */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                      <div className="iphone-ai-bubble">
                        You can. One thing worth knowing first: dropping CHM-151 puts you at 11 credits, which is under full-time.
                      </div>
                      <div className="iphone-msg-source">
                        read from your record: current schedule
                      </div>
                    </div>

                    {/* AI Advisor Response 2 */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                      <div className="iphone-ai-bubble">
                        One option keeps you full-time: swap CHM-151 for a 3-credit elective on your plan. I can send it to your advisor.
                      </div>
                      <div className="iphone-msg-source">
                        drafted for your advisor to review
                      </div>
                    </div>

                    {/* Routed Status Pill Tag */}
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4px' }}>
                      <span className="iphone-routed-tag">
                        <span className="iphone-routed-dot" />
                        <span>Routed to Advising</span>
                      </span>
                    </div>

                  </div>

                  {/* Bottom Input Search Pill */}
                  <div className="iphone-bottom-search">
                    <div className="iphone-search-dot">
                      <Sparkles size={9} color="#ffffff" />
                    </div>
                    <span style={{ fontSize: '12px', color: '#94a3b8', flex: 1 }}>Ask anything, any office</span>
                    <div className="iphone-mic-bubble">
                      <Mic size={12} color="#ffffff" />
                    </div>
                  </div>

                </div>

                {/* Bottom Navigation TabBar (Exact 5 Tabs from Reference) */}
                <div className="iphone-tab-bar">
                  <div className="iphone-tab-item">
                    <Home size={16} />
                    <span>Home</span>
                  </div>
                  <div className="iphone-tab-item">
                    <GraduationCap size={16} />
                    <span>Plan</span>
                  </div>
                  <div className="iphone-tab-item iphone-tab-item--active">
                    <MessageSquare size={16} />
                    <span>Ask</span>
                  </div>
                  <div className="iphone-tab-item">
                    <Wallet size={16} />
                    <span>Money</span>
                  </div>
                  <div className="iphone-tab-item">
                    <User size={16} />
                    <span>Me</span>
                  </div>
                </div>

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

        /* 5-Row Department Funnel Pills Layout */
        .fd-dept-rows-wrap {
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: center;
          max-width: 580px;
          margin: 0 auto;
        }

        .fd-dept-row {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .fd-dept-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          border-radius: 9999px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          background: #ffffff;
          padding: 6px 14px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.04);
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .fd-dept-pill:hover {
          transform: translateY(-2px) scale(1.04);
          background: #ffffff;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .fd-pill-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .fd-pill-text {
          font-size: 13px;
          font-weight: 600;
          color: #1e293b;
          white-space: nowrap;
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
          background: radial-gradient(circle, rgba(255, 107, 0, 0.45), transparent 70%);
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
          background: linear-gradient(135deg, #ff6b00, #ea580c);
          color: #ffffff;
          padding: 12px 28px;
          border-radius: 999px;
          box-shadow: 0 16px 36px rgba(255, 107, 0, 0.38);
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
          font-size: 15px;
          color: #52525b;
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

        .iphone-chassis {
          position: relative;
          width: 360px;
          max-width: 100%;
          border-radius: 48px;
          background: #09090b;
          padding: 10px;
          border: 1px solid rgba(0, 0, 0, 0.14);
          box-shadow: 0 35px 80px -15px rgba(0, 0, 0, 0.28), 0 10px 30px -5px rgba(0, 0, 0, 0.12);
        }
          border: 1px solid rgba(255, 255, 255, 0.12);
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
          background: #f8fafc;
          height: 640px;
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
          background: #ffffff;
          flex-shrink: 0;
        }

        /* Chat Body */
        .iphone-chat-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 14px 16px 10px;
          overflow: hidden;
          background: #f8fafc;
        }

        .iphone-agent-header {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .iphone-agent-avatar {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff6b00, #ea580c);
          display: grid;
          place-items: center;
          box-shadow: 0 4px 12px rgba(255, 107, 0, 0.3);
        }

        .iphone-agent-title {
          font-size: 15px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.1;
        }

        .iphone-agent-subtitle {
          font-size: 11px;
          color: #64748b;
          margin-top: 1px;
        }

        .iphone-messages-stack {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 14px;
        }

        .iphone-user-bubble {
          max-width: 82%;
          border-radius: 18px 18px 4px 18px;
          padding: 10px 14px;
          font-size: 12.5px;
          color: #ffffff;
          background: linear-gradient(135deg, #ff6b00, #ea580c);
          line-height: 1.4;
          box-shadow: 0 6px 18px rgba(255, 107, 0, 0.28);
        }

        .iphone-ai-bubble {
          max-width: 90%;
          border-radius: 18px 18px 18px 4px;
          padding: 11px 14px;
          font-size: 12px;
          color: #1e293b;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          line-height: 1.45;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
        }

        .iphone-msg-source {
          font-size: 10px;
          color: #94a3b8;
          padding-left: 8px;
          margin-top: 3px;
        }

        .iphone-routed-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border-radius: 9999px;
          padding: 4px 14px;
          font-size: 11px;
          font-weight: 700;
          color: #ff6b00;
          background: rgba(255, 107, 0, 0.1);
          border: 1px solid rgba(255, 107, 0, 0.25);
        }

        .iphone-routed-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #ff6b00;
        }

        .iphone-bottom-search {
          border-radius: 9999px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 5px 6px 5px 12px;
        }

        .iphone-search-dot {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff6b00, #ea580c);
          display: grid;
          place-items: center;
        }

        .iphone-mic-bubble {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff6b00, #ea580c);
          display: grid;
          place-items: center;
        }

        /* 5-Item Tab Bar */
        .iphone-tab-bar {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          padding: 8px 6px 12px;
          border-top: 1px solid rgba(20, 21, 49, 0.06);
          background: #ffffff;
          flex-shrink: 0;
        }

        .iphone-tab-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
          color: #94a3b8;
          font-size: 10px;
          font-weight: 500;
        }

        .iphone-tab-item--active {
          color: #ff6b00;
          font-weight: 700;
        }

        /* Responsive Breakpoint */
        @media (max-width: 960px) {
          .fd-split-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }

        @media (max-width: 640px) {
          .fd-header-links {
            display: none !important;
          }
          .fd-dept-rows-wrap {
            gap: 6px !important;
            max-width: 100% !important;
          }
          .fd-dept-row {
            gap: 6px !important;
          }
          .fd-dept-pill {
            padding: 4px 10px !important;
            gap: 5px !important;
          }
          .fd-pill-text {
            font-size: 11px !important;
          }
          .fd-pill-dot {
            width: 5px !important;
            height: 5px !important;
          }
          .fd-svg-stream-wrap {
            height: 180px !important;
            margin-top: 1rem !important;
          }
          .fd-one-stop-btn {
            padding: 10px 22px !important;
          }
          .fd-btn-label {
            font-size: 15px !important;
          }
          .fd-funnel-caption {
            font-size: 13.5px !important;
            line-height: 1.5 !important;
            margin-top: 1.25rem !important;
          }
          .iphone-chassis {
            max-width: 325px !important;
            border-radius: 40px !important;
            padding: 8px !important;
          }
          .iphone-screen {
            height: 540px !important;
            border-radius: 32px !important;
          }
          .iphone-chat-body {
            padding: 10px 12px 8px !important;
          }
          .iphone-user-bubble {
            font-size: 11.5px !important;
            padding: 8px 12px !important;
          }
          .iphone-ai-bubble {
            font-size: 11.5px !important;
            padding: 9px 12px !important;
          }
          .iphone-tab-bar {
            padding: 6px 4px 10px !important;
          }
        }
      `}</style>
    </section>
  );
}
