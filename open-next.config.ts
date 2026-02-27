// open-next.config.ts - @opennextjs/cloudflare
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
	// Explicit buildCommand so opennextjs-cloudflare doesn't read the
	// package.json "build" script (which IS opennextjs-cloudflare build)
	// and cause infinite recursion.
	buildCommand: "next build",
});
