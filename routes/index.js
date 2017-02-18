var express = require('express');
var router = express.Router();
var _ = require('underscore');
var world = require('../world');
var neetFactory = require('../neet-factory');

neetFactory.setWorld(world);

router.get('/place/:id', function(req, res, next) {
  res.render('place', {
    placename: world.places[req.params.id],
    neets: _.where(world.neets, {place:req.params.id}),
    spawnURL: '/place/' + req.params.id + '/spawn'
  });
});

// should be a post
router.get('/place/:id/spawn', function(req, res, next) {
  neetFactory.spawnNeet(req.params.id);
  res.redirect('/place/' + req.params.id);
});

router.get('/', function(req, res, next) {
  res.render('index', { places: world.places });
});

module.exports = router;
