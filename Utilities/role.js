// let express = require("express");
// let session = require("express-session");

// const checkRole = (req, res, next) => {
//   if(req.session.user){
//     let user =  req.session.user;
//     let user_role = user.role ;
//       if (user_role != 'Admin') 
//       {
//         res.json({ status: "you are not a admin" });
//       } else {
//         next();
//       }
//   }else{
//     res.json("You are not logged in");
//   }
  
  
//   };

// module.exports = checkRole;

const jwt = require('jsonwebtoken');
const secretKey = 'Aryan@0710';

const checkRole = (req, res, next) => {
  const token = req.header('authorization'); 
  if (!token) {
    return res.status(401).json({ status: "You are not logged in" });
  }
  
   jwt.verify(token, secretKey,(err, decoded) => {
    if (err) {
      res.json(' verification failed:');
    } else {
      const userRole = decoded.role;
      
      if (userRole !== 'Admin') {
        res.status(403).json({ status: "You are not an admin" });
      } else {
        next();
    }
  }

  });
};

module.exports = checkRole;

