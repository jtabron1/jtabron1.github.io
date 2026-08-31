import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react";
import Reveal from "./Reveal.jsx";

const projects = [
  {
    title: "AI-Powered IAM Access Governance Agent",
    criteria: ["CC6.1", "CC6.2", "CC6.3"],
    description:
      "Event-driven agent that keeps AWS IAM synchronized with the employee database as the source of truth. Autonomously provisions users, updates policies, and revokes access for terminated employees, with CloudTrail and EventBridge controls that detect and auto-revert unauthorized IAM changes.",
    impact: "Replaces manual access reviews with continuously enforced least privilege.",
    href: "https://github.com/jtabron1/AI-Powered-IAM-Access-Review-Agent",
    videoId: "MKzfnbpXczk",
    featured: true,
  },
  {
    title: "AI-Powered AWS Risk Assessment Agent",
    criteria: ["CC3.2", "CC7.1", "CC7.2"],
    description:
      "Analyzes Security Hub findings on a schedule and generates executive risk reports that translate technical findings into business impact, delivered by email.",
    impact: "Cuts monthly and annual risk assessment time dramatically.",
    href: "https://github.com/jtabron1/AI-Powered-AWS-Risk-Assessment-Agent",
    videoId: "Fjbf9RXx-_I",
  },
  {
    title: "AI-Powered MSA Redlining Agent",
    criteria: [],
    description:
      "Ingests an MSA, segments it into clauses, and evaluates each clause against internal security policy using clause-level RAG grounded in internal standards. Produces a fully redlined Google Doc with strikethroughs, comment blocks, suggested language, and the exact policies referenced.",
    impact: "Gives Security, Legal, and GRC a negotiation-ready redline without hours of manual review.",
    videoId: "JlSKwHXFFrw",
  },
  {
    title: "AI-Powered PR Compliance Monitoring Agent",
    criteria: ["CC8.1"],
    description:
      "Watches GitHub pull requests in real time, validates peer approval against comments and formal reviews, and logs violations with stakeholder notification.",
    impact: "100% change-management evidence coverage.",
    href: "https://github.com/jtabron1/AI-Powered-Pull-Request-Compliance-Agent",
    videoId: "1tc3Nhr_4Kk",
  },
];

function CriteriaTags({ criteria }) {
  if (!criteria?.length) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {criteria.map((c) => (
        <span
          key={c}
          className="rounded-md bg-accent-soft px-2 py-1 font-mono text-xs font-medium text-accent"
        >
          SOC 2 {c}
        </span>
      ))}
    </div>
  );
}

function VideoFrame({ videoId, title }) {
  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-surface shadow-lg shadow-black/10">
      <iframe
        className="aspect-video w-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title={`Demo video: ${title}`}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}

function ProjectLink() {
  return (
    <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-accent">
      <GithubLogo size={16} weight="bold" />
      View on GitHub
      <ArrowUpRight
        size={14}
        weight="bold"
        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </span>
  );
}

export default function Projects() {
  const videoProjects = projects.filter((p) => p.videoId);
  const textProjects = projects.filter((p) => !p.videoId);
  return (
    <section id="projects" className="scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-8 md:py-32">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tighter md:text-5xl">
          AI-powered GRC automation projects
        </h2>
        <p className="mt-4 max-w-[60ch] text-lg text-muted">
          Agents that turn SOC 2 controls into running code.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {videoProjects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <div
              className={`flex h-full flex-col rounded-2xl border border-line p-8 md:p-10 ${
                p.featured
                  ? "bg-gradient-to-br from-accent-soft to-surface"
                  : "bg-surface"
              }`}
            >
              <CriteriaTags criteria={p.criteria} />
              <h3 className="mt-6 text-2xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-muted">{p.description}</p>
              <p className="mt-4 text-lg font-medium">{p.impact}</p>
              <div className="mt-auto">
                <VideoFrame videoId={p.videoId} title={p.title} />
                {p.href && (
                  <a href={p.href} target="_blank" rel="noreferrer" className="group">
                    <ProjectLink />
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}

        {textProjects.map((p) => (
          <Reveal key={p.title}>
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-8 transition-all hover:-translate-y-1 hover:border-accent md:p-10"
            >
              <CriteriaTags criteria={p.criteria} />
              <h3 className="mt-6 text-2xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-muted">{p.description}</p>
              <p className="mt-4 text-lg font-medium">{p.impact}</p>
              <ProjectLink />
            </a>
          </Reveal>
        ))}
      </div>
      </div>
    </section>
  );
}
