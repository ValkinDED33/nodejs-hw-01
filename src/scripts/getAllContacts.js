import { readContacts } from '../utils/readContacts.js';

const getAllContacts = () => {
  const contacts = readContacts();

  return contacts;
};

export default getAllContacts;
