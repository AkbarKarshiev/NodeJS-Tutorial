const express = require('express')

const app = express()

app.use('/users', (req, res, next) => {
  console.log('In users middleware');
  res.send('<h1>Hello from Users Middleware!</h1>')
})

app.use('/', (req, res, next) => {
  console.log('In default middleware');
  res.send('<h1>Hello from default Middleware!</h1>')
})

app.listen(4000)