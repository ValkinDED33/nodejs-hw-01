import readContacts from '../utils/readContacts.js';

const countContacts = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('Немає контактів у файлі.');
    } else {
      console.log(`Загальна кількість контактів: ${contacts.length}`);
    }

    return contacts.length;
  } catch (error) {
    console.error('Помилка при підрахунку контактів:', error.message);
  }
};

countContacts();
