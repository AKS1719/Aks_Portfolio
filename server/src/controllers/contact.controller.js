import nodemailer from 'nodemailer'
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";





const sendMail = asyncHandler(async(req,res)=>{
	const {senderMail, subject ,message} = req.body;
	// console.log(process.env)
	const mailOptions = {
		from: process.env.SMTP_MAIL,
		to:process.env.TO_MAIL,
		subject:subject,
		html:`Mail Recieved From ${sendMail}<br>Requested Message from Portfolio <br>${message}`,
	}
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
})

export {
	sendMail
}