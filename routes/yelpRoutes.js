const yelp = require('yelp-fusion');
const keys = require('../config/keys');
const client = yelp.client(keys.yelp.apiKey);
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = mongoose.model('users');

module.exports = app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.get('/api/yelp/:location', (req, res) => {
    client
      .search({
        term: 'bars',
        location: req.params.location
      })
      .then(response => {
        res.send(response.jsonBody);
      })
      .catch(error => {
        console.log(error);
      });
  });

  app.post('/api/location', (req, res) => {
    const location = req.body.location;
    const googleId = '108553750094248152950';

    User.findById('5a90df7322695a7e07921b45').then(user => {
      user.location = location;
      user.save();
    });

    res.send(req.body);
  });
};
