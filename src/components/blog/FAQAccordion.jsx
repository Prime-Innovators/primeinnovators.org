import { useState } from "react";

export default function FAQAccordion({ items = [] }) {
	const [openIdx, setOpenIdx] = useState(null);

	const toggle = (idx) => {
		setOpenIdx(openIdx === idx ? null : idx);
	};

	return (
		<div className="my-6 space-y-3">
			{items.map((item, idx) => {
				const isOpen = openIdx === idx;
				return (
					<div
						key={item.q}
						className="rounded-xl border border-white/5 bg-surface-container overflow-hidden transition-all duration-300"
					>
						<button
							type="button"
							onClick={() => toggle(idx)}
							className="w-full flex items-center justify-between p-5 text-left text-body-lg font-semibold text-on-surface hover:bg-white/5 transition-colors"
						>
							<span>{item.q}</span>
							<svg
								aria-hidden="true"
								className={`w-5 h-5 text-on-surface-variant transition-transform duration-300 ${
									isOpen ? "rotate-180 text-primary-fixed" : ""
								}`}
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>
						<div
							className={`transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden ${
								isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
							}`}
						>
							<div className="p-5 pt-0 text-body-md text-on-surface-variant leading-relaxed border-t border-white/5">
								{item.a}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
