import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js";
import routes from "./routes/index.js"

try {
  db.once("open", () => {
    console.log(" ");
    console.log("-----------------------------------------");
    console.log("- Conexão com o Banco feita com sucesso -");
    console.log("-----------------------------------------");
    console.log(" ");
  });
} catch (err) {
  db.on("error", console.log.bind(console, "Erro de conexão!!!", err));
}

const app = express();

app.use(express.json());

routes(app);

export default app;