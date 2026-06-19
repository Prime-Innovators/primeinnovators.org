import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { OrganizationSchema } from "../components/seo/JsonLd";
import { SITE_URL } from "../constants/seo";
import { getAllPosts, getAllTags } from "../utils/blog-meta";

const allPosts = getAllPosts();
const allTags = getAllTags();

function formatDate(dateStr) {
	return new Date(dateStr).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}

export default function BlogTagPage() {
	const { tag } = useParams();
	const decodedTag = tag ? decodeURIComponent(tag) : "";
	const taggedPosts = allPosts.filter((p) => p.tags.includes(decodedTag));

	if (!taggedPosts.length) {
		return (
			<section className="section-container py-24">
				<div className="mx-auto max-w-3xl text-center">
					<h1 className="text-headline-md text-on-surface mb-4">
						Tag Not Found
					</h1>
					<p className="text-body-lg text-on-surface-variant mb-8">
						No posts tagged &ldquo;{decodedTag}&rdquo;.
					</p>
					<Link to="/blog" className="text-primary-fixed hover:underline">
						← Back to Blog
					</Link>
				</div>
			</section>
		);
	}

	return (
		<>
			<Helmet>
				<title>{`${decodedTag} posts | Prime Innovators Blog`}</title>
				<meta
					name="description"
					content={`Browse all blog posts tagged "${decodedTag}" — engineering deep dives and stories from Prime Innovators.`}
				/>
				<link rel="canonical" href={`${SITE_URL}/blog/tag/${tag}`} />
				<meta
					property="og:title"
					content={`${decodedTag} posts | Prime Innovators Blog`}
				/>
				<meta
					property="og:description"
					content={`Browse all blog posts tagged "${decodedTag}".`}
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content={`${SITE_URL}/blog/tag/${encodeURIComponent(tag)}`}
				/>
				<meta
					property="og:image"
					content="https://primeinnovators.org/og-image.png"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content={`${decodedTag} posts | Prime Innovators Blog`}
				/>
				<meta
					name="twitter:description"
					content={`Browse all blog posts tagged "${decodedTag}".`}
				/>
				<meta
					name="twitter:image"
					content="https://primeinnovators.org/og-image.png"
				/>
			</Helmet>
			<OrganizationSchema />

			<section className="section-container py-24">
				<div className="mx-auto max-w-4xl">
					<div className="mb-12">
						<Link
							to="/blog"
							className="text-sm text-on-surface-variant hover:text-primary-fixed transition-colors mb-4 inline-block animate-fade-in-scale"
						>
							← Back to Blog
						</Link>
						<div className="overflow-hidden mb-4">
							<h1 className="text-display-lg text-gradient animate-reveal-word capitalize leading-none">
								{decodedTag}
							</h1>
						</div>
						<p className="text-body-lg text-on-surface-variant animate-reveal-up animation-delay-200">
							{taggedPosts.length === 1
								? "1 post"
								: `${taggedPosts.length} posts`}{" "}
							tagged &ldquo;{decodedTag}&rdquo;
						</p>
					</div>

					<div className="flex flex-wrap gap-2 mb-8">
						{allTags.map((t) => (
							<Link
								key={t}
								to={`/blog/tag/${encodeURIComponent(t)}`}
								className={`rounded-full px-3 py-1 text-xs transition-colors ${
									t === decodedTag
										? "bg-primary-fixed text-surface"
										: "bg-primary-fixed/10 text-primary-fixed hover:bg-primary-fixed/20"
								}`}
							>
								{t}
							</Link>
						))}
					</div>

					<div className="grid gap-6 md:grid-cols-2">
						{taggedPosts.map((post) => (
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
											{post.tags.map((t) => (
												<span
													key={t}
													className="rounded-full bg-primary-fixed/10 px-3 py-0.5 text-xs text-primary-fixed"
												>
													{t}
												</span>
											))}
										</div>
									)}
								</Link>
							</article>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
