import { DownloadSimple } from "@phosphor-icons/react";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#speaking", label: "Speaking" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-bar-line bg-bar/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
        <a href="#top" className="text-sm font-semibold tracking-tight text-bar-ink">
          James Tabron
        </a>
        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-6 sm:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-bar-muted transition-colors hover:text-bar-ink"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="/JamesTabron_Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-bar-line px-4 py-1.5 text-sm font-medium text-bar-ink transition-all hover:border-accent hover:text-accent active:scale-[0.98]"
          >
            <DownloadSimple size={15} weight="bold" />
            Download resume
          </a>
        </div>
      </nav>
    </header>
  );
}
