const fs = require("fs");
let db = require("../Utilities/database");
const csvParser = require("csv-parser");

const importUserDataFile = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded." });
  }

  const results = [];
  let values = [];
  fs.createReadStream(req.file.path)
    .pipe(csvParser())
    .on("data", (data) => results.push(data))
    .on("end", async () => {
      values = results.map((data) => Object.values(data));
      dataRun(values);
    });
};

const dataRun = async (req,res,values) => {
  try {
    const query1 = "SELECT userimport($1)";
    let output =  await db
      .queryRun(query1, [values]);
      if(output.rows.length != 0){
        console.log(output.rows);
      }else{
       console.log("Data is inserted in database");
      }
     
  } catch (error) {
    console.log("Error:", error);
  }
};

module.exports = { importUserDataFile };
