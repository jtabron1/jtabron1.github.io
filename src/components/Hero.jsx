import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, DownloadSimple } from "@phosphor-icons/react";
import headshot from "../assets/headshot.jpeg";

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  const reduce = useReducedMotion();
  const fadeUp = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section id="top">
      <div className="mx-auto flex min-h-[100dvh] max-w-7xl items-center px-4 pt-16 sm:px-8">
      <div className="grid w-full items-center gap-12 py-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <motion.p
            {...fadeUp(0)}
            className="font-mono text-xs uppercase tracking-[0.18em] text-accent"
          >
            James Tabron · GRC Engineering Leader
          </motion.p>
          <motion.h1
            {...fadeUp(0.08)}
            className="mt-5 text-4xl font-semibold tracking-tighter text-balance md:text-6xl lg:text-7xl"
          >
            GRC, engineered like software.
          </motion.h1>
          <motion.p
            {...fadeUp(0.16)}
            className="mt-6 max-w-[52ch] text-base leading-relaxed text-muted md:text-lg"
          >
            A CISSP-certified leader who offers a rare combination of deep GRC
            expertise with large scale engineering leadership and AI-Powered
            automation.
          </motion.p>
          <motion.div {...fadeUp(0.24)} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-transform hover:-translate-y-[1px] active:scale-[0.98]"
            >
              View projects
              <ArrowDown size={15} weight="bold" />
            </a>
            <a
              href="/JamesTabron_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium transition-all hover:border-accent hover:text-accent active:scale-[0.98]"
            >
              <DownloadSimple size={15} weight="bold" />
              Download resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
          className="lg:col-span-5"
        >
          <div className="relative mx-auto max-w-sm lg:ml-auto">
            <div className="absolute -inset-3 rounded-2xl bg-accent-soft" aria-hidden="true" />
            <img
              src={headshot}
              alt="James Tabron"
              width="958"
              height="1080"
              fetchPriority="high"
              className="relative w-full rounded-2xl object-cover shadow-xl shadow-black/10"
            />
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
