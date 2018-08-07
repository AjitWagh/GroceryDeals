var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path');

app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));

app.listen(9000);

console.log('server started on 9000');
module.exports = app;
