import { useEffect, useState } from "react";

export default function TableOfContents({ className = "" }) {
	const [headings, setHeadings] = useState([]);
	const [activeId, setActiveId] = useState("");

	useEffect(() => {
		// Find all headings inside the prose container
		const elements = Array.from(
			document.querySelectorAll(".prose h2, .prose h3"),
		);

		const headingData = elements
			.map((element) => ({
				id: element.id,
				text: element.innerText,
				level: Number(element.tagName.substring(1)),
			}))
			.filter((h) => h.id); // Only include headings with IDs

		setHeadings(headingData);

		const callback = (entries) => {
			// Find the entry that is currently intersecting
			const visibleEntries = entries.filter((entry) => entry.isIntersecting);

			if (visibleEntries.length > 0) {
				// Get the top-most visible heading
				setActiveId(visibleEntries[0].target.id);
			}
		};

		const observer = new IntersectionObserver(callback, {
			rootMargin: "0px 0px -80% 0px",
			threshold: 1.0,
		});

		elements.forEach((element) => {
			observer.observe(element);
		});

		return () => observer.disconnect();
	}, []);

	if (headings.length === 0) {
		return null;
	}

	return (
		<nav className={`toc ${className}`}>
			<h4 className="text-label-lg font-headline text-on-surface mb-4">
				Table of Contents
			</h4>
			<ul className="space-y-2 border-l border-surface-stroke">
				{headings.map((heading) => (
					<li
						key={heading.id}
						className={`transition-colors ${heading.level === 3 ? "ml-4" : ""}`}
					>
						<a
							href={`#${heading.id}`}
							className={`block py-1 pl-3 text-sm -ml-[1px] border-l-2 transition-all hover:text-primary-fixed ${
								activeId === heading.id
									? "border-primary-fixed text-primary-fixed font-medium"
									: "border-transparent text-on-surface-variant hover:border-primary-fixed/50"
							}`}
							onClick={(e) => {
								e.preventDefault();
								document.getElementById(heading.id)?.scrollIntoView({
									behavior: "smooth",
								});
								setActiveId(heading.id);
							}}
						>
							{heading.text}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
