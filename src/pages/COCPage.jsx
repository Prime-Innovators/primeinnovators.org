import { Helmet } from "react-helmet-async";
import {
	OrganizationSchema,
	WebSiteSchema,
} from "../components/seo/JsonLd";
import LegalPage from "../components/ui/LegalPage";
import LegalSection from "../components/ui/LegalSection";
import { getPageSeo } from "../constants/seo";

export default function COCPage() {
	const meta = getPageSeo("/coc");

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

			<LegalPage
				title="Code of Conduct"
				subtitle="Based on Contributor Covenant v2.1"
			>
				<LegalSection title="Our Pledge">
					<p>
						We as members, contributors, and leaders pledge to make participation
						in our community a harassment-free experience for everyone, regardless
						of age, body size, visible or invisible disability, ethnicity, sex
						characteristics, gender identity and expression, level of experience,
						education, socio-economic status, nationality, personal appearance,
						race, religion, or sexual identity and orientation.
					</p>
					<p>
						We pledge to act and interact in ways that contribute to an open,
						welcoming, diverse, inclusive, and healthy community.
					</p>
				</LegalSection>

				<LegalSection title="Our Standards">
					<p>
						Examples of behavior that contributes to a positive environment for
						our community include:
					</p>
					<ul className="list-disc list-inside space-y-2">
						<li>Demonstrating empathy and kindness toward other people</li>
						<li>
							Being respectful of differing opinions, viewpoints, and experiences
						</li>
						<li>Giving and gracefully accepting constructive feedback</li>
						<li>
							Taking responsibility for our mistakes and apologizing to those
							affected by our actions, and learning from the experience
						</li>
						<li>
							Focusing on what is best not just for us as individuals, but for the
							overall community
						</li>
					</ul>
					<p>Examples of unacceptable behavior include:</p>
					<ul className="list-disc list-inside space-y-2">
						<li>
							The use of sexualized language or imagery, and sexual attention or
							advances of any kind
						</li>
						<li>
							Trolling, insulting or derogatory comments, and personal or
							political attacks
						</li>
						<li>Public or private harassment</li>
						<li>
							Publishing others' private information, such as a physical or email
							address, without their explicit permission
						</li>
						<li>
							Other conduct which could reasonably be considered inappropriate in
							a professional setting
						</li>
					</ul>
				</LegalSection>

				<LegalSection title="Enforcement Responsibilities">
					<p>
						Community leaders are responsible for clarifying and enforcing our
						standards of acceptable behavior and will take appropriate and fair
						corrective action in response to any behavior that they deem
						inappropriate, threatening, offensive, or harmful.
					</p>
					<p>
						Community leaders have the right and responsibility to remove, edit,
						or reject comments, commits, code, wiki edits, issues, and other
						contributions that are not aligned to this Code of Conduct, and will
						communicate reasons for moderation decisions when appropriate.
					</p>
				</LegalSection>

				<LegalSection title="Scope">
					<p>
						This Code of Conduct applies within all community spaces, and also
						applies when an individual is officially representing the community in
						public spaces. Examples of representing our community include using an
						official e-mail address, posting via an official social media account,
						or acting as an appointed representative at an online or offline
						event.
					</p>
				</LegalSection>

				<LegalSection title="Enforcement">
					<p>
						Instances of abusive, harassing, or otherwise unacceptable behavior
						may be reported to the community leaders responsible for enforcement
						at
						<a href="mailto:hello@primeinnovators.org" className="underline">
							hello@primeinnovators.org
						</a>
						. All complaints will be reviewed and investigated promptly and
						fairly.
					</p>
					<p>
						All community leaders are obligated to respect the privacy and
						security of the reporter of any incident.
					</p>
				</LegalSection>

				<LegalSection title="Attribution">
					<p>
						This Code of Conduct is adapted from the{" "}
						<a
							href="https://www.contributor-covenant.org/version/2/1/code_of_conduct.html"
							target="_blank"
							rel="noopener noreferrer"
							className="underline"
						>
							Contributor Covenant, version 2.1
						</a>
						, available at
						<a
							href="https://www.contributor-covenant.org/version/2/1/code_of_conduct.html"
							target="_blank"
							rel="noopener noreferrer"
							className="underline"
						>
							https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
						</a>
						.
					</p>
					<p>
						For answers to common questions about this code of conduct, see the
						FAQ at
						<a
							href="https://www.contributor-covenant.org/faq"
							target="_blank"
							rel="noopener noreferrer"
							className="underline"
						>
							https://www.contributor-covenant.org/faq
						</a>
						.
					</p>
				</LegalSection>
			</LegalPage>
		</>
	);
}
