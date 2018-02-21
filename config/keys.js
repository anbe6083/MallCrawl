//determines if we're in production or development

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dev');
} else {
  module.exports = require('./prod');
}
