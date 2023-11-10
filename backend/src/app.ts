require('dotenv').config();

const mongoose = require('mongoose');

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

const dev_uri = `mongodb+srv://${username}:${password}@cluster0.mtoumbe.mongodb.net/?retryWrites=true&w=majority`;
const local_uri = 'mongodb://localhost:27017';

const mongodbOptions = {
  dbName: 'test',
};

async function connect() {
  const uri = process.env.LOCAL_DB ? local_uri : dev_uri;
  console.log(`MongoDB URI: ${uri}`);
  await mongoose.connect(uri, mongodbOptions);
}

connect().catch(err => console.log(err));

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index.ts');
var usersRouter = require('./routes/users.ts');

var port = process.env.PORT || 3000;
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (next: any) {
  next(createError(404));
});

// error handler
app.use(function (err: any, req: any, res: any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // send error message
  res.status(err.status || 500);
  res.json({error: err});
});

app.listen(port, function () {
  console.log('Backend listening on port ' + port);
});

module.exports = app;
