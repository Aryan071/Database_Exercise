let express = require("express");
const router = express.Router();
let cinemaController = require('./cinema_controller');
let isLogin = require('../Utilities/session');
let checkRole = require('../Utilities/role');

router.get("/getCinema",checkRole,cinemaController.getCinemaData);
router.post("/addCinema",checkRole,cinemaController.addCinemaData);
router.put("/updateCinema/:id",checkRole,cinemaController.updateCinemaData);
router.delete("/deleteCinema/:id",checkRole,cinemaController.deleteCinemaData);

module.exports = router;