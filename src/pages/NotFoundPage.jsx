import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { getPageSeo } from "../constants/seo";

export default function NotFoundPage() {
	const meta = getPageSeo("/404");

	return (
		<>
			<Helmet>
				<title>{meta.title}</title>
				<meta name="description" content={meta.description} />
				<meta name="robots" content="noindex, follow" />
				<link rel="canonical" href={meta.canonical} />

				<meta property="og:title" content={meta.ogTitle} />
				<meta property="og:description" content={meta.ogDescription} />
				<meta property="og:type" content={meta.ogType} />
				<meta property="og:url" content={meta.canonical} />
				<meta property="og:image" content={meta.ogImage} />

				<meta name="twitter:card" content={meta.twitterCard} />
				<meta name="twitter:title" content={meta.ogTitle} />
				<meta name="twitter:description" content={meta.ogDescription} />
				<meta name="twitter:image" content={meta.ogImage} />
			</Helmet>

			<div className="flex items-center justify-center min-h-[60vh]">
				<div className="text-center space-y-4">
					<p className="text-6xl font-bold text-primary-fixed animate-fade-in-scale">
						404
					</p>
					<h1 className="text-2xl font-bold text-on-surface animate-reveal-up animation-delay-200">
						Page not found
					</h1>
					<div className="pt-2 animate-reveal-up animation-delay-400">
						<Link to="/" className="btn-primary inline-flex items-center gap-2">
							Back to Home
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
