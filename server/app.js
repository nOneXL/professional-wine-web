const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use('/', require(''));

app.listen(8080)