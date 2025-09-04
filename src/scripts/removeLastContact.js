import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const rawData = await readContacts(PATH_DB);
  const textData = rawData.toString();
  const arrData = JSON.parse(textData);

  if (arrData.length) {
    arrData.pop();
    writeContacts(JSON.stringify(arrData));
  }
};

removeLastContact();
