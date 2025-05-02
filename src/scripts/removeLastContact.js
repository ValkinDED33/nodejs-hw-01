import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const removeLastContact = () => {
  const contacts = readContacts();

  if (contacts.length > 0) {
    contacts.pop();

    writeContacts(contacts);

    console.log('Останній контакт видалено.');
  } else {
    console.log('Немає контактів для видалення.');
  }
};

export default removeLastContact;
