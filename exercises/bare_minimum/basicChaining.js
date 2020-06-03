/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var Promisification = require('./promisification');
var Constructor = require('./promiseConstructor');



var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  return Constructor.pluckFirstLineFromFileAsync(readFilePath)
    .then(function(username) {
      return Promisification.getGitHubProfileAsync(username);
    })
    .then(function(profile) {
      return new Promise(function(resolve, reject) {
        var stringifyProfile = JSON.stringify(profile);
        fs.writeFile(writeFilePath, stringifyProfile, function(err) {
          if (err) {
            reject(err);
          } else {
            resolve(stringifyProfile);
          }
        });
      });
    });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
