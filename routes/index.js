var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.render('index.html');
});

router.get('/start', function(req, res, next) {
  
  res.render('start.html');
});


module.exports = router;
