import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import adapter from "@sveltejs/adapter-netlify";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: "http://localhost:4321/",
	integrations: [react(), tailwind()],
	output: "server",
	adapter: netlify(),
});
