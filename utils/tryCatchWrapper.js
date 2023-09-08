const fs = require('fs/promises');

/**Обгортка try-catch для перевикористання */

async function tryCatchWrapper(path, id = '') {
  try {
    const contacts = await fs.readFile(path);

    if (id === '') {
      console.table(JSON.parse(contacts));

      return JSON.parse(contacts);
    }
    const filteredContact = JSON.parse(contacts).find(
      (contact) => contact.id === id
    );

    console.log(filteredContact !== undefined ? filteredContact : null);

    return filteredContact !== undefined ? filteredContact : null;
  } catch (error) {
    console.log(error);
  }
}

module.exports = tryCatchWrapper;
