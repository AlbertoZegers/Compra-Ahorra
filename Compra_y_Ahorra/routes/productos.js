var express = require('express');
var router = express.Router();
const { crearProducto, getProductos, borrarProducto, updateProducto, getProducto } = require('./../controllers/producto.controller')

router.get('/procrear', function(req, res, next){
    res.render('producto', { irAdm: '/viewAdm' });
});
router.get('/proedit/:id', function(req, res, next){
    res.render('editProducto', { irAdm: '/viewAdm' });
});

router.post('/prosend', crearProducto);
router.get('/progets', getProductos);
router.delete('/prodel/:id', borrarProducto);
router.get('/proget/:id', getProducto)
router.put('/proupd/:id', updateProducto);

module.exports = router;