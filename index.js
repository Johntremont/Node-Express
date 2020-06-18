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

const express = require('express');

const app = express();