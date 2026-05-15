export default function SectionHeader({
	label,
	title,
	description,
	className = "",
}) {
	return (
		<div className={`max-w-2xl space-y-4 ${className}`}>
			<span className="text-label-sm text-primary-fixed uppercase tracking-widest font-bold">
				{label}
			</span>
			<h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
				{title}
			</h2>
			{description && (
				<p className="text-body-lg text-on-surface-variant leading-relaxed">
					{description}
				</p>
			)}
		</div>
	);
}
