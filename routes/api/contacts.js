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

router.get('/:id', authentication, isValidId, ctrl.getById);

router.post('/', authentication, validateBody(contactSchema), ctrl.add);

router.put(
  '/:id',
  authentication,
  isValidId,
  validateBody(contactSchema),
  ctrl.updateById
);

router.patch(
  '/:id/favorite',
  authentication,
  isValidId,
  validateBody(statusSchema),
  ctrl.updateStatus
);

router.delete('/:id', authentication, isValidId, ctrl.deleteById);

module.exports = router;
