import path from 'path';

// Получаем путь к текущему модулю
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Генерируем правильный путь к db.json
const PATH_DB = path.resolve(__dirname, '../db/db.json'); // Убедитесь, что путь строится верно

export { PATH_DB };
