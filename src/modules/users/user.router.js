import express from "express"
import { getAllUser, signIn, signUp, verifyEmail } from "./user.controller.js"
import { authToken } from "../../middleware/auth/authToken.js"
import { validation } from "../../middleware/validation.js"
import { signInSchema, signUpSchema } from "./user.validation.js"

let router = express.Router()

router.get("/user",  authToken, getAllUser)
router.get("/user/:token", verifyEmail)
router.post("/signUp", validation(signUpSchema), signUp)
router.post("/signIn", validation(signInSchema), signIn)

export default router