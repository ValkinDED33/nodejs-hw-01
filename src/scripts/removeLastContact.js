import readContacts from '../utils/readContacts.js';
import writeContacts from '../utils/writeContacts.js';

const removeLastContact = async () => {
  const contacts = await readContacts();

  if (contacts.length === 0) {
    console.log('⚠️ Немає контактів для видалення.');
    return;
  }

  const removedContact = contacts.pop();
  await writeContacts(contacts);
  console.log(`🗑️ Контакт "${removedContact.name}" успішно видалено.`);
};

const run = async () => {
  try {
    await removeLastContact();
  } catch (error) {
    console.error(
      '❌ Помилка при видаленні останнього контакту:',
      error.message,
    );
    process.exit(1);
  }
};

run();
