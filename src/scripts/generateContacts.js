import { createFakeContact } from '../utils/createFakeContact.js';
import readContacts from '../utils/readContacts.js';
import writeContacts from '../utils/writeContacts.js';

const generateContacts = async (count = 5) => {
  const contacts = await readContacts();

  for (let i = 0; i < count; i++) {
    const newContact = createFakeContact();
    contacts.push(newContact);
  }

  await writeContacts(contacts);
  console.log(`${count} нових контактів було додано.`);
};

const args = process.argv.slice(2);
const countArg = parseInt(args[0], 10);
const count = Number.isInteger(countArg) ? countArg : 5;

generateContacts(count);
