const fs = require("fs");

// Experiment 1
// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));

// Experiment 2
setTimeout(() => console.log("this is setTimeout 1"), 0);

fs.readFile(__filename, () => {
  console.log("this is readFile 1");
});

// setTimeout(() => console.log("this is setTimeout 1"), 2);
// setImmediate(() => console.log("this is setImmediate 1"));

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// Promise.resolve().then(() => {
//   console.log("this is Promise.resolve 2");

//   fs.readFile(__filename, () => {
//     console.log("this is readFile 2 invoked within Promise.resolve 2");
//   });

//   setImmediate(() => console.log("this is setImmediate 2 invoked within Promise.resolve 2"));
// });