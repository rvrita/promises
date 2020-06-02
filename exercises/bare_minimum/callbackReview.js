/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath) {
  var counter = 0;
  var acc = '';
  request.on('data', (chunk) => {
    acc += chunk;
    counter++;
    if (counter > 0) {
      request.end(acc);
    }
  });
  request.on('end', (data) => {
    fs.readFile();
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url) {
  // TODO
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
