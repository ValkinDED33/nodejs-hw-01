import { writeFile } from 'fs/promises';
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

const writeContacts = async (contacts) => {
  try {
    const data = JSON.stringify(contacts, null, 2);
    await writeFile(PATH_DB, data, 'utf-8');
    console.log('Данные успешно записаны в файл');
  } catch (error) {
    console.error('Ошибка записи в файл:', error);
  }
};

export default writeContacts;
