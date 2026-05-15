const icons = {
	user: (
		<svg
			aria-hidden="true"
			className="w-6 h-6"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			strokeWidth="1.6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z"
			/>
		</svg>
	),
	folder: (
		<svg
			aria-hidden="true"
			className="w-6 h-6"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			strokeWidth="1.6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
			/>
		</svg>
	),
	currency: (
		<svg
			aria-hidden="true"
			className="w-6 h-6"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			strokeWidth="1.6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
	),
	search: (
		<svg
			aria-hidden="true"
			className="w-6 h-6"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			strokeWidth="1.6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
			/>
		</svg>
	),
	document: (
		<svg
			aria-hidden="true"
			className="w-6 h-6"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			strokeWidth="1.6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
			/>
		</svg>
	),
	alert: (
		<svg
			aria-hidden="true"
			className="w-6 h-6"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			strokeWidth="1.6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
	),
};

export function RoleIcon({ name, className = "w-6 h-6" }) {
	const icon = icons[name];
	if (!icon) return null;
	return <span className={className}>{icon}</span>;
}
