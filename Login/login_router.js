let express = require("express");
const router = express.Router();
let loginController = require('./login_controller');

router.post("/", loginController.userLogin);
router.post("/logout",loginController.userLogout)

module.exports = router;
