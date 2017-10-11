const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');

const port = 3000;

const app = express();
app.use(bodyParser.json());




app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
})