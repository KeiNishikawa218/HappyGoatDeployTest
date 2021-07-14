var express = require('express');
var router = express.Router();
const connection = require('../lib/mysql_module.js');

/* GET home page. */
router.get('/', function (req, res, next) {
    connection.query('SELECT * FROM letters',(error, results) => {
      console.log(results);
      res.render('index', { title: 'index',letters: results });
    }
  );
  // res.render('index', { title: 'Express' });
});

// 新規投稿
router.get('/new', function(req, res, next) {
  res.render('new', { title: 'ハッピーゴート | 文章の入力' });
});
router.post('/new', function(req, res, next) {
  // console.log(req.body.sentence);
  const subject = req.body.subject;
  const body = req.body.body;
  const post_data = { id: null, subject: subject, body: body };

  // // const connection = mysql.createConnection(mysql_setting);

  connection.query('INSERT INTO letters SET ?', post_data, function (results, fields) {
      // if (error) throw error;
      console.log(post_data + "を投稿したよ！");
      // console.log('ID:', results.insertId);
  });
  res.redirect("/");
});

// 詳細画面
router.get('/letters/:id', function(req, res, next) {
  console.log(req.params.id);
  res.render('showLetter');
});

module.exports = router;
