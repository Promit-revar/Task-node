const express = require('express');
require('dotenv').config();
const router = require('./src/routes');
const app = express();
const port = process.env.PORT || 8000;

// middlewares
app.use(router);
app.use(express.json());

app.listen(port,()=>console.log(`Server running on port: ${port}`));
