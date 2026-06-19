import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import {
	ContactSchema,
	OrganizationSchema,
	WebSiteSchema,
} from "../components/seo/JsonLd";
import { getPageSeo } from "../constants/seo";

const inquiryPresets = {
	maintainer: {
		badge: "Project submission",
		subject: "Project submission inquiry",
		helpText:
			"Use this if you want to submit a project or ask about maintainer support.",
	},
	sponsor: {
		badge: "Sponsorship",
		subject: "Sponsorship inquiry",
		helpText: "Use this for sponsorship, partnership, or funding questions.",
	},
	recruiter: {
		badge: "Recruiter access",
		subject: "Recruiter access inquiry",
		helpText: "Use this if you want to learn about verified talent discovery.",
	},
	general: {
		badge: "General inquiry",
		subject: "General inquiry",
		helpText:
			"Use this for anything else, including ambassadors and campus chapter questions.",
	},
};

export default function ContactPage() {
	const { search } = useLocation();
	const inquiryType = new URLSearchParams(search).get("type") || "general";
	const inquiry = inquiryPresets[inquiryType] || inquiryPresets.general;
	const meta = getPageSeo("/contact");
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: inquiry.subject,
		message: "",
	});
	const [status, setStatus] = useState("idle");
	const [message, setMessage] = useState("");

	useEffect(() => {
		setFormData((prev) => ({
			...prev,
			subject: inquiry.subject,
		}));
	}, [inquiry.subject]);

	const handleChange = (e) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!formData.name || !formData.email || !formData.message) {
			setStatus("error");
			setMessage("Please fill in all required fields");
			return;
		}

		setStatus("loading");
		setMessage("");

		const lines = [
			`Name: ${formData.name.trim()}`,
			`Email: ${formData.email.trim()}`,
			`Subject: ${formData.subject.trim() || inquiry.subject}`,
			"",
			formData.message.trim(),
		].filter(Boolean);

		const mailtoUrl = `mailto:hello@primeinnovators.org?subject=${encodeURIComponent(formData.subject.trim() || inquiry.subject)}&body=${encodeURIComponent(lines.join("\n"))}`;

		window.location.href = mailtoUrl;
		setStatus("success");
		setMessage("Opening your email app to hello@primeinnovators.org.");
	};

	return (
		<>
			<Helmet>
				<title>{meta.title}</title>
				<meta name="description" content={meta.description} />
				<link rel="canonical" href={meta.canonical} />

				<meta property="og:title" content={meta.ogTitle} />
				<meta property="og:description" content={meta.ogDescription} />
				<meta property="og:type" content={meta.ogType} />
				<meta property="og:url" content={meta.canonical} />
				<meta property="og:image" content={meta.ogImage} />

				<meta name="twitter:card" content={meta.twitterCard} />
				<meta name="twitter:title" content={meta.ogTitle} />
				<meta name="twitter:description" content={meta.ogDescription} />
				<meta name="twitter:image" content={meta.ogImage} />
			</Helmet>

			<OrganizationSchema />
			<WebSiteSchema />
			<ContactSchema />

			<header className="py-24 md:py-32 section-container">
				<div className="max-w-3xl mx-auto text-center space-y-4">
					<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary animate-fade-in-scale">
						{inquiry.badge}
					</span>
					<h1 className="text-3xl md:text-4xl font-bold text-on-surface animate-reveal-up animation-delay-200">
						Get in touch
					</h1>
					<p className="text-lg text-on-surface-variant animate-reveal-up animation-delay-300">
						Have a question, idea, or want to partner with us? We'd love to hear
						from you.
					</p>
					<p className="text-sm text-on-surface-variant/80 max-w-2xl mx-auto animate-reveal-up animation-delay-400">
						{inquiry.helpText} If your email app does not open, write directly
						to{" "}
						<a href="mailto:hello@primeinnovators.org" className="underline">
							hello@primeinnovators.org
						</a>
						.
					</p>
				</div>
			</header>

			<section className="pb-24 md:pb-32 section-container">
				<div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2">
					<div className="space-y-8">
						<div className="space-y-2">
							<h2 className="text-2xl font-semibold text-on-surface">
								Send us a message
							</h2>
							<p className="text-on-surface-variant">
								Fill out the form and we'll respond within 24 hours.
							</p>
						</div>

						<form onSubmit={handleSubmit} className="space-y-5">
							<div className="space-y-1.5">
								<label
									htmlFor="name"
									className="text-sm font-medium text-on-surface"
								>
									Name <span className="text-error">*</span>
								</label>
								<input
									id="name"
									name="name"
									type="text"
									value={formData.name}
									onChange={handleChange}
									required
									className="w-full h-12 px-4 rounded-lg bg-surface-container-high/70 border border-white/10 text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary-fixed focus:border-transparent"
									placeholder="Your name"
								/>
							</div>

							<div className="space-y-1.5">
								<label
									htmlFor="email"
									className="text-sm font-medium text-on-surface"
								>
									Email <span className="text-error">*</span>
								</label>
								<input
									id="email"
									name="email"
									type="email"
									value={formData.email}
									onChange={handleChange}
									required
									className="w-full h-12 px-4 rounded-lg bg-surface-container-high/70 border border-white/10 text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary-fixed focus:border-transparent"
									placeholder="you@example.com"
								/>
							</div>

							<div className="space-y-1.5">
								<label
									htmlFor="subject"
									className="text-sm font-medium text-on-surface"
								>
									Subject
								</label>
								<input
									id="subject"
									name="subject"
									type="text"
									value={formData.subject}
									onChange={handleChange}
									className="w-full h-12 px-4 rounded-lg bg-surface-container-high/70 border border-white/10 text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary-fixed focus:border-transparent"
									placeholder="What's this about?"
								/>
							</div>

							<div className="space-y-1.5">
								<label
									htmlFor="message"
									className="text-sm font-medium text-on-surface"
								>
									Message <span className="text-error">*</span>
								</label>
								<textarea
									id="message"
									name="message"
									rows={5}
									value={formData.message}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 rounded-lg bg-surface-container-high/70 border border-white/10 text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary-fixed focus:border-transparent resize-y min-h-[120px]"
									placeholder="Your message..."
								/>
							</div>

							<button
								type="submit"
								disabled={status === "loading"}
								className="w-full h-12 rounded-lg font-medium bg-primary text-on-primary hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{status === "loading"
									? "Preparing email..."
									: "Open Email Draft"}
							</button>

							{message && (
								<p
									className={`text-sm ${status === "success" ? "text-secondary-fixed" : "text-error"}`}
									role="alert"
								>
									{message}
								</p>
							)}
						</form>
					</div>

					<div className="space-y-10 md:pt-16">
						<div className="space-y-4">
							<h2 className="text-xl font-semibold text-on-surface">
								Contact information
							</h2>
							<div className="space-y-4">
								<a
									href="mailto:hello@primeinnovators.org"
									className="flex items-center gap-3 text-on-surface-variant hover:text-primary-fixed transition-colors"
								>
									<svg
										aria-hidden="true"
										className="w-5 h-5 shrink-0"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
									<span>hello@primeinnovators.org</span>
								</a>
							</div>
						</div>

						<div className="space-y-4">
							<h2 className="text-xl font-semibold text-on-surface">
								Follow us
							</h2>
							<div className="flex gap-3">
								<a
									href="https://github.com/primeinnovators"
									target="_blank"
									rel="noopener noreferrer"
									className="w-10 h-10 rounded-lg bg-surface-container-high/70 border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary-fixed hover:border-primary-fixed/30 transition-all"
								>
									<span className="sr-only">GitHub</span>
									<svg
										aria-hidden="true"
										className="w-5 h-5"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
									</svg>
								</a>
								<a
									href="https://twitter.com/primeinnovators"
									target="_blank"
									rel="noopener noreferrer"
									className="w-10 h-10 rounded-lg bg-surface-container-high/70 border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary-fixed hover:border-primary-fixed/30 transition-all"
								>
									<span className="sr-only">Twitter / X</span>
									<svg
										aria-hidden="true"
										className="w-5 h-5"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
									</svg>
								</a>
								<a
									href="https://linkedin.com/company/primeinnovators"
									target="_blank"
									rel="noopener noreferrer"
									className="w-10 h-10 rounded-lg bg-surface-container-high/70 border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary-fixed hover:border-primary-fixed/30 transition-all"
								>
									<span className="sr-only">LinkedIn</span>
									<svg
										aria-hidden="true"
										className="w-5 h-5"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
									</svg>
								</a>
							</div>
						</div>

						<div className="rounded-xl bg-surface-container-high/40 border border-white/5 p-6 space-y-3">
							<h2 className="text-xl font-semibold text-on-surface">
								Partnership inquiries
							</h2>
							<p className="text-on-surface-variant">
								Interested in partnering with Prime Innovators? We're always
								open to collaborations with universities, companies, and
								open-source organizations.
							</p>
							<a
								href="mailto:partnerships@primeinnovators.org"
								className="inline-flex items-center gap-2 text-primary-fixed hover:underline font-medium"
							>
								partnerships@primeinnovators.org
								<svg
									aria-hidden="true"
									className="w-4 h-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M14 5l7 7m0 0l-7 7m7-7H3"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
