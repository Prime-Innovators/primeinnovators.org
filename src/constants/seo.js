export const SITE_URL = "https://primeinnovators.org";
export const SITE_NAME = "Prime Innovators";
export const DEFAULT_OG_IMAGE = "https://primeinnovators.org/og-image.png";
export const TWITTER_HANDLE = "@primeinnovators";
export const TWITTER_CARD = "summary_large_image";

export const ORGANIZATION = {
	name: "Prime Innovators",
	url: SITE_URL,
	logo: `${SITE_URL}/apple-touch-icon.png`,
	description:
		"A national open-source incubator for verified talent, transparent funding, and trusted collaboration.",
	sameAs: [
		"https://github.com/prime-innovators",
		"https://linkedin.com/company/primeinnovators",
		"https://x.com/prime-innovators",
	],
	email: "hello@primeinnovators.org",
};

const defaults = {
	ogImage: DEFAULT_OG_IMAGE,
	ogType: "website",
	twitterCard: TWITTER_CARD,
};

export const seo = {
	"/": {
		...defaults,
		title: "Prime Innovators | Pakistan's Open-Source Talent Ecosystem",
		description:
			"Pakistan's first open-source talent ecosystem is under development. Join the waitlist to be part of the nation's verified talent network connecting contributors, maintainers, sponsors, and recruiters.",
		ogTitle: "Prime Innovators | Pakistan's Open-Source Talent Ecosystem",
		ogDescription:
			"A national ecosystem where contributors earn trust through verified work, maintainers attract motivated teams, sponsors fund with transparency, and recruiters discover proven talent.",
	},
	"/ecosystem": {
		...defaults,
		title:
			"Ecosystem | Prime Innovators — Pakistan's Open-Source Talent Network",
		description:
			"Explore the Prime Innovators ecosystem: a connected system where contributors earn verified reputation, maintainers attract talent, sponsors fund transparently, and recruiters discover proven skills through real open-source work.",
		ogTitle: "The Prime Innovators Ecosystem — Verified Open-Source Talent",
		ogDescription:
			"A connected system for verified open-source talent. Contributors, maintainers, sponsors, and recruiters each win through transparent, collaborative, verifiable work.",
	},
	"/about": {
		...defaults,
		title: "About Prime Innovators | Pakistan's Open-Source Talent Ecosystem",
		description:
			"Learn about Prime Innovators' mission to turn open-source contributions into verified, portable reputation — so talent is judged by what they build, not what they claim.",
		ogTitle: "About Prime Innovators - Pakistan's Open-Source Talent Network",
		ogDescription:
			"What if your code was your credential? Discover how Prime Innovators is building Pakistan's verified open-source talent ecosystem.",
	},
	"/faq": {
		...defaults,
		title: "FAQ | Prime Innovators",
		description:
			"Frequently asked questions about Prime Innovators ecosystem — how to join, contribute, sponsor, and recruit through Pakistan's open-source talent network.",
		ogTitle: "FAQ - Prime Innovators Open-Source Ecosystem",
		ogDescription:
			"Everything you need to know about the Prime Innovators ecosystem: how contributions are verified, how impact scoring works, and how to get involved.",
	},
	"/contact": {
		...defaults,
		ogType: "website",
		title: "Contact Prime Innovators | Pakistan's Open-Source Talent Ecosystem",
		description:
			"Get in touch with Prime Innovators. Use the form to open a prefilled email draft to hello@primeinnovators.org for project, sponsorship, or recruiter inquiries.",
		ogTitle: "Contact Prime Innovators",
		ogDescription:
			"Reach out to Prime Innovators for partnerships, inquiries, or support. We're building Pakistan's open-source talent ecosystem.",
	},
	"/privacy": {
		...defaults,
		title: "Privacy Policy | Prime Innovators",
		description:
			"Prime Innovators privacy policy — how we collect, use, and protect your data in our open-source talent ecosystem.",
		ogTitle: "Privacy Policy - Prime Innovators",
		ogDescription:
			"Learn how Prime Innovators handles your personal data, including account data, usage data, and your rights under our privacy policy.",
	},
	"/terms": {
		...defaults,
		title: "Terms of Service | Prime Innovators",
		description:
			"Prime Innovators terms of service governing the use of our open-source talent ecosystem platform.",
		ogTitle: "Terms of Service - Prime Innovators",
		ogDescription:
			"Read the terms and conditions for using Prime Innovators ecosystem, including account registration, acceptable use, and sponsorship terms.",
	},
	"/coc": {
		...defaults,
		title: "Code of Conduct | Prime Innovators",
		description:
			"Prime Innovators code of conduct based on Contributor Covenant v2.1 — our commitment to a harassment-free community.",
		ogTitle: "Code of Conduct - Prime Innovators",
		ogDescription:
			"Prime Innovators is committed to providing a harassment-free experience for everyone in our open-source community.",
	},
	"/404": {
		...defaults,
		title: "Page Not Found | Prime Innovators",
		description:
			"The page you're looking for doesn't exist. Return to Prime Innovators homepage.",
		ogTitle: "Page Not Found - Prime Innovators",
		ogDescription:
			"The requested page could not be found. Visit Prime Innovators to learn about Pakistan's open-source talent ecosystem.",
	},
};

export function getPageSeo(pathname) {
	const route = seo[pathname] || seo["/404"];
	return {
		...route,
		canonical: `${SITE_URL}${pathname}`,
	};
}
