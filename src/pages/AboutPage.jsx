import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import WaitlistForm from "../components/forms/WaitlistForm";
import { OrganizationSchema, WebSiteSchema } from "../components/seo/JsonLd";
import GlassCard from "../components/ui/GlassCard";
import SectionHeader from "../components/ui/SectionHeader";
import { milestones, problems, team, values } from "../constants/ecosystem";
import { RoleIcon } from "../constants/icons";
import { getPageSeo } from "../constants/seo";

function AboutHero() {
	return (
		<header className="relative overflow-hidden min-h-[85dvh] flex items-center border-b border-white/5">
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute -top-48 -right-48 w-[760px] h-[760px] aurora-glow-yellow opacity-15 animate-float-slow animate-glow-pulse" />
				<div className="absolute top-1/3 -left-56 w-[720px] h-[720px] aurora-glow-teal opacity-10 animate-float-slower" />
			</div>
			<div className="section-container relative z-10 pt-28 pb-16 md:pt-32 md:pb-20 w-full">
				<div className="max-w-4xl mx-auto text-center space-y-10">
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-high/70 border border-white/10 rounded-full">
						<span className="text-label-sm text-on-surface-variant tracking-widest uppercase">
							About Prime Innovators
						</span>
					</div>
					<div className="space-y-6">
						<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-on-surface">
							What if your code was{" "}
							<span className="text-gradient">your credential</span>?
						</h1>
						<p className="text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
							Prime Innovators is building Pakistan’s open-source talent
							ecosystem where students, developers, maintainers, sponsors, and
							recruiters collaborate through verified work, structured learning,
							and transparent project support.
						</p>
					</div>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
							href="#ecosystem"
							className="btn-secondary px-8 py-4 rounded-lg font-bold text-label-md transition-all hover:-translate-y-0.5 active:scale-95 text-on-surface inline-flex items-center gap-2 group w-full sm:w-auto justify-center"
						>
							<span>Explore the Ecosystem</span>
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

function FounderStorySection() {
	return (
		<section className="py-20 md:py-32 section-container relative overflow-hidden">
			<div className="absolute -top-48 -left-48 w-[600px] h-[600px] aurora-glow-yellow opacity-10 pointer-events-none" />
			<div className="relative z-10 space-y-12">
				<SectionHeader label="Our Origin" title="Founder's Story" />
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
					<div className="lg:col-span-8 space-y-6 text-body-lg text-on-surface-variant leading-relaxed">
						<p>
							I started Prime Innovators from a problem I experienced directly.
						</p>
						<p>
							While working on open-source projects and trying to grow as a
							developer, I realized that talent was not the real shortage. The
							shortage was structure. Many students and early developers in
							Pakistan want to learn, build, and contribute, but they do not
							always have a clear path into meaningful open-source work. They do
							not know where to start, how to choose quality projects, how to
							receive feedback, or how to turn their work into credible proof of
							skill.
						</p>
						<p>
							At the same time, project builders and maintainers face a
							different problem. They may have strong ideas, useful tools, and
							real technical ambition, but they often struggle to find committed
							contributors, receive proper feedback, attract support, or sustain
							development without funding. Good projects slow down not because
							the idea is weak, but because the ecosystem around them is
							missing.
						</p>
						<p>
							This gap kept appearing again and again: students need real-world
							work, projects need serious contributors, sponsors need
							transparency, and recruiters need verified evidence beyond
							resumes.
						</p>
						<p className="font-semibold text-on-surface">
							Prime Innovators was created to connect these missing pieces.
						</p>
						<p>
							The goal is not only to teach open source. The goal is to make
							open-source contribution structured, visible, and valuable. We
							want students and graduates to become industry-ready by working on
							real projects, receiving mentorship, building public proof, and
							contributing to software that matters. We want maintainers to get
							contributors, feedback, recognition, and transparent support. We
							want sponsors and universities to back talent development with
							clarity. And we want recruiters to discover people through
							verified work, not inflated claims.
						</p>
						<p>
							Prime Innovators exists because Pakistan does not lack talent. It
							lacks a trusted system that helps talent prove itself.
						</p>
					</div>
					<div className="lg:col-span-4 space-y-6">
						<GlassCard className="p-6 md:p-8 space-y-6 hover:border-primary-fixed/30 transition-all duration-300">
							<div className="space-y-4 text-center">
								<div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-2 border-primary-fixed/30">
									<img
										src="/images/team/mohammad-saeed.webp"
										alt="Mohammad Saeed Saeedi"
										className="w-full h-full object-cover"
										loading="lazy"
									/>
								</div>
								<div>
									<h4 className="text-lg font-bold text-on-surface">
										Mohammad Saeed Saeedi
									</h4>
									<p className="text-label-sm text-primary-fixed uppercase tracking-wider">
										Founder, Prime Innovators
									</p>
								</div>
							</div>
							<div className="border-t border-white/5 pt-4 text-center italic text-sm text-on-surface-variant/80">
								&ldquo;Pakistan has talent. Prime Innovators is building the
								system that helps that talent prove itself through open-source
								work.&rdquo;
							</div>
						</GlassCard>
					</div>
				</div>
			</div>
		</section>
	);
}

function WhyPakistanSection() {
	return (
		<section className="py-20 bg-surface-container-lowest border-y border-white/5 relative overflow-hidden">
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] aurora-glow-teal opacity-10" />
			</div>
			<div className="section-container relative z-10 space-y-12">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
					<div className="lg:col-span-7 space-y-6">
						<SectionHeader
							label="Market Urgency"
							title="Why Pakistan, Why Now"
						/>
						<p className="text-body-lg text-on-surface-variant leading-relaxed">
							Pakistan’s tech industry is undergoing an inflection point, with
							growing global demand for software engineering talent. But
							academic coursework alone is not enough to bridge the transition
							to professional engineering.
						</p>
						<p className="text-body-lg text-on-surface-variant leading-relaxed">
							Pakistan’s next technology advantage will not come only from
							producing more graduates. It will come from helping those
							graduates build, contribute, collaborate, and prove their skills
							in public. Open source is the ultimate equalizer, enabling any
							developer to build high-scale, production-ready portfolios visible
							to the world.
						</p>
					</div>
					<div className="lg:col-span-5">
						<GlassCard className="p-8 space-y-6 border-l-4 border-l-primary-fixed">
							<div className="space-y-2">
								<span className="text-label-sm text-primary-fixed uppercase tracking-widest font-bold">
									Employability Indicator
								</span>
								<h3 className="text-5xl font-extrabold text-gradient">~10%</h3>
							</div>
							<p className="text-sm text-on-surface-variant leading-relaxed">
								Pakistan produces tens of thousands of IT and computing
								graduates every year, yet industry reports repeatedly point to a
								serious employability gap. The{" "}
								<strong>State Bank of Pakistan</strong> has noted that only
								around 10% of IT graduates are considered employable due to
								weaknesses in technical and soft skills.
							</p>
						</GlassCard>
					</div>
				</div>
			</div>
		</section>
	);
}

function ProofGapSection() {
	return (
		<section className="py-20 md:py-32 section-container relative overflow-hidden">
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[800px] h-[800px] aurora-glow-teal opacity-10" />
			</div>
			<div className="relative z-10 space-y-14">
				<SectionHeader
					label="The Proof Gap"
					title="The broken loops in talent and project development"
					description="We solve the three core structural gaps that hold back the Pakistani software ecosystem."
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

function EcosystemIncentivesSection() {
	return (
		<section
			className="py-20 md:py-32 bg-surface-container-lowest border-y border-white/5 relative overflow-hidden"
			id="ecosystem"
		>
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] aurora-glow-yellow opacity-10" />
			</div>
			<div className="section-container relative z-10 space-y-14">
				<SectionHeader
					label="The Ecosystem"
					title="Four roles, one operating model"
					description="Prime Innovators connects all ecosystem stakeholders. Here is how each group participates and wins through verified, public-first contribution."
				/>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<GlassCard className="p-8 flex flex-col justify-between hover:border-primary-fixed/30 transition-all duration-300">
						<div className="space-y-4">
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 rounded-lg bg-primary-fixed/10 flex items-center justify-center text-primary-fixed">
									<RoleIcon name="user" />
								</div>
								<h3 className="text-xl font-bold text-on-surface">
									Contributors
								</h3>
							</div>
							<p className="text-sm text-on-surface-variant leading-relaxed">
								Contributors build public proof through reviewed open-source
								work. Over time, this proof becomes visible through XP, badges,
								skill graphs, and eligibility for future opportunities.
							</p>
							<ul className="space-y-2 text-xs text-on-surface-variant/80 border-t border-white/5 pt-4">
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
									Access to high-quality curated learning roadmaps
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
									Verifiable skill graphs mapped from GitHub contributions
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
									Ecosystem rewards, certificates, and physical badges
								</li>
							</ul>
						</div>
						<a
							href="#waitlist"
							className="btn-secondary px-6 py-3 rounded-lg font-bold text-xs text-on-surface inline-flex items-center justify-center gap-2 transition-all hover:bg-white/5 mt-6"
						>
							<span>Join as Contributor</span>
							<svg
								aria-hidden="true"
								className="w-3.5 h-3.5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</a>
					</GlassCard>

					<GlassCard className="p-8 flex flex-col justify-between hover:border-primary-fixed/30 transition-all duration-300">
						<div className="space-y-4">
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 rounded-lg bg-primary-fixed/10 flex items-center justify-center text-primary-fixed">
									<RoleIcon name="folder" />
								</div>
								<h3 className="text-xl font-bold text-on-surface">
									Maintainers
								</h3>
							</div>
							<p className="text-sm text-on-surface-variant leading-relaxed">
								Submit projects with defined roadmaps and architecture. Attract
								committed, verified contributors, receive technical guidance,
								and tap into transparent project funding.
							</p>
							<ul className="space-y-2 text-xs text-on-surface-variant/80 border-t border-white/5 pt-4">
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
									Expert mentoring to refine project architecture
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
									Automated documentation and visualization tools
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
									Direct sponsorship rails and contributor routing
								</li>
							</ul>
						</div>
						<Link
							to="/contact?type=maintainer"
							className="btn-secondary px-6 py-3 rounded-lg font-bold text-xs text-on-surface inline-flex items-center justify-center gap-2 transition-all hover:bg-white/5 mt-6"
						>
							<span>Submit a Project</span>
							<svg
								aria-hidden="true"
								className="w-3.5 h-3.5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</Link>
					</GlassCard>

					<GlassCard className="p-8 flex flex-col justify-between hover:border-primary-fixed/30 transition-all duration-300">
						<div className="space-y-4">
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 rounded-lg bg-primary-fixed/10 flex items-center justify-center text-primary-fixed">
									<RoleIcon name="currency" />
								</div>
								<h3 className="text-xl font-bold text-on-surface">Sponsors</h3>
							</div>
							<p className="text-sm text-on-surface-variant leading-relaxed">
								Fund specific contributors, projects, or university initiatives
								with full transparency. Track the direct impact of every rupee
								through auditable activity dashboards.
							</p>
							<ul className="space-y-2 text-xs text-on-surface-variant/80 border-t border-white/5 pt-4">
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
									100% auditable funding trails on public dashboards
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
									Direct corporate social impact and CSR reporting
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
									Brand placement and high-trust community goodwill
								</li>
							</ul>
						</div>
						<Link
							to="/contact?type=sponsor"
							className="btn-secondary px-6 py-3 rounded-lg font-bold text-xs text-on-surface inline-flex items-center justify-center gap-2 transition-all hover:bg-white/5 mt-6"
						>
							<span>Partner With Us</span>
							<svg
								aria-hidden="true"
								className="w-3.5 h-3.5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</Link>
					</GlassCard>

					<GlassCard className="p-8 flex flex-col justify-between hover:border-primary-fixed/30 transition-all duration-300">
						<div className="space-y-4">
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 rounded-lg bg-primary-fixed/10 flex items-center justify-center text-primary-fixed">
									<RoleIcon name="search" />
								</div>
								<h3 className="text-xl font-bold text-on-surface">
									Recruiters
								</h3>
							</div>
							<p className="text-sm text-on-surface-variant leading-relaxed">
								Search, filter, and discover candidates based on verified
								contribution history, skill graphs, and peer-reviewed project
								outcomes rather than static resumes.
							</p>
							<ul className="space-y-2 text-xs text-on-surface-variant/80 border-t border-white/5 pt-4">
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
									Access to high-signal candidate discovery dashboards
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
									Verifiable code repositories and contribution context
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
									Vetted developer networks from campuses nationwide
								</li>
							</ul>
						</div>
						<Link
							to="/contact?type=recruiter"
							className="btn-secondary px-6 py-3 rounded-lg font-bold text-xs text-on-surface inline-flex items-center justify-center gap-2 transition-all hover:bg-white/5 mt-6"
						>
							<span>Explore Recruiter Access</span>
							<svg
								aria-hidden="true"
								className="w-3.5 h-3.5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</Link>
					</GlassCard>
				</div>
			</div>
		</section>
	);
}

function HowItWorksSection() {
	const steps = [
		{
			num: "1",
			title: "Join",
			text: "Contributors onboard via GitHub and link university profiles.",
		},
		{
			num: "2",
			title: "Learn",
			text: "Acquire modern git, workflow, and open-source practices.",
		},
		{
			num: "3",
			title: "Contribute",
			text: "Select from curated, reviewed real-world projects.",
		},
		{
			num: "4",
			title: "Verify",
			text: "Maintainers review code and AI models quantify complexity.",
		},
		{
			num: "5",
			title: "Earn",
			text: "Unlock public skill graphs, XP, and profile achievements.",
		},
		{
			num: "6",
			title: "Fund",
			text: "Sponsors back active developers and projects transparently.",
		},
		{
			num: "7",
			title: "Hire",
			text: "Industry hires verified developers based on provable ability.",
		},
	];

	return (
		<section className="py-20 md:py-32 section-container relative overflow-hidden">
			<div className="absolute -top-48 -left-48 w-[600px] h-[600px] aurora-glow-teal opacity-5 pointer-events-none" />
			<div className="relative z-10 space-y-16">
				<SectionHeader
					label="Operations"
					title="How It Works"
					description="A structured, accountable path connecting education, open source, and the tech industry."
				/>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6 relative">
					{steps.map((step, idx) => (
						<div key={step.num} className="relative group space-y-4">
							<div className="flex lg:flex-col items-center gap-4 lg:gap-6">
								<div className="w-12 h-12 rounded-full bg-surface-container-high border border-white/10 flex items-center justify-center font-mono font-bold text-primary-fixed group-hover:border-primary-fixed/50 transition-all duration-300 shadow-md">
									{step.num}
								</div>
								{idx < steps.length - 1 && (
									<div className="hidden lg:block absolute top-6 left-[calc(50%+1.5rem)] right-[calc(-50%+1.5rem)] h-[1px] bg-white/10 group-hover:bg-primary-fixed/20 transition-all duration-500 -z-10" />
								)}
							</div>
							<div className="space-y-1 text-left lg:text-center pl-2 lg:pl-0">
								<h4 className="font-bold text-on-surface text-base">
									{step.title}
								</h4>
								<p className="text-xs text-on-surface-variant leading-relaxed max-w-xs mx-auto">
									{step.text}
								</p>
							</div>
						</div>
					))}
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
								<p className="text-xs text-on-surface-variant/85 leading-relaxed">
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

function MilestonesSection() {
	return (
		<section className="py-20 bg-surface-container-lowest border-y border-white/5 relative overflow-hidden">
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute -top-48 -left-48 w-[600px] h-[600px] aurora-glow-yellow opacity-10" />
			</div>
			<div className="section-container relative z-10 space-y-14">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
					<div className="lg:col-span-5 space-y-4">
						<SectionHeader
							label="Ecosystem Journey"
							title="Our milestones and road ahead"
							description="We are committed to building a sustainable, long-term foundation for Pakistan's open-source future."
						/>
					</div>
					<div className="lg:col-span-7">
						<GlassCard className="p-8 md:p-10">
							<div className="space-y-0">
								{milestones.map((ms, i) => (
									<div key={ms.period} className="flex gap-6 group">
										<div className="flex flex-col items-center">
											<div
												className={`w-3 h-3 rounded-full border-2 transition-colors duration-300 ${i === 3 ? "border-primary-fixed bg-primary-fixed shadow-[0_0_10px_rgba(243,230,75,0.5)]" : "border-white/20"}`}
											/>
											{i < milestones.length - 1 && (
												<div className="w-px flex-1 bg-white/10 group-hover:bg-primary-fixed/20 transition-colors" />
											)}
										</div>
										<div className="pb-8">
											<span
												className={`text-xs font-mono font-bold tracking-wider ${i === 3 ? "text-primary-fixed" : "text-on-surface-variant/50"}`}
											>
												{ms.period}
											</span>
											<p
												className={`text-base font-bold mt-1 ${i === 3 ? "text-on-surface" : "text-on-surface/85"}`}
											>
												{ms.label}
											</p>
										</div>
									</div>
								))}
							</div>
						</GlassCard>
					</div>
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
							className="p-6 hover:border-primary-fixed/50 transition-all duration-300 hover:-translate-y-1 group text-center flex flex-col justify-between"
						>
							<div className="space-y-4">
								<div className="w-16 h-16 rounded-full bg-surface-container-high border border-white/10 mx-auto flex items-center justify-center overflow-hidden">
									{member.image ? (
										<img
											src={member.image}
											alt={member.name}
											className="w-full h-full object-cover"
											loading="lazy"
											width={64}
											height={64}
										/>
									) : (
										<svg
											role="img"
											aria-label={`${member.name} avatar`}
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
										role="img"
										aria-label="LinkedIn"
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

function FinalRoleCtaSection() {
	return (
		<section
			className="relative py-20 md:py-32 bg-surface-container-lowest border-t border-white/5 overflow-hidden"
			id="waitlist"
		>
			<div className="absolute -top-48 -left-40 w-[600px] h-[600px] aurora-glow-yellow opacity-20 pointer-events-none" />
			<div className="section-container relative z-10 space-y-12">
				<GlassCard className="p-8 md:p-16 max-w-4xl mx-auto hover:border-primary-fixed/30 transition-all duration-300 text-center space-y-10">
					<div className="space-y-4 max-w-2xl mx-auto">
						<h2 className="text-3xl md:text-4xl font-bold text-on-surface">
							Ready to align with Pakistan&apos;s <br />
							<span className="text-gradient">open-source ecosystem</span>?
						</h2>
						<p className="text-on-surface-variant leading-relaxed text-sm md:text-base">
							Whether you are a student looking for real experience, a
							maintainer building something meaningful, a sponsor supporting
							open-source innovation, or a recruiter searching for verified
							talent, Prime Innovators gives you a place to start.
						</p>
					</div>

					<div className="border-t border-b border-white/5 py-8">
						<div className="max-w-md mx-auto space-y-4">
							<p className="text-xs font-semibold text-primary-fixed uppercase tracking-wider animate-glow-pulse">
								Join the Contributor Waitlist
							</p>
							<WaitlistForm className="justify-center" />
						</div>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4 max-w-2xl mx-auto">
						<Link
							to="/contact?type=maintainer"
							className="px-4 py-3 rounded-lg border border-white/10 text-xs font-bold text-on-surface hover:bg-white/5 hover:border-primary-fixed/20 transition-all flex items-center justify-center gap-1.5"
						>
							<span>Submit a Project</span>
						</Link>
						<Link
							to="/contact?type=sponsor"
							className="px-4 py-3 rounded-lg border border-white/10 text-xs font-bold text-on-surface hover:bg-white/5 hover:border-primary-fixed/20 transition-all flex items-center justify-center gap-1.5"
						>
							<span>Partner / Sponsor</span>
						</Link>
						<Link
							to="/contact?type=general"
							className="col-span-2 md:col-span-1 px-4 py-3 rounded-lg border border-white/10 text-xs font-bold text-on-surface hover:bg-white/5 hover:border-primary-fixed/20 transition-all flex items-center justify-center gap-1.5"
						>
							<span>Explore Ambassadors</span>
						</Link>
					</div>
				</GlassCard>
			</div>
		</section>
	);
}

export default function AboutPage() {
	const meta = getPageSeo("/about");

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

			<AboutHero />
			<FounderStorySection />
			<WhyPakistanSection />
			<ProofGapSection />
			<EcosystemIncentivesSection />
			<HowItWorksSection />
			<ValuesSection />
			<MilestonesSection />
			<TeamSection />
			<FinalRoleCtaSection />
		</>
	);
}
