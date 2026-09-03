import { Link } from "@tanstack/react-router";
import { OFFICES } from "@/data/site";
import { Socials, Wordmark } from "./Header";
import { PillLink } from "./ui";

export function Footer() {
  return (
    <footer className="mt-6 bg-background px-5 pb-10 md:px-10">
      <div className="mx-auto max-w-[1600px]">
        <div className="rounded-panel bg-raised px-6 py-12 md:px-14 md:py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                Tell us what you are launching
              </h2>
              <p className="mt-3 max-w-md text-foreground/70">
                What the product is, who needs to try it and roughly when. We come back with sites
                and a count.
              </p>
              <div className="mt-6">
                <PillLink to="/contact">Start a project</PillLink>
              </div>

              {OFFICES.map((office) => (
                <address key={office.region} className="mt-8 not-italic text-foreground/70">
                  <p className="font-semibold text-foreground">{office.entity}</p>
                  <p className="mt-1">{office.lines.join(", ")}</p>
                  <a
                    href={`mailto:${office.email}`}
                    className="mt-1 inline-block underline underline-offset-4 hover:text-foreground"
                  >
                    {office.email}
                  </a>
                </address>
              ))}

              <div className="mt-8 flex items-center gap-4 text-foreground">
                <span className="text-sm font-semibold">Follow us:</span>
                <Socials />
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:justify-items-end">
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">Useful links</h3>
                <ul className="mt-4 space-y-2 text-foreground/75">
                  <li>
                    <Link to="/blog" className="hover:text-foreground">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="hover:text-foreground">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy-cookie-policy" className="hover:text-foreground">
                      Privacy &amp; Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">Where we work</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {["Malls", "Metro & transit", "Campuses", "Markets", "Societies", "Events"].map(
                    (award) => (
                      <span
                        key={award}
                        className="rounded-full border border-foreground/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-foreground/70"
                      >
                        {award}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-foreground/10 pt-8 text-sm text-foreground/60 md:flex-row md:items-end md:justify-between">
            <Link to="/" className="text-foreground" aria-label="Product Sampling Agency home">
              <Wordmark />
            </Link>
            <p>© 2026 Product Sampling Agency</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
