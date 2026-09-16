"use client";

import { useState } from "react";
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
} from "@/components";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen flex flex-col bg-[#E9ECF0] bg-blueprint-grid overflow-x-clip">
      {/* Fullscreen Video Hero Loader Overlay */}
      {loading && <Loader onDone={() => setLoading(false)} />}

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
    </div>
  );
}



