var mdb = require('moviedb')(process.env.TMDB_API_KEY);
var rp = require('request-promise');
var _ = require('lodash');

var tmdb = module.exports = function(path) {
  var url = 'http://api.themoviedb.org/3/' + path + '?api_key=' + process.env.TMDB_API_KEY;
  var args = arguments[1];
  console.log(args);
  _.forEach(args, function(value, key) {
    url += '&' + key + '=' + value;
  });
  console.log(url);
  return rp(url);
};

var getNewAuthRequestToken = module.exports.getNewAuthRequestToken = function() {
  return tmdb('authentication/token/new');
};

var authenticateRequestToken = module.exports.authenticateRequestToken = function(token, username, password) {
  return tmdb('authentication/token/validate_with_login', {request_token: token, username: username, password: password});
};
