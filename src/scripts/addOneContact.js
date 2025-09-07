import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const arrData = await readContacts();
  arrData.push(createFakeContact());
  writeContacts(arrData);
};

addOneContact();
