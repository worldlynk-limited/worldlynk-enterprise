import React, { useState, useRef, useEffect } from 'react';
import {
  Search,
  Clock,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  Heart,
  User,
  Home,
  BarChart2,
  TrendingUp,
  Star,
  ChevronRight,
  Zap,
  Activity,
  ArrowRight,
  Layers,
  Sparkles,
  Check
} from 'lucide-react';

export default function HeroMockup3D() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedDay, setSelectedDay] = useState(29);
  const [searchQuery, setSearchQuery] = useState('');

  // Proportional scaling for mobile/tablet: preserves the exact desktop mockup without any adjustments
  const [scale, setScale] = useState(1);
  const [scaledHeight, setScaledHeight] = useState('auto');
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const baseWidth = 1140; // 1080px chassis + floating cards extending beyond edges
      
      if (screenWidth < 1140) {
        const availWidth = Math.max(280, screenWidth - 16);
        const s = Math.min(1, availWidth / baseWidth);
        setScale(s);
        const rawH = wrapperRef.current ? wrapperRef.current.offsetHeight : 0;
        const h = rawH > 300 ? rawH : 640;
        setScaledHeight(`${Math.round(h * s)}px`);
      } else {
        setScale(1);
        setScaledHeight('auto');
      }
    };

    handleResize();
    const timer = setTimeout(handleResize, 100);
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div 
      className="hero-3d-scale-outer" 
      style={{ 
        height: scale < 1 ? scaledHeight : 'auto',
        overflow: scale < 1 ? 'hidden' : 'visible'
      }}
    >
      <div 
        ref={wrapperRef}
        className="hero-3d-scaler"
        style={{
          width: '1080px',
          minWidth: scale < 1 ? '1080px' : 'auto',
          maxWidth: scale < 1 ? 'none' : '100%',
          flexShrink: 0,
          transform: scale < 1 ? `scale(${scale})` : 'none',
          transformOrigin: 'top center'
        }}
      >
        <div className="hero-3d-wrapper">
      
      {/* Ambient Radial Spotlight Glow */}
      <div className="hero-3d-ambient-glow" />

      {/* Decorative Cross Grid Background Accents (Exact from reference) */}
      <div className="cross-grid-decor cross-grid-decor--tl" />
      <div className="cross-grid-decor cross-grid-decor--tr" />
      <div className="cross-grid-decor cross-grid-decor--br" />

      {/* ============================================================== */}
      {/* 3D FLOATING ORBITING CARDS (Exactly matching the screenshot)    */}
      {/* ============================================================== */}

      {/* 1. TOP-LEFT FLOATING CARD: +14% Student Retention */}
      <div className="hero-float-card hero-float-card--tl">
        <div className="hero-float-icon-sq" style={{ backgroundColor: '#eff6ff', color: '#2563eb' }}>
          <TrendingUp size={18} />
        </div>
        <div className="hero-float-stat-num">14%</div>
        <div className="hero-float-stat-label">more retention this term</div>
      </div>

      {/* 2. MID-LEFT FLOATING CARD: Student Profile & Progress Ring */}
      <div className="hero-float-card hero-float-card--ml">
        <div className="flex items-center gap-xs mb-xs" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=160&h=160&q=80"
            alt="Amara K. - Student"
            className="hero-avatar-lg"
          />
          <div className="hero-avatar-name">Amara K.</div>
          <div className="hero-avatar-sub">14 sessions</div>
        </div>
        {/* Progress Ring */}
        <div className="hero-progress-ring-wrap">
          <svg width="44" height="44" viewBox="0 0 44 44">
            <circle cx="22" cy="22" r="17" fill="none" stroke="#e2e8f0" strokeWidth="3.5" />
            <circle
              cx="22"
              cy="22"
              r="17"
              fill="none"
              stroke="#2563eb"
              strokeWidth="3.5"
              strokeDasharray="106.8"
              strokeDashoffset="38" /* ~64% */
              strokeLinecap="round"
              transform="rotate(-90 22 22)"
            />
          </svg>
          <span className="hero-progress-ring-text">64%</span>
        </div>
        <div className="hero-progress-caption">achieved</div>
      </div>

      {/* 3. BOTTOM-CENTER FLOATING APPOINTMENT PILL */}
      <div className="hero-float-card hero-float-card--bc">
        <img
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=120&h=120&q=80"
          alt="Dr. Rachel Vance - Academic Advisor"
          className="hero-avatar-md"
        />
        <div>
          <div className="hero-appt-title">Academic Advisor Check-In</div>
          <div className="hero-appt-time">5:00PM - 6:00PM · West Wing 204</div>
          <div className="hero-appt-host">Expert: <strong>Dr. Rachel Vance</strong></div>
        </div>
        <div className="hero-appt-badge">
          <Check size={11} /> Confirmed
        </div>
      </div>

      {/* 4. BOTTOM-RIGHT FLOATING VIBRANT ORANGE CARD: Visa & Progress */}
      <div className="hero-float-card hero-float-card--br hero-orange-card">
        <div className="hero-orange-title">Visa work cap</div>
        {/* Circular Radial Gauge */}
        <div className="hero-orange-ring-wrap">
          <svg width="80" height="80" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="32" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="6" />
            <circle
              cx="40"
              cy="40"
              r="32"
              fill="none"
              stroke="#ffffff"
              strokeWidth="6"
              strokeDasharray="201"
              strokeDashoffset="32" /* 84% */
              strokeLinecap="round"
              transform="rotate(-90 40 40)"
            />
          </svg>
          <div className="hero-orange-ring-inner">
            <div className="hero-orange-ring-val">84%</div>
            <div className="hero-orange-ring-sub">safe limit</div>
          </div>
        </div>
        <div className="hero-orange-footer">
          <span>16.8h of 20h</span> · <strong>Compliant</strong>
        </div>
      </div>

      {/* 5. MID-RIGHT FLOATING TRUST RATING CARD */}
      <div className="hero-float-card hero-float-card--mr">
        <div className="hero-float-icon-sq" style={{ backgroundColor: '#fef3c7', color: '#d97706' }}>
          <Star size={18} fill="#d97706" />
        </div>
        <div className="hero-float-stat-num">4.9</div>
        <div className="hero-float-stat-label">service rating this month</div>
        <div className="hero-stars-row">★★★★★</div>
      </div>

      {/* ============================================================== */}
      {/* THE MAIN 3D REALISTIC DASHBOARD CHASSIS                         */}
      {/* ============================================================== */}
      <div className="hero-main-chassis">
        
        {/* LEFT BLACK NAVIGATION RAIL (Deep Obsidian / Black with Orange Active Accent) */}
        <aside className="hero-chassis-sidebar">
          {/* Logo Atom */}
          <div className="hero-sidebar-logo">
            <div className="hero-logo-dot" />
          </div>

          {/* Navigation Icons */}
          <nav className="hero-sidebar-nav">
            <button
              onClick={() => setActiveTab('home')}
              className={`hero-nav-btn ${activeTab === 'home' ? 'hero-nav-btn--active' : ''}`}
              title="Campus Overview"
            >
              <Home size={18} />
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`hero-nav-btn ${activeTab === 'analytics' ? 'hero-nav-btn--active' : ''}`}
              title="Telemetry & Analytics"
            >
              <Activity size={18} />
            </button>
            <button
              onClick={() => setActiveTab('wellbeing')}
              className={`hero-nav-btn ${activeTab === 'wellbeing' ? 'hero-nav-btn--active' : ''}`}
              title="Student Support & Wellbeing"
            >
              <Heart size={18} />
            </button>
            <button
              onClick={() => setActiveTab('students')}
              className={`hero-nav-btn ${activeTab === 'students' ? 'hero-nav-btn--active' : ''}`}
              title="Student Records & Cohorts"
            >
              <User size={18} />
            </button>
          </nav>

          {/* Bottom Settings Avatar */}
          <div className="hero-sidebar-footer">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=80&h=80&q=80"
              alt="Logged in Staff"
              className="hero-footer-avatar"
            />
          </div>
        </aside>

        {/* MAIN APPLICATION WORKSPACE */}
        <main className="hero-chassis-main">
          
          {/* TOP SEARCH & STATUS BAR */}
          <header className="hero-chassis-header">
            <div className="hero-search-bar">
              <Search size={15} color="#94a3b8" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for student profile data, module attendance, or visa logs..."
                className="hero-search-input"
              />
            </div>

            <div className="hero-timestamp-pill">
              <Clock size={13} color="#2563eb" />
              <span>11:24 AM Today, Oct 29</span>
            </div>
          </header>

          {/* DASHBOARD GRID: Left Data Workspace + Right Dossier Sidebar */}
          <div className="hero-dashboard-split">
            
            {/* LEFT & CENTER CONTENT: METRIC CARDS + CHARTS */}
            <div className="hero-dashboard-left">
              
              {/* TOP 3 VIBRANT KPI CARDS (Blue, Cyan, Orange) */}
              <div className="hero-kpi-row">
                
                {/* 1. Vibrant Blue Card: Retention Health */}
                <div className="hero-kpi-card hero-kpi-card--blue">
                  <div className="hero-kpi-head">
                    <span className="hero-kpi-title">Retention rate</span>
                    <span className="hero-kpi-status">Normal</span>
                  </div>
                  {/* Clean Vertical Bar Chart */}
                  <div className="hero-bar-chart">
                    <div className="hero-bar" style={{ height: '35%' }} />
                    <div className="hero-bar" style={{ height: '55%' }} />
                    <div className="hero-bar" style={{ height: '70%' }} />
                    <div className="hero-bar" style={{ height: '60%' }} />
                    <div className="hero-bar" style={{ height: '85%' }} />
                    <div className="hero-bar" style={{ height: '75%' }} />
                    <div className="hero-bar" style={{ height: '95%' }} />
                    <div className="hero-bar" style={{ height: '80%' }} />
                    <div className="hero-bar" style={{ height: '90%' }} />
                    <div className="hero-bar" style={{ height: '100%' }} />
                  </div>
                  <div className="hero-bar-axis">
                    <span>0</span>
                    <span>30</span>
                    <span>60</span>
                    <span>90%</span>
                  </div>
                </div>

                {/* 2. Vibrant Cyan Card: Visa Work Margin */}
                <div className="hero-kpi-card hero-kpi-card--cyan">
                  <div className="hero-kpi-head">
                    <span className="hero-kpi-title">Visa work limit</span>
                    <span className="hero-kpi-status">Normal (18h)</span>
                  </div>
                  <div className="hero-slider-track">
                    <div className="hero-slider-fill" style={{ width: '75%' }} />
                    <div className="hero-slider-thumb" style={{ left: '75%' }} />
                  </div>
                  <div className="hero-slider-labels">
                    <span>Low</span>
                    <span style={{ fontWeight: 700 }}>Safe</span>
                    <span>20h Cap</span>
                  </div>
                </div>

                {/* 3. Vibrant Orange Card: AI Triage Activity */}
                <div className="hero-kpi-card hero-kpi-card--orange">
                  <div className="hero-kpi-head">
                    <span className="hero-kpi-title">Agent activity</span>
                    <span className="hero-kpi-status" style={{ backgroundColor: 'rgba(255,255,255,0.25)', color: '#ffffff' }}>Active</span>
                  </div>
                  <div className="hero-radial-kpi">
                    <div className="hero-radial-circle" style={{ borderColor: 'rgba(255,255,255,0.35)', borderTopColor: '#ffffff' }}>
                      <span>High</span>
                    </div>
                  </div>
                  <div className="hero-radial-sub">30 Assistants Active</div>
                </div>

              </div>

              {/* MIDDLE ROW: 2 CHARTS (Attendance Trend & Coursework Velocity) */}
              <div className="hero-charts-row">
                
                {/* Chart 1: Resting Attendance Rate */}
                <div className="hero-chart-card">
                  <div className="hero-chart-head">
                    <div>
                      <div className="hero-chart-title">Resting attendance rate</div>
                      <div className="hero-chart-metric">96% average</div>
                    </div>
                    <span className="hero-chart-badge">+3.2% vs last term</span>
                  </div>

                  {/* SVG Wave Line Chart */}
                  <div className="hero-chart-svg-wrap">
                    <svg viewBox="0 0 280 90" className="hero-chart-svg">
                      <defs>
                        <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.22" />
                          <stop offset="100%" stopColor="#2563eb" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      {/* Grid Lines */}
                      <line x1="0" y1="20" x2="280" y2="20" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="0" y1="50" x2="280" y2="50" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="0" y1="80" x2="280" y2="80" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
                      {/* Area Fill */}
                      <path
                        d="M 10 65 Q 50 45, 90 55 T 160 38 T 220 48 T 270 25 L 270 85 L 10 85 Z"
                        fill="url(#blueGradient)"
                      />
                      {/* Stroke Line */}
                      <path
                        d="M 10 65 Q 50 45, 90 55 T 160 38 T 220 48 T 270 25"
                        fill="none"
                        stroke="#2563eb"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      {/* Data Points */}
                      <circle cx="10" cy="65" r="3.5" fill="#ffffff" stroke="#2563eb" strokeWidth="2" />
                      <circle cx="90" cy="55" r="3.5" fill="#ffffff" stroke="#2563eb" strokeWidth="2" />
                      <circle cx="160" cy="38" r="3.5" fill="#ffffff" stroke="#2563eb" strokeWidth="2" />
                      <circle cx="220" cy="48" r="3.5" fill="#ffffff" stroke="#2563eb" strokeWidth="2" />
                      <circle cx="270" cy="25" r="4" fill="#2563eb" stroke="#ffffff" strokeWidth="2" />
                    </svg>
                    <div className="hero-chart-axis-x">
                      <span>Mon</span>
                      <span>Tues</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                    </div>
                  </div>
                </div>

                {/* Chart 2: Student Engagement Velocity */}
                <div className="hero-chart-card">
                  <div className="hero-chart-head">
                    <div>
                      <div className="hero-chart-title">Student engagement index</div>
                      <div className="hero-chart-metric">143 bpm (average)</div>
                    </div>
                    <span className="hero-chart-badge" style={{ backgroundColor: '#ecfdf5', color: '#059669' }}>
                      Optimal Flow
                    </span>
                  </div>

                  {/* SVG Wave Line Chart */}
                  <div className="hero-chart-svg-wrap">
                    <svg viewBox="0 0 280 90" className="hero-chart-svg">
                      {/* Grid Lines */}
                      <line x1="0" y1="20" x2="280" y2="20" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="0" y1="50" x2="280" y2="50" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="0" y1="80" x2="280" y2="80" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
                      {/* Stroke Line */}
                      <path
                        d="M 10 50 Q 40 25, 80 60 T 150 30 T 210 65 T 270 35"
                        fill="none"
                        stroke="#38bdf8"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      {/* Points */}
                      <circle cx="10" cy="50" r="3" fill="#ffffff" stroke="#38bdf8" strokeWidth="2" />
                      <circle cx="80" cy="60" r="3" fill="#ffffff" stroke="#38bdf8" strokeWidth="2" />
                      <circle cx="150" cy="30" r="3" fill="#ffffff" stroke="#38bdf8" strokeWidth="2" />
                      <circle cx="210" cy="65" r="3" fill="#ffffff" stroke="#38bdf8" strokeWidth="2" />
                      <circle cx="270" cy="35" r="4" fill="#38bdf8" stroke="#ffffff" strokeWidth="2" />
                    </svg>
                    <div className="hero-chart-axis-x">
                      <span>Mon</span>
                      <span>Tues</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* RIGHT PROFILE & TIMETABLE DOSSIER COLUMN */}
            <aside className="hero-dashboard-right">
              
              {/* User Profile Header */}
              <div className="hero-user-profile">
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Julian Vance"
                  className="hero-user-avatar"
                />
                <div>
                  <h4 className="hero-user-name">Julian Vance</h4>
                  <p className="hero-user-meta">24 years old, London</p>
                </div>
              </div>

              {/* Student Bio Metrics Row */}
              <div className="hero-bio-grid">
                <div className="hero-bio-item">
                  <span className="hero-bio-label">Cohort</span>
                  <span className="hero-bio-val">MSc Data</span>
                </div>
                <div className="hero-bio-item">
                  <span className="hero-bio-label">Status</span>
                  <span className="hero-bio-val" style={{ color: '#059669' }}>Enrolled</span>
                </div>
                <div className="hero-bio-item">
                  <span className="hero-bio-label">Visa</span>
                  <span className="hero-bio-val">Tier-4</span>
                </div>
              </div>

              {/* Interactive Calendar Days Bar */}
              <div className="hero-calendar-wrap">
                <div className="hero-calendar-head">
                  <span>October 2026</span>
                  <span style={{ fontSize: '11px', color: '#2563eb', fontWeight: 600 }}>Week 8</span>
                </div>
                <div className="hero-days-row">
                  {[
                    { d: 'Mon', num: 26 },
                    { d: 'Tues', num: 27 },
                    { d: 'Wed', num: 28 },
                    { d: 'Thu', num: 29 },
                    { d: 'Fri', num: 30 },
                    { d: 'Sat', num: 31 },
                    { d: 'Sun', num: 1 }
                  ].map((day) => (
                    <button
                      key={day.num}
                      onClick={() => setSelectedDay(day.num)}
                      className={`hero-day-btn ${selectedDay === day.num ? 'hero-day-btn--active' : ''}`}
                    >
                      <span className="hero-day-name">{day.d}</span>
                      <span className="hero-day-num">{day.num}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Blue Event Card: Advisor Match / Review */}
              <div className="hero-event-card">
                <div className="hero-event-title">Personal Tutor 1-on-1</div>
                <div className="hero-event-time">9:00AM - 11:30AM</div>
                <div className="hero-event-coach">Advisor: Dr. Nelson Hendricks</div>
                <div className="hero-event-footer">
                  <div className="hero-attendees-row">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=60&h=60&q=80" alt="Student" />
                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=60&h=60&q=80" alt="Student" />
                    <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=60&h=60&q=80" alt="Student" />
                    <div className="hero-attendees-more">+12</div>
                  </div>
                  <button className="hero-event-arrow" title="View Dossier">
                    <ChevronRight size={13} />
                  </button>
                </div>
              </div>

              {/* Secondary Scheduled Action Item */}
              <div className="hero-subevent-card">
                <div>
                  <div className="hero-subevent-title">Visa Compliance Review</div>
                  <div className="hero-subevent-time">2:00PM - 2:30PM</div>
                  <div className="hero-subevent-officer">Dr. Douglas Wade</div>
                </div>
                <button className="hero-subevent-btn">Follow-up</button>
              </div>

            </aside>

          </div>

        </main>

      </div>

        </div>
      </div>
    </div>
  );
}