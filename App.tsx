import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { PublicLayout } from './components/PublicLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services, Portfolio, Pricing, Contact } from './pages/OtherPages';
import { PrivacyPolicy, TermsOfService, CookiePolicy } from './pages/Legal';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiePolicy />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}