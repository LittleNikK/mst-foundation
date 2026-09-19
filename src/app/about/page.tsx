import { ShieldCheck, Scale, Award, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Card, Button } from "@/components";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 sm:px-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-amber-600 mb-8 transition"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Home
      </Link>

      <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold text-amber-700 shadow-sm backdrop-blur-md mb-4">
        About the Foundation
      </div>

      <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 mb-6 font-[var(--font-outfit)]">
        Stewarding Long-Term Neutrality &amp; Open Innovation
      </h1>

      <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mb-12 font-normal">
        The Smart Angelos Foundation is an independent, non-profit organization dedicated to fostering a resilient, neutral, and decentralized network ecosystem. We support core protocol research, grant programs, and validator decentralization.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/15 text-amber-600 mb-4 shadow-sm">
            <Scale className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">Protocol Neutrality</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Safeguarding open infrastructure free from corporate control or single-party governance influence.
          </p>
        </Card>

        <Card>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-600 mb-4 shadow-sm">
            <Award className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">Research &amp; Grants</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Deploying non-dilutive capital to academics, researchers, and builders advancing consensus and privacy tech.
          </p>
        </Card>

        <Card>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/15 text-amber-600 mb-4 shadow-sm">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">Validator Support</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Assisting independent node operators globally to maintain network robustness and decentralization.
          </p>
        </Card>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Link href="/">
          <Button variant="dark">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
