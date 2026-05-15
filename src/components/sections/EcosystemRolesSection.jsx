import { ecosystemRoles } from "../../constants/ecosystem";
import { RoleIcon } from "../../constants/icons";
import GlassCard from "../ui/GlassCard";
import SectionHeader from "../ui/SectionHeader";

export default function EcosystemRolesSection() {
	return (
		<section
			className="py-20 md:py-32 bg-surface-container-lowest border-y border-white/5 relative overflow-hidden"
			id="ecosystem"
		>
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] aurora-glow-yellow opacity-20" />
			</div>
			<div className="section-container relative z-10 space-y-14">
				<SectionHeader
					label="The Ecosystem"
					title="Four roles, one connected system"
					description="Prime Innovators is not a product. It's a connected system where contributors, maintainers, sponsors, and recruiters each win through verified collaboration."
				/>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{ecosystemRoles.map((role) => (
						<GlassCard
							key={role.title}
							className="p-7 hover:border-primary-fixed/50 transition-all duration-300 hover:-translate-y-1 group"
						>
							<div className="space-y-4">
								<div className="w-11 h-11 rounded-xl bg-surface-container-high border border-white/10 flex items-center justify-center text-primary-fixed">
									<RoleIcon name={role.icon} />
								</div>
								<div>
									<p className="text-label-sm text-secondary-fixed uppercase tracking-widest font-bold">
										{role.title}
									</p>
									<h3 className="text-headline-sm font-bold text-on-surface mt-1">
										{role.subtitle}
									</h3>
								</div>
								<p className="text-on-surface-variant leading-relaxed text-sm">
									{role.description}
								</p>
							</div>
						</GlassCard>
					))}
				</div>
			</div>
		</section>
	);
}
