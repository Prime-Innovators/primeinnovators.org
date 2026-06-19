import ScrollReveal from "../ui/ScrollReveal";

export default function CapabilitiesSection() {
	const capabilities = [
		{
			icon: (
				<svg
					aria-hidden="true"
					className="w-6 h-6"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M9 12l2 2 4-4M7 5h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z"
					/>
				</svg>
			),
			number: "01",
			title: "Project Governance",
			description:
				"Multi-stage review and approval workflows ensure every project is credible, well-documented, and contribution-ready before going live.",
			outcome: "Trusted project intake",
		},
		{
			icon: (
				<svg
					aria-hidden="true"
					className="w-6 h-6"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M4 20h16M6 20V8l6-4 6 4v12M9 20v-6h6v6"
					/>
				</svg>
			),
			number: "02",
			title: "Artifact Visualization",
			description:
				"Architecture diagrams (C4), roadmaps, ADRs, and onboarding guides — all centralized so contributors understand any project in minutes, not days.",
			outcome: "Faster time-to-code",
		},
		{
			icon: (
				<svg
					aria-hidden="true"
					className="w-6 h-6"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 11a4 4 0 100-8 4 4 0 000 8zm7 10a7 7 0 00-14 0"
					/>
				</svg>
			),
			number: "03",
			title: "Contributor Identity",
			description:
				"Verified profiles with GitHub integration, university affiliation, skill tags, contribution history, and a growing reputation that recruiters can trust.",
			outcome: "Proof-backed profiles",
		},
		{
			icon: (
				<svg
					aria-hidden="true"
					className="w-6 h-6"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M9 7V4h6v3m-8 4h10a2 2 0 012 2v5H5v-5a2 2 0 012-2zm-2 0V9a3 3 0 013-3h8a3 3 0 013 3v2"
					/>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M9 15h.01M15 15h.01"
					/>
				</svg>
			),
			number: "04",
			title: "AI Proof Layer",
			description:
				"Contributions scored by complexity, impact, and collaboration quality. Anti-gaming safeguards ensure only meaningful work earns recognition.",
			outcome: "Traceable XP & skill graph",
		},
		{
			icon: (
				<svg
					aria-hidden="true"
					className="w-6 h-6"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 3l9 4-9 4-9-4 9-4zm-7 8v6h14v-6"
					/>
					<path strokeLinecap="round" strokeLinejoin="round" d="M8 21v-4h8v4" />
				</svg>
			),
			number: "05",
			title: "University Chapters",
			description:
				"Ambassador tools for campus health tracking, event management, cohort coordination, and certificate generation — scaling the community nationwide.",
			outcome: "National community scale",
		},
		{
			icon: (
				<svg
					aria-hidden="true"
					className="w-6 h-6"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3 7h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
					/>
					<path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18" />
				</svg>
			),
			number: "06",
			title: "Financial Transparency",
			description:
				"Public sponsorship pages with local payment rails (JazzCash, Easypaisa, Stripe) and auto-generated dashboards showing every fund inflow and outflow.",
			outcome: "Auditable funding trail",
		},
	];

	return (
		<section className="py-20 md:py-32 section-container" id="pillars">
			<ScrollReveal className="mb-16 space-y-6">
				<div>
					<span className="text-label-sm text-primary-fixed uppercase tracking-widest font-bold inline-block mb-4">
						Ecosystem Pillars
					</span>
					<h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight max-w-2xl">
						The six systems that power the ecosystem
					</h2>
				</div>
				<p className="text-body-lg text-on-surface-variant max-w-2xl">
					Each pillar removes friction for contributors, maintains quality for
					maintainers, and provides transparent signals for sponsors and
					recruiters.
				</p>
			</ScrollReveal>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{capabilities.map((capability, i) => (
					<ScrollReveal key={capability.title} delay={i * 100}>
						<div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-primary-fixed/50 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden h-full">
							<div className="absolute inset-0 bg-gradient-to-br from-primary-fixed/[0.04] via-transparent to-secondary-fixed/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
							<div className="relative z-10 space-y-4">
								<div className="flex items-start justify-between">
									<div className="w-12 h-12 rounded-xl bg-surface-container-high border border-white/10 flex items-center justify-center text-primary-fixed">
										{capability.icon}
									</div>
									<span className="text-label-sm text-on-surface-variant font-bold opacity-60">
										{capability.number}
									</span>
								</div>

								<h3 className="text-headline-sm font-bold text-on-surface">
									{capability.title}
								</h3>

								<p className="text-on-surface-variant leading-relaxed text-sm">
									{capability.description}
								</p>

								<div className="pt-3 border-t border-white/10">
									<span className="text-label-sm text-on-surface-variant uppercase tracking-widest">
										Outcome
									</span>
									<p className="text-sm text-on-surface mt-2 font-semibold">
										{capability.outcome}
									</p>
								</div>
							</div>
						</div>
					</ScrollReveal>
				))}
			</div>
		</section>
	);
}
