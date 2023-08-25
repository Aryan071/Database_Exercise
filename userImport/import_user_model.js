let db = require("../Utilities/database");

const User = (values,columns) =>{
   return db.queryRun( `INSERT INTO user_data (${columns.join(', ')}) VALUES (${values.map(row => row.map(val => `'${val}'`).join(', ')).join('), (')})`
    );
}

module.exports = {User};