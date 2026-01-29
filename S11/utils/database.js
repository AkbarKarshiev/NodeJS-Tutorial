const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodejs-tutorial', 'root', 'gentoo', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = sequelize;