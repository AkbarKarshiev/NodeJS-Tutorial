## Lesson 48 - Close queue

### Experiment 1 Inference
- Close queue callbacks are executed after all other queues callbacks in a given iteration of the event loop.

# Event Loop Summary 
- The event loop is a C program that orchestrates or co-ordinates the execution of synchronous and asynchronous code in Node.js.
- It co-ordinates the execution of callbacks in six different queues.
- They are nextTick, Promise, timer, I/O, check and close queues.
- We use *process.nextTick()* method to queues into the nextTick queues.
- We *resole* or *reject* a *Promise* to queues into the Promise queue.
- We use *setTimeout* and *setInterval* to queues into the Timer queue.
- Execute and *async* method to queue into the I/O queue.
- Use *setImmediate* function to queue into the check queue.
- Attach *close* event listeners to queue into the close queue.
- The order of execution follows the same order listed here.
- nextTick and Promise queues are executed in between each queue and also in between each callback execution in the timer, I/O, check and close queues.