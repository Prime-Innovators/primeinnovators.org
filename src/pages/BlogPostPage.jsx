import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { ArticleSchema } from "../components/seo/JsonLd";
import { SITE_URL } from "../constants/seo";
import { getAllPosts, getPostBySlug } from "../utils/blog";

const allPosts = getAllPosts();

function formatDate(dateStr) {
	return new Date(dateStr).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}

export default function BlogPostPage() {
	const { slug } = useParams();
	const post = getPostBySlug(slug);

	const currentIndex = allPosts.findIndex((p) => p.slug === slug);
	const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
	const nextPost =
		currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

	if (!post) {
		return (
			<section className="section-container pt-36 pb-24 md:pt-44 md:pb-32">
				<div className="mx-auto max-w-3xl text-center">
					<h1 className="text-headline-md text-on-surface mb-4">
						Post Not Found
					</h1>
					<p className="text-body-lg text-on-surface-variant mb-8">
						The blog post you're looking for doesn't exist.
					</p>
					<Link to="/blog" className="text-primary-fixed hover:underline">
						← Back to Blog
					</Link>
				</div>
			</section>
		);
	}

	const {
		title,
		description,
		date,
		publishedAt,
		coverImage,
		tags,
		author,
		readingTime,
		Component,
	} = post;

	const canonicalUrl = `${SITE_URL}/blog/${slug}`;
	const ogImage = coverImage
		? `${SITE_URL}${coverImage.startsWith("/") ? "" : "/"}${coverImage}`
		: `${SITE_URL}/og-image.png`;

	return (
		<>
			<Helmet>
				<title>{`${title} | Prime Innovators Blog`}</title>
				<meta name="description" content={description} />
				<link rel="canonical" href={canonicalUrl} />

				<meta
					property="og:title"
					content={`${title} | Prime Innovators Blog`}
				/>
				<meta property="og:description" content={description} />
				<meta property="og:type" content="article" />
				<meta property="og:url" content={canonicalUrl} />
				<meta property="og:image" content={ogImage} />

				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content={`${title} | Prime Innovators Blog`}
				/>
				<meta name="twitter:description" content={description} />
				<meta name="twitter:image" content={ogImage} />

				<meta property="article:published_time" content={publishedAt} />
				<meta property="article:author" content={author} />
				{tags?.map((tag) => (
					<meta key={tag} property="article:tag" content={tag} />
				))}
			</Helmet>
			<ArticleSchema
				title={title}
				description={description}
				publishedAt={publishedAt}
				author={author}
				image={ogImage}
				tags={tags}
			/>

			<section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
				{/* Aurora Glows for premium aesthetics */}
				<div className="absolute inset-0 pointer-events-none">
					<div className="absolute -top-48 -right-48 w-[600px] h-[600px] aurora-glow-yellow opacity-10 animate-float-slow" />
					<div className="absolute top-1/3 -left-48 w-[600px] h-[600px] aurora-glow-teal opacity-5 animate-float-slower" />
				</div>

				<div className="section-container relative z-10">
					<article className="mx-auto max-w-3xl">
						<header className="mb-12">
							<Link
								to="/blog"
								className="text-sm text-on-surface-variant hover:text-primary-fixed transition-colors mb-6 inline-block"
							>
								← Back to Blog
							</Link>

							{tags?.length > 0 && (
								<div className="flex flex-wrap gap-2 mb-4 animate-fade-in-scale">
									{tags.map((tag) => (
										<Link
											key={tag}
											to={`/blog?tag=${encodeURIComponent(tag)}`}
											className="rounded-full bg-primary-fixed/10 px-3 py-0.5 text-xs text-primary-fixed hover:bg-primary-fixed/20 transition-colors"
										>
											{tag}
										</Link>
									))}
								</div>
							)}

							<h1 className="text-display-lg text-gradient mb-4 animate-reveal-up animation-delay-200">
								{title}
							</h1>

							<div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-on-surface-variant animate-reveal-up animation-delay-300">
								<span>{author}</span>
								<span aria-hidden="true">·</span>
								<time dateTime={publishedAt}>{formatDate(date)}</time>
								{readingTime && (
									<>
										<span aria-hidden="true">·</span>
										<span>{readingTime}</span>
									</>
								)}
							</div>
						</header>

						<div className="prose prose-invert prose-headings:font-headline prose-headings:text-on-surface prose-p:text-on-surface-variant prose-a:text-primary-fixed prose-a:no-underline hover:prose-a:underline prose-strong:text-on-surface prose-code:text-secondary-fixed prose-code:bg-surface-container prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-pre:bg-surface-container prose-pre:border prose-pre:border-surface-stroke prose-blockquote:border-l-primary-fixed prose-blockquote:text-on-surface-variant prose-li:text-on-surface-variant prose-th:text-on-surface prose-td:text-on-surface-variant max-w-none">
							{Component ? <Component /> : null}
						</div>

						<nav className="mt-16 border-t border-surface-stroke pt-8">
							<div className="flex flex-col sm:flex-row justify-between gap-4">
								{prevPost ? (
									<Link
										to={`/blog/${prevPost.slug}`}
										className="group text-left"
									>
										<span className="text-label-sm text-on-surface-variant">
											← Previous
										</span>
										<p className="text-body-md text-on-surface group-hover:text-primary-fixed transition-colors mt-1">
											{prevPost.title}
										</p>
									</Link>
								) : (
									<div />
								)}
								{nextPost ? (
									<Link
										to={`/blog/${nextPost.slug}`}
										className="group text-right"
									>
										<span className="text-label-sm text-on-surface-variant">
											Next →
										</span>
										<p className="text-body-md text-on-surface group-hover:text-primary-fixed transition-colors mt-1">
											{nextPost.title}
										</p>
									</Link>
								) : (
									<div />
								)}
							</div>
						</nav>
					</article>
				</div>
			</section>
		</>
	);
}
