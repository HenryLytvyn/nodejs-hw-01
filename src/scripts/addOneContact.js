import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const rawData = await readContacts(PATH_DB);
  const textData = rawData.toString();
  const arrData = JSON.parse(textData);
  arrData.push(createFakeContact());

  writeContacts(JSON.stringify(arrData));
};

addOneContact();
