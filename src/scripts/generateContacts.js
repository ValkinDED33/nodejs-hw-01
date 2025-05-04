import { createFakeContact } from '../utils/createFakeContact.js';
import readContacts from '../utils/readContacts.js';
import writeContacts from '../utils/writeContacts.js';

const generateContacts = async (count = 5) => {
  try {
    const contacts = await readContacts();
    const initialLength = contacts.length;

    for (let i = 0; i < count; i++) {
      const newContact = createFakeContact();
      contacts.push(newContact);
    }

    await writeContacts(contacts);

    console.log(`${count} нових контактів було додано.`);
    console.log(
      `Загальна кількість контактів: було ${initialLength}, стало ${contacts.length}`,
    );
  } catch (error) {
    console.error('Помилка при генерації контактів:', error.message);
    process.exit(1);
  }
};

const args = process.argv.slice(2);
const countArg = parseInt(args[0], 10);

if (args.length > 0 && (!Number.isInteger(countArg) || countArg < 1)) {
  console.log(
    'Помилка: кількість контактів повинна бути додатним цілим числом.',
  );
  process.exit(1);
} else {
  const count = Number.isInteger(countArg) ? countArg : 5;
  generateContacts(count);
}
