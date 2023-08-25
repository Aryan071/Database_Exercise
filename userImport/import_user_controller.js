const express = require('express');

const csvParser = require('csv-parser');
const fs = require('fs');
let userImportDataModel = require('./import_user_model');


const importUserDataFromFile  = async (req,res) =>{
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded.' });
      }
    
      const results = [];
     
      fs.createReadStream(req.file.path)
        .pipe(csvParser())
        .on('data', (data) => results.push(data))
        .on('end', async () => {
        
          const columns = Object.keys(results[0]);
          console.log(columns);
          const values = results.map(data => Object.values(data));
          console.log(values);
          const insertQuery = await userImportDataModel.User(values,columns);
  
          if (insertQuery) {
            res.json({ message: 'CSV file uploaded and data is inserted into the table.', data: results });
          }else{
            res.status(500).json({ error: 'Error inserting data into the database.' });
          }
        });
}


module.exports = {importUserDataFromFile};