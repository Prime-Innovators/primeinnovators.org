import ScrollReveal from "../ui/ScrollReveal";

export default function RecruiterSection() {
	const audienceCards = [
		{
			title: "Recruiters",
			tagline: "Signal over noise",
			description:
				"Discover verified, industry-ready talent with proof beyond resumes. When we launch, you'll be first in line.",
			highlights: [
				"Filter by skill, university, and verified impact",
				"Review merged PRs and collaboration quality",
				"Profiles backed by traceable contribution history",
			],
			icon: (
				<svg
					aria-hidden="true"
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					strokeWidth="1.6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
			),
		},
		{
			title: "Sponsors",
			tagline: "Trust through transparency",
			description:
				"Fund people or projects with confidence. Every transaction will be publicly recorded — full audit trail, no dark money.",
			highlights: [
				"Sponsor contributors, maintainers, or projects",
				"Track every rupee with public dashboards",
				"Support national open-source growth",
			],
			icon: (
				<svg
					aria-hidden="true"
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					strokeWidth="1.6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			),
		},
	];

	const engagementSteps = [
		{
			step: "1",
			title: "Discover",
			description:
				"Browse talent or projects using verified signals and smart filters.",
		},
		{
			step: "2",
			title: "Verify",
			description: "Review AI proof, artifacts, and the full activity trail.",
		},
		{
			step: "3",
			title: "Engage",
			description:
				"Connect to talent or sponsor work with visible accountability.",
		},
	];

	return (
		<section
			className="relative py-20 md:py-32 bg-surface-container-lowest border-y border-white/5 overflow-hidden"
			id="recruiters"
		>
			<div className="absolute -bottom-48 -right-40 w-[640px] h-[640px] aurora-glow-yellow opacity-30 z-0" />

			<div className="section-container relative z-10 space-y-16">
				<ScrollReveal className="text-center space-y-6 max-w-2xl mx-auto">
					<span className="text-label-sm text-primary-fixed uppercase tracking-widest font-bold inline-block">
						For Recruiters and Sponsors
					</span>
					<h2 className="text-3xl md:text-4xl font-bold text-on-surface leading-tight">
						High-signal discovery and transparent funding in one ecosystem
					</h2>
					<p className="text-body-lg text-on-surface-variant">
						Cut through the noise. Discover verified talent and support projects
						with trust, proof, and public accountability.
					</p>
				</ScrollReveal>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{audienceCards.map((card, i) => (
						<ScrollReveal key={card.title} delay={i * 100} className="h-full">
							<div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-primary-fixed/50 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden h-full">
								<div className="absolute inset-0 bg-gradient-to-br from-primary-fixed/[0.04] via-transparent to-secondary-fixed/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
								<div className="relative z-10 space-y-6">
									<div className="flex items-center gap-3">
										<div className="w-11 h-11 rounded-xl bg-surface-container-high border border-white/10 flex items-center justify-center text-primary-fixed">
											{card.icon}
										</div>
										<div>
											<p className="text-2xl font-bold text-on-surface">
												{card.title}
											</p>
											<p className="text-label-sm text-secondary-fixed uppercase tracking-widest">
												{card.tagline}
											</p>
										</div>
									</div>

									<p className="text-on-surface-variant leading-relaxed">
										{card.description}
									</p>

									<ul className="space-y-3 text-sm text-on-surface-variant">
										{card.highlights.map((item) => (
											<li key={item} className="flex items-start gap-3">
												<span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary-fixed flex-shrink-0" />
												<span>{item}</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						</ScrollReveal>
					))}
				</div>

				<ScrollReveal>
					<div className="glass-card p-8 md:p-12 rounded-2xl space-y-8 border border-white/10 group relative overflow-hidden">
						<div className="absolute inset-0 bg-gradient-to-br from-primary-fixed/[0.03] via-transparent to-secondary-fixed/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
						<div className="relative z-10 space-y-8">
							<h3 className="text-2xl font-bold text-on-surface">
								How engagement works
							</h3>

							<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
								{engagementSteps.map((item) => (
									<div key={item.step} className="space-y-4">
										<div className="w-10 h-10 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-bold text-lg">
											{item.step}
										</div>
										<h4 className="font-bold text-on-surface">{item.title}</h4>
										<p className="text-on-surface-variant text-sm leading-relaxed">
											{item.description}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</ScrollReveal>

				<ScrollReveal className="text-center space-y-6">
					<p className="text-on-surface-variant">
						Ready to join Pakistan&apos;s verified talent ecosystem?
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<a
							href="#waitlist"
							className="btn-primary inline-flex items-center gap-2"
						>
							<span>Join the Waitlist</span>
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
						</a>
						<a
							href="mailto:hello@primeinnovators.org"
							className="btn-secondary px-8 py-4 rounded-lg font-bold transition-all hover:-translate-y-0.5"
						>
							Sponsor this project
						</a>
					</div>
				</ScrollReveal>
			</div>
		</section>
	);
}
