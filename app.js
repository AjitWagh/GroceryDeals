var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path');

app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));
app.use(express.static(path.join(__dirname,'client')));

app.get('/',function(req,res){
    res.sendfile(__dirname+'/client/index.html');
});

app.listen(3000);

console.log('server started on 3000');
module.exports = app;
