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

const db = client.db("enem_questions").collection("questions");
const db2 = client.db("test").collection("test");


const questions = await db.aggregate([{ $sample: { size: 10 } }]).toArray();

const all = await db2.find().toArray();
console.log(all)



app.get("/test", async (request, response) => {
  response.send(all);
});

app.get("/", async (request, response) => {

  response.send(questions)
});

await client.close();

