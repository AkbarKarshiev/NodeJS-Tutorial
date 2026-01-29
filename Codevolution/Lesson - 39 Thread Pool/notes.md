## Lesson 39 - Thread Pool

### Experiment 1 Inference
- Every method in node.js that has the "sync" suffix always runs on the main thread and is blocking

### Experiment 2 Inference
- A few async methods like fs.readFile and crypto.pbkdf2 run on a separate thread in libuv's thread pool. They do run synchronously in their own thread but as far as the main thread is concerned, it appears as if the method is running asynchronously.