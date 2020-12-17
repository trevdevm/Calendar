const express = require('express');
const { json, urlencoded } = require('body-parser');
const connect = require('./connect');
const mongoose = require('mongoose');
const morgan = require('morgan');
const winston = require('./config/winston');
const cors = require('cors');
const helmet = require('helmet');
require("dotenv").config();

const dayRouter = require('./Routes');


const app = express();
app.use(morgan('combined', { stream: winston.stream }));
const corsOptions = [process.env.CAL_URL, process.env.ROUTE1, process.env.ROUTE2];

const PORT = process.env.PORT || 3000;
const uriA = process.env.DB_CONN;
const baseUrl = process.env.BASE_URL;

app.use(cors(corsOptions));
app.use(urlencoded({ extended: true }));
app.use(json());

app.use(helmet());
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'", process.env.SHORT_BASE],
    scriptSrc: ["'self'"],
    styleSrc: ["'self'", 'fonts.googleapis.com'],
    fontSrc: ["'self'", 'fonts.gstatic.com'],
    imgSrc: ["'self'"],
    sandbox: ['allow-forms', 'allow-scripts'],
    reportUri: '/report-violation',
    objectSrc: ["'none'"],
    upgradeInsecureRequests: true,
    workerSrc: false
  }
}));


app.use('/api', dayRouter);

app.all('*', (req, res) => {
  const mess = `Can't find ${baseUrl}${req.originalUrl} on this server!`;
  winston.error(`${mess} 404`);
  res.status(404).send(mess);
});


app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).send(`Sorry we are currently experiencing technical issues. Stop back later to check out this site! ${err.message}`);
})

connect(uriA)
  .then(() =>
    app.listen(PORT, () => {
      winston.info(`server on http://localhost:${PORT} :)`);
      process.send('ready');
    }))
  .catch(err => {
    winston.error(`${err.status} - ${err.message}`);
    process.exit(1);
  })

mongoose.connection.on('error', (err) => {
  winston.error(`${err}`);
})

process.on('SIGINT', () => {
  winston.info("Graceful Shutdown.");
  mongoose.connection.close(false, (err) => {
    winston.info("mongoose connect closing.");
    process.exit(err ? 1 : 0);
  })
})

process.on('unhandledRejection', err => {
  winston.error(`${err.status} - ${err.message} unhandled rejection!`);
  mongoose.connection.close(() => {
    winston.info("mongoose connect closed.")
  })
  console.error(`unhandled rejection! ${err.message} shutting down`);

  process.exit(1);
})
