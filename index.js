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

//Yelp
const yelp = require('yelp-fusion');
const client = yelp.client(keys.yelp.apiKey);

let businesses = client
  .search({
    term: 'bars',
    location: 'santa clarita, ca'
  })
  .then(response => {
    /*let reviews = client.reviews(response.jsonBody.businesses[0].id).then(response => {
  console.log(response.jsonBody.reviews[0].text);
  app.get('/api/yelp/reviews', (req, res) => {
    res.send(response.jsonBody.reviews[0]);
  })
}).catch(error => {
  console.log(error);
});*/
    app.get('/api/yelp', (req, res) => {
      res.send(response.jsonBody.businesses);
    });
  })
  .catch(error => {
    console.log(error);
  });

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
