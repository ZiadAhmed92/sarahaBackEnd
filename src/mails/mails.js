import { createTransport } from "nodemailer";
import { templateHtml } from "./template.html.js";
import jwt from "jsonwebtoken";
export async function sendEmail(option) {
    let token = jwt.sign({ email: option.email },"verifyEmail")
    
    const transporter = createTransport({
        service: "gmail",
        auth: {
            // TODO: replace `user` and `pass` values from <https://forwardemail.net>
            user: "za693387@gmail.com",
            pass: "hhfj dpul rdgi lcco",
        },
    });

    // async..await is not allowed in global scope, must use a wrapper

    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: '"Ziad ahmed 👻" <za693387@gmail.com>', // sender address
        to: option.email, // list of receivers
        subject: "Hello ✔", // Subject line
        html: templateHtml(token), // html body
    })
    console.log(info)
};