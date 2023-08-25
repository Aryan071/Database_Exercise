let cinemaModel = require('./cinema_model');

const getCinemaData = async (req, res) => {
    try {
        let data = await cinemaModel.cinemaData();
      return res.json(data);
    } catch (error) {
      return res.json({ status: "failed to fetch" });
    }
  };

const addCinemaData = async(req,res) => {
    try {
        let data = await cinemaModel.addCinema(req.body.name, req.body.city_id, req.body.code, req.body.address);
      return res.json(data);
    } catch (error) {
      return res.json({ status: "failed to fetch" });
    }
}

const updateCinemaData = async(req,res) => {
    try {
        let data = await cinemaModel.updateCinema(req.body.name,req.body.city_id,req.body.code,req.body.address,req.params.id,);
      return res.json(data);
    } catch (error) {
      return res.json({ status: "failed to fetch" });
    }
}

const deleteCinemaData = async(req,res) => {
    try {
        let data = await cinemaModel.deleteCinema( req.params.id,);
        return res.json(data);
    } catch (error) {
        return res.json({ status: "failed to fetch" });
    }
}


  module.exports = {getCinemaData,addCinemaData,updateCinemaData,deleteCinemaData};