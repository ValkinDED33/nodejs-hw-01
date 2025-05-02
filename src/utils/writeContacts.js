import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = (contacts) => {
  try {
    const data = JSON.stringify(contacts, null, 2);
    fs.writeFileSync(PATH_DB, data, 'utf-8');
  } catch (error) {
    console.error('Error writing to file:', error);
  }
};
