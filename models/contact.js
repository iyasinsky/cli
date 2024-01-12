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
    owner: {
      type: Schema.Types.ObjectId, // id юзера з MongoDB
      ref: 'user', // назва колекціїї з якої взяли ObjectId
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post('save', mongooseErrorHandler);

const Contact = model('contact', contactSchema);

module.exports = Contact;
