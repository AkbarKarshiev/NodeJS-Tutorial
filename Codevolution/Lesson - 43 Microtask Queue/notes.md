## Lesson 41 - Event Loop

### Experiment 1 Inference
- All user written synchronous JavaScript code takes priority over async code that the runtime would like to eventually execute

### Experiment 2 Inference
- All callbacks in nextTick queue are executed before callbacks in promise queue

### process.nextTick()
- Use of process.nextTick is discouraged as it can cause the rest of the event loop to starve
- If you endlessly call process.nextTick. the control will never make it past the microtask queue

***Two main reasons to use process.nextTick***
1. To allow users to handle errors, cleanup any then unneeded resources, or perhaps try the request again before the event loop continues
2. To allow a callback to run after the call stack has unwound but before the event loop continues
