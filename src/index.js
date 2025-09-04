import path from 'node:path';
import fs from 'node:fs';

// const pathToFile = path.join(process.cwd(), 'temp', 'documents', 'text.txt');

// приклад для побудови шляху із його частин
const pathDir = path.join(process.cwd()); // отримуємо шлях до кореневої директорії викликом метода process.cwd()
const pathToFile = path.join(pathDir, 'temp', 'documents', 'text.txt');

// const ext = path.extname(pathToFile);
// const info = path.parse(pathToFile);

// console.log('File extension: ', ext);
// console.log('File info: ', info);
// console.log('Path to file: ', pathToFile);
//! Synchronous function
const contentSync = fs.readFileSync(pathToFile);
console.log('Synchronous:', contentSync.toString());

//! Async function with callback
fs.readFile(pathToFile, (err, contentCallback) => {
  if (err) {
    console.error('Error reading file: ', err);
    return;
  }
  console.log('Callback: ', contentCallback.toString());
});

//! Async function on promises (different syntaks)
// Modern syntaks
const content = await fs.promises.readFile(pathToFile);
console.log('Promises (modern syntaks): ', content.toString());

// Old syntaks
(async () => {
  const content = await fs.promises.readFile(pathToFile);
  console.log('Promises (old syntaks): ', content);
})();

// console.log(path.parse(pathToFile));
