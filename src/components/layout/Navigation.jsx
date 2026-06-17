import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
	{ label: "Home", to: "/" },
	{ label: "About", to: "/about" },
	{ label: "Blog", to: "/blog" },
	{ label: "Contact", to: "/contact" },
];

export default function Navigation() {
	const [isMobileOpen, setIsMobileOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const { pathname } = useLocation();
	const previousPathname = useRef(pathname);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		if (previousPathname.current !== pathname) {
			previousPathname.current = pathname;
			setIsMobileOpen(false);
		}
	}, [pathname]);

	useEffect(() => {
		const onKeyDown = (event) => {
			if (event.key === "Escape") {
				setIsMobileOpen(false);
			}
		};

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, []);

	const isActive = (to) =>
		to === "/"
			? pathname === "/"
			: pathname === to || pathname.startsWith(`${to}/`);

	const linkClass = (active) =>
		`rounded-full px-4 py-2 text-label-md transition-all duration-300 ${
			active
				? "bg-white/10 text-primary-fixed shadow-[inset_0_0_0_1px_rgba(243,230,75,0.18)]"
				: "text-on-surface-variant hover:bg-white/5 hover:text-on-surface"
		}`;

	return (
		<nav className="fixed top-0 z-50 w-full px-margin-mobile pt-3 md:px-margin-desktop md:pt-5">
			<div
				className={`section-container rounded-2xl border border-white/10 transition-all duration-300 ${
					scrolled
						? "bg-surface/90 backdrop-blur-2xl shadow-glass"
						: "bg-surface/60 backdrop-blur-xl"
				}`}
			>
				<div className="flex h-16 items-center justify-between gap-3 md:h-16">
					<Link to="/" className="flex items-center gap-3 group shrink-0">
						<img
							src="/favicon-32x32.png"
							alt="Prime Innovators"
							className="h-9 w-9 rounded-md transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3"
							width={32}
							height={32}
						/>
						<div className="hidden sm:flex flex-col leading-none">
							<span className="text-body-md font-bold text-on-surface">
								Prime Innovators
							</span>
							<span className="mt-1 text-label-sm text-on-surface-variant">
								Pakistan’s open-source talent ecosystem
							</span>
						</div>
					</Link>

					<div className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-black/10 px-2 py-1">
						{links.map((link) => (
							<Link
								key={link.label}
								to={link.to}
								className={linkClass(isActive(link.to))}
							>
								{link.label}
							</Link>
						))}
					</div>

					<div className="flex items-center gap-2 md:gap-3 shrink-0">
						<Link
							to="/#waitlist"
							className="btn-primary group hidden sm:inline-flex items-center gap-2 px-5 py-3 text-label-md"
						>
							<span>Join the Waitlist</span>
							<svg
								aria-hidden="true"
								className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
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
							onClick={() => setIsMobileOpen((current) => !current)}
							className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-on-surface-variant transition-colors hover:bg-white/10 hover:text-on-surface md:hidden"
							aria-expanded={isMobileOpen}
							aria-label={isMobileOpen ? "Close menu" : "Open menu"}
						>
							<svg
								aria-hidden="true"
								className="h-5 w-5"
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
				</div>

				<div
					className={`md:hidden overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-out ${
						isMobileOpen
							? "max-h-96 opacity-100 translate-y-0"
							: "max-h-0 opacity-0 -translate-y-2"
					}`}
				>
					<div className="border-t border-white/10 bg-surface/92 px-4 pb-4 pt-3 backdrop-blur-2xl">
						<div className="space-y-2">
							{links.map((link) => (
								<Link
									key={link.label}
									to={link.to}
									onClick={() => setIsMobileOpen(false)}
									className={`flex items-center justify-between rounded-xl px-4 py-3 text-label-md transition-colors ${
										isActive(link.to)
											? "bg-white/8 text-primary-fixed"
											: "text-on-surface-variant hover:bg-white/5 hover:text-on-surface"
									}`}
								>
									<span>{link.label}</span>
									{isActive(link.to) ? (
										<span className="text-label-sm uppercase tracking-[0.18em] text-primary-fixed/75">
											Current
										</span>
									) : null}
								</Link>
							))}

							<Link
								to="/#waitlist"
								onClick={() => setIsMobileOpen(false)}
								className="btn-primary mt-3 flex w-full items-center justify-center gap-2"
							>
								Join the Waitlist
								<svg
									aria-hidden="true"
									className="h-3.5 w-3.5"
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
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
