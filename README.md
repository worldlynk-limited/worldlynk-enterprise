# WorldLynk Enterprise — The Autonomous Agentic Campus OS

This standalone project implements the complete **Risely.ai Website UX / Product Blueprint** (Batches 1–4) as an enterprise showcase for the WorldLynk higher education ecosystem.

It maps the full technical and operational capabilities of:
1. **`Study-Uk-Circle`**: International student super-app (160+ British universities, PBSA verified accommodations, 20h Tier-4 job filter).
2. **`uniportal`**: University Staff OS / Compass portal with 20+ specialized views (Admissions, Live Attendance, Early Alerts, Course Fit).
3. **`uniportal-server`**: Multi-tenant Next.js 14 API server with BullMQ worker queues, Redis locks, Moodle LMS sync, and sub-180ms rotating QR attendance.
4. **`worldlynk-stripe-server`**: Financial infrastructure with Stripe Connect marketplace escrow and WhatsApp/Telegram phone identity bridge.
5. **`worldlynk-bot`**: Mastra multi-agent orchestration fabric hosting 30 specialized subagents and Baileys WhatsApp/Telegram channels.

---

## 🚀 Running the Project

```bash
cd worldlynk-enterprise
npm run dev
```

Visit: `http://localhost:5174`

---

## 🗺 Site Architecture & Page Map (Batches 1–4 Blueprint)

- **`/` (Landing Page)**: The Flagship Command Center Homepage.
  - Institutional Hero Telemetry Mockup (`COMPASS TERMINAL // ROYAL HOLLOWAY`)
  - Live Streaming Activity of 30 Mastra Agents
  - The Signature 5-Stage Cross-Office Domino Flow
  - The 4 Core Architectural Pillars (Fabric, Agent Graph, Cortex, Arbiter)
  - Universal Primitives Demo (One Record, Agent Card, Approval Gate, Audit Ledger, Data Lineage)
  - Dual OS Split View (Staff OS vs Student OS)
  - Enterprise Connector Matrix (Moodle, Banner/SITS, Stripe, WhatsApp)
  - Institutional Scoreboard (+28% yield, 0 UKVI breaches, -44% admin load)
  - Trust & UKVI Compliance Hub
  - Role-based Campus Simulation Request
- **`/platform`**: Deep dive into Fabric (Zero-Migration Data Unification), Agent Graph, Cortex, and Arbiter.
- **`/staff-os`**: 20-Module Staff Operational Layer with active triage queues and human approval gates.
- **`/student-os`**: Student super-app view with degree progress, 20h work tracker, and interactive pre-departure checklist.
- **`/solutions`**: Tailored solutions for Vice-Chancellors, Academic Registrars, Admissions Deans, and Compliance Officers.
- **`/outcomes`**: Higher education economics and persistence ROI scoreboard.
- **`/security`**: Multi-stage model-call PII redaction pipeline, UK GDPR & DPA 2018 compliance, and HECVAT/SOC-2 certifications.
- **`/integrations`**: Complete filterable connector matrix for LMS, SIS, Financial, and Channel gateways.
- **`/demo`**: Contextual institutional simulation scheduler.
