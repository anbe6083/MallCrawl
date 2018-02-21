const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

require('./routes/authRoutes')(app);

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google_web.client_id,
      clientSecret: keys.google_web.client_secret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
    }
  )
);

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
