var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbconfig = require('../database.js');
var conn = mysql.createConnection(dbconfig);
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
router.get('/sejongsu/mypage', function(req, res) {
  res.render('mypage', { title: 'Express' });
});
router.get('/sejongsu/proflist', function(req, res) {
  res.render('ps', { title: 'Express' });
});


router.post('/gologin',function(req,res,next){
  var id = req.body.id;
  var password = req.body.password;

  var sql = "select * from ssu_user where user_id=?";
  conn.query(sql,[id], function(error,results,fields){
    if(error){
      console.log(id);

    } else {
      var user = results[0];
      if(!user){
        console.log('id fail');
        res.send({result:'error'});
      } else if(password == user.password){
        req.session.authId = id;
        req.session.major = user.major;
        req.session.job_Part = user.want_job;
        req.session.save(function() {
          res.send({result:'success'});
        });
      } else {
        res.send({result:'error'});
      }
    }
  });
});

router.post('/gologinP',function(req,res,next){
  var id = req.body.id;
  var password = req.body.password;

  var sql = "select * from ssu_userP where user_id=?";
  conn.query(sql,[id], function(error,results,fields){
    if(error){
      console.log(id);

    } else {
      var user = results[0];
      if(!user){
        console.log('id fail');
        res.send({result:'error'});
      } else if(password == user.password){
        req.session.authId = id;
        req.session.major = user.major;
        req.session.job_Part = user.want_job;
        req.session.save(function() {
          res.send({result:'success'});
        });
      } else {
        res.send({result:'error'});
      }
    }
  });
});

module.exports = router;
