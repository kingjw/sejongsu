var express = require('express');
var router = express.Router();

/* GET home page. */

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
});
router.get('/sejongsu/main', function(req, res) {
  res.render('main', { title: 'Express' });
});

module.exports = router;
