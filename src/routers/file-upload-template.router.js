const { Router } = require('express');
const { UploadTemplateController } = require('../components/upload-templates/controllers/upload-template.controller');

const router = Router();
const uploadTemplateCtrl = new UploadTemplateController();


router.post('/upload-template', uploadTemplateCtrl.saveFile);

module.exports = router;
