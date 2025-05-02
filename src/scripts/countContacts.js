import { readContacts } from '../utils/readContacts.js';

const countContacts = () => {
  const contacts = readContacts();

  return contacts.length;
};

export default countContacts;
