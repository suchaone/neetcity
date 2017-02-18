var express = require('express');
var router = express.Router();
var _ = require('underscore');
var world = require('../world');
var neetFactory = require('../neet-factory');

neetFactory.setWorld(world);

router.get('/place/:id', function(req, res, next) {
  var neet = neetFactory.spawnNeet(req.params.id);
  res.render('place', {
    placename: world.places[req.params.id],
    name: neet.name,
    tagline: neet.tagline,
    neets: _.where(world.neets, {place:req.params.id})
  });
});

router.get('/', function(req, res, next) {
  res.render('index', { places: world.places });
});

module.exports = router;
