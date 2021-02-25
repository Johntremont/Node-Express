/*
const http = require('http');

const server = http.createServer((req, res) => {
    res.status = 200;
    res.setHeader('content-type', 'text/plain');
    res.end("Hello WOrld");
});

server.listen(3000, () => {
    console.log('Server on port 3000')
})

*/

var express = require('express');

var app = express();

app.get('/', function(peticion, respuesta){
    respuesta.send('Ruta Inicio')
});

app.listen(3000,function(peticion, respuesta) {
    console.log('hola mundo');
})