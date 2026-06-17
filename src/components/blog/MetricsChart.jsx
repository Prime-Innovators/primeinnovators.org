import { useState } from "react";

export default function MetricsChart({
	data: initialData = [],
	labels: initialLabels = [],
	title = "Metrics Breakdown",
	subtitle = "Visual breakdown of performance values in milliseconds",
}) {
	const [activeTab, setActiveTab] = useState("cold");
	const [hoveredIdx, setHoveredIdx] = useState(null);

	const defaultLabels = [
		"DNS",
		"TCP",
		"TLS",
		"Worker",
		"Cold Start",
		"Response",
	];
	const defaultColdData = [12, 19, 3, 5, 2, 3];
	const defaultWarmData = [0, 0, 0, 1, 0, 3];

	const labels = initialLabels.length > 0 ? initialLabels : defaultLabels;

	const isDefaultData =
		initialData.length === 0 ||
		(initialData.length === defaultColdData.length &&
			initialData.every((val, idx) => val === defaultColdData[idx]));

	const data = isDefaultData
		? activeTab === "cold"
			? defaultColdData
			: defaultWarmData
		: initialData;

	const total = data.reduce((sum, val) => sum + val, 0);
	const max = Math.max(...data, 1);

	const gridTicks = [100, 75, 50, 25, 0];

	return (
		<div className="my-8 rounded-2xl bg-surface-container border border-white/5 p-6 md:p-8 shadow-glass relative overflow-hidden group/chart">
			<div className="absolute inset-0 bg-gradient-to-tr from-primary-fixed/2 to-secondary-fixed/2 pointer-events-none" />

			<div className="relative z-10">
				<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
					<div>
						<h4 className="text-headline-sm text-on-surface font-semibold">
							{title}
						</h4>
						<p className="text-label-md text-on-surface-variant">{subtitle}</p>
					</div>

					{isDefaultData && (
						<div className="flex bg-black/25 rounded-full p-1 border border-white/10 shrink-0 self-start sm:self-center">
							<button
								type="button"
								onClick={() => setActiveTab("cold")}
								className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
									activeTab === "cold"
										? "bg-primary-fixed text-on-primary-fixed shadow-sm"
										: "text-on-surface-variant hover:text-on-surface"
								}`}
							>
								Cold Start (44ms)
							</button>
							<button
								type="button"
								onClick={() => setActiveTab("warm")}
								className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
									activeTab === "warm"
										? "bg-secondary-fixed text-on-secondary-fixed shadow-sm"
										: "text-on-surface-variant hover:text-on-surface"
								}`}
							>
								Warm Request (4ms)
							</button>
						</div>
					)}
				</div>

				<div className="grid grid-cols-3 gap-4 mb-8 bg-black/10 rounded-xl p-4 border border-white/5">
					<div className="text-center">
						<span className="text-label-sm text-on-surface-variant block uppercase tracking-wider">
							Total Value
						</span>
						<span className="text-headline-md text-gradient font-bold">
							{total}ms
						</span>
					</div>
					<div className="text-center border-x border-white/10">
						<span className="text-label-sm text-on-surface-variant block uppercase tracking-wider">
							Setup / Initial
						</span>
						<span className="text-headline-md text-on-surface font-semibold">
							{data[0] + data[1] + data[2]}ms
						</span>
					</div>
					<div className="text-center">
						<span className="text-label-sm text-on-surface-variant block uppercase tracking-wider">
							Execution & Final
						</span>
						<span className="text-headline-md text-secondary-fixed font-semibold">
							{data[3] + data[4] + data[5]}ms
						</span>
					</div>
				</div>

				<div className="relative h-64 w-full flex items-end mb-4">
					<div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
						{gridTicks.map((tick) => (
							<div key={tick} className="w-full flex items-center gap-4 h-0">
								<span className="text-[10px] text-on-surface-variant/50 w-8 text-right font-mono">
									{Math.round((tick / 100) * max)}ms
								</span>
								<div className="flex-1 border-b border-white/5 border-dashed" />
							</div>
						))}
					</div>

					<div className="relative z-10 flex items-end gap-2 md:gap-4 w-full h-full pl-12 pr-2 pb-1">
						{data.map((value, i) => {
							const heightPercent = max > 0 ? (value / max) * 100 : 0;
							const isHovered = hoveredIdx === i;
							const isZero = value === 0;

							return (
								// biome-ignore lint/a11y/noStaticElementInteractions: bar hover is purely visual presentation
								<div
									key={`${labels[i] || i}`}
									className="flex-1 flex flex-col items-center justify-end h-full relative group/bar cursor-pointer"
									onMouseEnter={() => setHoveredIdx(i)}
									onMouseLeave={() => setHoveredIdx(null)}
								>
									<div
										className={`absolute -top-12 bg-surface-container-highest border border-white/15 px-3 py-1.5 rounded-lg text-xs shadow-xl transition-all duration-200 pointer-events-none z-20 flex flex-col items-center whitespace-nowrap ${
											isHovered
												? "opacity-100 translate-y-0"
												: "opacity-0 translate-y-1"
										}`}
									>
										<span className="font-semibold text-on-surface">
											{labels[i]}: {value}ms
										</span>
										<span className="text-[10px] text-on-surface-variant">
											{total > 0 ? ((value / total) * 100).toFixed(1) : 0}% of
											total
										</span>
										<div className="w-2 h-2 bg-surface-container-highest border-r border-b border-white/15 rotate-45 -mb-2 mt-1" />
									</div>

									<div className="w-full flex flex-col justify-end items-center h-full">
										{!isZero && (
											<span
												className={`text-[11px] font-mono mb-2 transition-all duration-200 ${
													isHovered
														? "text-primary-fixed scale-110 font-bold"
														: "text-on-surface-variant/80"
												}`}
											>
												{value}ms
											</span>
										)}
										<div
											className={`w-full rounded-t-lg transition-all duration-500 ease-out origin-bottom ${
												isZero
													? "h-1 bg-white/5 border border-dashed border-white/10"
													: isHovered
														? "bg-gradient-to-t from-secondary-fixed/80 to-primary-fixed shadow-[0_0_20px_rgba(243,230,75,0.4)]"
														: "bg-gradient-to-t from-secondary-fixed/40 to-primary-fixed/80 shadow-[0_0_8px_rgba(243,230,75,0.1)] hover:shadow-[0_0_15px_rgba(243,230,75,0.25)]"
											}`}
											style={{
												height: isZero ? "4px" : `${heightPercent * 0.75}%`,
											}}
										/>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				<div className="flex pl-12 pr-2 border-t border-white/5 pt-3">
					{labels.map((label, i) => (
						<div key={label} className="flex-1 text-center">
							<span
								className={`text-xs block font-medium transition-colors duration-200 ${
									hoveredIdx === i
										? "text-primary-fixed font-semibold"
										: "text-on-surface-variant"
								}`}
							>
								{label}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
