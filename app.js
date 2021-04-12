var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var appsRouter = require('./routes/apps');
var dessertsRouter = require('./routes/desserts');
var entreesRouter = require('./routes/entrees');
var merchRouter = require('./routes/merch');
var aboutusRouter = require('./routes/about-us');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/apps', appsRouter);
app.use('/desserts', dessertsRouter);
app.use('/entrees', entreesRouter);
app.use('/merch', merchRouter);
app.use('/about-us', aboutusRouter);

module.exports = app;
