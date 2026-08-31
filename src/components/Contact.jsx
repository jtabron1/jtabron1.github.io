import { EnvelopeSimple, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  return (
    <footer id="contact" className="scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-8 md:py-32">
        <Reveal>
          <h2 className="max-w-[18ch] text-4xl font-semibold tracking-tighter md:text-6xl">
            Let's build something amazing together.
          </h2>
          <p className="mt-5 max-w-[55ch] text-muted md:text-lg">
            Open to conversations about GRC engineering, compliance automation, and
            security leadership.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="mailto:jamestabron@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-transform hover:-translate-y-[1px] active:scale-[0.98]"
            >
              <EnvelopeSimple size={16} weight="bold" />
              Email me
            </a>
            <a
              href="https://linkedin.com/in/jamestabron"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-line p-3 text-muted transition-all hover:border-accent hover:text-accent"
            >
              <LinkedinLogo size={18} weight="bold" />
            </a>
            <a
              href="https://github.com/jtabron1"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-line p-3 text-muted transition-all hover:border-accent hover:text-accent"
            >
              <GithubLogo size={18} weight="bold" />
            </a>
          </div>
        </Reveal>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-6 text-sm text-muted sm:px-8">
          <p>© 2026 James Tabron</p>
          <p>Denver, CO</p>
        </div>
      </div>
    </footer>
  );
}
