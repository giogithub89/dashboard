const { MongoClient } = require("mongodb");

let dbConnection;
const uri = "mongodb+srv://testDashboard:testDashboard123@clusterdashboard.0g0wvic.mongodb.net/?retryWrites=true&w=majority";

module.exports = {
  connectToDB: (cb) => {
    MongoClient.connect(uri)
      .then((client) => {
        dbConnection = client.db();
        return cb;
      })
      .catch((err) => {
        console.log(err);
        return cb(err);
      });
  },
  getDB: () => {},
};
