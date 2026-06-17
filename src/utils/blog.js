const modules = import.meta.glob("/content/blog/*.mdx", { eager: true });

function parseDate(date) {
	const d = new Date(date);
	return Number.isNaN(d.getTime()) ? new Date() : d;
}

function estimateReadingTime(description) {
	const words = (description || "").split(/\s+/).length;
	if (words > 30) return "3 min read";
	return "2 min read";
}

export function getAllPosts() {
	return Object.entries(modules)
		.map(([path, mod]) => {
			const slug = path.split("/").pop().replace(".mdx", "");
			const meta = mod.meta || {};
			return {
				slug,
				Component: mod.default,
				title: meta.title || slug,
				date: meta.date || "",
				publishedAt: meta.date ? new Date(meta.date).toISOString() : "",
				description: meta.description || "",
				coverImage: meta.coverImage || "",
				tags: meta.tags || [],
				author: meta.author || "Prime Innovators",
				draft: meta.draft || false,
				readingTime: estimateReadingTime(meta.description),
			};
		})
		.filter((p) => !p.draft)
		.sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
}

export function getPostBySlug(slug) {
	return getAllPosts().find((p) => p.slug === slug) || null;
}

export function getAllSlugs() {
	return getAllPosts().map((p) => p.slug);
}
