
import mongoose from "mongoose";

let massageSchema = mongoose.Schema({
    message: {
        type: String,
        required: [true, 'name required']
    },
    receiverId: {
        type: mongoose.Types.ObjectId,
        
    },
   
   
})

export const messageModel = mongoose.model('message', massageSchema)