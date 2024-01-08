const express = require('express');

const router = express.Router();

const ctrl = require('../../controllers/contacts');

const {
  validateBody,
  isValidId,
  authentication,
} = require('../../middlewares');

const { contactSchema, statusSchema } = require('../../schemas/contacts');

router.get('/', authentication, ctrl.getAll);

router.get('/:id', isValidId, ctrl.getById);

router.post('/', validateBody(contactSchema), ctrl.add);

router.put('/:id', isValidId, validateBody(contactSchema), ctrl.updateById);

router.patch(
  '/:id/favorite',
  isValidId,
  validateBody(statusSchema),
  ctrl.updateStatus
);

router.delete('/:id', isValidId, ctrl.deleteById);

module.exports = router;
