const express = require('express');

const { validateBody, authentication } = require('../../middlewares');

const ctrl = require('../../controllers/auth');

const { registerSchema, loginSchema } = require('../../schemas/user');

const router = express.Router();

// signup
router.post('/register', validateBody(registerSchema), ctrl.register);

// signin
router.post('/login', validateBody(loginSchema), ctrl.login);

router.get('/current', authentication, ctrl.getCurrent);

router.post('/logout', authentication, ctrl.logout);

module.exports = router;
