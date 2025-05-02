import generateContacts from './scripts/generateContacts.js';
import addOneContact from './scripts/addOneContact.js';
import countContacts from './scripts/countContacts.js';
import getAllContacts from './scripts/getAllContacts.js';
import removeAllContacts from './scripts/removeAllContacts.js';
import removeLastContact from './scripts/removeLastContact.js';

// Приклад виклику функцій:

// Генерація 5 нових контактів
generateContacts(5);

// Додавання одного нового контакту
addOneContact();

// Отримання і виведення всіх контактів
const allContacts = getAllContacts();
console.log(allContacts);

// Отримання кількості контактів
const totalContacts = countContacts();
console.log(`Загальна кількість контактів: ${totalContacts}`);

// Видалення останнього контакту
removeLastContact();

// Видалення всіх контактів
removeAllContacts();
