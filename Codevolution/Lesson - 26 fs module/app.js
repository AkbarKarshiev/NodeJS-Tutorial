const fs = require('node:fs');

console.log('Above readFileSync');

const fileContent = fs.readFileSync('./data.txt', 'utf-8');

console.log(fileContent);

console.log('Below readFileSync');

fs.readFile('./data.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});

console.log('Below readFile');

fs.writeFileSync('./greet.txt', 'Hello from Akbar');

fs.writeFile('./greet.txt', ' Hello from Node.js', { flag: 'a' }, (err) => {
  if (err) {
    console.error(err);
  } else { 
    console.log('File written');
  }
});
