import CapabilitiesSection from "../components/sections/CapabilitiesSection";
import EcosystemRoadmap from "../components/sections/EcosystemRoadmap";
import EcosystemRolesSection from "../components/sections/EcosystemRolesSection";
import HeroSection from "../components/sections/HeroSection";
import HowItWorksSection from "../components/sections/HowItWorksSection";
import RecruiterSection from "../components/sections/RecruiterSection";
import WaitlistSection from "../components/sections/WaitlistSection";

export default function HomePage() {
	return (
		<>
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
