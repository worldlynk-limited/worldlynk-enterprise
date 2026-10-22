import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, Check, Database, Cpu, ShieldCheck, 
  Layers, Users, Sparkles, Building, GraduationCap, 
  DollarSign, Clock, AlertTriangle, FileText, CheckCircle2
} from 'lucide-react';

// Clusters configuration matching Risely's dense vertical columnar layout with clean gaps between layers
const CLUSTERS = [
  { 
    id: 'students', 
    label: 'Students', 
    cx: 140, 
    pillY: 38, 
    pillWidth: 84, 
    color: '#f48866', 
    border: 'rgba(244, 136, 102, 0.8)', 
    bridgeColor: 'rgba(244, 136, 102, 0.22)',
    count: 60 
  },
  { 
    id: 'courses', 
    label: 'Courses', 
    cx: 295, 
    pillY: 38, 
    pillWidth: 80, 
    color: '#f6b158', 
    border: 'rgba(246, 177, 88, 0.8)', 
    bridgeColor: 'rgba(246, 177, 88, 0.22)',
    count: 60 
  },
  { 
    id: 'sections', 
    label: 'Sections', 
    cx: 450, 
    pillY: 38, 
    pillWidth: 84, 
    color: '#f5c26b', 
    border: 'rgba(245, 194, 107, 0.8)', 
    bridgeColor: 'rgba(216, 180, 254, 0.22)',
    count: 62 
  },
  { 
    id: 'awards', 
    label: 'Awards', 
    cx: 605, 
    pillY: 38, 
    pillWidth: 78, 
    color: '#a78bfa', 
    border: 'rgba(167, 139, 250, 0.8)', 
    bridgeColor: 'rgba(167, 139, 250, 0.22)',
    count: 58 
  },
  { 
    id: 'holds', 
    label: 'Holds', 
    cx: 760, 
    pillY: 38, 
    pillWidth: 74, 
    color: '#c084fc', 
    border: 'rgba(192, 132, 252, 0.8)', 
    bridgeColor: 'rgba(129, 230, 217, 0.22)',
    count: 58 
  },
  { 
    id: 'housing', 
    label: 'Housing', 
    cx: 915, 
    pillY: 38, 
    pillWidth: 84, 
    color: '#5eead4', 
    border: 'rgba(94, 234, 212, 0.8)', 
    bridgeColor: 'rgba(94, 234, 212, 0.22)',
    count: 60 
  },
  { 
    id: 'terms', 
    label: 'Terms', 
    cx: 527.5, 
    pillY: 328, 
    pillWidth: 68, 
    color: '#38bdf8', 
    border: 'rgba(56, 189, 248, 0.85)', 
    bridgeColor: 'rgba(56, 189, 248, 0.25)',
    count: 36, 
    isSm: true 
  },
];

