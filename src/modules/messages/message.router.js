import express from "express"
import { addMessage, deleteMessage, getAllMessage } from "./message.controller.js"
import { validation } from "../../middleware/validation.js"
import { messageSchema } from "./message.validation.js"


let routerMessage = express.Router()

routerMessage.get("/message", getAllMessage)
routerMessage.post("/message/:_id", validation(messageSchema), addMessage)
routerMessage.delete("/delete/:_id", deleteMessage)


export default routerMessage