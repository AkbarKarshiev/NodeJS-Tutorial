const fs = require('node:fs/promises');

async function readFile() {
  try {
    const data = await fs.readFile('./data.txt', 'utf-8');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

readFile();

// fs.readFile('./data.txt', 'utf-8')
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

