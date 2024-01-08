const Joi = require('joi');

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
});

const statusSchema = Joi.object({
  favorite: Joi.boolean().required(),
}).messages({
  'any.required': 'missing field',
});

module.exports = {
  contactSchema,
  statusSchema,
};
