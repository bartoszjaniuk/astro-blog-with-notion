import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import type Mail from "nodemailer/lib/mailer";
import { BREVO_PASSWORD } from "src/consts/server-constants";

export const POST: APIRoute = async ({ request }) => {
	if (request.headers.get("Content-Type") === "application/json") {
		const formData = await request.json();

		const transporter = nodemailer.createTransport({
			host: "smtp-relay.brevo.com",
			port: 587,
			auth: {
				user: "janiukbartosz@gmail.com",
				pass: BREVO_PASSWORD,
			},
		});

		const mailOptions: Mail.Options = {
			from: "no-reply@czasopismo-stomatologiczne.pl",
			to: "janiukbartosz@gmail.com",
			subject: "Aktualny numer - dostęp",
			text: JSON.stringify(formData),
		};
		const res = await transporter.sendMail(mailOptions);
		console.log(res.response, "siu");

		return new Response(JSON.stringify(formData), {
			status: 200,
		});
	}
	return new Response(null, { status: 400 });
};
