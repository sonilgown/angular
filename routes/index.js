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

router.get('/sports', function(req,res,next){
	res.render('sports/app.html');
});

router.get('/todo', function(req, res, next) {
	var jsonObj = require("../public/json/todo.json");
	res.json(jsonObj);
  	//res.type('application/json').status(200).json({ error: 'message' });
});

router.get('/wysiwyg', function(req,res,next){
	res.render('wysiwygeditor.html');
});

router.get('/wysiwygtxt', function(req,res,next){
	res.render('wysiwygTxt.html');
});


module.exports = router;
