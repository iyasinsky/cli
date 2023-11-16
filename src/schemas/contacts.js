const Joi = require('joi');

const contactSchema = Joi.object({
  name: Joi.string().alphanum().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
});

module.exports = {
  contactSchema,
};
