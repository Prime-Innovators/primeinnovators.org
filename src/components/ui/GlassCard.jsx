export default function GlassCard({
	children,
	className = "",
	as: Tag = "div",
}) {
	return (
		<Tag
			className={`glass-card rounded-2xl border border-white/10 relative overflow-hidden ${className}`}
		>
			<div className="absolute inset-0 bg-gradient-to-br from-primary-fixed/[0.04] via-transparent to-secondary-fixed/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
			<div className="relative z-10">{children}</div>
		</Tag>
	);
}
