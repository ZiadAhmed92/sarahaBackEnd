
import mongoose from "mongoose";

let userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name required']
    },
    age: {
        type: Number,
        min:10,
        max:80,
        required: [true, 'age required']
    },
    email: {
        type: String,
        required: [true, 'email required'],
       
    },
    password: {
        type: String,
        required: [true, 'password required'],

    },
    confirmEmail: {
        type: Boolean,
        default:false,
       

    }
})

export const userModel= mongoose.model('user' , userSchema)