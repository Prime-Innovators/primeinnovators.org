export default function Badge({ variant = "info", children }) {
	const styles = {
		primary:
			"bg-primary-fixed/10 text-primary-fixed border border-primary-fixed/25",
		secondary:
			"bg-secondary-fixed/10 text-secondary-fixed border border-secondary-fixed/25",
		info: "bg-secondary-fixed-dim/10 text-secondary-fixed-dim border border-secondary-fixed-dim/25",
		warning:
			"bg-primary-fixed-dim/10 text-primary-fixed-dim border border-primary-fixed-dim/25",
		error: "bg-error/10 text-error border border-error/25",
	};

	const currentStyle = styles[variant] || styles.info;

	return (
		<span
			className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider ${currentStyle} mx-0.5`}
		>
			{children}
		</span>
	);
}
