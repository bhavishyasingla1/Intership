import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AtAGlance } from './components/AtAGlance';
import { Timeline } from './components/Timeline';
import { TimelineToProjectsTransition } from './components/TimelineToProjectsTransition';
import { FlagshipProjects } from './components/FlagshipProjects';
import { ProjectOverview } from './components/ProjectOverview';
import { WhatChangedSection } from './components/WhatChangedSection';
import { DistributionSection } from './components/DistributionSection';
import { MetricsSection } from './components/MetricsSection';
import { AIAutomationSection } from './components/AIAutomationSection';
import { BeyondTheScreen } from './components/BeyondTheScreen';
import { NextChapter } from './components/NextChapter';
import { Footer } from './components/Footer';
import { Lightbox } from './components/Lightbox';
import type { EvidenceItem } from './types';

function App() {
  const [selectedEvidence, setSelectedEvidence] = useState<EvidenceItem | null>(null);

  const handleCloseLightbox = () => {
    setSelectedEvidence(null);
  };

  return (
    <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Compact Top Navigation */}
      <Navbar />

      {/* Main Content Flow — Locked 10-Part Architecture */}
      <main style={{ flex: 1 }}>
        {/* 01: Hero — Nine months of building at Codju */}
        <Hero />

        {/* 02: The Central Story — Started with the surface → Built underneath it */}
        <AtAGlance />

        {/* 03: Nine-Month Timeline — Activity-driven chronological record */}
        <Timeline />

        {/* Narrative Transition: The work started with visibility → Then I started building what sat underneath it */}
        <TimelineToProjectsTransition />

        {/* 04: What I Built — 7 Flagship projects (Context → Action → Output → Evidence) + Additional initiatives */}
        <section style={{ backgroundColor: '#ffffff' }}>
          <FlagshipProjects />
          <div className="container" style={{ paddingBottom: '72px' }}>
            <ProjectOverview />
          </div>
        </section>

        {/* Business Value: What Changed? (Shipped, Measured, Iterating) */}
        <WhatChangedSection />

        {/* 05: Distribution & Discoverability — Making Codju easier to find */}
        <DistributionSection />

        {/* 06: By the Numbers — Core verified snapshots with non-causal attribution footnote */}
        <MetricsSection />

        {/* 07: Systems & Experimentation — "AI became another tool in the workflow" */}
        <AIAutomationSection />

        {/* 08: Beyond the Screen — Neutral personal & team photo placeholders + reflections */}
        <BeyondTheScreen />

        {/* 09: Final Reflection — "I came in through marketing. I found myself increasingly interested in the systems behind it." */}
        <NextChapter />
      </main>

      {/* Lightbox Modal (future-proofed for when screenshots are added) */}
      <Lightbox item={selectedEvidence} onClose={handleCloseLightbox} />

      {/* 10: Simple Footer */}
      <Footer />
    </div>
  );
}

export default App;
