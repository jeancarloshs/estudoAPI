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

// é um recurso do Express que vai conseguir fazer interpretar o que está chegando via post ou via put
// e transformar aquilo em um objeto para eu poder armazenar, visualizar e manipular.
app.use(express.json());

routes(app);

// Atualiza o campo titulo do livro
// para manipular array que é o find index que consigo achar dado algum parâmetro,
// em que índice, em que posição está o elemento que quero alterar, manipular ou visualizar.
app.put("/livros/:id", (req, res) => {
  let index = buscaLivros(req.params.id);
  livros[index] = req.body;
  res.json(livros[index]); // Desta forma ele ira retornar somente o livros que foi atualizado e não o JSON todo
});

app.delete("/livros/:id", (req, res) => {
  let { id } = req.params; // Desestruturação que é um recurso do JavaScript que podemos atribuir para uma outra variável valores retirados de um array ou de um objeto.
  let index = buscaLivros(id);
  let tituloLivro = livros[index].titulo;
  livros.splice(index, 1);
  res.send(`O livro <b>${tituloLivro}</b> foi apagado com sucesso!!`);
});

export default app;
