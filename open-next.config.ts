/// <reference types="@cloudflare/workers-types" />
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

/**
 * Build with:       npm run open:build
 * Preview locally:  npm run preview
 * Deploy:           npm run deploy
 */
export default defineCloudflareConfig({
  incrementalCache: "dummy",
  tagCache: "dummy",
  queue: "dummy",
});
