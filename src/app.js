const express = require("express");
const upload  = require('./config/upload')
const routes = require("./routes");
const handleError = require("./middlewares/handleError");
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(upload.array());

app.use(upload.any());

app.use(express.static('src/public'))

app.use(routes);

app.use(handleError);

const port = process.env.PORT || 4010
app.listen(port, () => console.log("Servidor rodando na porta 4010"));
