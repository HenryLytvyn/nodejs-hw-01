import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const arrData = await readContacts();
  return arrData.length;
};

console.log(await countContacts());
