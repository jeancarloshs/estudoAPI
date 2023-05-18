import livros from "../models/Livro";

// Vamos criar os métodos no tipo estático para que não precisemos instanciar essa classe.
class LivroController {
  static listarLivros = async (req, res) => {
    try {
      const getLivros = await livros.find();
      res.status(200).json(getLivros);
    } catch (err) {
      res.status(500).json(err);
    }
  };
}

export default LivroController;
