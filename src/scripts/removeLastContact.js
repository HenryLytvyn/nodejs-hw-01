import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const arrData = await readContacts();

  if (arrData.length) {
    arrData.pop();
    writeContacts(arrData);
  }
};

removeLastContact();
