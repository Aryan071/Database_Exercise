let db = require("../Utilities/database");

const cinemaData = () =>{
    return db.queryRun(
        "select * from cinema");
}

const addCinema = (cinemaName,cinemaCity,cinemaCode,cinemaAddress) =>{
    return db.queryRun(
        `insert into cinema(name,city_id,code,address) values($1,$1,$1,$1)`,
        [cinemaName,cinemaCity,cinemaCode,cinemaAddress]
       );
}

const updateCinema = (cinemaName,cinemaCity,cinemaCode,cinemaAddress,movieId) => {
    return db.queryRun(
        "update cinema set name = $1, city_id =  $1,code =  $1,address =  $1 where id =  $1",
        [
            cinemaName,cinemaCity,cinemaCode,cinemaAddress,movieId
        ] );
}

const deleteCinema = (cinemaId) => {
    return db.queryRun(
        "delete from cinema where id = $1", [
            cinemaId
          ]
      );
}
module.exports = {cinemaData,addCinema,updateCinema,deleteCinema}