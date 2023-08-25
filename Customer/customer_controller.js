let customerModel = require('./customer_model');

const getMovieData = async (req, res) => {
    try {
        let data = await customerModel.movieData(req.params.id);
      return res.json(data);
    } catch (error) {
      return res.json({ status: "failed to fetch" });
    }
  };

const searchMovieData = async(req,res) => {
    try {
        let data = await customerModel.searchMovie(req.params.movie_name);
      return res.json(data);
    } catch (error) {
      return res.json({ status: "failed to fetch" });
    }
}

const getShowSeatingPlanData = async(req,res) => {
    try {
        let data = await customerModel.showSeatingPlanData(
            req.query.city_name,
            req.query.movie_name,
            req.query.cinema_name,
            req.query.cinema_hall_name,
            req.query.date_of_the_show,
           );
      return res.json(data);
    } catch (error) {
      return res.json({ status: "failed to fetch" });
    }
}

const getTopTenActorsData = async(req,res) => {
    try {
        let data = await customerModel.topTenActorsData();
        return res.json(data);
    } catch (error) {
        return res.json({ status: "failed to fetch" });
    }
}

const searchMovieByYearData = async(req,res) => {
    try {
        let data = await customerModel.searchMovieByYear(req.params.year);
      return res.json(data);
    } catch (error) {
      return res.json({ status: "failed to fetch" });
    }
}

  module.exports = {getMovieData,searchMovieData,getShowSeatingPlanData,getTopTenActorsData,searchMovieByYearData};