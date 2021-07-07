var express = require('express');
var router = express.Router();
const connection = require('../lib/mysql_module.js');

/* GET home page. */
router.get('/', function (req, res, next) {
    connection.query(
    'SELECT * FROM users',
    (error, results) => {
      console.log(results);
      res.render('index', { title: 'index' });
    }
  );
  // res.render('index', { title: 'Express' });
});

router.get('/writeLetter', function(req, res, next) {
  res.render('writeLetter', { title: 'writeLetter' });
});

router.get('/showLetter', function(req, res, next) {
  res.render('showLetter');
});

module.exports = router;
