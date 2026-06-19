import { sendEmail, welcomeEmail } from "./email.js";

function validateEmail(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

export async function handleWaitlist(request, env) {
	const body = await request.json().catch(() => null);

	if (!body?.email) {
		return Response.json(
			{ success: false, error: "Email is required" },
			{ status: 400 },
		);
	}

	const email = body.email.trim().toLowerCase();

	if (!validateEmail(email)) {
		return Response.json(
			{ success: false, error: "Please enter a valid email address" },
			{ status: 400 },
		);
	}

	const name = body.name?.trim() || null;
	const role = body.role?.trim() || null;
	const utmSource = body.utm_source?.trim() || null;
	const utmMedium = body.utm_medium?.trim() || null;
	const utmCampaign = body.utm_campaign?.trim() || null;
	const ip = request.headers.get("CF-Connecting-IP") || "unknown";
	const userAgent = request.headers.get("User-Agent") || "unknown";
	const referer = request.headers.get("Referer") || null;
	const country = request.cf?.country || null;

	try {
		const result = await env.DB.prepare(
			`INSERT INTO waitlist (email, name, role, utm_source, utm_medium, utm_campaign, ip_address, user_agent, referrer, country)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
		)
			.bind(
				email,
				name,
				role,
				utmSource,
				utmMedium,
				utmCampaign,
				ip,
				userAgent,
				referer,
				country,
			)
			.run();

		if (!result.success) {
			throw new Error("Database insertion failed");
		}

		if (env.RESEND_API_KEY) {
			const sent = await sendEmail(
				env,
				email,
				"You're on the Prime Innovators waitlist",
				welcomeEmail(name),
			);
			if (sent) {
				await env.DB.prepare(
					"UPDATE waitlist SET email_sent_at = CURRENT_TIMESTAMP WHERE email = ?",
				)
					.bind(email)
					.run();
			}
		}

		return Response.json({
			success: true,
			message:
				"Successfully joined the waitlist! We'll notify you when we launch.",
		});
	} catch (error) {
		if (error.message?.includes("UNIQUE constraint failed")) {
			return Response.json(
				{ success: false, error: "This email is already on our waitlist!" },
				{ status: 409 },
			);
		}
		console.error("Waitlist error:", error);
		return Response.json(
			{
				success: false,
				error: "Something went wrong. Please try again later.",
			},
			{ status: 500 },
		);
	}
}

export async function handleCount(env) {
	try {
		const result = await env.DB.prepare(
			"SELECT COUNT(*) as count FROM waitlist",
		).first();
		return Response.json({ count: result.count });
	} catch (error) {
		console.error("Count error:", error);
		return Response.json({ count: 0 });
	}
}
