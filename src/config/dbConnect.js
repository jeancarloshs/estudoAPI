import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

let dbUser = process.env.DB_USER;
let dbPassword = process.env.DB_PASSWORD;
let dbUrl = process.env.DB_URL;
let dbName = process.env.DB_NAME;

// No final da URL precisamos inserir o nome do banco que foi criado
mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@${dbUrl}/${dbName}`);

// Variavel para conexão do banco, criada apos configurar o connect
let db = mongoose.connection;

export default db;