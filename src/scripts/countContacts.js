import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const rawData = await readContacts(PATH_DB);
  const textData = rawData.toString();
  const arrData = JSON.parse(textData);

  return arrData.length;
};

console.log(await countContacts());
