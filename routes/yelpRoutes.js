const yelp = require('yelp-fusion');
const keys = require('../config/keys');
const client = yelp.client(keys.yelp.apiKey);
const mongoose = require('mongoose');

const User = mongoose.model('users');
module.exports = app => {
  app.get('/api/yelp', (req, res) => {
    client
      .search({
        term: 'bars',
        location: 'New York City, NY'
      })
      .then(response => {
        res.send(response.jsonBody);
      })
      .catch(error => {
        console.log(error);
      });
  });
};
