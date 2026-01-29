## Lesson 41 - Network I/O

#### Notes
- https.request is a network input/output operation and not a CPU bound operation
- It does not use the thread pool
- Libuv instead delegates the work to the operating system kernel and whenever possible, 
it will poll the kernel and see if the request has completed

#### Libuv and Async Methods Summary
- In Node.js, async methods are handled by libuv.
- They are handled in two different ways:
1. Native async mechanism
2. Thread pool
- Whenever possible, Libuv will use native async mechanism in the OS so as to avoid blocking the main thread.
- Since this is a part of the kernel, there is different mechanism for each OS. We have  ***epoll*** for Linux, ***Kqueue*** for MacOS and ***IO Completion Port*** on Windows.
- Relying on native async mechanisms makes Node scalable as the only limitation is the operating system kernel.
- Example of this type is a network I/O operation
- If there is no native async support and the task is file I/O or CPU intensive, libuv uses the thread pool to avoid blocking the main thread.
- Although the thread pool preserves asynchronicity with respect to Node's main thread, it can still become a bottleneck if al threads are busy