import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  const rawData = await readContacts(PATH_DB);
  const textData = rawData.toString();
  const arrData = JSON.parse(textData);
  return arrData;
};

console.log(await getAllContacts());
