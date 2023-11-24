const sequelize = require('./../database/db');
const { DataTypes } = require('sequelize');

const ProductoModel = sequelize.define('productos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    stock: {
        type: DataTypes.INTEGER
    },
    precio: {
        type: DataTypes.FLOAT
    },
    fechaLlegada: {
        type: DataTypes.DATE
    },
    descripcion: {
        type: DataTypes.STRING
    }
})

module.exports = ProductoModel;