const crypto = require('node:crypto');

// Synchronous PBKDF2 calls block main thread
// Experiment 1
// const start = Date.now();
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512")
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512")
// console.log("Hash: ", Date.now() - start);

// Experiment 2
const MAX_CALLS = 5;

const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    console.log(`Hash: ${i + 1}`, Date.now() - start);
  });
}

// Output:
// Hash: 1 850
// Hash: 2 856
// Hash: 3 883
// Hash: 4 888
// Hash: 5 1523