import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const removeLastContact = async () => {
  const contacts = await readContacts();

  if (contacts.length > 0) {
    contacts.pop();
    await writeContacts(contacts);
    console.log('Останній контакт видалено.');
  } else {
    console.log('Немає контактів для видалення.');
  }
};

removeLastContact();
