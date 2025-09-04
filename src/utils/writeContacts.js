import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs';

export const writeContacts = async (updatedContacts) => {
  try {
    return fs.promises.writeFile(PATH_DB, updatedContacts);
  } catch (err) {
    console.error('Rewrite file error occurred: ', err);
  }
};

// writeContacts("['Hello world', 'tototo']");
