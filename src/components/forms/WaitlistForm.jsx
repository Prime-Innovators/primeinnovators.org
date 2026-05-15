import { useEffect, useRef, useState } from "react";

/**
 * Email Waitlist Form Component
 * Features:
 * - Email validation with regex
 * - Loading states with visual feedback
 * - Success/error messaging
 * - Abort controller for request cleanup
 * - Accessibility features (ARIA labels, roles)
 */
export default function WaitlistForm({ className = "" }) {
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState("idle"); // idle, loading, success, error
	const [message, setMessage] = useState("");
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

		// Client-side validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			setStatus("error");
			setMessage("Please enter a valid email address");
			return;
		}

		setStatus("loading");
		setMessage("");

		// Cancel any pending request
		if (abortControllerRef.current) {
			abortControllerRef.current.abort();
		}

		abortControllerRef.current = new AbortController();

		try {
			const response = await fetch("https://api.primeinnovators.org/waitlist", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email: email.trim() }),
				signal: abortControllerRef.current.signal,
			});

			const data = await response.json();

			if (response.ok) {
				setStatus("success");
				setMessage("Successfully joined the waitlist.");
				setEmail("");
			} else {
				setStatus("error");
				setMessage(data.error || "Something went wrong. Please try again.");
			}
		} catch (error) {
			if (error.name === "AbortError") {
				return;
			}
			setStatus("error");
			setMessage("Network error. Please check your connection.");
		}
	};

	return (
		<form onSubmit={handleSubmit} className={`w-full max-w-xl ${className}`}>
			<label htmlFor="email" className="sr-only">
				Email address
			</label>
			<div className="flex h-14 w-full items-stretch md:h-16 rounded-lg overflow-hidden border border-white/10">
				<input
					id="email"
					name="email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					disabled={status === "loading"}
					required
					className="h-full flex-1 bg-surface-container-high/80 px-4 text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary-fixed focus:ring-offset-2 focus:ring-offset-surface disabled:opacity-50 md:text-base border-r border-white/10"
					placeholder="Enter your email"
					aria-label="Email address"
					aria-describedby={message ? "form-message" : undefined}
				/>
				<button
					type="submit"
					disabled={status === "loading"}
					className="flex min-w-[100px] items-center justify-center bg-primary-fixed px-5 text-sm font-bold text-on-primary-fixed transition-all hover:opacity-90 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary-fixed focus:ring-offset-2 focus:ring-offset-surface disabled:cursor-not-allowed disabled:opacity-50 md:min-w-[120px] md:px-6 md:text-base shadow-[0_10px_25px_rgba(243,230,75,0.2)]"
				>
					{status === "loading" ? "Joining..." : "Join Waitlist"}
				</button>
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
