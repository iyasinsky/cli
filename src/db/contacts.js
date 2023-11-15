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

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const contactToAdd = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(contactToAdd);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return contactToAdd;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
