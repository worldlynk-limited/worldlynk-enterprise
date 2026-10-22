import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const INTELLIGENCE_QUERIES = [
  {
    id: 'lost_students',
    tab: 'Spring Retention',
    question: '“Why did we lose 214 students last spring?”',
    answerPrefix: 'Mostly ',
    highlight: 'one course',
    answerSuffix: ': CHM-152 ran out of seats. Holds and quiet weeks did the rest.',
    highlightColor: '#ff6b00',
    bullets: [
      'The bottleneck course outweighed everything else combined.',
      'The quiet weeks were visible in Canvas in week 5. They were read in May.'
    ],
    activeNodes: ['course_catalog', 'early_alert', 'bursar', 'retention'],
    activeEdges: ['cat-early', 'early-bursar', 'early-ret', 'bursar-ret']
  },
  {
    id: 'targets',
    tab: 'Fall Targets',
    question: '“Which programs miss their fall targets, and by how much?”',
    answerPrefix: 'Business and three design programs, ',
    highlight: '£3.1M between them.',
    answerSuffix: '',
    highlightColor: '#f7a13a',
    bullets: [
      'Business slips six points on aid-packaging speed.',
      'Two design programs lose a third to one online rival.'
    ],
    activeNodes: ['admissions', 'course_catalog', 'financial_aid', 'enrollment'],
    activeEdges: ['adm-cat', 'aid-cat', 'cat-early', 'early-enroll']
  },
  {
    id: 'compliance',
    tab: 'Visa & Hours Limit',
    question: '“Which cohorts face UKVI Tier-4 work-cap compliance risk this week?”',
    answerPrefix: '14 MSc Data Science & Finance students, ',
    highlight: 'approaching 20h/wk limit.',
    answerSuffix: '',
    highlightColor: '#38bdf8',
    bullets: [
      '9 students logged 18+ hours during term-time campus rotas.',
      'Pre-packaged supervisor notifications held in Compass for tutor sign-off.'
    ],
    activeNodes: ['early_alert', 'retention', 'enrollment', 'degree_plans'],
    activeEdges: ['early-enroll', 'early-ret', 'deg-cat']
  },
  {
    id: 'melt',
    tab: 'Summer Melt',
    question: '“Where is enrollment melt concentrating before September intake?”',
    answerPrefix: '84 confirmed international offer-holders, ',
    highlight: 'stalled on accommodation deposits.',
    answerSuffix: '',
    highlightColor: '#10b981',
    bullets: [
      'Chapter & Scape PBSA inventory held with £0 cancellation risk.',
      'Automated CAS verification guidance dispatched via verified WhatsApp.'
    ],
    activeNodes: ['admissions', 'financial_aid', 'bursar', 'enrollment'],
    activeEdges: ['adm-cat', 'aid-deg', 'deg-bursar', 'bursar-ret']
  }
];

// Graph Nodes layout matching Risely Image 1 geometry
const GRAPH_NODES = [
  { id: 'admissions', label: 'Admissions', x: 12, y: 38, color: '#6ab7ff' },
  { id: 'course_catalog', label: 'Course Catalog', x: 44, y: 48, color: '#3ecf8e', glowColor: 'rgba(62, 207, 142, 0.65)' },
  { id: 'early_alert', label: 'Early Alert', x: 68, y: 24, color: '#fb7185', glowColor: 'rgba(251, 113, 133, 0.65)' },
  { id: 'enrollment', label: 'Enrollment', x: 88, y: 22, color: '#ff8f3d' },
  { id: 'retention', label: 'Retention', x: 86, y: 56, color: '#ff6b00', glowColor: 'rgba(255, 107, 0, 0.65)', isKey: true },
  { id: 'bursar', label: 'Bursar', x: 62, y: 72, color: '#f59e0b', glowColor: 'rgba(245, 158, 11, 0.65)' },
  { id: 'degree_plans', label: 'Degree Plans', x: 44, y: 82, color: '#8b92b2' },
  { id: 'financial_aid', label: 'Financial Aid', x: 18, y: 72, color: '#ff8f3d' }
];

const GRAPH_EDGES = [
  { id: 'adm-cat', from: 'admissions', to: 'course_catalog' },
  { id: 'aid-deg', from: 'financial_aid', to: 'degree_plans' },
  { id: 'aid-cat', from: 'financial_aid', to: 'course_catalog' },
  { id: 'deg-cat', from: 'degree_plans', to: 'course_catalog' },
  { id: 'deg-bursar', from: 'degree_plans', to: 'bursar' },
  { id: 'cat-early', from: 'course_catalog', to: 'early_alert' },
  { id: 'cat-bursar', from: 'course_catalog', to: 'bursar' },
  { id: 'early-bursar', from: 'early_alert', to: 'bursar' },
  { id: 'early-enroll', from: 'early_alert', to: 'enrollment' },
  { id: 'early-ret', from: 'early_alert', to: 'retention' },
  { id: 'bursar-ret', from: 'bursar', to: 'retention' },
  { id: 'enroll-ret', from: 'enrollment', to: 'retention' }
];

