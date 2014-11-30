var path = require('path');
var mdb = require('moviedb')(process.env.TMDB_API_KEY)

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/thismovedme')

var express = require('express')
var router = require('./config/router.js')
var app = express()

app.use(router);
app.use(express.static(path.join(__dirname, '../client')));

var port = process.env.PORT || 3000;
var server = app.listen(port, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
