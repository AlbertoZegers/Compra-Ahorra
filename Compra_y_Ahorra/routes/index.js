var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Compra & Ahorra', iruser: '/users' });
});

router.get('/viewAdm', function(req, res, next){
  res.render('indexAdm', { title: 'Compra & Ahorra', iruser: '/users', irproduct: '/products/procrear', volver: '/' });
});

module.exports = router;
