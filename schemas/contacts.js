const Joi = require('joi');

const contactSchema = Joi.object({
  name: Joi.string().alphanum().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
});

const statusSchema = Joi.object({
  favorite: Joi.boolean().required(),
}).messages({
  'any.required': 'missing field favorite',
});

module.exports = {
  contactSchema,
  statusSchema,
};
