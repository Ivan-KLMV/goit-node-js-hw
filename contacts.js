const fs = require('fs/promises');
const path = require('path');
const nanoid = require('nanoid');

const contactsPath = path.join('db', 'contacts.json');

/**
 * Повертає масив контактів.
 */
async function listContacts() {
  try {
    const contacts = await fs.readFile(contactsPath);

    console.table(JSON.parse(contacts));

    return JSON.parse(contacts);
  } catch (error) {
    console.log(error);
  }
}

/**
 * Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
 */
async function getContactById(contactId) {
  try {
    const contacts = await fs.readFile(contactsPath);
    const contactsJson = JSON.parse(contacts);

    const filteredContact = contactsJson.find(
      (contact) => contact.id === contactId
    );

    console.log(filteredContact !== undefined ? filteredContact : null);

    return filteredContact !== undefined ? filteredContact : null;
  } catch (error) {
    console.log(error);
  }
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
