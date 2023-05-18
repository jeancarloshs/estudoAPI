import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js";

db.on("error", console.log.bind(console, "Erro de conexão!!!"));
db.once("open", () => {
  console.log("Conexão com o Banco feita com sucesso");
});

const app = express();

// é um recurso do Express que vai conseguir fazer interpretar o que está chegando via post ou via put
// e transformar aquilo em um objeto para eu poder armazenar, visualizar e manipular.
app.use(express.json());

function buscaLivros(id) {
  return livros.findIndex((livro) => livro.id == id);
}

// const livros = [
//     {id: 1, "titulo": "Senhor dos aneis", "autor": "J. R. R. Tolkien"},
//     {id: 2, "titulo": "O Hobbit", "autor": "J. R. R. Tolkien"},
//     {id: 3, "titulo": "O Silmarillion", "autor": "J. R. R. Tolkien"}
// ]

// Passamos o res (Response) para devolver uma mensagem na requisição para o usuario
app.get("/", (req, res) => {
  res.status(200).send("Server iniciado");
});

app.get("/livros/:id", (req, res) => {
  let index = buscaLivros(req.params.id);
  res.json(livros[index]);
});

// Passamos o req (Require) no body (corpo da requisição) para que o usuario possa digitar as informações
app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro cadastrado com sucesso");
});

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
