const xlsx = require('node-xlsx').default;
const fs = require('fs');
const path = require('path');

module.exports = {
  readTemplate: (uploadPath) => {
    return new Promise((resolve, reject) => {
      resolve(xlsx.parse(fs.readFileSync(uploadPath)));
    });
  },

  moveTemplate: (fileTemplate) => {
    return new Promise((resolve, reject) => {
      const uploadPath = path.resolve(__dirname) + `${ fileTemplate.name }`;
      fileTemplate.mv(uploadPath, err => {
        if (err) {
          reject('Error in file placement');
        }
        resolve(uploadPath);
      });
    });
  },

  deleteTemplate: (uploadPath) => {
    if (fs.existsSync(uploadPath)) {
      fs.unlinkSync(uploadPath);
    }
  }
}
