import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { X } from "@phosphor-icons/react";

/* Quantitative metrics and standout details are accented for recruiter scanning. */
function Metric({ children }) {
  return <strong className="font-semibold text-accent">{children}</strong>;
}

function StarSection({ label, children }) {
  return (
    <section className="mt-8 first:mt-0">
      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">{label}</h3>
      <div className="mt-3 space-y-3 leading-relaxed text-ink">{children}</div>
    </section>
  );
}

function CaseStudyHeader({ title, roleLine }) {
  return (
    <>
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Case study</p>
      <h2 className="mt-3 max-w-[26ch] text-2xl font-semibold tracking-tight md:text-3xl">
        {title}
      </h2>
      <p className="mt-2 text-sm text-muted">{roleLine}</p>
    </>
  );
}

export function CaseStudyModal({ open, onClose, ariaLabel, children }) {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={ariaLabel}
            className="relative max-h-[85dvh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-line bg-bg p-6 shadow-2xl shadow-black/30 md:p-10"
            initial={reduce ? false : { opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              autoFocus
              aria-label="Close case study"
              className="absolute right-4 top-4 rounded-full border border-line p-2 text-muted transition-all hover:border-accent hover:text-accent active:scale-[0.98]"
            >
              <X size={16} weight="bold" />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function TwilioCaseStudy() {
  return (
    <>
      <CaseStudyHeader
        title="Cellularizing Twilio's marketing automation platform"
        roleLine="Director, Software Engineering · Twilio · 2022 to 2025"
      />

      <StarSection label="Situation">
        <p>
          Hypergrowth from 2020 to 2024 pushed the platform into hard architectural
          ceilings. Kinesis ran at <Metric>128 partitions</Metric>, spiky traffic broke
          fair scheduling across SQS, and contact processing regularly missed SLOs.
          Snowflake ingestion costs had climbed to <Metric>8.5% of revenue</Metric>{" "}
          against a ~6% target, and we projected outgrowing the largest available
          warehouse size within <Metric>two years</Metric>.
        </p>
        <p>
          Blast radius was existential: <Metric>two us-east-1 outages in three years</Metric>,
          one during Black Friday season, each took the entire system down. Holiday
          peaks demanded <Metric>3x send volume</Metric> with{" "}
          <Metric>10x update spikes</Metric>, and a DynamoDB key design capped accounts
          at an artificial <Metric>50M-contact limit</Metric> that blocked enterprise
          deals.
        </p>
      </StarSection>

      <StarSection label="Task">
        <p>
          As the Director accountable for the platform's availability, scalability,
          and cost profile, I owned the decision on how to fix it. I directed the
          evaluation of four options: migrating customers to Segment, replacing
          Snowflake with ClickHouse, tuning ingestion with Snowflake experts, and
          cellularization, already proven in Twilio's email pipeline. My senior
          architect developed the technical proposal; I gained buy-in from my VP,
          sponsored it through the architecture group, and made the call to invest
          in cellularization, judged on availability, blast radius, infrastructure
          complexity, scale impact, and the regional roadmap.
        </p>
      </StarSection>

      <StarSection label="Action">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Delegated technical design to my senior architect (pod routing, domain
            boundaries, cross-account IAM) and reviewed the key architectural
            decisions at each stage
          </li>
          <li>
            Structured delivery into owned workstreams: routing, telemetry,
            deployment, testing, pod automation, and Snowflake podification
          </li>
          <li>
            Secured executive sponsorship and cross-team commitments for IAM
            authorization, deployment tooling, and account provisioning
          </li>
          <li>
            Ran the delivery cadence of milestone reviews and risk tracking, and made
            the scope trade-offs, deliberately deferring pod-migration tooling and
            canary automation to protect the timeline
          </li>
          <li>
            Held the bar on operational readiness before cutover: pod-aware
            telemetry, runbooks, and on-call preparedness
          </li>
        </ul>
      </StarSection>

      <StarSection label="Result">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Contained blast radius: a later us-east-1 outage caused only{" "}
            <Metric>partial impact</Metric> where it previously meant a complete
            system outage
          </li>
          <li>
            Absorbed <Metric>2x contact data growth in 9 months</Metric> and{" "}
            <Metric>3x in 18 months</Metric> without the outages that growth would
            previously have caused
          </li>
          <li>
            A fraud event that injected <Metric>2B+ contacts</Metric> was isolated to
            a single pod
          </li>
          <li>
            Enterprise customers grew from <Metric>1 to 12</Metric> once the
            50M-contact ceiling was removed
          </li>
          <li>
            Delivered roughly <Metric>$2M in infrastructure cost savings</Metric> by
            heading off Snowflake ingestion growth projected to reach $1.5M+ per year
          </li>
          <li>
            Unlocked regional deployment and migration of on-prem customers to cloud
            infrastructure
          </li>
        </ul>
        <p className="text-sm text-muted">
          Trade-offs, honestly: more infrastructure to manage, slower deployments at
          first, and early on-call friction until pod IDs landed in every log line.
        </p>
      </StarSection>
    </>
  );
}

export function AquiaCaseStudy() {
  return (
    <>
      <CaseStudyHeader
        title="A PII-safe business data warehouse for a state government platform"
        roleLine="Director of GRC Engineering · Aquia · 2026"
      />

      <StarSection label="Situation">
        <p>
          The platform helps state residents start and run a business, and two data
          sources described what was happening on it: a DynamoDB user table (who
          registered, which roadmap tasks were complete) and Google Analytics 4 (what
          people did on the site). Neither could answer a question on its own, so
          anything that spanned both became an engineering request. A product manager
          asking whether a page redesign improved task completion waited days for a
          hand-reconciled answer, and most questions simply went unasked. There was
          no warehouse, no pipeline, no shared model.
        </p>
      </StarSection>

      <StarSection label="Task">
        <p>
          Deliver self-service analytics for the product team on a government
          platform where privacy is non-negotiable: join both sources into one
          queryable model, strip personal information by design rather than by
          review, and never touch the live production table.
        </p>
      </StarSection>

      <StarSection label="Action">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Architected a nightly serverless pipeline: point-in-time DynamoDB
            snapshots (read-only, never the live table), PySpark transforms on Glue,
            a parallel GA4 feed from BigQuery, and a dimensional model in Redshift
            Serverless feeding QuickSight
          </li>
          <li>
            Orchestrated it with Step Functions using callback tokens, so long-running
            steps suspend at zero cost, and per-step failure handlers, so a 3 a.m.
            alert names the stage that broke
          </li>
          <li>
            Enforced privacy by construction: a field reaches the warehouse only if
            explicitly allowlisted in code, anything unrecognized is dropped and
            reported, and every run emits a schema report, an audit trail that is
            generated, not asserted
          </li>
          <li>
            Hardened email protection from a plain digest to a keyed HMAC held in
            Secrets Manager, rewriting every retained partition so no historical data
            was left on the weaker scheme
          </li>
          <li>
            Built a schema-change tool that surfaces evidence and suggested actions
            for new fields while leaving the privacy judgment to human review in the
            pull request
          </li>
          <li>
            Recorded every significant decision as an architecture decision record at
            the time it was made, with all infrastructure defined as code
          </li>
        </ul>
      </StarSection>

      <StarSection label="Result">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Product managers now answer their own questions with{" "}
            <Metric>zero engineering involvement</Metric>: campaign attribution,
            funnel drop-off, and feature impact are a query, not a project
          </li>
          <li>
            <Metric>282K records</Metric> transformed and cataloged nightly,
            unattended
          </li>
          <li>
            <Metric>7 self-serve datasets</Metric> refreshed daily on a{" "}
            <Metric>9-table</Metric> dimensional model spanning behavioral and
            business data
          </li>
          <li>
            Shipped in <Metric>4 months</Metric>: 8 CDK stacks,{" "}
            <Metric>273 commits</Metric>, and <Metric>9 architecture decision
            records</Metric> documenting the reasoning as it happened
          </li>
          <li>
            Audit-ready privacy posture: read-only production access, allowlist-only
            fields, and a generated schema report every run
          </li>
        </ul>
      </StarSection>
    </>
  );
}
