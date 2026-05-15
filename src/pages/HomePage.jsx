import { Helmet } from "react-helmet-async";
import CapabilitiesSection from "../components/sections/CapabilitiesSection";
import EcosystemRoadmap from "../components/sections/EcosystemRoadmap";
import EcosystemRolesSection from "../components/sections/EcosystemRolesSection";
import HeroSection from "../components/sections/HeroSection";
import HowItWorksSection from "../components/sections/HowItWorksSection";
import RecruiterSection from "../components/sections/RecruiterSection";
import WaitlistSection from "../components/sections/WaitlistSection";
import {
	OrganizationSchema,
	WebSiteSchema,
} from "../components/seo/JsonLd";
import { getPageSeo } from "../constants/seo";

export default function HomePage() {
	const meta = getPageSeo("/");

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

			<HeroSection />
			<EcosystemRolesSection />
			<HowItWorksSection />
			<CapabilitiesSection />
			<EcosystemRoadmap />
			<RecruiterSection />
			<WaitlistSection />
		</>
	);
}
