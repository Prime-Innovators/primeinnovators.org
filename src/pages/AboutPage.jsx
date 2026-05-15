import WaitlistForm from "../components/forms/WaitlistForm";
import EcosystemRolesSection from "../components/sections/EcosystemRolesSection";
import GlassCard from "../components/ui/GlassCard";
import SectionHeader from "../components/ui/SectionHeader";
import { milestones, problems, team, values } from "../constants/ecosystem";
import { RoleIcon } from "../constants/icons";

function ProblemCards() {
	return (
		<section className="py-20 md:py-32 section-container relative overflow-hidden">
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[800px] h-[800px] aurora-glow-teal opacity-10" />
			</div>
			<div className="relative z-10 space-y-14">
				<SectionHeader
					label="The Problem"
					title="Pakistan's tech talent pipeline has a proof gap"
					description="Thousands of skilled developers graduate every year. But without a trusted way to verify ability, talent goes unnoticed and potential goes unrealized."
				/>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{problems.map((problem) => (
						<GlassCard
							key={problem.title}
							className="p-8 hover:border-primary-fixed/50 transition-all duration-300 hover:-translate-y-1 group"
						>
							<div className="space-y-5">
								<div className="w-11 h-11 rounded-xl bg-surface-container-high border border-white/10 flex items-center justify-center text-primary-fixed">
									<RoleIcon name={problem.icon} />
								</div>
								<h3 className="text-headline-sm font-bold text-on-surface">
									{problem.title}
								</h3>
								<p className="text-on-surface-variant leading-relaxed text-sm">
									{problem.description}
								</p>
							</div>
						</GlassCard>
					))}
				</div>
			</div>
		</section>
	);
}

