const mongoose = require('mongoose');

class Database {
  
  connect(url) {
    mongoose.connect(url, {
      useCreateIndex: true,
      useFindAndModify: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(() => console.log('Database Online'))
      .catch(() => console.log('Database Error'));
  }
}

module.exports = {
  Database
}
