"use client";

import { useState } from "react";
import { hasHeroLoaded, markHeroLoaded } from "@/lib/loaderState";
import {
  Loader,
  Navbar,
  Hero,
  Footer,
  EcosystemTracks,
  FoundationJobs,
  EcosystemOrgs,
  PublicObligations,
  Programmes,
  NewsEvents,
  FAQ,
  JoinFoundation,
  ScrollToTop,
} from "@/components";

export default function Home() {
  const [loading, setLoading] = useState(() => !hasHeroLoaded());

  const handleLoaderDone = () => {
    markHeroLoaded();
    setLoading(false);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#E9ECF0] bg-blueprint-grid overflow-x-clip">
      {/* Fullscreen Video Hero Loader Overlay */}
      {loading && <Loader onDone={handleLoaderDone} />}

      {/* Main Page Layout - Pre-rendered under the loader curtain */}
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <EcosystemTracks />
        <FoundationJobs />
        <EcosystemOrgs />
        <PublicObligations />
        <Programmes />
        <NewsEvents />
        <FAQ />
        <JoinFoundation />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}



