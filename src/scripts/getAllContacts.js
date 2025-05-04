import readContacts from '../utils/readContacts.js';

const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (error) {
    console.error('Помилка при зчитуванні контактів:', error.message);
    return [];
  }
};

const run = async () => {
  const contacts = await getAllContacts();
  if (contacts.length === 0) {
    console.log('Контактів не знайдено.');
  } else {
    console.log('Список контактів:');
    console.table(contacts);
  }
};

run();
