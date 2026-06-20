import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
	{ label: "Home", to: "/" },
	{ label: "Ecosystem", to: "/ecosystem" },
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
						<a
							href="https://github.com/Prime-Innovators/primeinnovators.org"
							target="_blank"
							rel="noopener noreferrer"
							className="hidden sm:inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 p-3 text-on-surface-variant transition-all hover:border-white/25 hover:bg-white/10 hover:text-on-surface"
							aria-label="View source code on GitHub"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-github"
								viewBox="0 0 16 16"
							>
								<title>Github Icon</title>
								<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
							</svg>
						</a>
						<Link
							to="/#waitlist"
							className="group hidden sm:inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-label-md font-bold text-on-surface-variant transition-all hover:border-white/25 hover:bg-white/10 hover:text-on-surface"
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

							<a
								href="https://github.com/Prime-Innovators/primeinnovators.org"
								target="_blank"
								rel="noopener noreferrer"
								onClick={() => setIsMobileOpen(false)}
								className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-label-md text-on-surface-variant transition-colors hover:bg-white/5 hover:text-on-surface"
							>
								<svg
									aria-hidden="true"
									className="h-5 w-5"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" />
								</svg>
								<span>Source Code</span>
							</a>
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
