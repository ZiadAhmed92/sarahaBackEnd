import { userModel } from "../../../database/model/user.model.js"
import bcrypt from "bcrypt"
import { generateToken } from "../../utils/generateToken.js"
let signUp = async (req, res) => {

    const { name, age, email, password } = req.body

    const user = await userModel.findOne({email})

    if (user) return res.json({ message: "Email Is Already Exist" })

    const hash = bcrypt.hashSync(password, process.env.ROUND);

    await userModel.insertMany({ name, age, email, password: hash })

    res.json({ message: "success" })
}
let signIn = async (req, res) => {

    const { email, password } = req.body

    const user = await userModel.findOne({email})
    const hash = await bcrypt.compare(password, user.password);
    if (!user || !hash){
      return res.json({ message: "Incorrect Email Or Password " })
    }
    let token = generateToken({_id:user._id , name:user.name})
    res.json({ message: "login", token  })
}
let getAllUser = async (req, res) => {

    const user = await userModel.find()   
    res.json({ message: "success", users: user })
}


export {
    signUp,
    signIn,
    getAllUser
}