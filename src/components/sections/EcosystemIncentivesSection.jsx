import { Link } from "react-router-dom";
import { ecosystemRoles } from "../../constants/ecosystem";
import { RoleIcon } from "../../constants/icons";
import GlassCard from "../ui/GlassCard";
import SectionHeader from "../ui/SectionHeader";

const roleCtas = {
	Contributors: { label: "Join as Contributor", to: "/#waitlist" },
	Maintainers: { label: "Submit a Project", to: "/contact?type=maintainer" },
	Sponsors: { label: "Partner With Us", to: "/contact?type=sponsor" },
	Recruiters: {
		label: "Explore Recruiter Access",
		to: "/contact?type=recruiter",
	},
};

const roleHighlights = {
	Contributors: [
		"Access to high-quality curated learning roadmaps",
		"Verifiable skill graphs mapped from GitHub contributions",
		"Ecosystem rewards, certificates, and physical badges",
	],
	Maintainers: [
		"Expert mentoring to refine project architecture",
		"Automated documentation and visualization tools",
		"Direct sponsorship rails and contributor routing",
	],
	Sponsors: [
		"100% auditable funding trails on public dashboards",
		"Direct corporate social impact and CSR reporting",
		"Brand placement and high-trust community goodwill",
	],
	Recruiters: [
		"Access to high-signal candidate discovery dashboards",
		"Verifiable code repositories and contribution context",
		"Vetted developer networks from campuses nationwide",
	],
};

const roleIcons = {
	Contributors: "user",
	Maintainers: "folder",
	Sponsors: "currency",
	Recruiters: "search",
};

export default function EcosystemIncentivesSection() {
	return (
		<section className="py-20 md:py-32 bg-surface-container-lowest border-y border-white/5 relative overflow-hidden">
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
					{ecosystemRoles.map((role) => {
						const key = role.title.replace("For ", "");
						const cta = roleCtas[key];
						const highlights = roleHighlights[key] || [];
						const iconName = roleIcons[key] || role.icon;

						return (
							<GlassCard
								key={role.title}
								className="p-8 flex flex-col justify-between hover:border-primary-fixed/30 transition-all duration-300"
							>
								<div className="space-y-4">
									<div className="flex items-center gap-3">
										<div className="w-10 h-10 rounded-lg bg-primary-fixed/10 flex items-center justify-center text-primary-fixed">
											<RoleIcon name={iconName} />
										</div>
										<div>
											<p className="text-label-sm text-secondary-fixed uppercase tracking-widest font-bold">
												{role.title}
											</p>
											<h3 className="text-xl font-bold text-on-surface">
												{role.subtitle}
											</h3>
										</div>
									</div>
									<p className="text-sm text-on-surface-variant leading-relaxed">
										{role.description}
									</p>
									{highlights.length > 0 && (
										<ul className="space-y-2 text-xs text-on-surface-variant/80 border-t border-white/5 pt-4">
											{highlights.map((h) => (
												<li key={h} className="flex items-center gap-2">
													<span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
													{h}
												</li>
											))}
										</ul>
									)}
								</div>
								{cta && (
									<Link
										to={cta.to}
										className="btn-secondary px-6 py-3 rounded-lg font-bold text-xs text-on-surface inline-flex items-center justify-center gap-2 transition-all hover:bg-white/5 mt-6"
									>
										<span>{cta.label}</span>
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
								)}
							</GlassCard>
						);
					})}
				</div>
			</div>
		</section>
	);
}
