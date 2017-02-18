var express = require('express');
var router = express.Router();
var neetFactory = require('../neet-factory');

/* GET home page. */
router.get('/', function(req, res, next) {
  var neet = neetFactory.spawnNeet();
  res.render('index', { name: neet.name, tagline: neet.tagline });
});

module.exports = router;
