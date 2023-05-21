import express from "express";
import livros from "./livrosRoutes.js";

const routes = (app) => {
  // Passamos o res (Response) para devolver uma mensagem na requisição para o usuario
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "Server iniciado" });
  });
  // O middleware express.json() é utilizado para fazer o parse do corpo das requisições HTTP com formato JSON
  app.use(express.json(), livros);
};

export default routes;
