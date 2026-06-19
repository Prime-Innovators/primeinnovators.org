import { handleContact } from "./contact.js";
import { handleCount, handleWaitlist } from "./waitlist.js";

const corsHeaders = {
	"Access-Control-Allow-Origin": "https://primeinnovators.org",
	"Access-Control-Allow-Methods": "GET, POST, OPTIONS",
	"Access-Control-Allow-Headers": "Content-Type",
	"Access-Control-Max-Age": "86400",
};

function wrap(handler) {
	return async (request, env) => {
		const response = await handler(request, env);
		for (const [key, value] of Object.entries(corsHeaders)) {
			response.headers.set(key, value);
		}
		return response;
	};
}

export default {
	async fetch(request, env) {
		const url = new URL(request.url);

		if (request.method === "OPTIONS") {
			return new Response(null, { status: 204, headers: corsHeaders });
		}

		try {
			if (url.pathname === "/waitlist" && request.method === "POST") {
				return await wrap(handleWaitlist)(request, env);
			}

			if (url.pathname === "/waitlist/count" && request.method === "GET") {
				return await wrap(handleCount)(env);
			}

			if (url.pathname === "/contact" && request.method === "POST") {
				return await wrap(handleContact)(request, env);
			}
		} catch (error) {
			console.error("Worker error:", error);
			return new Response(
				JSON.stringify({ success: false, error: "Internal server error" }),
				{
					status: 500,
					headers: { ...corsHeaders, "Content-Type": "application/json" },
				},
			);
		}

		return new Response(
			JSON.stringify({ success: false, error: "Not found" }),
			{
				status: 404,
				headers: { "Content-Type": "application/json" },
			},
		);
	},
};
