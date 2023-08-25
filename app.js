var express = require("express");
var app = express();
var path = require("path");
let session = require("express-session");
require('./Sequelize');
// const RedisStore = require("connect-redis").default;
// let redisClient = require("./Utilities/redis");

// Routers
var cityRouter = require("./City/city_router");
var cinemaRouter = require("./Cinema/cinema_router");
var customerRouter = require("./Customer/customer_router");
var ceoRouter = require("./Ceo/ceo_router");
var loginRouter = require("./Login/login_router");
var importUserRouter = require("./userImport/import_user_router");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.use(
//   session({
//     secret: "aaabbbddd",
//     store: new RedisStore({ client: redisClient }),
//     host: "localhost",
//     port: 6379,
//     collection: "sessions",
//     resave: false,
//     saveUninitialized: false,
//     // ttl:10,
//     cookie: {
//       maxAge: 60000,
//     },
//   })
// );
// app.use(
//   session({
//     secret: "aaabbbddd",
//     resave: false,
//     saveUninitialized: false,
//     // ttl:10,
//     cookie: {
//       maxAge: 60000,
//     },
//   })
// );


app.use("/city", cityRouter);
app.use("/cinema", cinemaRouter);
app.use("/customer", customerRouter);
app.use("/ceo", ceoRouter);
app.use("/login", loginRouter);
app.use("/upload", importUserRouter);
// catch 404 and forward to error handler


const port = 5000;
app.listen(port, () => {
  console.log("Port is running");
});
module.exports = app;
