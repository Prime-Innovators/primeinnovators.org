import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
	const [isMobileOpen, setIsMobileOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const { pathname } = useLocation();

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		setIsMobileOpen(false);
	}, []);

	const linkClass = (active) =>
		`transition-colors text-label-md relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:bg-primary-fixed after:transition-all after:duration-300 ${
			active
				? "text-primary-fixed after:w-full"
				: "text-on-surface-variant hover:text-primary-fixed after:w-0 hover:after:w-full"
		}`;

	const links = [
		{ label: "Home", to: "/", active: pathname === "/" },
		{ label: "About", to: "/about", active: pathname === "/about" },
		{ label: "Contact", to: "/contact", active: pathname === "/contact" },
	];

	return (
		<nav
			className={`fixed top-0 w-full z-50 transition-all duration-300 ${
				scrolled
					? "bg-surface/90 backdrop-blur-2xl border-b border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
					: "bg-transparent"
			}`}
		>
			<div className="section-container flex items-center justify-between h-20">
				<Link to="/" className="flex items-center gap-3 group">
					<img
						src="/favicon-32x32.png"
						alt="Prime Innovators"
						className="w-8 h-8 rounded-sm transition-transform duration-300 group-hover:scale-110"
					/>
					<span className="text-headline-sm font-bold text-on-surface hidden sm:block">
						Prime Innovators
					</span>
				</Link>

				<div className="hidden md:flex items-center gap-8">
					{links.map((link) =>
						link.external ? (
							<a key={link.label} href={link.to} className={linkClass(false)}>
								{link.label}
							</a>
						) : (
							<Link
								key={link.label}
								to={link.to}
								className={linkClass(link.active)}
							>
								{link.label}
							</Link>
						),
					)}
				</div>

				<Link
					to="/#waitlist"
					className="btn-primary px-5 py-2.5 text-label-md hidden sm:inline-flex items-center gap-2 group"
				>
					<span>Join the Waitlist</span>
					<svg
						aria-hidden="true"
						className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M13 7l5 5m0 0l-5 5m5-5H6"
						/>
					</svg>
				</Link>

				<button
					type="button"
					onClick={() => setIsMobileOpen(!isMobileOpen)}
					className="md:hidden text-on-surface-variant hover:text-primary-fixed transition-colors p-2"
					aria-label={isMobileOpen ? "Close menu" : "Open menu"}
				>
					<svg
						aria-hidden="true"
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						{isMobileOpen ? (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						) : (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						)}
					</svg>
				</button>
			</div>

			<div
				className={`md:hidden overflow-hidden transition-all duration-300 ${
					isMobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
				}`}
			>
				<div className="bg-surface/95 backdrop-blur-2xl border-t border-white/10">
					<div className="section-container py-4 space-y-1">
						{links.map((link) =>
							link.external ? (
								<a
									key={link.label}
									href={link.to}
									onClick={() => setIsMobileOpen(false)}
									className="block text-on-surface-variant hover:text-primary-fixed hover:bg-surface-container-high/50 transition-colors text-label-md py-3 px-3 rounded-lg"
								>
									{link.label}
								</a>
							) : (
								<Link
									key={link.label}
									to={link.to}
									onClick={() => setIsMobileOpen(false)}
									className={`block text-label-md py-3 px-3 rounded-lg transition-colors ${
										link.active
											? "text-primary-fixed bg-surface-container-high/50"
											: "text-on-surface-variant hover:text-primary-fixed hover:bg-surface-container-high/50"
									}`}
								>
									{link.label}
								</Link>
							),
						)}
						<Link
							to="/#waitlist"
							onClick={() => setIsMobileOpen(false)}
							className="btn-primary block text-center mt-4"
						>
							Join the Waitlist
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
