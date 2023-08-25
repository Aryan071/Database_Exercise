// let express = require("express");
// let session = require("express-session");

// const isLogin = async (req, res, next) => {
//   if (req.session.user) {
//     let user = req.session.user;
//     let username = user.username;
//     let password = user.password;

//     if (!username && !password) {
//       res.json({ status: "you are not logged in" });
//     } else {
//       next();
//     }
//   } else {
//     res.json("you are not logged in");
//   }
// };

// module.exports = isLogin;

const jwt = require("jsonwebtoken");
const secretKey = "Aryan@0710";

const isLogin = (req, res, next) => {
  const authHeader = req.header("authorization");

  if (!authHeader) {
    return res.status(401).json({ status: "You are not logged in" });
  }

  const token = authHeader;

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      res.json("error to validate!!!");
    } else {
      const username = decoded.username;
 
      if (!username) {
        res.status(401).json({ status: "Invalid credentials" });
      } else {
        next();
      }
    }
  });
};

module.exports = isLogin;
