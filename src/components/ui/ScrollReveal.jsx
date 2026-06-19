import { useScrollReveal } from "../../utils/useScrollReveal";

export default function ScrollReveal({ children, className = "", delay = 0 }) {
	const [ref, isVisible] = useScrollReveal();

	return (
		<div
			ref={ref}
			style={delay ? { transitionDelay: `${delay}ms` } : undefined}
			className={`reveal-on-scroll ${isVisible ? "revealed" : ""} ${className}`}
		>
			{children}
		</div>
	);
}
