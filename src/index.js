import generateContacts from './scripts/generateContacts.js';
import addOneContact from './scripts/addOneContact.js';
import countContacts from './scripts/countContacts.js';
import getAllContacts from './scripts/getAllContacts.js';
import removeAllContacts from './scripts/removeAllContacts.js';
import removeLastContact from './scripts/removeLastContact.js';

const run = async () => {
  await generateContacts(5);

  await addOneContact();

  const allContacts = await getAllContacts();
  console.log(allContacts);

  const totalContacts = await countContacts();
  console.log(`Загальна кількість контактів: ${totalContacts}`);

  await removeLastContact();

  await removeAllContacts();
};

run();
