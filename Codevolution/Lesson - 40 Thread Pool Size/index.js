const crypto = require('node:crypto');

process.env.UV_THREADPOOL_SIZE = '5'; // Change libuv thread pool size to 5. Default is 4
const MAX_CALLS = 16;

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

// run with command: SET UV_THREADPOOL_SIZE=num_of_thread && node index.js
// max number of threads on my current machine is 16 AMD Ryzen 7 5800HS