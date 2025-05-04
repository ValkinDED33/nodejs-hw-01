import { readFile } from 'fs/promises';
import { PATH_DB } from '..//constants/contacts.js';

const readContacts = async () => {
  try {
    console.log('Шлях до файлу:', PATH_DB);

    const data = await readFile(PATH_DB, 'utf-8');
    const trimmed = data.trim();

    if (!trimmed) {
      console.warn('Файл порожній або містить лише пробіли');
      return [];
    }

    return JSON.parse(trimmed);
  } catch (error) {
    console.error('Помилка читання файлу:', error.message);
    return [];
  }
};

export default readContacts;
