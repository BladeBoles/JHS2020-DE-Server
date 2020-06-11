/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const Service = require('./services')

const app = express();

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.get('/profiles', (req, res, next) => {
  const knexInstance = req.app.get('db')
  Service.getAccounts(knexInstance)
    .then(result => {
      res.json(result)
    })
    .catch(next)
})

app.get('/characters', (req, res, next) => {
  const knexInstance = req.app.get('db')
  Service.getCharacters(knexInstance)
    .then(result => {
      res.json(result)
    })
    .catch(next)
})

app.get('/portfolios', (req, res, next) => {
  const knexInstance = req.app.get('db')
  Service.getPortfolios(knexInstance)
    .then(result => {
      res.json(result)
    })
    .catch(next)
})

app.get('/skills', (req, res, next) => {
  const knexInstance = req.app.get('db')
  Service.getSkills(knexInstance)
    .then(result => {
      res.json(result)
    })
    .catch(next)
})

app.get('/stats', (req, res, next) => {
  const knexInstance = req.app.get('db')
  Service.getStats(knexInstance)
    .then(result => {
      res.json(result)
    })
    .catch(next)
})

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (process.env.NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});
  
module.exports = app;