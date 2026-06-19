import { useEffect, useRef, useState } from "react";

const roles = [
	{ value: "", label: "I am a..." },
	{ value: "contributor", label: "Contributor (Student Developer)" },
	{ value: "maintainer", label: "Maintainer (Project Lead)" },
	{ value: "sponsor", label: "Sponsor (Organization)" },
	{ value: "recruiter", label: "Recruiter (Talent Hunter)" },
	{ value: "ambassador", label: "Ambassador (University Chapter)" },
];

function getUtmParams() {
	if (typeof window === "undefined") return {};
	const params = new URLSearchParams(window.location.search);
	return {
		utm_source: params.get("utm_source") || "",
		utm_medium: params.get("utm_medium") || "",
		utm_campaign: params.get("utm_campaign") || "",
	};
}

export default function WaitlistForm({ className = "" }) {
	const [name, setName] = useState("");
	const [role, setRole] = useState("");
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState("idle");
	const [message, setMessage] = useState("");
	const utmRef = useRef(getUtmParams());
	const abortControllerRef = useRef(null);

	useEffect(() => {
		return () => {
			if (abortControllerRef.current) {
				abortControllerRef.current.abort();
			}
		};
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			setStatus("error");
			setMessage("Please enter a valid email address");
			return;
		}

		setStatus("loading");
		setMessage("");

		if (abortControllerRef.current) {
			abortControllerRef.current.abort();
		}

		abortControllerRef.current = new AbortController();
		const utm = utmRef.current;

		try {
			const response = await fetch("https://api.primeinnovators.org/waitlist", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					email: email.trim(),
					name: name.trim(),
					role,
					utm_source: utm.utm_source,
					utm_medium: utm.utm_medium,
					utm_campaign: utm.utm_campaign,
				}),
				signal: abortControllerRef.current.signal,
			});

			const data = await response.json();

			if (response.ok) {
				setStatus("success");
				setMessage("Successfully joined the waitlist. Check your inbox!");
				setName("");
				setRole("");
				setEmail("");
			} else {
				setStatus("error");
				setMessage(data.error || "Something went wrong. Please try again.");
			}
		} catch (error) {
			if (error.name === "AbortError") return;
			setStatus("error");
			setMessage("Network error. Please check your connection.");
		}
	};

	return (
		<form onSubmit={handleSubmit} className={`w-full max-w-xl ${className}`}>
			<div className="space-y-3">
				<div className="flex flex-col sm:flex-row gap-3">
					<input
						id="name"
						name="name"
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						disabled={status === "loading"}
						className="h-12 sm:h-14 flex-1 rounded-lg bg-surface-container-high/80 px-4 text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary-fixed focus:ring-offset-2 focus:ring-offset-surface disabled:opacity-50 md:text-base border border-white/10"
						placeholder="Your name"
						aria-label="Your name"
					/>
					<select
						id="role"
						name="role"
						value={role}
						onChange={(e) => setRole(e.target.value)}
						disabled={status === "loading"}
						className="h-12 sm:h-14 rounded-lg bg-surface-container-high/80 px-4 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-fixed focus:ring-offset-2 focus:ring-offset-surface disabled:opacity-50 md:text-base border border-white/10 appearance-none cursor-pointer min-w-[180px]"
						aria-label="Your role"
					>
						{roles.map((r) => (
							<option key={r.value} value={r.value} className="bg-surface">
								{r.label}
							</option>
						))}
					</select>
				</div>

				<div className="flex h-12 sm:h-14 w-full items-stretch rounded-lg overflow-hidden border border-white/10">
					<input
						id="email"
						name="email"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						disabled={status === "loading"}
						required
						className="h-full flex-1 bg-surface-container-high/80 px-4 text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary-fixed focus:ring-inset disabled:opacity-50 md:text-base border-r border-white/10"
						placeholder="Enter your email"
						aria-label="Email address"
						aria-describedby={message ? "form-message" : undefined}
					/>
					<button
						type="submit"
						disabled={status === "loading"}
						className="flex min-w-[100px] items-center justify-center bg-primary-fixed px-5 text-sm font-bold text-on-primary-fixed transition-all hover:opacity-90 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary-fixed focus:ring-inset disabled:cursor-not-allowed disabled:opacity-50 md:min-w-[120px] md:px-6 md:text-base shadow-[0_10px_25px_rgba(243,230,75,0.2)]"
					>
						{status === "loading" ? "Joining..." : "Join Waitlist"}
					</button>
				</div>
			</div>

			{message && (
				<p
					id="form-message"
					className={`mt-3 text-sm ${status === "success" ? "text-secondary-fixed" : "text-error"}`}
					role="alert"
				>
					{message}
				</p>
			)}
		</form>
	);
}
