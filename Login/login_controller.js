// let loginModel = require('./login_model');
// var jwt = require('jsonwebtoken');

// const userLogin = async (req,res) =>{
//     const userName = req.query.user_name;
//     const userPassword = req.query.user_password;
//     // const userRole = req.query.user_role;
//     let data = await loginModel.userData(userName);
//     let name = data.rows[0].username;
//     let password = data.rows[0].password;
//     let role = data.rows[0].role;
    
//   if (name == userName) {
//     if (password == userPassword) {
//       req.session.user = { name, password, role };
//       res.json("You are logged in");
//     } else {
//       res.json("Your password is incorrect");
//     }
//   } else {
//     res.json("Your user name is incorrect");
//   }
// }

// const userLogout = (req,res) => {
//   req.session.destroy((err) => {
//     if (err) {
//       return console.log(err);
//     } else {
//       res.json("You are logged out");
//     }
//   });
// }

// module.exports = {userLogin,userLogout};

const jwt = require('jsonwebtoken');
const loginModel = require('./login_model');
const secretKey = 'Aryan@0710';

const userLogin = async (req, res) => {
  const userName = req.query.user_name;
  const userPassword = req.query.user_password;
  
  try {
    let data = await loginModel.userData(userName);
    if (data.rows.length === 0) {
      return res.json("Username is invalid");
    }
    
    const storedPassword = data.rows[0].password;
    if (userPassword === storedPassword) {
      const payload = {
        username: userName,
        role: data.rows[0].role,
      };
      const token = jwt.sign(payload, secretKey, { expiresIn: '10s' }); 
      res.json({ token }); 
    } else {
      res.json("Invalid Password");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("An error occurred");
  }
};

const userLogout = (req, res) => {
  res.json("You are logged out");
};

module.exports = { userLogin, userLogout };
