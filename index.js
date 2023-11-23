import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const client = new MongoClient(process.env.MONGO_URI);
await client.connect()

const PORT = 3000;

app.listen(PORT, () => {
  console.log("index working");
});




app.get("/test", async (request, response) => {
  response.send('a');
});

