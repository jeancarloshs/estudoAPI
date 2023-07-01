import express from "express";
import AutoresController from "../controllers/autoresController.js";

const router = express.Router();

router
    .get("/autores", AutoresController.listarAutores)
    .get("/autores/buscar", AutoresController.buscaAutoresID)
    .post("/autores", AutoresController.cadastrarAutores)
    .put("/autores/:id", AutoresController.atualizarAutores)

export default router;
