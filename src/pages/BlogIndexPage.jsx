import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useSearchParams } from "react-router-dom";
import { OrganizationSchema } from "../components/seo/JsonLd";
import { SITE_URL } from "../constants/seo";
import { getAllPosts, getAllTags } from "../utils/blog-meta";

const allPosts = getAllPosts();
const allTags = getAllTags();
const POSTS_PER_PAGE = 12;
const VISIBLE_TAGS = 15;

function formatDate(dateStr) {
	return new Date(dateStr).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}

function useDebounce(value, delay) {
	const [debounced, setDebounced] = useState(value);
	useEffect(() => {
		const timer = setTimeout(() => setDebounced(value), delay);
		return () => clearTimeout(timer);
	}, [value, delay]);
	return debounced;
}

export default function BlogIndexPage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [searchInput, setSearchInput] = useState(searchParams.get("q") || "");
	const [showAllTags, setShowAllTags] = useState(false);

	const debouncedQuery = useDebounce(searchInput, 300);
	const activeTag = searchParams.get("tag") || "";
	const sortOrder = searchParams.get("sort") || "newest";
	const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));

	const visibleTags = showAllTags ? allTags : allTags.slice(0, VISIBLE_TAGS);

	const filtered = useMemo(() => {
		let result = [...allPosts];

		if (activeTag) {
			result = result.filter((p) => p.tags.includes(activeTag));
		}

		if (debouncedQuery.trim()) {
			const q = debouncedQuery.toLowerCase();
			result = result.filter(
				(p) =>
					p.title.toLowerCase().includes(q) ||
					p.description.toLowerCase().includes(q) ||
					p.tags.some((t) => t.toLowerCase().includes(q)),
			);
		}

		result.sort((a, b) => {
			const da = new Date(a.date).getTime();
			const db = new Date(b.date).getTime();
			return sortOrder === "oldest" ? da - db : db - da;
		});

		return result;
	}, [activeTag, debouncedQuery, sortOrder]);

	const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
	const safePage = Math.min(page, totalPages);

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [safePage]);

	const pagedPosts = filtered.slice(
		(safePage - 1) * POSTS_PER_PAGE,
		safePage * POSTS_PER_PAGE,
	);

	function setParam(key, value) {
		const next = new URLSearchParams(searchParams);
		if (value) next.set(key, value);
		else next.delete(key);
		if (key !== "page") next.delete("page");
		setSearchParams(next, { replace: true });
	}

	function handleTagClick(tag) {
		setParam("tag", tag === activeTag ? "" : tag);
	}

	function handleSortChange(newSort) {
		setParam("sort", sortOrder === newSort ? "" : newSort);
	}

	function handlePageChange(newPage) {
		setParam("page", newPage > 1 ? String(newPage) : "");
	}

	return (
		<>
			<Helmet>
				<title>Blog | Prime Innovators</title>
				<meta
					name="description"
					content="Engineering deep dives, architecture decisions, and open-source stories from the Prime Innovators team — covering Cloudflare Workers, edge computing, and Pakistan's developer ecosystem."
				/>
				<link rel="canonical" href={`${SITE_URL}/blog`} />
				<meta property="og:title" content="Blog | Prime Innovators" />
				<meta
					property="og:description"
					content="Engineering deep dives, architecture decisions, and open-source stories from the Prime Innovators team."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content={`${SITE_URL}/blog`} />
				<meta
					property="og:image"
					content="https://primeinnovators.org/og-image.png"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Blog | Prime Innovators" />
				<meta
					name="twitter:description"
					content="Engineering deep dives, architecture decisions, and open-source stories from the Prime Innovators team."
				/>
				<meta
					name="twitter:image"
					content="https://primeinnovators.org/og-image.png"
				/>
			</Helmet>
			<OrganizationSchema />

			<section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
				<div className="absolute inset-0 pointer-events-none">
					<div className="absolute -top-48 -right-48 w-[760px] h-[760px] aurora-glow-yellow opacity-15 animate-float-slow animate-glow-pulse" />
					<div className="absolute top-1/4 -left-56 w-[720px] h-[720px] aurora-glow-teal opacity-10 animate-float-slower" />
				</div>

				<div className="section-container relative z-10">
					<div className="mx-auto max-w-4xl">
						<div className="mb-12">
							<div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-4">
								<span className="w-1.5 h-1.5 rounded-full bg-primary-fixed animate-pulse" />
								<span className="text-label-sm text-on-surface-variant tracking-widest uppercase">
									Articles & Insights
								</span>
							</div>
							<h1 className="text-display-lg text-gradient mb-4">Blog</h1>
							<p className="text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
								Engineering deep dives, architecture decisions, and stories from
								Pakistan&apos;s open-source ecosystem.
							</p>
						</div>

						<search>
							<form
								onSubmit={(e) => {
									e.preventDefault();
								}}
								className="mb-8"
							>
								<div className="relative">
									<svg
										aria-hidden="true"
										className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-on-surface-variant"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
										/>
									</svg>
									<input
										type="search"
										value={searchInput}
										onChange={(e) => {
											setSearchInput(e.target.value);
											setParam("q", e.target.value || "");
										}}
										placeholder="Search posts by title, description, or tag..."
										className="w-full rounded-xl bg-surface-container pl-12 pr-4 py-3 text-body-md text-on-surface outline-none border border-surface-stroke focus:border-primary-fixed transition-colors"
										aria-label="Search blog posts"
									/>
								</div>
							</form>
						</search>

						{allTags.length > 0 && (
							<div className="flex flex-wrap items-center gap-3 mb-8">
								<span className="text-label-sm text-on-surface-variant uppercase tracking-wider">
									Tags
								</span>
								<button
									type="button"
									onClick={() => handleTagClick("")}
									className={`rounded-full px-3 py-1 text-xs transition-colors ${
										!activeTag
											? "bg-primary-fixed text-surface"
											: "bg-primary-fixed/10 text-primary-fixed hover:bg-primary-fixed/20"
									}`}
								>
									All
								</button>
								{visibleTags.map((tag) => (
									<button
										key={tag}
										type="button"
										onClick={() => handleTagClick(tag)}
										className={`rounded-full px-3 py-1 text-xs transition-colors ${
											activeTag === tag
												? "bg-primary-fixed text-surface"
												: "bg-primary-fixed/10 text-primary-fixed hover:bg-primary-fixed/20"
										}`}
									>
										{tag}
									</button>
								))}
								{allTags.length > VISIBLE_TAGS && (
									<button
										type="button"
										onClick={() => setShowAllTags((v) => !v)}
										className="text-xs text-primary-fixed hover:underline ml-1"
									>
										{showAllTags
											? "Show less"
											: `+${allTags.length - VISIBLE_TAGS} more`}
									</button>
								)}
							</div>
						)}

						<div className="flex flex-wrap items-center justify-between gap-4 mb-8">
							<p className="text-sm text-on-surface-variant">
								{filtered.length === 1 ? "1 post" : `${filtered.length} posts`}
								{activeTag ? ` tagged "${activeTag}"` : ""}
								{debouncedQuery.trim() ? ` matching "${debouncedQuery}"` : ""}
							</p>

							<div className="flex items-center gap-2">
								<span className="text-label-sm text-on-surface-variant">
									Sort
								</span>
								<button
									type="button"
									onClick={() => handleSortChange("newest")}
									className={`rounded-lg px-3 py-1.5 text-xs transition-colors ${
										sortOrder === "newest"
											? "bg-primary-fixed/20 text-primary-fixed"
											: "bg-surface-container text-on-surface-variant hover:text-on-surface"
									}`}
								>
									Newest
								</button>
								<button
									type="button"
									onClick={() => handleSortChange("oldest")}
									className={`rounded-lg px-3 py-1.5 text-xs transition-colors ${
										sortOrder === "oldest"
											? "bg-primary-fixed/20 text-primary-fixed"
											: "bg-surface-container text-on-surface-variant hover:text-on-surface"
									}`}
								>
									Oldest
								</button>
							</div>
						</div>

						{pagedPosts.length > 0 ? (
							<>
								<div className="grid gap-6 md:grid-cols-2">
									{pagedPosts.map((post) => (
										<article
											key={post.slug}
											className="glass-card rounded-2xl p-6 transition-all hover:-translate-y-0.5"
										>
											<Link to={`/blog/${post.slug}`} className="group block">
												<div className="flex flex-wrap items-center gap-2 text-sm text-on-surface-variant mb-3">
													<time dateTime={post.publishedAt}>
														{formatDate(post.date)}
													</time>
													{post.readingTime && (
														<>
															<span aria-hidden="true">·</span>
															<span>{post.readingTime}</span>
														</>
													)}
												</div>
												<h2 className="text-headline-sm text-on-surface group-hover:text-primary-fixed transition-colors mb-2">
													{post.title}
												</h2>
												<p className="text-body-md text-on-surface-variant mb-4">
													{post.description}
												</p>
												{post.tags?.length > 0 && (
													<div className="flex flex-wrap gap-2">
														{post.tags.map((tag) => (
															<span
																key={tag}
																className="rounded-full bg-primary-fixed/10 px-3 py-0.5 text-xs text-primary-fixed"
															>
																{tag}
															</span>
														))}
													</div>
												)}
											</Link>
										</article>
									))}
								</div>

								{totalPages > 1 && (
									<nav
										className="mt-12 flex items-center justify-center gap-2"
										aria-label="Blog pagination"
									>
										<button
											type="button"
											onClick={() => handlePageChange(safePage - 1)}
											disabled={safePage <= 1}
											className="rounded-lg px-3 py-2 text-sm bg-surface-container text-on-surface-variant hover:text-on-surface disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
										>
											← Previous
										</button>
										{Array.from({ length: totalPages }, (_, i) => i + 1)
											.filter(
												(p) =>
													p === 1 ||
													p === totalPages ||
													Math.abs(p - safePage) <= 2,
											)
											.map((p, idx, arr) => (
												<span key={p} className="flex items-center gap-1">
													{idx > 0 && arr[idx - 1] !== p - 1 && (
														<span className="px-1 text-on-surface-variant text-sm">
															...
														</span>
													)}
													<button
														type="button"
														onClick={() => handlePageChange(p)}
														className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
															p === safePage
																? "bg-primary-fixed/20 text-primary-fixed"
																: "bg-surface-container text-on-surface-variant hover:text-on-surface"
														}`}
													>
														{p}
													</button>
												</span>
											))}
										<button
											type="button"
											onClick={() => handlePageChange(safePage + 1)}
											disabled={safePage >= totalPages}
											className="rounded-lg px-3 py-2 text-sm bg-surface-container text-on-surface-variant hover:text-on-surface disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
										>
											Next →
										</button>
									</nav>
								)}
							</>
						) : (
							<div className="text-center py-16">
								<p className="text-body-lg text-on-surface-variant mb-2">
									No posts found.
								</p>
								{(activeTag || searchInput.trim()) && (
									<button
										type="button"
										onClick={() => {
											setSearchInput("");
											setShowAllTags(false);
											setSearchParams({}, { replace: true });
										}}
										className="text-sm text-primary-fixed hover:underline"
									>
										Clear all filters
									</button>
								)}
							</div>
						)}
					</div>
				</div>
			</section>
		</>
	);
}
