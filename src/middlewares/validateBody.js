const { HttpError } = require('../helpers');

const validateBody = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    console.log('validateBody -> error.message:', error.message);
    next(HttpError(400, error.message));
  }
  next();
};

module.exports = validateBody;
