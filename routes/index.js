var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var path = require('path');

router.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.render('index.html',{title:"dfdasdf"});
});

router.get('/start', function(req, res, next) {
  res.render('start.html');
});

router.get('/todo', function(req, res, next) {
	var jsonObj = require("../public/json/todo.json");
	res.json(jsonObj);
  	//res.type('application/json').status(200).json({ error: 'message' });
});


module.exports = router;
