import { Helmet } from "react-helmet-async";
import CapabilitiesSection from "../components/sections/CapabilitiesSection";
import EcosystemIncentivesSection from "../components/sections/EcosystemIncentivesSection";
import EcosystemRoadmap from "../components/sections/EcosystemRoadmap";
import HowItWorksSection from "../components/sections/HowItWorksSection";
import ProofGapSection from "../components/sections/ProofGapSection";
import WaitlistSection from "../components/sections/WaitlistSection";
import { OrganizationSchema, WebSiteSchema } from "../components/seo/JsonLd";
import { getPageSeo } from "../constants/seo";

function EcosystemHero() {
	return (
		<header className="relative overflow-hidden min-h-[85dvh] flex items-center border-b border-white/5">
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute -top-48 -right-48 w-[760px] h-[760px] aurora-glow-yellow opacity-15 animate-float-slow" />
				<div className="absolute top-1/3 -left-56 w-[720px] h-[720px] aurora-glow-teal opacity-10 animate-float-slower" />
			</div>
			<div className="section-container relative z-10 pt-28 pb-16 md:pt-32 md:pb-20 w-full">
				<div className="max-w-4xl mx-auto text-center space-y-10">
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-high/70 border border-white/10 rounded-full animate-fade-in-scale">
						<span className="text-label-sm text-on-surface-variant tracking-widest uppercase">
							The Prime Innovators Ecosystem
						</span>
					</div>
					<div className="space-y-6">
						<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-on-surface">
							<span className="sr-only">
								A connected system for verified open-source talent
							</span>
							<span aria-hidden="true" className="block">
								{"A connected system".split(" ").map((word, i) => (
									<span
										key={word}
										className="inline-block overflow-hidden mr-[0.2em]"
									>
										<span
											className="inline-block animate-reveal-word"
											style={{ animationDelay: `${i * 60 + 150}ms` }}
										>
											{word}
										</span>
									</span>
								))}{" "}
								{"for verified".split(" ").map((word, i) => (
									<span
										key={word}
										className="inline-block overflow-hidden mr-[0.2em]"
									>
										<span
											className="inline-block animate-reveal-word"
											style={{ animationDelay: `${(i + 3) * 60 + 150}ms` }}
										>
											{word}
										</span>
									</span>
								))}{" "}
								<span className="inline-block overflow-hidden mr-[0.2em]">
									<span
										className="text-gradient inline-block animate-reveal-word"
										style={{ animationDelay: `${5 * 60 + 150}ms` }}
									>
										open-source talent
									</span>
								</span>
							</span>
						</h1>
						<p className="text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed animate-reveal-up animation-delay-700">
							Prime Innovators is not a single product. It is a connected
							ecosystem where contributors build verified reputation,
							maintainers attract quality contributors, sponsors fund with
							transparency, and recruiters discover proven talent through real
							work, not inflated claims.
						</p>
					</div>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-reveal-up animation-delay-1000">
						<a
							href="#waitlist"
							className="btn-primary inline-flex items-center gap-2 group w-full sm:w-auto justify-center"
						>
							<span>Join the Waitlist</span>
							<svg
								aria-hidden="true"
								className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
						</a>
						<a
							href="#roles"
							className="btn-secondary px-8 py-4 rounded-lg font-bold text-label-md transition-all hover:-translate-y-0.5 active:scale-95 text-on-surface inline-flex items-center gap-2 group w-full sm:w-auto justify-center"
						>
							<span>Explore the Roles</span>
							<svg
								aria-hidden="true"
								className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</header>
	);
}

export default function EcosystemPage() {
	const meta = getPageSeo("/ecosystem");

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

			<EcosystemHero />
			<ProofGapSection />
			<div id="roles">
				<EcosystemIncentivesSection />
			</div>
			<HowItWorksSection />
			<CapabilitiesSection />
			<EcosystemRoadmap />
			<WaitlistSection />
		</>
	);
}
