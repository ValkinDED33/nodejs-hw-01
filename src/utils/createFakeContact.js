// src/utils/createFakeContact.js
import { faker } from '@faker-js/faker';

/**
 * Створює фейковий контакт із випадковими даними.
 * @returns {Object} Контакт з полями: id, name, email, phone, job.
 */
export const createFakeContact = () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  phone: faker.phone.number('+48 ###-###-###'),
  job: faker.person.jobTitle(),
});
