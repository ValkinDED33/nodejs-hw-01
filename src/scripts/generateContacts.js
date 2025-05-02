import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = (count) => {
  const contacts = readContacts();

  for (let i = 0; i < count; i++) {
    const newContact = createFakeContact();
    contacts.push(newContact);
  }

  writeContacts(contacts);

  console.log(`${count} нових контактів було додано.`);
};

export default generateContacts;
