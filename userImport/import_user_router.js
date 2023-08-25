let express = require("express");
const router = express.Router();
const multer = require('multer');
let importUserDataController = require('./import_user_controller');
// let importUserDataFromFileController = require('./import_user_database');
const upload = multer({ dest: 'uploads/' });

router.post("/", upload.single('csvFile'),importUserDataController.importUserDataFromFile);
// router.post("/", upload.single('csvFile'),importUserDataFromFileController.importUserDataFile);


module.exports = router;
