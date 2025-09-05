import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs';

export const readContacts = async () => {
  try {
    const rawData = await fs.promises.readFile(PATH_DB, { encoding: 'utf8' });
    const array = JSON.parse(rawData);
    return array;
  } catch (err) {
    console.error('Reading file error occurred: ', err);
  }
};
