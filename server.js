const express = require('express');
const logger = require('morgan');
const path = require('path');

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('*', (req, res) => res.sendfile('./public/index.html'));

app.listen(4040);
module.exports = app;