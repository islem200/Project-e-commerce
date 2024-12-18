const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
});

const validateUser = (user) =>{
    return schema.validate(user)
};

module.exports = validateUser