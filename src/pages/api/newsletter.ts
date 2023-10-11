import type { APIRoute } from "astro";
import { NEWSLETTER_BASE_URL } from "src/consts/newsletter";
import { MAILER_LITE_SECRET } from "src/consts/server-constants";

export const POST: APIRoute = async ({ request }) => {
	const formData = await request.json();

	const data = await fetch(`${NEWSLETTER_BASE_URL}subscribers`, {
		method: "POST",
		headers: {
			accept: "application/json",
			"X-MailerLite-ApiDocs": "true",
			"Content-Type": "application/json",
			"X-MailerLite-ApiKey": MAILER_LITE_SECRET,
		},
		body: JSON.stringify({ email: formData.email }),
	});

	const response = await data.json();
	console.log({ response });

	if (response.error) {
		const error: MailerError = response;
		console.log({ response });
		// return new Response(
		// 	JSON.stringify({
		// 		message: error.error_details.message,
		// 		status: error.error.code,
		// 	}),
		// );
		return new Response(null, {
			status: error.error.code,
			statusText: error.error_details.message,
		});
	}

	return new Response(response);
};
type MailerError = {
	error: {
		code: number;
		message: string;
	};
	error_details: {
		message: string;
		errors: any;
	};
};
