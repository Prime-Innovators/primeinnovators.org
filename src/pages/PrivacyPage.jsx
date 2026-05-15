import LegalPage from "../components/ui/LegalPage";
import LegalSection from "../components/ui/LegalSection";

export default function PrivacyPage() {
	return (
		<LegalPage title="Privacy Policy" subtitle="Last updated: May 15, 2026">
			<LegalSection title="Information We Collect">
				<p>
					We collect information to provide and improve our ecosystem. This
					includes:
				</p>
				<ul className="list-disc list-inside space-y-2">
					<li>
						<strong>Account Data:</strong> GitHub username, profile picture,
						email address (including .edu verification), university affiliation,
						and preferred name.
					</li>
					<li>
						<strong>Usage Data:</strong> Contributions to projects, projects
						joined, impact scores, platform interactions, and waitlist
						submissions.
					</li>
					<li>
						<strong>Payment Data:</strong> For sponsored stipends, we collect
						payment information processed through JazzCash, Easypaisa, or Stripe
						(we do not store full payment details).
					</li>
					<li>
						<strong>Communications:</strong> Messages sent through our contact
						forms or support channels.
					</li>
				</ul>
			</LegalSection>

			<LegalSection title="How We Use Your Information">
				<p>We use your information to:</p>
				<ul className="list-disc list-inside space-y-2">
					<li>
						Operate, maintain, and improve the Prime Innovators ecosystem.
					</li>
					<li>
						Verify your identity and enrollment status (for student-specific
						features).
					</li>
					<li>Calculate Impact Scores and match you with suitable projects.</li>
					<li>Distribute stipends and manage sponsorship funds.</li>
					<li>
						Send you updates about the platform, projects, and opportunities
						(you can opt out of non-essential emails).
					</li>
					<li>
						Understand how users interact with our platform to improve
						experience.
					</li>
					<li>Enforce our Terms of Service and Code of Conduct.</li>
				</ul>
			</LegalSection>

			<LegalSection title="Data Sharing and Disclosure">
				<p>
					We do not sell your personal data. We may share information in the
					following circumstances:
				</p>
				<ul className="list-disc list-inside space-y-2">
					<li>
						<strong>With Your Consent:</strong> To share your profile (including
						Impact Score and project history) with sponsors and recruiters who
						have agreed to our terms.
					</li>
					<li>
						<strong>Service Providers:</strong> Third parties that help us
						operate (e.g., GitHub for authentication, JazzCash/Easypaisa/Stripe
						for payments, email providers). These processors are bound by
						confidentiality agreements.
					</li>
					<li>
						<strong>Legal Requirements:</strong> To comply with laws, respond to
						valid legal requests, or protect rights, property, or safety.
					</li>
					<li>
						<strong>Business Transfers:</strong> In connection with a merger,
						acquisition, or asset sale, your data may be transferred as part of
						that transaction.
					</li>
				</ul>
				<p className="mt-2">
					Note: Your GitHub data is subject to GitHub's Privacy Policy and Terms
					of Service.
				</p>
			</LegalSection>

			<LegalSection title="Data Retention and Security">
				<p>
					We retain your data as long as your account is active or as needed to
					provide services, comply with legal obligations, resolve disputes, and
					enforce agreements.
				</p>
				<p>
					We implement reasonable security measures to protect your data,
					including encryption in transit (HTTPS) and at rest, regular security
					audits, and access controls. However, no method is 100% secure.
				</p>
			</LegalSection>

			<LegalSection title="Your Rights">
				<p>Depending on your location, you may have the right to:</p>
				<ul className="list-disc list-inside space-y-2">
					<li>Access the personal data we hold about you.</li>
					<li>Request correction of inaccurate or incomplete data.</li>
					<li>Request deletion of your personal data.</li>
					<li>Restrict or object to certain processing activities.</li>
					<li>Withdraw consent (where processing is based on consent).</li>
					<li>Receive a copy of your data in a portable format.</li>
				</ul>
				<p className="mt-2">
					To exercise these rights, please contact us at &nbsp;
					<a href="mailto:hello@primeinnovators.org" className="underline">
						hello@primeinnovators.org
					</a>
					. We will respond within 30 days.
				</p>
			</LegalSection>

			<LegalSection title="Changes to This Policy">
				<p>
					We may update this Privacy Policy from time to time. We will notify
					you of any changes by posting the new policy on this page and updating
					the "Last updated" date.
				</p>
			</LegalSection>

			<LegalSection title="Contact Us">
				<p>
					If you have questions about this Privacy Policy, please contact us:
				</p>
				<p>
					<a href="mailto:hello@primeinnovators.org" className="underline">
						hello@primeinnovators.org
					</a>
				</p>
				<p>
					Prime Innovators Organization
					<br />
					<br />
					Islamabad, Pakistan
				</p>
			</LegalSection>
		</LegalPage>
	);
}
