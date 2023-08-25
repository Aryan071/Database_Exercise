let db = require("../Utilities/database");

const userData = (userName) =>{
   return db.queryRun(
      "select username,password,role from user_data where username = $1",
      [userName]
    );
}

module.exports = {userData};