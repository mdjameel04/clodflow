"use client";

import { useState } from "react";

// ─── Types ───────────────────────────────────────────────
type NavItem = { icon: string; label: string; id: string };
type Message = { role: "bot" | "user"; text: string };

// ─── Data ────────────────────────────────────────────────
const NAV_ITEMS: NavItem[] = [
  { icon: "⚡", label: "Generate",   id: "generate"   },
  { icon: "📬", label: "Sent Emails",id: "sent"       },
  { icon: "📊", label: "Analytics",  id: "analytics"  },
  { icon: "🧩", label: "Templates",  id: "templates"  },
  { icon: "⚙️", label: "Settings",   id: "settings"   },
];

const MESSAGES: Message[] = [
  {
    role: "bot",
    text: "What service do you offer? I'll research your targets and write emails that actually get replies.",
  },
  {
    role: "user",
    text: "I'm a motion graphics designer for e-commerce brands. Got 3.2M views for a client last month.",
  },
  {
    role: "bot",
    text: "Strong proof point. Paste the companies you want to reach — I'll research each one and generate a unique angle.",
  },
  { role: "user", text: "Nike, Adidas, Zara, H&M, ASOS" },
  {
    role: "bot",
    text: "Researching all 5… Found Nike posts 5x/week with low engagement on Reels. Generating email now ✦",
  },
];

// ─── Sub-components ──────────────────────────────────────

