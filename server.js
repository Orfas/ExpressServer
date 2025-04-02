const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/set', (req, res) => {
    res.cookie('myCookie', 'cookieValue', { maxAge: 90000, httpOnly: true, path: '/1' });
    res.send('Кука установлена!');
});

app.get('/1', (req, res) => {
    res.send(`Куки для урла 1: ${JSON.stringify(req.cookies)}`);
});

app.get('/2', (req, res) => {
  res.send(`Куки для урла 2: ${JSON.stringify(req.cookies)}`);
});

app.listen(5000);
