var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const Member = require("./models/member");

//this was added
//const Student = require("./models/student");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var appsRouter = require('./routes/apps');
var dessertsRouter = require('./routes/desserts');
var entreesRouter = require('./routes/entrees');
var merchRouter = require('./routes/merch');
var aboutusRouter = require('./routes/about-us');
var memberRouter = require('./routes/member');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));//
//this was added 
app.use(express.static(path.join(__dirname, 'public'),{extensions: 'html'}));
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/apps', appsRouter);
app.use('/desserts', dessertsRouter);
app.use('/entrees', entreesRouter);
app.use('/merch', merchRouter);
app.use('/about-us', aboutusRouter);
app.use('/members', memberRouter);


module.exports = app;
