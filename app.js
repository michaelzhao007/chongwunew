var gzippo = require('gzippo');
var express = require('express');
var app = express();
 
// app.use(express.logger('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/app"));
app.listen(5000, "127.0.0.1");