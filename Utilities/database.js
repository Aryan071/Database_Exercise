const pgPool = require("pg").Pool;

//Connect with database
function connect() {
  const pool = new pgPool({
    user: "postgres",
    host: "192.168.1.189",
    port: 5432,
    database: "Movie_Data",
    password: "1978",
  });
  return pool;
}

let pool2 = connect();

function queryRun(queryText,values) {
 
 return new Promise ((resolve , reject) => {
    pool2.query(queryText,values,(err,dbRes)=>{
      if(err){
        return reject(err);
      }else{
        return resolve(dbRes);
      }
    });
  })
}
 
 

module.exports = {queryRun};

