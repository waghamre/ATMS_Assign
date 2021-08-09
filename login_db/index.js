const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');

const dataController = require('./controllers/dataController.js')

var app = express();

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:4200'
}));

app.listen(5000, () => console.log('Server started at port : 5000'));

app.use('/data', dataController);