const express = require('express');

const { validateBody } = require('../../middlewares');

const ctrl = require('../../controllers/auth');

const { registerSchema, loginSchema } = require('../../schemas/user');

const router = express.Router();

// signup
router.post('/register', validateBody(registerSchema), ctrl.register);

// signin
router.post('/login', validateBody(loginSchema), ctrl.login);
module.exports = router;
