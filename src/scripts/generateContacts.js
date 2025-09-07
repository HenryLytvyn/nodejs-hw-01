import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const arrData = await readContacts();

  for (let i = 0; i < number; i += 1) {
    arrData.push(createFakeContact());
  }

  writeContacts(arrData);
};

generateContacts(5);
