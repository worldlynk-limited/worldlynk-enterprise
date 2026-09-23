import React, { useState } from 'react';
import {
  Database,
  GraduationCap,
  ShieldCheck,
  Briefcase,
  Layers,
  Cpu,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Lock,
  ArrowRight,
  GitBranch,
  Server,
  Activity,
  FileText,
  UserCheck,
  Building,
  Sparkles
} from 'lucide-react';

const STUDENTS_GRAPH_DATA = {
  maya: {
    id: 'maya',
    name: 'Maya Chen',
    course: 'MSc Data Science & AI',
    sitsId: '0091-2847',
    status: 'Tier-4 Visa Sponsored · Full-Time',
    summary: 'Active UKVI attendance signal: 1 missed lab session. Work hours recorded at Costa Coffee: 16.0h/20.0h limit.',
    nodes: [
      {
        id: 'student',
        label: 'Maya Chen',
        type: 'student',
        subtitle: 'MSc Data Science',
        office: 'Canonical Identity',
        icon: GraduationCap,
        x: 400,
        y: 240,
        color: '#ff6b00',
        activeOffice: 1,
        details: { sitsId: '0091-2847', cas: 'E2948102A', campus: 'Kings Cross Campus' }
      },
      {
        id: 'academic',
        label: 'CS-5100 Data Mining',
        type: 'academic',
        subtitle: 'SITS:Vision · Grade A-',
        office: 'Academic Registry',
        icon: Database,
        x: 180,
        y: 110,
        color: '#38bdf8',
        activeOffice: 1,
        details: { sitsCode: 'CS-5100-A', credits: 15, prereq: 'CS-3100 (Pass)', completion: '74%' }
      },
      {
        id: 'lms',
        label: 'Moodle Inactivity Alert',
        type: 'lms',
        subtitle: '114h Inactive · Lab #3',
        office: 'Learning Management',
        icon: Cpu,
        x: 170,
        y: 350,
        color: '#f59e0b',
        activeOffice: 2,
        details: { lastLogin: '2026-09-21 08:14', missedSessions: 1, autoAction: 'Makeup slot provisioned' }
      },
      {
        id: 'tier4',
        label: 'UKVI Tier-4 Sponsor Check',
        type: 'compliance',
        subtitle: 'Legal Margin: 4.0h left',
        office: 'Tier-4 Compliance',
        icon: ShieldCheck,
        x: 620,
        y: 110,
        color: '#10b981',
        activeOffice: 4,
        details: { casNumber: 'E2948102A', hoursUsed: '16.0h / 20.0h', risk: 'Low/Amber Threshold' }
      },
      {
        id: 'employer',
        label: 'Costa Coffee (Shift Log)',
        type: 'employment',
        subtitle: '16.0h Barista · Verified',
        office: 'Student Employment',
        icon: Briefcase,
        x: 640,
        y: 340,
        color: '#c084fc',
        activeOffice: 3,
        details: { employer: 'Costa Coffee St Pancras', hourlyRate: '£12.50/hr', contractType: 'Part-Time' }
      },
      {
        id: 'housing',
        label: 'Chapter King’s Cross',
        type: 'housing',
        subtitle: 'Stripe Escrow · £315/wk',
        office: 'Accommodation Office',
        icon: Building,
        x: 400,
        y: 430,
        color: '#ec4899',
        activeOffice: 5,
        details: { escrowId: 'esc_8849', pbsaPartner: 'Chapter Living', leaseEnd: '2027-08-31' }
      },
      {
        id: 'nova',
        label: 'Nova Supervisor Agent',
        type: 'agent',
        subtitle: 'Mastra DAG Workflow',
        office: 'Nova AI Infrastructure',
        icon: Sparkles,
        x: 400,
        y: 50,
        color: '#ff6b00',
        activeOffice: 6,
        details: { workflow: 'journey-gap-workflow', confidence: '99.4%', tokensCleaned: '100% PII-free' }
      }
    ],
    edges: [
      { from: 'student', to: 'academic', label: 'Enrolled & Verified', status: 'verified', weight: '100%' },
      { from: 'student', to: 'lms', label: 'Telemetry Signal', status: 'amber', weight: 'Alert' },
      { from: 'student', to: 'tier4', label: 'CAS Compliance', status: 'verified', weight: 'Normal' },
      { from: 'student', to: 'employer', label: 'HMAC Work Clock', status: 'amber', weight: '16h / 20h' },
      { from: 'student', to: 'housing', label: 'Secured PBSA', status: 'verified', weight: 'Paid' },
      { from: 'student', to: 'nova', label: 'Realtime Inference', status: 'verified', weight: 'Live DAG' },
      { from: 'tier4', to: 'employer', label: 'Legal Hours Audit', status: 'verified', weight: 'Synchronized' },
      { from: 'nova', to: 'academic', label: 'Dossier Read', status: 'verified', weight: 'Read-only' },
      { from: 'nova', to: 'lms', label: 'Proactive Outreach', status: 'verified', weight: 'Automated' }
    ]
  },
  tariq: {
    id: 'tariq',
    name: 'Tariq Al-Mansoor',
    course: 'BSc Computer Systems',
    sitsId: '0091-9921',
    status: 'Full-Time · International Sponsored',
    summary: 'CAS renewal impending. Visa verification valid for 45 days. PBSA deposit held in Stripe escrow.',
    nodes: [
      {
        id: 'student',
        label: 'Tariq Al-Mansoor',
        type: 'student',
        subtitle: 'BSc Computer Systems',
        office: 'Canonical Identity',
        icon: GraduationCap,
        x: 400,
        y: 240,
        color: '#ff6b00',
        activeOffice: 1,
        details: { sitsId: '0091-9921', cas: 'E8810291B', campus: 'Whitechapel Tech Campus' }
      },
      {
        id: 'academic',
        label: 'CS-2040 Operating Systems',
        type: 'academic',
        subtitle: 'SITS:Vision · Grade A',
        office: 'Academic Registry',
        icon: Database,
        x: 180,
        y: 110,
        color: '#38bdf8',
        activeOffice: 1,
        details: { sitsCode: 'CS-2040', credits: 20, prereq: 'CS-1010 Pass', completion: '88%' }
      },
      {
        id: 'lms',
        label: 'Moodle 100% On-Track',
        type: 'lms',
        subtitle: 'Daily Check-in Logged',
        office: 'Learning Management',
        icon: Cpu,
        x: 170,
        y: 350,
        color: '#10b981',
        activeOffice: 2,
        details: { lastLogin: '1 hour ago', attendance: '98.5%', coursework: '5/5 Submitted' }
      },
      {
        id: 'tier4',
        label: 'UKVI CAS Renewal Queue',
        type: 'compliance',
        subtitle: 'Renewal Window: 45 Days',
        office: 'Tier-4 Compliance',
        icon: ShieldCheck,
        x: 620,
        y: 110,
        color: '#f59e0b',
        activeOffice: 4,
        details: { casNumber: 'E8810291B', expiryDate: '2026-11-15', renewalStatus: 'Eligible for Fast-Track' }
      },
      {
        id: 'employer',
        label: 'Deliveroo Courier Hours',
        type: 'employment',
        subtitle: '6.5h / 20.0h Logged',
        office: 'Student Employment',
        icon: Briefcase,
        x: 640,
        y: 340,
        color: '#c084fc',
        activeOffice: 3,
        details: { employer: 'Rider App (API)', weeklyHours: '6.5h', safeBuffer: '13.5h remaining' }
      },
      {
        id: 'housing',
        label: 'Scape Bloomsbury Escrow',
        type: 'housing',
        subtitle: 'Stripe Escrow · £290/wk',
        office: 'Accommodation Office',
        icon: Building,
        x: 400,
        y: 430,
        color: '#ec4899',
        activeOffice: 5,
        details: { escrowId: 'esc_4412', pbsaPartner: 'Scape Student Living', deposit: 'Protected' }
      },
      {
        id: 'nova',
        label: 'Nova Visa Extension Agent',
        type: 'agent',
        subtitle: 'Document Pre-Verification',
        office: 'Nova AI Infrastructure',
        icon: Sparkles,
        x: 400,
        y: 50,
        color: '#ff6b00',
        activeOffice: 6,
        details: { workflow: 'visa-check-workflow', status: 'Pre-check 100% Passed', evidencePacket: 'Ready' }
      }
    ],
    edges: [
      { from: 'student', to: 'academic', label: 'Verified Coursework', status: 'verified', weight: 'High' },
      { from: 'student', to: 'lms', label: 'Daily Activity Stream', status: 'verified', weight: 'Optimal' },
      { from: 'student', to: 'tier4', label: 'Renewal Gate Pending', status: 'amber', weight: '45d Warning' },
      { from: 'student', to: 'employer', label: 'Permitted Margin Check', status: 'verified', weight: 'Safe' },
      { from: 'student', to: 'housing', label: 'Escrow Confirmed', status: 'verified', weight: 'Valid' },
      { from: 'student', to: 'nova', label: 'Pre-Packaged Evidence', status: 'verified', weight: 'Active DAG' },
      { from: 'nova', to: 'tier4', label: 'Drafted CAS Packet', status: 'verified', weight: 'Ready for Staff' }
    ]
  }
};

