import writeContacts from '../utils/writeContacts.js';

const removeAllContacts = async () => {
  await writeContacts([]);
};

const run = async () => {
  try {
    await removeAllContacts();
    console.log('✅ Усі контакти успішно видалено.');
  } catch (error) {
    console.error('❌ Помилка при видаленні контактів:', error.message);
    process.exit(1);
  }
};

run();
