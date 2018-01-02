const express = require('express');
const logger = require('morgan');
const path = require('path');

// Set up the express app
const app = express();

// Log requests to the console.
//app.use(logger('dev'));
// app.use('/static/*.js', function (req, res, next) {
//   req.url = req.url + '.gz';
//   res.set('Content-Encoding', 'gzip');
//   next();
// });

app.use('/static', express.static(path.join(__dirname, 'public')));

app.use('/', (req, res) =>{ res.sendfile('./index.html') });



app.listen((process.env.PORT || 4040));
module.exports = app;