import autores from "../models/Autor.js";

// Vamos criar os métodos no tipo estático para que não precisemos instanciar essa classe.
class AutoresController {
  static listarAutores = async (req, res) => {
    try {
      const getAutores = await autores.find();
      res.status(200).json(getAutores);
    } catch (err) {
      res
        .status(500)
        .json({ message: `${err.message} - Falha ao localizar livro.` });
    }
  };

  static buscaAutoresID = async (req, res) => {
    try {
      let index = buscaAutores(req.params.id);
      res.json(autores[index]);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  static cadastrarAutores = async (req, res) => {
    try {
      // Passamos o req (Require) no body (corpo da requisição) para que o usuario possa digitar as informações
      let livro = new autores(req.body);
      livro.save();
      return res.status(201).send(JSON.stringify(livro.toJSON()));
    } catch (err) {
      res
        .status(500)
        .send({ message: `${err.message} - falha ao cadastrar livro` });
    }
  };

  static atualizarAutores = async (req, res) => {
    try {
      const id = req.params.id;
      autores.findByIdAndUpdate(id, {$set: req.body})
      res.status(200).send({ message: `Autores atualizado com sucesso`})
    } catch (err) {
      res
        .status(500)
        .send({ menssage: `${err.message} - Falha ao atualizar livro.` });
    }
  };

  static deletaAutores = async (req, res) => {
    try {

    } catch (err) {
      res
        .status(500)
        .send({ menssage: `${err.message} - Falha ao deletar livro.` });
    }
  };
}

export default AutoresController;
