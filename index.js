const express = require('express');
require('dotenv').config();
const router = require('./src/routes');
const app = express();
var bodyParser = require('body-parser')
const port = process.env.PORT || 8000;

// middlewares
app.use(router);
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.listen(port,()=>console.log(`Server running on port: ${port}`));
