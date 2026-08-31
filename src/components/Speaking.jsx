import Reveal from "./Reveal.jsx";
import talkPhoto from "../assets/rmisc-talk.jpeg";

export default function Speaking() {
  return (
    <section id="speaking" className="scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-8 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <img
              src={talkPhoto}
              alt="James Tabron speaking at the RMISC conference, Colorado Convention Center"
              width="1036"
              height="1400"
              loading="lazy"
              className="w-full rounded-2xl object-cover shadow-xl shadow-black/10"
            />
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.08}>
            <p className="font-mono text-sm text-accent">
              RMISC 2026 · Colorado Convention Center, Denver
            </p>
            <h2 className="mt-4 max-w-[24ch] text-3xl font-semibold tracking-tighter md:text-5xl">
              AI-Powered GRC: Scaling Risk &amp; Compliance With Intelligent Agents
            </h2>
            <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-muted">
              A session for risk, compliance, security, and audit professionals on
              using agent-based automation to eliminate manual GRC bottlenecks, with
              real examples spanning the GRC lifecycle: risk assessment, change
              management, contract review, and sales enablement.
            </p>
            <p className="mt-4 max-w-[58ch] text-lg leading-relaxed text-muted">
              Attendees left with a practical view of where AI agents deliver the
              most value in GRC today, and how to begin applying them in their own
              programs.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
