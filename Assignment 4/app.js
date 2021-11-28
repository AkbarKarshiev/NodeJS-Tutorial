const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const addUserRoutes = require('./routes/add-user');
const usersRoutes = require('./routes/users');

app.use(bodyParser.urlencoded({extended: false})); 
app.use(express.static(path.join(__dirname, 'public')));

app.use(addUserRoutes.routes);
app.use(usersRoutes);

app.use((req, res, next) => {
  console.log('404');
  res.status(404).render('404', { pageTitle: 'Page Not Found', path: '' });
})

app.listen(5000);
