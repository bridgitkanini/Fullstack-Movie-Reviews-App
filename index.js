import "dotenv/config";
import app from "./server.js";
import mongodb from "mongodb";
// import ReviewsDAO from "./dao/reviewsDAO.js";

const MongoClient = mongodb.MongoClient;
const mongo_username = process.env["MONGO_USERNAME"];
const mongo_password = process.env["MONGO_PASSWORD"];
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.4zzek7j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`; //Backticks instead of "" to enable ${}, i.e access variables.

const port = 8000;

MongoClient.connect(uri, {
  maxPoolSize: 50, //Nummber of people connected at the same time.
  wtimeoutMS: 2500,
  useNewUrlParser: true, //Huh??
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  });
