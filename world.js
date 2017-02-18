var _ = require('underscore');

module.exports = {
  neets: [],
  places: {
    'starbucks': 'Starbucks',
    'library': 'NEET City Public Library',
    'thirstygoon': 'The Thirsty Goon Bar'
  }
}

// neets take actions every 5 seconds (for testing; lengthen this in prod)

function tick() {
  var strNeets = "[" + new Date(new Date().getTime()).toLocaleString() + "] ";
  _.each(module.exports.neets, function(neet) {
    strNeets += neet.name + "; ";
  });
  console.log(strNeets);
  setTimeout(tick, 5000);
}

tick();
