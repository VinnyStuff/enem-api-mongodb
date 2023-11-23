import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 3000;

// Middleware para conectar ao banco de dados antes de processar as rotas
app.use(async (req, res, next) => {
  try {
    const client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
    req.dbClient = client; // Adiciona o cliente do banco de dados ao objeto de requisição
    next();
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
    res.status(500).send("Erro interno no servidor");
  }
});

app.get("/questions", async (request, response) => {
  try {
    const db = request.dbClient.db("enem_questions").collection("questions");
    const questions = await db.aggregate([{ $sample: { size: 10 } }]).toArray();
    response.send(questions);
  } catch (error) {
    console.error("Erro ao processar a rota /test:", error);
    response.status(500).send("Erro interno no servidor");
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});