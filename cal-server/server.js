const express = require('express');
const { json, urlencoded } = require('body-parser');
const connect = require('./connect');
const morgan = require('morgan');
const cors = require('cors');
require("dotenv").config();


const dayRouter = require('./Routes');

const app = express();
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(morgan('dev'));
app.disable('etag');

app.use('/api', dayRouter);


const PORT = 3000;
const uri = process.env.DB_CONN;
const mongoose = require('mongoose');


connect(uri)
  .then(() => app.listen(PORT, () => {
    console.log(`server on http://localhost:${PORT}`)
  }))
  .catch(e => console.error(e))

