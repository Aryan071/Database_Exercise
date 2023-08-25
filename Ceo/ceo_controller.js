let ceoModel = require('./ceo_model');

const getCustomerData = async (req, res) => {
    try {
        let data = await ceoModel.customerData();
      return res.json(data);
    } catch (error) {
      return res.json({ status: "failed to fetch" });
    }
  };

const getBookingData = async(req,res) => {
    try {
        let data = await ceoModel.bookingData();
      return res.json(data);
    } catch (error) {
      return res.json({ status: "failed to fetch" });
    }
}

const getUniqueCustomerData = async(req,res) => {
    try {
        let data = await ceoModel.uniqueCustomer();
      return res.json(data);
    } catch (error) {
      return res.json({ status: "failed to fetch" });
    }
}

const getSelectedCustomerData = async(req,res) => {
    try {
        let data = await ceoModel.selectedCustomer(req.params.movie_id, req.query.cinema_id);
        return res.json(data);
    } catch (error) {
        return res.json({ status: "failed to fetch" });
    }
}


  module.exports = {getCustomerData,getBookingData,getUniqueCustomerData,getSelectedCustomerData};