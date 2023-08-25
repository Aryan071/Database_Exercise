let redis = require("redis");
const redisClient = redis.createClient();

redisClient.on("error", (err) =>
  console.log("Can not establish the connection", err)
  );
      
      (async() => {
        await redisClient.connect();
      })();
      redisClient.on("connect", () => {
        console.log("Connected!");
      });
      module.exports = redisClient;