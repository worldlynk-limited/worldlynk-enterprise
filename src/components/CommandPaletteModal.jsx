import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight, Shield, Bot, Users, X } from 'lucide-react';

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
  const listRef = useRef(null);
  const inputRef = useRef(null);

  const filtered = ITEMS.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Toggle modal with Meta/Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onClose(!isOpen);
        return;
      }

      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose(false);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIdx(prev => (filtered.length > 0 ? (prev + 1) % filtered.length : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIdx(prev => (filtered.length > 0 ? (prev - 1 + filtered.length) % filtered.length : 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered.length > 0 && filtered[selectedIdx]) {
          handleSelect(filtered[selectedIdx]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, filtered, selectedIdx]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setSelectedIdx(0);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.querySelector('.cmd-item-selected');
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIdx]);

  if (!isOpen) return null;

  const handleSelect = (item) => {
    navigate(item.route);
    onClose(false);
  };

  return (
    <div className="cmd-overlay" onClick={() => onClose(false)} role="dialog" aria-modal="true" aria-label="Command Palette">
      <div className="cmd-palette" onClick={(e) => e.stopPropagation()}>
        <div className="cmd-input-wrap">
          <Search size={18} color="var(--accent-orange)" style={{ flexShrink: 0 }} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search pages, 22 Mastra agents, student records..."
            className="cmd-input"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIdx(0);
            }}
          />
          {query && (
            <button
              onClick={() => { setQuery(''); setSelectedIdx(0); }}
              style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '4px' }}
              title="Clear search"
            >
              <X size={14} />
            </button>
          )}
          <button
            onClick={() => onClose(false)}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-hairline)',
              color: 'var(--wl-white-80)',
              borderRadius: '4px',
              padding: '4px 8px',
              cursor: 'pointer',
              fontSize: '11px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
            aria-label="Close Command Palette"
          >
            <span className="mono-sm">ESC</span>
          </button>
        </div>

        <div className="cmd-results" ref={listRef}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px 16px', color: 'var(--ink-secondary)', fontSize: '13px' }}>
              No matches found for "{query}".
              <div style={{ marginTop: '6px', fontSize: '11.5px', color: 'var(--ink-muted)' }}>
                Try searching for "Maya", "UKVI", "Staff", or "Moodle".
              </div>
            </div>
          ) : (
            filtered.map((item, idx) => {
              const IconComp = item.icon;
              const isSelected = selectedIdx === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  className={`cmd-item ${isSelected ? 'cmd-item-selected' : ''}`}
                  onMouseEnter={() => setSelectedIdx(idx)}
                >
                  <div className="cmd-item-icon">
                    <IconComp size={15} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: '600', color: 'var(--ink-primary)', fontSize: '13px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {item.title}
                    </div>
                    <div className="mono-sm" style={{ fontSize: '10px', color: 'var(--ink-muted)' }}>
                      <span style={{ color: item.category === 'Agents' ? 'var(--accent-orange)' : item.category === 'Students' ? 'var(--accent-cyan)' : 'var(--ink-secondary)' }}>
                        {item.category}
                      </span>
                      {' · '}{item.route}
                    </div>
                  </div>
                  <span className="mono-sm" style={{ fontSize: '11px', color: 'var(--accent-primary)', display: 'inline-flex', alignItems: 'center', gap: '3px', flexShrink: 0 }}>
                    Open <ArrowRight size={11} />
                  </span>
                </div>
              );
            })
          )}
        </div>

        <div className="cmd-footer">
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Navigate <kbd>↑</kbd> <kbd>↓</kbd></span>
            <span>·</span>
            <span>Select <kbd>↵</kbd></span>
          </div>
          <div className="mono-sm" style={{ color: 'var(--ink-muted)' }}>
            {filtered.length} {filtered.length === 1 ? 'result' : 'results'}
          </div>
        </div>
      </div>
    </div>
  );
}
