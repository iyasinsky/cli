const express = require('express');

const router = express.Router();

const ctrl = require('../../controllers/contacts');

const { validateBody } = require('../../middlewares');

const { contactSchema } = require('../../schemas/contacts');

router.get('/', ctrl.getAllContacts);

router.get('/:id', ctrl.getContactById);

router.post('/', validateBody(contactSchema), ctrl.addContact);

router.put('/:id', validateBody(contactSchema), ctrl.updateContactById);

router.delete('/:id', ctrl.deleteContactById);

module.exports = router;
