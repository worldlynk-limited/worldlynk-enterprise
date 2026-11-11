import React, { useState, useEffect } from 'react';
import './campus.css';

const CASES = [
  {
    name: 'Maya Chen',
    cohort: 'MSc Data Science',
    task: 'Missed two lectures',
    agent: 'Attendance Agent',
    signals: [
      { text: '2 missed lectures, both Mondays', warn: true },
      { text: 'Late shifts on Sunday nights', warn: true },
      { text: 'Work 16h of 20h', warn: false },
      { text: 'Moodle quiet for 4 days', warn: true }
    ],
    why: 'Each of these is small. Together they say Monday mornings are not working for her.',
    defaultDraft:
      'Hi Maya, I noticed Monday mornings have been hard after your Sunday shifts. I have held a makeup lab for you on Friday at 2pm. Would a quick chat this week help? Dr Jenkins',
    altLabel: 'Call her instead',
    altMessage:
      'Hi Maya, it is Dr Jenkins. I will give you a ring tomorrow at 10. Nothing to worry about, I just want to check how Mondays are going.',
    studentReply: 'Thank you so much. Friday works. And yes, a chat would be good 🙏',
    ticks: ['Sent on WhatsApp, where she replies', 'Makeup lab held in her timetable', 'Logged under your name']
  },
  {
    name: 'Tariq Al-Mansoor',
    cohort: 'MEng Robotics',
    task: 'CAS evidence ready',
    agent: 'CAS Agent',
    signals: [
      { text: 'Bank statement uploaded today', warn: false },
      { text: 'Funds held for 28 days ✓', warn: false },
      { text: 'Name matches passport ✓', warn: false },
      { text: 'Tuition deposit received ✓', warn: false }
    ],
    why: 'Everything the CAS needs is in one place and checked. It only needs your eyes and your name.',
    defaultDraft:
      'Hi Tariq, your bank statement meets the requirement and your deposit has arrived. Your CAS will be issued today. See you in September.',
    altLabel: 'Ask for a clearer copy',
    altMessage:
      'Hi Tariq, thanks for sending your statement. The second page is hard to read. Could you upload a clearer copy? Everything else is in order.',
    studentReply: 'Amazing, thank you!! Booking my flight tonight ✈️',
    ticks: ['Sent on Telegram, his chosen channel', 'CAS brief approved in SITS', 'Evidence filed for audit']
  },
  {
    name: 'Aisha Patel',
    cohort: 'LLB Law',
    task: 'Asked for help',
    agent: 'Wellbeing Agent',
    signals: [
      { text: 'Message at 01:14: "I can\'t keep up"', warn: true },
      { text: 'Coursework submitted late twice', warn: true },
      { text: 'Attendance still good', warn: false }
    ],
    why: 'This one is not for an agent to answer. It has drafted a holding message and suggests the wellbeing team. A person takes it from here.',
    defaultDraft:
      'Hi Aisha, thank you for telling us. I have asked Sam from the wellbeing team to get in touch with you today. You are not on your own with this.',
    altLabel: 'Take it yourself',
    altMessage:
      'Hi Aisha, thank you for telling me. I am free at 9 tomorrow. Come by my office, or I can call you. We will work it out together.',
    studentReply: 'Thank you. I did not know who to ask.',
    ticks: ['Sent on WhatsApp', 'Handed to Sam in Wellbeing, with context', 'Visible only to her support team']
  }
];

