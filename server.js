var env = process.env.NODE_ENV || 'dev', config = require('./config/config.' + env);

var express = require('express'),
    body_parser = require('body-parser'),
    cors = require('cors');

var horse_entry_route = require('./routes/horse_entry');
var class_search_route = require('./routes/class_search');

var bunyan = require('bunyan');
var log = bunyan.createLogger({name: "main"});

log.debug(config);

var app = express();
app.use(cors());
app.use(body_parser.json());

app.use(express.static(__dirname + '/app'));


app.post('/api/horse_entry', horse_entry_route.calculate);
app.get('/api/class_search/:search_text', class_search_route.search);


app.set('port', process.env.PORT || 8080);
var server = app.listen(app.get('port'), function() {
	console.log('congress server listening on port ' + server.address().port);
});
module.exports = app;
