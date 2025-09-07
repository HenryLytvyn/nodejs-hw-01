import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs';

export const writeContacts = async (updatedContacts) => {
  try {
    await fs.promises.writeFile(
      PATH_DB,
      JSON.stringify(updatedContacts, null, 2),
    );
  } catch (err) {
    console.error('Rewrite file error occurred: ', err);
  }
};
