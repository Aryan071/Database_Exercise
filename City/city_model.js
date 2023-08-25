let db = require("../Utilities/database");

const cityData = () =>{
    return db.queryRun(
        "select * from city");
}

const addCity = (cityName,stateName) =>{
    return db.queryRun
        ("insert into city(name,state) values($1,$1)",
         [
            cityName,stateName
          ]
       )
}

const updateCity = (cityName,stateName,cityId) => {
    return db.queryRun(
        "update city set name = $1, state = $1 where id = $1",
        [
            cityName,stateName,cityId
        ] );
}

const deleteCity = (cityId) => {
    return db.queryRun(
        "delete from city where id = $1", [
            cityId
          ]
      );
}
module.exports = {cityData,addCity,updateCity,deleteCity}