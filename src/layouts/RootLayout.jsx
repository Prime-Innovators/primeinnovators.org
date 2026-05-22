import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Navigation from "../components/layout/Navigation";

export default function RootLayout() {
	const { pathname, hash } = useLocation();

	useEffect(() => {
		if (!pathname) return;

		if (hash) {
			const id = hash.replace("#", "");
			const scrollToTarget = () => {
				const target = document.getElementById(id);
				if (!target) return false;
				const navOffset = 96;
				const targetTop =
					target.getBoundingClientRect().top + window.scrollY - navOffset;
				window.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
				return true;
			};

			if (scrollToTarget()) return;
			const retry = window.setTimeout(scrollToTarget, 50);
			return () => window.clearTimeout(retry);
		}

		window.scrollTo(0, 0);
	}, [pathname, hash]);

	return (
		<div className="min-h-screen bg-background text-on-surface">
			<Navigation />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
