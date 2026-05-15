export default function LegalSection({ title, children }) {
	return (
		<div className="space-y-3">
			<h2 className="text-xl font-bold text-on-surface">{title}</h2>
			{children}
		</div>
	);
}
