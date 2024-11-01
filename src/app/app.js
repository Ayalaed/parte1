const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser');
const path = require('path');

const router = require('./router/router');

const app = express();

const staticDir = path.join(__dirname, '..', 'public'); 

app.set("port", process.env.PORT || 80);
app.set('views', path.join(__dirname, '..', 'public', 'view'));
app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));
app.use(express.static(staticDir)); 
app.use(router);



module.exports = app;