const { Schema, model } = require('mongoose');
const { mongooseErrorHandler } = require('../helpers');

// Схема валідації request для збереження в БД
const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post('save', mongooseErrorHandler);

const Contact = model('contact', contactSchema);

module.exports = Contact;
