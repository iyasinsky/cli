const fs = require('fs/promises');
const path = require('path');
const { nanoid } = require('nanoid');

const contactsPath = path.join(__dirname, 'contacts.json');

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const contact = contacts.find((contact) => contact.id === contactId);
  return contact || null;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const contactToDelete = contacts.findIndex(({ id }) => id === contactId);
  if (contactToDelete === -1) return null;
  const [deletedContact] = contacts.splice(contactToDelete, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return deletedContact;
};

const addContact = async (body) => {
  const contacts = await listContacts();
  const contactToAdd = {
    id: nanoid(),
    ...body,
  };
  contacts.push(contactToAdd);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return contactToAdd;
};

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
  const contactToUpdate = contacts.findIndex(({ id }) => id === contactId);
  if (contactToUpdate === -1) return null;
  contacts[contactToUpdate] = { id: contactId, ...body };
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return contacts[contactToUpdate];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