export default function UnifiedIntelligenceGraph() {
  const [selectedQueryIdx, setSelectedQueryIdx] = useState(0);

  const query = INTELLIGENCE_QUERIES[selectedQueryIdx];

  // Helper to get node coords
  const getNode = (id) => GRAPH_NODES.find(n => n.id === id);

  return (
    <section className="section" style={{ backgroundColor: '#07061a', borderTop: '1px solid #1a1938', padding: '6rem 0', position: 'relative' }}>
      
      {/* Background ambient glow */}
      <div 
        style={{
          position: 'absolute',
          left: '50%',
          top: '35%',
          transform: 'translate(-50%, -50%)',
          width: '750px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(255, 107, 0, 0.08), transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none'
        }}
      />

      <div className="main-container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Section Header with website font */}
        <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 3.5rem' }}>
          <div className="mono-label" style={{ color: 'var(--wl-accent)', marginBottom: '0.75rem', letterSpacing: '0.12em' }}>
            CROSS-CAMPUS INTELLIGENCE
          </div>
          <h2 className="headline-lg" style={{ fontFamily: 'var(--wl-font-sans)', fontWeight: 800, letterSpacing: '-0.025em', color: '#ffffff', lineHeight: 1.1 }}>
            Unified intelligence across campus.
          </h2>
          <p className="body-md text-secondary" style={{ marginTop: '0.85rem', fontFamily: 'var(--wl-font-sans)' }}>
            Instead of waiting three weeks for fragmented reports, ask any executive question. The Agent Graph synthesizes answers instantly from one canonical record.
          </p>

          {/* Query Switcher Tabs */}
          <div className="ui-query-pills-wrap">
            {INTELLIGENCE_QUERIES.map((q, idx) => (
              <button
                key={q.id}
                type="button"
                onClick={() => setSelectedQueryIdx(idx)}
                className={`ui-query-pill ${selectedQueryIdx === idx ? 'ui-query-pill--active' : ''}`}
              >
                {q.tab}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Split: Question & Answer (Left) + Interactive Graph (Right) */}
        <div className="ui-split-grid">
          
          {/* LEFT: The Question & The Synthesized Answer */}
          <div className="ui-text-column">
            
            {/* Big Question Quote */}
            <p className="ui-question-quote">
              {query.question}
            </p>

            {/* Answer Divider with badge */}
            <div className="ui-answer-divider-bar">
              <span className="ui-answer-tag">ANSWER</span>
              <span className="ui-divider-line" />
            </div>

            {/* Answer Headline */}
            <p className="ui-answer-headline">
              {query.answerPrefix}
              <span style={{ color: query.highlightColor, fontWeight: 700 }}>
                {query.highlight}
              </span>
              {query.answerSuffix}
            </p>

            {/* Evidence & Root Cause Bullets */}
            <div className="ui-bullets-stack">
              {query.bullets.map((bullet, bIdx) => (
                <p key={bIdx} className="ui-bullet-item">
                  <span className="ui-bullet-dot" style={{ backgroundColor: query.highlightColor }} />
                  <span>{bullet}</span>
                </p>
              ))}
            </div>

            {/* Action Link */}
            <div style={{ marginTop: '2.5rem' }}>
              <Link 
                to="/platform" 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  color: '#e5e7eb', 
                  fontWeight: 600, 
                  fontSize: '0.95rem',
                  fontFamily: 'var(--wl-font-sans)',
                  textDecoration: 'none'
                }}
              >
                <span>See how the Agent Graph compounds</span>
                <ArrowRight size={16} />
              </Link>
            </div>

          </div>

          {/* RIGHT: Floating Constellation Graph (Matching Image 1) */}
          <div className="ui-graph-column">
            <div className="ui-graph-canvas-box">
              
              <svg 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none" 
                className="ui-svg-edges"
                aria-hidden="true"
              >
                {/* Connecting Edges */}
                {GRAPH_EDGES.map(edge => {
                  const fromNode = getNode(edge.from);
                  const toNode = getNode(edge.to);
                  if (!fromNode || !toNode) return null;
                  const isActiveEdge = query.activeEdges.includes(edge.id);
                  return (
                    <g key={edge.id}>
                      {/* Base Inactive Track */}
                      <line 
                        x1={fromNode.x} 
                        y1={fromNode.y} 
                        x2={toNode.x} 
                        y2={toNode.y}
                        stroke={isActiveEdge ? query.highlightColor : 'rgba(255, 255, 255, 0.15)'}
                        strokeOpacity={isActiveEdge ? 0.75 : 0.22}
                        strokeWidth={isActiveEdge ? 1.4 : 0.6}
                        vectorEffect="non-scaling-stroke"
                        style={{ transition: 'stroke 0.4s, stroke-opacity 0.4s' }}
                      />
                      {/* Flowing Light Pulse on Active Edge */}
                      {isActiveEdge && (
                        <line 
                          x1={fromNode.x} 
                          y1={fromNode.y} 
                          x2={toNode.x} 
                          y2={toNode.y}
                          stroke="#ffffff"
                          strokeOpacity="0.95"
                          strokeWidth="2.0"
                          strokeDasharray="6 24"
                          vectorEffect="non-scaling-stroke"
                          className="ui-edge-pulse"
                        />
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* Render Floating Node Badges */}
              {GRAPH_NODES.map(node => {
                const isActive = query.activeNodes.includes(node.id);
                return (
                  <div
                    key={node.id}
                    className={`ui-node-pill ${isActive ? 'ui-node-pill--active' : ''} ${node.isKey ? 'ui-node-pill--key' : ''}`}
                    style={{
                      left: `${node.x}%`,
                      top: `${node.y}%`,
                      borderColor: isActive ? node.color : 'rgba(255, 255, 255, 0.14)',
                      color: isActive ? '#ffffff' : '#9ca3af',
                      boxShadow: isActive ? `0 0 24px ${node.glowColor || node.color + '55'}, 0 0 8px ${node.color}99` : 'none'
                    }}
                  >
                    {node.isKey && (
                      <span className="ui-key-indicator">
                        <Sparkles size={10} color="#fff" />
                      </span>
                    )}
                    <span>{node.label}</span>
                  </div>
                );
              })}

            </div>
          </div>

        </div>

      </div>

      <style>{`
        .ui-query-pills-wrap {
          display: inline-flex;
          gap: 8px;
          background: rgba(255, 255, 255, 0.04);
          padding: 4px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          margin-top: 1.5rem;
        }

        .ui-query-pill {
          border: none;
          background: transparent;
          color: #9ca3af;
          padding: 6px 16px;
          border-radius: 999px;
          font-family: var(--wl-font-sans);
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .ui-query-pill--active {
          background: var(--wl-accent, #ff6b00);
          color: #ffffff;
        }

        .ui-split-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3.5rem;
          align-items: center;
          max-width: 1140px;
          margin: 0 auto;
        }

        .ui-question-quote {
          font-family: var(--wl-font-sans);
          font-size: clamp(1.8rem, 2.7vw, 2.5rem);
          color: #ffffff;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: -0.025em;
        }

        .ui-answer-divider-bar {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 1.75rem;
        }

        .ui-answer-tag {
          font-family: var(--wl-font-mono, monospace);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #f7a13a;
        }

        .ui-divider-line {
          height: 1px;
          flex: 1;
          background: rgba(247, 161, 58, 0.25);
        }

        .ui-answer-headline {
          font-family: var(--wl-font-sans);
          font-size: clamp(1.2rem, 1.8vw, 1.55rem);
          color: #ffffff;
          line-height: 1.35;
          margin-top: 0.85rem;
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        .ui-bullets-stack {
          margin-top: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .ui-bullet-item {
          font-family: var(--wl-font-sans);
          font-size: 15px;
          color: #e5e7eb;
          line-height: 1.45;
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .ui-bullet-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 8px;
        }

        /* Graph Canvas: Clean & seamless matching Image 1 (no harsh card border) */
        .ui-graph-canvas-box {
          position: relative;
          width: 100%;
          height: 400px;
          background: transparent;
          overflow: visible;
        }

        .ui-svg-edges {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        @keyframes edgePulseFlow {
          to { stroke-dashoffset: -30; }
        }

        .ui-edge-pulse {
          animation: edgePulseFlow 1.2s linear infinite;
        }

        .ui-node-pill {
          position: absolute;
          z-index: 5;
          transform: translate(-50%, -50%);
          white-space: nowrap;
          border-radius: 999px;
          border: 1px solid;
          background: rgba(14, 15, 25, 0.90);
          padding: 6px 14px;
          font-family: var(--wl-font-sans);
          font-size: 13px;
          font-weight: 500;
          transition: all 0.35s ease;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          backdrop-filter: blur(8px);
        }

        .ui-node-pill--active {
          transform: translate(-50%, -50%) scale(1.06);
          font-weight: 700;
          background: rgba(20, 16, 26, 0.96);
        }

        .ui-node-pill--key {
          padding-left: 9px;
        }

        .ui-key-indicator {
          width: 17px;
          height: 17px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff6b00, #f97316);
          display: grid;
          place-items: center;
        }

        @media (max-width: 900px) {
          .ui-split-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .ui-graph-canvas-box {
            height: 320px;
          }
        }
      `}</style>
    </section>
  );
}
