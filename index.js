import express from "express";

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log("index working");
});


app.get("/test", async (request, response) => {
  response.send('a');
});
