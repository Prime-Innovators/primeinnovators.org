export default function HeroSection() {
	return (
		<header className="relative overflow-hidden min-h-[90dvh] flex items-center">
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute -top-48 -right-48 w-[760px] h-[760px] aurora-glow-yellow animate-float-slow animate-glow-pulse" />
				<div className="absolute top-1/3 -left-56 w-[720px] h-[720px] aurora-glow-teal animate-float-slower" />
			</div>

			<div className="section-container relative z-10 pt-28 pb-16 md:pt-32 md:pb-20 w-full">
				<div className="max-w-4xl mx-auto text-center space-y-8">
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-high/70 border border-white/10 rounded-full">
						<span className="w-2 h-2 rounded-full bg-primary-fixed animate-pulse" />
						<span className="text-label-sm text-on-surface-variant tracking-widest uppercase">
							MVP in Development
						</span>
					</div>

					<div className="space-y-6">
						<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-on-surface">
							Building Pakistan&apos;s verified{" "}
							<span className="text-gradient">open-source talent network</span>
						</h1>

						<p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
							A national ecosystem where contributors earn trust through
							verified work, maintainers attract motivated teams, sponsors fund
							with transparency, and recruiters discover proven talent.
						</p>
					</div>

					<div className="flex flex-wrap justify-center gap-4 pt-2">
						<a
							href="#waitlist"
							className="btn-primary inline-flex items-center gap-2 group"
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
					</div>
				</div>
			</div>
		</header>
	);
}
