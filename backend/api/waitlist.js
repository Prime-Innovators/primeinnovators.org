export default {
	async fetch(request, env) {
		const url = new URL(request.url);

		if (!url.pathname.startsWith("/waitlist")) {
			return new Response(
				JSON.stringify({
					success: false,
					error: "Not found",
				}),
				{
					status: 404,
					headers: { "Content-Type": "application/json" },
				},
			);
		}

		const corsHeaders = {
			"Access-Control-Allow-Origin": "https://primeinnovators.org",
			"Access-Control-Allow-Methods": "POST, OPTIONS",
			"Access-Control-Allow-Headers": "Content-Type",
			"Access-Control-Max-Age": "86400",
		};

		// Handle preflight requests
		if (request.method === "OPTIONS") {
			return new Response(null, {
				status: 204,
				headers: corsHeaders,
			});
		}

		// Only allow POST requests
		if (request.method !== "POST") {
			return new Response(
				JSON.stringify({
					success: false,
					error: "Method not allowed",
				}),
				{
					status: 405,
					headers: {
						...corsHeaders,
						"Content-Type": "application/json",
					},
				},
			);
		}

		try {
			const body = await request.json().catch(() => null);

			if (!body || !body.email) {
				return new Response(
					JSON.stringify({
						success: false,
						error: "Email is required",
					}),
					{
						status: 400,
						headers: { ...corsHeaders, "Content-Type": "application/json" },
					},
				);
			}

			// Validate Turnstile token
			const turnstileToken = body['cf-turnstile-response'];
			if (!turnstileToken) {
				return new Response(
					JSON.stringify({
						success: false,
						error: "Security verification required",
					}),
					{
						status: 400,
						headers: { ...corsHeaders, "Content-Type": "application/json" },
					},
				);
			}

			// Verify Turnstile token with Cloudflare
			const turnstileResponse = await fetch(
				"https://challenges.cloudflare.com/turnstile/v0/siteverify",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
					},
					body: new URLSearchParams({
						secret: env.TURNSTILE_SECRET,
						response: turnstileToken,
					}),
				},
			);

			const turnstileResult = await turnstileResponse.json();

			if (!turnstileResult.success) {
				console.error('Turnstile validation failed:', turnstileResult);
				return new Response(
					JSON.stringify({
						success: false,
						error: "Security verification failed. Please refresh and try again.",
					}),
					{
						status: 400,
						headers: { ...corsHeaders, "Content-Type": "application/json" },
					},
				);
			}

			const email = body.email.trim().toLowerCase();

			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailRegex.test(email)) {
				return new Response(
					JSON.stringify({
						success: false,
						error: "Please enter a valid email address",
					}),
					{
						status: 400,
						headers: { ...corsHeaders, "Content-Type": "application/json" },
					},
				);
			}

			if (email.length > 254) {
				return new Response(
					JSON.stringify({
						success: false,
						error: "Email address is too long",
					}),
					{
						status: 400,
						headers: { ...corsHeaders, "Content-Type": "application/json" },
					},
				);
			}

			const ip = request.headers.get("CF-Connecting-IP") || "unknown";
			const userAgent = request.headers.get("User-Agent") || "unknown";
			const referer = request.headers.get("Referer") || null;
			const country = request.cf?.country || null;

			const result = await env.DB.prepare(
				`INSERT INTO waitlist (email, ip_address, user_agent, referrer, country) 
         VALUES (?, ?, ?, ?, ?)`,
			)
				.bind(email, ip, userAgent, referer, country)
				.run();

			if (result.success) {
				return new Response(
					JSON.stringify({
						success: true,
						message:
							"Successfully joined the waitlist! We'll notify you when we launch.",
					}),
					{
						status: 200,
						headers: { ...corsHeaders, "Content-Type": "application/json" },
					},
				);
			} else {
				throw new Error("Database insertion failed");
			}
		} catch (error) {
			if (error.message?.includes("UNIQUE constraint failed")) {
				return new Response(
					JSON.stringify({
						success: false,
						error: "This email is already on our waitlist!",
					}),
					{
						status: 409,
						headers: { ...corsHeaders, "Content-Type": "application/json" },
					},
				);
			}

			console.error("Error processing waitlist submission:", error);

			return new Response(
				JSON.stringify({
					success: false,
					error: "Something went wrong. Please try again later.",
				}),
				{
					status: 500,
					headers: { ...corsHeaders, "Content-Type": "application/json" },
				},
			);
		}
	},
};
