const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { isProd, isDev } = require('./core/env');

const { dashboardRoute } = require('./routes/dashboard');
const { entityRoute } = require('./routes/entity');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(isProd() ? logger('common') : logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(dashboardRoute.routeName, dashboardRoute.router);
app.use(entityRoute.routeName, entityRoute.router);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = isDev() ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
