import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: process.env.SMTP_PORT,
	secure: false, // true for port 465, false for other ports
	auth: {
		user: process.env.SMTP_MAIL,
		pass: process.env.NODE_MAILER_PASSWORD,
	},
});



export default transporter;

