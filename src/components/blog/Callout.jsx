export default function Callout({ type = "info", title, children }) {
	const config = {
		info: {
			border: "border-l-secondary-fixed/50",
			bg: "bg-secondary-fixed/5",
			text: "text-on-surface",
			titleColor: "text-secondary-fixed",
			icon: (
				<svg
					aria-hidden="true"
					className="w-5 h-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			),
		},
		warning: {
			border: "border-l-primary-fixed/50",
			bg: "bg-primary-fixed/5",
			text: "text-on-surface",
			titleColor: "text-primary-fixed",
			icon: (
				<svg
					aria-hidden="true"
					className="w-5 h-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
					/>
				</svg>
			),
		},
		success: {
			border: "border-l-secondary-fixed-dim/50",
			bg: "bg-secondary-fixed-dim/5",
			text: "text-on-surface",
			titleColor: "text-secondary-fixed-dim",
			icon: (
				<svg
					aria-hidden="true"
					className="w-5 h-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			),
		},
		error: {
			border: "border-l-error/50",
			bg: "bg-error/5",
			text: "text-on-surface",
			titleColor: "text-error",
			icon: (
				<svg
					aria-hidden="true"
					className="w-5 h-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			),
		},
	};

	const current = config[type] || config.info;

	return (
		<div
			className={`my-6 flex gap-4 p-5 rounded-r-xl border-l-4 ${current.border} ${current.bg} border-t border-r border-b border-white/5 backdrop-blur-md shadow-sm`}
		>
			<div className={`${current.titleColor} shrink-0 mt-0.5`}>
				{current.icon}
			</div>
			<div className="flex-1 space-y-1">
				{title && (
					<h5
						className={`text-label-md font-bold uppercase tracking-wider ${current.titleColor}`}
					>
						{title}
					</h5>
				)}
				<div className={`text-body-md leading-relaxed ${current.text}`}>
					{children}
				</div>
			</div>
		</div>
	);
}
