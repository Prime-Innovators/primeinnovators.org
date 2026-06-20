import { Link } from "react-router-dom";

export default function Footer() {
	const links = {
		product: [
			{ label: "Ecosystem", href: "/ecosystem" },
			{ label: "How it Works", href: "/ecosystem#how-it-works" },
			{ label: "Pillars", href: "/ecosystem#pillars" },
			{ label: "Roadmap", href: "/ecosystem#roadmap" },
		],
		company: [
			{ label: "Blog", href: "/blog" },
			{ label: "Waitlist", href: "/#waitlist" },
			{ label: "About", href: "/about" },
			{ label: "FAQ", href: "/faq" },
			{ label: "Contact", href: "/contact" },
			{
				label: "Source Code",
				href: "https://github.com/Prime-Innovators/primeinnovators.org",
			},
		],
		legal: [
			{ label: "Privacy", href: "/privacy" },
			{ label: "Terms", href: "/terms" },
			{ label: "Code of Conduct", href: "/coc" },
		],
	};

	const socials = [
		{
			name: "GitHub",
			href: "https://github.com/prime-innovators",
			icon: (
				<svg
					aria-hidden="true"
					className="w-5 h-5"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" />
				</svg>
			),
		},
		{
			name: "LinkedIn",
			href: "https://linkedin.com/company/primeinnovators",
			icon: (
				<svg
					aria-hidden="true"
					className="w-5 h-5"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
				</svg>
			),
		},
		{
			name: "Twitter",
			href: "https://x.com/prime-innovators",
			icon: (
				<svg
					aria-hidden="true"
					className="w-5 h-5"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
				</svg>
			),
		},
	];

	return (
		<footer className="bg-surface-container-lowest border-t border-white/10">
			<div className="section-container py-16 md:py-20">
				<div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
					<div className="space-y-4">
						<Link to="/" className="flex items-center gap-2 group">
							<img
								src="/favicon-32x32.png"
								alt="Prime Innovators"
								className="w-8 h-8 rounded-sm transition-transform duration-300 group-hover:scale-110"
								width={32}
								height={32}
							/>
							<span className="font-bold text-primary-fixed">
								Prime Innovators
							</span>
						</Link>
						<p className="text-on-surface-variant text-sm leading-relaxed">
							A national open-source incubator for verified talent, transparent
							funding, and trusted collaboration.
						</p>
					</div>

					<div className="space-y-4">
						<h4 className="font-bold text-on-surface">Product</h4>
						<ul className="space-y-2">
							{links.product.map((link) => (
								<li key={link.label}>
									<Link
										to={link.href}
										className="text-on-surface-variant hover:text-primary-fixed transition-colors text-sm"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div className="space-y-4">
						<h4 className="font-bold text-on-surface">Company</h4>
						<ul className="space-y-2">
							{links.company.map((link) => {
								const isExternal =
									link.href.startsWith("http") ||
									link.href.startsWith("mailto:");
								return (
									<li key={link.label}>
										{isExternal ? (
											<a
												href={link.href}
												target={
													link.href.startsWith("http") ? "_blank" : undefined
												}
												rel={
													link.href.startsWith("http")
														? "noopener noreferrer"
														: undefined
												}
												className="text-on-surface-variant hover:text-primary-fixed transition-colors text-sm"
											>
												{link.label}
											</a>
										) : (
											<Link
												to={link.href}
												className="text-on-surface-variant hover:text-primary-fixed transition-colors text-sm"
											>
												{link.label}
											</Link>
										)}
									</li>
								);
							})}
						</ul>
					</div>

					<div className="space-y-4">
						<h4 className="font-bold text-on-surface">Legal</h4>
						<ul className="space-y-2">
							{links.legal.map((link) => (
								<li key={link.label}>
									<Link
										to={link.href}
										className="text-on-surface-variant hover:text-primary-fixed transition-colors text-sm"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div className="space-y-4">
						<h4 className="font-bold text-on-surface">Updates</h4>
						<p className="text-on-surface-variant text-sm">
							Join the waitlist for launch updates and early access.
						</p>
						<Link
							to="/#waitlist"
							className="btn-secondary px-4 py-2 rounded-lg inline-block text-sm"
						>
							Join the waitlist
						</Link>
					</div>
				</div>

				<div className="border-t border-white/10 pt-8 space-y-6">
					<div className="flex gap-4">
						{socials.map((social) => (
							<a
								key={social.name}
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								className="text-on-surface-variant hover:text-primary-fixed transition-colors"
								aria-label={social.name}
							>
								{social.icon}
							</a>
						))}
					</div>

					<p className="text-on-surface-variant text-sm">
						&copy; 2026 Prime Innovators. All rights reserved. Built for
						Pakistan&apos;s tech future.
					</p>
				</div>
			</div>
		</footer>
	);
}
