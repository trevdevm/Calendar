const express = require('express');
const { json, urlencoded } = require('body-parser');
const connect = require('./connect');
const mongoose = require('mongoose');
const morgan = require('morgan');
//const winston = require('./config/winston');
const cors = require('cors');
const helmet = require('helmet');
require("dotenv").config();

const dayRouter = require('./Routes');


const app = express();
//app.use(morgan('combined', { stream: winston.stream }));
app.use(morgan('dev'));
const corsOptions = ['http://localhost:3789', 'http://localhost:3789/day'];

const PORT = process.env.PORT || 3000;
const uriA = process.env.DB_CONN;

app.use(cors(corsOptions));
app.use(urlencoded({ extended: true }));
app.use(json());

app.use(helmet());
/*app.use(helmet.contentSecurityPolicy({
  // Specify directives as normal.
  directives: {
    defaultSrc: ["'self'", 'devmunns.site'],
    scriptSrc: ["'self'", "'unsafe-inline'"],
    styleSrc: ['self', 'fonts.googleapis.com'],
    fontSrc: ["'self'", 'fonts.gstatic.com'],
    imgSrc: ['self'],
    sandbox: ['allow-forms', 'allow-scripts'],
    reportUri: '/report-violation',
    objectSrc: ["'none'"],
    upgradeInsecureRequests: true,
    workerSrc: false  // This is not set.
  }
}));*/


app.use('/api', dayRouter);

app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server!`
  });
});


/*app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).send(err.message);
})*/

connect(uriA)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server on http://localhost:${PORT} :)`)
    }))
  .catch(err => {
    //winston.error(`${err.status} - ${err.message}`);
    console.log(`${err.message}`);
    process.exit(1);
  })

mongoose.connection.on('error', (err) => {
  console.log(`${err}`);
})

process.on('SIGINT', () => {
  console.log("Graceful Shutdown.");
  mongoose.connection.close(false, (err) => {
    console.log("mongoose connect closing.");
    process.exit(err ? 1 : 0);
  })
})

process.on('unhandledRejection', err => {
  //winston.error(`${err.status} - ${err.message} unhandled rejection!`);
  mongoose.connection.close(() => {
    console.log("mongoose connect closed.")
  })
  console.error(`unhandled rejection! ${err.message} shutting down`);

  process.exit(1);
})
