const EventEmitter = require('node:events');

const emitter = new EventEmitter();

emitter.on('order-pizza', (size, toppings) => {
  console.log(`Order received! Making a ${size} pizza with the following toppings: ${toppings}`);
});

emitter.on('order-pizza', (size) => {
  if (size === 'large') {
    console.log('You get a free drink with your large pizza!');
  }
});

emitter.emit('order-pizza', 'large', 'mushrooms');
