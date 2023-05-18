import app from './src/app.js';

// const http = require("http");

// Aqui deixamos configurado para caso esteja em ambiente DEV use a porta 3000 ou a porta que está no .env
const port = process.env.PORT || 3000;

// Para criar o servidor
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end(rotas[req.url]);
// })

// A porta que o servidor ira ouvir
app.listen(port, () => {
    console.log(`Servidor iniciado: http://localhost:${port}`)
})