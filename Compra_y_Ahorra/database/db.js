const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('bdcya', 'postgres','amver0na',{
    host: 'localhost',
    dialect: 'postgres'
  })

module.exports = sequelize;