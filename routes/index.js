const express = require('express');
const router = express.Router();
const sql_connection = require('../lib/mysql_module.js');
const letters = require('../lib/letters.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  letters.findAll().then(results=> {
      res.render('index', { title: 'index', letters: results }); 
    }
  );
});

// 新規投稿画面の表示
router.get('/letters/new', function(req, res, next) {
  res.render('new', { title: 'ハッピーゴート | 文章の入力' });
});

// 新規投稿機能
router.post('/letters/new', function(req, res, next) {
  const post_data = { id: null, subject: req.body.subject, body: req.body.body };

  letters.newLetter(post_data).then(data => {
      res.redirect("/")
    }
  );
});

// 詳細画面
router.get('/letters/:id(\\d+)', function (req, res, next) {
  letters.findById(req.params.id).then(results=> {
      res.render('show', { title: results[0].subject, letter: results[0] }); 
    }
  );
});

module.exports = router;
