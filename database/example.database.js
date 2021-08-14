const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'YOUR-USER', 'YOUR-PASSWORD', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;