const { MongoClient } = require("mongodb");
require("dotenv").config();
const client = new MongoClient(process.env.MONGO_URI);
async function run() {
  try {
    await client.connect();

    const db = client.db("enem_questions");
    const collection = db.collection("questions");
    /* const collection = client.db("enem_questions").collection("questions"); */

    const questions = collection.aggregate(
      [ { $sample: { size: 10 } } ]
    )

    await questions.forEach(console.log);

  } catch (e) {
    console.log(e);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);
