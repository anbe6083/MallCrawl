const passport = require('passport');

module.exports = app => {
  app.get('/api/logout', (req, res) => {
    res.send('youre at /api/logout');
  });

  app.get('/api/current_user', (req, res) => {
    res.send('youre at /api/current_user');
  });
};
