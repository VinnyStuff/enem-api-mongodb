/* create */

await db.collection("questions").insertMany( 
      

    )

/* get randonly */

const questions = db.collection("questions").aggregate(
    [ { $sample: { size: 10 } } ]
  )


/* find */

    // find code goes here
    const cursor = collection.find();
    // iterate code goes here
    await cursor.forEach(console.log); 


    /* const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://vinnycios_dev:7TNsAwTG4D0VX2Za@test-1.pmboq2l.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    // database and collection code goes here
    const db = client.db("sample_guides");
    const coll = db.collection("planets");
    

    const objects = [
      {
        nome: "João",
        idade: 30,
        cidade: "São Paulo"
      },
      {
        nome: "Maria",
        idade: 25,
        cidade: "Rio de Janeiro"
      }
    ];
    

    await db.collection('planets').insertMany({
      item: 'canvas',
      qty: 100,
      tags: ['cotton'],
      size: { h: 28, w: 35.5, uom: 'cm' }
    });


    // find code goes here
    const cursor = coll.find();
    // iterate code goes here
    await cursor.forEach(console.log);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir); */