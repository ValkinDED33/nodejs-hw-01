import { createFakeContact } from '../utils/createFakeContact.js';
import readContacts from '../utils/readContacts.js';
import writeContacts from '../utils/writeContacts.js';

const addOneContact = async () => {
  try {
    const contacts = await readContacts();

    if (!Array.isArray(contacts)) {
      throw new Error('readContacts не повернув масив');
    }

    const newContact = createFakeContact();
    contacts.push(newContact);
    await writeContacts(contacts);

    console.log(
      `✅ Додано новий контакт: ${newContact.name} (ID: ${newContact.id})`,
    );
  } catch (error) {
    console.error('❌ Помилка при додаванні контакту:', error.message);
  }
};

addOneContact();