// Generate deterministic dense constellation points matching Risely Image 3
function generateConstellation() {
  const nodes = [];
  const edges = [];
  const clusterNodeGroups = {};
  let seed = 1337;
  function rnd() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  }

  // 1. Generate dense vertical columnar clusters for the 6 primary pillars with clear physical gaps
  for (let c = 0; c < 6; c++) {
    const cluster = CLUSTERS[c];
    const clusterNodes = [];
    clusterNodeGroups[cluster.id] = clusterNodes;

    for (let i = 0; i < cluster.count; i++) {
      // Column width: ~66px (cx - 33 to cx + 33). Center distance is 155px, creating a distinct ~89px gap between layers
      const dx = (rnd() - 0.5) * 66;
      const x = cluster.cx + dx;
      const y = 66 + rnd() * 212;
      const isMajor = rnd() < 0.14;
      const r = isMajor ? (2.1 + rnd() * 1.1) : (0.9 + rnd() * 1.4);
      const opacity = isMajor ? (0.8 + rnd() * 0.2) : (0.35 + rnd() * 0.55);
      
      const node = { id: `${cluster.id}-${i}`, x, y, r, opacity, color: cluster.color, cluster: cluster.id, isMajor };
      nodes.push(node);
      clusterNodes.push(node);
    }

    // Dense intra-cluster filaments (stays inside column, creating the vertical pillar lattice)
    for (let i = 0; i < clusterNodes.length; i++) {
      for (let j = i + 1; j < clusterNodes.length; j++) {
        const dx = clusterNodes[i].x - clusterNodes[j].x;
        const dy = clusterNodes[i].y - clusterNodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 34) {
          edges.push({
            x1: clusterNodes[i].x,
            y1: clusterNodes[i].y,
            x2: clusterNodes[j].x,
            y2: clusterNodes[j].y,
            stroke: cluster.color,
            opacity: Math.max(0.09, 0.36 - (dist / 34) * 0.27),
            key: `intra-${clusterNodes[i].id}-${clusterNodes[j].id}`
          });
        }
      }
    }
  }

  // 2. Elegant horizontal inter-cluster filament bridges spanning across the gaps
  for (let c = 0; c < 5; c++) {
    const col1 = clusterNodeGroups[CLUSTERS[c].id];
    const col2 = clusterNodeGroups[CLUSTERS[c + 1].id];
    
    // Connect nodes across columns when y distance is close to create the horizontal bridging web
    for (let i = 0; i < col1.length; i++) {
      for (let j = 0; j < col2.length; j++) {
        const dy = Math.abs(col1[i].y - col2[j].y);
        const dx = col2[j].x - col1[i].x;
        if (dy < 18 && dx > 60 && dx < 170 && rnd() < 0.22) {
          edges.push({
            x1: col1[i].x,
            y1: col1[i].y,
            x2: col2[j].x,
            y2: col2[j].y,
            stroke: CLUSTERS[c].bridgeColor,
            opacity: Math.max(0.06, 0.20 - (dx / 170) * 0.12),
            key: `bridge-${c}-${i}-${j}`
          });
        }
      }
    }
  }

  // 3. Dense 'Terms' cluster at bottom center with upward fanning filaments into Sections and Awards
  const termsCluster = CLUSTERS[6];
  const termsNodes = [];
  clusterNodeGroups['terms'] = termsNodes;

  for (let i = 0; i < termsCluster.count; i++) {
    const angle = rnd() * Math.PI * 2;
    const radX = rnd() * 40;
    const radY = rnd() * 18;
    const x = termsCluster.cx + Math.cos(angle) * radX;
    const y = 296 + Math.sin(angle) * radY;
    const isMajor = rnd() < 0.18;
    const r = isMajor ? (2.0 + rnd() * 1.0) : (0.9 + rnd() * 1.4);
    const opacity = 0.5 + rnd() * 0.5;

    const node = { id: `terms-${i}`, x, y, r, opacity, color: termsCluster.color, cluster: 'terms', isMajor };
    nodes.push(node);
    termsNodes.push(node);
  }

  // Terms intra-cluster filaments
  for (let i = 0; i < termsNodes.length; i++) {
    for (let j = i + 1; j < termsNodes.length; j++) {
      const dx = termsNodes[i].x - termsNodes[j].x;
      const dy = termsNodes[i].y - termsNodes[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 28) {
        edges.push({
          x1: termsNodes[i].x,
          y1: termsNodes[i].y,
          x2: termsNodes[j].x,
          y2: termsNodes[j].y,
          stroke: termsCluster.color,
          opacity: 0.32,
          key: `terms-intra-${i}-${j}`
        });
      }
    }
  }

  // Terms upward filaments into lower nodes of Sections and Awards
  ['sections', 'awards'].forEach(colId => {
    const colNodes = clusterNodeGroups[colId].filter(n => n.y > 200);
    colNodes.forEach(cn => {
      const tn = termsNodes[Math.floor(rnd() * termsNodes.length)];
      if (tn && rnd() < 0.52) {
        edges.push({
          x1: cn.x,
          y1: cn.y,
          x2: tn.x,
          y2: tn.y,
          stroke: '#38bdf8',
          opacity: 0.14 + rnd() * 0.12,
          key: `terms-up-${colId}-${cn.id}-${tn.id}`
        });
      }
    });
  });

  return { nodes, edges };
}

