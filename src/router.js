const express = require('express');
const jobHuntService = require('./services');
const jobHuntRouter = express.Router();
const jsonParser = express.json();

jobHuntRouter
  .route('/profiles')
  .get((req, res, next) => {
    jobHuntService.getAccounts(req.app.get('db'))
      .then(profiles => res.json(profiles))
      .catch(next)
  })
  .post((req, res, next) => {
    const { account_name } =  req.body;
    jobHuntService.createAccount(req.app.get('db'), account_name)
  })
jobHuntRouter
  .route('/characters')
  .get((req, res, next) => {
    jobHuntService.getCharacters(req.app.get('db'))
      .then(characters => res.json(characters))
      .catch(next)
  });

jobHuntRouter
  .route('/portfolios')
  .get((req, res, next) => {
    jobHuntService.getPortfolios(req.app.get('db'))
      .then(portfolios => res.json(portfolios))
      .catch(next)
  });

jobHuntRouter
  .route('/skills')
  .get((req, res, next) => {
    jobHuntService.getSkills(req.app.get('db'))
      .then(skills => res.json(skills))
      .catch(next)
  });

jobHuntRouter
  .route('/stats')
  .get((req, res, next) => {
    jobHuntService.getStats(req.app.get('db'))
      .then(stats => res.json(stats))
      .catch(next)
  });

module.exports = jobHuntRouter