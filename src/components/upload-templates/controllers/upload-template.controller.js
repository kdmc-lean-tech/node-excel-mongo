const { readTemplate, moveTemplate, deleteTemplate } = require('../../../helpers/files.helpers');
const { saveEmployees } = require('../services/upload-template.service');

class UploadTemplateController {

  async saveFile(req, res, next) {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({
        message: 'No files were uploaded'
      });
    }
    const fileTemplate = req.files.template;
    const uploadPath = await moveTemplate(fileTemplate).catch(err => {
      return res.status(500).json({
        message: 'Internal Server Error'
      });
    });
    const [ { name, data } ] = await readTemplate(uploadPath);
    data.shift();
    data.forEach(async(row) => {
      await saveEmployees(row);
    });
    deleteTemplate(uploadPath);
    return res.json({
      ok: true,
      message: 'Information saved'
    });
  }
}

module.exports = {
  UploadTemplateController
}
