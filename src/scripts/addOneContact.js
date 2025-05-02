import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const addOneContact = () => {
  const contacts = readContacts();

  const newContact = createFakeContact();

  contacts.push(newContact);

  writeContacts(contacts);

  console.log('Один новий контакт було додано.');
};

export default addOneContact;
