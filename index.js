const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('PETICION GET RECIBIDA');
});

app.post('/login', (req, res) => {
    res.send('PETICION POST RECIBIDA');
});

app.put('/show', (req, res) => {
    res.send('PETICION PUT RECIBIDA');
});

app.delete('/delete', (req, res) => {
    res.send('PETICION DELETE RECIBIDA');
});

app.listen(3000, () => {
    console.log('server on port 3000');
});