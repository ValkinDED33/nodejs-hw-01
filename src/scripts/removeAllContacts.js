import { writeContacts } from '../utils/writeContacts.js';

const removeAllContacts = () => {
  const updatedContacts = [];

  writeContacts(updatedContacts);

  console.log('All contacts have been removed.');
};

export default removeAllContacts;
