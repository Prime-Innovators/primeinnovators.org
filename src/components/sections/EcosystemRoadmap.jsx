export default function EcosystemRoadmap() {
	const phases = [
		{
			phase: "Phase 1",
			title: "Foundation",
			description:
				"Core infrastructure for project intake, identity, and onboarding.",
			status: "In Progress",
			items: [
				"Project governance & multi-stage approval workflow",
				"Contributor identity with GitHub OAuth",
				"Artifact visualization (C4 diagrams, roadmaps)",
				"University affiliation verification",
			],
			accent: "text-primary-fixed",
			border: "border-primary-fixed/30",
			dot: "bg-primary-fixed",
		},
		{
			phase: "Phase 2",
			title: "Intelligence",
			description: "AI-powered contribution scoring and gamification engine.",
			status: "Up Next",
			items: [
				"AI contribution scoring engine",
				"XP, badges, and leaderboard system",
				"Skill graph & domain inference",
				"Anti-gaming heuristics & quality safeguards",
			],
			accent: "text-secondary-fixed",
			border: "border-white/5",
			dot: "bg-white/20",
		},
		{
			phase: "Phase 3",
			title: "Scale",
			description:
				"Nationwide expansion with funding, chapters, and recruiting.",
			status: "Future",
			items: [
				"University chapters & ambassador tools",
				"Sponsorship engine (JazzCash, Easypaisa, Stripe)",
				"Financial transparency dashboards",
				"Recruiter talent discovery portal",
			],
			accent: "text-tertiary-fixed",
			border: "border-white/5",
			dot: "bg-white/20",
		},
	];

	return (
		<section
			className="py-20 md:py-32 bg-surface-container-lowest border-y border-white/5 relative overflow-hidden"
			id="roadmap"
		>
			<div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[800px] h-[800px] aurora-glow-yellow opacity-10 pointer-events-none" />

			<div className="section-container relative z-10">
				<div className="text-center mb-16 space-y-6">
					<span className="text-label-sm text-primary-fixed uppercase tracking-widest font-bold inline-block">
						Ecosystem Roadmap
					</span>
					<h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight max-w-2xl mx-auto">
						Building in phases, launching with purpose
					</h2>
					<p className="text-body-lg text-on-surface-variant max-w-xl mx-auto">
						Here&apos;s what we&apos;re building — and what&apos;s coming next.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{phases.map((phase, index) => (
						<div
							key={phase.phase}
							className={`glass-card p-8 rounded-2xl border transition-all duration-300 group relative overflow-hidden ${
								phase.border
							} ${
								index === 0
									? "hover:-translate-y-1 hover:border-primary-fixed/50"
									: "opacity-50 hover:opacity-80"
							}`}
						>
							<div
								className={`absolute inset-0 bg-gradient-to-br from-primary-fixed/[0.04] via-transparent to-secondary-fixed/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
							/>
							<div className="relative z-10 space-y-6">
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-3">
										<span className={`w-2.5 h-2.5 rounded-full ${phase.dot}`} />
										<span
											className={`text-label-sm font-bold uppercase tracking-widest ${phase.accent}`}
										>
											{phase.phase}
										</span>
									</div>
									{index === 0 ? (
										<span className="text-xs text-primary-fixed border border-primary-fixed/30 rounded-full px-3 py-1 flex items-center gap-1.5">
											<span className="w-1.5 h-1.5 rounded-full bg-primary-fixed animate-pulse" />
											{phase.status}
										</span>
									) : (
										<span className="text-xs text-on-surface-variant/40 rounded-full px-2">
											{phase.status}
										</span>
									)}
								</div>

								<div>
									<h3 className="text-headline-sm font-bold text-on-surface">
										{phase.title}
									</h3>
									<p className="text-sm text-on-surface-variant mt-2">
										{phase.description}
									</p>
								</div>

								<ul className="space-y-3">
									{phase.items.map((item) => (
										<li key={item} className="flex items-start gap-3 text-sm">
											{index === 0 ? (
												<svg
													aria-hidden="true"
													className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-fixed"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
													strokeWidth="2"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M5 13l4 4L19 7"
													/>
												</svg>
											) : (
												<svg
													aria-hidden="true"
													className="w-4 h-4 mt-0.5 flex-shrink-0 text-on-surface-variant/30"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
													strokeWidth="1.5"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
													/>
												</svg>
											)}
											<span
												className={
													index === 0
														? "text-on-surface-variant"
														: "text-on-surface-variant/40"
												}
											>
												{item}
											</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