export default function ShiftSimulationSection() {
  const [cur, setCur] = useState(0);
  const [draftText, setDraftText] = useState(CASES[0].defaultDraft);
  const [done, setDone] = useState([]);
  const [isSending, setIsSending] = useState(false);
  const [ticksShown, setTicksShown] = useState([]);
  const [phoneMessages, setPhoneMessages] = useState([]);
  const [completedTime, setCompletedTime] = useState(null);
  const [startTime, setStartTime] = useState(null);

  const activeCase = CASES[cur];

  useEffect(() => {
    setDraftText(CASES[cur].defaultDraft);
    setTicksShown([]);
    setPhoneMessages([]);
  }, [cur]);

  const handleStartTimer = () => {
    if (!startTime) {
      setStartTime(Date.now());
    }
  };

  const handleAction = (messageToSend) => {
    if (isSending) return;
    setIsSending(true);
    handleStartTimer();

    // 1. Add staff message to phone
    setPhoneMessages([{ sender: 'me', text: messageToSend }]);

    // 2. Animate ticks
    activeCase.ticks.forEach((tk, i) => {
      setTimeout(() => {
        setTicksShown((prev) => [...prev, tk]);
      }, 500 + i * 450);
    });

    // 3. Typing indicator & student response
    setTimeout(() => {
      setPhoneMessages((prev) => [...prev, { sender: 'typing', text: '...' }]);
    }, 1100);

    setTimeout(() => {
      setPhoneMessages([
        { sender: 'me', text: messageToSend },
        { sender: 'student', text: activeCase.studentReply }
      ]);
    }, 2400);

    // 4. Mark done and advance
    setTimeout(() => {
      const nextDone = [...done];
      nextDone[cur] = true;
      setDone(nextDone);
      setIsSending(false);

      // Find next pending case
      const nextIdx = CASES.findIndex((_, idx) => !nextDone[idx]);
      if (nextIdx === -1) {
        // All completed!
        const elapsed = Math.max(1, Math.round((Date.now() - (startTime || Date.now())) / 1000));
        setCompletedTime(elapsed);
      } else {
        setCur(nextIdx);
      }
    }, 4200);
  };

  const resetAll = () => {
    setDone([]);
    setCur(0);
    setStartTime(null);
    setCompletedTime(null);
    setDraftText(CASES[0].defaultDraft);
    setPhoneMessages([]);
    setTicksShown([]);
  };

  return (
    <section className="wl-shift-section" id="shift">
      <div className="wl-shift-wrap">
        <div className="wl-shift-header">
          <p className="wl-shift-eyebrow">+ NOW YOU TRY</p>
          <h2 className="wl-shift-headline">
            It is 5pm. You are <span className="wl-hl-orange">Dr Jenkins</span>. Three students need you.
          </h2>
          <p className="wl-shift-lede">
            The agents have done the reading. The decisions are yours. Change any word you like, then approve, or pick the other option.
          </p>
        </div>

        {/* 3-Column Triage Interface */}
        <div className="wl-shift-grid">
          
          {/* Column 1: Student List */}
          <div className="wl-sh-list" role="tablist" aria-label="Student Caseload">
            {CASES.map((c, i) => {
              const isSelected = i === cur;
              const isDone = done[i];
              return (
                <button
                  key={c.name}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`wl-sh-tab ${isSelected ? 'wl-sh-tab-active' : ''} ${isDone ? 'wl-sh-tab-done' : ''}`}
                  onClick={() => {
                    if (!isSending) setCur(i);
                  }}
                >
                  <b className="wl-tab-name">
                    {c.name}
                    {isDone && <span className="wl-check-mark"> ✓</span>}
                  </b>
                  <small className="wl-tab-task">{c.task}</small>
                </button>
              );
            })}
          </div>

          {/* Column 2: Case Detail & Triage Console */}
          <div className="wl-sh-case">
            <span className="wl-case-mono">
              {activeCase.cohort} · PREPARED BY {activeCase.agent.toUpperCase()}
            </span>
            <h3 className="wl-case-title">
              {activeCase.name} · {activeCase.task}
            </h3>

            {/* Signals */}
            <div className="wl-sig-row">
              {activeCase.signals.map((sig, sIdx) => (
                <span key={sIdx} className={`wl-sig-pill ${sig.warn ? 'wl-sig-warn' : ''}`}>
                  {sig.text}
                </span>
              ))}
            </div>

            {/* Why explanation */}
            <p className="wl-sh-why">{activeCase.why}</p>

            {/* Editable Draft */}
            <label className="wl-draft-label" htmlFor="sh-textarea">
              Drafted for you. Edit freely:
            </label>
            <textarea
              id="sh-textarea"
              className="wl-sh-textarea"
              value={draftText}
              onChange={(e) => {
                handleStartTimer();
                setDraftText(e.target.value);
              }}
              disabled={isSending}
            />

            {/* Actions */}
            <div className="wl-sh-act">
              <button
                type="button"
                className="wl-btn-primary"
                disabled={isSending}
                onClick={() => handleAction(draftText.trim() || activeCase.defaultDraft)}
              >
                {isSending ? 'Sending & Logging…' : 'Approve and send'}
              </button>
              <button
                type="button"
                className="wl-btn-alt"
                disabled={isSending}
                onClick={() => handleAction(activeCase.altMessage)}
              >
                {activeCase.altLabel}
              </button>
            </div>

            {/* Audit ticks */}
            <ul className="wl-ticks-list">
              {ticksShown.map((tk, tIdx) => (
                <li key={tIdx} className="wl-tick-item">
                  ✓ {tk}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Live Student Smartphone Preview */}
          <div className="wl-sh-phone">
            <div className="wl-ph-head">
              <i className="wl-ph-avatar" />
              <div>
                <b>{activeCase.name.split(' ')[0]}</b>
                <small>her phone, a minute from now</small>
              </div>
            </div>

            <div className="wl-ph-msgs">
              {phoneMessages.length === 0 ? (
                <p className="wl-ph-empty">Your message will arrive here.</p>
              ) : (
                phoneMessages.map((msg, mIdx) => {
                  if (msg.sender === 'typing') {
                    return (
                      <div key={mIdx} className="wl-bubble wl-bubble-student">
                        <span className="wl-typing-dots">•••</span>
                      </div>
                    );
                  }
                  return (
                    <div
                      key={mIdx}
                      className={`wl-bubble ${msg.sender === 'me' ? 'wl-bubble-me' : 'wl-bubble-student'}`}
                    >
                      {msg.text}
                    </div>
                  );
                })
              )}
            </div>
          </div>

        </div>

        {/* Completion Card */}
        {completedTime !== null && (
          <div className="wl-sh-done">
            <span className="wl-done-mono">LIST CLEARED</span>
            <div className="wl-done-big">
              {completedTime >= 60
                ? `${Math.floor(completedTime / 60)} min ${completedTime % 60} s`
                : `${completedTime} seconds`}
            </div>
            <p className="wl-done-desc">
              You read three short briefs, changed what you wanted, and made every decision yourself. The finding, cross-checking and drafting was done before you sat down. That is the whole idea.
            </p>
            <div className="wl-done-actions">
              <a href="#demo" className="wl-btn-primary">
                See this with your own students →
              </a>
              <button type="button" className="wl-btn-ghost" onClick={resetAll}>
                Play again
              </button>
            </div>
          </div>
        )}

        <p className="wl-shift-fine">A simulation with fictional students. Nothing is sent anywhere.</p>
      </div>
    </section>
  );
}
