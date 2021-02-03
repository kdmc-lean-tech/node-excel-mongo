const dotenv = require('dotenv');
dotenv.config();

const keys = new Map();

keys.set('PORT', process.env.PORT);
keys.set('MONGO_URI', process.env.MONGO_URI);

module.exports = {
  keys
}
