import React, { useState } from 'react';
import { Bot, X, Send, Sparkles, Shield, ArrowRight } from 'lucide-react';

const PRESET_QUESTIONS = [
  {
    q: "How does WorldLynk track UKVI 20-hour work limits?",
    a: "WorldLynk uses calendar intelligence and external employer shift logs (e.g. Costa, Deliveroo) cross-referenced in real-time against university term dates. If a student is scheduled for 16h and attempts to book an additional 6h shift, the Job Match agent alerts them and halts the booking to prevent breaching the 20h Home Office legal ceiling."
  },
  {
    q: "What happens during a Tier-4 attendance drop?",
    a: "When a dynamic QR check-in expires unverified and Moodle LMS logs show inactivity, the supervisor agent evaluates the case. If a consequential visa boundary is reached, Arbiter blocks automated sanctions and places a pre-drafted intervention into the Senior Tutor's queue for a 1-click human approval."
  },
  {
    q: "How does SITS and Moodle data sync without migration?",
    a: "WorldLynk Fabric acts as an encrypted translation layer. It uses AES-256 token proxies to query Moodle and transactional REST/Ethos endpoints for SITS:Vision. Your data remains in your systems; WorldLynk maintains only the canonical identity mapping."
  },
  {
    q: "What is the Arbiter governance gate?",
    a: "Arbiter is our strict human-in-the-loop rule: AI agents prepare, draft, and assemble evidence, but humans decide. Any action that affects student visa status, academic standing, or financial charges requires a named staff member's cryptographically logged approval."
  }
];

export default function NovaChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'agent',
      text: "Hello! I'm Nova, the WorldLynk campus intelligence assistant. Ask me how our 22 Mastra agents, dynamic QR attendance, or SITS/Moodle integrations work across your campus."
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
          text: `Thank you for your question regarding "${userText}". In WorldLynk's Agentic Campus architecture, all student signals flow from Fabric through the 30-agent Cortex (powered by Mastra and 12 DAG workflows), with consequential decisions governed by the Arbiter staff terminal.`
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
                  ● 22 Mastra Agents Online
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
                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Nova is analyzing campus graph...</span>
              </div>
            )}

            {/* Canned Presets */}
            {messages.length < 5 && (
              <div style={{ marginTop: '8px' }}>
                <div className="mono-label mb-xs" style={{ fontSize: '9px' }}>SUGGESTED CAMPUS QUESTIONS:</div>
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
              placeholder="Ask about UKVI, Moodle, QR, or agents..."
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
