import transporter from "../utils/mailSending.js";

import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";



const sendMail = asyncHandler(async(req,res)=>{
	const {senderMail, subject ,message} = req.body;
	
	const mailOptions = {
		from: process.env.SMTP_MAIL,
		to:process.env.TO_MAIL,
		subject:`<h1>${subject}</h1>`,
		message:`${message}`,
	}
	transporter.sendMail(mailOptions,function(error, info){
		if(error){
			// throw new ApiError(500, "Something went wrong ")
			console.log(error)
		}		
	})
	return res.status(200).json(new ApiResponse(200, {},"mail sent succesfull"))
})

export {
	sendMail
}