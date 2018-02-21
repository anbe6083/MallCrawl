const mongoose = require('mongoose');
const keys = require('../config/keys');
const { Schema } = mongoose;

const UserSchema = new Schema({
  googleId: String
});

mongoose.model('users', UserSchema);
