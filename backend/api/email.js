export async function sendEmail(env, to, subject, html, replyTo) {
	if (!env.RESEND_API_KEY) return false;

	const payload = {
		from: "Prime Innovators <waitlist@primeinnovators.org>",
		to: [to],
		subject,
		html,
	};

	if (replyTo) {
		payload.reply_to = [replyTo];
	}

	try {
		const res = await fetch("https://api.resend.com/emails", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${env.RESEND_API_KEY}`,
				"Content-Type": "application/json",
				"User-Agent": "primeinnovators-worker/1.0",
			},
			body: JSON.stringify(payload),
		});
		return res.ok;
	} catch (err) {
		console.error("Failed to send email:", err);
		return false;
	}
}

export function welcomeEmail(name) {
	const greeting = name ? `Hi ${name},` : "Hi there,";
	return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#111319;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:40px 16px;">
    <table width="480" cellpadding="0" cellspacing="0" style="max-width:480px;width:100%;">
      <tr><td style="padding-bottom:32px;">
        <table cellpadding="0" cellspacing="0"><tr>
          <td style="padding-right:12px;"><img src="https://primeinnovators.org/favicon-32x32.png" width="32" height="32" alt="" style="border-radius:6px;"></td>
          <td><span style="color:#e1e2e9;font-weight:700;font-size:16px;">Prime Innovators</span></td>
        </tr></table>
      </td></tr>
      <tr><td style="background:#1a1d26;border-radius:16px;padding:40px;">
        <h1 style="color:#f3e64b;font-size:24px;margin:0 0 16px;">You're on the waitlist</h1>
        <p style="color:#ccc7ae;font-size:15px;line-height:1.6;margin:0 0 16px;">${greeting}</p>
        <p style="color:#ccc7ae;font-size:15px;line-height:1.6;margin:0 0 16px;">Thanks for joining Prime Innovators — Pakistan's first open-source talent ecosystem. You're now among the first to know when we launch.</p>
        <p style="color:#ccc7ae;font-size:15px;line-height:1.6;margin:0 0 24px;">We're building verified contributor profiles, AI-scored impact tracking, transparent sponsorships, and a university chapter network. We'll keep you posted on our progress.</p>
        <table cellpadding="0" cellspacing="0"><tr>
          <td style="padding-right:8px;"><a href="https://github.com/prime-innovators" style="display:inline-block;padding:8px 20px;border-radius:8px;background:rgba(255,255,255,0.08);color:#ccc7ae;text-decoration:none;font-size:13px;">GitHub</a></td>
          <td><a href="https://linkedin.com/company/primeinnovators" style="display:inline-block;padding:8px 20px;border-radius:8px;background:rgba(255,255,255,0.08);color:#ccc7ae;text-decoration:none;font-size:13px;">LinkedIn</a></td>
        </tr></table>
        <p style="color:#666;font-size:13px;margin:32px 0 0;border-top:1px solid rgba(255,255,255,0.06);padding-top:24px;">— The Prime Innovators Team</p>
      </td></tr>
    </table>
  </td></tr></table>
</body>
</html>`;
}
