import Footer from "../components/layout/Footer";
import Navigation from "../components/layout/Navigation";

export default function RootLayout({ children }) {
	return (
		<div className="min-h-screen bg-background text-on-surface">
			<Navigation />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
