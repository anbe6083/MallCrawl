const express = require('express');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/users');
require('./services/passport');
const yelp = require('yelp-fusion');
const client = yelp.client(keys.yelp.apiKey);

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

require('./routes/yelpRoutes')(app);

require('./routes/authRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  //Make sure express will serve up production assets
  //like our main.js/main.css file
  app.use(express.static('client/build'));

  //Express will serve up the index.html file if
  //it doesnt recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
