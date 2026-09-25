/** Canonical public origin. Lives here rather than in data/site.ts because the
 *  Worker entry needs it, and data/site.ts pulls in lucide-react icons — which
 *  have no business being in the outermost server bundle. data/site.ts
 *  re-exports this, so every existing `SITE_URL` import still resolves. */
export const SITE_URL = "https://productsamplingagency.in";

const CANONICAL_HOST = "productsamplingagency.in";

/** Hosts that should hand their traffic to the canonical one.
 *
 *  Deliberately a allowlist rather than "anything that is not canonical".
 *  wrangler.jsonc keeps workers_dev and preview_urls enabled on purpose, as
 *  the always-reachable fallback when the custom-domain attach fails; a
 *  catch-all redirect would send those straight at a domain that may be the
 *  very thing that is broken. localhost is excluded for the same reason —
 *  this module runs in `vite dev` too. */
const REDIRECT_HOSTS = new Set([`www.${CANONICAL_HOST}`]);

/**
 * Where a request should be sent instead, or null to serve it as-is.
 *
 * Collapses the four live host/protocol variants onto one origin: all of
 * http/https x apex/www currently answer 200 with identical content, so any
 * link built to a non-canonical variant strands its authority there. The
 * canonical tag is only a hint; this is the directive.
 *
 * Path, query and hash are preserved, because a redirect that drops them
 * turns a deep link into a homepage visit.
 */
export function canonicalRedirect(requestUrl: string): string | null {
  const url = new URL(requestUrl);

  const isOurDomain = url.hostname === CANONICAL_HOST || REDIRECT_HOSTS.has(url.hostname);
  if (!isOurDomain) return null;

  const target = new URL(url);
  if (REDIRECT_HOSTS.has(target.hostname)) target.hostname = CANONICAL_HOST;
  if (target.protocol === "http:") target.protocol = "https:";

  return target.toString() === url.toString() ? null : target.toString();
}
