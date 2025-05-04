import { writeFile } from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

/**
 * Записує контакти у файл.
 * @param {Array} contacts Масив контактів для збереження.
 */
const writeContacts = async (contacts) => {
  if (!Array.isArray(contacts)) {
    console.error('Помилка: contacts повинні бути масивом.');
    return;
  }

  try {
    const data = JSON.stringify(contacts, null, 2);
    await writeFile(PATH_DB, data, 'utf-8');
    console.log('✅ Контакти успішно збережено.');
  } catch (error) {
    console.error('❌ Помилка запису файлу:', error.message);
  }
};

export default writeContacts;
