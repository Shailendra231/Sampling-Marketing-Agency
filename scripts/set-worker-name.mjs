// Nitro derives the Worker name from the git remote, which yields
// "shailendra231-sampling-marketing-agency" — it does not match the Cloudflare
// project ("sampling-marketing-agency"), so a deploy would target a different
// Worker. The Lovable vite config wrapper exposes no way to set the name, so we
// rewrite the generated config after the build. This keeps the name in ONE
// place and lets both `wrangler deploy` and Workers Builds run with no flags.
import { readFileSync, writeFileSync } from "node:fs";

const WORKER_NAME = "sampling-marketing-agency";
const CONFIG = ".output/server/wrangler.json";

const config = JSON.parse(readFileSync(CONFIG, "utf8"));
const previous = config.name;
if (previous !== WORKER_NAME) {
  config.name = WORKER_NAME;
  writeFileSync(CONFIG, `${JSON.stringify(config, null, 2)}\n`);
  console.log(`[worker-name] ${previous} -> ${WORKER_NAME}`);
} else {
  console.log(`[worker-name] already ${WORKER_NAME}`);
}
