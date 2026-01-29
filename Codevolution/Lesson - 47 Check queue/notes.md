## Lesson 47 - Check queue

### Experiment 1 Inference
- Check queue callbacks are executed after Microtask queues callbacks, Timer queue callbacks and I/O queue callbacks are executed.

### Experiment 2 Inference
- Microtask queue callback are executed after I/O callback and before check queue callbacks.

### Experiment 3 Inference
- Microtask queue callback are executed in between check queue callbacks. 

### Experiment 4 Inference
- When running setTimeout with delay 0ms and setImmediate method, the order of execution can never be guaranteed. 