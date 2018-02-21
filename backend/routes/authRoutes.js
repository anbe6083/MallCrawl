const passport = require('passport');

module.exports = app => {
  app.get('/auth/google', (req, res) => {
    res.send('youre at /auth/google/callback');
  });

  app.get('/auth/google/callback', (req, res) => {
    res.send('youre at /auth/google/callback');
  });

  app.get('/api/logout', (req, res) => {
    res.send('youre at /api/logout');
  });

  app.get('/api/current_user', (req, res) => {
    res.send('youre at /api/current_user');
  });
};
