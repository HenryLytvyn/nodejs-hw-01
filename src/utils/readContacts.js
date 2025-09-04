import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs';

export const readContacts = async () => {
  try {
    const rawData = await fs.promises.readFile(PATH_DB);
    const text = rawData.toString();
    const array = JSON.parse(text);
    return array;
  } catch (err) {
    console.error('Reading file error occurred: ', err);
  }
};
