import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log("index working");
});



/* await client.connect();
const db = client.db("enem_questions").collection("questions");

const questions = await db.aggregate([{ $sample: { size: 10 } }]).toArray();

console.log(questions); */


app.get("/test", async (request, response) => {
  response.send('a');
});

await client.close();

