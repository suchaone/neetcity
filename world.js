var _ = require('underscore');

module.exports = {
  neets: [],
  locations: []
}

// neets take actions every 5 seconds (for testing; lengthen this in prod)
setTimeout(function() {
}, 5000);

function tick() {
  var strNeets = "[" + new Date(new Date().getTime()).toLocaleString() + "] ";
  _.each(module.exports.neets, function(neet) {
    strNeets += neet.name + "; ";
  });
  console.log(strNeets);
  setTimeout(tick, 5000);
}

tick();
