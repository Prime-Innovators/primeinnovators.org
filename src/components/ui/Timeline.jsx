export function Timeline({ children, className = "" }) {
	return (
		<div className={`relative max-w-4xl mx-auto my-16 md:my-24 ${className}`}>
			<div className="md:hidden absolute left-[28px] top-[24px] bottom-0 w-[2px] bg-white/20 -translate-x-1/2" />
			{/* Desktop Line */}
			<div className="hidden md:block absolute left-1/2 top-[24px] bottom-0 w-[2px] bg-white/20 -translate-x-1/2" />
			{children}
		</div>
	);
}

export function TimelineItem({
	title,
	date,
	status = "upcoming", // "completed", "active", "upcoming"
	icon,
	children,
	rightContent,
	className = "",
}) {
	const statusConfig = {
		completed: {
			dotClass: "border-2 border-primary-fixed bg-surface",
			iconColor: "text-primary-fixed",
			titleClass: "text-on-surface",
			dateClass: "text-on-surface-variant",
			contentClass: "text-on-surface-variant",
			iconNode: (
				<svg
					className="w-5 h-5 md:w-6 md:h-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
					aria-hidden="true"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M5 13l4 4L19 7"
					/>
				</svg>
			),
		},
		active: {
			dotClass: "bg-primary-fixed shadow-[0_0_30px_rgba(243,230,75,0.4)]",
			iconColor: "text-on-primary-fixed",
			titleClass: "text-on-surface",
			dateClass: "text-primary-fixed",
			contentClass: "text-on-surface",
			iconNode: (
				<svg
					className="w-5 h-5 md:w-6 md:h-6 fill-current"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path d="M13 10V3L4 14h7v7l9-11h-7z" />
				</svg>
			),
		},
		upcoming: {
			dotClass: "border-2 border-surface-container-high bg-surface",
			iconColor: "text-on-surface-variant",
			titleClass: "text-on-surface-variant/70",
			dateClass: "text-on-surface-variant/50",
			contentClass: "text-on-surface-variant/50",
			iconNode:
				title?.toLowerCase().includes("phase 4") ||
				title?.toLowerCase().includes("shortlisted") ? (
					<svg
						className="w-5 h-5 md:w-6 md:h-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
						/>
					</svg>
				) : (
					<svg
						className="w-5 h-5 md:w-6 md:h-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
						/>
					</svg>
				),
		},
	};

	const config = statusConfig[status] || statusConfig.upcoming;

	return (
		<div
			className={`relative flex flex-col md:flex-row md:justify-between group mb-16 md:mb-24 last:mb-0 ${className}`}
		>
			{/* Center Dot (Desktop) */}
			<div
				className={`hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 items-center justify-center w-12 h-12 rounded-full z-10 transition-all duration-300 ${config.dotClass} ${config.iconColor}`}
			>
				{icon ? icon : config.iconNode}
			</div>

			{/* Center Dot (Mobile) */}
			<div
				className={`md:hidden absolute left-[28px] -translate-x-1/2 top-[4px] flex items-center justify-center w-10 h-10 rounded-full z-10 transition-all duration-300 ${config.dotClass} ${config.iconColor}`}
			>
				{icon ? icon : config.iconNode}
			</div>

			{/* Left Side Container (Title & Date on Desktop, everything on Mobile) */}
			<div className="w-full md:w-[calc(50%-3rem)] pl-[64px] md:pl-0 md:text-right pt-2">
				{date && (
					<div
						className={`text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1.5 md:mb-2 ${config.dateClass}`}
					>
						{date}
						{status === "active" && (
							<span className="text-primary-fixed"> • CURRENT PHASE</span>
						)}
					</div>
				)}
				<h3
					className={`text-xl md:text-2xl font-headline font-bold mb-3 md:mb-4 ${config.titleClass}`}
				>
					{title}
				</h3>

				{/* On mobile, we render children here if there's no rightContent, or both. */}
				<div className={`md:hidden prose-sm max-w-none ${config.contentClass}`}>
					{rightContent ? (
						<>
							{children}
							<div className="mt-6">{rightContent}</div>
						</>
					) : (
						children
					)}
				</div>

				{/* On Desktop, if rightContent exists, children goes on the left */}
				{rightContent && (
					<div
						className={`hidden md:block prose-sm sm:prose-base max-w-none md:ml-auto ${config.contentClass}`}
					>
						{children}
					</div>
				)}
			</div>

			{/* Right Side Container (Desktop only, or hidden on mobile) */}
			<div className="hidden md:block w-[calc(50%-3rem)] pt-2 text-left mt-4 md:mt-0">
				{rightContent ? (
					rightContent
				) : (
					<div
						className={`prose-sm sm:prose-base max-w-none ${config.contentClass}`}
					>
						{children}
					</div>
				)}
			</div>
		</div>
	);
}

Timeline.Item = TimelineItem;
export default Timeline;
