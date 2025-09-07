import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs';

export const readContacts = async () => {
  try {
    const rawData = await fs.promises.readFile(PATH_DB, 'utf8');
    return JSON.parse(rawData);
  } catch (err) {
    console.error('Reading file error occurred: ', err);
  }
};