const ACTIVATION_PHASES = [
  { level: 1, title: 'Phase 1: Academic Registry', desc: 'Connect SIS: SITS:Vision & Ellucian Banner' },
  { level: 2, title: 'Phase 2: Learning Systems', desc: 'Activate Moodle LMS & Canvas Engagement Telemetry' },
  { level: 3, title: 'Phase 3: Student Work', desc: 'Connect Living Payroll & UKVI 20h Work Margin HMACs' },
  { level: 4, title: 'Phase 4: Compliance', desc: 'Integrate UKVI Tier-4 Sponsor & CAS Registers' },
  { level: 5, title: 'Phase 5: PBSA Living', desc: 'Unify Stripe PBSA Escrows & Tenancy Verifications' },
  { level: 6, title: 'Phase 6: Nova Agents', desc: 'Deploy 30 Mastra Agents & 12 Deterministic DAGs' }
];

export default function AgentGraphVisualizer() {
  const [selectedStudentKey, setSelectedStudentKey] = useState('maya');
  const [activeOfficeLevel, setActiveOfficeLevel] = useState(6);
  const [selectedNodeId, setSelectedNodeId] = useState('student');

  const graphData = STUDENTS_GRAPH_DATA[selectedStudentKey];
  const selectedNode = graphData.nodes.find(n => n.id === selectedNodeId) || graphData.nodes[0];

  return (
    <div className="card-dark" style={{ border: '1px solid rgba(255, 107, 0, 0.25)', borderRadius: '16px', overflow: 'hidden', backgroundColor: '#0c0c12' }}>
      
      {/* Chrome Header */}
      <div style={{ padding: '16px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', backgroundColor: '#11111a', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444', display: 'inline-block' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f59e0b', display: 'inline-block' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block' }} />
          </div>
          <div>
            <div className="mono-label" style={{ color: 'var(--accent-orange)', fontSize: '10px' }}>
              AGENT GRAPH // LIVING OPERATIONAL MAP
            </div>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#ffffff' }}>
              Node-and-Edge Relational Graph Topology
            </div>
          </div>
        </div>

        {/* Student Switcher */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="mono-sm text-secondary" style={{ fontSize: '11px' }}>Inspect Subject:</span>
          {Object.keys(STUDENTS_GRAPH_DATA).map(key => {
            const s = STUDENTS_GRAPH_DATA[key];
            const isSelected = selectedStudentKey === key;
            return (
              <button
                key={key}
                onClick={() => {
                  setSelectedStudentKey(key);
                  setSelectedNodeId('student');
                }}
                style={{
                  padding: '5px 12px',
                  borderRadius: '6px',
                  fontSize: '11px',
                  fontWeight: '600',
                  fontFamily: 'var(--font-mono)',
                  backgroundColor: isSelected ? 'var(--accent-orange)' : '#191924',
                  color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                  border: isSelected ? '1px solid #ff6b00' : '1px solid rgba(255, 255, 255, 0.1)',
                  cursor: 'pointer'
                }}
              >
                {s.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Workspace */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', minHeight: '520px' }}>
        
        {/* SVG Graph Canvas */}
        <div style={{ position: 'relative', backgroundColor: '#07070b', overflow: 'hidden', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          
          {/* Subtle Grid Background */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              opacity: 0.7,
              pointerEvents: 'none'
            }}
          />

          <svg
            viewBox="0 0 800 500"
            style={{ width: '100%', height: '100%', maxHeight: '480px', position: 'relative', zIndex: 1 }}
          >
            <defs>
              <linearGradient id="edgeGradCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff6b00" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="edgeGradAmber" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff6b00" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="edgeGradEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff6b00" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="edgeGradPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff6b00" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#c084fc" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Connecting Edges */}
            {graphData.edges.map((edge, idx) => {
              const fromNode = graphData.nodes.find(n => n.id === edge.from);
              const toNode = graphData.nodes.find(n => n.id === edge.to);
              if (!fromNode || !toNode) return null;

              const isVisible = fromNode.activeOffice <= activeOfficeLevel && toNode.activeOffice <= activeOfficeLevel;
              if (!isVisible) return null;

              const isConnectedToSelected = selectedNodeId === edge.from || selectedNodeId === edge.to;

              return (
                <g key={idx}>
                  <line
                    x1={fromNode.x}
                    y1={fromNode.y}
                    x2={toNode.x}
                    y2={toNode.y}
                    stroke={isConnectedToSelected ? 'var(--accent-orange)' : 'rgba(255, 255, 255, 0.16)'}
                    strokeWidth={isConnectedToSelected ? '2.5' : '1.5'}
                    strokeDasharray={edge.status === 'amber' ? '4 3' : 'none'}
                    style={{ transition: 'all 0.3s ease' }}
                  />
                  {/* Midpoint Label Badge */}
                  <rect
                    x={(fromNode.x + toNode.x) / 2 - 40}
                    y={(fromNode.y + toNode.y) / 2 - 10}
                    width="80"
                    height="20"
                    rx="4"
                    fill="#0e0e16"
                    stroke={isConnectedToSelected ? 'rgba(255, 107, 0, 0.4)' : 'rgba(255, 255, 255, 0.08)'}
                  />
                  <text
                    x={(fromNode.x + toNode.x) / 2}
                    y={(fromNode.y + toNode.y) / 2 + 3}
                    textAnchor="middle"
                    fill={edge.status === 'amber' ? '#f59e0b' : '#9494a0'}
                    fontSize="8.5"
                    fontFamily="monospace"
                  >
                    {edge.weight}
                  </text>
                </g>
              );
            })}

            {/* Interactive Graph Nodes */}
            {graphData.nodes.map(node => {
              const isVisible = node.activeOffice <= activeOfficeLevel;
              const isSelected = selectedNodeId === node.id;
              const IconComp = node.icon;

              if (!isVisible) {
                return (
                  <g key={node.id} opacity="0.25">
                    <circle cx={node.x} cy={node.y} r="26" fill="#13131c" stroke="#252535" strokeWidth="1" strokeDasharray="3 3" />
                    <text x={node.x} y={node.y + 36} textAnchor="middle" fill="#686875" fontSize="9" fontFamily="monospace">
                      Office Inactive
                    </text>
                  </g>
                );
              }

              return (
                <g
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  style={{ cursor: 'pointer', transition: 'transform 0.2s ease' }}
                >
                  {/* Selection Pulsing Aura */}
                  {isSelected && (
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="34"
                      fill="none"
                      stroke={node.color}
                      strokeWidth="2"
                      opacity="0.4"
                    />
                  )}

                  {/* Main Node Circle */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="28"
                    fill="#13131c"
                    stroke={isSelected ? node.color : 'rgba(255, 255, 255, 0.18)'}
                    strokeWidth={isSelected ? '2.5' : '1.5'}
                    style={{ filter: isSelected ? `drop-shadow(0 0 12px ${node.color}66)` : 'none' }}
                  />

                  {/* Icon */}
                  <foreignObject x={node.x - 12} y={node.y - 12} width="24" height="24">
                    <div style={{ color: node.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <IconComp size={18} />
                    </div>
                  </foreignObject>

                  {/* Node Label Below */}
                  <text
                    x={node.x}
                    y={node.y + 42}
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="var(--font-heading)"
                  >
                    {node.label}
                  </text>
                  <text
                    x={node.x}
                    y={node.y + 54}
                    textAnchor="middle"
                    fill={node.color}
                    fontSize="9"
                    fontFamily="monospace"
                  >
                    {node.subtitle}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Bottom Overlay Principle Quote */}
          <div
            style={{
              position: 'absolute',
              bottom: '12px',
              left: '16px',
              backgroundColor: 'rgba(13, 13, 18, 0.88)',
              backdropFilter: 'blur(8px)',
              padding: '6px 12px',
              borderRadius: '6px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: '10.5px',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)'
            }}
          >
            CAMPUS PRINCIPLE: Turn on one more office, and every existing node gets richer.
          </div>
        </div>

        {/* Node Inspector & Office Activation Slider */}
        <div style={{ padding: '20px', borderLeft: '1px solid rgba(255, 255, 255, 0.08)', backgroundColor: '#0f0f17', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* Node Selected Card */}
          <div>
            <div className="flex-between mb-xs">
              <span className="mono-label" style={{ color: selectedNode.color, fontSize: '9px' }}>
                ACTIVE NODE INSPECTOR
              </span>
              <span className="pill pill-approved" style={{ fontSize: '8.5px' }}>
                LIVE TOPOLOGY
              </span>
            </div>
            <h4 style={{ fontSize: '15px', fontWeight: '800', margin: '2px 0 4px 0', color: '#ffffff' }}>
              {selectedNode.label}
            </h4>
            <div className="mono-sm text-secondary" style={{ fontSize: '11px', marginBottom: '12px' }}>
              Domain: {selectedNode.office}
            </div>

            {/* Properties Table */}
            <div style={{ backgroundColor: '#09090e', borderRadius: '8px', padding: '12px', border: '1px solid #1a1a26' }}>
              <div className="mono-sm text-muted mb-xs" style={{ fontSize: '9.5px' }}>
                METADATA PAYLOAD &amp; RELATIONS
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>
                {Object.entries(selectedNode.details).map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.04)', paddingBottom: '3px' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>{k}:</span>
                    <span style={{ color: '#ffffff', fontWeight: '600' }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Office Activation Stages */}
          <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px' }}>
            <div className="flex-between mb-xs">
              <span className="mono-label" style={{ color: 'var(--accent-cyan)', fontSize: '9px' }}>
                OFFICE ACTIVATION DEPTH
              </span>
              <span className="mono-sm" style={{ color: '#ffffff', fontSize: '10px' }}>
                {activeOfficeLevel} / 6 Offices
              </span>
            </div>

            <div style={{ display: 'flex', gap: '4px', marginBottom: '10px' }}>
              {ACTIVATION_PHASES.map((phase) => (
                <button
                  key={phase.level}
                  onClick={() => setActiveOfficeLevel(phase.level)}
                  style={{
                    flex: 1,
                    height: '24px',
                    borderRadius: '4px',
                    border: 'none',
                    backgroundColor: activeOfficeLevel >= phase.level ? 'var(--accent-orange)' : '#1c1c28',
                    color: activeOfficeLevel >= phase.level ? '#ffffff' : '#686875',
                    fontSize: '9.5px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  title={phase.title}
                >
                  P{phase.level}
                </button>
              ))}
            </div>

            <div style={{ fontSize: '11px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
              <strong>Current:</strong> {ACTIVATION_PHASES[activeOfficeLevel - 1].title}
              <div style={{ fontSize: '10px', color: '#9494a0', marginTop: '2px' }}>
                {ACTIVATION_PHASES[activeOfficeLevel - 1].desc}
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
