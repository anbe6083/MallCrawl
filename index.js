const express = require('express');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/users');
require('./services/passport');

mongoose.connect(keys.mongodb.dev_dbURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
