const express = require('express'),
cors = require('cors'),
bodyParser = require('body-parser'),
port = 3000,
app = express(),
serverConfig = require('./js/log/config'),
imageCtrl = require('./js/log/logCtrl.js'),
massive = require('massive'),
connectionString = serverConfig.connectionString;

massive(connectionString).then(db => {
app.set('db', db);
});
app.use(cors());
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/public'));

app.post('/log', logCtrl.uploadImages);

app.listen(port, function() {
console.log('Server listening on port', port);
});