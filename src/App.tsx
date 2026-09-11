import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation } from
'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { QuotePage } from './pages/QuotePage';
import { GalleryPage } from './pages/GalleryPage';
import { WhySchoolsPage } from './pages/WhySchoolsPage';
import { SchoolUniformsPage } from './pages/services/SchoolUniformsPage';
import { MedicalWearsPage } from './pages/services/MedicalWearsPage';
import { EmbroideryPage } from './pages/services/EmbroideryPage';
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/why-schools" element={<WhySchoolsPage />} />
        <Route
          path="/services/school-uniforms"
          element={<SchoolUniformsPage />} />

        <Route path="/services/medical-wears" element={<MedicalWearsPage />} />
        <Route path="/services/embroidery" element={<EmbroideryPage />} />
      </Routes>
    </AnimatePresence>);

}
export function App() {
  return (
    <Router>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>);

}
