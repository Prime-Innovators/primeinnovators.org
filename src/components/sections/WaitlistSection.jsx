import WaitlistForm from "../forms/WaitlistForm";
import ScrollReveal from "../ui/ScrollReveal";

export default function WaitlistSection() {
	return (
		<section
			className="relative py-20 md:py-32 bg-surface-container-lowest border-y border-white/5 overflow-hidden"
			id="waitlist"
		>
			<div className="absolute -top-48 -left-40 w-[600px] h-[600px] aurora-glow-yellow opacity-20" />
			<div className="section-container relative z-10">
				<ScrollReveal>
					<div className="glass-card p-8 md:p-16 rounded-2xl space-y-8 text-center max-w-2xl mx-auto border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-primary-fixed/30 group relative overflow-hidden">
						<div className="absolute inset-0 bg-gradient-to-br from-primary-fixed/[0.04] via-transparent to-secondary-fixed/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
						<div className="relative z-10 space-y-8">
							<div className="space-y-4">
								<h2 className="text-3xl md:text-4xl font-bold text-on-surface">
									Join the{" "}
									<span className="text-primary-fixed">Prime Innovators</span>{" "}
									waitlist
								</h2>
								<p className="text-on-surface-variant leading-relaxed">
									Be the first to know when we launch. Get updates on verified
									contributor profiles, AI-scored impact, transparent
									sponsorships, and early access opportunities.
								</p>
							</div>

							<WaitlistForm className="justify-center" />

							<div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-white/12">
								<div className="space-y-2">
									<p className="text-2xl font-bold text-primary-fixed">
										Growing
									</p>
									<p className="text-label-sm text-on-surface-variant">
										Contributor Base
									</p>
								</div>
								<div className="space-y-2">
									<p className="text-2xl font-bold text-secondary-fixed">
										Nationwide
									</p>
									<p className="text-label-sm text-on-surface-variant">
										University Network
									</p>
								</div>
								<div className="col-span-2 md:col-span-1 space-y-2">
									<p className="text-2xl font-bold text-tertiary-fixed">2026</p>
									<p className="text-label-sm text-on-surface-variant">
										Launch Window
									</p>
								</div>
							</div>
						</div>
					</div>
				</ScrollReveal>
			</div>
		</section>
	);
}
