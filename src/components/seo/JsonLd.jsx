import { Helmet } from "react-helmet-async";
import { SITE_NAME, SITE_URL } from "../../constants/seo";

export function OrganizationSchema() {
	const schema = {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: "Prime Innovators",
		url: "https://primeinnovators.org",
		logo: "https://primeinnovators.org/apple-touch-icon.png",
		description:
			"A national open-source incubator for verified talent, transparent funding, and trusted collaboration.",
		sameAs: [
			"https://github.com/prime-innovators",
			"https://linkedin.com/company/primeinnovators",
			"https://x.com/prime-innovators",
		],
		email: "hello@primeinnovators.org",
	};

	return (
		<Helmet>
			<script type="application/ld+json">{JSON.stringify(schema)}</script>
		</Helmet>
	);
}

export function WebSiteSchema() {
	const schema = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: "Prime Innovators",
		url: "https://primeinnovators.org",
		description:
			"A national ecosystem where contributors earn trust through verified work, maintainers attract motivated teams, sponsors fund with transparency, and recruiters discover proven talent.",
	};

	return (
		<Helmet>
			<script type="application/ld+json">{JSON.stringify(schema)}</script>
		</Helmet>
	);
}

export function FAQSchema({ questions }) {
	const schema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: questions.map(({ q, a }) => ({
			"@type": "Question",
			name: q,
			acceptedAnswer: {
				"@type": "Answer",
				text: a,
			},
		})),
	};

	return (
		<Helmet>
			<script type="application/ld+json">{JSON.stringify(schema)}</script>
		</Helmet>
	);
}

export function ArticleSchema({
	title,
	description,
	publishedAt,
	author = "Prime Innovators",
	image,
	tags,
}) {
	const schema = {
		"@context": "https://schema.org",
		"@type": "TechArticle",
		headline: title,
		description,
		image,
		datePublished: publishedAt,
		author: {
			"@type": "Person",
			name: author,
		},
		publisher: {
			"@type": "Organization",
			name: SITE_NAME,
			url: SITE_URL,
		},
	};

	if (tags?.length > 0) {
		schema.keywords = tags.join(", ");
	}

	return (
		<Helmet>
			<script type="application/ld+json">{JSON.stringify(schema)}</script>
		</Helmet>
	);
}

export function ContactSchema() {
	const schema = {
		"@context": "https://schema.org",
		"@type": "ContactPage",
		name: "Contact Prime Innovators",
		url: "https://primeinnovators.org/contact",
		description:
			"Get in touch with Prime Innovators for partnerships, inquiries, or support.",
		email: "hello@primeinnovators.org",
	};

	return (
		<Helmet>
			<script type="application/ld+json">{JSON.stringify(schema)}</script>
		</Helmet>
	);
}
