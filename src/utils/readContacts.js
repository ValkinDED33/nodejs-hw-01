import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = () => {
  try {
    if (!fs.existsSync(PATH_DB)) {
      console.error('File not found:', PATH_DB);
      return [];
    }

    const data = fs.readFileSync(PATH_DB, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading the file:', error);
    return [];
  }
};
