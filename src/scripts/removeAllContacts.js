import { writeContacts } from '../utils/writeContacts.js';

const removeAllContacts = async () => {
  const updatedContacts = [];
  await writeContacts(updatedContacts);
  console.log('Усі контакти було видалено.');
};

removeAllContacts();
