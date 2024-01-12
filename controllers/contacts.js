const Contact = require('../models/contact');

const { HttpError, ctrlWrapper } = require('../helpers');

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page, limit } = req.query;
  const skip = (page - 1) * limit;
  const result = await Contact.find({ owner }, '-createdAt -updatedAt', {
    skip,
    limit,
  }).populate('owner', 'name email');
  res.json(result);
};

const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};

const addContact = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contact.create({ ...req.body, owner });
  res.status(201).json(result);
};

const updateContactById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};

const updateStatusContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};

const deleteContactById = async (req, res) => {
  const result = await Contact.findByIdAndDelete(req.params.id);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.status(200).json({ message: 'Delete success' });
};

module.exports = {
  getAll: ctrlWrapper(getAllContacts),
  getById: ctrlWrapper(getContactById),
  add: ctrlWrapper(addContact),
  updateById: ctrlWrapper(updateContactById),
  updateStatus: ctrlWrapper(updateStatusContact),
  deleteById: ctrlWrapper(deleteContactById),
};
