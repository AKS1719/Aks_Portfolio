import {Router} from 'express'
import {sendMail} from "../controllers/contact.controller.js"

const router = Router();

router.route("/sendmail").post(sendMail)

export default router


