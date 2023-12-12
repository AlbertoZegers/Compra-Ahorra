var express = require('express');
var router = express.Router();
const { crearUsuario, logearUsuario } = require('./../controllers/usuario.controller');
const { LocalStorage } = require('node-localstorage');

const localStorage = new LocalStorage('./local');

/* GET users listing. */
router.get('/', function(req, res, next) {
  localStorage.clear();
  res.render('login', { volver: '/', ir: '/users/crear', irAdm: '/viewAdm' });
});

router.get('/crear', function(req, res, next){
  res.render('user', {volver: '/users'});
})

router.post('/usersend', crearUsuario);
router.post('/userget', logearUsuario);

module.exports = router;
