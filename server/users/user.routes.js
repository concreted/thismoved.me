var tmdb = require('../helpers/tmdb');
var Q = require('q');
var User = require('./user.model');
var jwt = require('jwt-simple');

var login = function(req, res, next) {
  // Should validate login and send token if authenticated.
  // Currently sends a token on any username.
  var username = req.body.username;
  var password = req.body.password;

  // check for user in db
  var findUser = Q.nbind(User.findOne, User);
  findUser({username: username})
  .then(function (user) {
    if (!user) {
      //if no user, get a new request token
      tmdb.getNewAuthRequestToken()
      .then(function(data) {
        data = JSON.parse(data);
        var token = data.request_token;
        return tmdb.authenticateRequestToken(token, username, password);
      })
      // then authenticate the request token with username/password
      .then(function(data) {
        data = JSON.parse(data);
        var token = data.request_token;
        // if successfully authenticated, get a new session id
        return tmdb.getNewSessionID(token);
      }, function(data) {
        // if not, fail
        console.log('incorrect username/password');

      })
      .then(function(data) {
        data = JSON.parse(data);
        var session_id = data.session_id;
        //save username/password/session_id to database
        create = Q.nbind(User.create, User);
        newUser = {
          username: username,
          password: password,
          session_id: session_id
        };

        console.log('=========== user created ===========');
        console.log(session_id);

        var token = jwt.encode(username, 'secret');
        res.json({token: token});

        return create(newUser);
      }).
      catch(function(err) {
        res.json(err);
      });
    } else {
      return user.comparePasswords(password)
      .then(function(foundUser) {
        if (foundUser) {
          var token = jwt.encode(user, 'secret');
          res.json({token: token});
        } else {
          return next(new Error('No user'));
        }
      });
    }
  })
  .catch(function (error) {
    res.json(error);
  });
};

module.exports = {
  login: login
};
