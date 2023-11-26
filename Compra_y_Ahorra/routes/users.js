var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', { volver: '/', ir: '/users/crear', irAdm: '/viewAdm' });
});

router.get('/crear', function(req, res, next){
  res.render('user', {volver: '/users'});
})

module.exports = router;
