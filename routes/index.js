var express = require('express');
var router = express.Router();
var world = require('../world');
var neetFactory = require('../neet-factory');

neetFactory.setWorld(world);

router.get('/place/:id', function(req, res, next) {
  var neet = neetFactory.spawnNeet(req.params.id);
  res.render('place', { name: neet.name, tagline: neet.tagline });
});

router.get('/', function(req, res, next) {
  res.render('index', { places: world.places });
});

module.exports = router;
