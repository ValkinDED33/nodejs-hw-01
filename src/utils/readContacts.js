import { readFile } from 'fs/promises';
import path from 'path';

const PATH_DB = path.join(
  'D:',
  'GO_IT',
  'nodejs',
  'nodejs-hw-01',
  'src',
  'db',
  'db.json',
);

const readContacts = async () => {
  try {
    const data = await readFile(PATH_DB, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Ошибка чтения файла:', error);
    return [];
  }
};

export default readContacts;
