var express = require('express');
var router = express.Router();
const { LocalStorage } = require('node-localstorage');

const localStorage = new LocalStorage('./local');

/* GET home page. */
router.get('/', function(req, res, next) {
  usuario=localStorage.Usuario;
  res.render('index', { title: 'Compra & Ahorra', iruser: '/users', user: usuario });
});

router.get('/viewAdm', function(req, res, next){
  usuario=localStorage.Usuario;
  res.render('indexAdm', { title: 'Compra & Ahorra', iruser: '/users', irproduct: '/products/procrear', user: usuario });
});

module.exports = router;
