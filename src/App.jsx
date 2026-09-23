import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import GlobalNavbar from './components/GlobalNavbar';
import GlobalFooter from './components/GlobalFooter';
import CommandPaletteModal from './components/CommandPaletteModal';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

import HomePage from './pages/HomePage';
import PlatformPage from './pages/PlatformPage';
import StaffOSPage from './pages/StaffOSPage';
import StudentOSPage from './pages/StudentOSPage';
import SolutionsPage from './pages/SolutionsPage';
import OutcomesPage from './pages/OutcomesPage';
import SecurityPage from './pages/SecurityPage';
import DemoPage from './pages/DemoPage';
import HowItWorksPage from './pages/HowItWorksPage';
import FoundersPage from './pages/FoundersPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import AccessibilityPage from './pages/AccessibilityPage';
import TermsPage from './pages/TermsPage';
import TrustHubPage from './pages/TrustHubPage';
import IntegrationsPage from './pages/IntegrationsPage';

export default function App() {
  const [cmdOpen, setCmdOpen] = useState(false);

  return (
    <div className="app-layout">
      {/* Scroll restoration on route change */}
      <ScrollToTop />

      {/* Architectural Blueprint Grid */}
      <div className="blueprint-grid-bg" />

      {/* Global Navigation with Cmd+K trigger */}
      <GlobalNavbar onOpenSearch={() => setCmdOpen(true)} />

      {/* Main Routed Content */}
      <main style={{ flex: 1, minHeight: '80vh', position: 'relative', zIndex: 1 }}>
        <Routes>
          {/* Core Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/staff-os" element={<StaffOSPage />} />
          <Route path="/student-os" element={<StudentOSPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/:role" element={<SolutionsPage />} />
          <Route path="/outcomes" element={<OutcomesPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/demo" element={<DemoPage />} />

          {/* Platform Sub-Pages */}
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/integrations" element={<IntegrationsPage />} />

          {/* Company Pages */}
          <Route path="/founders" element={<FoundersPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Legal Pages */}
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />
          <Route path="/terms" element={<TermsPage />} />

          {/* Trust & Procurement */}
          <Route path="/trust" element={<TrustHubPage />} />

          {/* Catch-all */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Global Mega Footer */}
      <GlobalFooter />

      {/* Global Interactive Tools */}
      <CommandPaletteModal isOpen={cmdOpen} onClose={setCmdOpen} />
    </div>
  );
}
