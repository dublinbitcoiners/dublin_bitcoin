import { defineConfig } from "astro/config";

const base = process.env.ASTRO_BASE ?? "/dublin_bitcoin";

export default defineConfig({
  base,
});
