import nodemailer from 'nodemailer'
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";





const sendMail = asyncHandler(async(req,res)=>{
	const {senderMail, subject ,message} = req.body;
	const mailOptions = {
		from: process.env.SMTP_MAIL,
		to: process.env.TO_MAIL,
		subject: subject,
		html: `
		<html>
		<head>
			<style>
				body {
					font-family: 'Arial', sans-serif;
					margin: 0;
					padding: 0;
					background-color: #f4f4f4;
				}
				.email-container {
					width: 100%;
					max-width: 600px;
					margin: auto;
					background-color: #ffffff;
					border-radius: 8px;
					box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
					overflow: hidden;
				}
				.header {
					background-color: #007BFF;
					padding: 20px;
					text-align: center;
					color: white;
					font-size: 24px;
					font-weight: bold;
				}
				.banner {
					width: 100%;
					max-height: 200px;
					display: block;
					object-fit: cover;
				}
				.content {
					padding: 20px;
					text-align: left;
				}
				.footer {
					padding: 10px;
					background-color: #f1f1f1;
					text-align: center;
					font-size: 12px;
					color: #555;
				}
			</style>
		</head>
		<body>
			<div class="email-container">
				<!-- Banner Image -->
				<img src="https://vaiaksh-music-api.vercel.app/Dashboard/image/linkedcover.png" alt="Banner Image" class="banner" />
				<div class="header">New Portfolio Message</div>
				<div class="content">
					<p><strong>From:</strong> ${senderMail}</p>
					<p><strong>Subject:</strong> ${subject}</p>
					<p><strong>Message:</strong></p>
					<p>${message}</p>
				</div>
				<div class="footer">
					<p>Sent via your Portfolio Contact Form</p>
				</div>
			</div>
		</body>
		</html>
		`
	};
	
	const mailOptions2 = {
		from: process.env.SMTP_MAIL,
		to: senderMail,
		subject: subject,
		html: `
		<html>
		<head>
			<style>
				body {
					font-family: Arial, sans-serif;
					margin: 0;
					padding: 0;
					background-color: #f4f4f4;
				}
				.email-container {
					width: 100%;
					max-width: 600px;
					margin: auto;
					background-color: #ffffff;
					border-radius: 8px;
					box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
				}
				.banner {
					width: 100%;
					height: 200px;
					background-image: url('https://vaiaksh-music-api.vercel.app/Dashboard/image/linkedcover.png'); /* Replace with your banner image URL */
					background-size: cover;
					background-position: center;
					border-top-left-radius: 8px;
					border-top-right-radius: 8px;
				}
				.content {
					padding: 20px;
					text-align: center;
				}
				.thank-you {
					font-size: 24px;
					font-weight: bold;
					color: #333;
				}
				.message {
					font-size: 16px;
					color: #555;
					line-height: 1.5;
				}
				.footer {
					margin-top: 20px;
					font-size: 12px;
					color: #aaa;
				}
			</style>
		</head>
		<body>
			<div class="email-container">
				<div class="banner"></div>
				<div class="content">
					<p class="thank-you">Thank You for Reaching Out!</p>
					<p class="message">Hello ${senderMail},<br> I have received your message with the subject: ${subject}. I will get back to you as soon as possible. In the meantime, feel free to browse my portfolio.</p>
				</div>
				<div class="footer">
					<p>Sent by Akshat Kumar Sinha</p>
					<p>Web Developer<br> & Mobile Developer</p>
				</div>
			</div>
		</body>
		</html>
		`
	};
	
	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: process.env.SMTP_PORT,
		secure: false, // true for port 465, false for other ports
		auth: {
			user: process.env.SMTP_MAIL,
			pass: process.env.NODE_MAILER_PASSWORD,
		},
	});
	transporter.sendMail(mailOptions,function(error, info){
		if(error){
			throw new ApiError(500, "Something went wrong ")
			// console.log(error)
		}		
		else return res.status(200).json(new ApiResponse(200, {},"mail sent succesfull"))
	})
	transporter.sendMail(mailOptions2,function(error, info){
		if(error){
			throw new ApiError(500, "Something went wrong ")
			// console.log(error)
		}		
		else return res.status(200).json(new ApiResponse(200, {},"mail sent succesfull"))
	})
})

export {
	sendMail
}