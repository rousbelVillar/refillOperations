var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var db = require('../server/models/index');
var http = require('http');

var routes = require('./routes/routes');

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
// Add headers
const logRequestStart = (req, res, next) => {
    console.info(`${req.method} ${req.originalUrl}`)
    res.on('finish', () => {
        console.info(`${res.statusCode} ${res.statusMessage}; ${res.get('Content-Length') || 0}b sent`)
    })
    next()
}
app.use(logRequestStart);

app.use('/api', routes);


app.listen(3800, () =>{
    console.log('Running');
})
module.exports = app;


 