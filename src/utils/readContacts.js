// import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs';

export const readContacts = async (file) => {
  try {
    // const rawData = await fs.promises.readFile(file);
    // const text = rawData.toString();
    // const array = JSON.parce(text);
    // return array;

    return fs.promises.readFile(file);
  } catch (err) {
    console.error('Reading file error occurred: ', err);
  }
};

// console.log(await readContacts(PATH_DB));
