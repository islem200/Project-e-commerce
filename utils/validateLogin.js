const Joi = require('joi');

const schema = Joi.object({
  
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
});

const validateLogin = (user) =>{
    return schema.validate(user)
};

module.exports = validateLogin