function Sidebar({ active, onSelect }: { active: string; onSelect: (id: string) => void }) {
  return (
    <aside className="cf-sidebar">
      {/* Logo */}
      <div className="cf-sidebar-logo">
        <span className="cf-logo-dot" />
        <span className="cf-sidebar-name">ColdFlow</span>
      </div>

      {/* Nav */}
      <nav className="cf-sidebar-nav">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`cf-nav-item ${active === item.id ? "cf-nav-item--active" : ""}`}
          >
            <span className="cf-nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}

function ChatPanel() {
  const [input, setInput] = useState("");

  return (
    <div className="cf-chat">
      {/* Header */}
      <div className="cf-panel-header">
        <span className="cf-status-dot" />
        <span className="cf-panel-title">AI Assistant</span>
      </div>

      {/* Messages */}
      <div className="cf-messages">
        {MESSAGES.map((msg, i) => (
          <div
            key={i}
            className={`cf-bubble ${msg.role === "user" ? "cf-bubble--user" : "cf-bubble--bot"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="cf-chat-input-row">
        <input
          className="cf-chat-input"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && setInput("")}
        />
        <button className="cf-chat-send" onClick={() => setInput("")}>
          →
        </button>
      </div>
    </div>
  );
}

function EmailPreview() {
  return (
    <div className="cf-preview">
      {/* Header */}
      <div className="cf-panel-header cf-preview-header">
        <span className="cf-panel-title">Email Preview — Nike Inc</span>
        <div className="cf-preview-actions">
          <button className="cf-btn-outline">COPY</button>
          <button className="cf-btn-gold">SEND →</button>
        </div>
      </div>

      {/* Body */}
      <div className="cf-preview-body">
        <p className="cf-preview-text">
          Hi <strong>Sarah</strong>,
        </p>
        <br />
        <p className="cf-preview-text">
          Noticed <strong>@NikeBrand</strong> posts 5x/week but Reels average{" "}
          <span className="cf-gold">12K views</span> vs competitors hitting 400K+.
        </p>
        <br />
        <p className="cf-preview-text">
          I worked with <strong>AdidasSME</strong> last quarter — added kinetic motion sequences →{" "}
          <span className="cf-gold">3.2M views in 30 days</span>, cart clicks up 32%.
        </p>
        <br />
        <p className="cf-preview-text">
          Your audience responds to energy and speed. That&apos;s exactly where motion design wins.
        </p>
        <br />
        <p className="cf-preview-text">
          Open to a quick look at what this could do for your next drop?
        </p>
        <br />
        <p className="cf-preview-text">
          <strong>Ramesh</strong>
        </p>
      </div>

      {/* Personalization Score */}
      <div className="cf-score-bar">
        <span className="cf-score-label">PERSONALIZATION</span>
        <div className="cf-score-track">
          <div className="cf-score-fill" style={{ width: "87%" }} />
        </div>
        <span className="cf-score-value">87/100</span>
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────
export default function ProductSection() {
  const [activeNav, setActiveNav] = useState("generate");

  return (
    <section className="cf-product-section">
      {/* Section Header */}
      <div className="cf-section-header">
        <div className="cf-eyebrow">
          <span className="cf-eyebrow-line" />
          THE PRODUCT
        </div>
        <h2 className="cf-section-title">
          Your command center
          <br />
          for cold outreach.
        </h2>
        <p className="cf-section-sub">
          A precision-built chatbot interface that researches, writes, and sends
          <br />— while you close deals.
        </p>
      </div>

      {/* Dashboard Preview */}
      <div className="cf-dashboard">
        <Sidebar active={activeNav} onSelect={setActiveNav} />
        <ChatPanel />
        <EmailPreview />
      </div>

      {/* ── Styles (scoped via prefix) ── */}
      <style>{`
        /* ── Layout ── */
        .cf-product-section {
          padding: 100px 48px;
          background: #0C0C0F;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', sans-serif;
        }

        .cf-section-header {
          max-width: 1200px;
          margin: 0 auto 56px;
        }

        /* ── Eyebrow ── */
        .cf-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #C9A84C;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .cf-eyebrow-line {
          display: block;
          width: 24px;
          height: 1px;
          background: #C9A84C;
        }

        /* ── Headings ── */
        .cf-section-title {
          font-size: 48px;
          font-weight: 800;
          letter-spacing: -1.5px;
          line-height: 1.1;
          color: #F5F5F7;
          margin: 0 0 16px 0;
        }

        .cf-section-sub {
          font-size: 17px;
          color: #6B6B7A;
          line-height: 1.7;
          margin: 0;
        }

        /* ── Dashboard shell ── */
        .cf-dashboard {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 240px 1fr 1fr;
          background: #131318;
          border: 1px solid #2A2A35;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.6);
          min-height: 440px;
        }

        /* ── Sidebar ── */
        .cf-sidebar {
          background: #1A1A21;
          border-right: 1px solid #2A2A35;
          padding: 20px 16px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .cf-sidebar-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          padding-bottom: 20px;
          margin-bottom: 16px;
          border-bottom: 1px solid #2A2A35;
        }

        .cf-logo-dot {
          display: block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #C9A84C;
          box-shadow: 0 0 10px #C9A84C;
          flex-shrink: 0;
        }

        .cf-sidebar-name {
          font-size: 14px;
          font-weight: 700;
          color: #F5F5F7;
          letter-spacing: -0.2px;
        }

        .cf-sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .cf-nav-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 6px;
          font-size: 13px;
          color: #6B6B7A;
          cursor: pointer;
          transition: all 0.2s;
          background: transparent;
          border: none;
          text-align: left;
          width: 100%;
          font-family: inherit;
        }

        .cf-nav-item:hover {
          background: #131318;
          color: #F5F5F7;
        }

        .cf-nav-item--active {
          background: rgba(201, 168, 76, 0.12);
          color: #C9A84C;
          border: 1px solid rgba(201, 168, 76, 0.2);
        }

        .cf-nav-icon {
          font-size: 15px;
          width: 18px;
          text-align: center;
          flex-shrink: 0;
        }

        /* ── Chat ── */
        .cf-chat {
          border-right: 1px solid #2A2A35;
          display: flex;
          flex-direction: column;
          height: 440px;
        }

        .cf-panel-header {
          padding: 14px 20px;
          border-bottom: 1px solid #2A2A35;
          display: flex;
          align-items: center;
          gap: 8px;
          background: #1A1A21;
          flex-shrink: 0;
        }

        .cf-status-dot {
          display: block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #28CA41;
          animation: cf-pulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes cf-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.85); }
        }

        .cf-panel-title {
          font-size: 13px;
          font-weight: 600;
          color: #F5F5F7;
          letter-spacing: -0.1px;
        }

        .cf-messages {
          flex: 1;
          padding: 16px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 10px;
          scrollbar-width: thin;
          scrollbar-color: #2A2A35 transparent;
        }

        .cf-bubble {
          font-size: 13px;
          line-height: 1.65;
          padding: 12px 14px;
          border-radius: 10px;
          max-width: 86%;
        }

        .cf-bubble--bot {
          background: #1A1A21;
          border: 1px solid #2A2A35;
          border-bottom-left-radius: 3px;
          color: #9A9AAA;
          align-self: flex-start;
        }

        .cf-bubble--user {
          background: rgba(201, 168, 76, 0.1);
          border: 1px solid rgba(201, 168, 76, 0.2);
          border-bottom-right-radius: 3px;
          color: #F5F5F7;
          align-self: flex-end;
        }

        .cf-chat-input-row {
          padding: 12px 16px;
          border-top: 1px solid #2A2A35;
          display: flex;
          gap: 8px;
          flex-shrink: 0;
          background: #0C0C0F;
        }

        .cf-chat-input {
          flex: 1;
          background: #1A1A21;
          border: 1px solid #2A2A35;
          border-radius: 6px;
          padding: 8px 12px;
          font-size: 13px;
          color: #F5F5F7;
          outline: none;
          font-family: inherit;
          transition: border-color 0.2s;
        }

        .cf-chat-input::placeholder { color: #6B6B7A; }
        .cf-chat-input:focus { border-color: rgba(201, 168, 76, 0.4); }

        .cf-chat-send {
          background: #C9A84C;
          border: none;
          color: #0C0C0F;
          width: 34px;
          height: 34px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 15px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s;
        }

        .cf-chat-send:hover { background: #D9B85C; }

        /* ── Email Preview ── */
        .cf-preview {
          display: flex;
          flex-direction: column;
          height: 440px;
        }

        .cf-preview-header {
          justify-content: space-between;
        }

        .cf-preview-actions {
          display: flex;
          gap: 6px;
          margin-left: auto;
        }

        .cf-btn-outline {
          padding: 5px 14px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          letter-spacing: 0.5px;
          background: rgba(201, 168, 76, 0.1);
          color: #C9A84C;
          border: 1px solid rgba(201, 168, 76, 0.25);
          transition: all 0.2s;
          font-family: inherit;
        }

        .cf-btn-outline:hover {
          background: rgba(201, 168, 76, 0.2);
        }

        .cf-btn-gold {
          padding: 5px 14px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          letter-spacing: 0.5px;
          background: #C9A84C;
          color: #0C0C0F;
          border: none;
          transition: background 0.2s;
          font-family: inherit;
        }

        .cf-btn-gold:hover { background: #D9B85C; }

        .cf-preview-body {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: #2A2A35 transparent;
        }

        .cf-preview-text {
          font-size: 13px;
          line-height: 1.75;
          color: #9A9AAA;
          margin: 0;
        }

        .cf-preview-text strong { color: #F5F5F7; }

        .cf-gold { color: #C9A84C; font-weight: 600; }

        /* ── Score Bar ── */
        .cf-score-bar {
          padding: 12px 20px;
          border-top: 1px solid #2A2A35;
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
          background: #0C0C0F;
        }

        .cf-score-label {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: #6B6B7A;
          font-weight: 600;
          flex-shrink: 0;
        }

        .cf-score-track {
          flex: 1;
          height: 4px;
          background: #2A2A35;
          border-radius: 2px;
          overflow: hidden;
        }

        .cf-score-fill {
          height: 100%;
          border-radius: 2px;
          background: linear-gradient(90deg, #C9A84C, #28CA41);
          transition: width 1s ease;
        }

        .cf-score-value {
          font-size: 13px;
          color: #C9A84C;
          font-weight: 700;
          flex-shrink: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .cf-product-section { padding: 60px 20px; }
          .cf-section-title { font-size: 32px; }
          .cf-dashboard {
            grid-template-columns: 1fr;
          }
          .cf-sidebar { display: none; }
          .cf-chat, .cf-preview { height: 380px; }
          .cf-chat { border-right: none; border-bottom: 1px solid #2A2A35; }
        }
      `}</style>
    </section>
  );
}