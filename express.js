var express = require('express');
var path = require('path');

var app = express();

const Beers = require('./modules/beers');
// JSON api
app.use('/api/beers', Beers.routes);

module.exports = app;