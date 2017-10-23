express = require('express'),
cors = require('cors'),
bodyParser = require('body-parser'),
port = 80,
app = express(),
serverConfig = require('./public/js/log/config'),
// logCtrl = require('./js/log/logCtrl.js'),
massive = require('massive');
// connectionString = serverConfig.connectionString;

const connectionString = 'postgres://opszgoahkklwor:ddca78482a1fa9fecab88d0fcff4d8ef0a9db9513a21eb6da2462cb017538269@ec2-54-235-250-15.compute-1.amazonaws.com:5432/da8nllmigs6avn?ssl=true';

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
      .then(reload => {
          res.json(reload);
      })
  });

  app.get('/api/log', (req, res) => {
    const db = req.app.get('db');

    db.getData(req.body)
    .then(response => {
        return res.json(response)
    })
})

app.listen(port, function() {
console.log(`Server listening on port: ${port}`);
});
