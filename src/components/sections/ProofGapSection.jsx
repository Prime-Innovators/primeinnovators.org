import { problems } from "../../constants/ecosystem";
import { RoleIcon } from "../../constants/icons";
import GlassCard from "../ui/GlassCard";
import SectionHeader from "../ui/SectionHeader";

export default function ProofGapSection() {
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
