// const http = require('http');

// const routes = require('./routes');

// console.log(routes.someText);

// const server = http.createServer(routes);

// server.listen(3000);

const path = require('node:path');

// console.log(path.parse(__filename));
// console.log(path.format(path.parse(__filename)));

// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute('./data.json'));

// console.log(path.join('server', 'data', 'data.json'));
// console.log(path.join('/server', 'data', 'data.json'));
// console.log(path.join('/server', '//data', 'data.json')); // normalizes the path
// console.log(path.join('/server', '//data', '../data.json')); // normalizes the path

console.log(path.resolve('server', 'data', 'data.json')); // adds current working directory at the beginning
console.log(path.resolve('/server', 'data', 'data.json')); // ignores current working directory at the beginning
console.log(path.resolve('/server', '//data', 'data.json')); // uses second argument as root
console.log(path.resolve('/server', '//data', '../data.json')); // uses second argument as root and goes one level up
