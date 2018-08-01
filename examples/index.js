'use strict';

var express = require('../node_modules/express');
var app = express();
var expressHeader = require('../');
 
app.use(expressHeader([
    {key: 'X-Alpha', value: 'Alpha'},
    {key: 'X-Beta', value: 'Beta'},
    {key: 'x-gamma', value: 'Gamma'},
    {key: 'x-gamma', value: ''       }
]));
 
app.get('/', function (req, res) {
  res.send('Hello World');
})
 
app.listen(3000);