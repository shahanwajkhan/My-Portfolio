import React, { Suspense, lazy } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';

const AboutSection = lazy(() => import('./components/sections/AboutSection'));
const ProjectsSection = lazy(() => import('./components/sections/ProjectsSection'));
const SkillsSection = lazy(() => import('./components/sections/SkillsSection'));
const CertificationsSection = lazy(() => import('./components/sections/CertificationsSection'));
const AchievementsSection = lazy(() => import('./components/sections/AchievementsSection'));
const EducationSection = lazy(() => import('./components/sections/EducationSection'));
const ExperienceSection = lazy(() => import('./components/sections/ExperienceSection'));
const ContactSection = lazy(() => import('./components/sections/ContactSection'));

function App() {
  return (
    <div className="bg-background text-gray-100 min-h-screen selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <Suspense fallback={<div className="h-screen bg-background" />}>
          <AboutSection />
          <SkillsSection />
          <EducationSection />
          <ExperienceSection />
          <ProjectsSection />
          <CertificationsSection />
          <AchievementsSection />
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
