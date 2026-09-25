/**
 * Response headers applied to everything the Worker serves.
 *
 * Content-Security-Policy is deliberately NOT here. This app serves inline
 * hydration scripts from Start's SSR, inline application/ld+json, and styles
 * from Google Fonts; a CSP written without accounting for all three white-
 * screens the site, and one written with 'unsafe-inline' satisfies a scanner
 * while giving up most of the protection. It wants its own pass, in
 * Report-Only first.
 */
const HEADERS: Record<string, string> = {
  // Start short. Once a long max-age is cached, a browser will refuse to fall
  // back to http, so a TLS problem becomes an outage with no quick undo.
  // Raise to 31536000 (and only then consider preload) after this has been
  // observed working in production.
  "Strict-Transport-Security": "max-age=300",

  "X-Content-Type-Options": "nosniff",

  // SAMEORIGIN rather than DENY: the project is connected to Lovable, whose
  // editor previews the site in an iframe. DENY would break that preview, and
  // SAMEORIGIN still stops third-party clickjacking. If the Lovable preview of
  // the DEPLOYED site matters, this line is the one to drop.
  "X-Frame-Options": "SAMEORIGIN",

  "Referrer-Policy": "strict-origin-when-cross-origin",
};

/**
 * Returns a copy of `response` carrying the headers above.
 *
 * The original Response's headers are immutable once it has been returned by a
 * handler, so this rebuilds it. Statuses that must not carry a body (204, 304
 * and friends) already have a null body, which the constructor requires.
 */
export function withSecurityHeaders(response: Response, url: URL): Response {
  const out = new Response(response.body, response);
  for (const [name, value] of Object.entries(HEADERS)) {
    // HSTS over plain http is ignored by browsers by spec; sending it there
    // only muddies what the response is claiming.
    if (name === "Strict-Transport-Security" && url.protocol !== "https:") continue;
    out.headers.set(name, value);
  }
  return out;
}
