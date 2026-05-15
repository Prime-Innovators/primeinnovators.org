import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
	plugins: [
		react(),
		sitemap({
			hostname: "https://primeinnovators.org",
			dynamicRoutes: [
				"/about",
				"/faq",
				"/contact",
				"/privacy",
				"/terms",
				"/coc",
			],
			generateRobotsTxt: true,
			robots: [
				{
					userAgent: "*",
					allow: "/",
				},
			],
			readable: true,
		}),
	],
	server: {
		port: 3000,
		open: true,
	},
	build: {
		outDir: "dist",
		sourcemap: false,
		minify: "terser",
	},
});
