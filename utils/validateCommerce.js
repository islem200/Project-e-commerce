const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().min(4).max(50).required(),
  brand: Joi.string().min(5).max(50).required(),
  price: Joi.number().min(100).max(8525).required(),
  contInStock: Joi.number(),
  rating: Joi.number(),
  numReviews: Joi.number(),
  
});

const validateProduct = (product) => {
  return schema.validate(product);
};

module.exports = validateProduct;