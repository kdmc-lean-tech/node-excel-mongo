const express = require('express');
const fileUpload = require('express-fileupload');
const { keys } = require('../config/keys.config');
const cors = require('cors');
const { Database } = require('../database/database');

class Server {
  constructor() {
    this.port = keys.get('PORT');
    this.app = express();
    this.database = new Database();
    this.middlewares();
    this.initDatabase();
  }

  initDatabase() {
    this.database.connect(keys.get('MONGO_URI'));
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(fileUpload());
    this.app.use(require('../routers/file-upload-template.router'));
  }

  execute(callback) {
    this.app.listen(this.port, callback(this.port));
  }
}

module.exports = {
  Server
}
