/**
 * Created by Ryan on 20/02/2015.
 */
/*jshint node:true*/
'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var compress = require('compression');
var cors = require('cors');
var errorHandler = require('./routes/utils/errorHandler')();
//var favicon = require('serve-favicon');
var logger = require('morgan');
var port = process.env.PORT || 7123;

var environment = process.env.NODE_ENV;

//app.use(favicon(__dirname + '/favicon.ico'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(compress());
app.use(logger('dev'));
app.use(cors());
app.use(errorHandler.init);

console.log('About to crank up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

app.get('/ping', function(req, res, next) {
    console.log(req.body);
    res.send('pong');
});

switch (environment) {
    case 'build':
        console.log('** BUILD **');
        app.use(express.static('./build/'));
        app.use('/*', express.static('./build/index.html'));
        break;
    default:
        console.log('** DEV **');
        app.use(express.static('./app/client/'));
        app.use(express.static('./'));
        app.use('/*', express.static('./index.html'));
        break;
}

app.listen(port, function() {
    console.log('Express server listening on port ' + port);
    console.log('\n__dirname = ' + __dirname +
    '\nprocess.cwd = ' + process.cwd());
});
