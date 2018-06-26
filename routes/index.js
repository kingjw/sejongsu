var express = require('express');
var router = express.Router();

/* GET home page. */
<<<<<<< HEAD
router.get('/sejongsu/login', function(req, res) {
  res.render('login', { title: 'Express' });
});
router.get('/sejongsu/loginP', function(req, res) {
  res.render('loginP', { title: 'Express' });
});
router.get('/sejongsu/join', function(req, res) {
  res.render('join', { title: 'Express' });
});
router.get('/sejongsu/joinP', function(req, res) {
  res.render('joinP', { title: 'Express' });
=======
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
>>>>>>> ca7e29fcd9d9536b31d2d5110ca396e281cc3837
});

module.exports = router;