function StorySection() {
	return (
		<section className="py-20 md:py-32 section-container relative overflow-hidden">
			<div className="absolute -top-48 -left-48 w-[600px] h-[600px] aurora-glow-yellow opacity-10 pointer-events-none" />
			<div className="relative z-10 space-y-14">
				<SectionHeader label="Our Story" title="Why we started" />
				<div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
					<div className="lg:col-span-3 space-y-5">
						<p className="text-body-lg text-on-surface-variant leading-relaxed">
							Pakistan produces thousands of CS graduates every year. But most
							struggle to prove what they can actually do. Resumes exaggerate.
							GitHub stars don&apos;t tell the full story. Recruiters are left
							guessing.
						</p>
						<p className="text-body-lg text-on-surface-variant leading-relaxed">
							We asked: what if we could change that? What if every contribution
							could be tracked, verified, and turned into a credential that
							actually means something?
						</p>
						<p className="text-body-lg text-on-surface-variant leading-relaxed">
							That question became our mission: build a national ecosystem where
							talent proves itself through real work — not claims.
						</p>
						<GlassCard className="p-6 inline-block">
							<p className="text-sm font-semibold text-on-surface flex items-center gap-3">
								<span className="w-2 h-2 rounded-full bg-primary-fixed" />
								An independent nonprofit ecosystem. Not a code host. Not a job
								board. Not government.
							</p>
						</GlassCard>
					</div>
					<div className="lg:col-span-2">
						<GlassCard className="p-6 md:p-8 group">
							<div className="space-y-6">
								<span className="text-label-sm text-primary-fixed uppercase tracking-widest font-bold">
									Milestones
								</span>
								<div className="space-y-0">
									{milestones.map((ms, i) => (
										<div key={ms.period} className="flex gap-4">
											<div className="flex flex-col items-center">
												<div
													className={`w-2.5 h-2.5 rounded-full border-2 ${i === 0 ? "border-primary-fixed bg-primary-fixed" : "border-white/20"}`}
												/>
												{i < milestones.length - 1 && (
													<div className="w-px flex-1 bg-white/10" />
												)}
											</div>
											<div className="pb-6">
												<p className="text-xs text-on-surface-variant/60">
													{ms.period}
												</p>
												<p className="text-sm font-semibold text-on-surface">
													{ms.label}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</GlassCard>
					</div>
				</div>
			</div>
		</section>
	);
}

function ValuesSection() {
	return (
		<section className="py-20 md:py-32 bg-surface-container-lowest border-y border-white/5 relative overflow-hidden">
			<div className="section-container relative z-10 space-y-14">
				<div className="text-center max-w-2xl mx-auto">
					<SectionHeader
						label="Core Values"
						title="Principles that guide everything we build"
						className="text-center mx-auto"
					/>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
					{values.map((v) => (
						<GlassCard
							key={v.title}
							className="p-6 hover:border-primary-fixed/50 transition-all duration-300 hover:-translate-y-1 group text-center"
						>
							<div className="space-y-3">
								<div className="w-8 h-8 rounded-full bg-primary-fixed/10 mx-auto flex items-center justify-center">
									<span className="w-2 h-2 rounded-full bg-primary-fixed" />
								</div>
								<h3 className="text-sm font-bold text-on-surface leading-tight">
									{v.title}
								</h3>
								<p className="text-xs text-on-surface-variant/80 leading-relaxed">
									{v.desc}
								</p>
							</div>
						</GlassCard>
					))}
				</div>
			</div>
		</section>
	);
}

function TeamSection() {
	return (
		<section className="py-20 md:py-32 section-container relative overflow-hidden">
			<div className="absolute -top-48 -right-48 w-[600px] h-[600px] aurora-glow-teal opacity-10 pointer-events-none" />
			<div className="relative z-10 space-y-14">
				<div className="text-center max-w-2xl mx-auto">
					<SectionHeader
						label="Team"
						title="The people behind the ecosystem"
						className="text-center mx-auto"
					/>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{team.map((member) => (
						<GlassCard
							key={member.name}
							className="p-6 hover:border-primary-fixed/50 transition-all duration-300 hover:-translate-y-1 group text-center flex flex-col"
						>
							<div className="space-y-4 flex-1">
								<div className="w-16 h-16 rounded-full bg-surface-container-high border border-white/10 mx-auto flex items-center justify-center overflow-hidden">
									{member.image ? (
										<img
											src={member.image}
											alt={member.name}
											className="w-full h-full object-cover"
										/>
									) : (
										<svg
											title="Default Avatar"
											role="img"
											aria-label="Default avatar"
											alt="Default Avatar"
											className="w-8 h-8 text-primary-fixed"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
										</svg>
									)}
								</div>
								<div>
									<p className="font-bold text-on-surface">{member.name}</p>
									<p className="text-label-sm text-secondary-fixed uppercase tracking-widest mt-1">
										{member.role}
									</p>
								</div>
								<p className="text-xs text-on-surface-variant/70 leading-relaxed">
									{member.bio}
								</p>
							</div>
							{member.linkedin && (
								<a
									href={member.linkedin}
									target="_blank"
									rel="noopener noreferrer"
									className="mt-4 inline-flex items-center justify-center gap-2 text-xs font-semibold text-primary-fixed hover:text-primary-fixed/80 transition-colors"
								>
									<svg
										title="LinkedIn Logo"
										role="img"
										aria-label="LinkedIn logo"
										alt="LinkedIn Logo"
										className="w-4 h-4"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
									</svg>
									<span>LinkedIn</span>
								</a>
							)}
						</GlassCard>
					))}
				</div>
			</div>
		</section>
	);
}

function CtaSection() {
	return (
		<section className="relative py-20 md:py-32 bg-surface-container-lowest border-y border-white/5 overflow-hidden">
			<div className="absolute -top-48 -left-40 w-[600px] h-[600px] aurora-glow-yellow opacity-20" />
			<div className="section-container relative z-10">
				<GlassCard className="p-8 md:p-16 max-w-2xl mx-auto hover:border-primary-fixed/30 transition-all duration-300 hover:-translate-y-1 group text-center">
					<div className="space-y-8">
						<div className="space-y-4">
							<h2 className="text-3xl md:text-4xl font-bold text-on-surface">
								We&apos;re building in the open. <br />
								<span className="text-primary-fixed">Join us</span>.
							</h2>
							<p className="text-on-surface-variant leading-relaxed">
								Be the first to know when we launch. Get updates on verified
								contributor profiles, AI-scored impact, transparent
								sponsorships, and early access opportunities.
							</p>
						</div>
						<WaitlistForm className="justify-center" />
					</div>
				</GlassCard>
			</div>
		</section>
	);
}

function AboutHero() {
	return (
		<header className="relative overflow-hidden min-h-[85dvh] flex items-center border-b border-white/5">
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute -top-48 -right-48 w-[760px] h-[760px] aurora-glow-yellow animate-float-slow animate-glow-pulse" />
				<div className="absolute top-1/3 -left-56 w-[720px] h-[720px] aurora-glow-teal animate-float-slower" />
			</div>
			<div className="section-container relative z-10 pt-28 pb-16 md:pt-32 md:pb-20 w-full">
				<div className="max-w-4xl mx-auto text-center space-y-10">
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-high/70 border border-white/10 rounded-full">
						<span className="text-label-sm text-on-surface-variant tracking-widest uppercase">
							Our Mission
						</span>
					</div>
					<div className="space-y-6">
						<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-on-surface">
							What if your code was{" "}
							<span className="text-gradient">your credential</span>?
						</h1>
						<p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
							Prime Innovators exists to turn open-source contributions into
							verified, portable reputation — so talent is judged by what they
							build, not what they claim.
						</p>
					</div>
					<Link
						to="/#waitlist"
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
					</Link>
				</div>
			</div>
		</header>
	);
}

export default function AboutPage() {
	return (
		<>
			<AboutHero />
			<ProblemCards />
			<EcosystemRolesSection />
			<StorySection />
			<ValuesSection />
			<TeamSection />
			<CtaSection />
		</>
	);
}
