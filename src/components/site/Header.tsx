import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { NAV } from "@/data/site";
import { SmaMark } from "./SmaMark";

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center ${className}`}>
      <SmaMark className="h-8 w-auto md:h-10" />
    </span>
  );
}

function Socials({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href="https://www.linkedin.com/company/productsamplingagency"
        aria-label="Product Sampling Agency on LinkedIn"
        className="transition-opacity hover:opacity-60"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.4 9.5h5.16V21H2.4V9.5Zm7.7 0h4.95v1.57h.07c.69-1.2 2.37-2 4.1-2 3.4 0 4.03 2.05 4.03 4.98V21h-5.16v-5.7c0-1.36-.28-2.6-1.87-2.6-1.55 0-2 1.28-2 2.6V21H10.1V9.5Z" />
        </svg>
      </a>
      <a
        href="https://www.instagram.com/productsamplingagency/"
        aria-label="Product Sampling Agency on Instagram"
        className="transition-opacity hover:opacity-60"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.96.24 2.65.5.7.28 1.3.65 1.9 1.24.58.59.95 1.18 1.23 1.89.27.69.46 1.48.51 2.65.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.96-.5 2.65-.29.7-.66 1.3-1.24 1.9-.6.58-1.19.95-1.9 1.23-.68.27-1.47.46-2.64.51-1.27.06-1.65.07-4.86.07s-3.59-.01-4.86-.07c-1.17-.05-1.96-.24-2.64-.5a5.26 5.26 0 0 1-1.9-1.24 5.26 5.26 0 0 1-1.24-1.9c-.26-.68-.45-1.47-.5-2.64C2.2 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.96.5-2.65.28-.7.65-1.3 1.24-1.89A5.26 5.26 0 0 1 5.9 2.37c.69-.26 1.48-.45 2.65-.5C9.82 2.2 10.2 2.2 12 2.2Zm0 4.6a5.2 5.2 0 1 0 0 10.4 5.2 5.2 0 0 0 0-10.4Zm0 8.58a3.38 3.38 0 1 1 0-6.76 3.38 3.38 0 0 1 0 6.76Zm6.63-8.79a1.22 1.22 0 1 1-2.43 0 1.22 1.22 0 0 1 2.43 0Z" />
        </svg>
      </a>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 md:px-10">
        <Link to="/" className="text-foreground" aria-label="Product Sampling Agency home">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {NAV.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                to={item.to!}
                className="flex items-center gap-1 text-[0.95rem] font-medium text-foreground transition-opacity hover:opacity-60"
                activeProps={{ className: "opacity-60" }}
              >
                {item.label}
                {item.children ? (
                  <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
                    <path d="M5.5 7.5 10 12l4.5-4.5H5.5Z" />
                  </svg>
                ) : null}
              </Link>
              {item.children ? (
                <div className="invisible absolute left-0 top-full w-64 translate-y-1 rounded-2xl bg-background p-3 opacity-0 shadow-[0_18px_50px_-20px_rgba(33,40,68,0.45)] transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.to}
                      className="block rounded-xl px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-raised"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <Socials className="text-foreground" />
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex flex-col gap-[5px] p-2 text-foreground lg:hidden"
          aria-label="Open menu"
        >
          <span className="block h-[2px] w-7 bg-current" />
          <span className="block h-[2px] w-7 bg-current" />
          <span className="block h-[2px] w-7 bg-current" />
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 flex flex-col bg-panel px-6 py-6 text-foreground lg:hidden">
          <div className="flex items-center justify-between">
            <Wordmark />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2 text-3xl leading-none"
            >
              ×
            </button>
          </div>
          <nav className="mt-10 flex flex-col gap-5 overflow-y-auto" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.label}
                to={item.to!}
                onClick={() => setOpen(false)}
                className="font-display text-3xl font-semibold"
              >
                {item.label}
              </Link>
            ))}
            <Socials />
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export { Wordmark, Socials };
