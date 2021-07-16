const express = require('express');
const router = express.Router();
const connection = require('../lib/mysql_module.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  connection.sql_statment('SELECT * FROM letters')
    .then(letters => {
      res.render('index', { title: 'index', letters: letters }); 
    }
  );
});

// 新規投稿
router.get('/letters/new', function(req, res, next) {
  res.render('new', { title: 'ハッピーゴート | 文章の入力' });
});

router.post('/letters/new', function(req, res, next) {
  // console.log(req.body.sentence);
  const subject = req.body.subject;
  const body = req.body.body;
  const post_data = { id: null, subject: subject, body: body };

  connection.connection.query('INSERT INTO letters SET ?', post_data, function (results, fields) {
      // if (error) throw error;
      console.log(post_data['subject'] + "を投稿したよ！");
      // console.log('ID:', results.insertId);
  });

  res.redirect("/");
});

// 詳細画面
router.get('/letters/:id(\\d+)', function (req, res, next) {
  connection.sql_statment('select * FROM letters where id = ' + req.params.id,(error, results) => {
    res.render('show', {title: results[0].subject,letter: results} );
  });
});

module.exports = router;
