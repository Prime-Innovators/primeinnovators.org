import React, { useState } from "react";

export default function CodeTabs({ children }) {
	const [activeIndex, setActiveIndex] = useState(0);
	const items = React.Children.toArray(children);

	if (items.length === 0) return null;

	return (
		<div className="my-6 rounded-2xl bg-surface-container-lowest border border-white/5 overflow-hidden">
			<div className="flex border-b border-white/5 bg-surface-container-low/70 px-4 pt-2 gap-2">
				{items.map((child, idx) => {
					const label = child.props.label || `Tab ${idx + 1}`;
					const isActive = idx === activeIndex;
					return (
						<button
							key={label}
							type="button"
							onClick={() => setActiveIndex(idx)}
							className={`px-4 py-2.5 text-xs font-semibold rounded-t-xl transition-all border-t border-x border-transparent -mb-px ${
								isActive
									? "bg-surface-container-lowest text-primary-fixed border-white/5"
									: "text-on-surface-variant hover:text-on-surface hover:bg-white/5"
							}`}
							style={
								isActive
									? {
											borderBottomColor: "var(--surface-container-lowest)",
										}
									: {}
							}
						>
							{label}
						</button>
					);
				})}
			</div>
			<div className="p-1 select-text [&_pre]:!m-0 [&_pre]:!border-0">
				{items[activeIndex]}
			</div>
		</div>
	);
}
