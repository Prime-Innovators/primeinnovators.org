import { buildPostObject, filterAndSort } from "./blog-common";

const modules = import.meta.glob("/content/blog/*.mdx", { eager: true });

export function getAllPosts() {
	return filterAndSort(
		Object.entries(modules).map(([path, mod]) => {
			const slug = path.split("/").pop().replace(".mdx", "");
			const meta = mod.meta || {};
			return {
				...buildPostObject(slug, meta, mod.readingTime),
				Component: mod.default,
			};
		}),
	);
}

export function getPostBySlug(slug) {
	return getAllPosts().find((p) => p.slug === slug) || null;
}

export function getAllSlugs() {
	return getAllPosts().map((p) => p.slug);
}
