// const fs = require("fs");

// Experiment 1
// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
//   setImmediate(() => console.log("this is inner setImmediate inside readFile"));
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// setTimeout(() => console.log("this is setTimeout 1"), 0);

// Experiment 2
// for (let i = 0; i < 2000000000; i++) {}

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
//   setImmediate(() => console.log("this is inner setImmediate inside readFile"));

//   process.nextTick(() => console.log("this is inner process.nextTick inside readFile"));
//   Promise.resolve().then(() => console.log("this is inner Promise.resolve inside readFile"));
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// setTimeout(() => console.log("this is setTimeout 1"), 0);

// for (let i = 0; i < 2000000000; i++) {}

// Experiment 3
// setImmediate(() => console.log("this is setImmediate 1"));
// setImmediate(() => {
//   console.log("this is setImmediate 2");

//   process.nextTick(() => console.log("this is inner process.nextTick 1 inside setImmediate 2"));
//   Promise.resolve().then(() => console.log("this is inner Promise.resolve 1 inside setImmediate 2"));
// });
// setImmediate(() => console.log("this is setImmediate 3"));

// Experiment 3
setTimeout(() => console.log("this is setTimeout 1"), 0);
setImmediate(() => console.log("this is setImmediate 1"));

for (let i = 0; i < 2000000000; i++) {}