const CONSTELLATION_DATA = generateConstellation();

export default function CampusMapAgentGraph() {
  const [activeCard, setActiveCard] = useState(0);

  // Auto-cycle through the 4 bento agent action consoles
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard(prev => (prev + 1) % 4);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const bentoCards = [
    {
      id: 'registrar',
      office: 'REGISTRAR',
      pipeline: ['read', 'match', 'draft'],
      activeStep: 2,
      num: 48,
      caption: 'transfer credit evaluations drafted for review',
      color: '#6ab7ff',
      textColor: '#0067c8',
      hoverBorder: 'rgba(106, 183, 255, 0.45)',
      link: '/platform'
    },
    {
      id: 'financial_aid',
      office: 'FINANCIAL AID',
      pipeline: ['read', 'verify', 'package'],
      activeStep: 2,
      num: 208,
      caption: 'award letters packaged and held for review',
      color: '#f7a13a',
      textColor: '#9b5607',
      hoverBorder: 'rgba(247, 161, 58, 0.45)',
      link: '/platform'
    },
    {
      id: 'retention',
      office: 'RETENTION & WELFARE',
      pipeline: ['watch', 'score', 'open'],
      activeStep: 2,
      num: 31,
      caption: 'risk cases opened for academic advisors',
      color: '#ea580c',
      textColor: '#c2410c',
      hoverBorder: 'rgba(234, 88, 12, 0.45)',
      link: '/platform'
    },
    {
      id: 'compliance',
      office: 'COMPLIANCE & CAS',
      pipeline: ['track', 'audit', 'brief'],
      activeStep: 2,
      num: 19,
      caption: 'Tier-4 visa & 20h work checks prepared before deadline',
      color: '#3ecf8e',
      textColor: '#1d764e',
      hoverBorder: 'rgba(62, 207, 142, 0.45)',
      link: '/platform'
    }
  ];

  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden', padding: '5rem 0' }}>
      {/* Ambient background glow */}
      <div 
        style={{
          position: 'absolute',
          left: '50%',
          top: '12%',
          transform: 'translateX(-50%)',
          width: '75%',
          height: '55%',
          background: 'radial-gradient(ellipse at 50% 40%, rgba(123, 92, 255, 0.12), rgba(62, 207, 142, 0.05) 48%, transparent 72%)',
          filter: 'blur(45px)',
          pointerEvents: 'none',
          zIndex: 0
        }} 
      />

      <div className="main-container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Headline */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="mono-label" style={{ color: 'var(--wl-accent)', marginBottom: '0.75rem', letterSpacing: '0.12em' }}>
            FOUNDATIONAL ARCHITECTURE
          </div>
          <h2 className="headline-lg" style={{ fontFamily: 'var(--wl-font-sans)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            The work builds the map that runs the campus.
          </h2>
          <p className="body-md text-secondary" style={{ marginTop: '0.75rem', maxWidth: '720px' }}>
            Every interaction across registry, financial aid, housing, and compliance updates one living graph of the institution. AI agents draft the repetitive work, and staff approve every move.
          </p>
        </div>

        {/* Master Stage Box */}
        <div className="ps-stage-box">
          
          {/* 1. TOP: THE RISELY/WORLDLYNK AGENT GRAPH (Constellation Box) */}
          <div className="plx-graphbox-wrap">
            {/* Graph Header Pill */}
            <div className="plx-graph-header-badge">
              <span className="plx-pulsing-dot" />
              <span>THE WORLDLYNK AGENT GRAPH</span>
            </div>

            {/* Constellation SVG Network with perfectly aligned columnar layers and category pills */}
            <svg 
              viewBox="0 0 1060 360" 
              className="plx-constellation-svg" 
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <radialGradient id="graphAtmosphere" cx="50%" cy="32%" r="65%">
                  <stop offset="0%" stopColor="#7c4dff" stopOpacity="0.18" />
                  <stop offset="40%" stopColor="#38bdf8" stopOpacity="0.04" />
                  <stop offset="100%" stopColor="#07061a" stopOpacity="0" />
                </radialGradient>
                <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="1.8" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Ambient atmospheric SVG glow */}
              <rect x="0" y="0" width="1060" height="360" fill="url(#graphAtmosphere)" pointerEvents="none" />

              {/* Connecting Filaments / Edges */}
              <g className="plx-edges-group">
                {CONSTELLATION_DATA.edges.map(e => (
                  <line 
                    key={e.key}
                    x1={e.x1}
                    y1={e.y1}
                    x2={e.x2}
                    y2={e.y2}
                    stroke={e.stroke}
                    strokeOpacity={e.opacity}
                    strokeWidth="0.85"
                  />
                ))}
              </g>

              {/* Glowing Nodes / Dots */}
              <g className="plx-nodes-group">
                {CONSTELLATION_DATA.nodes.map(n => (
                  <circle 
                    key={n.id}
                    cx={n.x}
                    cy={n.y}
                    r={n.r}
                    fill={n.color}
                    fillOpacity={n.opacity}
                    filter={n.isMajor ? "url(#nodeGlow)" : undefined}
                  />
                ))}
              </g>

              {/* Bottom Riser Connection Indicators matching the 4 Bento cards */}
              <g className="plx-bottom-notches" opacity="0.9">
                {bentoCards.map((b, idx) => {
                  const notchX = 1060 * (0.125 + idx * 0.25);
                  return (
                    <g key={b.id} transform={`translate(${notchX}, 356)`}>
                      <line x1={0} y1={-7} x2={0} y2={3} stroke={b.color} strokeWidth="2" strokeLinecap="round" opacity="0.85" />
                      <circle cx={0} cy={-2} r={2.2} fill={b.color} style={{ filter: `drop-shadow(0 0 6px ${b.color})` }} />
                    </g>
                  );
                })}
              </g>

              {/* Category Pills directly inside SVG - 100% mathematically locked to column coordinates */}
              <g className="plx-pills-group">
                {CLUSTERS.map(c => {
                  const h = c.isSm ? 24 : 28;
                  const rx = h / 2;
                  return (
                    <g 
                      key={c.id} 
                      className="plx-svg-cluster-pill"
                      transform={`translate(${c.cx}, ${c.pillY})`}
                    >
                      <title>{c.label}</title>
                      {/* Pill container */}
                      <rect
                        x={-c.pillWidth / 2}
                        y={-h / 2}
                        width={c.pillWidth}
                        height={h}
                        rx={rx}
                        fill="#0c0b1e"
                        fillOpacity="0.92"
                        stroke={c.border}
                        strokeWidth="1.2"
                        style={{
                          filter: `drop-shadow(0 0 10px ${c.color}45)`
                        }}
                      />
                      {/* Pill text */}
                      <text
                        x={0}
                        y={c.isSm ? 4 : 4.5}
                        textAnchor="middle"
                        fill={c.color}
                        fontSize={c.isSm ? "11.5" : "13"}
                        fontWeight="700"
                        fontFamily="var(--wl-font-sans, system-ui, -apple-system, sans-serif)"
                        letterSpacing="0.02em"
                        style={{ userSelect: 'none' }}
                      >
                        {c.label}
                      </text>
                    </g>
                  );
                })}
              </g>
            </svg>

            {/* Animated Light Sweep Beams across graph */}
            <div className="plx-sweep-container" aria-hidden="true">
              <i className="plx-sweep-beam beam-orange" />
              <i className="plx-sweep-beam beam-mint" />
              <i className="plx-sweep-beam beam-blue" />
            </div>
          </div>

          {/* 2. GLOWING FLOW RISERS (Connecting Graph to Bento Action Cards) */}
          <div className="plx-risers-row">
            {bentoCards.map((c, i) => (
              <div key={i} className="plx-conn-channel" style={{ '--channel-color': c.color }}>
                <i className="plx-particle-flow" style={{ animationDelay: `${0.2 * i}s` }} />
              </div>
            ))}
          </div>

          {/* 3. BENTO AGENT CONSOLES (Real Work Prepared by Agents) */}
          <div className="plx-bento-grid">
            {bentoCards.map((card, i) => {
              const isSelected = activeCard === i;
              return (
                <div 
                  key={card.id}
                  onClick={() => setActiveCard(i)}
                  className={`plx-bento-card ${isSelected ? 'plx-bento-card--active' : ''}`}
                  style={{ 
                    '--card-accent': card.color,
                    '--card-text': card.textColor
                  }}
                >
                  <div className="plx-card-topbar">
                    <div className="plx-card-glyph">
                      <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                        <path d="M6 8 L12 16 L18 8 M6 8 L18 8" stroke={card.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="6" cy="8" r="2.2" fill={card.color} />
                        <circle cx="18" cy="8" r="2.2" fill={card.color} />
                        <circle cx="12" cy="16" r="2.2" fill={card.color} />
                      </svg>
                      <span className="plx-card-office-name">{card.office}</span>
                    </div>
                    <ArrowUpRight size={16} className="plx-card-arrow" />
                  </div>

                  {/* Step pipeline: read · match · draft */}
                  <div className="plx-step-pipeline">
                    {card.pipeline.map((step, sIdx) => (
                      <React.Fragment key={step}>
                        <span className={`plx-pipeline-step ${sIdx === card.activeStep ? 'plx-step--on' : ''}`}>
                          {step}
                        </span>
                        {sIdx < card.pipeline.length - 1 && <span className="plx-step-dot">·</span>}
                      </React.Fragment>
                    ))}
                    <span className="plx-blinking-caret" />
                  </div>

                  {/* Big Live Number */}
                  <div className="plx-metric-number">{card.num}</div>

                  {/* Caption */}
                  <div className="plx-metric-caption">{card.caption}</div>
                </div>
              );
            })}
          </div>

          {/* Subtitle below Bento */}
          <p className="plx-bento-footer-sub">
            Prepared by WorldLynk’s agents and held for review.
          </p>

          {/* 4. GLOWING FLOW RISERS (Connecting Bento to Fabric) */}
          <div className="plx-risers-row" style={{ marginTop: '0.75rem', marginBottom: '0.25rem' }}>
            {bentoCards.map((c, i) => (
              <div key={i} className="plx-conn-channel" style={{ '--channel-color': c.color }}>
                <i className="plx-particle-flow" style={{ animationDelay: `${0.35 + 0.15 * i}s` }} />
              </div>
            ))}
          </div>

          {/* 5. WORLDLYNK FABRIC (Base Systems Layer) */}
          <div className="plx-fabric-container">
            {/* Fabric Title */}
            <div className="plx-fabric-header">
              <span className="plx-fabric-dot" />
              <span className="plx-fabric-title">WORLDLYNK FABRIC</span>
              <span className="plx-fabric-sub">connects the systems already running on campus</span>
            </div>

            {/* Central Rail with ONE RECORD Badge */}
            <div className="plx-rail-wrapper">
              <div className="plx-rail-line" />
              <div className="plx-one-record-pill">
                <span className="plx-record-dot" />
                <span>one record</span>
                <Check size={14} className="plx-check-icon" />
              </div>
            </div>

            {/* Vertical Flow Conduits into Systems */}
            <div className="plx-systems-risers">
              {Array.from({ length: 6 }).map((_, idx) => (
                <div key={idx} className="plx-conn-channel">
                  <i className="plx-particle-flow" style={{ animationDelay: `${0.12 * idx}s` }} />
                </div>
              ))}
            </div>

            {/* Categorized Systems Grid */}
            <div className="plx-categories-grid">
              
              {/* Category 1: SIS */}
              <div className="plx-cat-col">
                <span className="plx-cat-tag">SIS</span>
                <div className="plx-tiles-group">
                  <div className="plx-system-tile">
                    <span className="plx-tile-label">SITS:Vision</span>
                  </div>
                  <div className="plx-system-tile">
                    <span className="plx-tile-label">Ellucian</span>
                  </div>
                  <div className="plx-system-tile">
                    <span className="plx-tile-label">Banner</span>
                  </div>
                  <div className="plx-system-tile">
                    <span className="plx-tile-label">Workday</span>
                  </div>
                </div>
              </div>

              {/* Category 2: LMS */}
              <div className="plx-cat-col">
                <span className="plx-cat-tag">LMS</span>
                <div className="plx-tiles-group">
                  <div className="plx-system-tile">
                    <span className="plx-tile-label" style={{ color: '#e11d48' }}>Canvas</span>
                  </div>
                  <div className="plx-system-tile">
                    <span className="plx-tile-label" style={{ color: '#ea580c' }}>Moodle</span>
                  </div>
                  <div className="plx-system-tile">
                    <span className="plx-tile-label" style={{ color: '#0284c7' }}>Brightspace</span>
                  </div>
                </div>
              </div>

              {/* Category 3: CRM */}
              <div className="plx-cat-col">
                <span className="plx-cat-tag">CRM</span>
                <div className="plx-tiles-group">
                  <div className="plx-system-tile">
                    <span className="plx-tile-label" style={{ color: '#0ea5e9' }}>Salesforce</span>
                  </div>
                  <div className="plx-system-tile">
                    <span className="plx-tile-label">Slate</span>
                  </div>
                  <div className="plx-system-tile">
                    <span className="plx-tile-label" style={{ color: '#f97316' }}>HubSpot</span>
                  </div>
                </div>
              </div>

              {/* Category 4: Financial Aid & Compliance */}
              <div className="plx-cat-col">
                <span className="plx-cat-tag">Financial Aid</span>
                <div className="plx-tiles-group">
                  <div className="plx-system-tile">
                    <span className="plx-tile-label">PowerFAIDS</span>
                  </div>
                  <div className="plx-system-tile">
                    <span className="plx-tile-label" style={{ color: '#10b981' }}>UKVI SMS</span>
                  </div>
                </div>
              </div>

              {/* Category 5: Advancement & Housing */}
              <div className="plx-cat-col">
                <span className="plx-cat-tag">Advancement</span>
                <div className="plx-tiles-group">
                  <div className="plx-system-tile">
                    <span className="plx-tile-label" style={{ color: '#059669' }}>Blackbaud</span>
                  </div>
                  <div className="plx-system-tile">
                    <span className="plx-tile-label" style={{ color: '#6366f1' }}>Stripe Escrow</span>
                  </div>
                </div>
              </div>

              {/* Category 6: ERP */}
              <div className="plx-cat-col">
                <span className="plx-cat-tag">ERP</span>
                <div className="plx-tiles-group">
                  <div className="plx-system-tile">
                    <span className="plx-tile-label" style={{ color: '#2563eb' }}>Workday</span>
                  </div>
                  <div className="plx-system-tile">
                    <span className="plx-tile-label">SAP S/4</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>{`
        /* Stage Styling */
        .ps-stage-box {
          position: relative;
          border-radius: 22px;
          padding: clamp(20px, 3vw, 34px) clamp(16px, 2.6vw, 30px);
          background: #07061a;
          border: 1px solid #1a1938;
          box-shadow: 0 60px 140px rgba(4, 7, 20, 0.45);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .ps-stage-box::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background-image: radial-gradient(rgba(255, 107, 0, 0.06) 1px, transparent 1px);
          background-size: 26px 26px;
        }

        .ps-stage-box > * {
          position: relative;
          z-index: 1;
        }

        /* 1. Constellation Box */
        .plx-graphbox-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1060 / 360;
          min-height: 330px;
          max-height: 480px;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: radial-gradient(75% 70% at 50% 30%, rgba(124, 77, 255, 0.16), rgba(56, 189, 248, 0.04) 50%, transparent 75%),
                      linear-gradient(175deg, #0d0a21 0%, #060511 100%);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 20px 50px rgba(4, 7, 20, 0.5);
        }

        .plx-graph-header-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          z-index: 10;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(13, 10, 33, 0.88);
          border: 1px solid rgba(255, 255, 255, 0.22);
          border-radius: 999px;
          padding: 6px 14px;
          font-family: var(--wl-font-mono, monospace);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: #ffffff;
          backdrop-filter: blur(8px);
        }

        .plx-pulsing-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #a855f7;
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.9);
          animation: dotPulse 2s infinite ease-in-out;
        }

        @keyframes dotPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }

        .plx-constellation-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          display: block;
        }

        .plx-svg-cluster-pill {
          cursor: default;
          transition: transform 0.2s ease, filter 0.2s ease;
        }

        .plx-svg-cluster-pill:hover rect {
          stroke-width: 1.8px;
        }

        /* Ambient Sweeping Light Beams */
        .plx-sweep-container {
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;
          overflow: hidden;
          mix-blend-mode: screen;
        }

        .plx-sweep-beam {
          position: absolute;
          top: -15%;
          bottom: -15%;
          width: 44%;
          will-change: transform;
        }

        .beam-orange {
          background: linear-gradient(90deg, transparent, rgba(255, 107, 0, 0.28), transparent);
          filter: blur(5px);
          animation: sweepA 8s linear infinite;
        }

        .beam-mint {
          width: 38%;
          background: linear-gradient(90deg, transparent, rgba(62, 207, 142, 0.20), transparent);
          filter: blur(6px);
          animation: sweepB 11s linear infinite 1.5s;
        }

        .beam-blue {
          width: 30%;
          background: linear-gradient(90deg, transparent, rgba(106, 183, 255, 0.20), transparent);
          filter: blur(4px);
          animation: sweepC 7s linear infinite 3s;
        }

        @keyframes sweepA {
          from { transform: translateX(-130%); }
          to { transform: translateX(250%); }
        }
        @keyframes sweepB {
          from { transform: translateX(250%); }
          to { transform: translateX(-140%); }
        }
        @keyframes sweepC {
          from { transform: translateX(-120%); }
          to { transform: translateX(250%); }
        }

        /* 2. Riser Channels */
        .plx-risers-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          height: 24px;
          margin: 6px 0;
          position: relative;
          z-index: 2;
        }

        .plx-conn-channel {
          position: relative;
          height: 100%;
          display: flex;
          justify-content: center;
        }

        .plx-conn-channel::before {
          content: "";
          position: absolute;
          width: 1px;
          top: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.12);
        }

        .plx-particle-flow {
          position: absolute;
          width: 3px;
          height: 12px;
          border-radius: 2px;
          background: var(--channel-color, #ff6b00);
          box-shadow: 0 0 8px var(--channel-color, #ff6b00);
          animation: flowDown 1.4s linear infinite;
        }

        @keyframes flowDown {
          0% { transform: translateY(0); opacity: 0; }
          25% { opacity: 1; }
          75% { opacity: 1; }
          100% { transform: translateY(14px); opacity: 0; }
        }

        /* 3. Bento Grid */
        .plx-bento-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          z-index: 4;
        }

        .plx-bento-card {
          position: relative;
          overflow: hidden;
          background: #ffffff;
          border-radius: 14px;
          padding: 14px 16px 15px;
          box-shadow: 0 20px 45px rgba(4, 7, 20, 0.45);
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        .plx-bento-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--card-accent, #ff6b00);
        }

        .plx-bento-card::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 32px;
          pointer-events: none;
          background: linear-gradient(0deg, color-mix(in srgb, var(--card-accent, #ff6b00) 14%, transparent), transparent);
        }

        .plx-bento-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 28px 60px rgba(4, 7, 20, 0.55);
        }

        .plx-bento-card--active {
          box-shadow: 0 26px 54px rgba(4, 7, 20, 0.5), 0 0 0 2px var(--card-accent, #ff6b00);
        }

        .plx-card-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .plx-card-glyph {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .plx-card-office-name {
          font-family: var(--wl-font-mono, monospace);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #4a5170;
        }

        .plx-card-arrow {
          color: #8b92b2;
          transition: transform 0.2s;
        }

        .plx-bento-card:hover .plx-card-arrow {
          transform: translate(2px, -2px);
          color: var(--card-accent, #ff6b00);
        }

        .plx-step-pipeline {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 10px;
          font-family: var(--wl-font-mono, monospace);
          font-size: 11px;
          color: #71717a;
        }

        .plx-pipeline-step {
          transition: color 0.2s;
        }

        .plx-step--on {
          color: var(--card-text, #0067c8);
          font-weight: 700;
        }

        .plx-step-dot {
          opacity: 0.5;
        }

        .plx-blinking-caret {
          display: inline-block;
          width: 5px;
          height: 10px;
          background: var(--card-accent, #ff6b00);
          margin-left: 2px;
          animation: caretBlink 1s steps(1) infinite;
        }

        @keyframes caretBlink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .plx-metric-number {
          font-size: 2.1rem;
          font-weight: 800;
          color: #0c0a24;
          line-height: 1;
          margin-top: 8px;
          letter-spacing: -0.03em;
        }

        .plx-metric-caption {
          font-size: 13px;
          line-height: 1.35;
          color: #4b5563;
          margin-top: 6px;
          min-height: 36px;
        }

        .plx-bento-footer-sub {
          text-align: center;
          font-size: 14px;
          color: #8f95b2;
          margin-top: 16px;
        }

        /* 5. Fabric Base */
        .plx-fabric-container {
          position: relative;
          margin-top: 8px;
          padding-top: 16px;
        }

        .plx-fabric-header {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--wl-font-mono, monospace);
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .plx-fabric-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #38bdf8;
          box-shadow: 0 0 8px rgba(56, 189, 248, 0.8);
        }

        .plx-fabric-sub {
          color: #9499b8;
          font-weight: 400;
          letter-spacing: normal;
          margin-left: 6px;
        }

        /* Rail Line & One Record */
        .plx-rail-wrapper {
          position: relative;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .plx-rail-line {
          position: absolute;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, rgba(255, 107, 0, 0.1), rgba(255, 107, 0, 0.75) 20%, rgba(255, 180, 100, 0.95) 50%, rgba(255, 107, 0, 0.75) 80%, rgba(255, 107, 0, 0.1));
          box-shadow: 0 0 16px 2px rgba(255, 107, 0, 0.45);
        }

        .plx-one-record-pill {
          position: relative;
          z-index: 3;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #07061a;
          border: 1px solid rgba(255, 107, 0, 0.55);
          box-shadow: 0 0 20px rgba(255, 107, 0, 0.35);
          border-radius: 999px;
          padding: 4px 14px;
          font-family: var(--wl-font-mono, monospace);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #fed7aa;
        }

        .plx-record-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #3ecf8e;
        }

        .plx-check-icon {
          color: #3ecf8e;
        }

        .plx-systems-risers {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          height: 20px;
          margin-top: 2px;
          margin-bottom: 6px;
        }

        /* Systems Grid */
        .plx-categories-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 12px;
        }

        .plx-cat-col {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .plx-cat-tag {
          font-family: var(--wl-font-mono, monospace);
          font-size: 11.5px;
          font-weight: 700;
          color: #8b92b2;
          letter-spacing: 0.08em;
          text-align: center;
        }

        .plx-tiles-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .plx-system-tile {
          background: #ffffff;
          border-radius: 8px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 8px;
          box-shadow: 0 4px 12px rgba(4, 7, 20, 0.3);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .plx-system-tile:hover {
          transform: translateY(-1.5px);
          box-shadow: 0 8px 18px rgba(4, 7, 20, 0.45);
        }

        .plx-tile-label {
          font-size: 13.5px;
          font-weight: 800;
          color: #111827;
          letter-spacing: -0.01em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Responsive Breakpoints */
        @media (max-width: 900px) {
          .plx-bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .plx-categories-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .plx-risers-row {
            grid-template-columns: repeat(2, 1fr);
          }
          .plx-systems-risers {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 640px) {
          .plx-graphbox-wrap {
            min-height: 220px;
          }
          .plx-fabric-sub {
            display: none;
          }
          .plx-categories-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .plx-systems-risers {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
