import { buildPostObject, filterAndSort } from "./blog-common";

const modules = import.meta.glob("/content/blog/*.mdx", { eager: true });

export function getAllPosts() {
	return filterAndSort(
		Object.entries(modules).map(([path, mod]) => {
			const slug = path.split("/").pop().replace(".mdx", "");
			return buildPostObject(slug, mod.meta || {}, mod.readingTime);
		}),
	);
}

export function getPostBySlug(slug) {
	return getAllPosts().find((p) => p.slug === slug) || null;
}

export function getAllSlugs() {
	return getAllPosts().map((p) => p.slug);
}

export function getAllTags() {
	const set = new Set();
	for (const p of getAllPosts()) {
		for (const t of p.tags) set.add(t);
	}
	return Array.from(set).sort();
}
