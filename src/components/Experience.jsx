import { useEffect, useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import Reveal from "./Reveal.jsx";
import { AquiaCaseStudy, CaseStudyModal, TwilioCaseStudy } from "./CaseStudy.jsx";

const featuredRoles = [
  {
    role: "Director of GRC Engineering",
    company: "Aquia",
    dates: "2025 to present",
    highlights: [
      "Architected and deployed a serverless AWS data warehouse (Step Functions, Glue, S3, Athena, Redshift) with an automated, PII-safe ETL pipeline processing 282K nightly records from DynamoDB, enabling self-service analytics for a state government platform",
      "Designed an event-driven serverless security control plane (Step Functions, EventBridge, OPA/Rego policies) to continuously validate app configs against JSON baselines for NIST 800-53 Rev. 5 compliance, enforcing cross-account auto-remediation under a <15-minute SLA.",
    ],
    caseStudy: {
      id: "aquia",
      framing: "Built a PII-safe business data warehouse for a state government platform",
      metrics: [
        { value: "4 mo", label: "from zero to production warehouse" },
        { value: "282K", label: "records processed nightly, unattended" },
        { value: "7", label: "self-serve datasets refreshed daily" },
      ],
    },
  },
  {
    role: "Director, Software Engineering",
    company: "Twilio",
    dates: "2022 to 2025",
    highlights: [
      "Directed technical strategy for a $78M marketing automation portfolio enabling 44.4B annual transactions and 53% YoY revenue growth.",
      "Modernized event-driven AWS microservices, doubling traffic capacity while cutting compute costs by $10M+. Led 33 engineers and 5 managers at 95% retention.",
    ],
    caseStudy: {
      id: "twilio",
      framing: "Led the cellularization of a hypergrowth marketing platform",
      metrics: [
        { value: "$2M", label: "infrastructure cost savings" },
        { value: "12x", label: "increase in enterprise customers" },
        { value: "3x", label: "data growth absorbed, zero outages" },
      ],
    },
  },
  {
    role: "Senior Manager, Software Engineering",
    company: "Twilio",
    dates: "2020 to 2022",
    highlights: [
      "Ran a $20M ARR email platform, executed a zero-downtime fleet-wide OS upgrade remediating 100% of critical vulnerabilities, and drove Twilio's first annual disaster recovery test for email marketing.",
    ],
  },
  {
    role: "Manager, Risk and Compliance",
    company: "Snapdocs",
    dates: "2019 to 2020",
    highlights: [
      "Built a SOC 2 and ISO 27001-aligned GRC program in 6 months, unlocking $11M in revenue through trust assurance and FAIR-based risk assessment in the product pipeline.",
    ],
  },
];

const earlierRoles = [
  {
    role: "Lead Senior Security Specialist",
    company: "Twilio",
    dates: "2019",
    note: "Co-led the Security Compliance Assurance program and directed annual penetration testing.",
  },
  {
    role: "Security Compliance Analyst",
    company: "SendGrid",
    dates: "2016 to 2019",
    note: "Led SOC 2 audit readiness across multiple cycles and owned enterprise risk management.",
  },
  {
    role: "IT Security Coordinator",
    company: "Baylor College of Medicine",
    dates: "2014 to 2016",
    note: "Originated vulnerability management policy aligned with HIPAA and authored incident response process.",
  },
];

/* Each case study is linkable by URL hash; the back button closes an open one. */
const caseStudyHashes = { twilio: "#case-study", aquia: "#case-study-aquia" };
const caseFromHash = () =>
  Object.keys(caseStudyHashes).find((id) => caseStudyHashes[id] === window.location.hash) ??
  null;

export default function Experience() {
  const [openCase, setOpenCase] = useState(caseFromHash);

  useEffect(() => {
    const sync = () => setOpenCase(caseFromHash());
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const openCaseStudy = (id) => {
    window.location.hash = caseStudyHashes[id];
    setOpenCase(id);
  };
  const closeCaseStudy = () => {
    history.replaceState(null, "", window.location.pathname + window.location.search);
    setOpenCase(null);
  };

  return (
    <section id="experience" className="scroll-mt-16 border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-8 md:py-32">
        <Reveal>
          <h2 className="max-w-[24ch] text-3xl font-semibold tracking-tighter md:text-5xl">
            Twelve years across security, compliance, and engineering
          </h2>
        </Reveal>

        <div className="mt-14 space-y-14">
          {featuredRoles.map((r, i) => (
            <Reveal key={r.role + r.company} delay={i * 0.05}>
              <div className="grid gap-3 md:grid-cols-12 md:gap-8">
                <p className="font-mono text-xl text-muted md:col-span-3 md:pt-1">{r.dates}</p>
                <div className="md:col-span-9">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {r.role}
                    <span className="text-accent"> at {r.company}</span>
                  </h3>
                  <div className="mt-3 max-w-[75ch] space-y-2">
                    {r.highlights.map((h) => (
                      <p key={h} className="text-lg leading-relaxed text-muted">
                        {h}
                      </p>
                    ))}
                  </div>
                  {r.caseStudy && (
                    <button
                      onClick={() => openCaseStudy(r.caseStudy.id)}
                      className="group mt-5 block w-full max-w-[75ch] rounded-2xl border border-line bg-surface-tint p-6 text-left transition-all hover:-translate-y-1 hover:border-accent"
                    >
                      <p className="text-lg font-semibold tracking-tight">{r.caseStudy.framing}</p>
                      <div className="mt-4 grid gap-4 sm:grid-cols-3">
                        {r.caseStudy.metrics.map((m) => (
                          <div key={m.label}>
                            <p className="font-mono text-2xl font-medium tracking-tight text-accent">
                              {m.value}
                            </p>
                            <p className="mt-1 text-sm leading-snug text-muted">{m.label}</p>
                          </div>
                        ))}
                      </div>
                      <span className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-accent">
                        Read the case study
                        <ArrowUpRight
                          size={14}
                          weight="bold"
                          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
            Earlier roles
          </h3>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            {earlierRoles.map((r) => (
              <div key={r.role + r.company} className="rounded-2xl bg-surface-tint p-6">
                <p className="font-mono text-base text-muted">{r.dates}</p>
                <h4 className="mt-2 font-semibold tracking-tight">{r.role}</h4>
                <p className="text-sm text-accent">{r.company}</p>
                <p className="mt-3 leading-relaxed text-muted">{r.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-[75ch] text-sm text-muted">
            CISSP since 2017. B.S. in Computer Information Systems, Indiana University.
          </p>
        </Reveal>
      </div>
      <CaseStudyModal
        open={openCase === "twilio"}
        onClose={closeCaseStudy}
        ariaLabel="Case study: cellularizing Twilio's marketing platform"
      >
        <TwilioCaseStudy />
      </CaseStudyModal>
      <CaseStudyModal
        open={openCase === "aquia"}
        onClose={closeCaseStudy}
        ariaLabel="Case study: PII-safe business data warehouse for a state government platform"
      >
        <AquiaCaseStudy />
      </CaseStudyModal>
    </section>
  );
}
