require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

require('./app_server/models/db');
require('./app_api/config/passport');

const hbs = require('hbs');

const app = express();
const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:4200',
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
}

const indexRouter = require('./app_server/routes/index');
const apiRouter = require('./app_api/routes/index');
const checkoutRouter = require('./app_server/routes/checkout');
const loginRouter = require('./app_server/routes/login');
const mealsRouter = require('./app_server/routes/meals');
const newsRouter = require('./app_server/routes/news');
const roomsRouter = require('./app_server/routes/rooms');
const travelRouter = require('./app_server/routes/travel');
const usersRouter = require('./app_server/routes/users');

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// register handlebars partials (https://www.npmjs.com/package/hbs)
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/checkout', checkoutRouter);
app.use('/login', loginRouter);
app.use('/', indexRouter);
app.use('/meals', mealsRouter);
app.use('/news', newsRouter);
app.use('/rooms', roomsRouter);
app.use('/travel', travelRouter);
app.use('/users', usersRouter);

app.get('/', indexRouter);
app.get('/checkout', (req, res) => res.render('checkout', {checkoutSelected: reqPath == '/checkout'}));
app.get('/login', (req, res) => res.render('login', {loginSelected: reqPath == '/login'}));
app.get('/rooms', (req, res) => res.render('rooms', {roomsSelected: reqPath == '/rooms'}));
app.get('/meals', (req, res) => res.render('meals', {mealsSelected: reqPath == '/meals'}));
app.get('/news', (req, res) => res.render('news', {newsSelected: reqPath == '/news'}));
app.get('/travel', (req, res) => res.render('travel', {travelSelected: reqPath == '/travel'}));

app.use('/api', cors(corsOptions), apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
