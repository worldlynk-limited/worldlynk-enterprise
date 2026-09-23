import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  QrCode,
  ShieldCheck,
  Database,
  Search,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Check,
  ExternalLink,
  ChevronRight,
  Filter,
  FileText,
  Lock,
  ArrowRight,
  Cpu,
  RefreshCw,
  Send,
  MessageSquare,
  Building,
  GraduationCap,
  Download,
  AlertCircle
} from 'lucide-react';

const COMPASS_BACKEND_URL = "https://uniportal-uq1p.onrender.com";

const INITIAL_MODULES = [
  {
    id: 'attendance',
    name: 'Dynamic QR Attendance Radar',
    shortCode: 'ATTEND',
    thesis: 'Sub-180ms rotating cryptographic tokens eliminate proxy check-ins and safeguard UKVI compliance automatically.',
    stats: '98.6% Real-Time Check-In Rate · Sub-180ms Token Lifespan · 0 Proxy Scans',
    queue: [
      { id: '1', student: 'Maya Chen', avatar: 'MC', course: 'MSc Data Science', signal: 'CS-5100 Absent (Lecture EB-02)', action: 'Makeup lab slot reserved; tutor alert drafted', evidence: 'Dynamic QR DB + Timetable', owner: 'Senior Tutor (Dr. Jenkins)', risk: 78, status: 'HELD', gpa: '3.72', sitsId: '0091-2847', cas: 'E2948102A', workHours: '16h', email: 'm.chen@rhul.ac.uk', phone: '+44 7700 900142', notes: 'Missed 2nd consecutive lecture. Work schedule cross-referenced: barista shift logged previous evening.', hash: 'sha256:8b4f7a2d...d1a9' },
      { id: '2', student: 'Liam O’Connor', avatar: 'LO', course: 'BSc Computer Science', signal: '3 Consecutive Absences Flagged', action: 'Triggered wellness outreach protocol', evidence: 'Live Attendance Worker #4', owner: 'Student Success (S. Patel)', risk: 89, status: 'HELD', gpa: '2.84', sitsId: '0084-3912', cas: 'Domestic UK', workHours: '0h', email: 'l.oconnor@rhul.ac.uk', phone: '+44 7700 900881', notes: 'Zero LMS logins in 7 days. Personal tutor notification staged.', hash: 'sha256:3c7efa21...fa21' },
      { id: '3', student: 'Zara Ahmed', avatar: 'ZA', course: 'MEng Robotics', signal: 'Late Check-in (Over 15m)', action: 'Recorded partial attendance per faculty policy', evidence: 'Rotated QR HMAC Timestamp', owner: 'Auto-System Log', risk: 24, status: 'SEALED', gpa: '3.91', sitsId: '0093-1104', cas: 'E2849102C', workHours: '8h', email: 'z.ahmed@rhul.ac.uk', phone: '+44 7700 900332', notes: 'Scanned at 09:16 with HMAC delta +16m. Faculty late rule auto-applied.', hash: 'sha256:1a9bce43...ce43' },
      { id: '4', student: 'Carlos Gomez', avatar: 'CG', course: 'BSc International Business', signal: 'Seminar Section Clashing', action: 'Shifted to Thursday morning lab group', evidence: 'SITS Timetable Sync', owner: 'Timetable Officer', risk: 32, status: 'APPROVED', gpa: '3.40', sitsId: '0089-4820', cas: 'E2049182D', workHours: '12h', email: 'c.gomez@rhul.ac.uk', phone: '+44 7700 900719', notes: 'Conflict resolved in SITS. Student notified via WhatsApp.', hash: 'sha256:9d4ebb72...bb72' }
    ]
  },
  {
    id: 'calendar',
    name: 'Calendar Intelligence & Workload Matrix',
    shortCode: 'CAL-INTEL',
    thesis: 'Unified 8-view calendar mapping across student timetables, assessment clusters, 20h UKVI work caps, and faculty office hours.',
    stats: '8 Institutional Views · Real-Time Clash Radar · Term-Time Cap Defense',
    queue: [
      { id: '14', student: 'Maya Chen', avatar: 'MC', course: 'MSc Data Science', signal: 'Assessment Clash: CS-5100 & CS-5200', action: 'Staged 48h staggered deadline proposal', evidence: 'Uniportal Calendar Matrix (Tab 4)', owner: 'Module Lead (Prof. Davis)', risk: 72, status: 'HELD', gpa: '3.72', sitsId: '0091-2847', cas: 'E2948102A', workHours: '16h', email: 'm.chen@rhul.ac.uk', phone: '+44 7700 900142', notes: 'Two major 40% courseworks scheduled for same Friday 17:00 deadline. Tutor extension ready.', hash: 'sha256:6e1b99a0...6e1b' },
      { id: '15', student: 'Tariq Hassan', avatar: 'TH', course: 'BSc Finance', signal: 'Exam Period Overload (3 in 36h)', action: 'Alternative exam session allocated', evidence: 'Exam Timetable Optimizer', owner: 'Registry Exam Lead', risk: 64, status: 'APPROVED', gpa: '2.95', sitsId: '0074-9912', cas: 'E3091841C', workHours: '14h', email: 't.hassan@rhul.ac.uk', phone: '+44 7700 900551', notes: 'Re-spaced Corporate Finance exam to Tuesday morning per university fairness guidelines.', hash: 'sha256:2d8c55f4...2d8c' }
    ]
  },
  {
    id: 'admissions',
    name: 'Admissions & CAS Intelligence',
    shortCode: 'CAS-ADM',
    thesis: 'Every international inquiry answered in seconds; transcripts pre-scored; CAS generation briefs ready for registrar seal.',
    stats: '1,420 Active Inquiries · 284 CAS Drafts Ready · 0 Summer Melt Blindspots',
    queue: [
      { id: '5', student: 'Jin-Woo Park', avatar: 'JP', course: 'BSc Software Eng', signal: 'Missing A-Level Math Equivalent', action: 'Drafted international NARIC equivalency brief', evidence: 'Transcripts PDF + Slate CRM', owner: 'Admissions Officer (K. Bell)', risk: 45, status: 'HELD', gpa: '3.65', sitsId: '0088-1249', cas: 'E1948201B', workHours: '0h', email: 'jw.park@applicant.ac.uk', phone: '+82 10 5555 0192', notes: 'Korean CSAT Mathematics score 138/140 evaluates to A* grade per UK ENIC.', hash: 'sha256:7f2a88e1...88e1' },
      { id: '6', student: 'Aisha Al-Mansoor', avatar: 'AM', course: 'MSc Artificial Intelligence', signal: 'CAS Sponsorship Stage', action: 'Financial maintenance 28-day bank audit passed', evidence: 'Barclays Statement + CAS Registry', owner: 'Compliance Lead (M. Thorne)', risk: 12, status: 'APPROVED', gpa: '3.88', sitsId: '0095-2018', cas: 'E3094819A', workHours: '0h', email: 'a.almansoor@rhul.ac.uk', phone: '+971 50 123 4567', notes: '£15,400 held continuously over 31 days. Ready for SMS Home Office upload.', hash: 'sha256:4e1b99a0...99a0' },
      { id: '7', student: 'Mateo Rossi', avatar: 'MR', course: 'BA Design & Media', signal: 'Offer Acceptance Follow-up', action: 'Drafted accommodation deposit reminder via WhatsApp', evidence: 'Applicant Portal + Stripe Hook', owner: 'Admissions Bot (Mastra)', risk: 38, status: 'SEALED', gpa: '3.20', sitsId: '0092-4819', cas: 'Domestic EU', workHours: '0h', email: 'm.rossi@rhul.ac.uk', phone: '+39 02 5555 1928', notes: 'Stripe deposit link generated with 7-day expiry.', hash: 'sha256:2d8c55f4...55f4' }
    ]
  },
  {
    id: 'retention',
    name: 'Retention & Early Risk Alerts',
    shortCode: 'RETENTION',
    thesis: 'AI risk models identify student disengagement 14 days before midterm failure by correlating LMS logins with lecture attendance.',
    stats: '4,200 Monitored Cohort · 32 Flagged for Tutor Check-In · 89% Retention Rate',
    queue: [
      { id: '8', student: 'Tariq Hassan', avatar: 'TH', course: 'BSc Finance', signal: 'LMS Inactivity for 120 Hours', action: 'Compiled course resource digest and study guide', evidence: 'Moodle AES-256 Client Sync', owner: 'Academic Advisor (J. Ward)', risk: 82, status: 'HELD', gpa: '2.95', sitsId: '0074-9912', cas: 'E3091841C', workHours: '14h', email: 't.hassan@rhul.ac.uk', phone: '+44 7700 900551', notes: 'No Moodle activity since last Tuesday. Quantitative Methods assignment overdue by 48h.', hash: 'sha256:5c9f11b2...11b2' },
      { id: '9', student: 'Elena Rostova', avatar: 'ER', course: 'MSc Data Analytics', signal: 'Assignment 1 Submission Missed', action: 'Drafted extension request questionnaire', evidence: 'Canvas LTI Gradebook', owner: 'Module Lead (Prof. Davis)', risk: 65, status: 'HELD', gpa: '3.50', sitsId: '0091-8841', cas: 'E2849102X', workHours: '10h', email: 'e.rostova@rhul.ac.uk', phone: '+44 7700 900994', notes: 'Submitted extenuating circumstances form. Medical verification requested.', hash: 'sha256:6a3b44c8...44c8' },
      { id: '10', student: 'Kwame Mensah', avatar: 'KM', course: 'BSc Economics', signal: 'Risk Score Improved (68 ➔ 92)', action: 'Archived intervention case as resolved', evidence: 'Risk Worker #2 Scoring Graph', owner: 'Student Success Desk', risk: 15, status: 'APPROVED', gpa: '3.62', sitsId: '0085-1928', cas: 'Domestic UK', workHours: '12h', email: 'k.mensah@rhul.ac.uk', phone: '+44 7700 900228', notes: 'Attended tutor office hour and completed 3 catch-up modules on Moodle.', hash: 'sha256:8e2c77d3...77d3' }
    ]
  },
  {
    id: 'compliance',
    name: 'UKVI Tier-4 Sponsor Shield',
    shortCode: 'UKVI-4',
    thesis: 'Continuous automated auditing of term-time employment against the 20-hour Home Office weekly work ceiling.',
    stats: '100% Sponsor License Safe · 0 Work-Cap Breaches · Real-Time Exception Radar',
    queue: [
      { id: '11', student: 'Maya Chen', avatar: 'MC', course: 'MSc Data Science', signal: '16h Work Shift Logged', action: 'Calendar conflict with lab resolved automatically', evidence: 'Shift Rota + Academic Calendar', owner: 'UKVI Officer (R. Taylor)', risk: 78, status: 'APPROVED', gpa: '3.72', sitsId: '0091-2847', cas: 'E2948102A', workHours: '16h', email: 'm.chen@rhul.ac.uk', phone: '+44 7700 900142', notes: 'Within legal 20h limit. Sunday overtime offer intercepted and rejected by Nova copilot.', hash: 'sha256:7e1a22d0...22d0' },
      { id: '12', student: 'David Kim', avatar: 'DK', course: 'MEng Mechanical Eng', signal: 'Approaching 19.5h Work Margin', action: 'Delivered legal threshold notice via Telegram', evidence: 'Work Calendar Feed (Stripe Pay)', owner: 'Compliance Officer (M. Thorne)', risk: 88, status: 'SEALED', gpa: '3.44', sitsId: '0087-9912', cas: 'E1948201Z', workHours: '19.5h', email: 'd.kim@rhul.ac.uk', phone: '+44 7700 900447', notes: 'Scheduled 19.5 hours at campus dining hall. Employer notified of 30-minute remaining legal ceiling.', hash: 'sha256:9a3d11c4...11c4' },
      { id: '13', student: 'Ananya Sharma', avatar: 'AS', course: 'LLM International Law', signal: 'Term-Time Break Transition', action: 'Activated full-time 40h vacation work allowance', evidence: 'University Term Dates Registry', owner: 'System Compliance Guard', risk: 10, status: 'APPROVED', gpa: '3.80', sitsId: '0094-1182', cas: 'E2849102Q', workHours: '0h', email: 'a.sharma@rhul.ac.uk', phone: '+44 7700 900663', notes: 'Official reading week verified. 40h work allowance unlocked until Oct 29.', hash: 'sha256:3f5c88a1...88a1' }
    ]
  }
];

