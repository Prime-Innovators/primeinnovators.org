export default function HowItWorksSection() {
	const steps = [
		{
			number: "01",
			title: "Curate projects",
			description:
				"Maintainers submit repositories with roadmaps, artifacts, and goals for governance review and approval.",
			keywords: ["Governance", "Roadmaps", "C4", "Quality"],
		},
		{
			number: "02",
			title: "Onboard fast",
			description:
				"Auto-generated documentation and visualizations help contributors understand and start contributing in minutes.",
			keywords: ["Onboarding", "Docs", "Artifacts"],
		},
		{
			number: "03",
			title: "Prove impact",
			description:
				"AI scores contributions by complexity, impact, and collaboration — building a verifiable reputation.",
			keywords: ["AI Proof", "XP", "Skill graph"],
		},
		{
			number: "04",
			title: "Fund and hire",
			description:
				"Sponsors fund projects with transparency while recruiters discover verified, high-signal talent.",
			keywords: ["Sponsors", "Recruiters", "Transparency"],
		},
	];

	return (
		<section
			className="py-20 md:py-32 bg-surface-container-lowest border-y border-white/5"
			id="how-it-works"
		>
			<div className="section-container">
				{/* Section Header */}
				<div className="text-center mb-16 space-y-6">
					<span className="text-label-sm text-secondary-fixed uppercase tracking-widest font-bold inline-block">
						System Flow
					</span>
					<h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight max-w-2xl mx-auto">
						From contribution to verified reputation in four steps
					</h2>
					<p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
						Each stage produces auditable proof — for contributors, maintainers,
						sponsors, and recruiters.
					</p>
				</div>

				{/* Steps Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{steps.map((step) => (
						<div
							key={step.number}
							className="glass-card p-8 rounded-2xl group border border-white/10 hover:border-primary-fixed/50 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
						>
							<div className="absolute inset-0 bg-gradient-to-br from-primary-fixed/[0.04] via-transparent to-secondary-fixed/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
							<div className="relative z-10 space-y-6">
								{/* Step Number */}
								<div className="text-4xl font-bold text-primary-fixed opacity-60 group-hover:opacity-100 transition-opacity">
									{step.number}
								</div>

								{/* Title */}
								<h3 className="text-headline-sm font-bold text-on-surface">
									{step.title}
								</h3>

								{/* Description */}
								<p className="text-on-surface-variant leading-relaxed">
									{step.description}
								</p>

								{/* Keywords/Tags */}
								<div className="pt-4 border-t border-white/12 space-y-3">
									<span className="text-label-sm text-on-surface-variant uppercase tracking-widest">
										Signals
									</span>
									<div className="flex flex-wrap gap-2">
										{step.keywords.map((keyword) => (
											<span
												key={keyword}
												className="px-3 py-1 rounded-full border border-white/10 bg-surface-container-high/60 text-xs text-on-surface-variant"
											>
												{keyword}
											</span>
										))}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
