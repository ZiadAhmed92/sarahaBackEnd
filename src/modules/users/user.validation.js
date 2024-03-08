import Joi from "joi";

export let signUpSchema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    age: Joi.number().required(),
    email: Joi.string()
        .email(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    
})

export let signInSchema = Joi.object({
    email: Joi.string()
        .email(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
})