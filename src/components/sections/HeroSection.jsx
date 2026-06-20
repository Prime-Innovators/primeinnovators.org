export default function HeroSection() {
	return (
		<header className="relative overflow-hidden min-h-svh flex items-center">
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute -top-40 -right-40 w-[600px] h-[600px] aurora-glow-yellow animate-float-slow animate-glow-pulse opacity-70" />
				<div className="absolute top-1/3 -left-44 w-[560px] h-[560px] aurora-glow-teal animate-float-slower opacity-60" />
			</div>

			<div className="section-container relative z-10 pt-24 md:pt-28 pb-16 md:pb-20 w-full">
				<div className="max-w-5xl mx-auto text-center space-y-10 md:space-y-12">
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-high/70 border border-white/10 rounded-full animate-fade-in-scale">
						<span className="w-2 h-2 rounded-full bg-primary-fixed animate-pulse" />
						<span className="text-label-sm text-on-surface-variant tracking-widest uppercase">
							MVP in Development
						</span>
					</div>

					<div className="space-y-6 md:space-y-8">
						<h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.08] text-on-surface">
							<span className="sr-only">
								Building Pakistan&apos;s verified open-source talent network
							</span>
							<span aria-hidden="true" className="block">
								{"Building Pakistan's".split(" ").map((word, i) => (
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
								{"verified open-source talent network"
									.split(" ")
									.map((word, i) => (
										<span
											key={word}
											className="inline-block overflow-hidden mr-[0.2em] last:mr-0"
										>
											<span
												className="text-gradient inline-block animate-reveal-word"
												style={{
													animationDelay: `${(i + 3) * 60 + 150}ms`,
												}}
											>
												{word}
											</span>
										</span>
									))}
							</span>
						</h1>
						<p className="text-lg md:text-xl lg:text-2xl text-on-surface-variant/90 max-w-3xl mx-auto leading-relaxed animate-reveal-up animation-delay-700">
							A national ecosystem where contributors earn trust through
							verified work, maintainers attract motivated teams, sponsors fund
							with transparency, and recruiters discover proven talent.
						</p>
					</div>

					<div className="animate-reveal-up animation-delay-1000">
						<a
							href="#waitlist"
							className="btn-primary group inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 text-label-md md:text-base"
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
