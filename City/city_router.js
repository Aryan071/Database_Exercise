let express = require("express");
const router = express.Router();
let cityController = require('./city_controller');
let isLogin = require('../Utilities/session');
let checkRole = require('../Utilities/role')

router.get("/getCity",isLogin,checkRole,cityController.getCityData);
router.post("/addCity",isLogin,checkRole,cityController.addCityData);
router.put("/updateCity/:id",isLogin,checkRole,cityController.updateCityData);
router.delete("/deleteCity/:id",isLogin,checkRole,cityController.deleteCityData);

module.exports = router;