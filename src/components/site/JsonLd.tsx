/** Renders one schema.org document as JSON-LD.
 *
 *  The payload is built in src/data/schema.ts from our own constants, never
 *  from user input, so serialising it straight into the script tag is safe.
 *  JSON.stringify already escapes the quotes and backslashes that would break
 *  out of the JSON; the `</` guard below covers the one case it does not — a
 *  literal `</script>` inside a string would otherwise close the tag early. */
export function JsonLd({ schema }: { schema: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
