let express = require("express");
const router = express.Router();
let ceoController = require('./ceo_controller');
let checkRole = require('../Utilities/role');
let isLogin = require('../Utilities/session');

router.get("/getCustomer", checkRole,ceoController.getCustomerData);
router.get("/getBookings", checkRole,ceoController.getBookingData);
router.get("/getUniqueCustomer", checkRole,ceoController.getUniqueCustomerData);
router.get("/getSelectedCustomer", checkRole,ceoController.getSelectedCustomerData);

module.exports = router;