const express = require("express");
const mongoose = require("mongoose");
const { connectToDB, getDB } = require("./db");

const bodyParser = require("body-parser");
//const MongoClient = require("mongodb").MongoClient;
//const newRouter = require("./router.js");

//init middleware
const app = express();
app.use(bodyParser.json());

const uri = "mongodb+srv://testDashboard:testDashboard123@clusterdashboard.0g0wvic.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
  }
}
connect();

// MongoClient.connect(uri)
//   .then((client) => {
//     const db = client.db("Siciliamia");
//     const collection = db.collection("apiCollection");
//     const collectionRouter = newRouter(collection);

//     app.use("/api/apiCollection", collectionRouter);
//     console.log("connect to Siciliamia");
//   })
//   .catch(console.err);

const port = 8000;
let db;
//connect to db
// connectToDB((err) => {
//   if (!err) {
//     app.listen(port, () => {
//       console.log(`[server]: server is runnig at http://localhost:${port}`);
//     });
//     db = getDB();
//   }
// });

app.listen(port, () => {
  console.log(`[server]: server is runnig at http://localhost:${port}`);
});

app.get("/apiCollection", async (request, response) => {
  response.json({ mssg: "welcome to the api" });
});

app.get("/apiCollection:id", async (request, response) => {});

app.post("/apiCollection", async (request, response) => {
  const { api, link, description, category } = request.body;
  //const apiDoc = new ApiDoc({api, link, description, category});
  //    db.collection('apiCollection').insertOne(apiDoc)
  //    .then(result =>{
  //     response.status(201).json(result)
  //    })
  //    .catch(err => {
  //     response.status(500).json({err: 'Cannot create'})
  //    })

  //const planet = await prisma.planet.create({ data: planetData });
  // response.status(201).json(planet);
});

//testDashboard
//testDashboard123
