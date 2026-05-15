export default function LegalPage({ title, subtitle, children }) {
	return (
		<>
			<header className="py-24 md:py-32 section-container">
				<div className="max-w-3xl mx-auto space-y-4">
					<h1 className="text-3xl md:text-4xl font-bold text-on-surface">
						{title}
					</h1>
					{subtitle && <p className="text-on-surface-variant">{subtitle}</p>}
				</div>
			</header>
			<section className="pb-24 md:pb-32 section-container">
				<div className="max-w-3xl mx-auto space-y-10">{children}</div>
			</section>
		</>
	);
}
