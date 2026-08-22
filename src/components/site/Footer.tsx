import { Link } from "@tanstack/react-router";
import { Socials, Wordmark } from "./Header";

export function Footer() {
  return (
    <footer className="mt-6 bg-background px-5 pb-10 md:px-10">
      <div className="mx-auto max-w-[1600px]">
        <div className="rounded-panel bg-cloud px-6 py-12 md:px-14 md:py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
                Gain further insight
              </h2>
              <p className="mt-3 max-w-md text-ink/70">
                Get your brand activation news and insights straight to your inbox.
              </p>
              <form
                className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
                onSubmit={(event) => event.preventDefault()}
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="Email (Required)"
                  className="h-12 flex-1 rounded-full bg-background px-5 text-ink outline-none placeholder:text-ink/50 focus:ring-2 focus:ring-ink/20"
                />
                <button
                  type="submit"
                  className="h-12 rounded-full bg-gradient-cta px-7 text-sm font-semibold text-dark shadow-glow-green transition-all hover:brightness-110"
                >
                  Sign up
                </button>
              </form>
              <div className="mt-8 flex items-center gap-4 text-ink">
                <span className="text-sm font-semibold">Follow us:</span>
                <Socials />
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:justify-items-end">
              <div>
                <h3 className="font-display text-lg font-bold text-ink">Useful links</h3>
                <ul className="mt-4 space-y-2 text-ink/75">
                  <li>
                    <Link to="/blog" className="hover:text-ink">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="hover:text-ink">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy-cookie-policy" className="hover:text-ink">
                      Privacy &amp; Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">Our awards:</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {["Best Brand Activation", "Experiential Awards", "Field Marketing"].map(
                    (award) => (
                      <span
                        key={award}
                        className="rounded-full border border-ink/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-ink/70"
                      >
                        {award}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-ink/10 pt-8 text-sm text-ink/60 md:flex-row md:items-end md:justify-between">
            <Link to="/" className="text-ink" aria-label="Product Sampling Agency home">
              <Wordmark />
            </Link>
            <p>© 2026 Product Sampling Agency Ltd</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
