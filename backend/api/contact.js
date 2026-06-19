import { sendEmail } from "./email.js";

function validateEmail(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

export async function handleContact(request, env) {
	const body = await request.json().catch(() => null);

	if (!body?.name?.trim() || !body?.email?.trim() || !body?.message?.trim()) {
		return Response.json(
			{ success: false, error: "Name, email, and message are required" },
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

	const ip = request.headers.get("CF-Connecting-IP") || "unknown";

	try {
		await env.DB.prepare(
			"INSERT INTO contacts (name, email, subject, message, inquiry_type, ip_address) VALUES (?, ?, ?, ?, ?, ?)",
		)
			.bind(
				body.name.trim(),
				email,
				body.subject?.trim() || null,
				body.message.trim(),
				body.inquiry_type?.trim() || null,
				ip,
			)
			.run();

		if (env.RESEND_API_KEY) {
			const inquiryLabel = body.inquiry_type || "general";
			const subject = `New contact: ${body.subject?.trim() || inquiryLabel}`;
			const html = `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${body.name.trim()}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${body.subject?.trim() || "—"}</p>
        <p><strong>Type:</strong> ${inquiryLabel}</p>
        <hr>
        <p>${body.message.trim()}</p>
      `;
			await sendEmail(env, "hello@primeinnovators.org", subject, html, email);
		}

		return Response.json({
			success: true,
			message: "Message sent! We'll get back to you within 24 hours.",
		});
	} catch (error) {
		console.error("Contact error:", error);
		return Response.json(
			{
				success: false,
				error: "Something went wrong. Please try again later.",
			},
			{ status: 500 },
		);
	}
}
