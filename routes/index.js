var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/writeLetter', function(req, res, next) {
  res.render('writeLetter', { title: 'writeLetter' });
});

router.get('/showLetter', function(req, res, next) {
  res.render('showLetter');
});

module.exports = router;
