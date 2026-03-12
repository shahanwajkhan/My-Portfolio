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

import CursorFollower from './components/ui/CursorFollower';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-background text-gray-100 min-h-screen selection:bg-primary/30 selection:text-white">
      <CursorFollower />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent z-[100] origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <Suspense fallback={<div className="h-20" />}>
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
