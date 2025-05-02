import { readFile } from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

const readContacts = async () => {
  try {
    const data = await readFile(PATH_DB, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading the file:', error);
    return [];
  }
};

export default readContacts;
