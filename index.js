express = require('express'),
cors = require('cors'),
bodyParser = require('body-parser'),
port = 3000,
app = express(),
serverConfig = require('./public/js/log/config'),
// logCtrl = require('./js/log/logCtrl.js'),
massive = require('massive'),
connectionString = serverConfig.connectionString;

massive(connectionString).then(db => {
app.set('db', db);
});
app.use(cors());
app.use(bodyParser.json());
// app.use('/', express.static(__dirname + '/public'));
app.use(express.static('public'));

app.get('/', (req, res)=> {
    res.send('ok')
})

app.post('/log', (req, res) => {
    console.log(req.body)
    req.app
      .get('db')
      .upload_pic(req.body)
  });

app.listen(port, function() {
console.log(`Server listening on port: ${port}`);
});