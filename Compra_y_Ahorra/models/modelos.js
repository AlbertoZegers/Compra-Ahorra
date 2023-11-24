const sequelize = require('./../database/db');
const ProductoModel = require('./Producto');

async function conexion(){
    try {
      await sequelize.authenticate();
      await sequelize.sync({force: true});
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }

module.exports = conexion();