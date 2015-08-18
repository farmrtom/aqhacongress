var env = process.env.NODE_ENV || 'dev', config = require('./config/config.' + env);

var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),

var bunyan = require('bunyan');
var log = bunyan.createLogger({name: "main"});

log.debug(config);

var app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(__dirname + '/app')); 


app.set('port', process.env.PORT || 8080);
var server = app.listen(app.get('port'), function() {
	console.log('congress server listening on port ' + server.address().port);
});




module.exports = app;
