## Lesson 45 - I/O Queue

### Experiment 1 Inference
- Callbacks in the microtask queues are executed before callback in the I/O queue

### Experiment 2 Inference
- When running setTimeout with delay 0ms and an I/O async method, the order of execution can never be guaranteed
