import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Command, ArrowRight, Shield, Bot, Users, ExternalLink, X, FileText, CheckCircle2 } from 'lucide-react';

const ITEMS = [
  { id: 'home', title: 'Home Command Center', category: 'Pages', route: '/', icon: ArrowRight },
  { id: 'platform', title: 'Platform & Agent Graph Architecture', category: 'Pages', route: '/platform', icon: ArrowRight },
  { id: 'staff', title: 'Staff OS Compass Terminal', category: 'Pages', route: '/staff-os', icon: ArrowRight },
  { id: 'student', title: 'Student OS Mobile Super-App', category: 'Pages', route: '/student-os', icon: ArrowRight },
  { id: 'solutions', title: 'Solutions by Leader & Sector', category: 'Pages', route: '/solutions', icon: ArrowRight },
  { id: 'outcomes', title: 'Institutional ROI & Outcomes Scoreboard', category: 'Pages', route: '/outcomes', icon: ArrowRight },
  { id: 'security', title: 'Security, FERPA & UK GDPR Model', category: 'Pages', route: '/security', icon: ArrowRight },
  { id: 'how', title: 'How It Works: The Continuous Operating Loop', category: 'Pages', route: '/how-it-works', icon: ArrowRight },
  { id: 'integrations', title: 'Connectors: SITS, Moodle, Stripe, Banner', category: 'Pages', route: '/integrations', icon: ArrowRight },
  { id: 'demo', title: 'Schedule a Campus Demo Walkthrough', category: 'Pages', route: '/demo', icon: ArrowRight },
  { id: 'trust', title: 'Trust & Procurement Hub (HECVAT, SOC-2)', category: 'Pages', route: '/trust', icon: Shield },

  // Mastra Agents
  { id: 'ag-sup', title: 'Supervisor Orchestrator (supervisor.ts)', category: 'Agents', route: '/platform', icon: Bot },
  { id: 'ag-job', title: 'Job Match Specialist (20h UKVI Cap)', category: 'Agents', route: '/student-os', icon: Bot },
  { id: 'ag-acc', title: 'Accommodation Match & PBSA Booking', category: 'Agents', route: '/student-os', icon: Bot },
  { id: 'ag-day', title: 'Plan Your Day Schedule Optimizer', category: 'Agents', route: '/student-os', icon: Bot },
  { id: 'ag-rec', title: 'University Recommender & Pre-Scorer', category: 'Agents', route: '/staff-os', icon: Bot },
  { id: 'ag-chk', title: 'Pre-Departure Arrival Readiness Agent', category: 'Agents', route: '/student-os', icon: Bot },

  // Live Student Cases
  { id: 'cs-maya', title: 'Maya Chen — MSc Data Science (RH-994102)', category: 'Students', route: '/staff-os', icon: Users },
  { id: 'cs-jin', title: 'Jin-Woo Park — A-Level Math NARIC Evaluation', category: 'Students', route: '/staff-os', icon: Users },
  { id: 'cs-tariq', title: 'Tariq Hassan — 120h Moodle Inactivity Case', category: 'Students', route: '/staff-os', icon: Users }
];

export default function CommandPaletteModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [selectedIdx, setSelectedIdx] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose ? onClose(!isOpen) : null;
      }
      if (e.key === 'Escape' && isOpen) {
        onClose && onClose(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = ITEMS.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (item) => {
    navigate(item.route);
    onClose(false);
  };

  return (
    <div className="cmd-overlay" onClick={() => onClose(false)}>
      <div className="cmd-palette" onClick={(e) => e.stopPropagation()}>
        <div className="cmd-input-wrap">
          <Search size={18} color="var(--accent-orange)" />
          <input
            autoFocus
            type="text"
            placeholder="Search pages, 22 Mastra agents, student records, workflows..."
            className="cmd-input"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setSelectedIdx(0); }}
          />
          <button
            onClick={() => onClose(false)}
            style={{ background: 'transparent', border: 'none', color: 'var(--text-dim)', cursor: 'pointer' }}
          >
            <X size={16} />
          </button>
        </div>

        <div className="cmd-results">
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '32px 16px', color: 'var(--text-dim)', fontSize: '13px' }}>
              No matches found for "{query}". Try searching for "Maya Chen", "UKVI", or "Moodle".
            </div>
          ) : (
            filtered.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  className={`cmd-item ${selectedIdx === idx ? 'cmd-item-selected' : ''}`}
                  onMouseEnter={() => setSelectedIdx(idx)}
                >
                  <div className="cmd-item-icon">
                    <IconComp size={15} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: '600', color: 'var(--ink-primary)' }}>{item.title}</div>
                    <div className="mono-sm" style={{ fontSize: '10px', color: 'var(--ink-muted)' }}>{item.category} · {item.route}</div>
                  </div>
                  <span className="mono-sm" style={{ fontSize: '11px', color: 'var(--accent-primary)' }}>Open ➔</span>
                </div>
              );
            })
          )}
        </div>

        <div className="cmd-footer">
          <span>Navigate with <kbd>↑</kbd> <kbd>↓</kbd> · Select with <kbd>↵</kbd></span>
          <span>Close with <kbd>ESC</kbd></span>
        </div>
      </div>
    </div>
  );
}
