import React, { useState } from 'react';
import { Bot, X, Send, Sparkles, Shield, ArrowRight } from 'lucide-react';

const PRESET_QUESTIONS = [
  {
    q: "How does WorldLynk help students with visa work limits?",
    a: "WorldLynk helps international students stay safely within their legal term-time work limits (such as the UK 20-hour rule). When students log shifts or sync their work schedules, the app checks them against their lecture timetable and term dates. If a scheduled shift would exceed 20 hours, the student gets an immediate reminder to adjust their hours before any issue arises."
  },
  {
    q: "What happens when a student starts missing classes?",
    a: "When a student misses multiple lectures or stops engaging with course materials, WorldLynk spots the pattern early. Instead of sending impersonal warning letters, it prepares a friendly check-in message for the personal tutor to review. Staff can approve, edit, and send the message with a single click."
  },
  {
    q: "How does WorldLynk connect to our existing databases?",
    a: "WorldLynk connects directly into your existing student records (such as SITS, Banner, and Ellucian) and learning platforms (like Moodle and Canvas) via standard, secure APIs. There is zero data migration required — your existing systems remain your single source of truth."
  },
  {
    q: "How do you ensure university staff stay in control?",
    a: "Our platform is built on human-in-the-loop governance. While AI assistants handle routine data gathering, schedule checks, and draft responses, any significant decision — including visa reports, disciplinary notices, or official records updates — requires review and one-click approval by authorized staff on the Compass portal."
  }
];

export default function NovaChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'agent',
      text: "Hello! I'm Nova, your WorldLynk campus assistant. Ask me how we help universities simplify student support, protect visa compliance, and save staff time."
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleAskPreset = (preset) => {
    const userMsg = { sender: 'user', text: preset.q };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'agent', text: preset.a }]);
      setIsTyping(false);
    }, 600);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setIsTyping(true);

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          sender: 'agent',
          text: `Thank you for asking about "${userText}". WorldLynk connects directly with your student records and learning systems to give students 24/7 answers while keeping your staff in full control with one-click approvals on the Compass portal.`
        }
      ]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      {/* Floating Trigger Pill */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="nova-floating-trigger"
          aria-label="Open Nova AI Chat"
        >
          <span className="pulse-dot pulse-dot-emerald" />
          <Bot size={16} color="var(--accent-orange)" />
          <span>Ask Nova AI</span>
          <span className="mono-sm" style={{ fontSize: '9px', opacity: 0.7 }}>ONLINE</span>
        </button>
      )}

      {/* Floating Chat Panel */}
      {isOpen && (
        <div className="nova-panel">
          {/* Header */}
          <div className="nova-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '24px', height: '24px', borderRadius: 'var(--radius-xs)', background: 'var(--ink-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Bot size={14} color="#ffffff" />
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink-primary)' }}>Nova Campus Assistant</div>
                <div className="mono-sm" style={{ fontSize: '9.5px', color: 'var(--status-pass)' }}>
                  ● Specialist Assistants Ready
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Chat Body */}
          <div className="nova-body">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={m.sender === 'user' ? 'chat-bubble chat-bubble-user' : 'chat-bubble chat-bubble-agent'}
              >
                {m.text}
              </div>
            ))}

            {isTyping && (
              <div className="chat-bubble chat-bubble-agent" style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                <span className="pulse-dot pulse-dot-amber" />
                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Nova is checking campus resources...</span>
              </div>
            )}

            {/* Canned Presets */}
            {messages.length < 5 && (
              <div style={{ marginTop: '8px' }}>
                <div className="mono-label mb-xs" style={{ fontSize: '9px' }}>COMMON QUESTIONS:</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {PRESET_QUESTIONS.map((preset, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAskPreset(preset)}
                      className="card-dark"
                      style={{
                        textAlign: 'left',
                        padding: '8px 10px',
                        cursor: 'pointer',
                        fontSize: '11px',
                        color: 'var(--text-secondary)',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      {preset.q}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input Footer */}
          <form onSubmit={handleSend} className="nova-footer">
            <input
              type="text"
              placeholder="Ask about student support, visa rules, or systems..."
              className="form-input"
              style={{ padding: '8px 12px', fontSize: '12px', flex: 1 }}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              type="submit"
              className="btn-primary"
              style={{ padding: '8px 12px' }}
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
