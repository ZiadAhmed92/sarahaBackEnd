import Joi from "joi";

export let messageSchema = Joi.object({
    message: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

})

// export let signInSchema = Joi.object({
//     email: Joi.string()
//         .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
//     password: Joi.string()
//         .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
// })