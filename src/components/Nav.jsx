import { DownloadSimple } from "@phosphor-icons/react";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#speaking", label: "Speaking" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-block-line bg-block/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
        <a href="#top" className="text-sm font-semibold tracking-tight text-on-block">
          James Tabron
        </a>
        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-6 sm:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-on-block-muted transition-colors hover:text-on-block"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="/JamesTabron_Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-on-block/40 px-4 py-1.5 text-sm font-medium text-on-block transition-all hover:border-on-block hover:bg-on-block/10 active:scale-[0.98]"
          >
            <DownloadSimple size={15} weight="bold" />
            Download resume
          </a>
        </div>
      </nav>
    </header>
  );
}
