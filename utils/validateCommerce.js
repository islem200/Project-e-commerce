const Joi = require("joi");

const schema = Joi.object({
  user: Joi.string(),
  name: Joi.string().min(4).max(50).required(),
  brand: Joi.string().min(5).max(50).required(),
  price: Joi.number().min(100).max(8525).required(),
  contInStock: Joi.number().required(),
  rating: Joi.number(),
  numReviews: Joi.number(),
  description: Joi.string(),
  category: Joi.string(),
  image: Joi.string(),
});

const validateProduct = (product) => {
  return schema.validate(product);
};

module.exports = validateProduct;
