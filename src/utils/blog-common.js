export function parseDate(date) {
	const d = new Date(date);
	return Number.isNaN(d.getTime()) ? new Date() : d;
}

export function buildPostObject(slug, meta, readingTime) {
	return {
		slug,
		title: meta.title || slug,
		date: meta.date || "",
		publishedAt: meta.date ? new Date(meta.date).toISOString() : "",
		description: meta.description || "",
		coverImage: meta.coverImage || "",
		tags: meta.tags || [],
		author: meta.author || "Prime Innovators",
		draft: meta.draft || false,
		readingTime: readingTime || "1 min read",
	};
}

export function filterAndSort(posts) {
	return posts
		.filter((p) => !p.draft)
		.sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
}
