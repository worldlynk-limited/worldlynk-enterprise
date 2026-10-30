import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import GlobalNavbar from './components/GlobalNavbar';
import GlobalFooter from './components/GlobalFooter';
import CommandPaletteModal from './components/CommandPaletteModal';
import NovaChatWidget from './components/NovaChatWidget';
import { SmoothScrollProvider } from './components/SmoothScroll';

import HomePage from './pages/HomePage';
import PlatformPage from './pages/PlatformPage';
import StaffOSPage from './pages/StaffOSPage';
import StudentOSPage from './pages/StudentOSPage';
import SolutionsPage from './pages/SolutionsPage';
import OutcomesPage from './pages/OutcomesPage';
import IntegrationsPage from './pages/IntegrationsPage';
import TrustHubPage from './pages/TrustHubPage';
import DemoPage from './pages/DemoPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import AccessibilityPage from './pages/AccessibilityPage';
import TermsPage from './pages/TermsPage';

export default function App() {
  const [cmdOpen, setCmdOpen] = useState(false);

  return (
    <SmoothScrollProvider>
      <div className="app-layout">
        {/* Architectural Blueprint Grid */}
        <div className="blueprint-grid-bg" />

        {/* Global Navigation with Cmd+K trigger */}
        <GlobalNavbar onOpenSearch={() => setCmdOpen(true)} />

        {/* Main Routed Content */}
        <main style={{ flex: 1, minHeight: '80vh', position: 'relative', zIndex: 1 }}>
          <Routes>
            {/* Core Product & Architecture Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/platform" element={<PlatformPage />} />
            <Route path="/staff-os" element={<StaffOSPage />} />
            <Route path="/student-os" element={<StudentOSPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/solutions/:role" element={<SolutionsPage />} />
            <Route path="/outcomes" element={<OutcomesPage />} />
            <Route path="/integrations" element={<IntegrationsPage />} />

            {/* Trust, Governance & Procurement */}
            <Route path="/trust" element={<TrustHubPage />} />

            {/* Engagement & Campus Inquiries */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/demo" element={<DemoPage />} />

            {/* Legal & Standards */}
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/accessibility" element={<AccessibilityPage />} />
            <Route path="/terms" element={<TermsPage />} />

            {/* Redirects for Consolidated & Legacy Routes */}
            <Route path="/security" element={<Navigate to="/trust" replace />} />
            <Route path="/responsible-ai" element={<Navigate to="/trust" replace />} />
            <Route path="/journey" element={<Navigate to="/platform" replace />} />
            <Route path="/funnel" element={<Navigate to="/platform" replace />} />
            <Route path="/how-it-works" element={<Navigate to="/platform" replace />} />
            <Route path="/founders" element={<Navigate to="/contact" replace />} />
            <Route path="/careers" element={<Navigate to="/contact" replace />} />

            {/* Catch-all fallback */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Global Mega Footer */}
        <GlobalFooter />

        {/* Global Interactive Tools */}
        <CommandPaletteModal isOpen={cmdOpen} onClose={setCmdOpen} />
        <NovaChatWidget />
      </div>
    </SmoothScrollProvider>
  );
}
