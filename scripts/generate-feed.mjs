import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const SITE_URL = "https://primeinnovators.org";
const manifestPath = resolve("dist/blog-manifest.json");
const outputPath = resolve("dist/feed.xml");

function escapeXml(str) {
	return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function generateFeed() {
	let posts;
	try {
		posts = JSON.parse(readFileSync(manifestPath, "utf-8"));
	} catch {
		console.log("No blog posts found. Skipping RSS feed generation.");
		process.exit(0);
	}

	const items = posts
		.map(
			(p) => `    <item>
      <title>${escapeXml(p.title)}</title>
      <description>${escapeXml(p.description || "")}</description>
      <link>${SITE_URL}/blog/${p.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      ${(p.tags || []).map((tag) => `      <category>${escapeXml(tag)}</category>`).join("\n")}
    </item>`,
		)
		.join("\n");

	const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Prime Innovators Blog</title>
    <description>Engineering deep dives, architecture decisions, and open-source stories from Pakistan's talent ecosystem.</description>
    <link>${SITE_URL}/blog</link>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

	writeFileSync(outputPath, feed);
	console.log(`Generated RSS feed: ${outputPath}`);
}

generateFeed();
