import { defineConfig } from "astro/config";

const configuredBase = process.env.PUBLIC_SITE_BASE?.trim();
const base = configuredBase && configuredBase !== "/" ? configuredBase.replace(/\/$/, "") : undefined;
const port = Number(process.env.PORT || 4321);

export default defineConfig({
  output: "static",
  ...(base ? { base } : {}),
  server: {
    host: true,
    port: Number.isFinite(port) ? port : 4321,
  },
  build: {
    format: "directory",
  },
});