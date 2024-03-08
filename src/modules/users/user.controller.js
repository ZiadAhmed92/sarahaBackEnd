import { userModel } from "../../../database/model/user.model.js"
import bcrypt from "bcrypt"
import { generateToken } from "../../utils/generateToken.js"
import { sendEmail } from "../../mails/mails.js"
import jwt from "jsonwebtoken"
import { handlingError } from "../../utils/handlingError.js"



let signUp = handlingError(async (req, res) => {

    const { name, age, email, password } = req.body
    sendEmail({ email }).then(() => { console.log("tmm") }).catch((e) => { console.log("error pro", e) })

    const user = await userModel.findOne({ email })

    if (user) return res.json({ message: "Email Is Already Exist" })

    bcrypt.hash(password, 8, async function (err, hash) {
        if (err) return console.log(err)
        await userModel.insertMany({ name, age, email, password: hash })
        res.json({ message: "success" })
    });


})
let signIn = async (req, res) => {
    const { email, password } = req.body

    const user = await userModel.findOne({ email })
    const hash = await bcrypt.compare(password, user.password);
    if (!user || !hash) return res.json({ message: "Incorrect Email Or Password " })

    let token = generateToken({ _id: user._id, email: user.email, name: user.name })
    res.json({ message: "login", token })

}
let getAllUser = async (req, res) => {

    const user = await userModel.find()
    res.json({ message: "success", users: user })
}
let verifyEmail = async (req, res) => {
    const { token } = req.params
    jwt.verify(token, "verifyEmail", async (err, decode) => {

        if (err) return res.json({ message: err })

        await userModel.findOneAndUpdate({ email: decode.email }, { confirmEmail: true })
        res.json({ message: "success" })

    })

}


export {
    signUp,
    signIn,
    getAllUser,
    verifyEmail
}