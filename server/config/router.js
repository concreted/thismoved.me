var express = require('express');
var router = express.Router();
var path = require('path');

router.use(express.static(path.join(__dirname, '../../client')));
//router.use(express.static(path.join(__dirname, '../bower_components')));

// router.get('/', function(req, res) {
//   res.sendFile('index.html', {root: path.join(__dirname, '../../client')});
// });
//
// router.get('/about', function(req, res) {
//   res.send('im the about page!');
// });

module.exports = router;
