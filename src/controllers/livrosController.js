import livros from "../models/Livro.js";

// function buscaLivros(id) {
//   return livros.findIndex((livro) => livro.id == id);
// }

// Vamos criar os métodos no tipo estático para que não precisemos instanciar essa classe.
class LivroController {
  static listarLivros = async (req, res) => {
    try {
      const getLivros = await livros.find();
      res.status(200).json(getLivros);
    } catch (err) {
      res
        .status(500)
        .json({ message: `${err.message} - Falha ao localizar livro.` });
    }
  };

  static buscaLivroID = async (req, res) => {
    try {
      let index = buscaLivros(req.params.id);
      res.json(livros[index]);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  static cadastrarLivro = async (req, res) => {
    try {
      // Passamos o req (Require) no body (corpo da requisição) para que o usuario possa digitar as informações
      let livro = new livros(req.body);
      return res.status(201).send(JSON.stringify(livro.toJSON()));
    } catch (err) {
      res.status(500).send({ message: `${err.message} - falha ao cadastrar livro` });
    }
  };

  static atualizarLivro = async (req, res) => {
    try {

    } catch (err) {
      res.status(500).send({ menssage: `${err.message} - Falha ao atualizar livro.` })
    }
  }

  static deletaLivro = async (req, res) => {
    try {

    } catch (err) {
      res.status(500).send({ menssage: `${err.message} - Falha ao deleitar livro.` })
    }
  }
}

export default LivroController;
