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
    name: 'Student Attendance',
    shortCode: 'ATTEND',
    thesis: 'QR check-ins verify student attendance in real time and flag absences before they become critical.',
    stats: '98.6% On-Time Check-Ins · Zero Proxy Scans · Real-Time Sync',
    queue: [
      { id: '1', student: 'Maya Chen', avatar: 'MC', photo: '/images/aspiring_student.jpg', course: 'MSc Data Science', signal: 'Missed Lecture (CS-5100, EB-02)', action: 'Makeup lab slot reserved; tutor alert drafted', evidence: 'Attendance Log + Timetable', owner: 'Senior Tutor (Dr. Jenkins)', risk: 78, status: 'HELD', gpa: '3.72', sitsId: '0091-2847', cas: 'E2948102A', workHours: '16h', email: 'm.chen@rhul.ac.uk', phone: '+44 7700 900142', notes: 'Missed 2nd consecutive lecture. Work schedule cross-referenced: barista shift logged previous evening.', hash: 'rec_8b4f7a2d' },
      { id: '2', student: 'Liam O’Connor', avatar: 'LO', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80', course: 'BSc Computer Science', signal: '3 Consecutive Absences Flagged', action: 'Triggered wellness check-in outreach', evidence: 'Attendance Records', owner: 'Student Success (S. Patel)', risk: 89, status: 'HELD', gpa: '2.84', sitsId: '0084-3912', cas: 'Domestic UK', workHours: '0h', email: 'l.oconnor@rhul.ac.uk', phone: '+44 7700 900881', notes: 'Zero learning portal logins in 7 days. Personal tutor notification prepared.', hash: 'rec_3c7efa21' },
      { id: '3', student: 'Zara Ahmed', avatar: 'ZA', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80', course: 'MEng Robotics', signal: 'Late Check-in (Over 15m)', action: 'Recorded partial attendance per faculty policy', evidence: 'Classroom QR Timestamp', owner: 'System Auto-Rule', risk: 24, status: 'APPROVED', gpa: '3.91', sitsId: '0093-1104', cas: 'E2849102C', workHours: '8h', email: 'z.ahmed@rhul.ac.uk', phone: '+44 7700 900332', notes: 'Scanned 16 minutes after lecture start. Standard faculty late policy applied.', hash: 'rec_1a9bce43' },
      { id: '4', student: 'Carlos Gomez', avatar: 'CG', photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80', course: 'BSc International Business', signal: 'Seminar Section Clashing', action: 'Shifted to Thursday morning lab group', evidence: 'Timetable Sync', owner: 'Timetable Officer', risk: 32, status: 'APPROVED', gpa: '3.40', sitsId: '0089-4820', cas: 'E2049182D', workHours: '12h', email: 'c.gomez@rhul.ac.uk', phone: '+44 7700 900719', notes: 'Conflict resolved in records system. Student notified via WhatsApp.', hash: 'rec_9d4ebb72' }
    ]
  },
  {
    id: 'calendar',
    name: 'Timetables & Workload',
    shortCode: 'SCHEDULE',
    thesis: 'Brings together timetables, upcoming coursework deadlines, student work hours, and tutor office hours into one view.',
    stats: 'Unified Calendar · Automatic Clash Detection · Work Cap Alerts',
    queue: [
      { id: '14', student: 'Maya Chen', avatar: 'MC', photo: '/images/aspiring_student.jpg', course: 'MSc Data Science', signal: 'Assessment Clash: CS-5100 & CS-5200', action: 'Staged 48h staggered deadline proposal', evidence: 'Course Timetable Matrix', owner: 'Module Lead (Prof. Davis)', risk: 72, status: 'HELD', gpa: '3.72', sitsId: '0091-2847', cas: 'E2948102A', workHours: '16h', email: 'm.chen@rhul.ac.uk', phone: '+44 7700 900142', notes: 'Two major 40% courseworks scheduled for same Friday 17:00 deadline. Tutor extension ready.', hash: 'rec_6e1b99a0' },
      { id: '15', student: 'Tariq Hassan', avatar: 'TH', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80', course: 'BSc Finance', signal: 'Exam Period Overload (3 in 36h)', action: 'Alternative exam session allocated', evidence: 'Exam Timetable Optimizer', owner: 'Registry Exam Lead', risk: 64, status: 'APPROVED', gpa: '2.95', sitsId: '0074-9912', cas: 'E3091841C', workHours: '14h', email: 't.hassan@rhul.ac.uk', phone: '+44 7700 900551', notes: 'Re-spaced Corporate Finance exam to Tuesday morning per university fairness guidelines.', hash: 'rec_2d8c55f4' }
    ]
  },
  {
    id: 'admissions',
    name: 'Admissions & Visa Support',
    shortCode: 'ADMISSIONS',
    thesis: 'Answers applicant questions 24/7, organizes transcripts, and prepares visa paperwork for staff review.',
    stats: '1,420 Inquiries Handled · 284 Visa Drafts Ready · Instant Responses',
    queue: [
      { id: '5', student: 'Jin-Woo Park', avatar: 'JP', photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80', course: 'BSc Software Eng', signal: 'Missing A-Level Math Equivalent', action: 'Drafted international qualification equivalence brief', evidence: 'Transcripts PDF + CRM', owner: 'Admissions Officer (K. Bell)', risk: 45, status: 'HELD', gpa: '3.65', sitsId: '0088-1249', cas: 'E1948201B', workHours: '0h', email: 'jw.park@applicant.ac.uk', phone: '+82 10 5555 0192', notes: 'Korean CSAT Mathematics score 138/140 evaluates to A* grade per UK ENIC guidance.', hash: 'rec_7f2a88e1' },
      { id: '6', student: 'Aisha Al-Mansoor', avatar: 'AM', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80', course: 'MSc Artificial Intelligence', signal: 'CAS Visa Sponsorship Stage', action: 'Financial maintenance 28-day bank audit passed', evidence: 'Bank Statement + CAS Registry', owner: 'Compliance Lead (M. Thorne)', risk: 12, status: 'APPROVED', gpa: '3.88', sitsId: '0095-2018', cas: 'E3094819A', workHours: '0h', email: 'a.almansoor@rhul.ac.uk', phone: '+971 50 123 4567', notes: '£15,400 held continuously over 31 days. Ready for official visa system upload.', hash: 'rec_4e1b99a0' },
      { id: '7', student: 'Mateo Rossi', avatar: 'MR', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80', course: 'BA Design & Media', signal: 'Offer Acceptance Follow-up', action: 'Drafted accommodation deposit reminder via WhatsApp', evidence: 'Applicant Portal + Payment Link', owner: 'Admissions Assistant', risk: 38, status: 'APPROVED', gpa: '3.20', sitsId: '0092-4819', cas: 'Domestic EU', workHours: '0h', email: 'm.rossi@rhul.ac.uk', phone: '+39 02 5555 1928', notes: 'Secure deposit link generated with 7-day expiry.', hash: 'rec_2d8c55f4' }
    ]
  },
  {
    id: 'retention',
    name: 'Student Retention & Care',
    shortCode: 'CARE',
    thesis: 'Spots when students fall behind on attendance or coursework weeks early so advisors can check in quickly.',
    stats: '4,200 Students Supported · 32 Suggested Check-Ins · 89% Retention Rate',
    queue: [
      { id: '8', student: 'Tariq Hassan', avatar: 'TH', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80', course: 'BSc Finance', signal: 'No Learning Portal Activity in 5 Days', action: 'Compiled course resource digest and study guide', evidence: 'Learning Management System Sync', owner: 'Academic Advisor (J. Ward)', risk: 82, status: 'HELD', gpa: '2.95', sitsId: '0074-9912', cas: 'E3091841C', workHours: '14h', email: 't.hassan@rhul.ac.uk', phone: '+44 7700 900551', notes: 'No portal activity since last Tuesday. Quantitative Methods assignment overdue by 48h.', hash: 'rec_5c9f11b2' },
      { id: '9', student: 'Elena Rostova', avatar: 'ER', photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', course: 'MSc Data Analytics', signal: 'Coursework Deadline Missed', action: 'Drafted extension request questionnaire', evidence: 'Canvas Gradebook', owner: 'Module Lead (Prof. Davis)', risk: 65, status: 'HELD', gpa: '3.50', sitsId: '0091-8841', cas: 'E2849102X', workHours: '10h', email: 'e.rostova@rhul.ac.uk', phone: '+44 7700 900994', notes: 'Submitted extenuating circumstances form. Medical verification requested.', hash: 'rec_6a3b44c8' },
      { id: '10', student: 'Kwame Mensah', avatar: 'KM', photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80', course: 'BSc Economics', signal: 'Attendance & Grades Recovered', action: 'Archived check-in case as resolved', evidence: 'Attendance & Portal Activity', owner: 'Student Success Desk', risk: 15, status: 'APPROVED', gpa: '3.62', sitsId: '0085-1928', cas: 'Domestic UK', workHours: '12h', email: 'k.mensah@rhul.ac.uk', phone: '+44 7700 900228', notes: 'Attended tutor office hour and completed 3 catch-up modules.', hash: 'rec_8e2c77d3' }
    ]
  },
  {
    id: 'compliance',
    name: 'Visa Work Hours & Compliance',
    shortCode: 'VISA-COMPLY',
    thesis: 'Helps international students track their legal 20-hour weekly work cap and avoid accidental visa breaches.',
    stats: '100% Audit-Ready · Zero Work-Hour Breaches · Instant Staff Alerts',
    queue: [
      { id: '11', student: 'Maya Chen', avatar: 'MC', photo: '/images/aspiring_student.jpg', course: 'MSc Data Science', signal: '16h Work Shift Logged', action: 'Calendar conflict with lab resolved automatically', evidence: 'Shift Rota + Academic Calendar', owner: 'Visa Compliance Officer', risk: 78, status: 'APPROVED', gpa: '3.72', sitsId: '0091-2847', cas: 'E2948102A', workHours: '16h', email: 'm.chen@rhul.ac.uk', phone: '+44 7700 900142', notes: 'Within legal 20h limit. Extra shift offer flagged to protect student coursework time.', hash: 'rec_7e1a22d0' },
      { id: '12', student: 'David Kim', avatar: 'DK', photo: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=400&q=80', course: 'MEng Mechanical Eng', signal: 'Approaching 19.5h Work Margin', action: 'Delivered work limit notice via message', evidence: 'Student Work Calendar Feed', owner: 'Compliance Officer (M. Thorne)', risk: 88, status: 'APPROVED', gpa: '3.44', sitsId: '0087-9912', cas: 'E1948201Z', workHours: '19.5h', email: 'd.kim@rhul.ac.uk', phone: '+44 7700 900447', notes: 'Scheduled 19.5 hours at campus dining hall. Student notified of 30-minute remaining legal limit.', hash: 'rec_9a3d11c4' },
      { id: '13', student: 'Ananya Sharma', avatar: 'AS', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80', course: 'LLM International Law', signal: 'Term Break Started', action: 'Activated full-time vacation work allowance', evidence: 'University Term Dates Registry', owner: 'Compliance System Guard', risk: 10, status: 'APPROVED', gpa: '3.80', sitsId: '0094-1182', cas: 'E2849102Q', workHours: '0h', email: 'a.sharma@rhul.ac.uk', phone: '+44 7700 900663', notes: 'Official reading week verified. Vacation work allowance active until Oct 29.', hash: 'rec_3f5c88a1' }
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
        queue: m.queue.map(s => s.id === studentId ? { ...s, status: 'APPROVED', hash: `rec_${Math.random().toString(16).substring(2, 10)}` } : s)
      };
    }));
  };

  const handleBatchApproveHeld = () => {
    setModules(prev => prev.map(m => {
      if (m.id !== selectedModuleId) return m;
      return {
        ...m,
        queue: m.queue.map(s => s.status === 'HELD' ? { ...s, status: 'APPROVED', hash: `rec_${Math.random().toString(16).substring(2, 10)}` } : s)
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
                STAFF PORTAL // COMPASS
              </div>
              <h1 className="headline-xl" style={{ marginBottom: '12px', lineHeight: 1.15 }}>
                One clear dashboard for campus staff. You always stay in control.
              </h1>
              <p className="body-lg text-secondary" style={{ maxWidth: '780px' }}>
                Compass turns fragmented student emails and portal requests into one organized inbox. AI assistants draft replies, verify requirements, and flag urgent cases. Staff review and approve every key action before anything is sent.
              </p>
            </div>

            <div className="flex flex-col gap-sm" style={{ minWidth: '220px' }}>
              <div className="card-dark" style={{ padding: '16px', border: '1px solid var(--border-subtle)' }}>
                <div className="mono-label" style={{ color: 'var(--status-held)', fontSize: '10px' }}>ACTIONS AWAITING REVIEW</div>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', marginTop: '2px' }}>{heldCount} Pending Staff Review</div>
                <div className="mono-sm text-secondary" style={{ fontSize: '11px' }}>{highRiskCount} High Priority</div>
              </div>
              <a
                href={COMPASS_BACKEND_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-primary btn-sm"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
              >
                <span>Launch Compass Portal</span>
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
              <div style={{ position: 'relative', width: '260px', maxWidth: '100%' }}>
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
              <div className="flex gap-xs flex-wrap">
                {[
                  { id: 'all', label: `All (${allQueue.length})` },
                  { id: 'held', label: `Needs Review (${heldCount})` },
                  { id: 'highRisk', label: `High Priority (${highRiskCount})` },
                  { id: 'approved', label: 'Approved & Completed' }
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

            <div className="flex gap-xs flex-wrap">
              <button
                onClick={handleBatchApproveHeld}
                disabled={heldCount === 0}
                className="btn-secondary btn-sm"
                style={{ fontSize: '11px', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <CheckCircle2 size={13} color="var(--accent-emerald)" />
                Approve All Reviewed ({heldCount})
              </button>
              <button
                onClick={() => setShowLedgerModal(true)}
                className="btn-secondary btn-sm"
                style={{ fontSize: '11px', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <Lock size={13} color="var(--accent-cyan)" />
                View Activity Log
              </button>
            </div>
          </div>

          {/* Master-Detail Split Grid */}
          <div className="responsive-grid-split">
            
            {/* ── LEFT: INTERACTIVE HIGH-DENSITY QUEUE TABLE ── */}
            <div className="card-dark" style={{ padding: '0', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-subtle)' }}>
              <div className="flex-between" style={{ padding: '14px 18px', borderBottom: '1px solid var(--border-hairline)', backgroundColor: '#13131b' }}>
                <span className="mono-label" style={{ color: 'var(--accent-orange)' }}>
                  ACTIVE INBOX ({filteredQueue.length} ITEMS)
                </span>
                <span className="mono-sm text-muted" style={{ fontSize: '11px' }}>Click row to view details</span>
              </div>

              <div style={{ overflowX: 'auto' }}>
                <table className="queue-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '12px' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#101016', borderBottom: '1px solid var(--border-hairline)', color: 'var(--text-muted)' }}>
                      <th style={{ padding: '10px 14px' }}>STUDENT</th>
                      <th style={{ padding: '10px 14px' }}>UPDATE / REASON</th>
                      <th style={{ padding: '10px 14px' }}>URGENCY</th>
                      <th style={{ padding: '10px 14px' }}>STATUS</th>
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
                              {row.photo ? (
                                <img
                                  src={row.photo}
                                  alt={row.student}
                                  style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--border-subtle)' }}
                                />
                              ) : (
                                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#252533', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '10.5px', color: '#ffffff' }}>
                                  {row.avatar}
                                </div>
                              )}
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
                              {row.status === 'HELD' ? 'NEEDS REVIEW' : 'APPROVED'}
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
                                ✓ Approved
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

            {/* ── RIGHT: SELECTED STUDENT DOSSIER & REVIEW PANEL ── */}
            {selectedStudent && (
              <div className="card-dark" style={{ padding: '24px', borderRadius: '12px', border: '1px solid var(--border-subtle)', backgroundColor: '#13131c' }}>
                <div className="flex-between mb-sm">
                  <div className="flex gap-sm alignItems-center">
                    {selectedStudent.photo ? (
                      <img
                        src={selectedStudent.photo}
                        alt={selectedStudent.student}
                        style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--accent-orange)' }}
                      />
                    ) : (
                      <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--accent-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '15px' }}>
                        {selectedStudent.avatar}
                      </div>
                    )}
                    <div>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: '800', margin: 0 }}>{selectedStudent.student}</h3>
                      <div className="mono-sm text-secondary" style={{ fontSize: '10.5px' }}>{selectedStudent.course}</div>
                    </div>
                  </div>

                  <span className={`pill ${selectedStudent.status === 'HELD' ? 'pill-held' : 'pill-approved'}`}>
                    {selectedStudent.status === 'HELD' ? 'NEEDS REVIEW' : 'APPROVED'}
                  </span>
                </div>

                {/* Sub-tabs for Dossier */}
                <div className="flex gap-xs mb-md" style={{ borderBottom: '1px solid var(--border-hairline)', paddingBottom: '8px' }}>
                  {[
                    { id: 'overview', label: 'OVERVIEW' },
                    { id: 'notes', label: 'MESSAGE STUDENT' },
                    { id: 'audit', label: 'AUDIT LOG' }
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setDossierTab(t.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: dossierTab === t.id ? 'var(--accent-orange)' : 'var(--text-muted)',
                        fontWeight: dossierTab === t.id ? '700' : '500',
                        fontSize: '11px',
                        cursor: 'pointer',
                        padding: '4px 8px',
                        borderBottom: dossierTab === t.id ? '2px solid var(--accent-orange)' : 'none'
                      }}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                {/* TAB 1: OVERVIEW */}
                {dossierTab === 'overview' && (
                  <div className="flex flex-col gap-md">
                    {/* Key Attributes Grid */}
                    <div className="grid-2 gap-sm" style={{ backgroundColor: '#0d0d12', padding: '12px', borderRadius: '8px' }}>
                      <div className="mono-sm" style={{ fontSize: '10.5px' }}><strong>STUDENT ID:</strong> {selectedStudent.sitsId}</div>
                      <div className="mono-sm" style={{ fontSize: '10.5px' }}><strong>VISA / CAS:</strong> {selectedStudent.cas}</div>
                      <div className="mono-sm" style={{ fontSize: '10.5px' }}><strong>CURRENT GPA:</strong> {selectedStudent.gpa}</div>
                      <div className="mono-sm" style={{ fontSize: '10.5px' }}><strong>WORK LOGGED:</strong> {selectedStudent.workHours} / 20h limit</div>
                      <div className="mono-sm" style={{ fontSize: '10.5px' }}><strong>EMAIL:</strong> {selectedStudent.email}</div>
                      <div className="mono-sm" style={{ fontSize: '10.5px' }}><strong>PHONE:</strong> {selectedStudent.phone}</div>
                    </div>

                    {/* What happened box */}
                    <div style={{ backgroundColor: '#181822', padding: '14px', borderRadius: '10px', borderLeft: '3px solid var(--accent-orange)' }}>
                      <div className="mono-label" style={{ fontSize: '9px', color: 'var(--accent-orange)' }}>WHAT HAPPENED</div>
                      <div style={{ fontSize: '12px', fontWeight: '700', marginTop: '2px' }}>{selectedStudent.signal}</div>
                      <p style={{ fontSize: '11.5px', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: 1.4 }}>
                        {selectedStudent.notes}
                      </p>
                      <div className="mono-sm text-muted mt-xs" style={{ fontSize: '9.5px' }}>
                        Source: {selectedStudent.evidence} · Verified by WorldLynk Assistant
                      </div>
                    </div>

                    {/* Pre-Drafted Action */}
                    <div style={{ backgroundColor: '#181822', padding: '14px', borderRadius: '10px', borderLeft: '3px solid var(--status-pass)' }}>
                      <div className="mono-label" style={{ fontSize: '9px', color: 'var(--status-pass)' }}>RECOMMENDED ACTION (PRE-DRAFTED)</div>
                      <p style={{ fontSize: '12px', color: '#ffffff', marginTop: '4px', lineHeight: 1.4 }}>
                        "{selectedStudent.action}"
                      </p>
                      <div className="mono-sm text-muted mt-xs" style={{ fontSize: '9.5px' }}>
                        Assigned Reviewer: {selectedStudent.owner}
                      </div>
                    </div>

                    {/* Decision Buttons */}
                    {selectedStudent.status === 'HELD' ? (
                      <div className="flex gap-sm mt-xs">
                        <button
                          onClick={() => handleApproveStudent(selectedStudent.id)}
                          className="btn-primary"
                          style={{ flex: 1, padding: '10px', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                        >
                          <CheckCircle2 size={15} /> Approve &amp; Sync with Records
                        </button>
                        <button
                          onClick={() => alert(`Escalated case for: ${selectedStudent.student}`)}
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
                          <span style={{ fontSize: '11.5px', color: 'var(--status-pass)', fontWeight: '700' }}>Approved &amp; Synced to Student Records</span>
                        </div>
                        <span className="mono-sm text-muted" style={{ fontSize: '9.5px' }}>{selectedStudent.hash}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* TAB 2: INTERVENTION COMPOSER */}
                {dossierTab === 'notes' && (
                  <div className="flex flex-col gap-sm">
                    <span className="mono-label" style={{ fontSize: '9.5px' }}>SEND DIRECT MESSAGE TO STUDENT</span>
                    
                    {/* Delivery Channel Radio */}
                    <div className="flex gap-sm">
                      {[
                        { id: 'whatsapp', label: 'WhatsApp', icon: MessageSquare },
                        { id: 'email', label: 'University Email', icon: FileText }
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
                      placeholder={`Draft message for ${selectedStudent.student}...`}
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
                        alert(`Message dispatched to ${selectedStudent.student} via ${interventionChannel}!`);
                        handleApproveStudent(selectedStudent.id);
                      }}
                      className="btn-primary btn-sm"
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                    >
                      <Send size={13} /> Send Message &amp; Resolve Case
                    </button>
                  </div>
                )}

                {/* TAB 3: AUDIT TRAIL */}
                {dossierTab === 'audit' && (
                  <div className="flex flex-col gap-xs">
                    <span className="mono-label" style={{ fontSize: '9.5px', color: 'var(--accent-cyan)' }}>ACTIVITY &amp; AUDIT TRAIL</span>
                    <div className="mono-sm" style={{ backgroundColor: '#0a0a0f', padding: '12px', borderRadius: '8px', fontSize: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <div><strong>RECORD ID:</strong> rec_{selectedStudent.sitsId}</div>
                      <div><strong>ORIGINATING SOURCE:</strong> {selectedStudent.evidence}</div>
                      <div><strong>POLICY RULE:</strong> Requires Named Staff Approval</div>
                      <div><strong>SYSTEM REF:</strong> {selectedStudent.hash}</div>
                      <div><strong>TIMESTAMP:</strong> 2026-09-23 09:12 UTC</div>
                      <div><strong>STATUS:</strong> {selectedStudent.status === 'HELD' ? 'Awaiting Staff Review' : 'Approved and Synced'}</div>
                    </div>
                  </div>
                )}

              </div>
            )}

          </div>

        </div>
      </section>

      {/* ── LIVE LAUNCH CALL TO ACTION ──────────────────────────────── */}
      <section className="section" style={{ paddingTop: '16px', paddingBottom: '64px' }}>
        <div className="main-container">
          <div className="card-glass glow-orange" style={{ padding: '36px', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <div className="mono-label" style={{ color: 'var(--accent-orange)' }}>READY TO EMPOWER YOUR STAFF?</div>
              <h2 className="headline-md" style={{ marginTop: '4px', marginBottom: '8px' }}>Bring Compass to your university teams.</h2>
              <p className="body-sm text-secondary" style={{ maxWidth: '640px' }}>
                Cut peak-season backlogs, keep visa tracking audit-ready, and give advisors hours back each week—all while staff retain 100% control over decisions.
              </p>
            </div>
            <div className="flex gap-md" style={{ flexWrap: 'wrap' }}>
              <a href={COMPASS_BACKEND_URL} target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '0.85rem 1.6rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <span>Launch Compass Portal</span>
                <ExternalLink size={15} />
              </a>
              <Link to="/demo" className="btn-secondary" style={{ padding: '0.85rem 1.6rem' }}>
                Book a Live Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODAL: AUDIT LOG ───────────────────────────── */}
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
                <span className="mono-label" style={{ color: 'var(--accent-cyan)' }}>AUDIT TRAIL &amp; HISTORY</span>
                <h3 className="headline-sm" style={{ marginTop: '2px' }}>Activity Log Synced with Student Records</h3>
              </div>
              <button onClick={() => setShowLedgerModal(false)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
            </div>

            <p className="body-sm text-secondary mb-md">
              Every staff intervention approved in Compass is logged with full details, timestamped, and safely written back to your student record system.
            </p>

            <div style={{ maxHeight: '320px', overflowY: 'auto', backgroundColor: '#0a0a0f', borderRadius: '10px', padding: '12px', border: '1px solid #222230', marginBottom: '20px' }}>
              <div className="mono-sm" style={{ fontSize: '10.5px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {allQueue.map((s, i) => (
                  <div key={i} style={{ borderBottom: '1px solid #1a1a24', paddingBottom: '6px' }}>
                    <span style={{ color: 'var(--accent-orange)' }}>{s.hash}</span> · <span style={{ color: '#ffffff' }}>{s.student}</span> ({s.sitsId}) ➔ <span style={{ color: 'var(--accent-emerald)' }}>{s.status}</span>
                    <div style={{ color: 'var(--text-muted)', fontSize: '9.5px' }}>Action: {s.action} · Reviewer: {s.owner}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-sm">
              <button onClick={() => setShowLedgerModal(false)} className="btn-secondary btn-sm">
                Close
              </button>
              <button onClick={() => { alert('Exported Audit CSV'); setShowLedgerModal(false); }} className="btn-primary btn-sm">
                Export Audit Log (.CSV) ➔
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
