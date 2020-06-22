const express = require('express');
const { json, urlencoded } = require('body-parser');
const connect = require('./connect');
const morgan = require('morgan');
const cors = require('cors');
const csp = require('helmet-csp');
require("dotenv").config();


const dayRouter = require('./Routes');

const app = express();
const corsOptions = ['http://localhost:3789', 'http://localhost:3789/day'];

app.use(cors(corsOptions));
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(morgan('dev'));
app.disable('etag');

/* app.use(helmet()); 
   app.use(csp({
  // Specify directives as normal.
  directives: {
    defaultSrc: ["'self'", 'default.com'],
    scriptSrc: ["'self'", "'unsafe-inline'"],
    styleSrc: ['style.com'],
    fontSrc: ["'self'", 'fonts.com'],
    imgSrc: ['img.com', 'data:'],
    sandbox: ['allow-forms', 'allow-scripts'],
    reportUri: '/report-violation',
    objectSrc: ["'none'"],
    upgradeInsecureRequests: true,
    workerSrc: false  // This is not set.
  },  */

app.use('/api', dayRouter);


const PORT = process.env.PORT || 3000;
const uriA = process.env.DB_CONN;

const mongoose = require('mongoose');


connect(uriA)
  .then(() => app.listen(PORT, () => {
    console.log(`server on http://localhost:${PORT}`)
  }))
  .catch(e => console.error(e))

