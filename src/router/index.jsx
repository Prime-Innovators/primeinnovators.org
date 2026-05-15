import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import AboutPage from "../pages/AboutPage";
import COCPage from "../pages/COCPage";
import ContactPage from "../pages/ContactPage";
import FAQPage from "../pages/FAQPage";
import HomePage from "../pages/HomePage";
import PrivacyPage from "../pages/PrivacyPage";
import TermsPage from "../pages/TermsPage";

export default function Router() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<RootLayout>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/faq" element={<FAQPage />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="/privacy" element={<PrivacyPage />} />
					<Route path="/terms" element={<TermsPage />} />
					<Route path="/coc" element={<COCPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</RootLayout>
		</BrowserRouter>
	);
}

function ScrollToTop() {
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

			// Wait briefly for route content to mount before trying again.
			const retry = window.setTimeout(scrollToTarget, 50);
			return () => window.clearTimeout(retry);
		}

		window.scrollTo(0, 0);
	}, [pathname, hash]);

	return null;
}

function NotFoundPage() {
	return (
		<div className="flex items-center justify-center min-h-[60vh]">
			<div className="text-center space-y-4">
				<p className="text-6xl font-bold text-primary-fixed">404</p>
				<h1 className="text-2xl font-bold text-on-surface">Page not found</h1>
				<a href="/" className="btn-primary inline-flex items-center gap-2">
					Back to Home
				</a>
			</div>
		</div>
	);
}
