import React, { useState, useEffect, useRef } from 'react';
import './campus.css';

const BUILDINGS = [
  { id: 'registry', name: 'Registry', x: 60, y: 70, w: 130, h: 90, depth: 64 },
  { id: 'lecture', name: 'Lecture hall', x: 250, y: 44, w: 150, h: 110, depth: 92 },
  { id: 'library', name: 'Library', x: 420, y: 190, w: 104, h: 128, depth: 112 },
  { id: 'union', name: 'Student union', x: 66, y: 270, w: 124, h: 100, depth: 58 },
  { id: 'halls', name: 'Halls', x: 262, y: 392, w: 150, h: 104, depth: 130 },
  { id: 'careers', name: 'Careers & jobs', x: 60, y: 430, w: 112, h: 88, depth: 48 }
];

const DAY_STOPS = [
  {
    time: '08:58',
    bIdx: 1, // Lecture hall
    headline: 'First lecture',
    say: '"I just tap my phone on the way in."',
    desc: 'Maya checks in to CS-5100 with a QR code that changes every few seconds. No paper register, no queue.',
    bts: 'The Attendance Agent writes the check-in to her record in SITS.',
    sky: { sky1: '#ffcfa3', sky2: '#e6f0ff', sx: '16%', sy: '58%', sun: '#ffb347', night: false }
  },
  {
    time: '11:10',
    bIdx: 2, // Library
    headline: 'A question between classes',
    say: '"Has my lab moved? And where is quiet right now?"',
    desc: 'She asks Nova on WhatsApp from the library steps and has an answer before she reaches the door.',
    bts: 'The Campus Coordinator answers from the live timetable. Nobody in Registry was interrupted.',
    sky: { sky1: '#b9deff', sky2: '#eef7ff', sx: '36%', sy: '20%', sun: '#fff3c4', night: false }
  },
  {
    time: '13:20',
    bIdx: 3, // Student union
    headline: 'Finding her people',
    say: '"There is an AI society? Sign me up."',
    desc: 'Over lunch she books a society evening and asks to be matched with a mentor from her course.',
    bts: 'The Events Agent sends her ticket. Her engagement picture gets a little brighter.',
    sky: { sky1: '#a5d4ff', sky2: '#f1f9ff', sx: '54%', sy: '11%', sun: '#fff6d6', night: false }
  },
  {
    time: '14:30',
    bIdx: 5, // Careers & jobs
    headline: 'Her part-time job',
    say: '"Am I still OK for hours this week?"',
    desc: 'She starts a four-hour shift on campus. That takes her to 20 hours, the limit on her Student visa.',
    bts: 'The Work-Hours Agent tells her before she goes over, and lets her tutor know.',
    sky: { sky1: '#b3daff', sky2: '#f6f4e8', sx: '68%', sy: '19%', sun: '#ffefb8', night: false }
  },
  {
    time: '17:00',
    bIdx: 0, // Registry
    headline: 'Someone notices',
    say: '"She has missed two. Let me check she is all right."',
    desc: 'Dr Jenkins opens Compass to one short list. Maya missed a lecture on Monday. A makeup lab slot is already drafted.',
    bts: 'He reads it, changes a line, and approves. A person made the decision. The agent only prepared it.',
    sky: { sky1: '#ff9d5c', sky2: '#ffe0bd', sx: '84%', sy: '50%', sun: '#ff6b00', night: false }
  },
  {
    time: '19:30',
    bIdx: 4, // Halls
    headline: 'Back in her room',
    say: '"Oh. They sorted it. I did not have to chase anyone."',
    desc: 'A message arrives: her makeup lab is booked for Friday and she is on track. Rent is due Monday, and she has been reminded.',
    bts: 'The reply went to WhatsApp because that is where she asked. The record is up to date in every system.',
    sky: { sky1: '#0d1230', sky2: '#2a2350', sx: '78%', sy: '17%', sun: '#e8ecff', night: true }
  }
];

