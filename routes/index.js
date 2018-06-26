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

router.post('/goJoin',function(req,res,next){//접수 버튼 클릭 시 ajax 통신하는 부분입니다.
  var user_id = req.body.user_id;
  var password = req.body.password;
  var major = req.body.major;
  var school_num = req.body.student_number;
  var grade = req.body.grade_num;
  var score = req.body.score;
  var toeic = req.body.toeic;
  var toss_num = req.body.toss_num;
  var opic_num = req.body.opic_num;
  var volunteer = req.body.volunteer;
  var intern = req.body.intern;
  var competition = req.body.competition;
  var aboard = req.body.aboard;
  var certificate = req.body.certificate;
  var job_Part = req.body.job_Part;

  var sql = 'insert into `ssu_user` (`user_id`,`password`,`grade_num`,`school_num`,`major`,`want_job`,`grade`,`toss_num`,`toeic`,`opic_num`,`volunteer`,`intern`,`competition`,`certificate`,`activity`) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);';

  conn.query(sql,[user_id,password,grade,school_num,major,job_Part,score,toss_num,toeic,opic_num,volunteer,intern,competition,certificate,aboard],function(error,results,fields){
    if(error){
      console.log(error);
      console.log('no');
    }//if
    else{
      console.log(results);
      res.send({result:'success'});//ajax 통신이 성공하면 다시 success 메세지를 보냅니다.
    }
  });//query
});//router post

router.post('/goJoinP',function(req,res,next){//접수 버튼 클릭 시 ajax 통신하는 부분입니다.
  var userP_id = req.body.userP_id;
  var name = req.body.name;
  var password = req.body.password;
  var major = req.body.major;
  var email = req.body.email;
  var introduce = req.body.introduce;
  
  var sql = 'insert into `ssu_userP` (`userP_id`,`name`,`password`,`major`,`email`,`introduce`) values (?,?,?,?,?,?);';

  conn.query(sql,[userP_id,name,password,major,email,introduce],function(error,results,fields){
    if(error){
      console.log(error);
      console.log('no');
    }//if
    else{
      console.log(results);
      res.send({result:'success'});//ajax 통신이 성공하면 다시 success 메세지를 보냅니다.
    }
  });//query
});//router post

module.exports = router;
