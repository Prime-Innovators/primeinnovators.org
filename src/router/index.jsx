import { lazy } from "react";
import RootLayout from "../layouts/RootLayout";

const HomePage = lazy(() => import("../pages/HomePage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const FAQPage = lazy(() => import("../pages/FAQPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const PrivacyPage = lazy(() => import("../pages/PrivacyPage"));
const TermsPage = lazy(() => import("../pages/TermsPage"));
const COCPage = lazy(() => import("../pages/COCPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

export const routes = [
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ index: true, Component: HomePage },
			{ path: "about", Component: AboutPage },
			{ path: "faq", Component: FAQPage },
			{ path: "contact", Component: ContactPage },
			{ path: "privacy", Component: PrivacyPage },
			{ path: "terms", Component: TermsPage },
			{ path: "coc", Component: COCPage },
			{ path: "*", Component: NotFoundPage },
		],
	},
];