export default function CampusDaySection() {
  const [cur, setCur] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [rotZ, setRotZ] = useState(0);
  const campusRef = useRef(null);

  const currentStop = DAY_STOPS[cur];
  const activeBld = BUILDINGS[currentStop.bIdx];

  // Auto-cycle through day
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCur((prev) => (prev + 1) % DAY_STOPS.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Handle pointer tilt on campus diorama
  const handlePointerMove = (e) => {
    if (!campusRef.current) return;
    const rect = campusRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    setRotZ(x * 20);
  };

  const handlePointerLeave = () => {
    setRotZ(0);
  };

  return (
    <section className="wl-campus-section" id="campus">
      <div className="wl-campus-wrap">
        <div className="wl-campus-split">
          
          {/* Left Column: Story details & stops */}
          <div className="wl-campus-story">
            <p className="wl-campus-eyebrow">+ A DAY ON CAMPUS</p>
            <h2 className="wl-campus-headline">
              Meet Maya. This is what <span className="wl-hl-orange">being looked after</span> feels like.
            </h2>
            <p className="wl-campus-lede">
              She is a master's student, a long way from home, with a part-time job and a visa to protect. Follow her through one ordinary Thursday.
            </p>

            {/* Time Stop Buttons */}
            <div className="wl-stops-row" role="tablist" aria-label="Maya's day">
              {DAY_STOPS.map((stop, i) => (
                <button
                  key={stop.time}
                  type="button"
                  role="tab"
                  aria-selected={i === cur}
                  className={`wl-stop-btn ${i === cur ? 'wl-stop-active' : ''}`}
                  onClick={() => {
                    setCur(i);
                    setIsPaused(true);
                  }}
                >
                  {stop.time}
                </button>
              ))}
            </div>

            {/* Live Day Card */}
            <div className="wl-day-card" key={cur}>
              <span className="wl-card-mono">
                Thursday · {currentStop.time} · {activeBld.name}
              </span>
              <h3 className="wl-card-title">{currentStop.headline}</h3>
              <p className="wl-card-quote">{currentStop.say}</p>
              <p className="wl-card-desc">{currentStop.desc}</p>
              <div className="wl-card-bts">
                <b>Quietly, behind the scenes</b>
                {currentStop.bts}
              </div>
            </div>

            <p className="wl-campus-fine">Maya is a fictional student used to illustrate the product.</p>
          </div>

          {/* Right Column: 3D Campus Diorama */}
          <div
            className={`wl-campus-box ${currentStop.sky.night ? 'night' : ''}`}
            ref={campusRef}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            style={{
              background: `linear-gradient(180deg, ${currentStop.sky.sky1}, ${currentStop.sky.sky2})`
            }}
          >
            {/* Stars & Sun */}
            <i className="wl-stars" />
            <i
              className="wl-sun"
              style={{
                left: currentStop.sky.sx,
                top: currentStop.sky.sy,
                backgroundColor: currentStop.sky.sun,
                boxShadow: `0 0 60px 20px ${currentStop.sky.sun}`
              }}
            />

            {/* 3D Isometric Ground */}
            <div
              className="wl-ground"
              style={{
                '--rz': `${rotZ}deg`
              }}
            >
              {/* Paths */}
              <i className="wl-path wl-p1" />
              <i className="wl-path wl-p2" />
              <i className="wl-path wl-p3" />

              {/* Trees */}
              <i className="wl-tree" style={{ left: '215px', top: '210px' }} />
              <i className="wl-tree" style={{ left: '420px', top: '90px' }} />
              <i className="wl-tree" style={{ left: '205px', top: '400px' }} />
              <i className="wl-tree" style={{ left: '440px', top: '400px' }} />
              <i className="wl-tree" style={{ left: '30px', top: '200px' }} />
              <i className="wl-tree" style={{ left: '345px', top: '330px' }} />

              {/* Central Pulsing Beacon */}
              <i className="wl-beacon" />

              {/* 3D Buildings */}
              {BUILDINGS.map((b, idx) => {
                const isActive = idx === currentStop.bIdx;
                return (
                  <div
                    key={b.id}
                    className={`wl-bld ${isActive ? 'wl-bld-active' : ''}`}
                    style={{
                      left: `${b.x}px`,
                      top: `${b.y}px`,
                      width: `${b.w}px`,
                      height: `${b.h}px`,
                      '--h': `${b.depth}px`
                    }}
                  >
                    <i className="wl-s" />
                    <i className="wl-n" />
                    <i className="wl-e" />
                    <i className="wl-w" />
                    <i className="wl-rf" />
                  </div>
                );
              })}

              {/* Maya Dot */}
              <i
                className="wl-maya-dot"
                style={{
                  transform: `translate3d(${activeBld.x + activeBld.w / 2}px, ${activeBld.y + activeBld.h + 18}px, 6px)`
                }}
              />
            </div>

            {/* Pinned Building Name Labels */}
            <div className="wl-campus-labels">
              {BUILDINGS.map((b, idx) => {
                const isActive = idx === currentStop.bIdx;
                return (
                  <span
                    key={b.id}
                    className={`wl-c-label ${isActive ? 'wl-label-active' : ''}`}
                    style={{
                      left: `${b.x + b.w / 2}px`,
                      top: `${b.y - 12}px`
                    }}
                  >
                    {b.name}
                  </span>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
