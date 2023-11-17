import express, {NextFunction, Request, Response} from 'express';

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

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var usersRouter = require('./routes/users.ts');
var gymClassesRouter = require('./routes/gymclasses.ts');
var bookingsRouter = require('./routes/bookings.ts');
var schedulesRouter = require('./routes/schedules.ts');

var port = process.env.PORT || 3000;
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/gymclasses', gymClassesRouter);
app.use('/bookings', bookingsRouter);
app.use('/schedules', schedulesRouter);

// Middleware to handle paths that do not exist
app.use((_req: Request, res: Response, _next: NextFunction) => {
  res.status(404).json({error: 'Path Not Found'});
});

// Middleware to handle errors
app.use(function (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

app.listen(port, function () {
  console.log('Backend listening on port ' + port);
});

module.exports = app;
