var express = require('express');
var router = express.Router();
const { crearProducto, getProducto, getProductos } = require('./../controllers/producto.controller')

router.get('/procrear', function(req, res, next){
    res.render('producto', { irAdm: '/viewAdm' });
});

router.post('/prosend', crearProducto);

module.exports = router;