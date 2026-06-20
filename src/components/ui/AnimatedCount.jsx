import { useEffect, useRef, useState } from "react";

export default function AnimatedCount({ target }) {
	const [display, setDisplay] = useState(0);
	const started = useRef(false);

	useEffect(() => {
		if (started.current || target == null) return;
		started.current = true;

		const duration = 1200;
		const start = performance.now();

		function tick(now) {
			const elapsed = now - start;
			const progress = Math.min(elapsed / duration, 1);
			const eased = 1 - (1 - progress) ** 3;
			setDisplay(Math.round(eased * target));

			if (progress < 1) requestAnimationFrame(tick);
		}

		requestAnimationFrame(tick);
	}, [target]);

	if (target == null)
		return <span className="text-2xl font-bold text-primary-fixed">—</span>;

	return (
		<span className="text-2xl font-bold text-primary-fixed">
			{display.toLocaleString()}+
		</span>
	);
}
