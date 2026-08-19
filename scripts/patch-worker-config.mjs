// Patches the wrangler config that nitro generates at .output/server/wrangler.json.
//
// Two things nitro does not give us, and that the Lovable vite wrapper exposes
// no options for:
//
//  1. name — nitro derives it from the git remote
//     ("shailendra231-sampling-marketing-agency"), which does not match the
//     Cloudflare project, so a deploy would target a different Worker.
//  2. observability — off by default, so the Worker ships with no Workers Logs.
//
// This runs as part of `npm run build` rather than a `postbuild` hook, because
// Cloudflare's C3 detection rewrites package.json scripts inside the Workers
// Builds container and could detach a lifecycle hook.
import { readFileSync, writeFileSync } from "node:fs";

const WORKER_NAME = "sampling-marketing-agency";
const CONFIG = ".output/server/wrangler.json";

const config = JSON.parse(readFileSync(CONFIG, "utf8"));
const changes = [];

if (config.name !== WORKER_NAME) {
  changes.push(`name: ${config.name} -> ${WORKER_NAME}`);
  config.name = WORKER_NAME;
}

if (!config.observability?.enabled) {
  changes.push("observability: enabled");
  config.observability = { enabled: true };
}

if (changes.length > 0) {
  writeFileSync(CONFIG, `${JSON.stringify(config, null, 2)}\n`);
}
console.log(`[worker-config] ${changes.length ? changes.join(", ") : "no changes needed"}`);
