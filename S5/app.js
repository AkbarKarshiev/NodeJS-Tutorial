const express = require('express');

const app = express();
 
app.use('/', (req, res, next) => {
  console.log('This code always runs');
  next();
})

app.use('/test', (req, res, next) => {
  console.log('In test middleware');
  res.send('<h1>Hello from Test func!</h1>');
})

app.use('/', (req, res, next) => {
  console.log('In another middleware');
  res.send('<h1>Hello from Express!</h1>');
})

app.listen(4000);
