const path = require('path');
const nanoid = require('nanoid');
const tryCatchWrapper = require('./utils/tryCatchWrapper');

const contactsPath = path.join('db', 'contacts.json');

/**
 * Повертає масив контактів.
 */
async function listContacts() {
  tryCatchWrapper(contactsPath);
}

/**
 * Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
 */
async function getContactById(contactId) {
  tryCatchWrapper(contactsPath, contactId);
}

/**
 * Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
 */
function removeContact(contactId) {
  return getContactById(contactId);
}

/**
 * Повертає об'єкт доданого контакту.
 */
function addContact(name, email, phone) {
  const id = nanoid.nanoid();
  const newContact = { id, name, email, phone };

  console.log(newContact);

  return newContact;
}

const contactsOperations = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

module.exports = contactsOperations;
