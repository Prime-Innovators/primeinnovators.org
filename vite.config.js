import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import mdx from "@mdx-js/rollup";
import react from "@vitejs/plugin-react";
import * as acorn from "acorn";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { defineConfig } from "vite";
import sitemap from "vite-plugin-sitemap";

function parseMetaObject(exprStr) {
	const ast = acorn.parse(`(${exprStr})`, { ecmaVersion: 2022 });
	let expr = ast.body[0]?.expression;
	if (expr?.type === "ParenthesizedExpression") expr = expr.expression;
	if (!expr || expr.type !== "ObjectExpression") return null;
	const result = {};
	for (const prop of expr.properties) {
		if (prop.type !== "Property") continue;
		const key =
			prop.key.type === "Identifier"
				? prop.key.name
				: prop.key.type === "Literal"
					? String(prop.key.value)
					: null;
		if (!key) continue;
		result[key] = parseLiteralValue(prop.value);
	}
	return result;
}

function parseLiteralValue(node) {
	switch (node.type) {
		case "Literal":
			return node.value;
		case "ArrayExpression":
			return node.elements.map(parseLiteralValue);
		case "ObjectExpression": {
			const obj = {};
			for (const prop of node.properties) {
				if (prop.type !== "Property") continue;
				const key =
					prop.key.type === "Identifier"
						? prop.key.name
						: prop.key.type === "Literal"
							? String(prop.key.value)
							: null;
				if (key) obj[key] = parseLiteralValue(prop.value);
			}
			return obj;
		}
		default:
			return undefined;
	}
}

function getBlogTagRoutes() {
	const dir = resolve("content/blog");
	if (!existsSync(dir)) return [];
	const files = readdirSync(dir).filter((f) => f.endsWith(".mdx"));
	const tags = new Set();
	for (const file of files) {
		const raw = readFileSync(join(dir, file), "utf-8");
		const meta = extractMdxMeta(raw);
		if (meta?.tags) {
			for (const tag of meta.tags) tags.add(tag);
		}
	}
	return Array.from(tags).map((t) => `/blog/tag/${encodeURIComponent(t)}`);
}

function extractMdxMeta(raw) {
	const match = raw.match(/export\s+const\s+meta\s*=\s*({[\s\S]*?});/);
	if (!match) return null;
	try {
		return parseMetaObject(match[1]);
	} catch {
		return null;
	}
}

function mdxReadingTimePlugin() {
	return {
		name: "mdx-reading-time",
		transform(_code, id) {
			if (!id.endsWith(".mdx")) return;
			const raw = readFileSync(id, "utf-8");
			// Strip MDX syntax to get readable text for word counting.
			// There's no standard library for this — MDX is a mix of markdown,
			// JSX, and JS imports/exports, so we handle each layer directly:
			const content = raw
				// 1. Remove `import X from "..."` statements (JS syntax, not content)
				.replace(/^import\s+.*?;?\s*$/gm, "")
				// 2. Remove `export const meta = { title, date, ... }` frontmatter block
				.replace(/export\s+const\s+meta\s*=\s*\{[\s\S]*?\};/, "")
				// 3. Remove JSX component tags like <Callout>, <FAQAccordion />, etc.
				.replace(/<[^>]+>/g, "")
				.trim();
			const { minutes } = readingTime(content);
			const displayed = Math.max(1, Math.round(minutes));
			const readingTimeStr =
				displayed === 1 ? "1 min read" : `${displayed} min read`;
			return {
				code: `${_code}\nexport const readingTime = ${JSON.stringify(readingTimeStr)};`,
				map: null,
			};
		},
	};
}

function blogManifestPlugin() {
	let written = false;
	return {
		name: "blog-manifest",
		writeBundle() {
			if (written) return;
			written = true;
			const contentDir = resolve("content/blog");
			if (!existsSync(contentDir)) return;
			const files = readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));
			const posts = [];
			for (const file of files) {
				const slug = file.replace(".mdx", "");
				const raw = readFileSync(join(contentDir, file), "utf-8");
				const meta = extractMdxMeta(raw);
				if (meta && !meta.draft) posts.push({ slug, ...meta });
			}
			posts.sort(
				(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
			);
			const dir = resolve("dist");
			writeFileSync(
				join(dir, "blog-manifest.json"),
				`${JSON.stringify(posts, null, 2)}\n`,
			);
		},
	};
}

export default defineConfig({
	plugins: [
		{
			enforce: "pre",
			...mdx({
				remarkPlugins: [remarkGfm],
				rehypePlugins: [
					rehypeSlug,
					[rehypeAutolinkHeadings, { behavior: "wrap" }],
				],
			}),
		},
		mdxReadingTimePlugin(),
		react({ include: /\.(jsx|js|mdx)$/ }),
		blogManifestPlugin(),
		sitemap({
			hostname: "https://primeinnovators.org",
			dynamicRoutes: [
				"/about",
				"/faq",
				"/contact",
				"/privacy",
				"/terms",
				"/coc",
				"/blog",
				...getBlogTagRoutes(),
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
