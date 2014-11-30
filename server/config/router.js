var express = require('express');
var router = express.Router();
var path = require('path');
var tmdb = require('../helpers/tmdb');

// required to handle post data
var bodyParser = require('body-parser');
router.use( bodyParser.json() );
router.use(bodyParser.urlencoded({
  extended: true
}));

var session = require('express-session');

router.use(session({secret: 'keyboard cat'}));

function restrict(req, res, next) {
  if (req.session.user) {
    next();
  }
  else {
    req.session.error = "Login required";
    res.redirect('/login');
  }
}

router.get('/', restrict, function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, '../../client')});
});

router.get('/login', function(req, res) {
  res.sendFile('login.html', {root: path.join(__dirname, '../../client')});
});

router.post('/login', function(req, res) {
  console.log(req.body);
  tmdb.getNewAuthRequestToken()
  .then(function(data) {
    data = JSON.parse(data);
    var token = data.request_token;
    //req.session.user = 'yay';
    return tmdb.authenticateRequestToken(token, req.body.username, req.body.password);
  })
  .then(function(data) {
    req.session.user = 'yay';
    res.redirect('/');
  }, function(err) {
    console.log('error!!!!');
    console.log(err.error);
    res.redirect('/login');
  });
});

module.exports = router;
