var express = require('express');
var router = express.Router();
var path = require('path');
var tmdb = require('../helpers/tmdb');
var auth = require('../helpers/auth');

var jwt = require('jwt-simple');

// required to handle post data
var bodyParser = require('body-parser');
router.use( bodyParser.json() );
router.use(bodyParser.urlencoded({
  extended: true
}));

var session = require('express-session');

router.get('/', function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, '../../client')});
});

router.post('/login', require('../users/user.routes.js').login);

module.exports = router;
