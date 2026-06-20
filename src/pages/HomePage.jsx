import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import EcosystemRolesSection from "../components/sections/EcosystemRolesSection";
import HeroSection from "../components/sections/HeroSection";
import WaitlistSection from "../components/sections/WaitlistSection";
import { OrganizationSchema, WebSiteSchema } from "../components/seo/JsonLd";
import { getPageSeo } from "../constants/seo";

export default function HomePage() {
	const meta = getPageSeo("/");

	return (
		<>
			<Helmet>
				<title>{meta.title}</title>
				<meta name="description" content={meta.description} />
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

			<OrganizationSchema />
			<WebSiteSchema />

			<HeroSection />
			<EcosystemRolesSection />
			<section className="py-16 md:py-20 section-container text-center border-y border-white/5 bg-surface-container-lowest">
				<div className="max-w-2xl mx-auto space-y-6">
					<h2 className="text-2xl md:text-3xl font-bold text-on-surface">
						Want the full picture?
					</h2>
					<p className="text-on-surface-variant leading-relaxed">
						Dive deep into how the ecosystem works — the proof gap it solves,
						every role with its own CTA, the six systems that power it, and the
						build roadmap.
					</p>
					<Link
						to="/ecosystem"
						className="btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-label-md transition-all hover:-translate-y-0.5"
					>
						<span>Explore the Ecosystem</span>
						<svg
							aria-hidden="true"
							className="w-4 h-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M13 7l5 5m0 0l-5 5m5-5H6"
							/>
						</svg>
					</Link>
				</div>
			</section>
			<WaitlistSection />
		</>
	);
}
