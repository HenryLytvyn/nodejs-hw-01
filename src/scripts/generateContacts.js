// import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

// const generateContacts = async (number) => {
//   const rawData = await readContacts(PATH_DB);
//   const textData = rawData.toString();
//   const arrData = JSON.parse(textData);
//   console.log(Array.isArray(arrData));

//   for (let i = 0; i < number; i += 1) {
//     arrData.push(createFakeContact());
//   }

//   writeContacts(JSON.stringify(arrData));
// };

const generateContacts = async (number) => {
  const arrData = await readContacts();

  for (let i = 0; i < number; i += 1) {
    arrData.push(createFakeContact());
  }

  writeContacts(JSON.stringify(arrData));
};

generateContacts(5);
