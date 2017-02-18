var express = require('express');
var router = express.Router();
var world = require('../world');
var neetFactory = require('../neet-factory');

neetFactory.setWorld(world);

/* GET home page. */
router.get('/', function(req, res, next) {
  var neet = neetFactory.spawnNeet();
  res.render('index', { name: neet.name, tagline: neet.tagline });
});

module.exports = router;
