let cityModel = require('./city_model');

const getCityData = async (req, res) => {
    try {
        let data = await cityModel.cityData();
      return res.json(data);
    } catch (error) {
      return res.json({ status: "failed to fetch" });
    }
  };

const addCityData = async(req,res) => {
    try {
        let data = await cityModel.addCity(req.query.name,
       req.query.state);
      return res.json(data);
    } catch (error) {
      return res.json({ status: "failed to fetch" });
    }
}

const updateCityData = async(req,res) => {
    try {
        let data = await cityModel.updateCity(req.body.name, req.body.state, req.params.id);
      return res.json(data);
    } catch (error) {
      return res.json({ status: "failed to fetch" });
    }
}

const deleteCityData = async(req,res) => {
    try {
        let data = await cityModel.deleteCity( req.params.id,);
        return res.json(data);
    } catch (error) {
        return res.json({ status: "failed to fetch" });
    }
}


  module.exports = {getCityData,addCityData,updateCityData,deleteCityData};