export default function StaffOSPage() {
  const [modules, setModules] = useState(INITIAL_MODULES);
  const [selectedModuleId, setSelectedModuleId] = useState('attendance');
  const [selectedStudentId, setSelectedStudentId] = useState('1');
  const [filterTab, setFilterTab] = useState('all'); // all, held, approved, highRisk
  const [searchQuery, setSearchQuery] = useState('');
  const [dossierTab, setDossierTab] = useState('overview'); // overview, notes, audit
  const [interventionNote, setInterventionNote] = useState('');
  const [interventionChannel, setInterventionChannel] = useState('whatsapp');
  const [showLedgerModal, setShowLedgerModal] = useState(false);

  const selectedModule = modules.find(m => m.id === selectedModuleId) || modules[0];
  const allQueue = selectedModule.queue;

  const selectedStudent = allQueue.find(s => s.id === selectedStudentId) || allQueue[0];

  const filteredQueue = allQueue.filter(row => {
    const matchesSearch = row.student.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.signal.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.sitsId.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;
    if (filterTab === 'held') return row.status === 'HELD';
    if (filterTab === 'approved') return row.status === 'APPROVED' || row.status === 'SEALED';
    if (filterTab === 'highRisk') return row.risk > 70;
    return true;
  });

  const handleApproveStudent = (studentId) => {
    setModules(prev => prev.map(m => {
      if (m.id !== selectedModuleId) return m;
      return {
        ...m,
        queue: m.queue.map(s => s.id === studentId ? { ...s, status: 'APPROVED', hash: `sha256:${Math.random().toString(16).substring(2, 10)}...${Math.random().toString(16).substring(2, 6)}` } : s)
      };
    }));
  };

  const handleBatchApproveHeld = () => {
    setModules(prev => prev.map(m => {
      if (m.id !== selectedModuleId) return m;
      return {
        ...m,
        queue: m.queue.map(s => s.status === 'HELD' ? { ...s, status: 'APPROVED', hash: `sha256:${Math.random().toString(16).substring(2, 10)}...appr` } : s)
      };
    }));
  };

  const heldCount = allQueue.filter(s => s.status === 'HELD').length;
  const highRiskCount = allQueue.filter(s => s.risk > 70).length;

  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', backgroundColor: 'var(--wl-dark)', color: '#ffffff' }}>
      
      {/* ── TOP HERO HEADER ─────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '32px', borderBottom: '1px solid var(--border-hairline)' }}>
        <div className="main-container">
          <div className="flex-between flex-wrap gap-md">
            <div>
              <div className="mono-label" style={{ color: 'var(--accent-orange)', marginBottom: '8px' }}>
                STAFF OS // UNIPORTAL COMPASS OPERATIONS BENCH
              </div>
              <h1 className="headline-xl" style={{ marginBottom: '12px', lineHeight: 1.15 }}>
                High-throughput campus operations. Consequential decisions held for staff review.
              </h1>
              <p className="body-lg text-secondary" style={{ maxWidth: '780px' }}>
                Compass turns disjointed registrar, tutoring, and compliance emails into an unified operational queue. 22 Mastra agents monitor continuous telemetry, cross-reference institutional regulations, and assemble evidence briefs. Crucially, the Arbiter gate guarantees no consequential change occurs without named human authority.
              </p>
            </div>

            <div className="flex flex-col gap-sm" style={{ minWidth: '220px' }}>
              <div className="card-dark" style={{ padding: '16px', border: '1px solid var(--border-subtle)' }}>
                <div className="mono-label" style={{ color: 'var(--status-held)', fontSize: '10px' }}>OPERATIONS HEALTH</div>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', marginTop: '2px' }}>{heldCount} Held Actions</div>
                <div className="mono-sm text-secondary" style={{ fontSize: '11px' }}>{highRiskCount} High-Priority Signals</div>
              </div>
              <a
                href={COMPASS_BACKEND_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-primary btn-sm"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
              >
                <span>Launch Live Terminal</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN WORKBENCH ──────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: '32px' }}>
        <div className="main-container">

          {/* Module Selector Ribbon */}
          <div className="grid-4 mb-xl">
            {modules.map((m) => {
              const isSelected = selectedModuleId === m.id;
              const moduleHeld = m.queue.filter(q => q.status === 'HELD').length;
              return (
                <div
                  key={m.id}
                  onClick={() => {
                    setSelectedModuleId(m.id);
                    setSelectedStudentId(m.queue[0]?.id || '1');
                  }}
                  className={`card-dark ${isSelected ? 'card-selected' : ''}`}
                  style={{
                    padding: '16px',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    border: isSelected ? '2px solid var(--accent-orange)' : '1px solid var(--border-subtle)',
                    backgroundColor: isSelected ? '#161622' : '#101016',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div className="flex-between mb-xs">
                    <span className="mono-label" style={{ fontSize: '10px', color: isSelected ? 'var(--accent-orange)' : 'var(--text-muted)' }}>{m.shortCode}</span>
                    {moduleHeld > 0 ? (
                      <span className="pill pill-flagged" style={{ fontSize: '8.5px', padding: '1px 6px' }}>{moduleHeld} HELD</span>
                    ) : (
                      <span className="pill pill-approved" style={{ fontSize: '8.5px', padding: '1px 6px' }}>CLEAR</span>
                    )}
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: '700', color: '#ffffff', marginBottom: '4px' }}>{m.name}</div>
                  <div className="mono-sm text-secondary" style={{ fontSize: '10px', lineHeight: 1.3 }}>
                    {m.stats}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Queue Controls Bar */}
          <div className="flex-between flex-wrap gap-md mb-md" style={{ backgroundColor: '#13131a', padding: '12px 18px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
            <div className="flex gap-sm alignItems-center flex-wrap">
              <div style={{ position: 'relative', width: '260px' }}>
                <Search size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input
                  type="text"
                  placeholder="Filter by student, SITS, course..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '6px 10px 6px 30px',
                    backgroundColor: '#1a1a24',
                    border: '1px solid var(--border-hairline)',
                    borderRadius: '6px',
                    color: '#ffffff',
                    fontSize: '12px',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Filter Tabs */}
              <div className="flex gap-xs">
                {[
                  { id: 'all', label: `All (${allQueue.length})` },
                  { id: 'held', label: `Held for Review (${heldCount})` },
                  { id: 'highRisk', label: `High Risk (${highRiskCount})` },
                  { id: 'approved', label: 'Approved & Sealed' }
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFilterTab(f.id)}
                    className="tab-btn"
                    style={{
                      padding: '4px 10px',
                      fontSize: '11px',
                      backgroundColor: filterTab === f.id ? 'var(--accent-orange)' : '#191924',
                      color: filterTab === f.id ? '#ffffff' : 'var(--text-secondary)',
                      borderRadius: '6px',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-xs">
              <button
                onClick={handleBatchApproveHeld}
                disabled={heldCount === 0}
                className="btn-secondary btn-sm"
                style={{ fontSize: '11px', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <CheckCircle2 size={13} color="var(--accent-emerald)" />
                Batch Approve Held ({heldCount})
              </button>
              <button
                onClick={() => setShowLedgerModal(true)}
                className="btn-secondary btn-sm"
                style={{ fontSize: '11px', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <Lock size={13} color="var(--accent-cyan)" />
                Inspect SHA-256 Ledger
              </button>
            </div>
          </div>

          {/* Master-Detail Split Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '24px', alignItems: 'start' }}>
            
            {/* ── LEFT: INTERACTIVE HIGH-DENSITY QUEUE TABLE ── */}
            <div className="card-dark" style={{ padding: '0', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-subtle)' }}>
              <div className="flex-between" style={{ padding: '14px 18px', borderBottom: '1px solid var(--border-hairline)', backgroundColor: '#13131b' }}>
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>
                  ACTIVE QUEUE ({filteredQueue.length} ITEMS)
                </span>
                <span className="mono-sm text-muted" style={{ fontSize: '11px' }}>Click row to open dossier</span>
              </div>

              <div style={{ overflowX: 'auto' }}>
                <table className="queue-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '12px' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#101016', borderBottom: '1px solid var(--border-hairline)', color: 'var(--text-muted)' }}>
                      <th style={{ padding: '10px 14px' }}>STUDENT</th>
                      <th style={{ padding: '10px 14px' }}>TELEMETRY SIGNAL</th>
                      <th style={{ padding: '10px 14px' }}>RISK</th>
                      <th style={{ padding: '10px 14px' }}>STATE</th>
                      <th style={{ padding: '10px 14px', textAlign: 'right' }}>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredQueue.map((row) => {
                      const isSelected = selectedStudent?.id === row.id;
                      return (
                        <tr
                          key={row.id}
                          onClick={() => setSelectedStudentId(row.id)}
                          style={{
                            cursor: 'pointer',
                            backgroundColor: isSelected ? 'rgba(255, 107, 0, 0.08)' : 'transparent',
                            borderBottom: '1px solid var(--border-hairline)',
                            borderLeft: isSelected ? '3px solid var(--accent-orange)' : '3px solid transparent',
                            transition: 'all 0.15s ease'
                          }}
                        >
                          <td style={{ padding: '12px 14px' }}>
                            <div className="flex gap-xs alignItems-center">
                              <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#252533', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '10.5px', color: '#ffffff' }}>
                                {row.avatar}
                              </div>
                              <div>
                                <div style={{ fontWeight: '700', color: '#ffffff' }}>{row.student}</div>
                                <div className="mono-sm text-muted" style={{ fontSize: '9.5px' }}>{row.sitsId} · {row.course}</div>
                              </div>
                            </div>
                          </td>

                          <td style={{ padding: '12px 14px' }}>
                            <div style={{ color: '#ffffff', fontWeight: '600' }}>{row.signal}</div>
                            <div className="mono-sm text-secondary" style={{ fontSize: '9.5px' }}>{row.evidence}</div>
                          </td>

                          <td style={{ padding: '12px 14px' }}>
                            <div className="mono-sm" style={{ fontWeight: '800', color: row.risk > 70 ? 'var(--status-fail)' : row.risk > 40 ? 'var(--accent-orange)' : 'var(--status-pass)' }}>
                              {row.risk}%
                            </div>
                          </td>

                          <td style={{ padding: '12px 14px' }}>
                            <span className={`pill ${row.status === 'HELD' ? 'pill-held' : row.status === 'APPROVED' ? 'pill-approved' : 'pill-active'}`} style={{ fontSize: '9px' }}>
                              {row.status}
                            </span>
                          </td>

                          <td style={{ padding: '12px 14px', textAlign: 'right' }}>
                            {row.status === 'HELD' ? (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleApproveStudent(row.id);
                                }}
                                className="btn-primary btn-sm"
                                style={{ fontSize: '10px', padding: '3px 8px' }}
                              >
                                Approve ➔
                              </button>
                            ) : (
                              <span className="mono-sm" style={{ fontSize: '9px', color: 'var(--accent-emerald)' }}>
                                ✓ Sealed
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ── RIGHT: SELECTED STUDENT DOSSIER & ARBITER GATE ── */}
            {selectedStudent && (
              <div className="card-dark" style={{ padding: '24px', borderRadius: '12px', border: '1px solid var(--border-subtle)', backgroundColor: '#13131c' }}>
                <div className="flex-between mb-sm">
                  <div className="flex gap-sm alignItems-center">
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--accent-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '14px' }}>
                      {selectedStudent.avatar}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: '800', margin: 0 }}>{selectedStudent.student}</h3>
                      <div className="mono-sm text-secondary" style={{ fontSize: '10.5px' }}>{selectedStudent.course}</div>
                    </div>
                  </div>

                  <span className={`pill ${selectedStudent.status === 'HELD' ? 'pill-held' : 'pill-approved'}`}>
                    {selectedStudent.status}
                  </span>
                </div>

                {/* Sub-tabs for Dossier */}
                <div className="flex gap-xs mb-md" style={{ borderBottom: '1px solid var(--border-hairline)', paddingBottom: '8px' }}>
                  {['overview', 'notes', 'audit'].map((t) => (
                    <button
                      key={t}
                      onClick={() => setDossierTab(t)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: dossierTab === t ? 'var(--accent-orange)' : 'var(--text-muted)',
                        fontWeight: dossierTab === t ? '700' : '500',
                        fontSize: '11px',
                        cursor: 'pointer',
                        padding: '4px 8px',
                        borderBottom: dossierTab === t ? '2px solid var(--accent-orange)' : 'none'
                      }}
                    >
                      {t.toUpperCase()}
                    </button>
                  ))}
                </div>

                {/* TAB 1: OVERVIEW */}
                {dossierTab === 'overview' && (
                  <div className="flex flex-col gap-md">
                    {/* Key Attributes Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', backgroundColor: '#0d0d12', padding: '12px', borderRadius: '8px' }}>
                      <div className="mono-sm" style={{ fontSize: '10.5px' }}><strong>SITS ID:</strong> {selectedStudent.sitsId}</div>
                      <div className="mono-sm" style={{ fontSize: '10.5px' }}><strong>CAS NUMBER:</strong> {selectedStudent.cas}</div>
                      <div className="mono-sm" style={{ fontSize: '10.5px' }}><strong>CUMULATIVE GPA:</strong> {selectedStudent.gpa}</div>
                      <div className="mono-sm" style={{ fontSize: '10.5px' }}><strong>WORK LOGGED:</strong> {selectedStudent.workHours} / 20h</div>
                      <div className="mono-sm" style={{ fontSize: '10.5px' }}><strong>EMAIL:</strong> {selectedStudent.email}</div>
                      <div className="mono-sm" style={{ fontSize: '10.5px' }}><strong>CONTACT:</strong> {selectedStudent.phone}</div>
                    </div>

                    {/* Telemetry Evidence Box */}
                    <div style={{ backgroundColor: '#181822', padding: '14px', borderRadius: '10px', borderLeft: '3px solid var(--accent-orange)' }}>
                      <div className="mono-label" style={{ fontSize: '9px', color: 'var(--accent-orange)' }}>TELEMETRY EVIDENCE CHAIN</div>
                      <div style={{ fontSize: '12px', fontWeight: '700', marginTop: '2px' }}>{selectedStudent.signal}</div>
                      <p style={{ fontSize: '11.5px', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: 1.4 }}>
                        {selectedStudent.notes}
                      </p>
                      <div className="mono-sm text-muted mt-xs" style={{ fontSize: '9.5px' }}>
                        Source: {selectedStudent.evidence} · Verified by Cortex Risk Engine
                      </div>
                    </div>

                    {/* Pre-Drafted Action */}
                    <div style={{ backgroundColor: '#181822', padding: '14px', borderRadius: '10px', borderLeft: '3px solid var(--status-pass)' }}>
                      <div className="mono-label" style={{ fontSize: '9px', color: 'var(--status-pass)' }}>PRE-DRAFTED INTERVENTION (MASTRA AGENT)</div>
                      <p style={{ fontSize: '12px', color: '#ffffff', marginTop: '4px', lineHeight: 1.4 }}>
                        "{selectedStudent.action}"
                      </p>
                      <div className="mono-sm text-muted mt-xs" style={{ fontSize: '9.5px' }}>
                        Assigned Approver: {selectedStudent.owner}
                      </div>
                    </div>

                    {/* Arbiter Decision Buttons */}
                    {selectedStudent.status === 'HELD' ? (
                      <div className="flex gap-sm mt-xs">
                        <button
                          onClick={() => handleApproveStudent(selectedStudent.id)}
                          className="btn-primary"
                          style={{ flex: 1, padding: '10px', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                        >
                          <CheckCircle2 size={15} /> Approve &amp; Commit to SITS
                        </button>
                        <button
                          onClick={() => alert(`Escalated to Head of Department for: ${selectedStudent.student}`)}
                          className="btn-secondary"
                          style={{ padding: '10px', fontSize: '12px' }}
                        >
                          Escalate
                        </button>
                      </div>
                    ) : (
                      <div className="card-dark flex-between" style={{ padding: '10px 14px', border: '1px solid var(--status-pass-border)', backgroundColor: 'var(--status-pass-bg)' }}>
                        <div className="flex gap-xs alignItems-center">
                          <CheckCircle2 size={16} color="var(--status-pass)" />
                          <span style={{ fontSize: '11.5px', color: 'var(--status-pass)', fontWeight: '700' }}>Approved &amp; Written to SITS:Vision</span>
                        </div>
                        <span className="mono-sm text-muted" style={{ fontSize: '9.5px' }}>{selectedStudent.hash}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* TAB 2: INTERVENTION COMPOSER */}
                {dossierTab === 'notes' && (
                  <div className="flex flex-col gap-sm">
                    <span className="mono-label" style={{ fontSize: '9.5px' }}>DISPATCH DIRECT INTERVENTION NOTICE</span>
                    
                    {/* Delivery Channel Radio */}
                    <div className="flex gap-sm">
                      {[
                        { id: 'whatsapp', label: 'WhatsApp (Baileys)', icon: MessageSquare },
                        { id: 'email', label: 'Institutional Email', icon: FileText }
                      ].map((ch) => (
                        <button
                          key={ch.id}
                          onClick={() => setInterventionChannel(ch.id)}
                          style={{
                            flex: 1,
                            padding: '8px',
                            borderRadius: '6px',
                            backgroundColor: interventionChannel === ch.id ? 'var(--accent-orange)' : '#191924',
                            color: interventionChannel === ch.id ? '#ffffff' : 'var(--text-secondary)',
                            border: '1px solid var(--border-subtle)',
                            fontSize: '11px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '6px'
                          }}
                        >
                          <ch.icon size={13} />
                          {ch.label}
                        </button>
                      ))}
                    </div>

                    <textarea
                      rows={5}
                      placeholder={`Draft intervention message for ${selectedStudent.student}...`}
                      value={interventionNote || `Dear ${selectedStudent.student},\n\nWe noted your recent absence for ${selectedStudent.signal}. We have reserved a makeup lab session and would like to invite you for a brief check-in with Dr. Jenkins.\n\nPlease reply to confirm your attendance.`}
                      onChange={(e) => setInterventionNote(e.target.value)}
                      style={{
                        width: '100%',
                        backgroundColor: '#0a0a0f',
                        border: '1px solid #2a2a38',
                        borderRadius: '8px',
                        padding: '10px',
                        color: '#ffffff',
                        fontSize: '11.5px',
                        fontFamily: 'inherit',
                        lineHeight: 1.5,
                        outline: 'none'
                      }}
                    />

                    <button
                      onClick={() => {
                        alert(`Intervention dispatched to ${selectedStudent.student} via ${interventionChannel}!`);
                        handleApproveStudent(selectedStudent.id);
                      }}
                      className="btn-primary btn-sm"
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                    >
                      <Send size={13} /> Dispatch Message &amp; Seal Case
                    </button>
                  </div>
                )}

                {/* TAB 3: AUDIT TRAIL */}
                {dossierTab === 'audit' && (
                  <div className="flex flex-col gap-xs">
                    <span className="mono-label" style={{ fontSize: '9.5px', color: 'var(--accent-cyan)' }}>CRYPTOGRAPHIC AUDIT LINEAGE</span>
                    <div className="mono-sm" style={{ backgroundColor: '#0a0a0f', padding: '12px', borderRadius: '8px', fontSize: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <div><strong>RECORD ID:</strong> sits_rec_{selectedStudent.sitsId}</div>
                      <div><strong>ORIGINATING SIGNAL:</strong> {selectedStudent.evidence}</div>
                      <div><strong>ARBITER GATE:</strong> Tier-4 Consequential Rule #44</div>
                      <div><strong>AUDIT HASH:</strong> {selectedStudent.hash}</div>
                      <div><strong>TIMESTAMP:</strong> 2026-09-23T09:12:08.412Z</div>
                      <div><strong>STATUS:</strong> {selectedStudent.status === 'HELD' ? 'Awaiting Named Staff Seal' : 'Cryptographically Committed'}</div>
                    </div>
                  </div>
                )}

              </div>
            )}

          </div>

        </div>
      </section>

      {/* ── MODAL: SHA-256 AUDIT LEDGER ───────────────────────────── */}
      {showLedgerModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.8)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: '#13131a',
            border: '1px solid var(--border-subtle)',
            borderRadius: '16px',
            maxWidth: '780px',
            width: '100%',
            padding: '28px',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.9)'
          }}>
            <div className="flex-between mb-md">
              <div>
                <span className="mono-label" style={{ color: 'var(--accent-cyan)' }}>CRYPTOGRAPHIC INTEGRITY LEDGER</span>
                <h3 className="headline-sm" style={{ marginTop: '2px' }}>Immutable Write-Back Stream to SITS:Vision</h3>
              </div>
              <button onClick={() => setShowLedgerModal(false)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
            </div>

            <p className="body-sm text-secondary mb-md">
              Every staff intervention approved through the Arbiter gate generates a tamper-evident SHA-256 block that is committed bi-directionally to the institution's student information system.
            </p>

            <div style={{ maxHeight: '320px', overflowY: 'auto', backgroundColor: '#0a0a0f', borderRadius: '10px', padding: '12px', border: '1px solid #222230', marginBottom: '20px' }}>
              <div className="mono-sm" style={{ fontSize: '10.5px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {allQueue.map((s, i) => (
                  <div key={i} style={{ borderBottom: '1px solid #1a1a24', paddingBottom: '6px' }}>
                    <span style={{ color: 'var(--accent-orange)' }}>{s.hash}</span> · <span style={{ color: '#ffffff' }}>{s.student}</span> ({s.sitsId}) ➔ <span style={{ color: 'var(--accent-emerald)' }}>{s.status}</span>
                    <div style={{ color: 'var(--text-muted)', fontSize: '9.5px' }}>Action: {s.action} · Signer: {s.owner}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-sm">
              <button onClick={() => setShowLedgerModal(false)} className="btn-secondary btn-sm">
                Close
              </button>
              <button onClick={() => { alert('Exported UKVI Audit CSV'); setShowLedgerModal(false); }} className="btn-primary btn-sm">
                Export Audit Log (.CSV) ➔
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
