import express from "express";
import LivroController from "../controllers/livrosController";

const router = express.Router();

router.get("/livros", LivroController.listarLivros);
router.get("/livros/:id", LivroController.buscaLivroID);

export default router;
