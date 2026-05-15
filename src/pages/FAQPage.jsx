import GlassCard from "../components/ui/GlassCard";

const faqSections = [
	{
		label: "Getting Started",
		questions: [
			{
				q: "What is Prime Innovators?",
				a: "Prime Innovators is a decentralized ecosystem that connects university students with open-source projects, verifies contributions through AI-powered impact scoring, and creates pathways to sponsorships, internships, and jobs.",
			},
			{
				q: "Who is this for?",
				a: "University students worldwide who want to gain real-world experience through meaningful open-source contributions, as well as project maintainers seeking contributors and sponsors looking to fund impactful work.",
			},
			{
				q: "How do I join?",
				a: "Join our waitlist at primeinnovators.org. We'll notify you when the platform launches and provide early access details.",
			},
			{
				q: "When will it launch?",
				a: "We're targeting a Q3 2026 launch for the MVP. Join the waitlist for updates on our progress.",
			},
			{
				q: "Is it free?",
				a: "Yes, Prime Innovators is completely free for students and project maintainers. We generate revenue through optional sponsorship packages for organizations.",
			},
		],
	},
	{
		label: "For Contributors",
		questions: [
			{
				q: "Do I need to be a student?",
				a: "Currently, Prime Innovators focuses on university students. We verify enrollment through .edu emails or institutional verification. Post-graduate contributors may be eligible in future phases.",
			},
			{
				q: "What projects can I contribute to?",
				a: "We host open-source projects across tech domains: web development, data science, DevOps, AI/ML, mobile apps, and more. All projects must have clear impact metrics and maintainer oversight.",
			},
			{
				q: "How is my work verified?",
				a: "Our AI analyzes GitHub commits, issue resolutions, and code quality metrics to calculate an Impact Score. Maintainers also provide qualitative feedback on contributions.",
			},
		],
	},
	{
		label: "For Maintainers",
		questions: [
			{
				q: "How do I submit a project?",
				a: "Maintainers can apply through our portal with their GitHub repository details. We review for active maintenance, clear contribution guidelines, and alignment with our mission.",
			},
			{
				q: "What support is available?",
				a: "We provide contributor matching, impact reporting, optional microgrants for project maintenance, and promotion through our newsletter and social channels.",
			},
		],
	},
	{
		label: "For Sponsors & Recruiters",
		questions: [
			{
				q: "How does funding work?",
				a: "Sponsors fund specific impact milestones or contribute to our general fund. Funds are distributed as stipends to students upon verified contribution completion via JazzCash/Easypaisa/Stripe.",
			},
			{
				q: "How do I find talent?",
				a: "Recruiters can browse verified contributor profiles sorted by Impact Score, skill tags, and project history. We provide read-only access to profiles with consent.",
			},
			{
				q: "What makes the data trustworthy?",
				a: "Our Impact Score combines automated GitHub analysis with maintainer reviews. All data is opt-in, and we never sell personal information.",
			},
		],
	},
	{
		label: "Trust & Platform",
		questions: [
			{
				q: "Is this government-related?",
				a: "No, Prime Innovators is an independent initiative. We collaborate with universities and tech companies but are not affiliated with any government entity.",
			},
			{
				q: "How does AI scoring work?",
				a: "Our model evaluates commit frequency, issue resolution, code review participation, and repo health metrics. It's designed to reward consistent, meaningful contributions over gaming metrics.",
			},
			{
				q: "How is my data used?",
				a: "We use your data solely to operate the ecosystem: verify contributions, calculate impact, match with projects, and (if opted) share with sponsors/recruiters. See our Privacy Policy for details.",
			},
			{
				q: "What makes this different from GitHub or LinkedIn?",
				a: "Unlike GitHub (code host) or LinkedIn (professional network), we focus on *verified impact* from open-source work, provide financial stipends, and create a trusted bridge between academia and industry.",
			},
		],
	},
];

export default function FAQPage() {
	return (
		<>
			<header className="py-24 md:py-32 section-container">
				<div className="max-w-3xl mx-auto text-center space-y-4">
					<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
						FAQ
					</span>
					<h1 className="text-3xl md:text-4xl font-bold text-on-surface">
						Frequently asked questions
					</h1>
					<p className="text-lg text-on-surface-variant">
						Everything you need to know about the Prime Innovators ecosystem
					</p>
				</div>
			</header>

			<section className="pb-24 md:pb-32 section-container">
				<div className="max-w-4xl mx-auto space-y-8">
					{faqSections.map((section, sectionIndex) => (
						<div key={sectionIndex} className="space-y-6">
							<h2 className="text-2xl font-semibold text-on-surface">
								{section.label}
							</h2>
							<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
								{section.questions.map((qa, qIndex) => (
									<GlassCard key={`${sectionIndex}-${qIndex}`} className="p-5">
										<h3 className="font-semibold text-on-surface mb-2">
											{qa.q}
										</h3>
										<p className="text-on-surface-variant">{qa.a}</p>
									</GlassCard>
								))}
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="pb-24 md:pb-32 section-container">
				<div className="max-w-3xl mx-auto text-center space-y-6">
					<p className="text-on-surface-variant">
						Still have questions? We're here to help.
					</p>
					<a
						href="mailto:hello@primeinnovators.org"
						className="inline-flex items-center px-6 py-3 rounded-lg font-medium bg-primary text-on-primary hover:bg-primary/90 transition-colors"
					>
						Contact us at hello@primeinnovators.org
					</a>
				</div>
			</section>
		</>
	);
}
