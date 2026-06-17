export default function BenchmarkStats({
	before,
	after,
	label,
	percent,
	improvement = true,
}) {
	return (
		<div className="my-6 rounded-2xl bg-surface-container border border-white/5 p-6 md:p-8 shadow-glass relative overflow-hidden group/stats">
			<div className="absolute inset-0 bg-gradient-to-tr from-secondary-fixed/5 to-transparent pointer-events-none" />
			<div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
				<div className="space-y-2">
					<span className="text-label-sm text-on-surface-variant block uppercase tracking-wider">
						Benchmark Result
					</span>
					<h4 className="text-headline-sm text-on-surface font-semibold">
						{label}
					</h4>
				</div>
				<div className="flex items-center gap-6 md:gap-10">
					<div className="text-center">
						<span className="text-[11px] text-on-surface-variant/70 uppercase block">
							Before
						</span>
						<span className="text-headline-sm text-on-surface-variant/50 line-through font-mono">
							{before}
						</span>
					</div>
					<div className="text-center bg-white/5 border border-white/10 rounded-xl px-5 py-3 shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
						<span className="text-[11px] text-secondary-fixed uppercase block">
							After
						</span>
						<span className="text-headline-md font-bold text-secondary-fixed font-mono">
							{after}
						</span>
					</div>
					{percent && (
						<div className="text-center bg-primary-fixed/10 border border-primary-fixed/20 rounded-xl px-5 py-3">
							<span className="text-[11px] text-primary-fixed uppercase block">
								{improvement ? "Improvement" : "Change"}
							</span>
							<span className="text-headline-sm font-bold text-primary-fixed">
								{improvement ? "▲" : ""} {percent}
							</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
