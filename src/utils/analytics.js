const GA_ID = import.meta.env.VITE_GA_ID;

export function initAnalytics() {
	if (!GA_ID || typeof window === "undefined") return;

	const existing = document.getElementById("gtag-script");
	if (existing) return;

	const script = document.createElement("script");
	script.id = "gtag-script";
	script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
	script.async = true;
	document.head.appendChild(script);

	const inline = document.createElement("script");
	inline.id = "gtag-init";
	inline.textContent = `
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', '${GA_ID}', {
			page_path: window.location.pathname,
		});
	`;
	document.head.appendChild(inline);
}

export function trackPageView(path) {
	if (!GA_ID || typeof window === "undefined") return;
	if (typeof window.gtag === "function") {
		window.gtag("config", GA_ID, { page_path: path });
	}
}
