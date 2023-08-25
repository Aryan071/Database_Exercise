let express = require("express");
const router = express.Router();
let customerController = require('./customer_controller');
// let isLogin = require('../Utilities/session');

router.get("/getMovies/:id",customerController.getMovieData);
router.get("/searchMovies/:movie_name",customerController.searchMovieByYearData);
router.get("/showSeatingPlan",customerController.getShowSeatingPlanData);
router.get("/topTenActors",customerController.getTopTenActorsData);
router.get("/movieByYear/:year",customerController.searchMovieByYearData);

module.exports = router;