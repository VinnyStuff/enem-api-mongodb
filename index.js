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

const questions = await db.aggregate([{ $sample: { size: 10 } }]).toArray();



app.get("/test", async (request, response) => {
  response.send('a');
});

app.get("/questions", async (request, response) => {
  if (err) throw err

  response.send(questions)
});
