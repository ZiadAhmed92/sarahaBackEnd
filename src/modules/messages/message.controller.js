import { messageModel } from "../../../database/model/message.model.js";

let addMessage = async (req, res) => {
    const { message } = req.body
    const { _id } = req.params

    let messages = await messageModel.insertMany({ message, receiverId: _id })

    res.json({ message: "success", messages })
}
let getAllMessage = async (req, res) => {
    const { receiverId } = req.body
    const messages = await messageModel.find({ receiverId })

    res.json({ message: "success", messages })
}
let deleteMessage = async (req, res) => {
    const { _id } = req.params
    const messages = await messageModel.findByIdAndDelete({ _id })
    if (messages) return res.json({ message: "success", messages })
    res.json({ message: "message not found" })
}
export {
    addMessage,
    getAllMessage,
    deleteMessage
}